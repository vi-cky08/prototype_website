import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { navLinks } from '../data/site.js'

const linkClass = ({ isActive }) =>
  `relative py-2 text-[14px] font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-primary after:transition-transform after:duration-200 ${
    isActive ? 'text-primary after:scale-x-100' : 'text-[#3d4b5f] after:scale-x-0 hover:text-primary'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_#e6edf5,0_6px_18px_-10px_rgb(11_31_58/0.18)]">
      <nav className="container-site flex min-h-16 items-center justify-between gap-4 py-2 lg:min-h-[76px] lg:gap-6" aria-label="Main">
        <Link to="/home" aria-label="Prototype Design home" className="min-w-0 shrink">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-3">
          <Button to="/contact" variant="navy" className="hidden! px-5! py-2.5! lg:inline-flex!">
            Start Your Project
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-navy lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden bg-white transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? 'grid-rows-[1fr] border-t border-line' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0">
          <ul className="container-site flex flex-col py-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  tabIndex={open ? 0 : -1}
                  className={({ isActive }) =>
                    `flex min-h-12 items-center rounded-lg px-3 py-3 text-[16px] font-medium ${
                      isActive ? 'bg-sky text-primary' : 'text-navy hover:bg-sky-soft'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="px-3 pt-3 pb-2">
              <Button to="/contact" variant="navy" className="w-full" tabIndex={open ? 0 : -1}>
                Start Your Project
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
