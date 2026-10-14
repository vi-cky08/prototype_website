import { Eyebrow, headingSizes } from './SectionHeading.jsx'
import { companyIntro } from '../data/team.js'

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

function Highlighted({ text, highlights }) {
  const parts = text.split(new RegExp(`(${highlights.map(escape).join('|')})`))
  return parts.map((part, i) =>
    highlights.includes(part) ? (
      <strong key={i} className="font-bold text-navy">
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
    <section className="section-y bg-gradient-to-br from-[#e6f0f9] via-[#f3f8fd] to-page">
      <div className="container-site">
        <Eyebrow className="mb-3">{eyebrow}</Eyebrow>
        <h1 className={headingSizes.h1}>{title}</h1>
        <div className="mt-8 rounded-2xl border border-line bg-gradient-to-br from-[#eaf2fb] to-[#f4f8fd] p-5 shadow-card sm:p-9 lg:p-12">
          <p className="max-w-[900px] text-[15px] leading-[1.8] text-navy/80 sm:text-[17px]">
            <Highlighted text={text} highlights={highlights} />
          </p>
        </div>
      </div>
    </section>
  )
}
