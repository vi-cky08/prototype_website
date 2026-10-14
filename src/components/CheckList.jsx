import { Check, CircleCheck, CircleX } from 'lucide-react'

const styles = {
  check: { Icon: Check, className: 'h-4 w-4 text-primary', stroke: 2.4 },
  success: { Icon: CircleCheck, className: 'h-5 w-5 fill-success text-white', stroke: 2.2 },
  cross: { Icon: CircleX, className: 'h-5 w-5 fill-danger text-white', stroke: 2.2 },
}

export default function CheckList({ items, variant = 'check', className = '', itemClassName = '' }) {
  const { Icon, className: iconClass, stroke } = styles[variant]
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-3 text-[15px] ${itemClassName}`}>
          <Icon className={`mt-0.5 shrink-0 ${iconClass}`} strokeWidth={stroke} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
