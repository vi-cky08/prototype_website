import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo.jsx'
import { company, navLinks } from '../data/site.js'
import { services } from '../data/services.js'

const footerServices = services.slice(0, 5)

const heading = 'mb-3 text-xs font-semibold tracking-[0.2em] text-white uppercase lg:mb-4'
// 40px tap height on touch sizes, compact 8px rhythm on desktop
const linkCls = 'flex min-h-10 items-center leading-snug transition-colors hover:text-white lg:min-h-0 lg:py-1'

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
    <footer className="bg-navy-deep text-white/70">
      {/* Mobile: one column (services hidden). Tablet: 2x2 (Brand | Contact, Links | Services). Desktop: 4 columns. */}
      <div className="container-site grid gap-6 pt-7 pb-4 md:grid-cols-2 md:gap-x-10 md:gap-y-8 md:pt-9 md:pb-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.8fr)_minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-x-12 lg:pt-12 lg:pb-10">
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
            { label: 'View all services →', to: '/projects' },
          ]}
          className="hidden md:order-4 md:block lg:order-none"
        />

        <div className="md:order-2 lg:order-none">
          <h3 className={heading}>Get In Touch</h3>
          <ul className="space-y-2.5 text-[15px] md:text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-[#6fa3e6]" aria-hidden="true" />
              {company.location.replace(', Karnataka', '')}
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-[#6fa3e6]" aria-hidden="true" />
              {/* -my-2.5 py-2.5 keeps a 40px+ tap area without adding visual height */}
              <a href={`mailto:${company.email}`} className="-my-2.5 min-w-0 py-2.5 [overflow-wrap:anywhere] hover:text-white">
                {company.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-[#6fa3e6]" aria-hidden="true" />
              <a href={`tel:${company.phone.replaceAll(' ', '')}`} className="-my-2.5 py-2.5 hover:text-white">
                {company.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex items-center justify-between gap-4 py-3.5 text-[13px] lg:py-5 lg:text-xs">
          <p>
            © 2026 {company.legalName}.<span className="max-sm:hidden"> All rights reserved.</span>
          </p>
          <ul className="flex shrink-0 gap-5 max-md:hidden">
            <li>
              <Link to="/home" className="-my-3 inline-block py-3 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="-my-3 inline-block py-3 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
