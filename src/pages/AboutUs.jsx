
import {
  Eye,
  Target,
  ExternalLink,
  Check,
  Award,
  ArrowRight,
  Mail,
  MessageCircle,
} from 'lucide-react';


import { Link } from 'react-router-dom';


import whyHeroBg from "../assets/why-hero-bg.png";
import visionBg from "../assets/mission-vission-banner.png";

import SectionHeading, {
  Eyebrow,
  headingSizes,
} from '../components/SectionHeading.jsx';

import CheckList from '../components/CheckList.jsx';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import CompanyIntro from '../components/CompanyIntro.jsx';

import {
  Reveal,
  Stagger,
  StaggerItem,
} from '../components/Motion.jsx';

import {
  charteredEngineer as ce,
  director,
  visionMission,
} from '../data/team.js';


const visionIcons = [Eye, Target];


// EXPERIENCE AND SPECIALIZATION COMPONENT
function SubList({ title, items }) {
  return (
    <div className="
      h-full rounded-xl border border-blue-100
      bg-gradient-to-br from-white to-blue-50/70
      p-5 shadow-sm transition-all duration-300
      hover:-translate-y-1 hover:border-blue-300
      hover:shadow-lg
    ">

      <h4 className="
        mb-4 text-[15px] font-extrabold
        text-[#102D5C]
      ">
        {title}
      </h4>

      <ul className="space-y-3">

        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm leading-6 text-slate-700"
          >

            <Check
              size={17}
              strokeWidth={2.8}
              className="mt-1 shrink-0 text-blue-600"
            />

            {item}

          </li>
        ))}

      </ul>

    </div>
  );
}


