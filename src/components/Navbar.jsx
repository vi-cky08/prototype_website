import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { navLinks } from '../data/site.js'

// Active link: blue text with a 2px blue underline. Hover only changes the colour.
const linkClass = ({ isActive }) =>
  `relative inline-flex min-h-11 items-center text-[14px] font-medium transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-1.5 after:h-[2px] after:bg-primary ${
    isActive ? 'text-primary after:block' : 'text-ink after:hidden hover:text-primary'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    // Solid white bar with a 1px bottom border; fixed height (64px, 72px from 1024px).
    <div className="sticky top-0 z-50">
      <header className="relative z-10 border-b border-line bg-white">
        <nav className="container-site flex h-16 items-center justify-between gap-4 lg:h-[72px] lg:gap-6" aria-label="Main">
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
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-line bg-white text-navy transition-colors hover:border-primary hover:text-primary lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu: fades in over the page; `invisible` keeps closed links out of the tab order */}
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full border-b border-line bg-white transition-[opacity,visibility] duration-200 lg:hidden ${
            open ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
        >
          <ul className="container-site flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `flex min-h-12 items-center rounded-[4px] border-l-2 px-4 py-3 text-[16px] font-medium transition-colors ${
                      isActive ? 'border-primary bg-grey text-primary' : 'border-transparent text-ink hover:bg-grey'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="px-1 pt-3 pb-1">
              <Button to="/contact" variant="navy" className="w-full">
                Start Your Project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </li>
          </ul>
        </div>
      </header>

      {/* Backdrop overlay behind the open mobile menu */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 top-16 bg-navy-900/40 transition-opacity duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}
