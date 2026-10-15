import { ClipboardList, Cog, Lightbulb, MapPin, UserRound } from 'lucide-react'
import heroImage from '../assets/hero-gearbox.svg'

export const hero = {
  eyebrow: 'Engineering Ideas into Real Products',
  titleLead: 'Why Choose',
  titleBrand: 'GICE',
  titleHighlight: 'Design & Development?',
  lead: 'Prototype Design is the engineering brand of GICE Design & Development Pvt Ltd.',
  body: 'We transform ideas into manufacturable products through Design, DFMA, Rapid Prototyping, Tooling, Validation and Production Support.',
  primaryCta: { label: 'Explore Our Engineering Process', to: '/why-choose-us' },
  secondaryCta: { label: 'View projects', to: '/projects' },
  image: heroImage,
  imageAlt: 'Machined metal gearbox part on a desk with a CAD model on the monitor behind',
}

export const stats = [
  { icon: ClipboardList, value: '2021', label: 'Established' },
  { icon: UserRound, value: 'Chartered', label: 'Engineer Led' },
  { icon: Lightbulb, value: '100+', label: 'Engineering Concepts' },
  { icon: Cog, value: 'Product Development', label: 'Focused' },
  { icon: MapPin, value: 'Bengaluru', label: 'India' },
]
