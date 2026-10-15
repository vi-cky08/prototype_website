// Single source of truth for business contact details. Empty fields are hidden across the site.
export const CONTACT = {
  companyName: 'Prototype Design',
  legalName: 'GICE Design & Development Pvt Ltd',
  addressLines: [
    '1024, 13th Main, 3rd Cross Rd,',
    'Doopanahalli, Bengaluru,',
    'Karnataka 560008, India',
  ],
  addressOneLine: '1024, 13th Main, 3rd Cross Rd, Doopanahalli, Bengaluru, Karnataka 560008',
  phoneDisplay: '+91 80500 98603',
  phoneTel: '+918050098603',
  whatsappNumber: '918050098603',
  email: '', // not provided yet
  workingHours: '', // not provided yet
}

export const mapsLink = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(CONTACT.addressOneLine)
export const mapsEmbed = 'https://maps.google.com/maps?q=' + encodeURIComponent(CONTACT.addressOneLine) + '&output=embed'
export const whatsappLink = `https://wa.me/${CONTACT.whatsappNumber}`

export const contactIntro = {
  eyebrow: 'Get In Touch',
  title: 'Start Your Project',
  subtitle: 'Tell us about your idea and we will help turn it into a manufacturable product.',
}

export const projectTypes = [
  'Product Design & Development',
  'DFMA Review',
  'Rapid Prototyping',
  'Tooling (Moulds, Dies, Jigs & Fixtures)',
  'Analysis & Validation (FEA / CFD)',
  'Production Support',
  'Other',
]
