import Button from './Button.jsx'
import { formatINR, planContactLink, planRows } from '../data/pricing.js'

// Stacked plan summary used below 1024px in place of PricingTable.
export default function PlanCard({ plan }) {
  return (
    <article className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-5 sm:p-6">
      <h3 className="text-[17px] font-semibold">{plan.name}</h3>
      <p className="mt-1 text-[28px] leading-tight font-extrabold tracking-tight text-navy">{formatINR(plan.fee)}</p>

      <dl className="mt-4 mb-6 border-t border-line text-[15px]">
        {planRows.map((row) => (
          <div
            key={row.key}
            className={`flex items-baseline justify-between gap-4 border-b border-line py-3 ${
              row.highlight ? 'font-bold text-primary' : ''
            }`}
          >
            <dt className={row.highlight ? '' : 'text-ink'}>{row.label}</dt>
            <dd className={`shrink-0 tabular-nums ${row.highlight ? '' : 'font-semibold text-navy'}`}>
              {row.format ? row.format(plan[row.key]) : plan[row.key]}
            </dd>
          </div>
        ))}
      </dl>

      <Button to={planContactLink(plan)} variant="outline" className="mt-auto w-full text-[15px]! lg:text-sm!">
        Choose {plan.name}
      </Button>
    </article>
  )
}
