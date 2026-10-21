import { ArrowRight, BadgeCheck, Layers, Printer } from 'lucide-react'
import Button from '../components/Button.jsx'
import StatsStrip from '../components/StatsStrip.jsx'
import { Stagger, StaggerItem } from '../components/Motion.jsx'
import { hero, stats } from '../data/home.js'

// Floating badges around the hero image (decorative highlights; positions are inside the image on phones)
const badges = [
  { icon: Layers, label: 'Product Development', className: 'top-4 left-3 sm:top-8 lg:-left-8', delay: '0s' },
  { icon: BadgeCheck, label: 'Precision design', className: 'top-1/2 right-3 lg:-right-6', delay: '-2s' },
  { icon: Printer, label: 'Rapid Prototyping', className: 'bottom-4 left-6 sm:bottom-8 lg:left-10', delay: '-4s' },
]

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-grey">
        <div className="container-site relative grid items-center gap-12 pt-10 pb-28 sm:pt-14 sm:pb-32 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:pt-20 lg:pb-40">
          <Stagger onMount stagger={0.1} className="min-w-0">
            <StaggerItem as="p" className="flex items-center gap-2.5 text-[15px] font-semibold text-primary-700">
              <span aria-hidden="true" className="h-[2px] w-6 rounded-full bg-gradient-to-r from-primary-500 to-accent" />
              {hero.eyebrow}
            </StaggerItem>
            <StaggerItem
              as="h1"
              className="mt-5 text-[clamp(2.25rem,1.4rem+3.6vw,4rem)] leading-[1.05] font-extrabold tracking-[-0.03em]"
            >
              {hero.titleLead}
              <br />
              {hero.titleBrand} <span className="text-primary">{hero.titleHighlight}</span>
            </StaggerItem>
            <StaggerItem as="p" className="mt-6 max-w-lg text-[16px] leading-relaxed font-semibold text-navy/85 sm:text-[17px]">
              {hero.lead}
            </StaggerItem>
            <StaggerItem as="p" className="mt-4 max-w-lg text-[15px] leading-relaxed sm:text-[16px]">
              {hero.body}
            </StaggerItem>
            <StaggerItem className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button to={hero.primaryCta.to}>
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button to={hero.secondaryCta.to} variant="outline">
                {hero.secondaryCta.label}
              </Button>
            </StaggerItem>
          </Stagger>

          <Stagger onMount delay={0.25} className="relative">
            {/* Soft blue glow and ring behind the image */}
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(47_116_211/0.35),transparent)] blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-[28px] border border-white/80 bg-gradient-to-br from-white/70 to-primary-100/40 sm:-inset-3"
            />
            <StaggerItem className="relative">
              <div>
                <img
                  src={hero.image}
                  alt={hero.imageAlt}
                  width="720"
                  height="560"
                  fetchpriority="high"
                  className="aspect-[9/7] w-full rounded-3xl object-cover shadow-[0_40px_70px_-30px_rgb(11_42_91/0.55)] ring-1 ring-white/60"
                />
              </div>
            </StaggerItem>
            {badges.map(({ icon: Icon, label, className, delay }) => (
              <StaggerItem key={label} className={`absolute ${className}`}>
                <span
                  className="flex items-center gap-2 rounded-full border border-white bg-white/95 py-1.5 pr-3.5 pl-1.5 text-[12px] font-semibold whitespace-nowrap text-navy shadow-md sm:text-[13px]"
                  style={{ animationDelay: delay }}
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white">
                    <Icon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                  </span>
                  {label}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        {/* Soft fade into the next section instead of a hard edge */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-page" />
      </section>

      <section className="relative z-10 -mt-20 pb-20 lg:-mt-24 lg:pb-24">
        <div className="container-site">
          <StatsStrip stats={stats} />
        </div>
      </section>
    </>
  )
}
