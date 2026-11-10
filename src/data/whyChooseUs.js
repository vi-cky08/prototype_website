
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

// ======================================
// WHY CHOOSE US
// ======================================

export const reasons = {
  title: 'Why clients prefer us',
  subtitle: 'Built on Engineering. Driven by Results.',

  items: [
    {
      icon: ShieldCheck,
      title: 'DFMA First',
      text: 'Designed for manufacturing from day one.',
    },
    {
      icon: SquarePen,
      title: 'ASME GD&T Standards',
      text: 'Engineering-grade documentation.',
    },
    {
      icon: Printer,
      title: 'Rapid Prototyping',
      text: 'Validate before investment.',
    },
    {
      icon: Hexagon,
      title: 'Tooling Knowledge',
      text: 'Moulds, Dies, Jigs & Fixtures.',
    },
    {
      icon: ScanSearch,
      title: 'Inspection & Testing',
      text: 'Verification before deployment.',
    },
    {
      icon: Network,
      title: 'Production Network',
      text: 'Curated manufacturing partners.',
    },
  ],
}

// ======================================
// ENGINEERING JOURNEY
// ======================================

export const journey = {
  eyebrow: 'Our Engineering Journey',
  title: 'End-to-End Engineering Solutions',

  subtitle:
    'From concept to production, we manage the entire journey for you.',

  steps: [
    {
      icon: Lightbulb,
      title: 'Ideation',
      items: ['Concept Design', 'Design Thinking', 'Feasibility Study'],
    },
    {
      icon: Monitor,
      title: 'Design',
      items: ['3D CAD', '2D Drawings', 'GD&T'],
    },
    {
      icon: Settings,
      title: 'Analysis',
      items: ['FEA / CFD', 'Simulation', 'Validation'],
    },
    {
      icon: Box,
      title: 'Prototype',
      items: ['3D Printing', 'Functional Test', 'Iteration'],
    },
    {
      icon: ClipboardCheck,
      title: 'Testing',
      items: ['Performance', 'Durability', 'Compliance'],
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      items: ['Tooling', 'Vendor Support', 'Production'],
    },
    {
      icon: Rocket,
      title: 'Launch',
      items: ['Documentation', 'Assembly Support', 'Market Ready'],
    },
  ],
}

// ======================================
// IMPORT COMPANY IMAGES
// ======================================

const logoFiles = import.meta.glob(
  '../assets/*.{png,jpg,jpeg,svg,webp,PNG,JPG,JPEG,SVG,WEBP}',
  {
    eager: true,
    import: 'default',
  }
)

// ======================================
// COMPANY NAMES AND IMAGE PATHS
// ======================================

const companyList = [
  {
    name: 'Shah Plaste Moulders',
    file: 'SPMPL.png',
  },
  {
    name: 'Sensovision',
    file: 'SensoVision.png',
  },
  {
    name: 'BaisCo',
    file: 'Baisco.png',
  },
  {
    name: 'AVIGHNA',
    file: 'AVIGHNA.png',
  },
  {
    name: 'ASC Center',
    file: 'ASC-Center.png',
  },
  {
    name: 'Kidwai Hospital',
    file: 'KIDWAI-MEMORIAL.png',
  },
  {
    name: 'ITC Infotech',
    file: 'Enduring.png',
  },
  {
    name: 'elmec',
    file: 'LEADSPACE.png',
  },
  {
    name: 'HOMAG',
    file: 'HOMAG.png',
  },
  {
    name: 'Your Tenth Company',
    file: 'Etm.png',
  },
]

// ======================================
// TRUSTED CLIENTS
// ======================================

export const clients = {
  title: 'Trusted By',

  subtitle:
    'Leading companies who trust our engineering expertise.',

  logos: companyList.map((company) => {
    const imagePath = `../assets/${company.file}`

    return {
      name: company.name,
      src: logoFiles[imagePath],
    }
  }),
}