export default function AboutUs() {
  return (
    <main className="overflow-hidden bg-white"
    >

      {/* A. COMPANY INTRODUCTION */}
      <CompanyIntro />


      {/* B. VISION AND MISSION */}
      <section className="bg-white px-5 py-8 sm:px-8 lg:px-12"
      style={{
                backgroundImage: `linear-gradient(
                rgba(255, 255, 255, 0.88),
                rgba(255, 255, 255, 0.92)
                ),
                url(${whyHeroBg})`,
              }}
      >

        <div className="mx-auto max-w-[1400px]">

          <Reveal className="
            relative isolate overflow-hidden
            rounded-2xl shadow-xl
          ">

            <img
              src={visionBg}
              alt=""
              loading="lazy"
              className="
                absolute inset-0 -z-20
                h-full w-full object-cover
              "
            />

            <div className="
              absolute inset-0 -z-10
              bg-gradient-to-r
              from-[#092653]/95
              via-[#123B70]/85
              to-[#102D5C]/55
            " />

            <Stagger className="
              grid gap-5 px-5 py-7
              sm:px-10 sm:py-9
              md:grid-cols-2 lg:px-16
            ">

              {[visionMission.vision, visionMission.mission].map(
                (block, index) => {

                  const Icon = visionIcons[index];

                  return (
                    <StaggerItem
                      key={block.title}
                      className="
                        group flex gap-5 rounded-xl
                        border border-white/20
                        bg-white/10 p-6
                        shadow-lg backdrop-blur-md
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:bg-white/15
                      "
                    >

                      <span className="
                        flex h-12 w-12 shrink-0
                        items-center justify-center
                        rounded-xl border border-white/20
                        bg-white/10 text-blue-200
                        transition group-hover:scale-110
                      ">

                        <Icon size={26} />

                      </span>

                      <div>

                        <h2 className="vision-mission-description text-2xl sm:text-3xl font-extrabold tracking-tight"
                         style={{ color: "white" }}>
                          {block.title}
                        </h2>

                        <p className="
                          mt-3 text-sm leading-7
                          font-medium
                          text-white/85 sm:text-[15px]
                        ">
                          {block.text}
                        </p>

                      </div>

                    </StaggerItem>
                  );
                }
              )}

            </Stagger>

          </Reveal>

        </div>

      </section>


      {/* C. TECHNICAL DIRECTOR */}
      <section className="
        bg-[#F4F8FE] px-5 py-10
        sm:px-8 lg:px-12 lg:py-14
      "
      style={{
                backgroundImage: `linear-gradient(
                rgba(255, 255, 255, 0.88),
                rgba(255, 255, 255, 0.92)
                ),
                url(${whyHeroBg})`,
              }}
      
      >

        <div className="mx-auto max-w-[1400px]">

          <Reveal>

            <div className="mb-7">

              <Eyebrow className="mb-2">
                {director.eyebrow}
              </Eyebrow>

              <h2 className={`${headingSizes.h2} text-[#102D5C]`}>
                {director.title}
              </h2>

              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                {director.subtitle}
              </p>

            </div>

          </Reveal>


          <Reveal>

            <div className="
              relative overflow-hidden
              rounded-2xl border border-blue-100
              bg-white p-5 shadow-lg
              sm:p-8 lg:p-9
            ">

              {/* Decorative background */}
              <div className="
                pointer-events-none absolute
                -right-24 -top-24 h-72 w-72
                rounded-full bg-blue-100/60 blur-3xl
              " />


              <div className="
                relative grid items-start gap-7
                lg:grid-cols-[320px_minmax(0,1fr)]
                xl:grid-cols-[360px_minmax(0,1fr)]
                lg:gap-8
              ">

                {/* DIRECTOR IMAGE */}
                <div className="
                  mx-auto w-full max-w-[250px]
                  h-fit self-start
                  overflow-hidden
                  rounded-2xl bg-gradient-to-br
                  from-blue-500 to-blue-900
                  p-[3px] shadow-xl
                  lg:max-w-none
                ">

                  <img
                    src={director.image}
                    alt={director.imageAlt}
                    width="400"
                    height="500"
                    loading="lazy"
                    className="
                      block aspect-[4/5] w-full
                      rounded-[13px] bg-white
                      object-cover object-center
                    "
                  />

                </div>


                {/* DIRECTOR DETAILS */}
                <div className="min-w-0">

                  {/* NAME AND DESIGNATION */}
                  <div className="flex flex-wrap items-center gap-3">

                    <h3 className="
                      text-3xl font-extrabold
                      tracking-tight text-blue-700
                      sm:text-4xl
                    ">
                      {director.name}
                    </h3>

                    <span className="
                      rounded-full border border-blue-200
                      bg-blue-50 px-3 py-1
                      text-[10px] font-bold
                      uppercase tracking-wider
                      text-blue-700
                    ">
                      Technical Leadership
                    </span>

                  </div>

                  <p className="
                    mt-2 text-sm font-medium
                    text-slate-600 sm:text-base
                  ">
                    {director.role}
                  </p>


                  {/* QUALIFICATIONS */}
                  <div className="mt-6">

                    <p className="
                      mb-3 text-xs font-bold
                      uppercase tracking-[0.15em]
                      text-slate-500
                    ">
                      Education & Professional Qualifications
                    </p>

                    <ul className="grid gap-3 sm:grid-cols-2">

                      {director.credentials.map(({ icon: Icon, text }) => (

                        <li
                          key={text}
                          className="
                            group flex min-h-[68px]
                            items-center gap-3
                            rounded-xl border border-blue-100
                            bg-gradient-to-r from-blue-50/80
                            to-white px-4 py-3
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:border-blue-300
                            hover:shadow-md
                          "
                        >

                          <span className="
                            flex h-10 w-10 shrink-0
                            items-center justify-center
                            rounded-lg bg-blue-100
                            text-blue-700 transition
                            group-hover:bg-blue-700
                            group-hover:text-white
                          ">

                            <Icon size={19} />

                          </span>

                          <span className="
                            text-sm font-semibold
                            leading-5 text-[#19365F]
                          ">
                            {text}
                          </span>

                        </li>

                      ))}

                    </ul>

                  </div>


                  {/* EXPERIENCE AND SPECIALIZATIONS */}
                  <div className="
                    mt-6 grid gap-4
                    sm:grid-cols-2
                  ">

                    <SubList
                      title="Professional Experience"
                      items={director.experience}
                    />

                    <SubList
                      title="Specializations"
                      items={director.specializations}
                    />

                  </div>

                </div>

              </div>


              {/* ENGINEERING QUOTE */}
              <blockquote className="
                relative mt-8 flex flex-col
                gap-4 overflow-hidden
                rounded-xl border border-blue-100
                bg-gradient-to-r from-blue-50
                to-[#DFECFF] p-5
                sm:flex-row sm:items-center
                sm:justify-between sm:px-7
              ">

                <div className="flex items-start gap-3">

                  <p className="
                    text-sm font-semibold
                    leading-6 text-[#102D5C]
                    sm:text-base
                  ">
                    {director.quote[0]}
                    <br />
                    {director.quote[1]}
                  </p>

                </div>

                <a
                  href={ce.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex shrink-0
                    items-center justify-center
                    gap-2 rounded-lg bg-blue-700
                    px-5 py-3 text-sm font-bold
                    text-white transition
                    hover:bg-blue-800 hover:shadow-lg
                  "
                >
                  Learn More
                  <ExternalLink size={15} />

                </a>

              </blockquote>

            </div>

          </Reveal>

        </div>

      </section>


      {/* D. CHARTERED ENGINEER */}
      <section className="
        bg-white px-5 py-12
        sm:px-8 lg:px-12 lg:py-16
      "
      style={{
                backgroundImage: `linear-gradient(
                rgba(255, 255, 255, 0.88),
                rgba(255, 255, 255, 0.92)
                ),
                url(${whyHeroBg})`,
              }}
      
      >

        <div className="mx-auto max-w-[1400px]">

          <Reveal>

            <SectionHeading
              eyebrow={ce.eyebrow}
              title={ce.title}
              subtitle={ce.description}
            />

          </Reveal>


          <div className="
            mt-8 grid items-center
            gap-8 lg:grid-cols-2 lg:gap-12
          ">

            {/* BENEFITS */}
            <Reveal>

              <Card className="
                h-full border border-blue-100
                p-6 shadow-md transition
                hover:shadow-lg sm:p-8
              ">

                <div className="flex items-center gap-3">

                  <span className="
                    flex h-11 w-11 items-center
                    justify-center rounded-xl
                    bg-blue-100 text-blue-700
                  ">
                    <Award size={23} />
                  </span>

                  <h3 className="
                    text-lg font-extrabold
                    text-[#102D5C]
                  ">
                    {ce.benefitsTitle}
                  </h3>

                </div>

                <CheckList
                  items={ce.benefits}
                  className="mt-6 space-y-3"
                />

                <div className="mt-7">

                  <Button
                    href={ce.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ce.ctaAriaLabel}
                    className="w-full sm:w-auto"
                  >
                    {ce.cta}
                    <ExternalLink size={16} />

                  </Button>

                </div>

              </Card>

            </Reveal>


            {/* CERTIFICATE IMAGE */}
            <Reveal delay={0.1}>

              <div className="
                overflow-hidden rounded-2xl
                border border-blue-100
                bg-white p-3 shadow-xl
                transition duration-500
                hover:-translate-y-1 hover:shadow-2xl
              ">

                <img
                  src={ce.image}
                  alt={ce.imageAlt}
                  width="560"
                  height="340"
                  loading="lazy"
                  className="
                    aspect-[28/17] w-full
                    rounded-xl object-cover
                  "
                />

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* E. CONTACT CTA - HIGHLIGHTED */}
      <section className="
        about-contact-cta
        relative isolate overflow-hidden
        bg-[#092653] px-5 py-14
        sm:px-8 lg:px-12 lg:py-16
      ">

        {/* Background decoration */}
        <div className="
          pointer-events-none absolute
          -right-24 -top-32 -z-10
          h-96 w-96 rounded-full
          border-[50px] border-white/5
        " />

        <div className="
          pointer-events-none absolute
          -bottom-32 -left-20 -z-10
          h-80 w-80 rounded-full
          bg-blue-500/20 blur-3xl
        " />


        <Reveal>

          <div className="
            mx-auto flex max-w-[1300px]
            flex-col gap-8
            lg:flex-row lg:items-center
            lg:justify-between
          ">

            {/* CONTACT CONTENT */}
            <div className="max-w-2xl">

              <p className="
                flex items-center gap-2
                text-xs font-bold uppercase
                tracking-[0.2em] text-blue-300
              ">

                <span className="h-[2px] w-8 bg-blue-400" />

                Let's Work Together

              </p>

              <h2 className="
                mt-4 text-3xl font-extrabold
                tracking-tight text-white
                sm:text-4xl lg:text-5xl
              ">
                Have an Engineering Project in Mind?
              </h2>

              <p className="
                mt-4 max-w-xl text-sm
                leading-7 text-blue-100/80
                sm:text-base
              ">
                Discuss your product design,
                manufacturing, tooling or prototype
                requirements with our engineering team.
                Let's turn your ideas into practical solutions.
              </p>

            </div>


            {/* CONTACT ACTIONS */}
            <div className="
              flex shrink-0 flex-col gap-3
              sm:flex-row lg:flex-col
              xl:flex-row
            ">

              <Link
                to="/contact"
                className="
                  group inline-flex items-center
                  justify-center gap-3 rounded-xl
                  bg-blue-600 px-7 py-4
                  text-sm font-bold text-white
                  shadow-lg shadow-blue-950/30
                  transition duration-300
                  hover:-translate-y-1
                  hover:bg-blue-500 hover:shadow-xl
                "
              >

                <MessageCircle size={19} />

                Contact Our Team

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />

              </Link>


              <Link
                to="/contact"
                className="
                  inline-flex items-center
                  justify-center gap-2 rounded-xl
                  border border-white/30
                  bg-white/10 px-7 py-4
                  text-sm font-bold text-white
                  backdrop-blur-sm transition
                  hover:bg-white hover:text-[#102D5C]
                "
              >

                <Mail size={18} />

                Start Your Project

              </Link>

            </div>

          </div>

        </Reveal>

      </section>

    </main>
  );
}
