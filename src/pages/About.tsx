import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'

export default function About() {
  return (
    <AnimatedSection>
      <SEO title="Apie kliniką – Bangų klinika" />
      <div className="container-narrow prose max-w-none">
        <h1>Apie kliniką</h1>
        <p>Bangų klinika – jauki, pacientų rekomenduojama odontologijos klinika Klaipėdos centre. Deriname modernią įrangą ir šiltą bendravimą, kad kiekvienas vizitas būtų kuo malonesnis.</p>
        <p>Mūsų tikslas – aiškus gydymo planas, kokybiškos medžiagos ir ilgalaikiai rezultatai.</p>
      </div>
    </AnimatedSection>
  )
}
