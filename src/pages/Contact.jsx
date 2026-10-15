import { Building2, Clock, ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import ContactForm from '../components/ContactForm.jsx'
import IconCircle from '../components/IconCircle.jsx'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import Pattern from '../components/Pattern.jsx'
import { Reveal } from '../components/Motion.jsx'
import { CONTACT, contactIntro, mapsEmbed, mapsLink, whatsappLink } from '../data/contact.js'

const linkCls = '-my-3 inline-flex min-h-11 items-center text-white underline-offset-4 transition-colors hover:text-accent hover:underline'

function DetailRow({ icon, title, children }) {
  return (
    <li className="flex gap-4">
      <IconCircle icon={icon} size="sm" shape="square" tone="dark" className="rounded-xl!" />
      <div className="min-w-0 pt-0.5 text-[15px] text-white/80 [overflow-wrap:anywhere]">
        <p className="font-semibold text-white">{title}</p>
        <div className="mt-0.5">{children}</div>
      </div>
    </li>
  )
}

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden bg-mesh pt-10 pb-28 sm:pt-14 lg:pt-20 lg:pb-32">
        <Pattern variant="grid" />
        <Reveal className="container-site relative">
          <SectionHeading as="h1" {...contactIntro} />
        </Reveal>
      </section>

      <section className="relative z-10 -mt-20 pb-20 lg:pb-28">
        <div className="container-site grid gap-6 lg:gap-8">
          <Reveal className="min-w-0">
            <Card accent className="h-full p-5 sm:p-9">
              <h2 className="text-[22px] font-bold">Tell us about your project</h2>
              <p className="mt-1.5 mb-7 text-[15px]">Fields marked * are required.</p>
              <ContactForm />
            </Card>
          </Reveal>

          <Reveal as="aside" delay={0.1} className="on-dark relative flex min-w-0 flex-col overflow-hidden rounded-[var(--radius-card)] bg-navy-gradient p-5 shadow-lg sm:p-9">
            <Pattern variant="grid-light" />
            <div className="relative flex flex-1 flex-col lg:grid lg:grid-cols-2 lg:gap-10">
              <div className="flex flex-col">
                <h2 className="text-[22px] font-bold text-white">Contact Details</h2>
                <ul className="mt-7 space-y-6">
                  <DetailRow icon={Building2} title={CONTACT.companyName}>
                    {CONTACT.legalName}
                  </DetailRow>
                  <DetailRow icon={MapPin} title="Address">
                    <a
                      href={mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${CONTACT.addressOneLine} (opens Google Maps in a new tab)`}
                      className="block transition-colors hover:text-accent"
                    >
                      {CONTACT.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </a>
                  </DetailRow>
                  <DetailRow icon={Phone} title="Phone">
                    <a href={`tel:${CONTACT.phoneTel}`} className={linkCls}>
                      {CONTACT.phoneDisplay}
                    </a>
                  </DetailRow>
                  {CONTACT.email && (
                    <DetailRow icon={Mail} title="Email">
                      <a href={`mailto:${CONTACT.email}`} className={linkCls}>
                        {CONTACT.email}
                      </a>
                    </DetailRow>
                  )}
                  {CONTACT.workingHours && (
                    <DetailRow icon={Clock} title="Working Hours">
                      {CONTACT.workingHours}
                    </DetailRow>
                  )}
                </ul>

                <Button
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp (opens in a new tab)"
                  variant="whatsapp"
                  className="mt-8 w-full"
                >
                  <MessageCircle className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                  Chat on WhatsApp
                </Button>
              </div>

              <div className="relative mt-6 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/15 lg:mt-0">
                <iframe
                  src={mapsEmbed}
                  title="Prototype Design location in Doopanahalli, Bengaluru"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-[220px] w-full border-0 lg:h-full lg:min-h-[260px]"
                />
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open in Google Maps (opens in a new tab)"
                  className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[13px] font-semibold whitespace-nowrap text-navy shadow-md transition-colors hover:text-primary"
                >
                  Open in Google Maps <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
