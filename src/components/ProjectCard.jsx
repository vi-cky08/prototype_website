import { ArrowRight, TrendingUp } from 'lucide-react'
import Card from './Card.jsx'

function Detail({ label, text }) {
  return (
    <div>
      <p className="text-[12px] font-semibold tracking-wide text-muted uppercase">{label}</p>
      <p className="mt-1 text-[15px] leading-snug text-navy/80 xl:text-[13.5px]">{text}</p>
    </div>
  )
}

export default function ProjectCard({ project, onView }) {
  return (
    <Card as="article" accent hover className="group flex h-full flex-col overflow-hidden">
      <div className="relative">
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            width="400"
            height="380"
            loading="lazy"
            className="aspect-[20/19] w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.06]"
          />
          {/* Gradient overlay for depth */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/45 via-navy-900/5 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
        {/* Anchored to the image's bottom edge so a wrapped row grows upward over the image, not into the card body */}
        <div className="absolute -bottom-3 left-4 right-4 flex flex-wrap gap-2">
          <span className="rounded-md border border-primary-100 bg-[#eef4fc] px-3 py-1 text-[11px] font-medium text-[#3f6ea8] shadow-sm">
            {project.category}
          </span>
          {project.workType && (
            <span className="rounded-md border border-[#3f6ea8] bg-white px-3 py-1 text-[11px] font-medium text-navy shadow-sm">
              {project.workType}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5 pt-7">
        <h3 className="text-[16px] font-bold">{project.title}</h3>
        <Detail label="Challenge" text={project.challenge} />
        <Detail label="Solution" text={project.solution} />
        {/* Result highlight with a green accent */}
        <div className="relative overflow-hidden rounded-lg bg-success/[0.07] py-2.5 pr-3 pl-4">
          <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-success to-[#22c55e]" />
          <p className="flex items-center gap-1.5 text-[12px] font-semibold tracking-wide text-success uppercase">
            <TrendingUp className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            Result
          </p>
          <p className="mt-1 text-[15px] leading-snug font-medium text-navy/85 xl:text-[13.5px]">{project.result}</p>
        </div>
        <button
          type="button"
          onClick={() => onView(project)}
          className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start text-[15px] font-semibold text-primary transition-colors hover:text-primary-dark xl:text-[14px]"
        >
          View Project
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          <span className="sr-only">: {project.title}</span>
        </button>
      </div>
    </Card>
  )
}
