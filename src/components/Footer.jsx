import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo.jsx'
import { company, navLinks } from '../data/site.js'
import { CONTACT, mapsLink } from '../data/contact.js'
import { services } from '../data/services.js'

const footerServices = services.slice(0, 5)

const heading = 'mb-3 text-xs font-semibold tracking-[0.2em] text-white uppercase lg:mb-4'
// 44px tap height on touch sizes, compact 8px rhythm on desktop
const linkCls = 'flex min-h-11 items-center leading-snug underline-offset-4 transition-colors duration-200 hover:text-white hover:underline lg:min-h-0 lg:py-1'

// Plain line icon for contact rows (no background chip)
function RowIcon({ icon: Icon, className = '' }) {
  return <Icon className={`h-5 w-5 shrink-0 text-on-dark ${className}`} strokeWidth={1.75} aria-hidden="true" />
}

function LinkColumn({ title, links, className = '' }) {
  return (
    <div className={className}>
      <h3 className={heading}>{title}</h3>
      <ul className="flex flex-col text-[15px] md:text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className={linkCls}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="on-dark relative bg-navy-deep text-on-dark">
      {/* Mobile: one column (services hidden). Tablet: 2x2 (Brand | Contact, Links | Services). Desktop: 4 columns. */}
      <div className="container-site grid gap-6 pt-7 pb-4 md:grid-cols-2 md:gap-x-10 md:gap-y-8 md:pt-9 md:pb-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)_minmax(0,1.25fr)_minmax(0,1.15fr)] lg:gap-x-12 lg:pt-12 lg:pb-10">
        <div className="md:order-1 lg:order-none">
          <Link to="/home" aria-label="Prototype Design home" className="inline-block">
            <Logo inverted />
          </Link>
          <p className="mt-3 text-base font-semibold text-white">{company.tagline}</p>
          <p className="mt-1.5 line-clamp-3 max-w-[320px] text-sm leading-relaxed">
            Design, DFMA, Rapid Prototyping, Tooling, Validation and Production Support under one engineering roof.
          </p>
        </div>

        <LinkColumn title="Quick Links" links={navLinks} className="md:order-3 lg:order-none" />

        <LinkColumn
          title="Services"
          links={[
            ...footerServices.map((s) => ({ label: s.title, to: '/projects' })),
            { label: 'View all services', to: '/projects' },
          ]}
          className="hidden md:order-4 md:block lg:order-none"
        />

        <div className="md:order-2 lg:order-none">
          <h3 className={heading}>Get In Touch</h3>
          <ul className="space-y-2.5 text-[15px] md:text-sm">
            <li className="flex items-start gap-3">
              <RowIcon icon={MapPin} className="mt-px" />
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${CONTACT.addressOneLine} (opens Google Maps in a new tab)`}
                className="min-w-0 leading-snug transition-colors duration-200 hover:text-white"
              >
                {CONTACT.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </a>
            </li>
            {CONTACT.email && (
              <li className="flex items-center gap-3">
                <RowIcon icon={Mail} />
                {/* -my-3 py-3 keeps a 44px tap area without adding visual height */}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="-my-3 min-w-0 py-3 [overflow-wrap:anywhere] transition-colors duration-200 hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </li>
            )}
            <li className="flex items-center gap-3">
              <RowIcon icon={Phone} />
              <a href={`tel:${CONTACT.phoneTel}`} className="-my-3 py-3 transition-colors duration-200 hover:text-white">
                {CONTACT.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/12">
        {/* 80px bottom space on phones and tablets so the floating buttons never cover the copyright */}
        <div className="container-site py-3.5 text-center text-[13px] max-lg:pb-20 lg:py-5 lg:text-xs">
          <p>
            © 2026 {CONTACT.legalName}.<span className="max-sm:hidden"> All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
