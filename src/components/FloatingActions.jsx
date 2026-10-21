import { useEffect, useState } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { whatsappLink } from '../data/contact.js'

// Bottom-right floating actions: WhatsApp chat (always) and Back to top (after 600px of scroll).
// Kept small and tucked into the corner (with safe-area padding) so they never cover content on phones.
const fab =
  'inline-flex h-12 w-12 items-center justify-center rounded-full transition-[opacity,background-color,border-color] duration-200'

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <div className="pointer-events-none fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex flex-col items-center gap-3 sm:right-6 sm:bottom-6">
      <button
        type="button"
        onClick={toTop}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
        aria-hidden={!showTop}
        className={`${fab} border border-line bg-white text-primary hover:border-primary ${
          showTop ? 'pointer-events-auto opacity-100' : 'opacity-0'
        }`}
      >
        <ArrowUp className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
      </button>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp (opens in a new tab)"
        className={`${fab} pointer-events-auto bg-success text-white hover:bg-[#116932]`}
      >
        <MessageCircle className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
      </a>
    </div>
  )
}
