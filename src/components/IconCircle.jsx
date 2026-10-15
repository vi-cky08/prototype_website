// Icon in a soft circular or rounded-square background, with one stroke width site-wide.
const sizes = {
  sm: 'h-11 w-11 [&>svg]:h-5 [&>svg]:w-5',
  md: 'h-14 w-14 [&>svg]:h-6 [&>svg]:w-6',
  lg: 'h-[72px] w-[72px] [&>svg]:h-8 [&>svg]:w-8',
}

const tones = {
  light: 'border border-primary-100 bg-gradient-to-br from-white to-primary-50 text-primary shadow-sm',
  gradient: 'bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-[0_10px_22px_-10px_rgb(31_95_191/0.8)]',
  dark: 'border border-white/15 bg-white/10 text-accent',
}

export const ICON_STROKE = 1.75

export default function IconCircle({ icon: Icon, size = 'md', shape = 'circle', tone = 'light', className = '' }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${shape === 'square' ? 'rounded-2xl' : 'rounded-full'} ${tones[tone]} ${sizes[size]} ${className}`}
    >
      <Icon strokeWidth={ICON_STROKE} aria-hidden="true" />
    </span>
  )
}
