import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import Button from '../components/Button.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { projects, projectsIntro } from '../data/projects.js'
import { services, servicesCta, servicesIntro } from '../data/services.js'

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <>
      <section className="section-y bg-gradient-to-b from-white to-page">
        <div className="container-site">
          <SectionHeading as="h1" {...projectsIntro} />
        </div>

        {/* Swipeable carousel on phones, 2 columns on tablet, 3 on laptop, single row of five on large desktop */}
        <div className="container-site mt-10">
          <ul className="no-scrollbar relative -mx-4 flex scroll-px-4 snap-x snap-mandatory gap-4 overflow-x-auto px-4 pt-1 pb-6 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-3 xl:grid-cols-5">
            {projects.map((p) => (
              <li key={p.id} className="w-[82%] max-w-[320px] shrink-0 snap-start sm:w-auto sm:max-w-none">
                <ProjectCard project={p} onView={setActive} />
              </li>
            ))}
          </ul>
        </div>

        <ProjectModal project={active} onClose={() => setActive(null)} />
      </section>

      {/* Our Services */}
      <section className="section-y bg-white">
        <div className="container-site">
          <SectionHeading {...servicesIntro} />

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {services.map((s) => (
              <li key={s.title}>
                <ServiceCard {...s} />
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-5 rounded-2xl bg-gradient-to-r from-navy-deep to-primary-dark px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-9">
            <p className="text-[17px] font-semibold text-white sm:text-[18px]">{servicesCta.text}</p>
            <Button to={servicesCta.to} variant="light" className="w-full shrink-0 sm:w-auto">
              {servicesCta.label}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
