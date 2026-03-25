import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { TableOfContents } from '../components/TableOfContents'
import ReviewsCarousel from '../components/ReviewsCarousel'
import { useRef } from 'react'
import BeforeAfterSlider from '../components/BeforeAfterSlider'

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const sectionWrap = 'mb-10 scroll-mt-36 2xl:scroll-mt-24'

// ─── Design tokens (matching AI mockup palette) ───────────────────────────────
const P  = '#002045'           // primary navy
const S  = '#006b5f'           // secondary teal
const SL = '#ecf5fb'           // surface-container-low  (very light blue)
const SM = '#e6eff5'           // surface-container      (light blue-gray)
const SH = '#dbe4ea'           // surface-container-high (slightly darker)
const ST = '#62fae3'           // secondary-fixed        (light teal accent)
const SD = '#3cddc7'           // secondary-fixed-dim    (medium teal)
const GRAD = `linear-gradient(135deg, #1A365D 0%, #006B5F 100%)`

// ─── Icon helpers ─────────────────────────────────────────────────────────────
function CheckIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`} aria-hidden fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

function XCircleIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`} aria-hidden fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.59 14L12 11.41 7.41 16 6 14.59 10.59 10 6 5.41 7.41 4 12 8.59 16.59 4 18 5.41 13.41 10 18 14.59 16.59 16z" />
    </svg>
  )
}

function StarIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

const tocSections = [
  { id: 'kainos',           label: 'Kainos' },
  { id: 'pries-po',         label: 'Prieš ir po' },
  { id: 'kas-yra',          label: 'Kas yra protezavimas?' },
  { id: 'kada-reikalingas', label: 'Kada reikalingas?' },
  { id: 'cerec',            label: '3D CEREC technologija' },
  { id: 'medziagos',        label: 'Protezų medžiagos' },
  { id: 'implantai',        label: 'Protezavimas ant implantų' },
  { id: 'procesas',         label: 'Kaip vyksta protezavimas?' },
  { id: 'tarnaves',         label: 'Kiek laiko tarnauja?' },
  { id: 'po-protezavimo',   label: 'Po protezavimo' },
  { id: 'mitai',            label: 'Mitai apie protezavimą' },
  { id: 'kodel-rinktis',    label: 'Kodėl verta rinktis mus?' },
]

