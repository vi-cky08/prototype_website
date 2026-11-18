import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";

import { Reveal } from "./Motion.jsx";
import { projects, projectsIntro } from "../data/projects.js";

export default function FeaturedProjects() {
  const [active, setActive] = useState(null);

  const sliderRef = useRef(null);

  const scrollProjects = (direction) => {
    sliderRef.current?.scrollBy({
      left: direction * 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-grey py-15">
      {/* SECTION HEADING */}
      <Reveal className="container-site relative">
        <SectionHeading as="h2" {...projectsIntro} />
      </Reveal>

      {/* HORIZONTAL AUTO SCROLL */}
      {/* <div className="relative mt-12 w-full min-w-0 max-w-full overflow-hidden">

        <div className="project-marquee"> */}

      {/* FIRST ROW */}
      {/* <ul className="project-track">
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
          </ul> */}

      {/* DUPLICATE ROW FOR INFINITE SCROLL */}
      {/* <ul className="project-track" aria-hidden="true">
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
      </div> */}

     
<div className="relative mt-12 w-full">

  {/* LEFT ARROW */}
  <button
    type="button"
    onClick={() => scrollProjects(-1)}
    aria-label="Previous projects"
    className="
      absolute left-3 top-1/2 -translate-y-1/2 z-20
      flex h-11 w-11 items-center justify-center
      rounded-full border border-primary
      bg-white text-primary shadow-md
      transition hover:bg-primary hover:text-white
    "
  >
    <ChevronLeft size={24} />
  </button>

  {/* RIGHT ARROW */}
  <button
    type="button"
    onClick={() => scrollProjects(1)}
    aria-label="Next projects"
    className="
      absolute right-3 top-1/2 -translate-y-1/2 z-20
      flex h-11 w-11 items-center justify-center
      rounded-full border border-primary
      bg-white text-primary shadow-md
      transition hover:bg-primary hover:text-white
    "
  >
    <ChevronRight size={24} />
  </button>

  {/* SINGLE PROJECT ROW */}
  <div
    ref={sliderRef}
    className="
      flex gap-5 overflow-x-auto scroll-smooth
      px-14 sm:px-16 pb-5 no-scrollbar
    "
  >
    {projects.map((project) => (
      <div
        key={project.id}
        className="w-[340px] shrink-0 sm:w-[360px] lg:w-[380px]"
      >
        <ProjectCard
          project={project}
          onView={setActive}
        />
      </div>
    ))}
  </div>

</div>



      {/* PROJECT DETAILS MODAL */}
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
