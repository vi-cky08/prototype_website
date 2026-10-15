import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import Button from '../components/Button.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Pattern from '../components/Pattern.jsx'
import { Reveal, Stagger, StaggerItem } from '../components/Motion.jsx'
import { projects, projectsIntro } from '../data/projects.js'
import { services, servicesCta, servicesIntro } from '../data/services.js'

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <>
      <section className="section-y relative overflow-hidden bg-mesh">
        <Pattern variant="grid" className="h-[480px]" />
        <Reveal className="container-site relative">
          <SectionHeading as="h1" {...projectsIntro} />
        </Reveal>

        {/* Swipeable carousel on phones, 2 columns on tablet, 3 on laptop, single row of five on large desktop */}
        <div className="container-site relative mt-12">
          <Stagger as="ul" className="no-scrollbar relative -mx-4 flex scroll-px-4 snap-x snap-mandatory gap-4 overflow-x-auto px-4 pt-2 pb-8 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-3 xl:grid-cols-5">
            {projects.map((p) => (
              <StaggerItem as="li" key={p.id} className="w-[82%] max-w-[320px] shrink-0 snap-start sm:w-auto sm:max-w-none">
                <ProjectCard project={p} onView={setActive} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <ProjectModal project={active} onClose={() => setActive(null)} />
      </section>

      {/* Our Services */}
      <section className="section-y bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeading {...servicesIntro} />
          </Reveal>

          <Stagger as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {services.map((s) => (
              <StaggerItem as="li" key={s.title} className="h-full">
                <ServiceCard {...s} />
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="on-dark relative mt-12 overflow-hidden rounded-3xl bg-navy-gradient shadow-lg">
            <Pattern variant="grid-light" />
            <div className="relative flex flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-9">
              <p className="text-[18px] font-bold tracking-tight text-white sm:text-[20px]">{servicesCta.text}</p>
              <Button to={servicesCta.to} variant="light" className="w-full shrink-0 sm:w-auto">
                {servicesCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
