// Soft curved edge between sections. Colour it with a text-* class matching the neighbouring section.
export default function Curve({ position = 'top', className = '' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 h-6 w-full fill-current sm:h-10 lg:h-12 ${
        position === 'top' ? 'top-0' : 'bottom-0 rotate-180'
      } ${className}`}
    >
      <path d="M0 0h1440v8C1140 44 300 44 0 8z" />
    </svg>
  )
}
