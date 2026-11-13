
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

import SectionHeading from '../components/SectionHeading.jsx';
import PricingTable from '../components/PricingTable.jsx';
import PlanCard from '../components/PlanCard.jsx';
import RateList from '../components/RateList.jsx';
import Button from '../components/Button.jsx';
import { Reveal } from '../components/Motion.jsx';

import PriorityPlans from '../components/PriorityPlans.jsx';

import PricingEnquiryPopup from '../components/PricingEnquiryPopup.jsx';

import {
  additionalRates,
  notes,
  plans,
  pricingCta,
  pricingIntro,
} from '../data/pricing.js';

export default function Pricing() {
  useEffect(() => {
    const previous = document.title;

    document.title = 'Pricing | Prototype Design';

    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <>
      {/* PRICING SECTION */}

      <section className="section-y">

        <div className="container-site">

          {/* PRICING HEADING */}
          <SectionHeading as="h1" {...pricingIntro} />

          {/* PRICING ENQUIRY POPUP */}
          <PricingEnquiryPopup />

          {/* PRICING TABLE */}
          <PricingTable
            plans={plans}
            className="mt-12"
          />

          

          {/* RESPONSIVE PLAN CARDS */}

          <ul className="
            mt-10
            grid grid-cols-1
            gap-4 sm:grid-cols-2 sm:gap-5
            lg:hidden
          ">
            {plans.map((p) => (
              <li key={p.id} className="min-w-0">
                <PlanCard plan={p} />
              </li>
            ))}
          </ul>

          {/* ADDITIONAL RATES + TERMS & NOTES */}

          <div className="
            mt-20
            grid grid-cols-1
            gap-10
            lg:grid-cols-2
            lg:gap-12
          ">

            {/* LEFT: ADDITIONAL RATES */}

            <Reveal>
              <div className="min-w-0">

                <SectionHeading
                  title="Additional Rates"
                  subtitle="For work beyond your package hours."
                />

                <RateList
                  rates={additionalRates}
                  className="mt-6"
                />

              </div>
            </Reveal>

            {/* RIGHT: TERMS & NOTES */}

            <Reveal>
              <div className="min-w-0 lg:pl-24">

                <SectionHeading
                  title="Terms & Notes"
                />

                <ul className="
                  mt-6
                  list-disc
                  space-y-3
                  pl-5
                  text-[15px]
                  leading-relaxed
                  marker:text-primary
                  sm:text-base
                ">
                  {notes.map((n, index) => (
                    <li key={index}>
                      {n}
                    </li>
                  ))}
                </ul>

              </div>
            </Reveal>

          </div>

          
          {/* PRODUCTION PRIORITY PLANS */}
          <PriorityPlans />

          {/* BOTTOM CTA */}

          <Reveal className="
            on-dark relative
            mt-12 lg:mt-14
            overflow-hidden
            rounded-3xl
            bg-navy
            shadow-lg
          ">

            <div className="
              relative flex flex-col gap-5
              px-6 py-8
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-10 sm:py-9
            ">

              <p className="
                text-[18px]
                font-bold tracking-tight
                text-white sm:text-[20px]
              ">
                {pricingCta.text}
              </p>

              <Button
                to={pricingCta.to}
                variant="light"
                className="
                  w-full shrink-0
                  text-[15px]!
                  sm:w-auto lg:text-sm!
                "
              >
                {pricingCta.label}

                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Button>

            </div>

          </Reveal>

        </div>

      </section>
      
    </>
  );
}
