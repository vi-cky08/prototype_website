// Plain line icon (no background shape), with one stroke width site-wide.
// `shape` is accepted for older call sites and ignored.
const sizes = {
  sm: '[&>svg]:h-6 [&>svg]:w-6',
  md: '[&>svg]:h-7 [&>svg]:w-7',
  lg: '[&>svg]:h-9 [&>svg]:w-9',
}

const tones = {
  light: 'text-primary',
  gradient: 'text-primary',
  navy: 'text-navy',
  dark: 'text-accent',
}

export const ICON_STROKE = 1.75

export default function IconCircle({ icon: Icon, size = 'md', tone = 'light', className = '' }) {
  return (
    <span className={`inline-flex shrink-0 items-center ${tones[tone]} ${sizes[size]} ${className}`}>
      <Icon strokeWidth={ICON_STROKE} aria-hidden="true" />
    </span>
  )
}
