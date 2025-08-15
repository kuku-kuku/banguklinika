import SEO from '../components/SEO'
import ServiceCard from '../components/ServiceCard'
import { SERVICES } from '../data/services'
import AnimatedSection from '../components/AnimatedSection'

export default function Services() {
  return (
    <AnimatedSection>
      <SEO title="Paslaugos – Bangų klinika" description="Dantų gydymas, implantacija, CEREC protezavimas, estetika, burnos higiena." />
      <div className="container-narrow">
        <h1 className="text-3xl font-bold mb-6">Paslaugos</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => <ServiceCard key={s.id} s={s} i={i} />)}
        </div>
      </div>
    </AnimatedSection>
  )
}
