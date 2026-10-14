import { Award, BadgeCheck, Briefcase, GraduationCap } from 'lucide-react'
import portrait from '../assets/director-portrait.svg'
import certificate from '../assets/chartered-certificate.svg'
import banner from '../assets/vision-mission-banner.svg'

export const director = {
  eyebrow: 'The Vision Behind Prototype Design',
  title: 'Meet The Technical Director',
  subtitle: 'Engineering | Manufacturing | Innovation',
  name: 'Er. A. Bharath',
  role: 'Technical Director | Chartered Engineer',
  image: portrait,
  imageAlt: 'Portrait of Er. A. Bharath, Technical Director',
  credentials: [
    { icon: Award, text: 'GTTC Graduate Tool & Die Maker' },
    { icon: BadgeCheck, text: 'AMIE Mechanical (AM-152329-0)' },
    { icon: GraduationCap, text: 'M.Tech Thermals' },
    { icon: Briefcase, text: 'MBA Production Management' },
  ],
  experience: ['Technical Director', 'Tool & Die making expertise', 'Engineering principles & practices'],
  specializations: ['Production Management', 'Thermal Engineering', 'SPM Development', 'Manufacturing Integration'],
  quote: [
    'Engineering is not creating drawings.',
    'Engineering is creating products that can be manufactured, assembled and sustained.',
  ],
}

export const charteredEngineer = {
  eyebrow: 'Engineering Credibility',
  title: 'What is a Chartered Engineer?',
  description:
    'A Chartered Engineer is an engineering professional recognized for technical competency, design validation capability and engineering judgement.',
  benefitsTitle: 'Benefits to Your Business',
  benefits: [
    'Better design decisions',
    'Reduced manufacturing risk',
    'Proper engineering calculations',
    'DFMA-focused development',
    'Improved product reliability',
    'Professional technical review',
  ],
  cta: 'Learn Why Chartered Engineering Matters',
  more: [
    'Chartered status is awarded by The Institution of Engineers (India) after a peer review of education, professional experience and engineering responsibility.',
    'For your product, this means calculations, drawings and design decisions are reviewed by someone accountable to a professional code of conduct, so problems are caught on paper instead of on the shop floor.',
  ],
  image: certificate,
  imageAlt: 'Chartered Engineer certificate from The Institution of Engineers (India) with an official seal',
}

export const visionMission = {
  image: banner,
  vision: {
    title: 'Our Vision',
    text: 'To bridge the gap between design and manufacturing through practical engineering and indigenous product development.',
  },
  mission: {
    title: 'Our Mission',
    text: 'To create manufacturable, scalable and commercially viable products through engineering excellence and DFMA principles.',
  },
}

export const companyIntro = {
  eyebrow: 'About Our Company',
  title: 'The Company',
  text: 'Established on the 2nd of November 2021 with the aim to organise and integrate the Design principles with manufacturing processes. Streamlining and organising the manufacturing processes to obtain a detailed inventory of machines and tools available at every OEM that will help us to Design for Manufacturing and Assembly (DFMA). We believe this will help us to produce highly precise and cost effective solutions in the crowded market space. Furthermore we intend to impart this knowledge to passionate individuals to enhance their skill and create a remarkable history in the future.',
  // Phrases rendered in bold navy inside the text above.
  highlights: ['2nd of November 2021', 'DFMA'],
}
