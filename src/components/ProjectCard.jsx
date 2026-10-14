import { ArrowRight } from 'lucide-react'

function Detail({ label, text }) {
  return (
    <div>
      <p className="text-[12px] font-medium text-muted">{label}</p>
      <p className="mt-1 text-[15px] leading-snug text-navy/80 xl:text-[13.5px]">{text}</p>
    </div>
  )
}

export default function ProjectCard({ project, onView }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          width="400"
          height="300"
          loading="lazy"
          className="aspect-[20/19] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute -bottom-3 left-4 rounded-md border border-line bg-[#eef4fc] px-3 py-1 text-[11px] font-medium text-[#3f6ea8]">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5 pt-7">
        <h3 className="text-[16px] font-bold">{project.title}</h3>
        <Detail label="Challenge" text={project.challenge} />
        <Detail label="Solution" text={project.solution} />
        <Detail label="Result" text={project.result} />
        <button
          type="button"
          onClick={() => onView(project)}
          className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start text-[15px] xl:text-[14px] font-semibold text-primary hover:text-primary-dark"
        >
          View Project
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          <span className="sr-only">: {project.title}</span>
        </button>
      </div>
    </article>
  )
}
