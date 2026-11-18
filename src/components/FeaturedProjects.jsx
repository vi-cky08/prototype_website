
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";

import { Reveal } from "./Motion.jsx";
import { projects, projectsIntro } from "../data/projects.js";

export default function FeaturedProjects() {
  const [active, setActive] = useState(null);
  const sliderRef = useRef(null);

  // Always start from the first project
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = 0;
    }
  }, []);

  // Scroll one card at a time
  const scrollProjects = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector(".project-slide");
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;
    const gap = 20;

    slider.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full min-w-0 overflow-hidden bg-grey py-15">

      {/* SECTION HEADING */}
      <Reveal className="container-site relative">
        <SectionHeading as="h2" {...projectsIntro} />
      </Reveal>

      {/* PROJECT SLIDER */}
      <div className="relative mt-12 w-full min-w-0">

        {/* LEFT ARROW */}
        <button
          type="button"
          onClick={() => scrollProjects(-1)}
          aria-label="Previous projects"
          className="
            absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20
            flex h-10 w-10 sm:h-11 sm:w-11
            items-center justify-center
            rounded-full border border-primary
            bg-white text-primary shadow-md
            transition-colors duration-200
            hover:bg-primary hover:text-white
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
            absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20
            flex h-10 w-10 sm:h-11 sm:w-11
            items-center justify-center
            rounded-full border border-primary
            bg-white text-primary shadow-md
            transition-colors duration-200
            hover:bg-primary hover:text-white
          "
        >
          <ChevronRight size={24} />
        </button>

        {/* PROJECT CARDS */}
        <div
          ref={sliderRef}
          className="
            project-slider
            flex w-full min-w-0
            gap-5
            overflow-x-auto overflow-y-hidden
            scroll-smooth
            snap-x snap-mandatory
            pb-5
            no-scrollbar
          "
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-slide snap-start"
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
      <ProjectModal
        project={active}
        onClose={() => setActive(null)}
      />

    </section>
  );
}
