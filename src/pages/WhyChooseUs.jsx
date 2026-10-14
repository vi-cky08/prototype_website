import SectionHeading, { headingSizes } from '../components/SectionHeading.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import CheckList from '../components/CheckList.jsx'
import ProcessStep from '../components/ProcessStep.jsx'
import LogoMarquee from '../components/LogoMarquee.jsx'
import { clients, comparison, journey, reasons } from '../data/whyChooseUs.js'

export default function WhyChooseUs() {
  return (
    <>
      {/* A. Why Manufacturers Choose Us */}
      <section className="section-y bg-white">
        <div className="container-site">
          <div className="rounded-2xl border border-line bg-gradient-to-br from-[#eef4fb] to-[#f6f9fd] px-5 py-10 sm:px-10 lg:px-12 lg:py-12">
            <h1 className={headingSizes.h1}>{reasons.title}</h1>
            <p className="mt-2 text-[16px] font-medium text-[#3f7cc4]">{reasons.subtitle}</p>
            <ul className="mt-8 grid gap-y-2 sm:mt-10 sm:grid-cols-2 sm:gap-y-6 lg:grid-cols-3 lg:gap-y-8">
              {reasons.items.map((item) => (
                <li key={item.title} className="lg:px-4 lg:[&:not(:nth-child(3n+1))]:border-l lg:[&:not(:nth-child(3n+1))]:border-line">
                  <FeatureCard {...item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* B. The Problem With Most Design Companies */}
      <section className="section-y">
        <div className="container-site">
          <SectionHeading eyebrow={comparison.eyebrow} title={comparison.title} subtitle={comparison.subtitle} />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="card flex flex-col overflow-hidden bg-gradient-to-b from-[#f7f8fa] to-white">
              <div className="p-5 sm:p-9">
                <h3 className="text-[20px] font-bold">{comparison.others.title}</h3>
                <span className="mt-3 block h-[3px] w-24 rounded-full bg-gradient-to-r from-[#f08a5d] to-transparent" />
                <CheckList variant="cross" items={comparison.others.items} className="mt-6 space-y-3.5!" />
              </div>
              <img
                src={comparison.others.image}
                alt={comparison.others.imageAlt}
                className="mt-auto h-44 w-full object-cover opacity-80 mix-blend-multiply sm:h-56"
              />
            </article>

            <article className="flex flex-col overflow-hidden rounded-[14px] border border-[#c9dcf2] bg-gradient-to-b from-[#e3eefa] to-[#eef5fc] shadow-[0_16px_40px_-18px_rgb(22_86_166/0.35)] ring-1 ring-primary/5">
              <div className="p-5 sm:p-9">
                <h3 className="text-[22px] font-bold text-[#1c4f92]">{comparison.us.title}</h3>
                <CheckList
                  variant="success"
                  items={comparison.us.items}
                  className="mt-6 space-y-3.5!"
                  itemClassName="text-navy/85 font-medium"
                />
              </div>
              <img
                src={comparison.us.image}
                alt={comparison.us.imageAlt}
                className="mt-auto h-44 w-full object-cover sm:h-56"
              />
            </article>
          </div>
        </div>
      </section>

      {/* C. End-to-End Engineering Solutions */}
      <section className="section-y bg-white">
        <div className="container-site">
          <SectionHeading eyebrow={journey.eyebrow} title={journey.title} subtitle={journey.subtitle} />
          <ol className="mt-12 grid lg:grid-cols-7">
            {journey.steps.map((step, i) => (
              <ProcessStep key={step.title} step={step} index={i} isLast={i === journey.steps.length - 1} />
            ))}
          </ol>
        </div>
      </section>

      {/* D. Trusted By */}
      <section className="section-y">
        <div className="container-site">
          <div className="card px-5 py-10 sm:px-10">
            <h2 className={headingSizes.h2}>{clients.title}</h2>
            <p className="mt-2 text-[15px]">{clients.subtitle}</p>
            <LogoMarquee items={clients.logos} speed={35} className="mt-8" />
          </div>
        </div>
      </section>
    </>
  )
}
