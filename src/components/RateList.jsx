import { formatINR } from '../data/pricing.js'

// Label / amount rows separated by thin lines.
export default function RateList({ rates, className = '' }) {
  return (
    <ul className={`max-w-[720px] border-t border-line text-[15px] sm:text-base ${className}`}>
      {rates.map((r) => (
        <li key={r.label} className="flex items-baseline justify-between gap-4 border-b border-line py-3.5">
          <span className="min-w-0 text-ink">{r.label}</span>
          <span className="shrink-0 font-bold text-navy tabular-nums">{formatINR(r.amount)}</span>
        </li>
      ))}
    </ul>
  )
}
