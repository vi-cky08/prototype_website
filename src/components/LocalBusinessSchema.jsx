import { useEffect } from 'react'
import { CONTACT } from '../data/contact.js'

// JSON-LD LocalBusiness block built from CONTACT, so SEO data never drifts from the site.
// Email and hours are only included once they are filled in.
const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: CONTACT.companyName,
  legalName: CONTACT.legalName,
  telephone: CONTACT.phoneDisplay,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1024, 13th Main, 3rd Cross Rd, Doopanahalli',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560008',
    addressCountry: 'IN',
  },
  ...(CONTACT.email && { email: CONTACT.email }),
  ...(CONTACT.workingHours && { openingHours: CONTACT.workingHours }),
}

export default function LocalBusinessSchema() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
    return () => script.remove()
  }, [])
  return null
}
