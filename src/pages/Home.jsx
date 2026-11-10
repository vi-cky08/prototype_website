
import { ArrowRight, BadgeCheck, Layers, Printer } from 'lucide-react';

import Button from '../components/Button.jsx';
import StatsStrip from '../components/StatsStrip.jsx';
import { Stagger, StaggerItem } from '../components/Motion.jsx';
import { hero, stats } from '../data/home.js';

import FeaturedProjects from '../components/FeaturedProjects.jsx';

// Imported industrial background image
import backgroundImage from '../assets/bg.png';

// Floating badges
// const badges = [
//   {
//     icon: Layers,
//     label: 'Product Development',
//     className: 'top-4 left-3 sm:top-8 lg:-left-8',
//     delay: '0s'
//   },
//   {
//     icon: BadgeCheck,
//     label: 'Precision design',
//     className: 'top-1/2 right-3 lg:-right-6',
//     delay: '-2s',
//   },
//   {
//     icon: Printer,
//     label: 'Rapid Prototyping',
//     className: 'bottom-4 left-6 sm:bottom-8 lg:left-10',
//     delay: '-4s',
//   },
// ];

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}

      <section className="relative isolate overflow-hidden bg-grey">

        {/* INDUSTRIAL BACKGROUND IMAGE */}

        <div
          aria-hidden="true"
          className="absolute inset-0 z-[-1]"
        >
          <img
            src={backgroundImage}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* LIGHT TRANSPARENT OVERLAY */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[-1] bg-white/30"
        />

        {/* MAIN CONTENT */}

        <div className="container-site relative grid items-center gap-12 pt-10 pb-28 sm:pt-14 sm:pb-32 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:pt-20 lg:pb-40">

          {/* LEFT CONTENT */}

          <Stagger onMount stagger={0.1} className="min-w-0">

            <StaggerItem
              as="p"
              className="flex items-center gap-2.5 text-[17px] font-bold text-black-900"
            >
              {/* <span
                aria-hidden="true"
                className="h-[2px] w-6 rounded-full bg-gradient-to-r from-primary-700"
              /> */}
              {hero.eyebrow}
            </StaggerItem>

            <StaggerItem
              as="h1"
              className="mt-5 text-[clamp(2.25rem,1.4rem+3.6vw,4rem)] leading-[1.05] font-extrabold tracking-[-0.03em]"
            >
              {hero.titleLead}
              <br />
              {hero.titleBrand}{' '}
              <span className="text-primary">
                {hero.titleHighlight}
              </span>
            </StaggerItem>

            <StaggerItem
              as="p"
              className="mt-6 max-w-lg text-[16px] leading-relaxed font-semibold text-black/90 sm:text-[17px]"
            >
              {hero.lead}
            </StaggerItem>

            <StaggerItem
              as="p"
              className="mt-4 max-w-lg text-[14px] leading-relaxed font-semibold text-black/90 sm:text-[17px]"
            >
              {hero.body}
            </StaggerItem>

            {/* BUTTONS */}

            <StaggerItem className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              <Button to={hero.primaryCta.to}>
                {hero.primaryCta.label}

                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Button>

              <Button
                to={hero.secondaryCta.to}
                variant="outline"
              >
                {hero.secondaryCta.label}
              </Button>

            </StaggerItem>

          </Stagger>

          {/* RIGHT SIDE IMAGE */}

          <Stagger
            onMount
            delay={0.25}
            className="relative"
          >

            {/* BLUE GLOW */}

            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(47_116_211/0.35),transparent)] blur-2xl"
            />

            {/* IMAGE BORDER */}

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
                  fetchPriority="high"
                  className="aspect-[9/7] w-full rounded-3xl object-cover shadow-[0_40px_70px_-30px_rgb(11_42_91/0.55)] ring-1 ring-white/60"
                />
              </div>
            </StaggerItem>

            {/* FLOATING BADGES */}

            {/* {badges.map(({ icon: Icon, label, className, delay }) => (
              <StaggerItem
                key={label}
                className={`absolute ${className}`}
              >
                <span
                  className="flex items-center gap-2 rounded-full border border-white bg-white/95 py-1.5 pr-3.5 pl-1.5 text-[12px] font-semibold whitespace-nowrap text-navy shadow-md sm:text-[13px]"
                  style={{ animationDelay: delay }}
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white">
                    <Icon
                      className="h-3.5 w-3.5"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>

                  {label}
                </span>
              </StaggerItem>
            ))} */}

          </Stagger>

        </div>

        {/* BOTTOM FADE */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-page"
        />

      </section>

      {/* STATS SECTION */}

      <section className="relative z-10 -mt-20 pb-20 lg:-mt-24 lg:pb-24">
        <div className="container-site">
          <StatsStrip stats={stats} />
        </div>
      </section>

       {/* FEATURED PROJECTS SECTION */}

      <FeaturedProjects />

    </>
  );
}
