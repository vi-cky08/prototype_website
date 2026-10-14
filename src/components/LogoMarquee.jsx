import { useLayoutEffect, useRef, useState } from 'react'
import ClientLogo from './ClientLogo.jsx'

// Infinite logo slider. The list is rendered twice and the track slides by -50%, so the loop is seamless.
// Each copy ends with the same right padding as the gap between logos, keeping spacing even at the seam.
// If the logos are narrower than the container, they are repeated inside each copy so no gap ever shows.
// Reduced motion: animation stops, the duplicate is hidden and the row scrolls by touch instead.
function LogoList({ items, repeat, duplicate = false, listRef }) {
  const all = Array.from({ length: repeat }, () => items).flat()
  return (
    <ul
      ref={listRef}
      className={`flex shrink-0 items-center gap-12 pr-12 lg:gap-16 lg:pr-16 ${duplicate ? 'motion-reduce:hidden' : ''}`}
      aria-hidden={duplicate || undefined}
    >
      {all.map((item, i) => (
        <li key={`${i}-${item.name}`} className="shrink-0" aria-hidden={(!duplicate && i >= items.length) || undefined}>
          <ClientLogo {...item} logo={item.src} />
        </li>
      ))}
    </ul>
  )
}

/**
 * @param items     [{ name, src?, short? }]: `src` shows an image, otherwise a text placeholder
 * @param speed     seconds for one full pass of the logo set
 * @param direction 'left' (right-to-left) or 'right'
 */
export default function LogoMarquee({ items, speed = 35, direction = 'left', className = '' }) {
  const containerRef = useRef(null)
  const listRef = useRef(null)
  const [repeat, setRepeat] = useState(1)

  useLayoutEffect(() => {
    const container = containerRef.current
    const list = listRef.current
    if (!container || !list) return
    const measure = () => {
      const setWidth = list.scrollWidth / repeat
      if (!setWidth) return
      const needed = Math.max(1, Math.ceil(container.clientWidth / setWidth))
      if (needed !== repeat) setRepeat(needed)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(container)
    ro.observe(list)
    return () => ro.disconnect()
  }, [repeat, items])

  return (
    <div
      ref={containerRef}
      className={`group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] motion-reduce:overflow-x-auto ${className}`}
    >
      <div
        className="flex w-max animate-marquee py-2 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{
          '--marquee-duration': `${speed * repeat}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        <LogoList items={items} repeat={repeat} listRef={listRef} />
        <LogoList items={items} repeat={repeat} duplicate />
      </div>
    </div>
  )
}
