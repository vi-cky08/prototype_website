import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo.jsx'
import { company, navLinks } from '../data/site.js'
import { CONTACT, mapsLink } from '../data/contact.js'
import { services } from '../data/services.js'

const footerServices = services.slice(0, 5)

const heading = 'mb-3 text-xs font-semibold tracking-[0.2em] text-white uppercase lg:mb-4'
// 40px tap height on touch sizes, compact 8px rhythm on desktop
const linkCls = 'group flex min-h-10 items-center leading-snug transition-colors duration-200 hover:text-white lg:min-h-0 lg:py-1'
// Underline that grows from the left on hover/focus
const underline =
  'bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-px transition-[background-size] duration-300 ease-out group-hover:bg-[length:100%_1px] group-focus-visible:bg-[length:100%_1px]'
// Small icon chip for contact rows
const chip = 'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent'

function IconChip({ icon: Icon, className = '' }) {
  return (
    <span className={`${chip} ${className}`} aria-hidden="true">
      <Icon className="h-4 w-4" strokeWidth={1.75} />
    </span>
  )
}

function LinkColumn({ title, links, className = '' }) {
  return (
    <div className={className}>
      <h3 className={heading}>{title}</h3>
      <ul className="flex flex-col text-[15px] md:text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className={linkCls}>
              <span className={underline}>{l.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="on-dark relative bg-gradient-to-b from-navy-800 to-navy-900 text-white/70">
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
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
            
          ]}
          className="hidden md:order-4 md:block lg:order-none"
        />

        <div className="md:order-2 lg:order-none">
          <h3 className={heading}>Get In Touch</h3>
          <ul className="space-y-2.5 text-[15px] md:text-sm">
            <li className="flex items-start gap-3">
              <IconChip icon={MapPin} className="-mt-0.5" />
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
                <IconChip icon={Mail} />
                {/* -my-2.5 py-2.5 keeps a 40px+ tap area without adding visual height */}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="-my-2.5 min-w-0 py-2.5 [overflow-wrap:anywhere] transition-colors duration-200 hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </li>
            )}
            <li className="flex items-center gap-3">
              <IconChip icon={Phone} />
              <a href={`tel:${CONTACT.phoneTel}`} className="-my-2.5 py-2.5 transition-colors duration-200 hover:text-white">
                {CONTACT.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-3.5 text-center text-[13px] max-sm:pb-20 lg:py-5 lg:text-xs">
          <p>
            © 2026 {CONTACT.legalName}.<span className="max-sm:hidden"> All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
