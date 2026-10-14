import Button from '../components/Button.jsx'
import StatsStrip from '../components/StatsStrip.jsx'
import { hero, stats } from '../data/home.js'

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#e6f0f9] via-[#f3f8fd] to-page">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -left-40 h-[min(480px,100vw)] w-[min(480px,100vw)] rounded-full bg-[#d6e6f7] opacity-60 blur-3xl"
        />
        <div className="container-site relative grid items-center gap-10 pt-10 pb-24 sm:pt-14 sm:pb-28 lg:gap-12 lg:grid-cols-[1fr_1.08fr] lg:pt-20 lg:pb-36">
          <div className="min-w-0">
            <p className="text-[15px] font-medium text-[#4e5d70]">{hero.eyebrow}</p>
            <h1 className="mt-4 text-[32px] leading-[1.1] font-bold tracking-tight sm:text-[44px] lg:text-[56px]">
              {hero.titleLead}
              <br />
              {hero.titleBrand} <span className="text-highlight">{hero.titleHighlight}</span>
            </h1>
            <p className="mt-6 max-w-lg text-[16px] sm:text-[17px] leading-relaxed font-semibold text-navy/85">{hero.lead}</p>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed sm:text-[16px]">{hero.body}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button to={hero.primaryCta.to}>{hero.primaryCta.label}</Button>
              <Button to={hero.secondaryCta.to} variant="outline">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-[24px] sm:-inset-3 sm:rounded-[26px] bg-gradient-to-br from-white/70 to-[#d8e6f5]/50"
            />
            <img
              src={hero.image}
              alt={hero.imageAlt}
              width="720"
              height="560"
              className="relative aspect-[9/7] w-full max-w-full rounded-[20px] object-cover shadow-[0_30px_60px_-30px_rgb(11_31_58/0.45)]"
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-16 pb-20 lg:-mt-20 lg:pb-24">
        <div className="container-site">
          <StatsStrip stats={stats} />
        </div>
      </section>
    </>
  )
}
