import waterPhantom from '../assets/project-water-phantom.png'
import evTrike from '../assets/project-ev-trike.png'
import packingMachine from '../assets/project-packing-machine.png'
import gearbox from '../assets/project1-transmision-gearbox.png'
import droneBox from '../assets/project-smart-drone-box.png'

export const projectsIntro = {
  eyebrow: 'The Engineering Journey',
  title: 'Featured Engineering Projects',
  subtitle: 'Real challenges. Practical solutions. Measurable results.',
}

export const projects = [
  {
    id: 'water-phantom',
    title: 'Water Phantom',
    category: 'Medical',
    workType: 'Product Development',
    image: waterPhantom,
    challenge: 'Achieving accurate radiation dose measurement for reliable cancer treatment simulation.',
    solution: 'Precision CAD design, engineering validation, and rapid prototyping.',
    result: 'Improved measurement accuracy, simulation reliability, and usability',
  },
  {
    id: 'ev-trike',
    title: 'EV Trike',
    category: 'Automotive',
    workType: 'Product Development',
    image: evTrike,
    challenge: 'Developing a lightweight electric delivery vehicle with improved efficiency and extended driving range.',
    solution: 'Custom vehicle design, lightweight structural engineering, and optimized thermal management.',
    // Best reading of a blurry line in the reference image; please confirm.
    result: 'Targeted 130 km driving range with improved energy efficiency and performance.',
  },
  {
    id: 'packing-machine',
    title: 'Packing Machine',
    category: 'Packaging',
    workType: 'SPM',
    image: packingMachine,
    challenge: 'tube packing with reliability and size variation.',
    solution: 'Mechanical + electrical integration.',
    result: 'compact and repeatable fast with variable sizes and liquids solids etc.',
  },
  {
    id: 'transmission-gearbox',
    title: 'Transmission Gearbox',
    category: 'Industrial',
    workType: 'Product Development',
    image: gearbox,
    challenge: 'Achieving high precision, strength, and long-term durability in gearbox performance.',
    solution: 'Developed an optimized gearbox design with precision engineering and custom tooling.',
    result: 'Enhanced operational efficiency, improved durability, and reliable transmission performance.',
  },
  {
    id: 'smart-drone-box',
    title: 'Smart Drone Box',
    category: 'Aerospace',
    workType: 'Product Development',
    image: droneBox,
    challenge: 'Designing a lightweight, rugged, and secure enclosure to protect drone components in demanding field conditions.',
    solution: 'Created a customized enclosure using 3D design and rapid 3D printing for functional validation.',
    result: 'Delivered a field-ready, cost-effective enclosure with improved protection and practical usability.',
  },
]
