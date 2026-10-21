import { Link } from 'react-router-dom'

// Flat buttons: 4px radius, no shadow, no movement on hover (see STYLE_GUIDE.md).
const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-[4px] border px-6 py-3 text-sm font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  primary: 'border-primary bg-primary text-white hover:border-primary-700 hover:bg-primary-700',
  navy: 'border-navy bg-navy text-white hover:border-navy-700 hover:bg-navy-700',
  // Secondary: white with a 1px navy border
  outline: 'border-navy bg-white text-navy hover:border-primary hover:text-primary',
  light: 'border-white bg-white text-navy hover:border-grey hover:bg-grey',
  whatsapp: 'border-success bg-success text-white hover:border-[#116932] hover:bg-[#116932]',
}

export default function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
