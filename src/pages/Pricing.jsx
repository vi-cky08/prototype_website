import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import PricingTable from '../components/PricingTable.jsx'
import PlanCard from '../components/PlanCard.jsx'
import RateList from '../components/RateList.jsx'
import Button from '../components/Button.jsx'
import { Reveal } from '../components/Motion.jsx'
import { additionalRates, notes, plans, pricingCta, pricingIntro } from '../data/pricing.js'

export default function Pricing() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Pricing | Prototype Design'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <>
      {/* No overflow clipping on this section: it would break the sticky table header. */}
      <section className="section-y">
        <div className="container-site">
          <SectionHeading as="h1" {...pricingIntro} />

          <PricingTable plans={plans} className="mt-12" />

          {/* Below 1024px: cards, 2 columns from 640px */}
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:hidden">
            {plans.map((p) => (
              <li key={p.id} className="min-w-0">
                <PlanCard plan={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-white py-16 lg:py-20">
        <div className="container-site">
          <SectionHeading title="Additional Rates" subtitle="For work beyond your package hours." />
          <RateList rates={additionalRates} className="mt-8" />
        </div>
      </section>

      <section className="border-t border-line bg-white pb-16 lg:pb-24">
        <div className="container-site">
          <SectionHeading title="Terms & Notes" className="pt-16 lg:pt-20" />
          <ul className="mt-6 max-w-[720px] list-disc space-y-2 pl-5 text-[15px] leading-relaxed marker:text-primary sm:text-base">
            {notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>

          <Reveal className="on-dark relative mt-12 overflow-hidden rounded-3xl bg-navy shadow-lg lg:mt-16">
            <div className="relative flex flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-9">
              <p className="text-[18px] font-bold tracking-tight text-white sm:text-[20px]">{pricingCta.text}</p>
              <Button to={pricingCta.to} variant="light" className="w-full shrink-0 text-[15px]! sm:w-auto lg:text-sm!">
                {pricingCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
