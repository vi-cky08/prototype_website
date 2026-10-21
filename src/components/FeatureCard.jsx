import Card from './Card.jsx'
import IconCircle from './IconCircle.jsx'

export default function FeatureCard({ icon, title, text, index }) {
  return (
    <Card hover className="group relative h-full overflow-hidden p-6 sm:p-7">
      {/* Number watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-2 right-4 text-[64px] leading-none font-extrabold tracking-tighter text-grey select-none"
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <IconCircle icon={icon} className="relative" />
      <h3 className="relative mt-5 text-[17px] font-bold">{title}</h3>
      <p className="relative mt-2 text-[15px] leading-relaxed">{text}</p>
    </Card>
  )
}
