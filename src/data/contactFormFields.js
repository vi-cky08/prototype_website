// Enquiry form on /contact. Edit labels, required flags, limits and validators here;
// ContactForm renders the sections in this order and builds the WhatsApp message from them.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MOBILE = /^(?:\+91|0)?[6-9]\d{9}$/
const PAN = /^[A-Z]{5}[0-9]{4}[A-Z]$/
const GST = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/
const PIN = /^\d{6}$/

const alnumUpper = (v) => v.toUpperCase().replace(/[^A-Z0-9]/g, '')

export const projectTypeOptions = ['Product Development', 'SPM', 'Jigs and Fixtures', 'Enclosures', 'Prototyping', 'Other']

// type: text | email | tel | textarea | select
// format(value) runs on every keystroke; validate(trimmedValue) returns an error message or ''.
// `required` is checked (message: requiredMessage or "Please enter the <label>.") before `validate`, and `validate` only runs on non-empty values.
// `messageLabel` is the line label in the WhatsApp message.
export const fields = {
  directorName: {
    label: 'Director / Proprietor Name',
    messageLabel: 'Director / Proprietor',
    required: true,
    autoComplete: 'off',
    maxLength: 80,
  },
  contactName: {
    label: 'Name of Point of Contact',
    messageLabel: 'Point of Contact',
    required: true,
    autoComplete: 'name',
    maxLength: 80,
  },
  designation: {
    label: 'Designation',
    messageLabel: 'Designation',
    autoComplete: 'organization-title',
    maxLength: 60,
  },
  email: {
    label: 'Email ID',
    messageLabel: 'Email',
    required: true,
    type: 'email',
    autoComplete: 'email',
    maxLength: 100,
    validate: (v) => (EMAIL.test(v) ? '' : 'Please enter a valid email address.'),
  },
  mobile: {
    label: 'Mobile Number',
    messageLabel: 'Mobile',
    required: true,
    type: 'tel',
    autoComplete: 'tel',
    inputMode: 'tel',
    maxLength: 16,
    placeholder: '+91 98765 43210',
    validate: (v) =>
      MOBILE.test(v.replace(/[\s-]/g, '')) ? '' : 'Please enter a valid 10-digit Indian mobile number (starting 6-9).',
  },
  companyName: {
    label: 'Name of Company',
    messageLabel: 'Company',
    required: true,
    autoComplete: 'organization',
    maxLength: 100,
  },
  pan: {
    label: 'PAN Number of Company',
    messageLabel: 'PAN',
    required: true,
    autoComplete: 'off',
    maxLength: 10,
    placeholder: 'ABCDE1234F',
    format: alnumUpper,
    validate: (v) => (PAN.test(v) ? '' : 'Please enter a valid PAN (e.g. ABCDE1234F).'),
  },
  address: {
    label: 'Registered Address of Company',
    messageLabel: 'Registered Address',
    required: true,
    type: 'textarea',
    rows: 4,
    autoComplete: 'street-address',
    maxLength: 250,
    counter: true,
  },
  city: { label: 'City', messageLabel: 'City', autoComplete: 'address-level2', maxLength: 50 },
  state: { label: 'State', messageLabel: 'State', autoComplete: 'address-level1', maxLength: 50 },
  pinCode: {
    label: 'Pin Code',
    messageLabel: 'Pin Code',
    autoComplete: 'postal-code',
    inputMode: 'numeric',
    maxLength: 6,
    compact: true, // short input when paired, leaving room for the field beside it
    format: (v) => v.replace(/\D/g, ''),
    validate: (v) => (PIN.test(v) ? '' : 'Pin Code must be exactly 6 digits.'),
  },
  gst: {
    label: 'GST Number',
    labelNote: '(if available)',
    messageLabel: 'GST',
    autoComplete: 'off',
    maxLength: 15,
    placeholder: '22ABCDE1234F1Z5',
    format: alnumUpper,
    validate: (v) => (GST.test(v) ? '' : 'Please enter a valid 15-character GST number.'),
  },
  projectType: {
    label: 'Project Type',
    messageLabel: 'Project Type',
    required: true,
    type: 'select',
    requiredMessage: 'Please choose a project type.',
    placeholder: 'Select project type',
    options: projectTypeOptions,
  },
  description: {
    label: 'Project Description',
    messageLabel: 'Description',
    required: true,
    type: 'textarea',
    rows: 5,
    maxLength: 600,
    counter: true,
    placeholder: 'Tell us about your product idea, timeline and requirements…',
  },
}

// Layout: each column is a list of rows; a row is a field name or a pair of names shown side by side.
export const sections = [
  {
    number: 1,
    title: 'Contact & Company Details',
    columns: [
      ['directorName', 'contactName', 'designation', 'email', 'mobile'],
      ['companyName', 'pan', 'address', ['city', 'state'], ['pinCode', 'gst']],
    ],
  },
  {
    number: 2,
    title: 'Project Details',
    columns: [['projectType', 'description']],
  },
]

export const fieldOrder = sections.flatMap((s) => s.columns.flat(2))

export function validateField(name, value) {
  const f = fields[name]
  const v = value.trim()
  if (!v) return f.required ? (f.requiredMessage ?? `Please enter the ${f.label}.`) : ''
  return f.validate ? f.validate(v) : ''
}
