const sizes = {
  sm: 'h-11 w-11 [&>svg]:h-5 [&>svg]:w-5',
  md: 'h-14 w-14 [&>svg]:h-6 [&>svg]:w-6',
  lg: 'h-[72px] w-[72px] [&>svg]:h-8 [&>svg]:w-8',
}

export default function IconCircle({ icon: Icon, size = 'md', className = '' }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full border border-line bg-white text-primary shadow-[0_4px_14px_-6px_rgb(22_86_166/0.35)] ${sizes[size]} ${className}`}
    >
      <Icon strokeWidth={1.6} aria-hidden="true" />
    </span>
  )
}
