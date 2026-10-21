import {
  Box,
  ClipboardCheck,
  Factory,
  Hexagon,
  Lightbulb,
  Monitor,
  Network,
  Printer,
  Rocket,
  ScanSearch,
  Settings,
  ShieldCheck,
  SquarePen,
} from 'lucide-react'

export const reasons = {
  title: 'Why clients prefer us',
  subtitle: 'Built on Engineering. Driven by Results.',
  items: [
    { icon: ShieldCheck, title: 'DFMA First', text: 'Designed for manufacturing from day one.' },
    { icon: SquarePen, title: 'ASME GD&T Standards', text: 'Engineering-grade documentation.' },
    { icon: Printer, title: 'Rapid Prototyping', text: 'Validate before investment.' },
    { icon: Hexagon, title: 'Tooling Knowledge', text: 'Moulds, Dies, Jigs & Fixtures.' },
    { icon: ScanSearch, title: 'Inspection & Testing', text: 'Verification before deployment.' },
    { icon: Network, title: 'Production Network', text: 'Curated manufacturing partners.' },
  ],
}

export const journey = {
  eyebrow: 'Our Engineering Journey',
  title: 'End-to-End Engineering Solutions',
  subtitle: 'From concept to production, we manage the entire journey for you.',
  steps: [
    { icon: Lightbulb, title: 'Ideation', items: ['Concept Design', 'Design Thinking', 'Feasibility Study'] },
    { icon: Monitor, title: 'Design', items: ['3D CAD', '2D Drawings', 'GD&T'] },
    { icon: Settings, title: 'Analysis', items: ['FEA / CFD', 'Simulation', 'Validation'] },
    { icon: Box, title: 'Prototype', items: ['3D Printing', 'Functional Test', 'Iteration'] },
    { icon: ClipboardCheck, title: 'Testing', items: ['Performance', 'Durability', 'Compliance'] },
    { icon: Factory, title: 'Manufacturing', items: ['Tooling', 'Vendor Support', 'Production'] },
    { icon: Rocket, title: 'Launch', items: ['Documentation', 'Assembly Support', 'Market Ready'] },
  ],
}

// Logo placeholders. To use real artwork, add `logo: importedImage` to an entry.
// Every image in src/assets/companies/ becomes a logo in the Trusted By carousel, sorted by filename.
// Add or remove files there; no code change needed. Alt text comes from the filename.
const logoFiles = import.meta.glob('../assets/companies/*.{png,jpg,jpeg,svg,webp,PNG,JPG,JPEG,SVG,WEBP}', {
  eager: true,
  import: 'default',
})

const fileName = (path) => path.split('/').pop()

const logos = Object.keys(logoFiles)
  .sort((a, b) => fileName(a).localeCompare(fileName(b), undefined, { numeric: true, sensitivity: 'base' }))
  .map((path) => ({
    src: logoFiles[path],
    name: fileName(path).replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim(),
  }))

// Shown only while src/assets/companies/ has no images.
const placeholderLogos = [
  { name: 'Kidwai Hospital', short: 'KH' },
  { name: 'ITC Infotech', short: 'ITC' },
  { name: 'elmec', short: 'e' },
  { name: 'HOMAG', short: 'H' },
  { name: 'Shah Plaste Moulders', short: 'SP' },
  { name: 'Sensovision', short: 'S' },
  { name: 'BalsCo', short: 'B' },
  { name: 'Surendra Refrigerators', short: 'SR' },
  { name: 'ASC Center', short: 'A' },
]

export const clients = {
  title: 'Trusted By',
  subtitle: 'Leading companies who trust our engineering expertise.',
  logos: logos.length ? logos : placeholderLogos,
}
