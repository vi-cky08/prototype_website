// Shared fluid type scale (clamp-based): H1 32px → 52px, H2 26px → 40px, H3 20px → 24px.
export const headingSizes = {
  h1: 'text-[clamp(2rem,1.5rem+2.2vw,3.25rem)] leading-[1.1] font-extrabold tracking-[-0.025em]',
  h2: 'text-[clamp(1.625rem,1.3rem+1.5vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.02em]',
  h3: 'text-[clamp(1.25rem,1.15rem+0.5vw,1.5rem)] leading-snug font-bold tracking-[-0.01em]',
}

// Small uppercase label with a short gradient line before it.
export function Eyebrow({ children, className = '', light = false }) {
  return (
    <p
      className={`flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.18em] uppercase ${
        light ? 'text-accent' : 'text-primary'
      } ${className}`}
    >
      <span aria-hidden="true" className="h-[2px] w-6 shrink-0 rounded-full bg-gradient-to-r from-primary-500 to-accent" />
      {children}
    </p>
  )
}

export default function SectionHeading({ eyebrow, title, subtitle, as: Tag = 'h2', align = 'left', light = false, className = '' }) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <Eyebrow className={`mb-4 ${center ? 'justify-center' : ''}`} light={light}>
          {eyebrow}
        </Eyebrow>
      )}
      <Tag className={`${headingSizes[Tag] ?? headingSizes.h2} ${light ? 'text-white' : ''}`}>{title}</Tag>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-[17px] ${light ? 'text-white/75' : 'text-ink'}`}>{subtitle}</p>
      )}
    </div>
  )
}
