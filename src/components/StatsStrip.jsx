export default function StatsStrip({ stats }) {
  return (
    <ul className="card grid grid-cols-2 px-2 py-2 sm:grid-cols-3 sm:gap-y-6 sm:px-4 sm:py-7 lg:grid-cols-5 lg:divide-x lg:divide-line lg:px-2">
      {stats.map(({ icon: Icon, value, label }, i) => (
        <li
          key={label}
          className={`flex min-w-0 items-center gap-3 px-3 py-4 sm:gap-3.5 sm:py-0 lg:justify-center lg:px-5 ${
            i >= 2 ? 'border-t border-line sm:border-t-0' : ''
          } ${stats.length % 2 && i === stats.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`}
        >
          <Icon className="h-8 w-8 shrink-0 sm:h-9 sm:w-9 text-primary" strokeWidth={1.4} aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-[15px] leading-tight font-bold text-navy">{value}</p>
            <p className="mt-1 text-[14px] leading-snug text-muted lg:text-[13px]">{label}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
