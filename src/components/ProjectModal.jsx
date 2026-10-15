import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import Button from './Button.jsx'

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (project && !dialog.open) dialog.showModal()
    if (!project && dialog.open) dialog.close()
  }, [project])

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      className="m-auto max-h-[90dvh] w-[min(92vw,720px)] overflow-y-auto rounded-3xl p-0 shadow-2xl backdrop:bg-navy-900/60 backdrop:backdrop-blur-sm"
      aria-labelledby="project-modal-title"
    >
      {project && (
        <div className="grid md:grid-cols-2">
          <img src={project.image} alt={project.title} width="400" height="300" className="aspect-[16/10] w-full object-cover md:aspect-[4/3] md:h-full" />
          <div className="relative p-5 sm:p-7">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-sky hover:text-navy"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <span className="rounded-md border border-primary-100 bg-[#eef4fc] px-3 py-1 text-[11px] font-medium text-[#3f6ea8]">
              {project.category}
            </span>
            <h2 id="project-modal-title" className="mt-4 pr-8 text-[22px] font-bold sm:text-2xl">
              {project.title}
            </h2>
            <dl className="mt-5 space-y-4 text-[15px]">
              {['challenge', 'solution', 'result'].map((k) => (
                <div key={k}>
                  <dt className="text-[12px] font-semibold tracking-wider text-muted uppercase">{k}</dt>
                  <dd className="mt-1 text-navy/85">{project[k]}</dd>
                </div>
              ))}
            </dl>
            <Button to="/contact" className="mt-7 w-full sm:w-auto">
              Discuss a Similar Project
            </Button>
          </div>
        </div>
      )}
    </dialog>
  )
}
