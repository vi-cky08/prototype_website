import { useRef, useState } from 'react'
import Card from './Card.jsx'
import IconCircle from './IconCircle.jsx'
import ServiceModal from './ServiceModal.jsx'

const VISIBLE = 6
// Fixed-height, single-line tags: long names truncate (full text in `title` and in the popup).
const chip =
  'block h-[30px] truncate rounded-[4px] border border-line bg-grey px-3 text-[13px] leading-[28px] text-ink'
const moreTag =
  'relative inline-flex h-6 cursor-pointer items-center rounded-[4px] after:absolute after:inset-x-0 after:-inset-y-2.5 border border-primary bg-transparent px-3 text-[13px] font-semibold text-primary transition-colors hover:bg-primary hover:text-white'

/**
 * Every card is an identical rectangle with fixed zones, so content never changes its size:
 * header 56px (icon + 2-line title) · 8px · description 48px (2 lines) · 16px ·
 * products (fills the rest; 2×3 grid of 30px tags) · footer 32px with divider ("+N more").
 * Height: 380px under 768px, 360px from 768px. Radius: --service-card-radius (index.css).
 */
export default function ServiceCard({ icon, title, description, products = [] }) {
  const [open, setOpen] = useState(false)
  const moreRef = useRef(null)
  const hidden = products.length - VISIBLE

  return (
    <Card
      as="article"
      hover
      className="flex h-[380px] flex-col overflow-hidden rounded-[var(--service-card-radius)]! p-6 md:h-[360px]"
    >
      <div className="flex h-14 shrink-0 items-center gap-3">
        <IconCircle icon={icon} size="sm" className="[&>svg]:h-7! [&>svg]:w-7!" />
        <h3 className="line-clamp-2 min-w-0 text-[17px] leading-snug font-bold" title={title}>
          {title}
        </h3>
      </div>

      <p className="mt-2 line-clamp-2 h-12 shrink-0 text-[15px] leading-6" title={description}>
        {description}
      </p>

      <ul className="mt-4 grid min-h-0 flex-1 auto-rows-[30px] grid-cols-2 content-start gap-2 overflow-hidden">
        {products.slice(0, VISIBLE).map((p) => (
          <li key={p} className={chip} title={p}>
            {p}
          </li>
        ))}
      </ul>

      <div className="mt-auto h-8 shrink-0 border-t border-line pt-[7px]">
        {hidden > 0 && (
          <button
            ref={moreRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-label={`Show all ${products.length} products for ${title}`}
            className={moreTag}
          >
            +{hidden} more
          </button>
        )}
      </div>

      {hidden > 0 && (
        <ServiceModal open={open} title={title} products={products} onClose={() => setOpen(false)} returnFocusRef={moreRef} />
      )}
    </Card>
  )
}
