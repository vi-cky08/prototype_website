import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { navLinks } from '../data/site.js'

// Underline slides in from the left on hover and stays for the active link.
const linkClass = ({ isActive }) =>
  `relative py-2 text-[14px] font-medium transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:rounded-full after:bg-gradient-to-r after:from-primary after:to-accent after:transition-transform after:duration-300 after:ease-out ${
    isActive ? 'text-primary after:scale-x-100' : 'text-[#3d4b5f] after:scale-x-0 hover:text-primary hover:after:scale-x-100'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    // The outer wrapper keeps a fixed height so the bar can shrink on scroll without shifting the page.
    <div className="pointer-events-none sticky top-0 z-50 h-16 lg:h-[76px]">
      <header
        className={`pointer-events-auto relative z-10 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled || open
            ? 'border-line/80 bg-white/95 shadow-[0_8px_24px_-14px_rgb(11_42_91/0.25)] md:bg-white/80 md:backdrop-blur-lg'
            : 'border-transparent bg-white/80 md:bg-white/70 md:backdrop-blur-md'
        }`}
      >
        <nav
          className={`container-site flex items-center justify-between gap-4 transition-[height] duration-300 ease-out lg:gap-6 ${
            scrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-[76px]'
          }`}
          aria-label="Main"
        >
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-navy transition-colors hover:border-primary-200 hover:text-primary lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu: slides and fades over the page; `invisible` keeps closed links out of the tab order */}
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full border-b border-line bg-white shadow-lg transition-[opacity,transform,visibility] duration-300 ease-out lg:hidden ${
            open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0'
          }`}
        >
          <ul className="container-site flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `flex min-h-12 items-center rounded-xl px-4 py-3 text-[16px] font-medium transition-colors ${
                      isActive ? 'bg-primary-50 text-primary' : 'text-navy hover:bg-sky-soft'
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
