
import { useState } from 'react';

import SectionHeading from './SectionHeading.jsx';
import ProjectCard from './ProjectCard.jsx';
import ProjectModal from './ProjectModal.jsx';

import { Reveal } from './Motion.jsx';
import { projects, projectsIntro } from '../data/projects.js';

export default function FeaturedProjects() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative overflow-hidden bg-grey py-15">

      {/* SECTION HEADING */}
      <Reveal className="container-site relative">
        <SectionHeading
          as="h2"
          {...projectsIntro}
        />
      </Reveal>

      {/* HORIZONTAL AUTO SCROLL */}
      <div className="relative mt-12 w-full overflow-hidden">

        <div className="project-marquee">

          {/* FIRST ROW */}
          <ul className="project-track">
            {projects.map((project) => (
              <li
                key={`first-${project.id}`}
                className="w-[340px] shrink-0 sm:w-[360px] lg:w-[380px]"
              >
                <ProjectCard
                  project={project}
                  onView={setActive}
                />
              </li>
            ))}
          </ul>

          {/* DUPLICATE ROW FOR INFINITE SCROLL */}
          <ul className="project-track" aria-hidden="true">
            {projects.map((project) => (
              <li
                key={`second-${project.id}`}
                className="w-[340px] shrink-0 sm:w-[360px] lg:w-[380px]"
              >
                <ProjectCard
                  project={project}
                  onView={() => {}}
                />
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* PROJECT DETAILS MODAL */}
      <ProjectModal
        project={active}
        onClose={() => setActive(null)}
      />

    </section>
  );
}
