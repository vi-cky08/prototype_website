// Content for /pricing. Values are shown exactly as stored; nothing is computed in code.

export const pricingIntro = {
  eyebrow: 'Pricing',
  title: 'Engineering Packages',
  subtitle: 'Choose the package that fits your project. Bundled hours cost less than buying each service separately.',
}

// TODO: confirm Dedicated standaloneValue (1,49,700) with the owner before launch.
export const plans = [
  { id: 'starter', name: 'Starter', fee: 18000, cadHours: 5, fdmHours: 5, conceptHours: 1, siteVisits: 1, standaloneValue: 19350, savings: 1350, savingsPercent: 6.98 },
  { id: 'professional', name: 'Professional', fee: 36000, cadHours: 15, fdmHours: 10, conceptHours: 1, siteVisits: 1, standaloneValue: 42150, savings: 6150, savingsPercent: 14.59 },
  { id: 'advanced', name: 'Advanced', fee: 68000, cadHours: 30, fdmHours: 25, conceptHours: 2, siteVisits: 2, standaloneValue: 84600, savings: 16600, savingsPercent: 19.62 },
  { id: 'business', name: 'Business', fee: 92000, cadHours: 45, fdmHours: 35, conceptHours: 2, siteVisits: 2, standaloneValue: 118950, savings: 26950, savingsPercent: 22.66 },
  { id: 'dedicated', name: 'Dedicated', fee: 108000, cadHours: 60, fdmHours: 45, conceptHours: 3, siteVisits: 3, standaloneValue: 149700, savings: 41700, savingsPercent: 27.86 },
]

export const additionalRates = [
  { label: 'One-time conceptualization rate (per hour)', amount: 2000 },
  { label: 'Additional CAD hours rate (per hour)', amount: 2250 },
  { label: 'Additional FDM printing rate (per hour)', amount: 60 },
  { label: 'Onsite engineering support', amount: 5800 },
  { label: 'CNC machining and fabrication rate (per hour)', amount: 1500 },
]

export const notes = [
  "All material is to be purchased by the client, approved by Prototype Design.",
  'All packing and transportation is extra.',
  'FDM post-processing and painting are separate.',
  "All conceptualization rates apply within 20 km of Prototype Design's premises; transportation fee is extra.",
]

export const pricingCta = {
  text: 'Not sure which package fits? Tell us about your project.',
  label: 'Start Your Project',
  to: '/contact',
}

const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })
export const formatINR = (n) => inr.format(n)
export const formatPercent = (n) => `${n.toFixed(2)}%`

// Comparison rows, in display order. `highlight` marks the emphasised savings row.
export const planRows = [
  { key: 'cadHours', label: 'CAD hours included' },
  { key: 'fdmHours', label: 'FDM hours included' },
  { key: 'conceptHours', label: 'Concept consultation hours' },
  { key: 'siteVisits', label: 'Inspection site visits' },
  { key: 'standaloneValue', label: 'Total stand-alone value', format: formatINR },
  { key: 'savings', label: 'Savings vs individual purchase', format: formatINR },
  { key: 'savingsPercent', label: 'Savings percentage', format: formatPercent, highlight: true },
]

export const planContactLink = (plan) => `/contact?plan=${plan.id}`

// Sentence pre-filled into the contact form's Project Description for /contact?plan=<id>.
export function planEnquiry(id) {
  const plan = plans.find((p) => p.id === id)
  return plan ? `I am interested in the ${plan.name} package.` : ''
}
