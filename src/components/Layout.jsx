import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { m, useReducedMotion } from 'framer-motion'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import LocalBusinessSchema from './LocalBusinessSchema.jsx'
import FloatingActions from './FloatingActions.jsx'
import { EASE, MotionProvider } from './Motion.jsx'

export default function Layout() {
  const { pathname } = useLocation()
  const reduce = useReducedMotion()

  // The page fade plays only when navigating between pages, never on the first load or a refresh.
  const firstRender = useRef(true)
  useEffect(() => {
    firstRender.current = false
  }, [])

  return (
    <MotionProvider>
      <div className="flex min-h-screen flex-col">
        <ScrollToTop />
        <LocalBusinessSchema />
        <Navbar />
        <m.main
          key={pathname}
          className="flex-1"
          initial={reduce || firstRender.current ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <Outlet />
        </m.main>
        <Footer />
        <FloatingActions />
      </div>
    </MotionProvider>
  )
}