import SEO from '../components/SEO'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import AnimatedSection from '../components/AnimatedSection'
import { SERVICES } from '../data/services'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <SEO title="Bangų klinika – Odontologija Klaipėdoje" description="Gydymas, implantai, CEREC protezavimas, higiena ir estetika." />
      <Hero />

      <AnimatedSection>
        <div className="container-narrow">
          <h2 className="text-2xl font-bold mb-6">Populiariausios paslaugos</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => <ServiceCard key={s.id} s={s} i={i} />)}
          </div>
          <div className="mt-8">
            <Link to="/paslaugos" className="btn-ghost">Visos paslaugos</Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="container-narrow grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="font-semibold text-lg">Moderni įranga</h3>
            <p className="text-sm text-gray-600 mt-2">CEREC skenavimas, mikroskopinė endodontija.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-lg">Patyrusi komanda</h3>
            <p className="text-sm text-gray-600 mt-2">Individualus planas ir aiškūs paaiškinimai.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-lg">Aiškios kainos</h3>
            <p className="text-sm text-gray-600 mt-2">Preliminarios kainos – svetainėje.</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="container-narrow grid md:grid-cols-2 gap-8 items-start">
          <Testimonials />
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Dažniausi klausimai</h3>
            <FAQ />
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
