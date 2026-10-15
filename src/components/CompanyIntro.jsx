import { CalendarCheck } from 'lucide-react'
import { Eyebrow, headingSizes } from './SectionHeading.jsx'
import Card from './Card.jsx'
import Pattern from './Pattern.jsx'
import { Reveal } from './Motion.jsx'
import { companyIntro } from '../data/team.js'

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

function Highlighted({ text, highlights }) {
  const parts = text.split(new RegExp(`(${highlights.map(escape).join('|')})`))
  return parts.map((part, i) =>
    highlights.includes(part) ? (
      <strong key={i} className="font-bold text-primary-700">
        {part}
      </strong>
    ) : (
      part
    ),
  )
}

export default function CompanyIntro() {
  const { eyebrow, title, text, highlights } = companyIntro
  return (
    <section className="section-y relative overflow-hidden bg-mesh">
      <Pattern variant="grid" />
      <div className="container-site relative">
        <Reveal>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h1 className={headingSizes.h1}>{title}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="relative mt-10 overflow-hidden p-6 pl-8 sm:p-10 sm:pl-14 lg:p-12 lg:pl-16">
            {/* Quote-style accent bar */}
            <span
              aria-hidden="true"
              className="absolute top-6 bottom-6 left-0 w-1.5 rounded-r-full bg-gradient-to-b from-primary-600 via-primary-500 to-accent sm:top-10 sm:bottom-10"
            />
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-white shadow-[0_8px_18px_-8px_rgb(31_95_191/0.7)]">
              <CalendarCheck className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
              Est. 2021
            </span>
            <p className="max-w-[900px] text-[15px] leading-[1.85] text-navy/80 sm:text-[17px]">
              <Highlighted text={text} highlights={highlights} />
            </p>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
