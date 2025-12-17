import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'

// Animacijų nustatymai
const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

// Ikonos
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function ScalpelIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  )
}

export default function BurnosChirurgija() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Profesionali burnos chirurgija",
    "description": "Burnos chirurgijos paslaugos Klaipėdoje: dantų šalinimas, implantacija, kaulo augmentacija.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klinika"
    }
  }

  return (
    <AnimatedSection>
      <SEO
        title="Burnos Chirurgija Klaipėdoje | Dantų Rovimas | Bangų klinika"
        description="Profesionali burnos chirurgija Klaipėdoje. Protinių dantų šalinimas, implantacija, kaulo augmentacija. Saugios ir neskausmingos procedūros."
        keywords="burnos chirurgija, dantu rovimas, protiniai dantys, cistos, kaulo priauginimas, klaipeda"
        structuredData={structuredData}
      />

      <motion.div className="container-narrow" variants={container} initial="hidden" animate="visible">
        
        {/* HERO */}
        <motion.header className="mb-10 text-center sm:text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-4">
            Profesionali burnos chirurgija Klaipėdoje
          </h1>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
            <p className="mb-4">
              Burnos chirurgija – tai odontologinio gydymo sritis, skirta spręsti sudėtingesnes dantų, minkštųjų audinių ir žandikaulio kaulo problemas, kai įprastas terapinis gydymas nebėra pakankamas. Tokios procedūros dažnai reikalingos siekiant pašalinti infekcijos židinius, atkurti burnos funkciją ar paruošti burną tolimesniam gydymui, pavyzdžiui, implantacijai ar protezavimui.
            </p>
            <p>
              Bangų odontologijos klinikoje Klaipėdoje burnos chirurginės procedūros atliekamos laikantis šiuolaikinių medicininių standartų, naudojant modernią diagnostiką ir patikimus nuskausminimo metodus. Patyręs burnos chirurgas kiekvieną klinikinę situaciją vertina individualiai, siekdamas saugaus, prognozuojamo ir ilgalaikio rezultato. Didelis dėmesys skiriamas ne tik pačiai procedūrai, bet ir paciento savijautai, aiškiam gydymo paaiškinimui bei sklandžiam gijimo procesui.
            </p>
          </div>
        </motion.header>

        {/* KAS YRA BURNOS CHIRURGIJA */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas yra burnos chirurgija?
          </h2>
          <div className="bg-brand-50/50 p-6 rounded-2xl border border-brand/20 text-slate-700 leading-relaxed space-y-4">
            <p>
              Burnos chirurgija – tai odontologijos sritis, apimanti chirurginį dantų, burnos gleivinės, žandikaulių ir aplinkinių audinių gydymą. Ji taikoma tais atvejais, kai dantų ar burnos problemų neįmanoma išspręsti konservatyviais metodais, o chirurginė intervencija yra būtina siekiant užkirsti kelią ligos progresavimui ar atkurti normalias burnos funkcijas.
            </p>
            <p>
              Dažniausiai burnos chirurgija apima procedūras, susijusias su nepagydomai pažeistų dantų šalinimu, infekcijų gydymu, protinių dantų problemomis, kaulo audinio korekcijomis ar pasiruošimu dantų implantacijai. Šios intervencijos gali būti tiek paprastos, tiek sudėtingesnės, todėl kiekvienu atveju atliekama išsami diagnostika ir sudaromas individualus gydymo planas.
            </p>
            <p className="font-medium text-darkblue-700">
              Svarbu pabrėžti, kad šiuolaikinė burnos chirurgija ženkliai skiriasi nuo anksčiau vyravusių stereotipų. Procedūros atliekamos taikant efektyvią vietinę nejautrą ar kitus nuskausminimo metodus, todėl pacientas nejaučia skausmo, o diskomfortas po procedūros paprastai būna minimalus ir laikinas.
            </p>
          </div>
        </motion.section>

        {/* KADA REIKALINGA KONSULTACIJA (Checklist) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kada reikalinga burnos chirurgo konsultacija?
          </h2>
          <p className="text-slate-700 mb-6">
            Burnos chirurgo konsultacija reikalinga tuomet, kai dantų ar burnos audinių problemų neįmanoma išspręsti taikant įprastus gydymo metodus. Dažnai pacientai delsia kreiptis, nes skausmas būna nestiprus, tačiau burnos ligos gali progresuoti tyliai. Mūsų klinikoje rekomenduojama kreiptis šiais atvejais:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Kai dantis stipriai pažeistas ir neįmanoma išsaugoti terapiniu būdu",
              "Esant nuolatiniam ar pasikartojančiam dantenų uždegimui, pūliniui",
              "Kai protiniai dantys dygsta netaisyklingai ar kelia skausmą",
              "Patyrus dantų ar žandikaulio traumą",
              "Prieš planuojamą dantų implantaciją ar sudėtingesnį protezavimą",
              "Nustačius cistas, darinius ar kitus pakitimus kaule"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <span className="mt-1"><ScalpelIcon /></span>
                <span className="text-slate-700 font-medium">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm mt-4 italic">
            Laiku atlikta konsultacija leidžia tiksliai nustatyti problemos priežastį ir parinkti optimalų sprendimą.
          </p>
        </motion.section>

        {/* PROCEDŪRŲ SĄRAŠAS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kokias procedūras atlieka burnos chirurgas?
          </h2>
          <div className="space-y-3">
             {[
               "Dantų šalinimas – kai dantis nepagydomai pažeistas",
               "Protinių (retinuotų) dantų šalinimas (kai spaudžia kitus dantis)",
               "Pūlinių atvėrimas ir infekcijų gydymas",
               "Šaknies viršūnės rezekcija (kai infekcija išlieka po kanalų gydymo)",
               "Žandikaulio cistų ir kitų darinių šalinimas",
               "Paruošiamosios procedūros implantacijai (kaulo korekcijos)",
               "Sinuso dugno pakėlimas",
               "Minkštųjų audinių chirurgija"
             ].map((proc, i) => (
               <div key={i} className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"></div>
                 <span className="text-slate-700">{proc}</span>
               </div>
             ))}
          </div>
        </motion.section>

        {/* KAINOS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Paslaugų kainos
          </h2>
          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden">
            <div className="divide-y divide-slate-100">
              {[
                { name: "Kaulo augmentacija", price: "150 – 600 €" },
                { name: "Šaknies šalinimas (jau pašalinto danties)", price: "60 – 80 €" },
                { name: "Danties šalinimas", price: "80 – 100 €" },
                { name: "Komplikuotas protinių dantų šalinimas", price: "120 – 150 €" }
              ].map((service, index) => (
                <div key={index} className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                  <span className="text-slate-700 font-medium w-2/3">{service.name}</span>
                  <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">{service.price}</span>
                </div>
              ))}
            </div>
            <div className="p-4 bg-gray-50 text-sm text-slate-500">
              Tiksli procedūros apimtis ir galutinė kaina aptariama individualios konsultacijos metu.
            </div>
          </div>
        </motion.section>

        {/* GYDYMO EIGA (STEPS) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kaip atliekamas burnos chirurginis gydymas?
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Konsultacija</h3>
              <p className="text-sm text-slate-600">Klinikinė apžiūra, rentgeno tyrimai, problemos nustatymas ir individualaus plano sudarymas.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Pasiruošimas</h3>
              <p className="text-sm text-slate-600">Supažindinimas su eiga, nuskausminimo parinkimas (dažniausiai vietinė nejautra).</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Procedūra</h3>
              <p className="text-sm text-slate-600">Atliekama steriliai, tiksliai ir švelniai, naudojant modernius instrumentus.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Priežiūra</h3>
              <p className="text-sm text-slate-600">Rekomendacijos gijimui, vaistų vartojimas ir, jei reikia, pakartotinis vizitas.</p>
            </div>
          </div>
        </motion.section>

        {/* SAUGUMAS IR DELSIMAS (INFO TEXT) */}
        <motion.section className="mb-12 grid md:grid-cols-2 gap-8" variants={item}>
          <div>
            <h3 className="text-lg font-bold text-darkblue-700 mb-3">Ar procedūros saugios?</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Šiuolaikinė burnos chirurgija yra saugi sritis. Prieš procedūrą įvertinama sveikatos būklė, parenkama tinkamiausia taktika. Vietinė nejautra užtikrina, kad skausmo nejausite.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
              Po gydymo galimas laikinas patinimas ar jautrumas, tačiau tai normali reakcija, kuri greitai praeina laikantis rekomendacijų.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-red-700/80 mb-3">Kas nutinka atidėliojant?</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Delsimas gali turėti neigiamų pasekmių. Neišgydytos infekcijos gali plisti, sukelti pūlinius ar kaulo pažeidimus.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
              Atidėliojant gydymą, jis tampa sudėtingesnis ir brangesnis, be to, gali apsunkinti būsimą implantaciją ar protezavimą.
            </p>
          </div>
        </motion.section>

        {/* REKOMENDACIJOS (PRE & POST) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Ką svarbu žinoti prieš ir po procedūros?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-brand-50/30 p-6 rounded-2xl border border-brand/10">
              <h3 className="font-bold text-darkblue-700 mb-4 flex items-center gap-2">Prieš procedūrą</h3>
              <ul className="space-y-2 text-slate-700 text-sm list-disc pl-4">
                <li>Laikytis gydytojo nurodymų dėl mitybos ar vaistų.</li>
                <li>Informuoti specialistą apie vartojamus vaistus ar lėtines ligas.</li>
                <li>Vengti rūkymo, nes jis lėtina gijimą.</li>
              </ul>
            </div>
            <div className="bg-brand-50/30 p-6 rounded-2xl border border-brand/10">
              <h3 className="font-bold text-darkblue-700 mb-4 flex items-center gap-2">Po procedūros</h3>
              <ul className="space-y-2 text-slate-700 text-sm list-disc pl-4">
                <li>Kurį laiką vengti intensyvaus fizinio krūvio.</li>
                <li>Laikytis švelnios burnos higienos, nedirginti operuotos vietos.</li>
                <li>Rinktis minkštesnį, nekarštą maistą.</li>
                <li>Stebėti gijimo eigą.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* KODĖL MES & CTA */}
        <motion.div className="mt-8 mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kodėl verta rinktis Bangų odontologijos kliniką?
          </h2>
          <p className="text-slate-700 mb-8 leading-relaxed">
            Renkantis burnos chirurgijos paslaugas itin svarbu pasitikėti specialistu. Mūsų klinikoje dirbantis chirurgas kiekvieną situaciją vertina individualiai, naudodamas modernius diagnostikos metodus. Užtikriname aiškią komunikaciją, skaidrumą ir dėmesį jūsų saugumui.
          </p>
          
          <div className="text-center">
             <p className="text-slate-600 mb-6 font-medium">
              Kviečiame registruotis burnos chirurgo konsultacijai.
            </p>
            <Link to="/kontaktai" className="btn-primary rounded-full px-8 py-4 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
              Registruotis vizitui
            </Link>
          </div>
        </motion.div>

      </motion.div>
    </AnimatedSection>
  )
}