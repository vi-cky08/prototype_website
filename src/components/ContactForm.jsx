import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CircleCheck, Send } from 'lucide-react'
import Button from './Button.jsx'
import FormField from './FormField.jsx'
import { CONTACT, whatsappLink } from '../data/contact.js'
import { planEnquiry } from '../data/pricing.js'
import { fieldOrder, fields, sections, validateField } from '../data/contactFormFields.js'

// wa.me links get unreliable past ~2000 characters; leave headroom.
const URL_MAX = 1800
// Left-hand label column (768px and up). Paired rows size their first cell from it.
const LABEL_W = '9.5rem'

const empty = Object.fromEntries(fieldOrder.map((name) => [name, '']))

function validateAll(values) {
  const errors = {}
  for (const name of fieldOrder) {
    const msg = validateField(name, values[name])
    if (msg) errors[name] = msg
  }
  return errors
}

// Trim by code points so emoji / non-Latin characters are never split in half.
const cut = (s, n) => {
  const chars = Array.from(s)
  return chars.length > n ? chars.slice(0, n).join('').trimEnd() + '…' : s
}

function buildWhatsAppUrl(values) {
  const v = Object.fromEntries(fieldOrder.map((name) => [name, values[name].trim()]))
  const line = (name) => `${fields[name].messageLabel}: ${v[name] || 'Not provided'}`
  const build = (description, address) => {
    const text = [
      `New Project Enquiry - ${CONTACT.companyName}`,
      '',
      'CONTACT & COMPANY DETAILS',
      ...['directorName', 'contactName', 'designation', 'email', 'mobile', 'companyName', 'pan'].map(line),
      `${fields.address.messageLabel}: ${address}`,
      ...['city', 'state', 'pinCode', 'gst'].map(line),
      '',
      'PROJECT DETAILS',
      line('projectType'),
      `${fields.description.messageLabel}: ${description}`,
    ].join('\n')
    return `${whatsappLink}?text=${encodeURIComponent(text)}`
  }

  // Inputs already cap these lengths; this only bites with heavily encoded (non-ASCII) text.
  let descLen = Array.from(v.description).length
  let addrLen = Array.from(v.address).length
  let url = build(v.description, v.address)
  while (url.length > URL_MAX && descLen > 20) {
    descLen -= 20
    url = build(cut(v.description, descLen), v.address)
  }
  while (url.length > URL_MAX && addrLen > 20) {
    addrLen -= 10
    url = build(cut(v.description, descLen), cut(v.address, addrLen))
  }
  return url
}

function SectionHeader({ number, title }) {
  return (
    <div className="flex items-center gap-3 border-b border-line bg-grey px-4 py-3 sm:px-5">
      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[4px] bg-navy text-[14px] font-bold text-white">
        {number}
      </span>
      <h3 className="text-[14px] font-bold tracking-[0.04em] text-navy uppercase">{title}</h3>
    </div>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  // Holds the WhatsApp URL after a successful submit; doubles as the "sent" flag.
  const [sentUrl, setSentUrl] = useState('')
  const plan = useSearchParams()[0].get('plan')

  // /contact?plan=<id> (from /pricing): pre-fill the description, but never over text already typed.
  useEffect(() => {
    const sentence = planEnquiry(plan)
    if (sentence) setValues((v) => (v.description ? v : { ...v, description: sentence }))
  }, [plan])

  const change = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }))
    // Re-check live only once a field is showing an error, so the message clears as soon as it's fixed.
    if (errors[name]) setErrors((er) => ({ ...er, [name]: validateField(name, value) }))
  }

  const blur = (name) => setErrors((er) => ({ ...er, [name]: validateField(name, values[name]) }))

  const submit = (e) => {
    e.preventDefault()
    const found = validateAll(values)
    setErrors(found)
    const first = fieldOrder.find((name) => found[name])
    if (first) {
      const el = document.getElementById(first)
      const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      el?.scrollIntoView({ block: 'center', behavior: smooth ? 'smooth' : 'auto' })
      el?.focus({ preventScroll: true })
      return
    }
    const url = buildWhatsAppUrl(values)
    // Called synchronously in the submit handler so browsers treat it as user-initiated.
    // With "noopener" window.open always returns null, so a blocked popup can't be detected;
    // the success screen always offers an "Open WhatsApp" link as the fallback.
    window.open(url, '_blank', 'noopener,noreferrer')
    setSentUrl(url)
    setValues(empty)
    setErrors({})
  }

  const renderField = (name, labelWidth = LABEL_W) => (
    <FormField
      key={name}
      name={name}
      field={fields[name]}
      value={values[name]}
      error={errors[name]}
      onChange={change}
      onBlur={blur}
      labelWidth={labelWidth}
    />
  )

  const renderRow = (row) =>
    Array.isArray(row) ? (
      <div
        key={row.join('-')}
        className={`grid gap-5 md:gap-x-4 ${
          fields[row[0]].compact
            ? 'md:grid-cols-[calc(var(--label-w)+0.75rem+5.5rem)_minmax(0,1fr)]'
            : 'md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]'
        }`}
        style={{ '--label-w': LABEL_W }}
      >
        {renderField(row[0])}
        {renderField(row[1], 'auto')}
      </div>
    ) : (
      renderField(row)
    )

  if (sentUrl) {
    return (
      <div className="flex flex-col items-center py-12 text-center" role="status">
        <CircleCheck className="h-14 w-14 text-success" strokeWidth={1.5} aria-hidden="true" />
        <h3 className="mt-5 text-[22px] font-bold">Almost done! Tap Send in WhatsApp.</h3>
        <p className="mt-2 max-w-sm">
          We opened WhatsApp with your enquiry filled in. Tap <strong>Send</strong> there to deliver it to our team at{' '}
          {CONTACT.phoneDisplay}.
        </p>
        <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button
            href={sentUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open WhatsApp (opens in a new tab)"
            className="w-full sm:w-auto"
          >
            Open WhatsApp
          </Button>
          <Button variant="outline" className="w-full sm:w-auto" type="button" onClick={() => setSentUrl('')}>
            Send Another Message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={submit} className="space-y-6">
      {sections.map((section) => (
        <fieldset key={section.number} className="min-w-0 overflow-hidden rounded-[4px] border border-line bg-white">
          <legend className="sr-only">{section.title}</legend>
          <SectionHeader number={section.number} title={section.title} />
          <div
            className={`grid ${
              section.columns.length > 1
                ? 'divide-y divide-line lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:divide-x lg:divide-y-0'
                : ''
            }`}
          >
            {section.columns.map((column, i) => (
              <div key={i} className="min-w-0 space-y-5 p-4 sm:p-5 lg:px-6">
                {column.map(renderRow)}
              </div>
            ))}
          </div>
        </fieldset>
      ))}
      <Button type="submit" className="w-full sm:w-auto">
        Send Message
        <Send className="h-4 w-4" aria-hidden="true" />
      </Button>
    </form>
  )
}