export default function DantuProtezavimas() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Dantų protezavimas',
    description:
      'Profesionalus dantų protezavimas Klaipėdoje. CEREC technologija, cirkonio keramika, protezavimas ant implantų.',
    provider: { '@type': 'Dentist', name: 'Bangų klinika' },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        title="Dantų protezavimas Klaipėdoje - Bangų klinika"
        description="Profesionalus dantų protezavimas Klaipėdoje. 3D CEREC technologija, cirkonio keramika, bemetalė keramika ir protezavimas ant implantų. Prieinamos kainos."
        keywords="dantu protezavimas, cerec, cirkonio keramika, protezai, klaipeda, implantai"
        structuredData={structuredData}
      />

      <motion.div
        ref={pageRef}
        className="max-w-screen-2xl mx-auto px-4 sm:px-8 xl:px-28 2xl:px-8 2xl:flex 2xl:gap-8 2xl:items-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <TableOfContents
          sections={tocSections}
          rootRef={pageRef}
          cta={{ label: 'Registruotis vizitui', to: '/kontaktai' }}
        />

        <div className="min-w-0 flex-1">

          {/* ═══════════════════════════════════════════════════════════════
              HERO
          ══════════════════════════════════════════════════════════════════ */}
          <motion.header
            className="mb-10 rounded-[28px] border border-sky-200/40 bg-white overflow-hidden shadow-soft"
            variants={item}
          >
            <div className="grid lg:grid-cols-[5fr_7fr] gap-0 items-stretch">
              {/* Left: text */}
              <div className="p-6 sm:p-8 lg:p-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" style={{ color: P }}>
                  Profesionalus ir prieinamas{' '}
                  <span style={{ color: S }}>dantų protezavimas</span>{' '}
                  Klaipėdoje
                </h1>
                <p className="text-base text-slate-600 leading-relaxed mb-6">
                  Dantų netekimas ar stiprus jų pažeidimas gali turėti įtakos ne tik šypsenos estetikai, bet ir kramtymo funkcijai, kalbai bei bendrai savijautai. Šiuolaikinė odontologija leidžia efektyviai atkurti dantis, tačiau pacientams dažnai svarbus ir kainos aspektas. Būtent todėl Bangų odontologijos klinikoje siekiama suderinti aukštą gydymo kokybę, pažangias technologijas ir racionalią kainodarą.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/kontaktai"
                    className="btn-primary btn-glow rounded-full px-7 py-3 font-semibold text-base inline-block shadow-lg hover:shadow-xl transition"
                  >
                    Registruotis konsultacijai
                  </Link>
                  <a
                    href="#kainos"
                    className="rounded-full px-7 py-3 font-semibold text-base inline-block border border-sky-200 text-slate-700 hover:bg-sky-50 transition"
                  >
                    Žiūrėti kainas
                  </a>
                </div>
              </div>
              {/* Right: image */}
              <div className="relative min-h-[320px] lg:min-h-full" style={{ backgroundColor: SL }}>
                <img
                  src="/protezavimas.webp"
                  alt="Dantų protezavimas Klaipėdoje"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/20 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/30 lg:to-transparent" />
              </div>
            </div>
          </motion.header>

          <motion.div
            variants={item}
            className="mb-10 rounded-3xl border border-sky-200/40 p-7 sm:p-8"
            style={{ backgroundColor: SL }}
          >
            <p className="text-lg text-slate-600 leading-relaxed">
              Bangų odontologijos klinikoje Klaipėdoje atliekamas pigus dantų protezavimas, neatsisakant profesionalumo ar estetikos. Naudojamos modernios skaitmeninės technologijos, tokios kaip 3D CEREC sistema, leidžia optimizuoti gydymo procesą, sumažinti laiko sąnaudas ir pasiūlyti pacientams patrauklius, ilgalaikius sprendimus. Kiekvienam pacientui parenkamas individualus protezavimo planas, atsižvelgiant į poreikius, burnos būklę ir lūkesčius.
            </p>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════
              KAINOS
          ══════════════════════════════════════════════════════════════════ */}
          <motion.section id="kainos" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
            {/* header row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                  Dantų protezavimo kainos
                </h2>
                <p className="text-slate-600">
                  Dantų protezavimo kaina priklauso nuo pasirinkto sprendimo, naudojamų medžiagų, protezavimo technologijos ir individualios paciento burnos būklės. Bangų odontologijos klinikoje kiekvienam pacientui sudaromas individualus protezavimo planas, todėl galutinė kaina nustatoma tik po konsultacijos ir diagnostikos.
                </p>
              </div>
            </div>

            {/* top highlight row — konsultacija */}
            <div className="grid sm:grid-cols-2 gap-3 mb-5">
              {[
                ['Konsultacija', '20 €'],
                ['Gydymo plano sudarymas', '30 €'],
              ].map(([name, price], i) => (
                <div key={i} className="flex justify-between items-center bg-white rounded-2xl px-5 py-3 border" style={{ borderColor: S }}>
                  <span className="text-slate-700 text-sm font-medium">{name}</span>
                  <span className="font-extrabold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                </div>
              ))}
            </div>

            {/* 4-card grid */}
            <div className="grid md:grid-cols-2 gap-5">

              {/* Protezavimas ant dantų */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Protezavimas ant dantų</h3>
                <div className="divide-y divide-slate-100">
                  {[
                    ['Laikinas plastmasinis vainikėlis (kabinete)',    '40 €'],
                    ['Laikinas plastmasinis vainikėlis (laboratorijoje)', '80 €'],
                    ['Metalo keramikos vainikėlis',                    '350 €'],
                    ['Keramikos vainikėlis cirkonio oksido pagrindu (ant danties)', '400 €'],
                    ['E-max presuotos bemetalės keramikos vainikėlis', '400 €'],
                    ['Vainiko kulties šlifavimas / paruošimas',        '50 €'],
                    ['Vainiko atstatymas ant stiklo pluošto kaiščio (priekinis)', '70 €'],
                    ['Vainiko atstatymas ant stiklo pluošto kaiščio (krūminis)',  '100 €'],
                    ['Pilnas vainiko atstatymas ant stiklo pluošto kaiščio',      '150 €'],
                    ['Senų vainikėlių nuėmimas',                      '50 €'],
                    ['Laikino vainikėlio cementavimas (ne gydymo metu)',  '20 €'],
                    ['Nuolatinio vainikėlio cementavimas (ne gydymo metu)', '50 €'],
                  ].map(([name, price], i) => (
                    <div key={i} className="flex justify-between items-center py-2.5">
                      <span className="text-slate-600 text-sm">{name}</span>
                      <span className="font-bold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Protezavimas ant implantų */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Protezavimas ant implantų</h3>
                <div className="divide-y divide-slate-100">
                  {[
                    ['Laikinas vainikėlis ant implanto (su laikinos atramos kaina)', '200 €'],
                    ['Atspaudai / skenavimas nuo implantų',           '150 €'],
                    ['Keramikos vainikėlis cirkonio oksido pagrindu (ant implanto)', '450 €'],
                    ['E-max presuotos bemetalės keramikos vainikėlis','450 €'],
                    ['Neodent standartinė atrama',                    '100 €'],
                    ['Štraumann standartinė atrama',                  '200 €'],
                    ['Individuali atrama',                            '200 €'],
                  ].map(([name, price], i) => (
                    <div key={i} className="flex justify-between items-center py-2.5">
                      <span className="text-slate-600 text-sm">{name}</span>
                      <span className="font-bold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Plokštelės, laminatės, kapai */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Plokštelės, laminatės, kapai</h3>
                <div className="divide-y divide-slate-100">
                  {[
                    ['Kosmetinė plokštelė (plastmasinė, kieta)',      '150 €'],
                    ['Kosmetinė plokštelė (termoplastinė, minkšta)',  '260 €'],
                    ['Išimama pilna dantų plokštelė (plastmasinė)',   '350 €'],
                    ['Išimama pilna dantų plokštelė (minkšta)',       '600 €'],
                    ['Kietos plokštelės pataisa',                     '70 €'],
                    ['Plokštelės perbazavimas',                       '80 €'],
                    ['Lanko atraminis protezas',                      '700 €'],
                    ['Kompozitinis užklotas',                         '150 €'],
                    ['Keramikos užklotas',                            '300 €'],
                    ['E-max laminatė',                                '350 €'],
                    ['Sluoksniuota keramikos laminatė',               '450 €'],
                    ['Minkšta kapa nuo bruksizmo',                    '100 €'],
                    ['Kieta kapa nuo bruksizmo',                      '150 €'],
                  ].map(([name, price], i) => (
                    <div key={i} className="flex justify-between items-center py-2.5">
                      <span className="text-slate-600 text-sm">{name}</span>
                      <span className="font-bold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Papildomos procedūros */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Papildomos procedūros</h3>
                <div className="divide-y divide-slate-100">
                  {[
                    ['Diagnostiniai modeliai',                        '20 €'],
                    ['Danties pavaškavimas (1 vnt.)',                  '10 €'],
                    ['Atspaudo nuėmimas naudojant alginatą (1 žandikaulis)',  '20 €'],
                    ['Atspaudo nuėmimas naudojant silikoną (1 žandikaulis)',  '50 €'],
                    ['Sąkandžio registras',                           '10 €'],
                    ['Individualus šaukštas (1 vnt.)',                '30 €'],
                    ['KKĮ formavimas',                                '20 €'],
                    ['Metalinis KKĮ',                                 '60 €'],
                    ['Sudėtinis KKĮ',                                 '90 €'],
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
              Tiksli dantų protezavimo kaina aptariama individualios konsultacijos metu, įvertinus
              paciento burnos būklę, pasirinktą technologiją ir gydymo apimtį. Skaidri kainodara ir pažangios technologijos leidžia Bangų odontologijos klinikoje pasiūlyti finansiškai prieinamus protezavimo sprendimus, neatsisakant kokybės, estetikos ir ilgaamžiškumo.
            </p>
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════
              CTA
          ══════════════════════════════════════════════════════════════════ */}
          <motion.div className="mt-8 mb-12" variants={item}>
            <div className="bg-white rounded-[28px] border border-sky-200 shadow-soft overflow-hidden">
              <div className="grid lg:grid-cols-[5fr_4fr] gap-0 items-stretch">

                {/* Left: content */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-darkblue-700 mb-4">
                    Kviečiame registruotis dantų protezavimo konsultacijai Bangų klinikoje
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Jeigu svarstote apie dantų protezavimą arba ieškote sprendimo, kaip atkurti prarastus ar stipriai pažeistus dantis, kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Konsultacijos metu įvertinama Jūsų burnos būklė, aptariami galimi gydymo variantai ir parenkamas individualus sprendimas, atsižvelgiant į Jūsų poreikius bei lūkesčius.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų odontologijos klinikoje siekiame, kad dantų protezavimas būtų aiškus, saugus ir komfortiškas procesas. Modernios technologijos, patyrę specialistai ir skaidri kainodara leidžia pasiūlyti racionalius sprendimus tiek funkcijos, tiek estetikos požiūriu. Čia Jūsų laukia profesionalus požiūris ir aiškūs atsakymai į visus rūpimus klausimus.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Registruokitės dantų protezavimo konsultacijai ir ženkite pirmą žingsnį link patikimo bei estetiško sprendimo. Pigus dantų protezavimas Klaipėdoje gali būti suderintas su aukšta kokybe ir ilgalaikiu rezultatu, kai gydymas planuojamas atsakingai ir individualiai.
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

                {/* Right: Jonas photo with fade */}
                <div className="relative min-h-[320px] lg:min-h-full bg-sky-50">
                  <img
                    src="/team/jonas.jpg"
                    alt="Jonas Sabulis – Protezuojantis gydytojas klinikoje"
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

          {/* ═══════════════════════════════════════════════════════════════
              PRIEŠ / PO
          ══════════════════════════════════════════════════════════════════ */}
          <motion.section id="pries-po" className={sectionWrap} variants={item}>
            <div className="rounded-3xl overflow-hidden border border-sky-200/40" style={{ backgroundColor: SL }}>
              <div className="p-7 sm:p-10 lg:p-12">
                {/* title + accent line */}
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-extrabold tracking-tight mb-3" style={{ color: P }}>
                    Prieš ir po dantų protezavimo
                  </h2>
                  <div className="h-1.5 w-20 mx-auto rounded-full" style={{ backgroundColor: S }} />
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                  {/* slider */}
                  <div>
                    <BeforeAfterSlider
                      beforeSrc="/protezavimas-before-1.png"
                      afterSrc="/protezavimas-after-1.png"
                      beforeAlt="Dantų būklė prieš protezavimą"
                      afterAlt="Dantų būklė po protezavimo"
                    />
                  </div>

                  {/* features */}
                  <div className="space-y-7 md:pl-4 lg:pl-8">
                    <h3 className="text-2xl font-bold" style={{ color: P }}>Grąžiname pasitikėjimą savimi</h3>
                    <div className="space-y-6">
                      {[
                        {
                          icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
                          title: 'Natūrali estetika',
                          desc:  'Vainikėliai parenkami pagal jūsų natūralų dantų atspalvį ir formą.',
                        },
                        {
                          icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>,
                          title: 'Tikslumas iki mikrono',
                          desc:  'Naudojame skaitmeninį planavimą idealiam prigludimui užtikrinti.',
                        },
                        {
                          icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                          title: 'Ilgalaikė garantija',
                          desc:  'Suteikiame garantiją ir palydime pacientą per visą gydymo procesą.',
                        },
                      ].map(({ icon, title, desc }, i) => (
                        <div key={i} className="flex gap-4">
                          <div
                            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
                            style={{ backgroundColor: 'white', color: S }}
                          >
                            {icon}
                          </div>
                          <div>
                            <h4 className="font-bold mb-1" style={{ color: P }}>{title}</h4>
                            <p className="text-slate-600 text-sm">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════
              KAS YRA DANTŲ PROTEZAVIMAS
          ══════════════════════════════════════════════════════════════════ */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 overflow-hidden" style={{ backgroundColor: SL }}>
              <div className="grid lg:grid-cols-[1fr_480px]">
                {/* Text */}
                <div className="p-7 sm:p-10 lg:p-12 space-y-6">
                  <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: P }}>
                    Kas yra dantų protezavimas?
                  </h2>
                  <div className="text-slate-600 leading-relaxed text-lg space-y-5">
                    <p>
                      Dantų protezavimas – tai odontologinė procedūra, kurios metu atkuriami prarasti ar stipriai pažeisti dantys, pasitelkiant įvairius sprendimus. Protezavimo tikslas – sugrąžinti pilnavertę kramtymo funkciją, estetinį vaizdą ir komfortą kasdienėje veikloje.
                    </p>
                    <p>
                      Priklausomai nuo situacijos, dantų protezavimas gali būti taikomas tiek vienam danties defektui atkurti, tiek kelių ar visų dantų atkūrimui. Šiuolaikiniai protezai kuriami taip, kad būtų patvarūs, estetiški ir kuo artimesni natūraliems dantims. Pasirinkus tinkamą metodą ir medžiagas, dantų protezavimas gali būti ne tik finansiškai prieinamas, bet ir patikimas ilgalaikis sprendimas.
                    </p>
                  </div>
                </div>
                {/* Image */}
                <div className="relative hidden lg:block">
                  <img
                    src="/protezavimas-kada-reikalingas.png"
                    alt=""
                    aria-hidden
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* fade from left */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--fade-color)_0%,transparent_25%)]" style={{ '--fade-color': SL } as React.CSSProperties} />
                </div>
              </div>
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════
              KADA REIKALINGAS
          ══════════════════════════════════════════════════════════════════ */}
          <motion.section id="kada-reikalingas" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 overflow-hidden" style={{ backgroundColor: SL }}>
              <div className="grid lg:grid-cols-[1fr_480px]">
                {/* Text */}
                <div className="p-7 sm:p-10 lg:p-12 space-y-7">
                  <h2 className="text-3xl font-extrabold tracking-tight leading-tight" style={{ color: P }}>
                    Kada reikalingas dantų protezavimas?
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Dantų protezavimas rekomenduojamas tais atvejais, kai natūralių dantų struktūra nebegali pilnai atlikti savo funkcijos arba kai dantų trūkumas daro įtaką kasdieniam komfortui. Laiku pasirinktas protezavimo sprendimas padeda išvengti tolimesnių burnos sveikatos problemų ir sudėtingesnio gydymo ateityje.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                      'trūksta vieno ar kelių dantų, o tai apsunkina kramtymą ar kalbą',
                      'dantys yra stipriai pažeisti, nudilę ar susilpnėję',
                      'seni protezai ar restauracijos nebeatlieka savo funkcijos',
                      'atsirado estetinės problemos, mažinančios pasitikėjimą šypsena',
                      'pasikeitė sąkandis ar juntamas diskomfortas žandikaulio srityje',
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-3 bg-white/60 rounded-2xl px-4 py-3 border border-sky-200/40">
                        <span
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white"
                          style={{ backgroundColor: S }}
                        >
                          <CheckIcon className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-slate-700 text-sm leading-relaxed">{text}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-600 leading-relaxed">
                    Tokiais atvejais individualiai suplanuotas ir racionaliai parinktas sprendimas leidžia užtikrinti, kad dantų protezavimas Klaipėdoje būtų ne tik prieinamas, bet ir efektyvus ilgalaikėje perspektyvoje.
                  </p>
                </div>
                {/* Image */}
                <div className="relative hidden lg:block">
                  <img
                    src="/dantu-protezavimas-new.png"
                    alt=""
                    aria-hidden
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--fade-color)_0%,transparent_25%)]" style={{ '--fade-color': SL } as React.CSSProperties} />
                </div>
              </div>
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════
              CEREC
          ══════════════════════════════════════════════════════════════════ */}
          <motion.section
            id="cerec"
            className={`${sectionWrap} rounded-3xl overflow-hidden border border-sky-200/40`}
            style={{ backgroundColor: SL }}
            variants={item}
          >
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* image */}
                <div className="order-2 lg:order-1">
                  <div className="bg-white p-2 rounded-[2rem] shadow-lg">
                    <img
                      src="/protezavimas-cerec.png"
                      alt="3D CEREC technologija dantų protezavimui"
                      className="rounded-[1.8rem] w-full h-[320px] sm:h-[400px] object-cover"
                    />
                  </div>
                </div>

                {/* text */}
                <div className="order-1 lg:order-2 space-y-7">
                  <h2
                    className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight"
                    style={{ color: P }}
                  >
                    3D CEREC technologija –{' '}
                    <span style={{ color: S }}>dantis per vieną vizitą</span>
                  </h2>
                  <p className="text-lg leading-relaxed text-slate-600">
                    Bangų odontologijos klinikoje dantų protezavimui plačiai taikoma pažangi 3D CEREC technologija, leidžianti pasiekti itin tikslų ir greitą rezultatą. Skaitmeninio skenavimo metu sukuriamas preciziškas dantų modelis, kuris leidžia individualiai pritaikyti kiekvieną restauraciją pagal paciento anatomiją.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div
                      className="bg-white p-5 rounded-2xl border"
                      style={{ borderColor: `${S}25` }}
                    >
                      <p className="text-3xl font-extrabold mb-1" style={{ color: S }}>1 val.</p>
                      <p className="text-sm text-slate-500">Vidutinė procedūros trukmė</p>
                    </div>
                    <div
                      className="bg-white p-5 rounded-2xl border"
                      style={{ borderColor: `${S}25` }}
                    >
                      <p className="text-3xl font-extrabold mb-1" style={{ color: S }}>100%</p>
                      <p className="text-sm text-slate-500">Be metalo elementų</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {[
                      'išvengti tradicinių atspaudų ir su tuo susijusio diskomforto',
                      'sukurti itin tikslią restauraciją, idealiai priglundančią nuo pirmos dienos',
                      'pagaminti danties protezą vietoje, vos per kelias valandas',
                      'iš karto atlikti galutinį protezavimą, be laikinų vainikėlių',
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                        <span
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white"
                          style={{ backgroundColor: S }}
                        >
                          <CheckIcon className="w-3.5 h-3.5" />
                        </span>
                        {text}
                      </li>
                    ))}
                  </ul>

                  <p className="text-slate-600 leading-relaxed">
                    Ši technologija ne tik sutrumpina gydymo laiką, bet ir leidžia optimizuoti procesą, todėl pacientams gali būti pasiūlytas kokybiškas dantų protezavimas, neprarandant estetikos ar ilgaamžiškumo. CEREC 3D sprendimai ypač vertinami dėl komforto, tikslumo ir galimybės greitai sugrąžinti pilnavertę šypseną.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════
              MEDŽIAGOS
          ══════════════════════════════════════════════════════════════════ */}
          <motion.section id="medziagos" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
            <h2
              className="text-3xl font-extrabold tracking-tight mb-6"
              style={{ color: P }}
            >
              Iš kokių medžiagų gaminami protezai?
            </h2>

            <p className="text-slate-600 leading-relaxed mb-10 max-w-3xl">
              Dantų protezavimo sėkmė priklauso ne tik nuo technologijų, bet ir nuo pasirinktų medžiagų. Bangų odontologijos klinikoje naudojamos pasaulyje pripažintos, patikimos ir estetiškos medžiagos, leidžiančios pasiūlyti sprendimus, atitinkančius tiek funkcinius, tiek estetinius paciento lūkesčius. Tinkamai parinkta medžiaga padeda užtikrinti komfortą, ilgaamžiškumą ir natūralų vaizdą.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Cirkonis */}
              <div
                className="bg-white p-10 rounded-3xl border shadow-sm hover:shadow-xl transition-shadow"
                style={{ borderColor: `${P}15` }}
              >
                <h3
                  className="text-2xl font-extrabold mb-5 flex items-center gap-3"
                  style={{ color: P }}
                >
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${P}0d` }}
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: P }}>
                      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                    </svg>
                  </span>
                  Cirkonio oksido keramika
                </h3>
                <p className="text-slate-600 mb-5 leading-relaxed">
                  Cirkonio keramika – viena pažangiausių ir patikimiausių medžiagų šiuolaikiniame dantų protezavime. Ji gaminama iš suspaustų kristalų, todėl pasižymi itin dideliu tvirtumu ir atsparumu nusidėvėjimui. Dėl šių savybių cirkonio keramika tinka tiek priekinių, tiek šoninių dantų atkūrimui.
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  {[
                    'labai tikslus pritaikymas, užtikrinantis komfortą nuo pirmos dienos',
                    'atsparumas apnašoms, spalvos ir formos pokyčiams',
                    'ilgesnė tarnavimo trukmė lyginant su metalo keramika',
                    'estetiškas vaizdas be metalinio kraštelio ties dantenomis',
                    'lėtesnis šilumos ir šalčio perdavimas, artimesnis natūralių dantų pojūčiui',
                  ].map((t, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: S }} />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 text-sm leading-relaxed mt-5">
                  Dėl ilgaamžiškumo ir minimalios priežiūros poreikio cirkonio keramika leidžia pasiekti optimalų kainos ir kokybės santykį, todėl dažnai pasirenkama ieškant patikimo ir pigaus dantų protezavimo sprendimo ilgalaikėje perspektyvoje.
                </p>
              </div>

              {/* E-MAX */}
              <div
                className="bg-white p-10 rounded-3xl border shadow-sm hover:shadow-xl transition-shadow"
                style={{ borderColor: `${P}15` }}
              >
                <h3
                  className="text-2xl font-extrabold mb-5 flex items-center gap-3"
                  style={{ color: S }}
                >
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${S}0d` }}
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: S }}>
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  </span>
                  Bemetalė keramika – E-MAX (Ivoclar Vivadent)
                </h3>
                <p className="text-slate-600 mb-5 leading-relaxed">
                  Bemetalė keramika E-MAX ypač vertinama dėl išskirtinės estetikos. Ši porceliano pagrindu sukurta medžiaga pasižymi puikiu šviesos pralaidumu, todėl protezuoti dantys atrodo itin natūraliai. Dėl šios priežasties E-MAX dažniausiai rekomenduojama priekinių, matomiausių dantų atkūrimui.
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  {[
                    'išlaikomas natūralus spalvos skaidrumas ir blizgesys',
                    'dantys neįgauna matinio atspalvio laikui bėgant',
                    'medžiaga nedirgina dantenų ir yra biologiškai suderinama',
                    'atsparumas temperatūros pokyčiams ir apnašų kaupimuisi',
                    'itin tikslus pritaikymas leidžia pasiekti puikų rezultatą jau pirmą dieną',
                  ].map((t, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: S }} />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 text-sm leading-relaxed mt-5">
                  Tinkamai parinkus indikacijas, bemetalė keramika leidžia suderinti aukštą estetiką ir racionalią kainą, todėl gali būti įtraukta į individualų, pacientui pritaikytą protezavimo planą.
                </p>
              </div>
            </div>
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════
              PROTEZAVIMAS ANT IMPLANTŲ
          ══════════════════════════════════════════════════════════════════ */}
          <motion.section id="implantai" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
              <div className="flex flex-col md:flex-row gap-10 items-center">
                {/* text */}
                <div className="flex-1 space-y-5">
                  <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: P }}>
                    Protezavimas ant implantų
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Protezavimas ant implantų laikomas vienu pažangiausių dantų atkūrimo būdų, kai prarastų dantų vietoje įtvirtinamos dirbtinės šaknys – implantai, ant kurių vėliau tvirtinami individualiai pagaminti protezai. Šis metodas leidžia atkurti ne tik dantų estetiką, bet ir natūralų kramtymo pojūtį bei stabilumą.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Bangų odontologijos klinikoje protezavimas ant implantų atliekamas naudojant patikimas ir pasaulyje pripažintas sistemas – Straumann® ir Medentika® implantus. Ant implantų tvirtinami protezai gaminami taip, kad būtų vizualiai ir funkciniu požiūriu beveik neatskiriami nuo natūralių dantų. Tai sprendimas, tinkantis tiek vieno danties atkūrimui, tiek kelių ar visų dantų protezavimui.
                  </p>
                  <div
                    className="p-5 rounded-2xl border-l-4"
                    style={{ backgroundColor: `${P}0a`, borderLeftColor: P }}
                  >
                    <p className="font-bold text-sm" style={{ color: P }}>
                      Implantais paremtas protezavimas padeda išvengti gretimų dantų šlifavimo, užtikrina gerą sukandimo stabilumą ir lėtina žandikaulio kaulo nykimą. Nors tai ilgalaikis sprendimas, individualus planavimas ir technologijų taikymas leidžia suderinti aukštą kokybę ir racionalias išlaidas, todėl pacientams gali būti pasiūlytas kokybiškas dantų protezavimas, atitinkantis jų poreikius.
                    </p>
                  </div>
                </div>

                {/* round image */}
                <div
                  className="w-full max-w-[280px] h-[280px] flex-shrink-0 rounded-full p-3 shadow-inner mx-auto md:mx-0"
                  style={{ backgroundColor: 'white' }}
                >
                  <img
                    src="/protezavimas-ant-implantu.png"
                    alt="Dantų protezavimas ant implantų"
                    className="w-full h-full object-cover rounded-full"
                    style={{ border: `4px solid ${SL}` }}
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════
              PROCESAS
          ══════════════════════════════════════════════════════════════════ */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
            <h2
              className="text-3xl font-extrabold tracking-tight mb-10"
              style={{ color: P }}
            >
              Kaip vyksta dantų protezavimas klinikoje?
            </h2>

            <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
              Dantų protezavimas Bangų odontologijos klinikoje atliekamas pagal aiškų ir pacientui suprantamą planą. Visas procesas pradedamas nuo išsamios konsultacijos, kurios metu įvertinama burnos būklė, aptariami paciento lūkesčiai ir parenkamas tinkamiausias protezavimo sprendimas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  num: '01',
                  img: '/protezavimas-zingsnis-1.png',
                  title: 'Diagnostika ir planavimas',
                  short: 'Atliekama burnos būklės analizė, klinikinis įvertinimas ir individualaus gydymo plano sudarymas.',
                  desc: 'Dantų protezavimas pradedamas išsamia burnos būklės analize. Atliekama klinikinė apžiūra, vertinama dantų, dantenų ir sąkandžio būklė, o prireikus – radiologiniai tyrimai. Taikomas skaitmeninis planavimas leidžia tiksliai įvertinti esamą situaciją ir suplanuoti galutinį rezultatą dar prieš pradedant gydymą. Šiame etape aptariami paciento lūkesčiai, galimi sprendimai, pasirenkamos protezavimo medžiagos ir technologijos, todėl gydymo planas parengiamas individualiai ir aiškiai.',
                },
                {
                  num: '02',
                  img: '/protezavimas-zingsnis-2.png',
                  title: 'Paruošiamieji darbai',
                  short: 'Prieš protezavimą parengiama burnos ertmė: gydomi dantys, koreguojamos dantenys ar integruojami implantai.',
                  desc: 'Jeigu prieš protezavimą būtina paruošti burnos ertmę, atliekamos reikalingos procedūros. Tai gali būti dantų gydymas, senų ar netinkamų restauracijų keitimas, dantenų būklės koregavimas ar implantų integracija. Šie veiksmai užtikrina, kad protezai būtų tvirtinami ant stabilaus ir sveiko pagrindo, o galutinis rezultatas būtų ilgaamžis ir komfortiškas.',
                },
                {
                  num: '03',
                  img: '/protezavimas-zingsnis-3.png',
                  title: 'Protezų gamyba',
                  short: 'Protezai gaminami pagal individualų planą. Su CEREC technologija – kartais jau to paties vizito metu.',
                  desc: 'Pagal individualų planą gaminami dantų protezai, pritaikyti konkretaus paciento anatomijai ir estetiniams poreikiams. Naudojant pažangią CEREC technologiją, kai kuriais atvejais protezai gali būti pagaminami ir pritaikomi vos per kelias valandas – to paties vizito metu. Tai leidžia išvengti laikinų vainikėlių, sutrumpina gydymo laiką ir suteikia galimybę greitai džiaugtis galutiniu rezultatu.',
                },
                {
                  num: '04',
                  img: '/protezavimas-zingsnis-4.png',
                  title: 'Kontrolė ir rekomendacijos',
                  short: 'Įvertinamas prigludimas, pateikiamos priežiūros rekomendacijos ir suplanuojami profilaktiniai patikrinimai.',
                  desc: 'Užbaigus protezavimą, įvertinamas protezų prigludimas, sukandimas ir paciento savijauta. Pacientui pateikiamos išsamios rekomendacijos, kaip prižiūrėti protezus kasdienėje rutinoje, siekiant išsaugoti jų estetiką ir funkcionalumą. Taip pat suplanuojami profilaktiniai patikrinimai, leidžiantys stebėti protezų būklę ir užtikrinti ilgalaikį gydymo rezultatą.',
                },
              ].map(({ img, title, short, desc }, i) => (
                <div key={i} className="group">
                  <div className="overflow-hidden rounded-2xl mb-5">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-sm text-slate-600 sm:hidden">{short}</p>
                  <p className="text-sm text-slate-600 hidden sm:block">{desc}</p>
                </div>
              ))}
            </div>

            <p className="text-slate-600 leading-relaxed mt-8">
              Toks nuoseklus procesas leidžia užtikrinti, kad protezavimas būtų saugus,
              komfortiškas ir orientuotas į ilgalaikį rezultatą.
            </p>
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════
              TARNAVIMO LAIKAS
          ══════════════════════════════════════════════════════════════════ */}
          <motion.section id="tarnaves" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12 space-y-5" style={{ backgroundColor: SM }}>
              <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: P }}>
                Kiek laiko tarnauja dantų protezai?
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Dantų protezų tarnavimo laikas priklauso nuo kelių svarbių veiksnių – pasirinktų medžiagų, protezavimo technologijos, paciento burnos higienos įpročių ir reguliarios priežiūros. Šiuolaikinė odontologija leidžia sukurti ilgaamžius ir patikimus protezus, kurie, tinkamai prižiūrimi, gali tarnauti daugelį metų.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Didelę reikšmę turi naudojamos medžiagos. Cirkonio oksido keramikos protezai pasižymi itin dideliu tvirtumu ir atsparumu nusidėvėjimui, todėl dažnai tarnauja ilgiau nei tradiciniai sprendimai. Bemetalė keramika E-MAX išsiskiria puikiomis estetinėmis savybėmis ir stabilia spalva, todėl tinkamai parinkta ir prižiūrima taip pat išlaiko gerą būklę ilgą laiką.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Tinkamai suplanuotas ir profesionaliai atliktas protezavimas leidžia pasiekti optimalų kainos ir kokybės santykį. Net ir pasirinkus racionalius sprendimus, dantų protezavimas gali būti ilgaamžis ir patikimas, jei laikomasi specialisto rekomendacijų ir skiriama pakankamai dėmesio priežiūrai.
              </p>
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════
              PO PROTEZAVIMO
          ══════════════════════════════════════════════════════════════════ */}
          <motion.section id="po-protezavimo" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12 space-y-5" style={{ backgroundColor: SL }}>
              <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: P }}>
                Ką svarbu žinoti po protezavimo?
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Po dantų protezavimo organizmui reikalingas trumpas adaptacijos laikotarpis. Nors modernūs protezai pritaikomi itin tiksliai, pirmosiomis dienomis gali būti jaučiamas nežymus neįprastas pojūtis ar lengvas diskomfortas – tai natūrali organizmo reakcija, kuri paprastai greitai praeina. Dauguma pacientų prie naujų protezų prisitaiko per kelias dienas ar savaites.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Pirmuoju laikotarpiu rekomenduojama stebėti savo pojūčius kramtant ir kalbant. Jei jaučiamas spaudimas, dirginimas ar pakitęs sąkandis, svarbu apie tai informuoti odontologą – dažnai pakanka nedidelės korekcijos, kad protezai taptų visiškai komfortiški. Reguliarios kontrolės leidžia užtikrinti, jog protezai priglunda tiksliai ir nekelia ilgalaikio diskomforto.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Kasdienė burnos higiena po protezavimo yra itin svarbi. Protezus, kaip ir natūralius dantis, būtina kruopščiai valyti, naudojant tinkamas priemones. Tai padeda išvengti apnašų kaupimosi, dantenų sudirginimo ir užtikrina ilgesnį protezų tarnavimo laiką. Taip pat rekomenduojama laikytis individualių burnos higienos specialisto pateiktų patarimų.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Pirmosiomis dienomis po procedūros patariama vengti labai kieto ar lipnaus maisto, kuris galėtų sukelti papildomą apkrovą. Vėliau, prisitaikius prie protezų, galima palaipsniui grįžti prie įprastos mitybos. Reguliarūs profilaktiniai vizitai leidžia stebėti protezų būklę ir laiku užkirsti kelią galimiems pakitimams.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Laikantis šių rekomendacijų, protezavimas tampa ne tik estetišku, bet ir ilgalaikiu sprendimu, leidžiančiu kasdien jaustis užtikrintai ir patogiai.
              </p>
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════
              MITAI
          ══════════════════════════════════════════════════════════════════ */}
          <motion.section id="mitai" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
            <h2
              className="text-3xl font-extrabold tracking-tight mb-10"
              style={{ color: P }}
            >
              Dažniausi mitai apie dantų protezavimą
            </h2>

            <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
              Dantų protezavimas vis dar apipintas įvairiais mitais, kurie neretai atbaido pacientus nuo laiku priimamų sprendimų. Šiuolaikinė odontologija per pastaruosius metus smarkiai pažengė, todėl daugelis senų įsitikinimų šiandien nebeatitinka realybės.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: 'Protezai atrodo nenatūraliai',
                  text:  'Modernios protezavimo technologijos ir aukštos kokybės medžiagos leidžia sukurti protezus, kurie vizualiai beveik nesiskiria nuo natūralių dantų. Naudojant cirkonio ar bemetalę E-MAX keramiką, atkuriama ne tik danties forma, bet ir natūralus spalvos skaidrumas bei šviesos atspindys.',
                },
                {
                  title: 'Sunku priprasti',
                  text:  'Tinkamai pritaikyti protezai yra komfortiški nuo pat pirmųjų dienų. Nedidelis adaptacijos laikotarpis yra normalus, tačiau dėl tikslaus skaitmeninio planavimo ir individualaus pritaikymo dauguma pacientų greitai pamiršta, kad protezai apskritai buvo atlikti.',
                },
                {
                  title: 'Tik vyresniems',
                  text:  'Dantų protezavimas gali būti reikalingas bet kuriame amžiuje – dėl traumos, ėduonies komplikacijų ar įgimtų dantų defektų. Šiandien tai nėra amžiaus, o funkcijos ir estetikos klausimas.',
                },
                {
                  title: 'Pigus = prastas',
                  text:  'Kaina ne visuomet atspindi galutinį rezultatą. Naudojant pažangias technologijas, tokias kaip CEREC, galima optimizuoti gydymo procesą ir sumažinti papildomas išlaidas. Todėl pigus dantų protezavimas taip pat gali būti aukštos kokybės, ilgaamžis ir estetiškas sprendimas, kai jis atliekamas profesionalioje klinikoje.',
                },
              ].map(({ title, text }, i) => (
                <div
                  key={i}
                  className="bg-white p-7 rounded-2xl flex gap-5 shadow-sm"
                  style={{ border: `1px solid ${P}10` }}
                >
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm mt-0.5"
                    style={{ backgroundColor: SL, color: P }}
                  >
                    #{i + 1}
                  </span>
                  <div>
                    <h4 className="font-bold mb-2 text-lg" style={{ color: P }}>{title}</h4>
                    <p className="text-sm text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-slate-600 leading-relaxed mt-8">
              Mitų paneigimas padeda pacientams priimti sprendimus remiantis faktais, o ne baimėmis, ir drąsiau žengti žingsnį link pilnavertės šypsenos atkūrimo.
            </p>
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════
              KODĖL RINKTIS
          ══════════════════════════════════════════════════════════════════ */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 shadow-soft p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
              <h2 className="text-3xl font-extrabold tracking-tight mb-8" style={{ color: P }}>
                Kodėl verta rinktis Bangų odontologijos kliniką Klaipėdoje?
              </h2>

              {/* 3-col: text | tooth | text — collapses to 1-col on mobile */}
              <div className="grid lg:grid-cols-[1fr_300px_1fr] xl:grid-cols-[1fr_340px_1fr] gap-6 xl:gap-8 items-center">

                {/* Left column */}
                <div className="space-y-6">
                  {[
                    "Renkantis dantų protezavimo paslaugas svarbu ne tik kaina, bet ir gydymo kokybė, naudojamos technologijos bei specialistų patirtis. Bangų odontologijos klinikoje dantų protezavimas atliekamas derinant šiuolaikines skaitmenines technologijas, aukštos kokybės medžiagas ir individualų požiūrį į kiekvieną pacientą.",
                    "Klinikoje taikoma pažangi 3D CEREC technologija, leidžianti tiksliai suplanuoti ir, kai kuriais atvejais, pagaminti dantų protezus tą pačią dieną. Tai ne tik sutrumpina gydymo laiką, bet ir užtikrina itin tikslų pritaikymą bei komfortą.",
                  ].map((text, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: S }}>
                        #{i + 1}
                      </span>
                      <p className="text-slate-600 text-lg leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>

                {/* Center: tooth image */}
                <div className="flex items-center justify-center">
                  <img
                    src="/tooth-protezavimas.png"
                    alt="Dantų protezavimas Bangų klinikoje"
                    className="w-full object-contain"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>

                {/* Right column */}
                <div className="space-y-6">
                  {[
                    "Naudojamos patikimos medžiagos – cirkonio oksido keramika, bemetalė E-MAX keramika – suteikia galimybę pasiūlyti estetiškus ir ilgaamžius sprendimus. Specialistai kiekvieną atvejį vertina individualiai ir padeda pasirinkti optimalų kainos ir kokybės santykį.",
                    "Pacientų pasitikėjimą patvirtina teigiami atsiliepimai, kuriuose dažnai pabrėžiamas profesionalus bendravimas, procedūrų tikslumas ir džiuginantis ilgalaikis rezultatas. Todėl Bangų odontologijos klinika tampa racionaliu ir patikimu pasirinkimu.",
                  ].map((text, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: S }}>
                        #{i + 3}
                      </span>
                      <p className="text-slate-600 text-lg leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* Buttons — outside the block */}
            <div className="flex flex-wrap gap-3 mt-5">
              <Link
                to="/kontaktai"
                className="btn-primary btn-glow rounded-full px-7 py-3 font-semibold text-base inline-block shadow-lg hover:shadow-xl transition"
              >
                Registruotis vizitui
              </Link>
              <a
                href="#kainos"
                className="rounded-full px-7 py-3 font-semibold text-base inline-block border border-sky-200 text-slate-700 hover:bg-sky-50 transition"
              >
                Žiūrėti kainas
              </a>
            </div>
          </motion.section>

        </div>
      </motion.div>
    </AnimatedSection>
  )
}
