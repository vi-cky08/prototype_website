import { Link } from 'react-router-dom'

// Trailing icons slide right on hover; the hover lift only runs when motion is allowed.
const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 ease-out active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 [&>svg:last-child]:transition-transform [&>svg:last-child]:duration-200 hover:[&>svg:last-child]:translate-x-1 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0'

const variants = {
  primary:
    'bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 bg-[length:200%_100%] bg-left text-white shadow-[0_8px_20px_-8px_rgb(31_95_191/0.65)] hover:bg-right hover:shadow-[0_14px_28px_-8px_rgb(31_95_191/0.7)]',
  navy: 'bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800 bg-[length:200%_100%] bg-left text-white shadow-[0_8px_20px_-10px_rgb(6_26_61/0.7)] hover:bg-right',
  outline: 'border border-primary-300 bg-white text-primary-700 hover:border-primary hover:bg-primary hover:text-white',
  light: 'bg-white text-navy shadow-sm hover:bg-primary-50',
  whatsapp: 'bg-success text-white shadow-[0_8px_20px_-8px_rgb(21_128_61/0.6)] hover:bg-[#116932]',
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
