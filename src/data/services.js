
import enclosures from '../assets/Enclosures1.png';
import jigsFixture from '../assets/JigsFixture1.png';
import precision from '../assets/Precision.png';
import guards from '../assets/Guards1.png';

import packingTooling from '../assets/packing-tooling.jpeg';
import jaws from '../assets/Soft-jaws.png';
import Automotive from '../assets/Automotive-prototype.jpeg';
import Printed from '../assets/3d-printing.png';
import welding from '../assets/Welding.png';
import inspectionGauge from '../assets/inspection-guages.png';
import FoodProcessing from '../assets/food-processing.png';
import industrialProduct from '../assets/Industrial-Product.png';
import specialMachine from '../assets/SpecialMachine.png';


export const servicesIntro = {
  eyebrow: 'What We Build',
  title: 'Our Services',
  subtitle:
    'Custom engineered products and tooling, designed for manufacturing and built to perform.',
};

// Add or remove services freely.
// image displays the relevant engineering photograph.
// products displays the service tags.
export const services = [
  {
    image: enclosures,
    title: 'Industrial Electrical/Electronics Enclosures',
    description:
      'Custom enclosures and housings for industrial controls and devices.',
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
    image: jigsFixture,
    title: 'Jigs and Fixtures',
    description:
      'Precision jigs and fixtures for assembly, machining and inspection.',
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
    image: Automotive,
    title: 'Automotive Prototype Body Parts',
    description:
      'Prototype interior and body components for automotive development.',
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
    image: guards,
    title: 'Machine Guards and Covers',
    description:
      'Protective guards and covers for safe, reliable machine operation.',
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
    image: inspectionGauge,
    title: 'Inspection Gauges',
    description:
      'Gauges and checking fixtures for dimensional verification.',
    products: [
      'Go/no-go gauges',
      'Profile gauges',
      'Hole-position gauges',
      'Assembly verification gauges',
      'Component checking fixtures',
      'Dimensional inspection fixtures',
    ],
  },

  {
    image: packingTooling,
    title: 'Packaging and Material-Handling Tooling',
    description:
      'Custom tooling for packaging lines and material handling.',
    products: [
      'Packaging fixtures',
      'Material-handling trays',
      'Product positioning tools',
      'Conveyor components',
      'Custom packaging tools',
    ],
  },

  {
    image: jaws,
    title: 'CNC/Machining Soft Jaws',
    description:
      'Workholding solutions for accurate, repeatable machining.',
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
    image: welding,
    title: 'Welding Fixtures',
    description:
      'Fixtures that hold parts in position for consistent, accurate welding.',
    products: [
      'Welding positioning fixtures',
      'Assembly fixtures',
      'Clamping fixtures',
      'Custom welding tools',
    ],
  },

  {
    image: Printed,
    title: '3D-Printed Replacement Parts',
    description:
      'Fast, custom replacement parts produced by 3D printing.',
    products: [
      'Custom plastic parts',
      'Prototype components',
      'Replacement brackets',
      'Machine components',
    ],
  },

  {
    image: FoodProcessing,
    title: 'Food-Processing Machine Components',
    description:
      'Custom components for food-processing and packaging machines.',
    products: [
      'Product guides',
      'Funnels',
      'Portioning components',
      'Moulds',
      'Product holders',
      'Conveyor guides',
      'Change parts',
      'Cleaning tools',
    ],
  },

  {
    image: industrialProduct,
    title: 'Industrial Product Design & Engineering',
    description:
      'Concepts developed into detailed, manufacturing-ready engineering designs.',
    products: [
      'Concept development & 3D CAD',
      'Electrical/electronics enclosures',
      'Housings, covers & brackets',
      'Jigs, fixtures & custom tools',
      'DFM consultation',
      'Assembly design, drawings & BOM',
      'Prototype development',
    ],
  },

  {
    image: specialMachine,
    title: 'Special Purpose Machine Design & Development',
    description:
      'Custom machines designed around your process and production goals.',
    products: [
      'Machine concept development',
      '3D CAD & assembly design',
      'Automation & motion systems',
      'Jigs, fixtures & handling systems',
      'Pneumatic & mechanical integration',
      'Drawings & BOM preparation',
      'Prototype & manufacturing coordination',
    ],
  },
];

export const servicesCta = {
  text: 'Need something custom? Tell us what you need.',
  label: 'Start Your Project',
  to: '/contact',
};
