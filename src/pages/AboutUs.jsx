import { Eye, ExternalLink, Quote, Target } from 'lucide-react'
import SectionHeading, { Eyebrow, headingSizes } from '../components/SectionHeading.jsx'
import CheckList from '../components/CheckList.jsx'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import CompanyIntro from '../components/CompanyIntro.jsx'
import Pattern from '../components/Pattern.jsx'
import { Reveal, Stagger, StaggerItem } from '../components/Motion.jsx'
import { charteredEngineer as ce, director, visionMission } from '../data/team.js'

const visionIcons = [Eye, Target]

function SubList({ title, items }) {
  return (
    <div>
      <h4 className="text-[15px] font-bold">{title}</h4>
      <CheckList items={items} className="mt-3 space-y-2!" itemClassName="text-[15px]! lg:text-[14px]!" />
    </div>
  )
}

export default function AboutUs() {
  return (
    <>
      {/* A. The Company */}
      <CompanyIntro />

      {/* B. Vision & Mission */}
      <section className="section-y bg-white">
        <div className="container-site">
          <Reveal className="on-dark relative overflow-hidden rounded-3xl shadow-lg">
            <img
              src={visionMission.image}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-800/80 to-navy-800/30" />
            <Pattern variant="grid-light" />
            <Stagger className="relative grid gap-5 px-5 py-8 sm:px-10 sm:py-12 md:grid-cols-2 md:gap-6 lg:py-16 lg:pr-48">
              {[visionMission.vision, visionMission.mission].map((block, i) => {
                const Icon = visionIcons[i]
                return (
                  <StaggerItem
                    key={block.title}
                    className="rounded-2xl border border-white/15 bg-white/[0.07] p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] sm:p-8 md:backdrop-blur-md"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-accent">
                      <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h2 className={`${headingSizes.h2} mt-5 text-white`}>{block.title}</h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-white/85 sm:text-[16px]">{block.text}</p>
                  </StaggerItem>
                )
              })}
            </Stagger>
          </Reveal>
        </div>
      </section>

      {/* C. Meet The Technical Director */}
      <section className="section-y relative overflow-hidden bg-sky-soft">
        <Pattern variant="dots" />
        <div className="container-site relative">
          <Reveal>
            <Card accent className="p-5 sm:p-9 lg:p-12">
              <Eyebrow className="mb-4">{director.eyebrow}</Eyebrow>
              <h2 className={headingSizes.h2}>{director.title}</h2>
              <p className="mt-2 text-[15px]">{director.subtitle}</p>

              <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:gap-10 lg:gap-14">
                {/* Gradient ring around the portrait */}
                <div className="mx-auto w-full max-w-[320px] self-start rounded-[22px] bg-gradient-to-br from-primary-500 via-accent to-primary-700 p-[3px] shadow-[var(--shadow-glow)] md:max-w-none">
                  <img
                    src={director.image}
                    alt={director.imageAlt}
                    width="400"
                    height="500"
                    loading="lazy"
                    className="aspect-[4/5] w-full rounded-[19px] bg-white object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-[26px] font-extrabold tracking-tight text-primary sm:text-[32px]">{director.name}</h3>
                  <p className="mt-1 text-[16px] font-medium text-navy/80">{director.role}</p>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {director.credentials.map(({ icon: Icon, text }) => (
                      <li
                        key={text}
                        className="flex items-center gap-3 rounded-xl border border-line bg-white px-3 py-2.5 text-[14px] text-navy/85 shadow-sm transition-colors duration-200 hover:border-primary-200"
                      >
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                          <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                        </span>
                        {text}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 grid gap-7 sm:grid-cols-2">
                    <SubList title="Professional Experience" items={director.experience} />
                    <SubList title="Specializations" items={director.specializations} />
                  </div>
                </div>
              </div>

              <blockquote className="relative mt-10 overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 to-sky px-5 py-8 sm:px-14 sm:py-10">
                <Quote
                  className="absolute -top-2 left-2 h-20 w-20 rotate-180 fill-primary-100 text-primary-100 sm:-top-3 sm:left-4 sm:h-28 sm:w-28"
                  aria-hidden="true"
                />
                <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary-500 to-accent" />
                <p className="relative text-[17px] leading-relaxed font-medium text-navy/85 sm:pl-8 sm:text-[20px]">
                  {director.quote[0]}
                  <br />
                  {director.quote[1]}
                </p>
              </blockquote>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* D. What is a Chartered Engineer? */}
      <section className="section-y bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeading eyebrow={ce.eyebrow} title={ce.title} subtitle={ce.description} />
          </Reveal>
          <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal className="flex flex-col">
              <Card accent className="flex-1 p-5 sm:p-8">
                <h3 className="text-[18px] font-bold text-primary-700">{ce.benefitsTitle}</h3>
                <CheckList items={ce.benefits} className="mt-5" />
              </Card>
              <div className="mt-6">
                <Button
                  href={ce.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ce.ctaAriaLabel}
                  className="w-full text-left sm:w-auto"
                >
                  {ce.cta}
                  <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="flex items-center px-2 sm:px-6">
              <img
                src={ce.image}
                alt={ce.imageAlt}
                width="560"
                height="340"
                loading="lazy"
                className="aspect-[28/17] w-full rounded-2xl object-cover shadow-[0_30px_60px_-28px_rgb(11_42_91/0.55)] ring-1 ring-line transition-transform duration-500 ease-out sm:-rotate-2 sm:hover:rotate-0"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
