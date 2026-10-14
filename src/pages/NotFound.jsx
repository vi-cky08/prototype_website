import { Compass } from 'lucide-react'
import Button from '../components/Button.jsx'
import IconCircle from '../components/IconCircle.jsx'

export default function NotFound() {
  return (
    <section className="section-y">
      <div className="container-site flex flex-col items-center py-10 text-center">
        <IconCircle icon={Compass} size="lg" />
        <p className="mt-6 text-[13px] font-semibold tracking-[0.2em] text-primary uppercase">Error 404</p>
        <h1 className="mt-3 text-[32px] font-bold sm:text-[40px]">Page not found</h1>
        <p className="mt-3 max-w-md">The page you are looking for doesn&apos;t exist or has been moved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/home">Back to Home</Button>
          <Button to="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
