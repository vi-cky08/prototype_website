import { ArrowRight, TrendingUp } from 'lucide-react'
import Card from './Card.jsx'

function Detail({ label, text }) {
  return (
    <div>
      <p className="text-[12px] font-semibold tracking-wide text-muted uppercase">{label}</p>
      <p className="mt-1 text-[15px] leading-snug text-ink xl:text-[13.5px]">{text}</p>
    </div>
  )
}

export default function ProjectCard({ project, onView }) {
  return (
    <Card as="article" hover className="flex h-full flex-col overflow-hidden">
      <div className="relative">
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            width="400"
            height="380"
            loading="lazy"
            className="aspect-[20/19] w-full object-cover"
          />
        </div>
        {/* Anchored to the image's bottom edge so a wrapped row grows upward over the image, not into the card body */}
        <div className="absolute -bottom-3 left-4 right-4 flex flex-wrap gap-2">
          <span className="rounded-[4px] border border-line bg-white px-3 py-1 text-[11px] font-medium text-primary">
            {project.category}
          </span>
          {project.workType && (
            <span className="rounded-[4px] border border-navy bg-white px-3 py-1 text-[11px] font-medium text-navy">
              {project.workType}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5 pt-7">
        <h3 className="text-[16px] font-bold">{project.title}</h3>
        <Detail label="Challenge" text={project.challenge} />
        <Detail label="Solution" text={project.solution} />
        {/* Result highlight with a solid green left rule */}
        <div className="rounded-[4px] border-l-4 border-success bg-grey py-2.5 pr-3 pl-3">
          <p className="flex items-center gap-1.5 text-[12px] font-semibold tracking-wide text-success uppercase">
            <TrendingUp className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            Result
          </p>
          <p className="mt-1 text-[15px] leading-snug font-medium text-ink xl:text-[13.5px]">{project.result}</p>
        </div>
        <button
          type="button"
          onClick={() => onView(project)}
          className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start text-[15px] font-semibold text-primary transition-colors hover:text-primary-dark xl:text-[14px]"
        >
          View Project
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">: {project.title}</span>
        </button>
      </div>
    </Card>
  )
}
