import { Box, CircleCheck } from 'lucide-react'
import solutionImage from '../assets/why-solution.jpg'

// "Your Idea. Our Design. Real Solutions." section on /why-choose-us.
// Edit the text below; the two `items` arrays drive the check lists in each panel.
export const whySolution = {
  eyebrow: 'The Right Partner for Your Innovation',
  title: 'Your Idea. Our Design. ',
  titleHighlight: 'Real Solutions.',
  subtitle:
    'We help hardware product builders turn their ideas into manufacturable designs — efficiently, accurately and with complete support.',

  solution: {
    badgeIcon: CircleCheck,
    badge: 'Your Solution with GICE',
    title: 'End-to-End Design & Prototype Support',
    subtitle: 'From concept to prototype, we give you the right design, ready for real-world manufacturing.',
    image: solutionImage,
    imageAlt: 'Machined aluminium enclosure in front of a monitor showing its 3D CAD model',
    items: [
      {
        title: 'Complete CAD & Engineering Support',
        text: 'We provide detailed 3D models, drawings, BOMs and manufacturing files so you have everything you need.',
      },
      {
        title: 'In-House Design & Prototyping',
        text: 'Our experienced team iterates quickly and builds prototypes for validation before production.',
      },
      {
        title: 'No Tooling, No Assembly, No Delays',
        text: 'We offer flexible prototype manufacturing without tooling or assembly, helping you test and refine faster.',
      },
      {
        title: 'Dedicated Production Support',
        text: 'We guide you with manufacturability, material selection and vendor coordination for a smooth scale-up.',
      },
    ],
  },

  prototype: {
    icon: Box,
    title: 'Prototype Design',
    subtitle: 'Validate your idea. De-risk your production. Move forward with confidence.',
    items: [
      {
        title: 'Design for Manufacturing',
        text: 'We optimize the design for real-world production, reducing complexity and cost while maintaining performance.',
      },
      {
        title: 'Rapid Prototyping',
        text: 'Get functional prototypes quickly to test, iterate and fine-tune your product before full-scale production.',
      },
      {
        title: 'Tool & Die Knowledge',
        text: 'We leverage deep expertise in tooling and dies to ensure smooth transition from prototype to production.',
      },
      {
        title: 'Assembly Validation',
        text: 'We check fit, function and assembly feasibility early, so you avoid surprises later.',
      },
      {
        title: 'Vendor Coordination',
        text: 'We work with trusted vendors and manage the process, ensuring quality, timelines and cost efficiency.',
      },
      {
        title: 'Production Readiness',
        text: 'You get complete documentation and support to go from prototype to series production without roadblocks.',
      },
    ],
  },
}
