import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'
import { CLINIC } from '../data/clinic'
import AnimatedSection from '../components/AnimatedSection'

export default function Contact() {
  return (
    <AnimatedSection>
      <SEO title="Kontaktai – Bangų klinika" description="Bangų g. 7-3, Klaipėda • +370 671 91399 • info@banguklinika.lt" />
      <div className="container-narrow grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Kontaktai</h1>
          <ul className="text-sm text-gray-700 space-y-2">
            <li><strong>Adresas:</strong> {CLINIC.address}</li>
            <li><strong>Telefonas:</strong> <a className="hover:text-primary-700" href={`tel:${CLINIC.phone}`}>{CLINIC.phone}</a></li>
            <li><strong>El. paštas:</strong> <a className="hover:text-primary-700" href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a></li>
          </ul>
          <h2 className="font-semibold">Parašykite mums</h2>
          <ContactForm />
        </div>
        <Map />
      </div>
    </AnimatedSection>
  )
}
