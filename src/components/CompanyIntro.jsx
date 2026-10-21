import { CalendarCheck } from 'lucide-react'
import { Eyebrow, headingSizes } from './SectionHeading.jsx'
import Card from './Card.jsx'
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
    <section className="section-y relative overflow-hidden bg-grey">
      <div className="container-site relative">
        <Reveal>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h1 className={headingSizes.h1}>{title}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="relative mt-10 overflow-hidden border-l-4 border-l-primary p-6 sm:p-10 lg:p-12">
            <span className="mb-5 inline-flex items-center gap-2 rounded-[4px] border border-primary px-3 py-1 text-[13px] font-semibold tracking-wide text-primary">
              <CalendarCheck className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
              Est. 2021
            </span>
            <p className="max-w-[900px] text-[15px] leading-[1.85] text-ink sm:text-[17px]">
              <Highlighted text={text} highlights={highlights} />
            </p>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
