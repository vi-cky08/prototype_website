import { m, useScroll, useSpring } from 'framer-motion'

// Thin blue gradient bar at the very top showing how far down the page the visitor is.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })
  return (
    <m.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary-600 via-primary-500 to-accent"
    />
  )
}
