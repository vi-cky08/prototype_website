
import { Link } from 'react-router-dom';

// Common button styles
const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-[4px] border px-6 py-3 text-sm font-semibold transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60';

const variants = {
  primary:
    'border-primary bg-primary text-white hover:border-primary-700 hover:bg-primary-700',

  navy:
    'border-navy bg-navy text-white hover:border-navy-700 hover:bg-navy-700',

  outline:
    'border-navy bg-white text-navy hover:border-primary hover:text-primary',

  light:
    'border-white bg-white text-navy hover:border-grey hover:bg-grey',

  whatsapp:
    'border-success bg-success text-white hover:border-[#116932] hover:bg-[#116932]',
};

export default function Button({
  to,
  href,
  variant = 'primary',
  className = '',
  children,
  type = 'button',
  ...props
}) {
  const cls = `${base} ${variants[variant] || variants.primary} ${className}`;

  // Internal navigation
  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  // External navigation
  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Normal button
  return (
    <button
      type={type}
      className={cls}
      {...props}
    >
      {children}
    </button>
  );
}
