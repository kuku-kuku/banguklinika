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
  { id: 'kas-yra', label: 'Kas yra kaulo priauginimas?' },
  { id: 'kada-reikalingas', label: 'Kada reikalingas?' },
  { id: 'medziagos', label: 'Naudojamos medžiagos' },
  { id: 'metodai', label: 'Priauginimo metodai' },
  { id: 'gijimas', label: 'Gijimo laikas' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function ZandikaulioKauloPriauginimas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/zandikaulio-kaulo-priauginimas/#service",
    "name": "Žandikaulio kaulo priauginimas Klaipėdoje",
    "serviceType": "Žandikaulio kaulo priauginimas",
    "description": "Žandikaulio kaulo priauginimo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Klinikoje atliekamas kaulo augmentacijos gydymas, ruošiantis dantų implantacijai.",
    "url": "https://www.banguklinika.lt/paslaugos/zandikaulio-kaulo-priauginimas/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Žandikaulio kaulo priauginimas Klaipėdoje - Bangų klinika"
        description="Nepakanka kaulo implantacijai? Žandikaulio kaulo priauginimas (kaulo augmentacija) Klaipėdoje☑️individualus planavimas☑️kaina nuo 450€.⏩Registruokitės konsultacijai jau dabar."
        keywords="zandikaulio kaulo priauginimas, kaulo augmentacija, implantacijos paruosimas, klaipeda"
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
              Žandikaulio kaulo priauginimas Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Žandikaulio kaulo priauginimas – tai paruošiamoji dantų implantacijos procedūra, skirta atkurti arba padidinti
                  žandikaulio kaulo tūrį tose vietose, kur natūralaus kaulo nepakanka saugiam ir tvirtam implanto įsriegimui.
                  Ši procedūra, dar vadinama kaulo augmentacija, leidžia sukurti tinkamas sąlygas ilgalaikiam ir stabiliam
                  implantacijos rezultatui.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje kaulo priauginimas planuojamas individualiai, atlikus išsamią
                  diagnostiką ir įvertinus kiekvieno paciento žandikaulio kaulo būklę. Toks individualus požiūris leidžia
                  parinkti tinkamiausią priauginimo metodą ir užtikrinti saugų bei nuspėjamą gydymo rezultatą, atveriantį kelią
                  sėkmingai dantų implantacijai.
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
                      Žandikaulio kaulo priauginimo kainos
                    </h2>
                    <p className="text-slate-600">
                      Žandikaulio kaulo priauginimo kaina priklauso nuo trūkstamo kaulo tūrio, taikomo metodo ir procedūros
                      apimties. Prieš gydymą visuomet atliekama diagnostika, kurios metu įvertinama situacija ir parenkamas
                      tinkamiausias kaulo augmentacijos sprendimas.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Kaulo priauginimas</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Žandikaulio kaulo priauginimas', 'nuo 450 €'],
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
                  Tiksli žandikaulio kaulo priauginimo Klaipėdoje kaina aptariama individualios konsultacijos metu, atsižvelgiant
                  į konkrečią klinikinę situaciją. Skaidri kainodara ir profesionalus požiūris leidžia pacientams jaustis
                  užtikrintai ir priimti informuotą sprendimą.
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

          {/* KAS YRA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra žandikaulio kaulo priauginimas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Žandikaulio kaulo priauginimas, dar vadinamas kaulo augmentacija, yra chirurginė procedūra, skirta atkurti arba
                  padidinti žandikaulio kaulo tūrį, kai planuojama dantų implantacija. Sėkmingam implanto įsitvirtinimui
                  būtinas pakankamas kaulo storis ir aukštis, todėl kai natūralaus kaulo trūksta, jis prieš implantaciją yra
                  papildomai priauginamas.
                </p>
                <p>
                  Procedūra leidžia sukurti tvirtą ir stabilų pagrindą implantui, sumažina komplikacijų riziką ir padidina
                  tikimybę, kad implantacijos rezultatas bus ilgalaikis. Bangų odontologijos klinikoje kaulo priauginimas
                  atliekamas kruopščiai suplanavus gydymą, atsižvelgiant į kiekvieno paciento individualią kaulo būklę.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA REIKALINGAS */}
          <motion.section id="kada-reikalingas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada reikalingas kaulo priauginimas?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Kaulo priauginimo procedūra atliekama tuomet, kai esamo žandikaulio kaulo nepakanka saugiam implanto
                įsriegimui. Kaulo tūrio sumažėjimą gali lemti įvairios priežastys, todėl prieš implantaciją visuomet
                atliekamas kruopštus kaulo būklės įvertinimas.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Kaulo priauginimas gali būti būtinas, kai:</h3>

                <div className="grid gap-3">
                  {[
                    'dantis buvo prarastas jau seniai, o kaulas toje vietoje ilgainiui sumažėjo',
                    'kaulo tūrį sumažino patirta trauma',
                    'kaulą pažeidė periodonto ligos',
                    'kaulo tūris yra nepakankamas dėl individualių anatominių savybių'
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1">
                        <CheckIcon />
                      </span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
                <p className="text-sm text-slate-700 leading-relaxed">
                  <span className="font-semibold text-darkblue-700">Pastaba:</span>{' '}
                  Tiksli kaulo priauginimo poreikio priežastis nustatoma diagnostikos metu, atlikus išsamų žandikaulio kaulo
                  įvertinimą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* NAUDOJAMOS MEDŽIAGOS */}
          <motion.section id="medziagos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Naudojamos medžiagos</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Kaulo priauginimui gali būti naudojamas paties paciento kaulas, paimtas iš kitos žandikaulio vietos, arba
                  sintetiniai, donoriniai ar gyvūninės kilmės kaulo pakaitalai. Kiekviena medžiaga turi savų privalumų, todėl
                  jos pasirinkimas priklauso nuo trūkstamo kaulo kiekio, gydymo vietos ir individualios paciento situacijos.
                </p>
                <p>
                  Naudojama medžiaga paprastai dengiama apsauginėmis membranomis, kurios apsaugo priauginamą kaulą gijimo
                  metu ir padeda užtikrinti stabilų bei nuspėjamą rezultatą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* METODAI */}
          <motion.section id="metodai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Priauginimo metodai</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Kaulo priauginimo metodas parenkamas individualiai, atsižvelgiant į trūkstamo kaulo kiekį ir gydymo vietą
                žandikaulyje. Bangų odontologijos klinikoje taikomi šiuolaikiniai kaulo augmentacijos metodai.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Kaulo augmentacija vienos ar kelių vietų srityje</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Taikoma, kai kaulo trūksta vienoje ar keliose lokalizuotose žandikaulio vietose, kur planuojama implantacija.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Alveolės išsaugojimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Atliekamas iškart po danties šalinimo, siekiant išsaugoti alveolės formą ir sumažinti natūralų kaulo
                    nykimą.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Sinuso dugno pakėlimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Taikomas viršutinio žandikaulio galinėje dalyje, kai dėl žandinės ertmės artumo kaulo aukštis yra
                    nepakankamas implantacijai.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Didesnės apimties restauravimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Taikomas, kai kaulo trūkumas yra ženklus ir reikalauja platesnės apimties kaulo tūrio atkūrimo prieš
                    implantaciją.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* GIJIMAS */}
          <motion.section id="gijimas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Gijimo laikas</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Gijimo trukmė po žandikaulio kaulo priauginimo priklauso nuo procedūros apimties – ji gali svyruoti nuo
                  kelių savaičių iki kelių mėnesių. Nedidelės apimties kaulo priauginimas dažniausiai sugyja greičiau, o
                  platesnės apimties restauravimo atvejais reikalingas ilgesnis gijimo laikotarpis, kad priauginta kaulo
                  medžiaga tvirtai susijungtų su esamu kaulu.
                </p>
                <p>
                  Bangų odontologijos klinikoje kiekvienam pacientui pateikiamos aiškios rekomendacijos, padedančios užtikrinti
                  sklandų gijimą ir sudaryti geriausias sąlygas tolimesnei implantacijai.
                </p>
              </div>
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
                  Renkantis žandikaulio kaulo priauginimo paslaugas svarbu ne tik pati procedūra, bet ir tai, kaip ji
                  atliekama – nuo diagnostikos iki priežiūros po procedūros. Bangų odontologijos klinikoje kaulo priauginimas
                  atliekamas atsakingai, siekiant maksimaliai apsaugoti paciento komfortą ir burnos sveikatą.
                </p>
                <p>
                  Klinikoje dirbantys specialistai kiekvieną atvejį vertina individualiai, neskuba priimti sprendimo ir
                  visuomet pirmiausia ieško galimybių pasirinkti pacientui tinkamiausią gydymo kelią. Procedūra atliekama
                  taikant šiuolaikinius metodus ir kruopščiai suplanuotą eigą. Dėmesys skiriamas ne tik pačiai procedūrai, bet
                  ir aiškiam situacijos paaiškinimui bei rekomendacijoms po jos.
                </p>
                <p>
                  Pacientai vertina profesionalų bendravimą, ramų požiūrį ir aiškias instrukcijas, kurios padeda jaustis
                  saugiai viso gydymo metu. Todėl ieškantiems patikimo ir profesionalaus žandikaulio kaulo priauginimo
                  Klaipėdoje, Bangų odontologijos klinika yra patikimas pasirinkimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis žandikaulio kaulo priauginimui Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu Jums buvo rekomenduotas kaulo priauginimas prieš implantaciją arba norite sužinoti, ar Jūsų
                  žandikaulio kaulo pakanka saugiai implantacijai, kviečiame registruotis konsultacijai Bangų odontologijos
                  klinikoje. Vizito metu bus įvertinta Jūsų kaulo būklė ir aptartos tinkamiausios gydymo galimybės.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiame, kad implantacijos paruošimas būtų aiškus, kruopščiai suplanuotas ir
                  kuo mažiau keliantis streso. Čia Jūsų laukia patyrę specialistai, moderni įranga ir rūpestingas požiūris į
                  kiekvieną pacientą.
                </p>
                <p>
                  Registruokitės ir ženkite pirmą žingsnį link tvirto pagrindo Jūsų būsimam implantui.
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
