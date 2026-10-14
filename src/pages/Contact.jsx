import { Building2, Clock, ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import ContactForm from '../components/ContactForm.jsx'
import IconCircle from '../components/IconCircle.jsx'
import { company } from '../data/site.js'
import { contactIntro } from '../data/contact.js'

function DetailRow({ icon, title, children }) {
  return (
    <li className="flex gap-4">
      <IconCircle icon={icon} size="sm" />
      <div className="min-w-0 pt-0.5 text-[15px] [overflow-wrap:anywhere]">
        <p className="font-semibold text-navy">{title}</p>
        <div className="mt-0.5">{children}</div>
      </div>
    </li>
  )
}

export default function Contact() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#e6f0f9] via-[#f3f8fd] to-page pt-10 pb-28 sm:pt-14 lg:pt-20 lg:pb-32">
        <div className="container-site">
          <SectionHeading as="h1" {...contactIntro} />
        </div>
      </section>

      <section className="relative z-10 -mt-20 pb-20 lg:pb-24">
        <div className="container-site grid gap-6 lg:grid-cols-[1.45fr_1fr]">
          <div className="card min-w-0 p-5 sm:p-9">
            <h2 className="text-[22px] font-bold">Tell us about your project</h2>
            <p className="mt-1.5 mb-7 text-[15px]">Fields marked * are required.</p>
            <ContactForm />
          </div>

          <aside className="card flex min-w-0 flex-col p-5 sm:p-9">
            <h2 className="text-[22px] font-bold">Contact Details</h2>
            <ul className="mt-7 space-y-6">
              <DetailRow icon={Building2} title={company.brand}>
                {company.legalName}
              </DetailRow>
              <DetailRow icon={MapPin} title="Location">
                {company.location}
              </DetailRow>
              <DetailRow icon={Mail} title="Email">
                <a href={`mailto:${company.email}`} className="-my-3 inline-flex min-h-11 items-center text-primary hover:underline">
                  {company.email}
                </a>
              </DetailRow>
              <DetailRow icon={Phone} title="Phone">
                <a href={`tel:${company.phone.replaceAll(' ', '')}`} className="-my-3 inline-flex min-h-11 items-center text-primary hover:underline">
                  {company.phone}
                </a>
              </DetailRow>
              <DetailRow icon={Clock} title="Working Hours">
                <dl className="space-y-0.5">
                  {company.hours.map((h) => (
                    <div key={h.days} className="flex flex-wrap justify-between gap-x-4">
                      <dt>{h.days}</dt>
                      <dd className="text-navy/80">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </DetailRow>
            </ul>

            {/* Map placeholder: replace with an embedded Google Map iframe for the office address. */}
            <a
              href={company.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative mt-8 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl border border-line bg-sky"
              aria-label="Open Bengaluru in Google Maps (opens in a new tab)"
            >
              <svg className="absolute inset-0 h-full w-full text-[#c9dbef]" aria-hidden="true">
                <defs>
                  <pattern id="map-grid" width="36" height="36" patternUnits="userSpaceOnUse">
                    <path d="M36 0H0V36" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
                <path d="M-10 120 C80 80 160 150 260 90 S420 60 520 110" fill="none" stroke="#fff" strokeWidth="10" />
                <path d="M120 -10 C140 80 100 160 150 260" fill="none" stroke="#fff" strokeWidth="7" />
              </svg>
              <span className="relative flex flex-col items-center gap-2">
                <MapPin className="h-10 w-10 fill-primary text-white drop-shadow-md transition-transform group-hover:-translate-y-1" />
                <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[13px] font-semibold text-navy shadow">
                  Bengaluru, India <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </span>
            </a>
          </aside>
        </div>
      </section>
    </>
  )
}
