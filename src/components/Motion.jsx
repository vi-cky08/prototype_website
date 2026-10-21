import { useLayoutEffect, useRef, useState } from 'react'
import { LazyMotion, MotionConfig, domAnimation, m, useReducedMotion } from 'framer-motion'

// Shared motion primitives. LazyMotion + `m` keeps the framer-motion bundle small.
// Every animation is a plain opacity fade (no movement, no layout shift), runs once, eases out under 600ms,
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
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
}

// Only elements that start BELOW the visible screen are "armed" (hidden until scrolled into view).
// Anything already on screen when the page loads is rendered visible straight away, so a refresh never flashes.
// The check runs in a layout effect, which happens before the browser paints.
function useArmed() {
  const ref = useRef(null)
  const [armed, setArmed] = useState(false)
  useLayoutEffect(() => {
    const el = ref.current
    if (el && el.getBoundingClientRect().top > window.innerHeight) setArmed(true)
  }, [])
  return [ref, armed]
}

/** Fades its content in when it scrolls into view. */
export function Reveal({ as = 'div', delay = 0, className, children, ...props }) {
  const reduce = useReducedMotion()
  const [ref, armed] = useArmed()
  const Tag = m[as]
  return (
    <Tag
      key={armed ? 'armed' : 'plain'}
      ref={ref}
      className={className}
      initial={reduce || !armed ? false : 'hidden'}
      whileInView="show"
      viewport={VIEWPORT}
      variants={{ hidden: fadeUp.hidden, show: { ...fadeUp.show, transition: { ...fadeUp.show.transition, delay } } }}
      {...props}
    >
      {children}
    </Tag>
  )
}

/** Staggers its <StaggerItem> children. Content already on screen at load is shown immediately. */
export function Stagger({ as = 'div', stagger = 0.08, delay = 0, onMount = false, className, children, ...props }) {
  const reduce = useReducedMotion()
  const [ref, armed] = useArmed()
  const Tag = m[as]
  const trigger = onMount ? { animate: 'show' } : { whileInView: 'show', viewport: VIEWPORT }
  return (
    <Tag
      key={armed ? 'armed' : 'plain'}
      ref={ref}
      className={className}
      initial={reduce || !armed ? false : 'hidden'}
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