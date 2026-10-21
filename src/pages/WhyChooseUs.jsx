import SectionHeading, { Eyebrow, headingSizes } from '../components/SectionHeading.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import SolutionPanel from '../components/SolutionPanel.jsx'
import ProcessStep from '../components/ProcessStep.jsx'
import LogoMarquee from '../components/LogoMarquee.jsx'
import Card from '../components/Card.jsx'
import { Reveal, Stagger, StaggerItem } from '../components/Motion.jsx'
import { clients, journey, reasons } from '../data/whyChooseUs.js'
import { whySolution } from '../data/whySolution.js'

const { solution, prototype } = whySolution

export default function WhyChooseUs() {
  return (
    <>
      {/* B. Your Idea. Our Design. Real Solutions. */}
      <section className="section-y bg-white">
        <div className="container-site">
          <Reveal className="mx-auto max-w-5xl text-center">
            <Eyebrow className="mb-4 justify-center">{whySolution.eyebrow}</Eyebrow>
            <h2 className="text-[clamp(1.75rem,1.2rem+2.2vw,2.75rem)] leading-[1.15] font-extrabold tracking-[-0.02em] text-navy">
              {whySolution.title}
              <span className="text-primary">{whySolution.titleHighlight}</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink sm:text-base">{whySolution.subtitle}</p>
          </Reveal>
          <Stagger className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-[55fr_45fr] lg:items-start">
            <StaggerItem>
              <SolutionPanel
                tone="green"
                items={solution.items}
                image={solution.image}
                imageAlt={solution.imageAlt}
                header={
                  <>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-success px-3 py-1 text-[12px] font-semibold text-white">
                      <solution.badgeIcon className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
                      {solution.badge}
                    </span>
                    <h3 className={`mt-4 text-navy ${headingSizes.h3}`}>{solution.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink">{solution.subtitle}</p>
                  </>
                }
              />
            </StaggerItem>
            <StaggerItem>
              <SolutionPanel
                tone="blue"
                items={prototype.items}
                header={
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-[var(--shadow-md)]">
                      <prototype.icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className={`text-navy ${headingSizes.h3}`}>{prototype.title}</h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-ink">{prototype.subtitle}</p>
                    </div>
                  </div>
                }
              />
            </StaggerItem>
          </Stagger>
        </div>
      </section>

       {/* A. Why Manufacturers Choose Us */}
      <section className="section-y relative overflow-hidden bg-grey">
        <div className="container-site relative">
          <Reveal>
            <h1 className={headingSizes.h1}>{reasons.title}</h1>
            <p className="mt-3 text-[17px] font-semibold text-primary">{reasons.subtitle}</p>
          </Reveal>
          <Stagger as="ul" className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {reasons.items.map((item, i) => (
              <StaggerItem as="li" key={item.title}>
                <FeatureCard {...item} index={i} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* C. End-to-End Engineering Solutions: the dark contrast section */}
      <section className="on-dark section-y relative overflow-hidden bg-navy">
        <div className="container-site relative py-4 lg:py-6">
          <Reveal>
            <SectionHeading light eyebrow={journey.eyebrow} title={journey.title} subtitle={journey.subtitle} />
          </Reveal>
          <ol className="mt-14 grid lg:grid-cols-7">
            {journey.steps.map((step, i) => (
              <ProcessStep key={step.title} step={step} index={i} isLast={i === journey.steps.length - 1} />
            ))}
          </ol>
        </div>
      </section>

      {/* D. Trusted By */}
      <section className="section-y">
        <div className="container-site">
          <Reveal>
            <Card className="px-5 py-10 sm:px-10 sm:py-12">
              <h2 className={headingSizes.h2}>{clients.title}</h2>
              <p className="mt-2 text-[15px]">{clients.subtitle}</p>
              <LogoMarquee items={clients.logos} speed={35} className="mt-8" />
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  )
}
