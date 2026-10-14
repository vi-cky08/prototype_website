import { useId, useState } from 'react'

const VISIBLE = 6

export default function ServiceCard({ icon: Icon, title, description, products = [] }) {
  const [expanded, setExpanded] = useState(false)
  const listId = useId()
  const hidden = products.length - VISIBLE
  const shown = expanded || hidden <= 0 ? products : products.slice(0, VISIBLE)

  return (
    <article className="card flex h-full flex-col p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] sm:p-6">
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-sky text-primary">
        <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-[17px] leading-snug font-bold">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed">{description}</p>

      {products.length > 0 && (
        <div className="mt-5 border-t border-line pt-4">
          <p className="text-[12px] font-semibold tracking-wider text-muted uppercase">Products</p>
          <ul id={listId} className="mt-3 flex flex-wrap gap-2">
            {shown.map((p) => (
              <li
                key={p}
                className="rounded-full border border-line bg-sky-soft px-3 py-1 text-[13px] leading-snug text-navy/80"
              >
                {p}
              </li>
            ))}
          </ul>
          {hidden > 0 && (
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              aria-expanded={expanded}
              aria-controls={listId}
              className="mt-1 inline-flex min-h-11 items-center text-[14px] font-semibold text-primary hover:text-primary-dark"
            >
              {expanded ? 'Show less' : `+${hidden} more`}
            </button>
          )}
        </div>
      )}
    </article>
  )
}
