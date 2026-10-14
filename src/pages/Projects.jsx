import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import { projects, projectsIntro } from '../data/projects.js'

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
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
  )
}
