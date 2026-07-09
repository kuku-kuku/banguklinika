import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { TableOfContents } from '../components/TableOfContents'
import { useRef } from 'react'
import ReviewsCarousel from '../components/ReviewsCarousel'

// Animacijų nustatymai
const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

// UI helpers
const sectionWrap = 'mb-12 scroll-mt-36 2xl:scroll-mt-24'
const whiteCard = 'bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft'
const innerCard = 'bg-white p-5 rounded-xl border border-slate-200 shadow-sm'

// Kainų dizaino žetonai
const P  = '#002045'
const S  = '#006b5f'
const SL = '#ecf5fb'

// Ikonos
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

const tocSections = [
  { id: 'kainos', label: 'Kainos' },
  { id: 'kas-yra', label: 'Kas yra sinuso pakėlimas?' },
  { id: 'budai', label: 'Procedūros būdai' },
  { id: 'gijimas', label: 'Gijimas ir rekomendacijos' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function SinusoPakelimas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/sinuso-pakelimas/#service",
    "name": "Sinuso pakėlimas Klaipėdoje",
    "serviceType": "Sinuso pakėlimas",
    "description": "Sinuso pakėlimo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Klinikoje atliekama viršutinio žandikaulio kaulo augmentacija pacientams Klaipėdos mieste.",
    "url": "https://www.banguklinika.lt/paslaugos/sinuso-pakelimas/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Sinuso pakėlimas Klaipėdoje - Bangų klinika"
        description="Sinuso pakėlimą Klaipėdoje atliekame profesionaliai☑️saugiai☑️patikimai☑️Kaina nuo 200€, tinkamas implantacijos paruošimas.⏩Registruokitės konsultacijai jau dabar."
        keywords="sinuso pakelimas, sinuso liftingas, kaulo augmentacija, implantacijos paruosimas, klaipeda"
        structuredData={structuredData}
      />

      <motion.div
        ref={pageRef}
        className="max-w-screen-2xl mx-auto px-8 xl:px-28 2xl:px-8 2xl:flex 2xl:gap-8 2xl:items-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <TableOfContents sections={tocSections} rootRef={pageRef} cta={{ label: 'Registruotis vizitui', to: '/kontaktai' }} />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Sinuso pakėlimas Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Sinuso pakėlimas yra chirurginė procedūra, skirta viršutinio žandikaulio kaulo augmentacijai. Ji atliekama tais
                  atvejais, kai tarp burnos ertmės ir žandinio sinuso nepakanka kaulo aukščio, o tai trukdo saugiai ir patikimai
                  atlikti dantų implantaciją.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje sinuso pakėlimas atliekamas kruopščiai suplanuotai, atsižvelgiant į
                  individualią paciento kaulo struktūrą ir bendrą burnos sveikatos būklę. Tinkamai atlikta procedūra sukuria
                  tvirtą pagrindą sėkmingai implantacijai ir ilgalaikiam gydymo rezultatui.
                </p>
              </div>
            </div>

            <div className="flex justify-start mt-6">
              <Link
                to="/kontaktai"
                className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Registruotis vizitui
              </Link>
            </div>

            {/* KAINOS */}
            <motion.section id="kainos" className="mt-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
              <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                      Sinuso pakėlimo kainos
                    </h2>
                    <p className="text-slate-600">
                      Sinuso pakėlimo kaina priklauso nuo pasirinkto metodo, trūkstamo kaulo kiekio ir žandinio sinuso būklės. Prieš atliekant procedūrą visuomet atliekama išsami apžiūra ir diagnostika, kurios metu parenkamas tinkamiausias bei saugiausias procedūros būdas.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Sinuso pakėlimas</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Uždaru būdu', 'nuo 200 €'],
                        ['Atviru būdu', 'nuo 700 €'],
                      ].map(([name, price], i) => (
                        <div key={i} className="flex justify-between items-center py-2.5">
                          <span className="text-slate-600 text-sm">{name}</span>
                          <span className="font-bold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-slate-500 text-sm mt-6">
                  Tiksli sinuso pakėlimo Klaipėdoje kaina aptariama individualios konsultacijos metu, atsižvelgiant į konkrečią klinikinę situaciją. Skaidri kainodara ir profesionalus požiūris leidžia pacientams jaustis užtikrintai ir priimti informuotą sprendimą.
                </p>
              </div>
            </motion.section>
          </motion.header>

          {/* ═══════════════════════════════════════════════════════════════
              DOCTOR CTA
          ══════════════════════════════════════════════════════════════════ */}
          <motion.div className="mt-8 mb-12" variants={item}>
            <div className="bg-white rounded-[28px] border border-sky-200 shadow-soft overflow-hidden">
              <div className="grid lg:grid-cols-[5fr_4fr] gap-0 items-stretch">
                {/* Left: content */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-darkblue-700 mb-4">
                    Kviečiame registruotis konsultacijai Bangų klinikoje
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Jeigu turite klausimų ar norite sužinoti daugiau apie gydymo galimybes, kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu įvertinsime Jūsų burnos būklę, atsakysime į rūpimus klausimus ir padėsime suprasti visą gydymo eigą.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų odontologijos klinikoje siekiame, kad kiekvienas pacientas jaustųsi užtikrintai – nuo pirmosios konsultacijos iki galutinio rezultato. Registruokitės ir ženkite pirmą žingsnį link sveikos šypsenos.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultacijos metu:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'atliekamas išsamus klinikinis įvertinimas',
                        'aptariami galimi gydymo metodai',
                        'paaiškinami procedūros etapai ir terminai',
                        'sudaromas individualus gydymo planas',
                      ].map((t, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1"><CheckIcon /></span>
                          <span className="leading-relaxed">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/kontaktai"
                    className="btn-primary btn-glow rounded-full px-7 py-3 font-semibold text-base inline-block shadow-lg hover:shadow-xl transition"
                  >
                    Registruotis vizitui
                  </Link>
                </div>
                {/* Right: doctor photo */}
                <div className="relative min-h-[320px] lg:min-h-full bg-sky-50">
                  <img
                    src="/team/Jonas-light.jpg"
                    alt="Bangų odontologijos klinikos gydytojas"
                    className="absolute inset-0 w-full h-full object-cover object-[30%_10%] lg:object-[30%_100%]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,transparent_15%)]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════
              REVIEWS
          ══════════════════════════════════════════════════════════════════ */}
          <motion.div className="mb-10 no-x-scroll pan-y" variants={item}>
            <ReviewsCarousel />
          </motion.div>

          {/* KAS YRA SINUSO PAKĖLIMAS */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra sinuso pakėlimas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Sinuso pakėlimas – tai chirurginė procedūra, skirta viršutinio žandikaulio kaulo augmentacijai. Ji atliekama
                  tuomet, kai kaulo aukštis tarp burnos ertmės ir žandinio sinuso yra nepakankamas, o tai trukdo saugiai atlikti
                  dantų implantaciją. Nepakankamas kaulo kiekis šioje srityje dažniausiai susijęs su ilgalaikiu dantų nebuvimu,
                  dėl kurio kaulinis audinys palaipsniui rezorbuojasi.
                </p>
                <p>
                  Procedūros metu žandinio sinuso dugno membrana atsargiai pakeliama, o susidariusi erdvė užpildoma kaulą
                  atkuriančia medžiaga. Taip sukuriamas pakankamas kaulo aukštis, leidžiantis vėliau saugiai ir stabiliai
                  įtvirtinti dantų implantą. Sinuso pakėlimas yra dažnai atliekamas kaip parengiamasis etapas prieš implantaciją
                  arba tuo pačiu metu su ja, priklausomai nuo turimo kaulo kiekio.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCEDŪROS BŪDAI */}
          <motion.section id="budai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Procedūros būdai</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Sinuso pakėlimas gali būti atliekamas dviem pagrindiniais metodais. Tinkamiausias būdas parenkamas individualiai,
                atsižvelgiant į trūkstamo kaulo kiekį ir žandinio sinuso būklę.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Uždaras sinuso pakėlimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Uždaras sinuso pakėlimas taikomas tuomet, kai kaulo trūkumas nėra didelis. Šis metodas dažnai atliekamas
                    kartu su implantacija – per tą pačią implanto vietos preparaciją atsargiai pakeliama sinuso dugno membrana ir
                    suformuojamas papildomas kaulo tūris. Toks būdas leidžia sutrumpinti bendrą gydymo laiką, nes implantas gali
                    būti įsodinamas iš karto arba po trumpo gijimo laikotarpio.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Atviras sinuso pakėlimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Atviras sinuso pakėlimas atliekamas tuomet, kai reikalingas didesnis kaulo atkūrimas. Procedūros metu
                    žandikaulio šoninėje sienelėje suformuojama nedidelė prieiga, per kurią atsargiai pakeliama sinuso dugno
                    membrana ir suformuojama erdvė, užpildoma kaulą atkuriančia medžiaga. Kadangi atkuriamas didesnis kaulo
                    kiekis, šis metodas paprastai reikalauja ilgesnio gijimo laikotarpio prieš atliekant implantaciją.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* GIJIMAS IR REKOMENDACIJOS */}
          <motion.section id="gijimas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Gijimas ir rekomendacijos</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Po sinuso pakėlimo operuotai sričiai reikalingas ramus ir kontroliuojamas gijimo laikotarpis. Norint išvengti
                papildomo slėgio operuotoje srityje ir sudaryti geriausias sąlygas gijimui, pacientams rekomenduojama laikinai
                vengti tam tikros veiklos.
              </p>

              <div className="space-y-3">
                <h3 className="font-semibold text-darkblue-700 mb-2">Po procedūros rekomenduojama vengti:</h3>
                {[
                  'nardymo',
                  'skrydžių lėktuvu',
                  'pirties ir garų procedūrų',
                  'intensyvaus sporto ir fizinio krūvio',
                  'rūkymo',
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="mt-1">
                      <CheckIcon />
                    </span>
                    <span className="text-slate-700">{text}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Šių rekomendacijų laikymasis padeda išvengti spaudimo pokyčių, kurie gali pakenkti operuotai sričiai, ir
                užtikrina sklandų bei saugų gijimo procesą.
              </p>
            </div>
          </motion.section>

          {/* KODĖL RINKTIS */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kodėl verta rinktis Bangų odontologijos kliniką Klaipėdoje?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Bangų odontologijos klinika Klaipėdoje pabrėžia individualų kiekvieno paciento vertinimą ir nuoseklų
                  procedūros planavimą – nuo pirminės diagnostikos iki gijimo kontrolės. Toks nuoseklus požiūris leidžia
                  užtikrinti sėkmingus ir ilgalaikius sinuso pakėlimo rezultatus.
                </p>
                <p>
                  Klinikoje dirbantys specialistai kiekvieną atvejį vertina individualiai, atsižvelgdami į turimą kaulo kiekį,
                  žandinio sinuso būklę ir bendrus paciento gydymo tikslus. Procedūra atliekama taikant šiuolaikinius metodus ir
                  kruopščiai suplanuotą eigą, o po jos pacientui pateikiamos aiškios gijimo rekomendacijos.
                </p>
                <p>
                  Pacientai vertina profesionalų bendravimą, ramų požiūrį ir aiškias instrukcijas, kurios padeda jaustis saugiai
                  viso gydymo metu. Todėl ieškantiems patikimo ir profesionalaus sinuso pakėlimo Klaipėdoje, Bangų odontologijos
                  klinika yra patikimas pasirinkimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis sinuso pakėlimui Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu planuojate dantų implantaciją ir Jums reikalingas sinuso pakėlimas, kviečiame registruotis konsultacijai
                  Bangų odontologijos klinikoje. Vizito metu bus įvertinta Jūsų žandikaulio kaulo būklė ir suplanuotas
                  tinkamiausias procedūros būdas.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiame, kad sinuso pakėlimas ir tolimesnė implantacija būtų aiškūs, valdomi ir
                  kuo mažiau keliantys streso. Čia Jūsų laukia patyrę specialistai, moderni įranga ir rūpestingas požiūris į
                  kiekvieną pacientą.
                </p>
                <p>
                  Registruokitės konsultacijai ir ženkite pirmą žingsnį link sėkmingos implantacijos.
                </p>
              </div>

              <Link
                to="/kontaktai"
                className="btn-primary btn-glow rounded-full px-8 py-4 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Registruotis vizitui
              </Link>
            </div>
          </motion.div>


        </div>
      </motion.div>
    </AnimatedSection>
  )
}
