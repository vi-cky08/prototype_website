import { CircleCheck } from 'lucide-react'

// Green check-circle with a bold title and a muted description.
export default function CheckItem({ title, text, as: Tag = 'li', className = '' }) {
  return (
    <Tag className={`flex items-start gap-3 ${className}`}>
      <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 fill-success text-white" strokeWidth={2.2} aria-hidden="true" />
      <div className="min-w-0">
        <h4 className="text-[15px] leading-snug font-bold text-navy">{title}</h4>
        <p className="mt-1 text-[14px] leading-relaxed text-ink">{text}</p>
      </div>
    </Tag>
  )
}
