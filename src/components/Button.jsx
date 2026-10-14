import { Link } from 'react-router-dom'

const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  primary:
    'bg-primary text-white shadow-[0_6px_16px_-6px_rgb(22_86_166/0.6)] hover:-translate-y-0.5 hover:bg-primary-dark',
  navy: 'bg-navy-deep text-white hover:bg-primary',
  outline:
    'border border-[#b9cce3] bg-white text-navy hover:-translate-y-0.5 hover:border-primary hover:text-primary',
  light: 'bg-white text-navy hover:bg-sky',
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
