import { useState } from 'react'
import { ChevronDown, Quote } from 'lucide-react'
import SectionHeading, { Eyebrow, headingSizes } from '../components/SectionHeading.jsx'
import CheckList from '../components/CheckList.jsx'
import Button from '../components/Button.jsx'
import CompanyIntro from '../components/CompanyIntro.jsx'
import { charteredEngineer as ce, director, visionMission } from '../data/team.js'

function SubList({ title, items }) {
  return (
    <div>
      <h4 className="text-[15px] font-bold">{title}</h4>
      <CheckList items={items} className="mt-3 space-y-2!" itemClassName="text-[15px]! lg:text-[14px]!" />
    </div>
  )
}

export default function AboutUs() {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      {/* A. The Company */}
      <CompanyIntro />

      {/* B. Vision & Mission */}
      <section className="section-y">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={visionMission.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f38]/90 via-[#0f1f38]/65 to-[#0f1f38]/20 md:to-transparent" />
            <div className="relative grid px-5 py-10 text-white sm:px-12 md:grid-cols-2 md:py-16 lg:pr-56">
              {[visionMission.vision, visionMission.mission].map((block, i) => (
                <div
                  key={block.title}
                  className={
                    i === 1
                      ? 'mt-8 border-t border-white/30 pt-8 md:mt-0 md:border-t-0 md:border-l md:pt-0 md:pl-12'
                      : 'md:pr-12'
                  }
                >
                  <h2 className={`${headingSizes.h2} text-white`}>{block.title}</h2>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/85 sm:text-[16px]">{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* C. Meet The Technical Director */}
      <section className="section-y bg-white">
        <div className="container-site">
          <div className="card p-5 sm:p-9 lg:p-12">
            <Eyebrow className="mb-3">{director.eyebrow}</Eyebrow>
            <h2 className={headingSizes.h2}>{director.title}</h2>
            <p className="mt-2 text-[15px]">{director.subtitle}</p>

            <div className="mt-9 grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:gap-10 lg:gap-14">
              <img
                src={director.image}
                alt={director.imageAlt}
                width="400"
                height="500"
                className="mx-auto aspect-[4/5] w-full max-w-[320px] rounded-2xl object-cover shadow-[0_24px_48px_-28px_rgb(11_31_58/0.5)] md:max-w-none"
              />

              <div className="min-w-0">
                <h3 className="text-[24px] font-bold text-highlight sm:text-[30px]">{director.name}</h3>
                <p className="mt-1 text-[16px] font-medium text-navy/80">{director.role}</p>

                <ul className="mt-6 space-y-3.5">
                  {director.credentials.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3.5 text-[15px] text-navy/80">
                      <Icon className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.7} aria-hidden="true" />
                      {text}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grid gap-7">
                  <SubList title="Professional Experience" items={director.experience} />
                  <SubList title="Specializations" items={director.specializations} />
                </div>
              </div>
            </div>

            <blockquote className="relative mt-10 rounded-2xl bg-sky px-5 py-7 pb-12 sm:px-14 sm:py-8">
              <Quote className="absolute top-6 left-5 hidden h-7 w-7 rotate-180 fill-[#b9d0ec] text-[#b9d0ec] sm:block" aria-hidden="true" />
              <p className="text-[16px] leading-relaxed text-navy/85 sm:pl-6 sm:text-[18px]">
                {director.quote[0]}
                <br />
                {director.quote[1]}
              </p>
              <span
                aria-hidden="true"
                className="absolute right-6 bottom-5 flex rotate-[35deg] gap-1.5 text-primary/60"
              >
                <span className="h-7 w-[2px] rounded bg-current" />
                <span className="h-7 w-[2px] rounded bg-current" />
              </span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* D. What is a Chartered Engineer? */}
      <section className="section-y bg-white">
        <div className="container-site">
          <SectionHeading eyebrow={ce.eyebrow} title={ce.title} subtitle={ce.description} />
          <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
            <div className="flex flex-col">
              <div className="flex-1 rounded-[14px] border border-line bg-gradient-to-br from-[#e6effa] to-[#f2f7fd] p-5 sm:p-8">
                <h3 className="text-[18px] font-bold text-[#1c4f92]">{ce.benefitsTitle}</h3>
                <CheckList items={ce.benefits} className="mt-5" />
              </div>
              <div className="mt-6">
                <Button
                  onClick={() => setShowMore((s) => !s)}
                  aria-expanded={showMore}
                  aria-controls="chartered-more"
                  type="button"
                  className="w-full text-left sm:w-auto"
                >
                  {ce.cta}
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform ${showMore ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </Button>
              </div>
            </div>
            <img
              src={ce.image}
              alt={ce.imageAlt}
              width="560"
              height="340"
              className="aspect-[28/17] w-full rounded-2xl object-cover shadow-[0_24px_48px_-28px_rgb(11_31_58/0.5)] lg:h-full"
            />
          </div>
          <div
            id="chartered-more"
            className={`grid transition-[grid-template-rows] duration-300 ${showMore ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="card mt-6 space-y-3 p-5 text-[15px] leading-relaxed sm:p-7">
                {ce.more.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
