import { useEffect, useRef, useState } from 'react'

// Counts the leading number of `value` up from 0 when it scrolls into view (e.g. "100+" → 0…100 then "+").
// Non-numeric values render as-is. Screen readers always get the final value.
export default function CountUp({ value, duration = 1200 }) {
  const match = /^(\d+)(.*)$/.exec(value)
  const target = match ? Number(match[1]) : 0
  const ref = useRef(null)
  const [animate] = useState(() => Boolean(match) && !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [n, setN] = useState(animate ? 0 : target)

  useEffect(() => {
    const el = ref.current
    if (!animate || !el) return
    let frame
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration)
          setN(Math.round(target * (1 - Math.pow(1 - t, 3)))) // ease-out cubic
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!match) return value
  return (
    <span ref={ref}>
      <span aria-hidden="true" className="tabular-nums">
        {n}
        {match[2]}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  )
}
