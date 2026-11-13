
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Logo from "./Logo.jsx";
import Button from "./Button.jsx";
import { navLinks } from "../data/site.js";

const linkClass = ({ isActive }) =>
  `relative inline-flex min-h-11 items-center text-[14px] font-medium transition-colors duration-200
   after:absolute after:inset-x-0 after:bottom-1.5 after:h-[2px] after:bg-primary
   ${
     isActive
       ? "text-primary after:block"
       : "text-ink after:hidden hover:text-primary"
   }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close menu after navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close menu with Escape key
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* FIXED NAVBAR */}
      <div className="fixed inset-x-0 top-0 z-[100] w-full">
        <header className="border-b border-line bg-white shadow-sm">
          <nav
            className="container-site flex h-16 items-center justify-between gap-4 lg:h-[72px] lg:gap-6"
            aria-label="Main navigation"
          >
            {/* LOGO */}
            <Link
              to="/home"
              aria-label="Prototype Design home"
              className="relative z-20 min-w-0 shrink"
            >
              <Logo />
            </Link>

            {/* DESKTOP NAVIGATION */}
            <ul className="hidden items-center gap-8 lg:flex">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} className={linkClass}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* RIGHT SIDE BUTTONS */}
            <div className="flex shrink-0 items-center gap-3">
              {/* DESKTOP REGISTER */}
              <Button
                to="/signup"
                variant="navy"
                className="hidden! px-5! py-2.5! lg:inline-flex!"
              >
                Register
              </Button>

              {/* MOBILE REGISTER */}
              <Button
                to="/signup"
                variant="navy"
                className="whitespace-nowrap !min-h-10 !px-2.5 !py-2 !text-[11px] sm:!px-3 sm:!text-xs lg:hidden"
              >
                Register
              </Button>

              {/* MOBILE MENU BUTTON */}
              <button
                type="button"
                className="relative z-30 inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-line bg-white text-navy transition-colors hover:border-primary hover:text-primary lg:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen((previous) => !previous)}
              >
                {open ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </nav>

          {/* MOBILE DROPDOWN */}
          <div
            id="mobile-menu"
            aria-hidden={!open}
            className={`absolute inset-x-0 top-full z-30 border-b border-line bg-white shadow-lg transition-[opacity,visibility] duration-200 lg:hidden ${
              open
                ? "visible pointer-events-auto opacity-100"
                : "invisible pointer-events-none opacity-0"
            }`}
          >
            <ul className="container-site flex flex-col gap-1 py-4">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex min-h-12 items-center rounded-[4px] border-l-2 px-4 py-3 text-[16px] font-medium transition-colors ${
                        isActive
                          ? "border-primary bg-grey text-primary"
                          : "border-transparent text-ink hover:bg-grey"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </header>
      </div>

      {/* MOBILE BACKDROP */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-x-0 bottom-0 top-16 z-[90] bg-navy-900/40 transition-opacity duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />
    </>
  );
}
