
import {
  CheckCircle2,
  Sparkles,
  Factory,
  Lightbulb,
  ShieldCheck,
} from 'lucide-react';

import { Eyebrow } from '../components/SectionHeading.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import SolutionPanel from '../components/SolutionPanel.jsx';
import ProcessStep from '../components/ProcessStep.jsx';
import Card from '../components/Card.jsx';

import whyHeroBg from "../assets/why-hero-bg.png";

import {
  Reveal,
  Stagger,
  StaggerItem,
} from '../components/Motion.jsx';

import {
  clients,
  journey,
  reasons,
} from '../data/whyChooseUs.js';

import { whySolution } from '../data/whySolution.js';


const { solution, prototype } = whySolution;

const highlights = [
  {
    icon: Lightbulb,
    title: 'Design Excellence',
    text: 'Practical engineering concepts.',
  },
  {
    icon: Factory,
    title: 'Manufacturing Focus',
    text: 'Solutions built for production.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    text: 'Reliable engineering standards.',
  },
];

export default function WhyChooseUs() {
  return (
    <main className="why-page overflow-hidden bg-white">

      {/* =================================
          A. HERO SECTION
      ================================= */}

      <section className="why-hero relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
          backgroundImage: `linear-gradient(
          rgba(255, 255, 255, 0.88),
          rgba(255, 255, 255, 0.92)
          ),
          url(${whyHeroBg})`,
        }}
      
      >

        <div className="why-hero-grid" />

        <div className="why-glow why-glow-one" />
        <div className="why-glow why-glow-two" />

        <div className="container-site relative z-10">

          <div className="
            grid items-center gap-12
            py-20 pb-28
            lg:min-h-[510px]
            lg:grid-cols-[1.1fr_0.9fr]
            lg:py-24
          ">

            {/* LEFT CONTENT */}

            <Reveal>

              <Eyebrow className="mb-5">
                Why Choose Prototype Design
              </Eyebrow>

              <h1 className="
                text-4xl leading-tight font-extrabold
                tracking-tight text-navy
                sm:text-5xl lg:text-[62px]
              ">
                Engineering Ideas.
                <br />

                <span className="why-gradient-text">
                  Real-World Solutions.
                </span>
              </h1>

              <p className="
                mt-6 max-w-xl
                text-base leading-8 text-slate-600
                sm:text-lg
              ">
                We bridge the gap between product design and
                manufacturing through practical engineering,
                innovative thinking and manufacturing expertise.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="#engineering-journey"
                  className="
                    inline-flex items-center gap-2
                    rounded-xl border border-blue-200
                    bg-blue-700 px-7 py-4
                    font-bold text-white
                    transition-all duration-300
                    hover:border-blue-600
                    hover:bg-blue-800
                  "
                >
                  Explore Our Process
                </a>

              </div>

              {/* HERO HIGHLIGHTS */}

              <div className="
                mt-10 grid grid-cols-1 gap-5
                border-t border-blue-100
                pt-7 sm:grid-cols-3
              ">

                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-3"
                    >

                      <span className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-xl bg-blue-50
                        text-blue-700
                      ">
                        <Icon size={21} />
                      </span>

                      <div>
                        <h3 className="
                          text-sm font-bold text-navy
                        ">
                          {item.title}
                        </h3>

                        <p className="
                          mt-1 text-xs leading-5
                          text-slate-500
                        ">
                          {item.text}
                        </p>
                      </div>

                    </div>
                  );
                })}

              </div>

            </Reveal>

            {/* RIGHT HERO VISUAL */}

            <Reveal delay={0.15}>

              <div className="
                why-visual relative mx-auto
                mb-8 w-full max-w-[540px]
              ">

                {/* MAIN VISUAL CARD */}

                <div className="
                  why-visual-main relative
                  overflow-hidden rounded-3xl
                  border border-blue-100
                  bg-gradient-to-br
                  from-[#0B2A5B]
                  via-[#164B91]
                  to-[#2563EB]
                  p-7 shadow-2xl
                  sm:p-10
                ">

                  <div className="
                    absolute -right-16 -top-16
                    h-64 w-64 rounded-full
                    border border-white/15
                  " />

                  <div className="
                    absolute -right-8 -top-8
                    h-44 w-44 rounded-full
                    border border-white/15
                  " />

                  <div className="relative z-10">

                    <span className="
                      inline-flex items-center gap-2
                      rounded-full border border-white/20
                      bg-white/10 px-4 py-2
                      text-xs font-bold
                      tracking-wider text-white
                    ">
                      <Sparkles size={15} />
                      ENGINEERING EXCELLENCE
                    </span>

                    <h2 className="
                      mt-10 max-w-sm
                      text-3xl leading-tight
                      font-extrabold !text-white
                      sm:text-4xl
                    ">
                      From Concept
                      <br />
                      To Manufacturing.
                    </h2>

                    <p className="
                      mt-4 max-w-sm
                      text-sm leading-7 text-blue-100
                    ">
                      Every engineering decision moves your product
                      closer to a practical and manufacturable solution.
                    </p>

                    <div className="mt-10 space-y-4">

                      {[
                        'Product Design & Development',
                        'Engineering Analysis & Validation',
                        'Manufacturing Integration',
                      ].map((text) => (
                        <div
                          key={text}
                          className="
                            flex items-center gap-3
                            border-b border-white/15
                            pb-4 text-sm font-semibold
                            text-white
                          "
                        >
                          <CheckCircle2
                            size={19}
                            className="shrink-0 text-sky-300"
                          />

                          {text}
                        </div>
                      ))}

                    </div>

                  </div>
                </div>

                {/* MANUFACTURING READY FLOATING CARD */}

                {/* <div className="
                  absolute
                  -bottom-5 left-4
                  z-20
                  w-max max-w-[calc(100%-2rem)]
                  rounded-2xl
                  border border-blue-100
                  bg-white
                  p-4 sm:p-5
                  shadow-xl
                ">

                  <div className="flex items-center gap-3">

                    <div className="
                      flex h-12 w-12 shrink-0
                      items-center justify-center
                      rounded-xl
                      bg-blue-50
                      text-blue-700
                    ">
                      <Factory size={25} />
                    </div>

                    <div className="min-w-0">

                      <p className="
                        text-sm font-bold
                        text-[#102D5C]
                        sm:text-base
                      ">
                        Manufacturing Ready
                      </p>

                      <p className="
                        mt-1 text-xs
                        text-slate-500
                        sm:text-sm
                      ">
                        Designed with purpose
                      </p>

                    </div>

                  </div>

                </div> */}

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =================================
          B. WHY CHOOSE US
      ================================= */}

      <section className="
        section-y why-reasons-section
        relative overflow-hidden
        bg-[#F4F8FE]
      "
      style={{
          backgroundImage: `linear-gradient(
          rgba(255, 255, 255, 0.88),
          rgba(255, 255, 255, 0.92)
          ),
          url(${whyHeroBg})`,
        }}
      
      >

        <div className="container-site relative z-10">

          <Reveal className="mx-auto max-w-3xl text-center">

            <Eyebrow className="mb-4 justify-center">
              Our Competitive Advantage
            </Eyebrow>

            <h2 className="
              text-3xl font-extrabold
              tracking-tight text-navy
              sm:text-4xl lg:text-5xl
            ">
              {reasons.title}
              <span className="why-gradient-text">.</span>
            </h2>

            <p className="
              mt-4 text-base leading-7
              text-slate-600
            ">
              {reasons.subtitle}
            </p>

          </Reveal>

          <Stagger
            as="ul"
            className="
              mt-12 grid gap-6
              sm:grid-cols-2 lg:grid-cols-3
            "
          >

            {reasons.items.map((item, index) => (
              <StaggerItem
                as="li"
                key={item.title}
              >
                <FeatureCard
                  {...item}
                  index={index}
                />
              </StaggerItem>
            ))}

          </Stagger>

        </div>

      </section>


      {/* =================================
          C. OUR SOLUTIONS
      ================================= */}

      <section className="section-y bg-white"
      style={{
          backgroundImage: `linear-gradient(
          rgba(255, 255, 255, 0.88),
          rgba(255, 255, 255, 0.92)
          ),
          url(${whyHeroBg})`,
        }}
      
      >

        <div className="container-site">

          <Reveal className="mx-auto max-w-3xl text-center">

            <Eyebrow className="mb-4 justify-center">
              Your Idea. Our Expertise.
            </Eyebrow>

            <h2 className="
              text-3xl leading-tight
              font-extrabold tracking-tight
              text-navy sm:text-4xl lg:text-5xl
            ">
              Your Idea.

              <span className="why-gradient-text">
                {' '}Our Design.
              </span>

              <br />
              Real Solutions.
            </h2>

            <p className="
              mt-5 text-base leading-7
              text-slate-600
            ">
              We transform ideas into engineered products through
              structured design, prototyping and manufacturing.
            </p>

          </Reveal>

          <Stagger className="
            mt-12 grid items-stretch
            gap-7 lg:grid-cols-2
          ">

            {/* SOLUTION PANEL */}

            <StaggerItem>

              <SolutionPanel
                tone="green"
                items={solution.items}
                image={solution.image}
                imageAlt={solution.imageAlt}
                header={
                  <>
                    <span className="
                      inline-flex items-center gap-2
                      rounded-full bg-success
                      px-4 py-2 text-xs
                      font-bold text-white
                    ">
                      <solution.badgeIcon
                        size={16}
                        strokeWidth={2.4}
                      />

                      {solution.badge}
                    </span>

                    <h3 className="
                      mt-5 text-2xl
                      font-extrabold text-navy
                    ">
                      {solution.title}
                    </h3>

                    <p className="
                      mt-3 text-sm leading-7
                      text-slate-600
                    ">
                      {solution.subtitle}
                    </p>
                  </>
                }
              />

            </StaggerItem>

            {/* PROTOTYPE PANEL */}

            <StaggerItem>

              <SolutionPanel
                tone="blue"
                items={prototype.items}
                header={
                  <div className="flex items-start gap-4">

                    <span className="
                      flex h-12 w-12 shrink-0
                      items-center justify-center
                      rounded-xl bg-blue-700
                      text-white shadow-lg
                    ">
                      <prototype.icon
                        size={25}
                        strokeWidth={2}
                      />
                    </span>

                    <div>

                      <h3 className="
                        text-2xl font-extrabold
                        text-navy
                      ">
                        {prototype.title}
                      </h3>

                      <p className="
                        mt-3 text-sm leading-7
                        text-slate-600
                      ">
                        {prototype.subtitle}
                      </p>

                    </div>

                  </div>
                }
              />

            </StaggerItem>

          </Stagger>

        </div>

      </section>


      {/* =================================
          D. ENGINEERING JOURNEY
      ================================= */}

      <section
        id="engineering-journey"
        className="
          why-journey-section
          on-dark section-y
          relative overflow-hidden
          bg-[#071C3F]
        "
      >

        <div className="why-journey-glow" />

        <div className="container-site relative z-10">

          <Reveal className="mx-auto max-w-3xl text-center">

            <Eyebrow className="mb-4 justify-center">
              {journey.eyebrow}
            </Eyebrow>

            <h2 className="
              text-3xl font-extrabold
              tracking-tight text-white
              sm:text-4xl lg:text-5xl
            ">
              {journey.title}
            </h2>

            <p className="
              mt-5 text-base leading-7
              text-blue-100/75
            ">
              {journey.subtitle}
            </p>

          </Reveal>

          <ol className="
            mt-14 grid gap-6
            sm:grid-cols-2
            lg:grid-cols-4
            xl:grid-cols-7
          ">

            {journey.steps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 0.06}
              >

                <ProcessStep
                  step={step}
                  index={index}
                  isLast={index === journey.steps.length - 1}
                />

              </Reveal>
            ))}

          </ol>

        </div>

      </section>


      {/* =================================
          E. TRUSTED CLIENTS
      ================================= */}

{/* =================================
     E. TRUSTED CLIENTS
================================= */}

<section className="
  section-y bg-[#F4F8FE]
"
style={{
          backgroundImage: `linear-gradient(
          rgba(255, 255, 255, 0.88),
          rgba(255, 255, 255, 0.92)
          ),
          url(${whyHeroBg})`,
        }}

>

  <div className="container-site">

    <Reveal>

      <Card className="
        why-client-card overflow-hidden
        border border-blue-100
        bg-white p-6
        sm:p-10 lg:p-12
      ">

        {/* HEADING */}

        <div className="
          flex flex-col justify-between
          gap-6 md:flex-row
          md:items-end
        ">

          <div>

            <Eyebrow className="mb-4">
              Our Valued Partnerships
            </Eyebrow>

            <h2 className="
              text-3xl font-extrabold
              tracking-tight text-navy
              sm:text-4xl
            ">
              {clients.title}
            </h2>

            <p className="
              mt-3 max-w-xl
              text-sm leading-7
              text-slate-600 sm:text-base
            ">
              {clients.subtitle}
            </p>

          </div>

          <span className="
            inline-flex items-center gap-2
            self-start rounded-full
            bg-blue-50 px-4 py-2
            text-xs font-bold text-blue-700
            md:self-auto
          ">

            <CheckCircle2 size={16} />

            Building Trust Through Engineering

          </span>

        </div>

        {/* COMPANY LOGO IMAGES */}

        <div className="
          mt-9 border-t
          border-blue-100 pt-8
        ">

          <div className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-5
            gap-x-8
            gap-y-10
          ">

            {clients.logos.map((company) => (

              <div
                key={company.name}
                className="
                  flex items-center
                  justify-center
                "
              >

                <img
                  src={company.src}
                  alt={`${company.name} logo`}
                  title={company.name}
                  className="
                    h-14
                    w-full
                    max-w-[170px]
                    object-contain
                  "
                  loading="lazy"
                />

              </div>

            ))}

          </div>

        </div>

      </Card>

    </Reveal>

  </div>

</section>

      

    </main>
  );
}
