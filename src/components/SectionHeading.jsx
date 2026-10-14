// Shared type scale: H1 28px → 44px, H2 24px → 36px.
export const headingSizes = {
  h1: 'text-[28px] leading-tight font-bold tracking-tight sm:text-[36px] lg:text-[44px]',
  h2: 'text-[24px] leading-tight font-bold tracking-tight sm:text-[30px] lg:text-[36px]',
}

export function Eyebrow({ children, className = '' }) {
  return (
    <p className={`text-[11px] font-semibold tracking-[0.2em] text-primary uppercase ${className}`}>{children}</p>
  )
}

export default function SectionHeading({ eyebrow, title, subtitle, as: Tag = 'h2', align = 'left', className = '' }) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
      <Tag className={headingSizes[Tag] ?? headingSizes.h2}>{title}</Tag>
      {subtitle && <p className="mt-3 text-base text-ink sm:text-[17px]">{subtitle}</p>}
    </div>
  )
}
