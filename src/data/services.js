import { Car, CircuitBoard, Cog, Flame, Package, Printer, Ruler, ShieldCheck, UtensilsCrossed, Wrench } from 'lucide-react'

export const servicesIntro = {
  eyebrow: 'What We Build',
  title: 'Our Services',
  subtitle: 'Custom engineered products and tooling, designed for manufacturing and built to perform.',
}

// Add, remove or reorder services freely; the grid adapts to any number of cards.
// A service with an empty `products` array shows only its title and description.
// Cards show the first 6 products and a "+N more" toggle for the rest.
export const services = [
  {
    icon: CircuitBoard,
    title: 'Industrial Electrical/Electronics Enclosures',
    description: 'Custom enclosures and housings for industrial controls and devices.',
    products: [
      'PLC/controller enclosures',
      'Sensor housings',
      'IoT device enclosures',
      'Power-supply boxes',
      'Junction boxes',
      'Display/HMI housings',
      'Control-panel accessories',
      'Cable-management boxes',
    ],
  },
  {
    icon: Wrench,
    title: 'Jigs and Fixtures',
    description: 'Precision jigs and fixtures for assembly, machining and inspection.',
    products: [
      'Assembly jigs',
      'Drilling jigs',
      'Positioning fixtures',
      'Inspection fixtures',
      'Welding soft fixtures',
      'Component holding fixtures',
      'Gluing fixtures',
      'Press-fit fixtures',
      'Alignment tools',
      'Inspection gauges',
    ],
  },
  {
    icon: Car,
    title: 'Automotive Prototype Body Parts',
    description: 'Prototype interior and body components for automotive development.',
    products: [
      'Dashboard prototypes',
      'Console prototypes',
      'Door-trim prototypes',
      'Instrument-panel components',
      'Grilles',
      'Air vents',
      'Covers',
      'Bezels',
      'Sensor housings',
      'Interior trim',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Machine Guards and Covers',
    description: 'Protective guards and covers for safe, reliable machine operation.',
    products: [
      'Motor covers',
      'Belt guards',
      'Gear covers',
      'Sensor covers',
      'Cable covers',
      'Fan guards',
      'Machine access covers',
      'Protective caps',
      'Safety covers',
      'Operator-interface housings',
    ],
  },
  {
    icon: Ruler,
    title: 'Inspection Gauges',
    description: 'Gauges and checking fixtures for dimensional verification.',
    products: [
      'Go/no-go gauges',
      'Profile gauges',
      'Hole-position gauges',
      'Assembly verification gauges',
      'Component checking fixtures',
      'Dimensional inspection fixture',
    ],
  },
  {
    icon: Package,
    title: 'Packaging and Material-Handling Tooling',
    description: 'Custom tooling for packaging lines and material handling.',
    products: [],
  },
  {
    icon: Cog,
    title: 'CNC/Machining Soft Jaws',
    description: 'Workholding solutions for accurate, repeatable machining.',
    products: [
      'Soft jaws',
      'Custom workholding fixtures',
      'Drilling fixtures',
      'Part locators',
      'Nesting fixtures',
      'Inspection holders',
    ],
  },
  {
    icon: Flame,
    title: 'Welding Fixtures',
    description: 'Fixtures that hold parts in position for consistent, accurate welding.',
    products: [],
  },
  {
    icon: Printer,
    title: '3D-Printed Replacement Parts',
    description: 'Fast, custom replacement parts produced by 3D printing.',
    products: [],
  },
  {
    icon: UtensilsCrossed,
    title: 'Food-Processing Machine Components',
    description: 'Custom components for food-processing and packaging machines.',
    products: [
      'Product guides',
      'Funnels',
      'Portioning components',
      'Moulds',
      'Product holders',
      'Conveyor guides',
      'Change parts',
      'Cleaning tools',
      'Alignment fixtures',
      'Packaging fixtures',
    ],
  },
]

export const servicesCta = {
  text: 'Need something custom? Tell us what you need.',
  label: 'Start Your Project',
  to: '/contact',
}
