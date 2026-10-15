import CountUp from './CountUp.jsx'
import { Stagger, StaggerItem } from './Motion.jsx'

// Floating glass card. Desktop dividers are gradient lines that fade out at both ends.
export default function StatsStrip({ stats }) {
  return (
    <Stagger
      as="ul"
      className="grid grid-cols-2 rounded-3xl border border-white bg-white/90 px-2 py-2 shadow-lg ring-1 ring-primary-100/60 sm:grid-cols-3 sm:gap-y-6 sm:px-4 sm:py-7 md:bg-white/75 md:backdrop-blur-xl lg:grid-cols-5 lg:px-2"
    >
      {stats.map(({ icon: Icon, value, label }, i) => (
        <StaggerItem
          as="li"
          key={label}
          className={`relative flex min-w-0 items-center gap-3 px-3 py-4 sm:gap-3.5 sm:py-0 lg:justify-center lg:px-5 ${
            i >= 2 ? 'border-t border-line sm:border-t-0' : ''
          } ${stats.length % 2 && i === stats.length - 1 ? 'col-span-2 sm:col-span-1' : ''} ${
            i > 0
              ? 'lg:before:absolute lg:before:top-1/2 lg:before:left-0 lg:before:h-14 lg:before:w-px lg:before:-translate-y-1/2 lg:before:bg-gradient-to-b lg:before:from-transparent lg:before:via-line-strong lg:before:to-transparent'
              : ''
          }`}
        >
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary ring-1 ring-primary-100 sm:h-12 sm:w-12">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-[15px] leading-tight font-extrabold sm:text-[16px] tracking-tight text-navy">
              <CountUp value={value} />
            </p>
            <p className="mt-1 text-[14px] leading-snug text-muted lg:text-[13px]">{label}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  )
}
