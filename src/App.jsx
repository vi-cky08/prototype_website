import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import WhyChooseUs from './pages/WhyChooseUs.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Projects from './pages/Projects.jsx'
import Pricing from './pages/Pricing.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="why-choose-us" element={<WhyChooseUs />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="our-team" element={<Navigate to="/about-us" replace />} />
        <Route path="projects" element={<Projects />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
