import Button from './Button.jsx'
import { formatINR, planContactLink, planRows } from '../data/pricing.js'

// Desktop comparison (1024px and up). border-separate so the sticky header keeps its bottom line.
// top-[72px] = the navbar height on desktop.
const cell = 'border-b border-line px-4 py-4'

export default function PricingTable({ plans, className = '' }) {
  return (
    <div className={`hidden lg:block ${className}`}>
      <table className="w-full table-fixed border-separate border-spacing-0 text-[15px]">
        <caption className="sr-only">Package comparison</caption>
        <colgroup>
          <col className="w-[20%]" />
          {plans.map((p) => (
            <col key={p.id} />
          ))}
        </colgroup>
        <thead>
          <tr>
            <td className={`${cell} sticky top-[72px] z-10 border-line-strong bg-page`} />
            {plans.map((p) => (
              <th key={p.id} scope="col" className={`${cell} sticky top-[72px] z-10 border-line-strong bg-page text-center align-bottom`}>
                <span className="block text-[15px] font-semibold text-navy">{p.name}</span>
                <span className="mt-1 block text-[24px] leading-tight font-extrabold tracking-tight text-navy">
                  {formatINR(p.fee)}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planRows.map((row) => (
            <tr key={row.key}>
              <th scope="row" className={`${cell} text-left font-medium ${row.highlight ? 'font-bold text-primary' : 'text-navy'}`}>
                {row.label}
              </th>
              {plans.map((p) => (
                <td
                  key={p.id}
                  className={`${cell} text-center tabular-nums ${row.highlight ? 'font-bold text-primary' : 'text-ink'}`}
                >
                  {row.format ? row.format(p[row.key]) : p[row.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td />
            {plans.map((p) => (
              <td key={p.id} className="px-1.5 pt-6 text-center">
                <Button to={planContactLink(p)} variant="outline" className="w-full px-2! whitespace-nowrap">
                  Choose {p.name}
                </Button>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
