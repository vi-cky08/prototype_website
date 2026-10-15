import { Outlet, useLocation } from 'react-router-dom'
import { m, useReducedMotion } from 'framer-motion'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import LocalBusinessSchema from './LocalBusinessSchema.jsx'
import ScrollProgress from './ScrollProgress.jsx'
import FloatingActions from './FloatingActions.jsx'
import { EASE, MotionProvider } from './Motion.jsx'

export default function Layout() {
  const { pathname } = useLocation()
  const reduce = useReducedMotion()

  return (
    <MotionProvider>
      <div className="flex min-h-screen flex-col">
        <ScrollToTop />
        <LocalBusinessSchema />
        <ScrollProgress />
        <Navbar />
        {/* Short fade/slide on every route change (keyed by path) */}
        <m.main
          key={pathname}
          className="flex-1"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
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
