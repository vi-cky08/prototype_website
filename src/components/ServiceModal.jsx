import { useEffect, useId, useRef } from 'react'
import { X } from 'lucide-react'
import Button from './Button.jsx'

// Full names here (wrapping allowed); the card truncates, the popup shows everything.
const chip = 'max-w-full rounded-[4px] border border-line bg-grey px-3 py-1 text-[13px] leading-snug text-ink'
const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

/**
 * Small centred dialog listing every product of a service.
 * Native <dialog>.showModal() gives the backdrop, inert page and Escape; we add an explicit
 * focus return, a Tab loop that never leaves the dialog, and a page scroll lock.
 */
export default function ServiceModal({ open, title, products, onClose, returnFocusRef }) {
  const dialogRef = useRef(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!open) return
    if (!dialog.open) dialog.showModal()
    dialog.querySelector('[data-autofocus]')?.focus()

    // Lock page scroll; pad for the scrollbar so the page behind doesn't shift.
    const root = document.documentElement
    const prev = { overflow: root.style.overflow, paddingRight: root.style.paddingRight }
    const gap = window.innerWidth - root.clientWidth
    root.style.overflow = 'hidden'
    if (gap > 0) root.style.paddingRight = `${gap}px`

    const trigger = returnFocusRef?.current
    return () => {
      // Close first: while the dialog is modal the page is inert and the trigger can't take focus.
      if (dialog.open) dialog.close()
      root.style.overflow = prev.overflow
      root.style.paddingRight = prev.paddingRight
      trigger?.focus()
    }
  }, [open, returnFocusRef])

  const onKeyDown = (e) => {
    if (e.key !== 'Tab') return
    const items = [...dialogRef.current.querySelectorAll(FOCUSABLE)]
    if (!items.length) return
    const first = items[0]
    const last = items[items.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  return (
    <dialog
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      // Escape fires "cancel"; let React state drive the close so focus/scroll cleanup runs once.
      onCancel={(e) => {
        e.preventDefault()
        onClose()
      }}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      onKeyDown={onKeyDown}
      className="m-auto max-h-[80vh] w-[calc(100%-2rem)] max-w-[480px] overflow-hidden rounded-[4px] border border-line bg-white p-0 text-ink backdrop:bg-navy-900/50 open:flex open:flex-col motion-safe:open:animate-[fade-in_180ms_ease-out] motion-safe:open:backdrop:animate-[fade-in_180ms_ease-out]"
    >
      <div className="flex items-start justify-between gap-3 border-b border-line px-5 py-4">
        <h2 id={titleId} className="pt-1.5 text-[18px] leading-snug font-bold text-navy">
          {title}
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="-mt-1 -mr-2 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] text-muted transition-colors hover:bg-grey hover:text-navy"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
        <p className="text-[12px] font-semibold tracking-wider text-muted uppercase">Products</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {products.map((p) => (
            <li key={p} className={chip}>
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end border-t border-line px-5 py-3">
        <Button type="button" variant="outline" onClick={onClose} data-autofocus className="w-full sm:w-auto">
          Close
        </Button>
      </div>
    </dialog>
  )
}
