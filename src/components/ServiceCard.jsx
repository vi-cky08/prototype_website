import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Card from './Card.jsx'
import IconCircle from './IconCircle.jsx'

const VISIBLE = 6
const chip =
  'rounded-full border border-line bg-sky-soft px-3 py-1 text-[13px] leading-snug text-navy/80 transition-colors duration-200 hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700'

export default function ServiceCard({ icon, title, description, products = [] }) {
  const [expanded, setExpanded] = useState(false)
  const listId = useId()
  const first = products.slice(0, VISIBLE)
  const rest = products.slice(VISIBLE)

  return (
    <Card as="article" accent hover className="group flex h-full flex-col p-5 sm:p-6">
      <IconCircle
        icon={icon}
        shape="square"
        tone="gradient"
        size="sm"
        className="h-12! w-12! [&>svg]:h-6! [&>svg]:w-6! transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5"
      />
      <h3 className="mt-5 text-[17px] leading-snug font-bold">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed">{description}</p>

      {products.length > 0 && (
        <div className="mt-5 border-t border-line pt-4">
          <p className="text-[12px] font-semibold tracking-wider text-muted uppercase">Products</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {first.map((p) => (
              <li key={p} className={chip}>
                {p}
              </li>
            ))}
          </ul>
          {rest.length > 0 && (
            <>
              {/* Smooth height animation: grid rows 0fr → 1fr; `invisible` hides collapsed chips from assistive tech */}
              <div
                id={listId}
                className={`grid transition-[grid-template-rows,visibility] duration-300 ease-out ${
                  expanded ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]'
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <ul className="flex flex-wrap gap-2 pt-2">
                    {rest.map((p) => (
                      <li key={p} className={chip}>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setExpanded((e) => !e)}
                aria-expanded={expanded}
                aria-controls={listId}
                className="mt-1 inline-flex min-h-11 items-center gap-1 text-[14px] font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                {expanded ? 'Show less' : `+${rest.length} more`}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
            </>
          )}
        </div>
      )}
    </Card>
  )
}
