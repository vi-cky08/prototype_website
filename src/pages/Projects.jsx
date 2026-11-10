
import {
  ArrowRight,
  Settings,
  Zap,
  Award,
  Rocket,
} from 'lucide-react';

import { Link } from 'react-router-dom';

import ServiceCard from '../components/ServiceCard.jsx';
import { Reveal } from '../components/Motion.jsx';
import { services, servicesIntro } from '../data/services.js';

import heroImage from '../assets/modern.png';

// BENEFITS DATA
const benefits = [
  {
    icon: Settings,
    title: 'Custom Engineering',
    subtitle: 'Tailored to your requirements',
  },
  {
    icon: Zap,
    title: 'End-to-End Support',
    subtitle: 'Design to manufacturing',
  },
  {
    icon: Award,
    title: 'High Quality',
    subtitle: 'Precise, reliable, durable',
  },
  {
    icon: Rocket,
    title: 'Faster Time to Market',
    subtitle: 'From concept to production',
  },
];

// BENEFIT ITEM
function BenefitItem({ item }) {
  const Icon = item.icon;

  return (
    <div className="
      flex w-[280px] shrink-0 items-center gap-4
      px-6 py-5 sm:w-[320px]
    ">
      <Icon
        size={35}
        strokeWidth={1.8}
        className="shrink-0 text-blue-700"
      />

      <div>
        <h3 className="
          whitespace-nowrap text-[15px]
          font-extrabold text-[#102D5C]
        ">
          {item.title}
        </h3>

        <p className="mt-1 whitespace-nowrap text-sm text-slate-600">
          {item.subtitle}
        </p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <main className="bg-white">

      {/* ==================================
          1. HERO SECTION
      ================================== */}

      <section className="relative overflow-hidden bg-[#F0F6FD]">

        <div className="
          relative mx-auto grid max-w-[1440px]
          items-center lg:min-h-[320px]
          lg:grid-cols-2
        ">

          {/* LEFT CONTENT */}

          <div className="
            relative z-10 px-6 py-12
            sm:px-10 lg:px-16 lg:py-14
          ">

            <p className="
              mb-3 text-sm font-bold uppercase
              tracking-[0.18em] text-blue-700
            ">
              What We Build
            </p>

            <h1 className="
              text-4xl font-extrabold tracking-tight
              text-[#102D5C]
              sm:text-5xl lg:text-6xl
            ">
              {servicesIntro.title}
            </h1>

            <p className="
              mt-4 max-w-xl text-base
              leading-7 text-slate-600 sm:text-lg
            ">
              {servicesIntro.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="
                  inline-flex items-center gap-2
                  rounded-lg bg-blue-700 px-7 py-3
                  font-bold text-white
                  transition duration-300
                  hover:-translate-y-1 hover:bg-blue-800
                  hover:shadow-lg
                "
              >
                Get a Quote
                <ArrowRight size={19} />
              </Link>

              <Link
                to="/contact"
                className="
                  inline-flex items-center
                  rounded-lg border border-[#102D5C]
                  px-7 py-3 font-bold text-[#102D5C]
                  transition duration-300
                  hover:bg-[#102D5C] hover:text-white
                "
              >
                Contact Us
              </Link>

            </div>
          </div>

          {/* RIGHT HERO IMAGE */}

          <div className="
            relative mt-4 h-[260px] overflow-hidden
            lg:absolute lg:inset-y-0 lg:right-0
            lg:mt-0 lg:h-full lg:w-[53%]
          ">

            <img
              src={heroImage}
              alt="Industrial engineering and product manufacturing"
              className="h-full w-full object-cover object-center"
            />

            <div className="
              absolute inset-0
              bg-gradient-to-r
              from-[#F0F6FD]/30 to-transparent
              lg:from-[#F0F6FD]/10
            " />

          </div>

        </div>
      </section>


      {/* ==================================
          2. BENEFITS INFINITE MARQUEE
      ================================== */}

      <section className="
        overflow-hidden border-y border-blue-100
        bg-[#F4F8FE]
      ">

        <div className="benefits-marquee">

          {/* ORIGINAL ITEMS */}

          <div className="benefits-track">
            {benefits.map((item) => (
              <BenefitItem
                key={item.title}
                item={item}
              />
            ))}
          </div>

          {/* DUPLICATE ITEMS FOR INFINITE SCROLL */}

          <div
            className="benefits-track"
            aria-hidden="true"
          >
            {benefits.map((item) => (
              <BenefitItem
                key={`duplicate-${item.title}`}
                item={item}
              />
            ))}
          </div>

        </div>
      </section>


      {/* ==================================
          3. ENGINEERING SOLUTIONS
          ONLY ONE HEADING
      ================================== */}

      
<section
  className="
    w-full
    bg-gradient-to-b from-[#F4F8FE] to-white
    py-10 sm:py-12 lg:py-14
  "
>
  {/* HEADING - KEEP CENTERED */}
  <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
    <Reveal>
      <div className="mb-8">

        <p className="
          flex items-center gap-3
          text-sm font-bold uppercase
          tracking-[0.18em] text-blue-700
        ">
          Our Expertise
        </p>

        <h2 className="
          mt-2 text-3xl font-extrabold
          tracking-tight text-[#102D5C]
          sm:text-4xl lg:text-5xl
        ">
          Engineering Solutions
        </h2>

        <p className="
          mt-2 max-w-2xl
          text-sm leading-6 text-slate-600
          sm:text-base
        ">
          Explore our engineering, manufacturing and
          product development capabilities.
        </p>

      </div>
    </Reveal>
  </div>

  {/* FULL WIDTH ZIG-ZAG CARDS */}
  <div className="flex w-full flex-col gap-6">

    {services.map((service, index) => {
      const reverse = index % 2 !== 0;

      return (
        <Reveal key={service.title}>
          <div
            className={`
              w-full max-w-[1200px]
              ${reverse ? 'ml-auto' : 'mr-auto'}
            `}
          >
            <ServiceCard
              {...service}
              number={String(index + 1).padStart(2, '0')}
              reverse={reverse}
            />
          </div>
        </Reveal>
      );
    })}

  </div>
</section>


    </main>
  );
}
