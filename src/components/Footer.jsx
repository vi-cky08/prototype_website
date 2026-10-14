import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo.jsx'
import { company, navLinks } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="container-site grid gap-10 py-12 sm:grid-cols-2 sm:py-14 lg:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Link to="/home" aria-label="Prototype Design home" className="inline-block">
            <Logo inverted />
          </Link>
          <p className="mt-5 text-lg font-semibold text-white">{company.tagline}</p>
          <p className="mt-2 max-w-sm text-[15px] leading-relaxed sm:text-sm">
            Design, DFMA, Rapid Prototyping, Tooling, Validation and Production Support under one engineering roof.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.2em] text-white uppercase">Quick Links</h3>
          <ul className="mt-4 flex flex-col gap-1 text-[15px] sm:text-sm md:gap-0">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="inline-flex min-h-11 items-center transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.2em] text-white uppercase">Get In Touch</h3>
          <ul className="mt-4 space-y-1 text-[15px] sm:text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-[#6fa3e6]" aria-hidden="true" />
              Bengaluru, India
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-[#6fa3e6]" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className="inline-flex min-h-11 min-w-0 items-center [overflow-wrap:anywhere] hover:text-white">
                {company.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-[#6fa3e6]" aria-hidden="true" />
              <a href={`tel:${company.phone.replaceAll(' ', '')}`} className="inline-flex min-h-11 items-center hover:text-white">
                {company.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-[13px] sm:flex-row sm:text-xs sm:items-center sm:justify-between">
          <p>© 2026 {company.legalName}. All rights reserved.</p>
          <p>Prototype Design is the engineering brand of {company.legalName}.</p>
        </div>
      </div>
    </footer>
  )
}
