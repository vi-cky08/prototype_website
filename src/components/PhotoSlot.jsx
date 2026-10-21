import { SHOW_PLACEHOLDER_LABELS } from '../data/site.js'

// Real photos live in src/assets/photos/<name>.(jpg|jpeg|png|webp); drop a file there and the slot picks it up.
const photos = Object.fromEntries(
  Object.entries(import.meta.glob('../assets/photos/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })).map(
    ([path, src]) => [path.split('/').pop().replace(/\.[^.]+$/, ''), src],
  ),
)

/** Photo with a fixed aspect ratio, or a flat grey placeholder box until the real image is added. */
export default function PhotoSlot({ name, aspectRatio = '4 / 3', alt = '', className = '' }) {
  const src = photos[name]
  const style = { aspectRatio }

  if (src) {
    return <img src={src} alt={alt} loading="lazy" style={style} className={`block w-full rounded-[4px] object-cover ${className}`} />
  }

  return (
    <div
      role={alt ? 'img' : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
      style={style}
      className={`flex w-full items-center justify-center rounded-[4px] bg-photo p-3 ${className}`}
    >
      {SHOW_PLACEHOLDER_LABELS && <span className="text-center text-[13px] text-muted">Photo: {name}</span>}
    </div>
  )
}
