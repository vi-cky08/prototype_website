import waterPhantom from '../assets/project-water-phantom.svg'
import evTrike from '../assets/project-ev-trike.svg'
import packingMachine from '../assets/project-packing-machine.svg'
import gearbox from '../assets/project-transmission-gearbox.svg'
import droneBox from '../assets/project-smart-drone-box.svg'

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
    image: waterPhantom,
    challenge: 'Accurate radiation therapy simulation.',
    solution: 'Precision design + rapid prototyping.',
    result: 'Improved accuracy & usability.',
  },
  {
    id: 'ev-trike',
    title: 'EV Trike',
    category: 'Automotive',
    image: evTrike,
    challenge: 'Lightweight, efficient delivery vehicle.',
    solution: 'Custom design + thermal management.',
    // Best reading of a blurry line in the reference image; please confirm.
    result: '0.6s to 18km, 130 km range.',
  },
  {
    id: 'packing-machine',
    title: 'Packing Machine',
    category: 'Packaging',
    image: packingMachine,
    challenge: 'Reliable, efficient packaging solution.',
    solution: 'Mechanical + electrical integration.',
    result: 'Increased productivity.',
  },
  {
    id: 'transmission-gearbox',
    title: 'Transmission Gearbox',
    category: 'Industrial',
    image: gearbox,
    challenge: 'High precision, durability.',
    solution: 'Optimized design + precision tooling.',
    result: 'Improved performance & reliability.',
  },
  {
    id: 'smart-drone-box',
    title: 'Smart Drone Box',
    category: 'Aerospace',
    image: droneBox,
    challenge: 'Rugged, lightweight, secure enclosure.',
    solution: 'Custom design + 3D printing.',
    result: 'Field ready, cost effective.',
  },
]
