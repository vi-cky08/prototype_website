// Decorative background layer (blueprint grid or dots) with faded edges. The parent must be `relative`.
const variants = { grid: 'pattern-grid', 'grid-light': 'pattern-grid-light', dots: 'pattern-dots' }

export default function Pattern({ variant = 'grid', className = '' }) {
  return <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${variants[variant]} ${className}`} />
}
