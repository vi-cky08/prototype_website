import { useState } from 'react'
import { ChevronDown, CircleCheck, Send } from 'lucide-react'
import Button from './Button.jsx'
import { projectTypes } from '../data/contact.js'

const empty = { name: '', email: '', phone: '', company: '', projectType: '', message: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name.'
  if (!v.email.trim()) e.email = 'Please enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Please enter a valid email address.'
  if (v.phone.trim() && !/^[+()\d\s-]{7,20}$/.test(v.phone)) e.phone = 'Please enter a valid phone number.'
  if (!v.projectType) e.projectType = 'Please choose a project type.'
  if (v.message.trim().length < 10) e.message = 'Please tell us a little more (at least 10 characters).'
  return e
}

const inputCls = (err) =>
  `mt-1.5 w-full rounded-lg border bg-white min-h-12 px-4 py-3 text-base text-navy placeholder:text-[#a3adbb] transition focus:ring-4 focus:outline-none ${
    err ? 'border-danger focus:ring-danger/15' : 'border-line focus:border-primary focus:ring-primary/15'
  }`

function Field({ id, label, required, error, children }) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="text-[14px] font-semibold text-navy">
        {label}
        {required && <span className="text-danger"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[13px] text-danger">
          {error}
        </p>
      )}
    </div>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const submit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      document.getElementById(first)?.focus()
      return
    }
    // Front-end only: connect this to an email service or API endpoint before launch.
    setSent(true)
    setValues(empty)
  }

  const a11y = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: update,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    className: inputCls(errors[name]),
  })

  if (sent) {
    return (
      <div className="flex flex-col items-center py-12 text-center" role="status">
        <CircleCheck className="h-14 w-14 fill-success text-white" strokeWidth={2} aria-hidden="true" />
        <h3 className="mt-5 text-[22px] font-bold">Thank you! Your message has been sent.</h3>
        <p className="mt-2 max-w-sm">Our engineering team will review your project and get back to you within one working day.</p>
        <Button variant="outline" className="mt-7 w-full sm:w-auto" type="button" onClick={() => setSent(false)}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={submit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Field id="name" label="Name" required error={errors.name}>
        <input type="text" autoComplete="name" placeholder="Your full name" {...a11y('name')} />
      </Field>
      <Field id="email" label="Email" required error={errors.email}>
        <input type="email" autoComplete="email" placeholder="you@company.com" {...a11y('email')} />
      </Field>
      <Field id="phone" label="Phone" error={errors.phone}>
        <input type="tel" autoComplete="tel" placeholder="+91" {...a11y('phone')} />
      </Field>
      <Field id="company" label="Company" error={errors.company}>
        <input type="text" autoComplete="organization" placeholder="Company name" {...a11y('company')} />
      </Field>
      <div className="sm:col-span-2">
        <Field id="projectType" label="Project Type" required error={errors.projectType}>
          <div className="relative">
            <select
              {...a11y('projectType')}
              className={`${inputCls(errors.projectType)} appearance-none pr-10 ${values.projectType ? '' : 'text-[#a3adbb]'}`}
            >
              <option value="" disabled>
                Select a project type
              </option>
              {projectTypes.map((t) => (
                <option key={t} value={t} className="text-navy">
                  {t}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-4 mt-0.75 h-4 w-4 -translate-y-1/2 text-ink"
              aria-hidden="true"
            />
          </div>
        </Field>
      </div>
      <div className="sm:col-span-2">
        <Field id="message" label="Message" required error={errors.message}>
          <textarea rows={5} placeholder="Tell us about your product idea, timeline and requirements…" {...a11y('message')} />
        </Field>
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" className="w-full sm:w-auto">
          Send Message
          <Send className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </form>
  )
}
