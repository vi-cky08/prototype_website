import { LazyMotion, MotionConfig, domAnimation, m, useReducedMotion } from 'framer-motion'

// Shared motion primitives. LazyMotion + `m` keeps the framer-motion bundle small.
// Every animation is opacity/transform only (no layout shift), runs once, eases out under 600ms,
// and is skipped entirely when the visitor prefers reduced motion.

export const EASE = [0.22, 1, 0.36, 1]
const VIEWPORT = { once: true, amount: 0.15 }

export function MotionProvider({ children }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

/** Fades its content up when it scrolls into view. */
export function Reveal({ as = 'div', delay = 0, className, children, ...props }) {
  const reduce = useReducedMotion()
  const Tag = m[as]
  return (
    <Tag
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={VIEWPORT}
      variants={{ hidden: fadeUp.hidden, show: { ...fadeUp.show, transition: { ...fadeUp.show.transition, delay } } }}
      {...props}
    >
      {children}
    </Tag>
  )
}

/** Staggers its <StaggerItem> children. `onMount` plays on load (hero) instead of on scroll. */
export function Stagger({ as = 'div', stagger = 0.08, delay = 0, onMount = false, className, children, ...props }) {
  const reduce = useReducedMotion()
  const Tag = m[as]
  const trigger = onMount ? { animate: 'show' } : { whileInView: 'show', viewport: VIEWPORT }
  return (
    <Tag
      className={className}
      initial={reduce ? false : 'hidden'}
      {...trigger}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export function StaggerItem({ as = 'div', className, children, ...props }) {
  const Tag = m[as]
  return (
    <Tag className={className} variants={fadeUp} {...props}>
      {children}
    </Tag>
  )
}
