// Eagle emblem placeholder: swap this SVG for the real logo artwork when available.
export function EagleEmblem({ className = '', color = 'currentColor' }) {
  const wing = (
    <g fill={color}>
      <path d="M53 29C40 21 22 11 3 5c9 11 22 19 37 27z" />
      <path d="M53 35C40 31 24 25 9 21c10 11 24 17 39 21z" opacity=".85" />
      <path d="M54 41C43 41 31 39 19 37c10 9 22 13 33 13z" opacity=".7" />
    </g>
  )
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden="true">
      {wing}
      <g transform="matrix(-1 0 0 1 120 0)">{wing}</g>
      <path
        fill={color}
        d="M53 22c0-8 11-11 14-5l7 2.5-6.5 3c-.6 3.4-2.7 5-5.5 5.2l5 4.3L60 64l-7.9-32 5-4.3C54.6 27 53 25 53 22z"
      />
      <path fill={color} d="M54 62l6 14 6-14-6 3z" />
      <circle cx="62.5" cy="20" r="1.3" fill="#fff" />
    </svg>
  )
}

export default function Logo({ inverted = false }) {
  const main = inverted ? 'text-white' : 'text-navy'
  const sub = inverted ? 'text-white/60' : 'text-[#5d6b80]'
  return (
    <span className="flex items-center gap-2.5">
      <EagleEmblem className={`h-9 w-auto shrink-0 sm:h-11 ${inverted ? 'text-white' : 'text-[#1b3766]'}`} />
      <span className="flex flex-col leading-none">
        <span className={`text-[15px] font-extrabold tracking-[0.04em] italic sm:text-[19px] ${main}`}>
          PROTOTYPE
        </span>
        <span className={`mt-0.5 flex items-center gap-1.5 text-[11px] sm:text-[13px] font-bold tracking-[0.18em] italic ${sub}`}>
          <span className={`h-[5px] w-5 rounded-full ${inverted ? 'bg-white/60' : 'bg-[#5d6b80]'}`} />
          DESIGN
        </span>
        <span
          className={`mt-1 border-t pt-1 text-[7.5px] whitespace-nowrap sm:text-[8.5px] font-semibold tracking-[0.2em] ${
            inverted ? 'border-white/20 text-white/60' : 'border-[#cfd8e3] text-[#5d6b80]'
          }`}
        >
          DESIGN &amp; DEVELOPMENT
        </span>
      </span>
    </span>
  )
}
