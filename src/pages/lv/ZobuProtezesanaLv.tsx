import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { TableOfContents } from '../../components/TableOfContents'
import ReviewsCarousel from '../../components/ReviewsCarousel'
import { useRef } from 'react'
import BeforeAfterSlider from '../../components/BeforeAfterSlider'
import { SITE_URL } from '../../i18n/lv'

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
const P  = '#002045'
const S  = '#006b5f'
const SL = '#ecf5fb'
const SM = '#e6eff5'

function CheckIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`} aria-hidden fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

const tocSections = [
  { id: 'cenas',            label: 'Cenas' },
  { id: 'pirms-pec',        label: 'Pirms un pēc' },
  { id: 'kas-ir',           label: 'Kas ir protezēšana?' },
  { id: 'kad-nepieciesama', label: 'Kad nepieciešama?' },
  { id: 'cerec',            label: '3D CEREC tehnoloģija' },
  { id: 'materiali',        label: 'Protēžu materiāli' },
  { id: 'implanti',         label: 'Protezēšana uz implantiem' },
  { id: 'process',          label: 'Kā notiek protezēšana?' },
  { id: 'kalpo',            label: 'Cik ilgi kalpo?' },
  { id: 'pec-protezesanas', label: 'Pēc protezēšanas' },
  { id: 'miti',             label: 'Mīti par protezēšanu' },
  { id: 'kapec-izvēlēties', label: 'Kāpēc izvēlēties mūs?' },
]

export default function ZobuProtezesanaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/zobu-protezesana/#service`,
    "name": "Zobu protezēšana Klaipēdā",
    "serviceType": "Zobu protezēšana",
    "description": "Zobu protezēšanas pakalpojums tiek sniegts Bangų zobārstniecības klīnikā Klaipēdā. Pakalpojums paredzēts pacientiem, kuri vēlas atjaunot zobu funkciju un estētiku.",
    "url": `${SITE_URL}/lv/pakalpojumi/zobu-protezesana/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Zobu protezēšana Klaipēdā"
        description="Zobu protezēšana Klaipēdā — pieejama cena, uzticami risinājumi zaudēto vai bojāto zobu atjaunošanai. Uzziniet vairāk Bangų klīnikā."
        keywords="zobu protezēšana, cerec, cirkonija keramika, protēzes, Klaipēda, implanti"
        canonical={`${SITE_URL}/lv/pakalpojumi/zobu-protezesana`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-protezavimas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/zobu-protezesana` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-protezavimas` },
        ]}
        structuredData={structuredData}
      />

      <motion.div
        ref={pageRef}
        className="max-w-[1600px] xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:flex 2xl:gap-8 2xl:items-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <TableOfContents
          sections={tocSections}
          rootRef={pageRef}
          cta={{ label: 'Reģistrēties vizītei', to: '/lv/kontakti' }}
        />

        <div className="min-w-0 flex-1">

          {/* HERO */}
          <motion.header
            className="mb-10 rounded-[28px] border border-sky-200/40 bg-white overflow-hidden shadow-soft"
            variants={item}
          >
            <div className="grid lg:grid-cols-[5fr_7fr] gap-0 items-stretch">
              <div className="p-6 sm:p-8 lg:p-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" style={{ color: P }}>
                  <span style={{ color: S }}>Zobu protezēšana</span>{' '}
                  Klaipēdā
                </h1>
                <p className="text-base text-slate-600 leading-relaxed mb-6">
                  Zobu zaudēšana vai to nopietns bojājums var ietekmēt ne tikai smaida estētiku, bet arī košļāšanas funkciju, runu un vispārējo pašsajūtu. Mūsdienu zobārstniecība ļauj efektīvi atjaunot zobus, taču pacientiem bieži svarīgs arī cenas aspekts. Tieši tāpēc Bangų zobārstniecības klīnikā tiek panākta augstas ārstēšanas kvalitātes, progresīvu tehnoloģiju un racionālas cenu politikas saskaņa.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/lv/kontakti"
                    className="btn-primary btn-glow rounded-full px-7 py-3 font-semibold text-base inline-block shadow-lg hover:shadow-xl transition"
                  >
                    Reģistrēties konsultācijai
                  </Link>
                  <a
                    href="#cenas"
                    className="rounded-full px-7 py-3 font-semibold text-base inline-block border border-sky-200 text-slate-700 hover:bg-sky-50 transition"
                  >
                    Skatīt cenas
                  </a>
                </div>
              </div>
              <div className="relative min-h-[320px] lg:min-h-full" style={{ backgroundColor: SL }}>
                <img
                  src="/protezavimas.webp"
                  alt="Zobu protezēšana Klaipēdā"
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
              Bangų zobārstniecības klīnikā Klaipēdā tiek veikta pieejama zobu protezēšana, nezaudējot profesionalitāti vai estētiku. Izmantojot modernas digitālās tehnoloģijas, piemēram, 3D CEREC sistēmu, tiek optimizēts ārstēšanas process, samazināts laika patēriņš un pacientiem tiek piedāvāti pievilcīgi, ilgstoši risinājumi. Katram pacientam tiek izveidots individuāls protezēšanas plāns, ņemot vērā vajadzības, mutes stāvokli un vēlmes.
            </p>
          </motion.div>

          {/* CENAS */}
          <motion.section id="cenas" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                  Zobu protezēšanas cenas
                </h2>
                <p className="text-slate-600">
                  Zobu protezēšanas cena atkarīga no izvēlētā risinājuma, izmantotajiem materiāliem, protezēšanas tehnoloģijas un individuālā pacienta mutes stāvokļa. Bangų zobārstniecības klīnikā katram pacientam tiek izveidots individuāls protezēšanas plāns, tāpēc galīgā cena tiek noteikta tikai pēc konsultācijas un diagnostikas.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-5">
              {[
                ['Konsultācija', '20 €'],
                ['Ārstēšanas plāna izveide', '30 €'],
              ].map(([name, price], i) => (
                <div key={i} className="flex justify-between items-center bg-white rounded-2xl px-5 py-3 border" style={{ borderColor: S }}>
                  <span className="text-slate-700 text-sm font-medium">{name}</span>
                  <span className="font-extrabold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Protezēšana uz zobiem</h3>
                <div className="divide-y divide-slate-100">
                  {[
                    ['Pagaidu plastmasas kronītis (kabinetā)',    '40 €'],
                    ['Pagaidu plastmasas kronītis (laboratorijā)', '80 €'],
                    ['Metāla keramikas kronītis',                    '350 €'],
                    ['Keramikas kronītis uz cirkonija oksīda pamata (uz zoba)', '400 €'],
                    ['E-max presētas bezmetāla keramikas kronītis', '400 €'],
                    ['Zoba slīpēšana / sagatavošana kronītim',        '50 €'],
                    ['Zoba atjaunošana uz stikla šķiedras stiegras (priekšējais)', '70 €'],
                    ['Zoba atjaunošana uz stikla šķiedras stiegras (molārs)',  '100 €'],
                    ['Pilna zoba atjaunošana uz stikla šķiedras stiegras',      '150 €'],
                    ['Veco kronīšu noņemšana',                      '50 €'],
                    ['Pagaidu kronīša cementēšana (ārpus ārstniecības)',  '20 €'],
                    ['Pastāvīga kronīša cementēšana (ārpus ārstniecības)', '50 €'],
                  ].map(([name, price], i) => (
                    <div key={i} className="flex justify-between items-center py-2.5">
                      <span className="text-slate-600 text-sm">{name}</span>
                      <span className="font-bold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Protezēšana uz implantiem</h3>
                <div className="divide-y divide-slate-100">
                  {[
                    ['Pagaidu kronītis uz implanta (ar pagaidu balsta cenu)', '200 €'],
                    ['Nospiedumi / skenēšana no implantiem',           '150 €'],
                    ['Keramikas kronītis uz cirkonija oksīda pamata (uz implanta)', '450 €'],
                    ['E-max presētas bezmetāla keramikas kronītis','450 €'],
                    ['Neodent standarta balsts',                    '100 €'],
                    ['Straumann standarta balsts',                  '200 €'],
                    ['Individuāls balsts',                            '200 €'],
                  ].map(([name, price], i) => (
                    <div key={i} className="flex justify-between items-center py-2.5">
                      <span className="text-slate-600 text-sm">{name}</span>
                      <span className="font-bold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Plāksnes, lāminas, kapas</h3>
                <div className="divide-y divide-slate-100">
                  {[
                    ['Kosmētiskā plāksne (plastmasas, cieta)',      '150 €'],
                    ['Kosmētiskā plāksne (termoplastiska, mīksta)',  '260 €'],
                    ['Izņemamā pilnā zobu plāksne (plastmasas)',   '350 €'],
                    ['Izņemamā pilnā zobu plāksne (mīksta)',       '600 €'],
                    ['Cietās plāksnes labošana',                     '70 €'],
                    ['Plāksnes pārbāzēšana',                       '80 €'],
                    ['Loka balsta protēze',                      '700 €'],
                    ['Kompozīta uzliktnis',                         '150 €'],
                    ['Keramikas uzliktnis',                            '300 €'],
                    ['E-max lāmina',                                '350 €'],
                    ['Slāņotā keramikas lāmina',               '450 €'],
                    ['Mīkstā kapa pret bruksismu',                    '100 €'],
                    ['Cietā kapa pret bruksismu',                      '150 €'],
                  ].map(([name, price], i) => (
                    <div key={i} className="flex justify-between items-center py-2.5">
                      <span className="text-slate-600 text-sm">{name}</span>
                      <span className="font-bold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Papildu procedūras</h3>
                <div className="divide-y divide-slate-100">
                  {[
                    ['Diagnostiskie modeļi',                        '20 €'],
                    ['Zoba vaskošana (1 gab.)',                  '10 €'],
                    ['Nospieduma noņemšana ar alginātu (1 žoklis)',  '20 €'],
                    ['Nospieduma noņemšana ar silikonu (1 žoklis)',  '50 €'],
                    ['Sakodiena reģistrs',                           '10 €'],
                    ['Individuālais karotītis (1 gab.)',                '30 €'],
                    ['Košļāšanas balsta veidošana',                                '20 €'],
                    ['Metāla košļāšanas balsts',                                 '60 €'],
                    ['Kombinētais košļāšanas balsts',                                 '90 €'],
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
              Precīzu zobu protezēšanas cenu apspriež individuālas konsultācijas laikā, novērtējot pacienta mutes stāvokli, izvēlēto tehnoloģiju un ārstēšanas apjomu. Caurredzama cenu politika un progresīvās tehnoloģijas ļauj Bangų zobārstniecības klīnikā piedāvāt finansiāli pieejamus protezēšanas risinājumus, nezaudējot kvalitāti, estētiku un ilgmūžību.
            </p>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12" variants={item}>
            <div className="bg-white rounded-[28px] border border-sky-200 shadow-soft overflow-hidden">
              <div className="grid lg:grid-cols-[5fr_4fr] gap-0 items-stretch">
                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-darkblue-700 mb-4">
                    Aicinām reģistrēties zobu protezēšanas konsultācijai Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja domājat par zobu protezēšanu vai meklējat risinājumu, kā atjaunot zaudētos vai stipri bojātos zobus, aicinām reģistrēties konsultācijai Bangų zobārstniecības klīnikā. Konsultācijas laikā tiek novērtēts Jūsu mutes stāvoklis, apspriesti iespējamie ārstēšanas varianti un izvēlēts individuāls risinājums, ņemot vērā Jūsu vajadzības un vēlmes.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mēs cenšamies, lai zobu protezēšana būtu skaidrs, drošs un ērts process. Modernās tehnoloģijas, pieredzējuši speciālisti un caurredzama cenu politika ļauj piedāvāt racionālus risinājumus gan funkcijas, gan estētikas ziņā.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Reģistrējieties zobu protezēšanas konsultācijai un speriet pirmo soli uz uzticamu un estētisku risinājumu. Pieejama zobu protezēšana Klaipēdā var būt saskaņota ar augstu kvalitāti un ilgtermiņa rezultātu, ja ārstēšana tiek plānota atbildīgi un individuāli.
                  </p>

                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts izsmeļošs klīniskais novērtējums',
                        'tiek apspriestas iespējamās ārstēšanas metodes',
                        'tiek izskaidroti procedūras posmi un termiņi',
                        'tiek izveidots individuāls ārstēšanas plāns',
                      ].map((t, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1"><CheckIcon /></span>
                          <span className="leading-relaxed">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/lv/kontakti"
                    className="btn-primary btn-glow rounded-full px-7 py-3 font-semibold text-base inline-block shadow-lg hover:shadow-xl transition"
                  >
                    Reģistrēties vizītei
                  </Link>
                </div>

                <div className="relative aspect-[4/5] lg:aspect-auto bg-sky-50">
                  <div className="pt-[125%] lg:hidden" />
                  <img
                    src="/team/Donatas_light%20LV.jpg"
                    alt="Donatas Bitinas — protezējošs ārsts Bangų klīnikā"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,transparent_15%)]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* REVIEWS */}
          <motion.div className="mb-10 no-x-scroll pan-y" variants={item}>
            <ReviewsCarousel />
          </motion.div>

          {/* PIRMS / PĒC */}
          <motion.section id="pirms-pec" className={sectionWrap} variants={item}>
            <div className="rounded-3xl overflow-hidden border border-sky-200/40" style={{ backgroundColor: SL }}>
              <div className="p-7 sm:p-10 lg:p-12">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-extrabold tracking-tight mb-3" style={{ color: P }}>
                    Pirms un pēc zobu protezēšanas
                  </h2>
                  <div className="h-1.5 w-20 mx-auto rounded-full" style={{ backgroundColor: S }} />
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <BeforeAfterSlider
                      beforeSrc="/protezavimas-before-1.png"
                      afterSrc="/protezavimas-after-1.png"
                      beforeAlt="Zobu stāvoklis pirms protezēšanas"
                      afterAlt="Zobu stāvoklis pēc protezēšanas"
                    />
                  </div>

                  <div className="space-y-7 md:pl-4 lg:pl-8">
                    <h3 className="text-2xl font-bold" style={{ color: P }}>Atgriežam pašpārliecinātību</h3>
                    <div className="space-y-6">
                      {[
                        {
                          icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
                          title: 'Dabiska estētika',
                          desc:  'Kronīši tiek izvēlēti atbilstoši Jūsu dabīgo zobu nokrāsai un formai.',
                        },
                        {
                          icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>,
                          title: 'Precizitāte līdz mikronam',
                          desc:  'Izmantojam digitālo plānošanu ideālas piegulšanas nodrošināšanai.',
                        },
                        {
                          icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                          title: 'Ilgtermiņa garantija',
                          desc:  'Sniedzam garantiju un pavadām pacientu visā ārstēšanas procesā.',
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

          {/* KAS IR PROTEZĒŠANA */}
          <motion.section id="kas-ir" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 overflow-hidden" style={{ backgroundColor: SL }}>
              <div className="grid lg:grid-cols-[1fr_480px]">
                <div className="p-7 sm:p-10 lg:p-12 space-y-6">
                  <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: P }}>
                    Kas ir zobu protezēšana?
                  </h2>
                  <div className="text-slate-600 leading-relaxed text-lg space-y-5">
                    <p>
                      Zobu protezēšana ir zobārstniecības procedūra, kuras laikā tiek atjaunoti zaudēti vai stipri bojāti zobi, izmantojot dažādus risinājumus. Protezēšanas mērķis — atgriezt pilnvērtīgu košļāšanas funkciju, estētisku izskatu un komfortu ikdienā.
                    </p>
                    <p>
                      Atkarībā no situācijas, zobu protezēšana var tikt izmantota gan viena zoba defekta atjaunošanai, gan vairāku vai visu zobu atjaunošanai. Mūsdienu protēzes tiek radītas tā, lai būtu izturīgas, estētiskas un pēc iespējas tuvākas dabīgajiem zobiem. Izvēloties piemērotu metodi un materiālus, zobu protezēšana var būt ne tikai finansiāli pieejama, bet arī uzticams ilgtermiņa risinājums.
                    </p>
                  </div>
                </div>
                <div className="relative hidden lg:block">
                  <img
                    src="/protezavimas-kada-reikalingas.png"
                    alt=""
                    aria-hidden
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--fade-color)_0%,transparent_25%)]" style={{ '--fade-color': SL } as React.CSSProperties} />
                </div>
              </div>
            </div>
          </motion.section>

          {/* KAD NEPIECIEŠAMA */}
          <motion.section id="kad-nepieciesama" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 overflow-hidden" style={{ backgroundColor: SL }}>
              <div className="grid lg:grid-cols-[1fr_480px]">
                <div className="p-7 sm:p-10 lg:p-12 space-y-7">
                  <h2 className="text-3xl font-extrabold tracking-tight leading-tight" style={{ color: P }}>
                    Kad nepieciešama zobu protezēšana?
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Zobu protezēšana ir ieteicama gadījumos, kad dabīgo zobu struktūra vairs nevar pilnīgi pildīt savu funkciju vai kad zobu trūkums ietekmē ikdienas komfortu. Laikus izvēlēts protezēšanas risinājums palīdz izvairīties no turpmākām mutes veselības problēmām un sarežģītākas ārstēšanas nākotnē.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                      'trūkst viens vai vairāki zobi, kas apgrūtina košļāšanu vai runu',
                      'zobi ir stipri bojāti, nodiluši vai novājināti',
                      'vecas protēzes vai restaurācijas vairs nepilda savu funkciju',
                      'radušās estētiskas problēmas, kas mazina pašpārliecinātību smaidā',
                      'mainījies sakodiens vai sajūtams diskomforts žokļa apvidū',
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
                    Šādos gadījumos individuāli plānots un racionāli izvēlēts risinājums ļauj nodrošināt, lai zobu protezēšana Klaipēdā būtu ne tikai pieejama, bet arī efektīva ilgtermiņā.
                  </p>
                </div>
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

          {/* CEREC */}
          <motion.section
            id="cerec"
            className={`${sectionWrap} rounded-3xl overflow-hidden border border-sky-200/40`}
            style={{ backgroundColor: SL }}
            variants={item}
          >
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-white p-2 rounded-[2rem] shadow-lg">
                    <img
                      src="/protezavimas-cerec.png"
                      alt="3D CEREC tehnoloģija zobu protezēšanai"
                      className="rounded-[1.8rem] w-full h-[320px] sm:h-[400px] object-cover"
                    />
                  </div>
                </div>

                <div className="order-1 lg:order-2 space-y-7">
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight" style={{ color: P }}>
                    3D CEREC tehnoloģija —{' '}
                    <span style={{ color: S }}>zobs vienas vizītes laikā</span>
                  </h2>
                  <p className="text-lg leading-relaxed text-slate-600">
                    Bangų zobārstniecības klīnikā zobu protezēšanai plaši tiek izmantota progresīvā 3D CEREC tehnoloģija, kas ļauj sasniegt īpaši precīzu un ātru rezultātu. Digitālās skenēšanas laikā tiek izveidots precīzs zobu modelis, kas ļauj individuāli piemērot katru restaurāciju atbilstoši pacienta anatomijai.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-2xl border" style={{ borderColor: `${S}25` }}>
                      <p className="text-3xl font-extrabold mb-1" style={{ color: S }}>1 st.</p>
                      <p className="text-sm text-slate-500">Vidējais procedūras ilgums</p>
                    </div>
                    <div className="bg-white p-5 rounded-2xl border" style={{ borderColor: `${S}25` }}>
                      <p className="text-3xl font-extrabold mb-1" style={{ color: S }}>100%</p>
                      <p className="text-sm text-slate-500">Bez metāla elementiem</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {[
                      'izvairīties no tradicionālajiem nospiedumiem un ar tiem saistīta diskomforta',
                      'izveidot īpaši precīzu restaurāciju, kas ideāli piegulst no pirmās dienas',
                      'izgatavot zoba protēzi vietā, tikai dažu stundu laikā',
                      'uzreiz veikt galīgo protezēšanu bez pagaidu kronīšiem',
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
                    Šī tehnoloģija ne tikai saīsina ārstēšanas laiku, bet arī ļauj optimizēt procesu, tāpēc pacientiem var tikt piedāvāta kvalitatīva zobu protezēšana, nezaudējot estētiku vai ilgmūžību. CEREC 3D risinājumi īpaši tiek novērtēti komforta, precizitātes un iespējas ātri atgriezt pilnvērtīgu smaidu dēļ.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* MATERIĀLI */}
          <motion.section id="materiali" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
            <h2 className="text-3xl font-extrabold tracking-tight mb-6" style={{ color: P }}>
              No kādiem materiāliem tiek izgatavotas protēzes?
            </h2>

            <p className="text-slate-600 leading-relaxed mb-10 max-w-3xl">
              Zobu protezēšanas veiksme ir atkarīga ne tikai no tehnoloģijām, bet arī no izvēlētajiem materiāliem. Bangų zobārstniecības klīnikā tiek izmantoti pasaulē atzīti, uzticami un estētiski materiāli, kas ļauj piedāvāt risinājumus, kas atbilst gan funkcionālajām, gan estētiskajām pacientu vēlmēm. Pareizi izvēlēts materiāls palīdz nodrošināt komfortu, ilgmūžību un dabisku izskatu.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-10 rounded-3xl border shadow-sm hover:shadow-xl transition-shadow" style={{ borderColor: `${P}15` }}>
                <h3 className="text-2xl font-extrabold mb-5 flex items-center gap-3" style={{ color: P }}>
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${P}0d` }}>
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: P }}>
                      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                    </svg>
                  </span>
                  Cirkonija oksīda keramika
                </h3>
                <p className="text-slate-600 mb-5 leading-relaxed">
                  Cirkonija keramika ir viens no progresīvākajiem un uzticamākajiem materiāliem mūsdienu zobu protezēšanā. Tā tiek izgatavota no saspiestiem kristāliem, tāpēc izceļas ar īpaši lielu izturību un nolietojumizturību. Šo īpašību dēļ cirkonija keramika ir piemērota gan priekšējo, gan sānu zobu atjaunošanai.
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  {[
                    'ļoti precīzs pielāgojums, kas nodrošina komfortu no pirmās dienas',
                    'izturība pret aplikumiem, krāsas un formas izmaiņām',
                    'ilgāks kalpošanas laiks salīdzinājumā ar metāla keramiku',
                    'estētisks izskats bez metāliskas maliņas pie smaganām',
                    'lēnāka siltuma un aukstuma pārvade, tuvāka dabīgo zobu sajūtai',
                  ].map((t, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: S }} />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 text-sm leading-relaxed mt-5">
                  Ilgmūžības un minimālas kopšanas nepieciešamības dēļ cirkonija keramika ļauj sasniegt optimālu cenas un kvalitātes attiecību, tāpēc bieži tiek izvēlēta, meklējot uzticamu un pieejamu zobu protezēšanas risinājumu ilgtermiņā.
                </p>
              </div>

              <div className="bg-white p-10 rounded-3xl border shadow-sm hover:shadow-xl transition-shadow" style={{ borderColor: `${P}15` }}>
                <h3 className="text-2xl font-extrabold mb-5 flex items-center gap-3" style={{ color: S }}>
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${S}0d` }}>
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: S }}>
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  </span>
                  Bezmetāla keramika — E-MAX (Ivoclar Vivadent)
                </h3>
                <p className="text-slate-600 mb-5 leading-relaxed">
                  Bezmetāla keramika E-MAX īpaši tiek novērtēta izcilās estētikas dēļ. Šis uz porcelāna pamata radītais materiāls izceļas ar lielisku gaismas caurlaidību, tāpēc protezēti zobi izskatās īpaši dabiski. Šī iemesla dēļ E-MAX visbiežāk tiek ieteikta priekšējo, redzamāko zobu atjaunošanai.
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  {[
                    'tiek saglabāta dabiska krāsas caurspīdība un mirdzums',
                    'zobi laika gaitā neiegūst matētu nokrāsu',
                    'materiāls nekairina smaganas un ir bioloģiski saderīgs',
                    'izturība pret temperatūras izmaiņām un aplikumu uzkrāšanos',
                    'īpaši precīzs pielāgojums ļauj sasniegt lielisku rezultātu jau pirmajā dienā',
                  ].map((t, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: S }} />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 text-sm leading-relaxed mt-5">
                  Pareizi izvēloties indikācijas, bezmetāla keramika ļauj apvienot augstu estētiku un racionālu cenu, tāpēc tā var tikt iekļauta individuālā, pacientam pielāgotā protezēšanas plānā.
                </p>
              </div>
            </div>
            </div>
          </motion.section>

          {/* PROTEZĒŠANA UZ IMPLANTIEM */}
          <motion.section id="implanti" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1 space-y-5">
                  <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: P }}>
                    Protezēšana uz implantiem
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Protezēšana uz implantiem tiek uzskatīta par vienu no progresīvākajām zobu atjaunošanas metodēm, kad zaudēto zobu vietā tiek nostiprinātas mākslīgās saknes — implanti, uz kuriem vēlāk tiek nostiprinātas individuāli izgatavotas protēzes. Šī metode ļauj atjaunot ne tikai zobu estētiku, bet arī dabisku košļāšanas sajūtu un stabilitāti.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Bangų zobārstniecības klīnikā protezēšana uz implantiem tiek veikta, izmantojot uzticamas un pasaulē atzītas sistēmas — Straumann® un Neodent® implantus. Uz implantiem nostiprinātās protēzes tiek izgatavotas tā, lai vizuāli un funkcionāli būtu gandrīz neatšķiramas no dabīgajiem zobiem. Tas ir risinājums, kas piemērots gan viena zoba atjaunošanai, gan vairāku vai visu zobu protezēšanai.
                  </p>
                  <div className="p-5 rounded-2xl border-l-4" style={{ backgroundColor: `${P}0a`, borderLeftColor: P }}>
                    <p className="font-bold text-sm" style={{ color: P }}>
                      Uz implantiem balstīta protezēšana palīdz izvairīties no blakus zobu slīpēšanas, nodrošina labu sakodiena stabilitāti un palēnina žokļa kaula noārdīšanos. Lai gan tas ir ilgtermiņa risinājums, individuāla plānošana un tehnoloģiju izmantošana ļauj apvienot augstu kvalitāti un racionālas izmaksas, tāpēc pacientiem var tikt piedāvāta kvalitatīva zobu protezēšana, kas atbilst viņu vajadzībām.
                    </p>
                  </div>
                </div>

                <div className="w-full max-w-[280px] h-[280px] flex-shrink-0 rounded-full p-3 shadow-inner mx-auto md:mx-0" style={{ backgroundColor: 'white' }}>
                  <img
                    src="/protezavimas-ant-implantu.png"
                    alt="Zobu protezēšana uz implantiem"
                    className="w-full h-full object-cover rounded-full"
                    style={{ border: `4px solid ${SL}` }}
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* PROCESS */}
          <motion.section id="process" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
            <h2 className="text-3xl font-extrabold tracking-tight mb-10" style={{ color: P }}>
              Kā notiek zobu protezēšana klīnikā?
            </h2>

            <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
              Zobu protezēšana Bangų zobārstniecības klīnikā tiek veikta pēc skaidra un pacientam saprotama plāna. Viss process sākas ar izsmeļošu konsultāciju, kuras laikā tiek novērtēts mutes stāvoklis, apspriestas pacienta vēlmes un izvēlēts piemērotākais protezēšanas risinājums.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  img: '/protezavimas-zingsnis-1.png',
                  title: 'Diagnostika un plānošana',
                  short: 'Tiek veikta mutes stāvokļa analīze, klīniskais novērtējums un individuāla ārstēšanas plāna izveide.',
                  desc: 'Zobu protezēšana sākas ar izsmeļošu mutes stāvokļa analīzi. Tiek veikta klīniska apskate, novērtēts zobu, smaganu un sakodiena stāvoklis, un vajadzības gadījumā — radioloģiskie izmeklējumi. Izmantotā digitālā plānošana ļauj precīzi novērtēt esošo situāciju un ieplānot galīgo rezultātu jau pirms ārstēšanas sākuma. Šajā posmā tiek apspriestas pacienta vēlmes, iespējamie risinājumi, izvēlēti protezēšanas materiāli un tehnoloģijas, tāpēc ārstēšanas plāns tiek sagatavots individuāli un skaidri.',
                },
                {
                  img: '/protezavimas-zingsnis-2.png',
                  title: 'Sagatavošanas darbi',
                  short: 'Pirms protezēšanas tiek sagatavota mutes dobums: tiek ārstēti zobi, koriģētas smaganas vai integrēti implanti.',
                  desc: 'Ja pirms protezēšanas nepieciešams sagatavot mutes dobumu, tiek veiktas nepieciešamās procedūras. Tā var būt zobu ārstēšana, veco vai nepiemēroto restaurāciju maiņa, smaganu stāvokļa korekcija vai implantu integrācija. Šīs darbības nodrošina, ka protēzes tiek nostiprinātas uz stabila un vesela pamata, un galīgais rezultāts ir ilgmūžīgs un ērts.',
                },
                {
                  img: '/protezavimas-zingsnis-3.png',
                  title: 'Protēžu izgatavošana',
                  short: 'Protēzes tiek izgatavotas pēc individuāla plāna. Ar CEREC tehnoloģiju — reizēm jau tās pašas vizītes laikā.',
                  desc: 'Pēc individuāla plāna tiek izgatavotas zobu protēzes, pielāgotas konkrētā pacienta anatomijai un estētiskajām vajadzībām. Izmantojot progresīvo CEREC tehnoloģiju, dažos gadījumos protēzes var tikt izgatavotas un piemērotas tikai dažu stundu laikā — tās pašas vizītes laikā. Tas ļauj izvairīties no pagaidu kronīšiem, saīsina ārstēšanas laiku un dod iespēju ātri priecāties par galīgo rezultātu.',
                },
                {
                  img: '/protezavimas-zingsnis-4.png',
                  title: 'Kontrole un ieteikumi',
                  short: 'Tiek novērtēta piegulšana, sniegti kopšanas ieteikumi un ieplānotas profilaktiskās pārbaudes.',
                  desc: 'Pēc protezēšanas pabeigšanas tiek novērtēta protēžu piegulšana, sakodiens un pacienta pašsajūta. Pacientam tiek sniegti izsmeļoši ieteikumi, kā kopt protēzes ikdienas rutīnā, lai saglabātu to estētiku un funkcionalitāti. Tāpat tiek ieplānotas profilaktiskās pārbaudes, kas ļauj novērot protēžu stāvokli un nodrošināt ilgtermiņa ārstēšanas rezultātu.',
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
              Šāds secīgs process ļauj nodrošināt, ka protezēšana ir droša, ērta un vērsta uz ilgtermiņa rezultātu.
            </p>
            </div>
          </motion.section>

          {/* KALPOŠANAS LAIKS */}
          <motion.section id="kalpo" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12 space-y-5" style={{ backgroundColor: SM }}>
              <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: P }}>
                Cik ilgi kalpo zobu protēzes?
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Zobu protēžu kalpošanas laiks ir atkarīgs no vairākiem svarīgiem faktoriem — izvēlētajiem materiāliem, protezēšanas tehnoloģijas, pacienta mutes higiēnas ieradumiem un regulāras kopšanas. Mūsdienu zobārstniecība ļauj izveidot ilgmūžīgas un uzticamas protēzes, kas pareizi koptas var kalpot daudzus gadus.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Liela nozīme ir izmantotajiem materiāliem. Cirkonija oksīda keramikas protēzes izceļas ar īpaši lielu izturību un nolietojumizturību, tāpēc bieži kalpo ilgāk nekā tradicionālie risinājumi. Bezmetāla keramika E-MAX izceļas ar lieliskām estētiskām īpašībām un stabilu krāsu, tāpēc pareizi izvēlēta un kopta arī saglabā labu stāvokli ilgu laiku.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Pareizi plānota un profesionāli veikta protezēšana ļauj sasniegt optimālu cenas un kvalitātes attiecību. Pat izvēloties racionālus risinājumus, zobu protezēšana var būt ilgmūžīga un uzticama, ja tiek ievēroti speciālista ieteikumi un tiek pievērsta pietiekama uzmanība kopšanai.
              </p>
            </div>
          </motion.section>

          {/* PĒC PROTEZĒŠANAS */}
          <motion.section id="pec-protezesanas" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12 space-y-5" style={{ backgroundColor: SL }}>
              <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: P }}>
                Kas svarīgi zināt pēc protezēšanas?
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Pēc zobu protezēšanas organismam nepieciešams īss adaptācijas periods. Lai gan modernas protēzes tiek pielāgotas īpaši precīzi, pirmajās dienās var būt jūtama neliela neierasta sajūta vai viegls diskomforts — tā ir dabiska organisma reakcija, kas parasti ātri pāriet. Vairums pacientu jaunām protēzēm pielāgojas dažu dienu vai nedēļu laikā.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Pirmajā periodā ieteicams novērot savas sajūtas košļājot un runājot. Ja tiek sajusts spiediens, kairinājums vai mainīts sakodiens, svarīgi par to informēt zobārstu — bieži pietiek ar nelielu korekciju, lai protēzes kļūtu pilnīgi ērtas. Regulāras kontroles ļauj nodrošināt, ka protēzes piegulst precīzi un nerada ilgtermiņa diskomfortu.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Ikdienas mutes higiēna pēc protezēšanas ir īpaši svarīga. Protēzes, tāpat kā dabīgie zobi, ir rūpīgi jātīra, izmantojot piemērotas ierīces. Tas palīdz izvairīties no aplikumu uzkrāšanās, smaganu kairinājuma un nodrošina ilgāku protēžu kalpošanas laiku. Tāpat ieteicams ievērot individuālus mutes higiēnas speciālista sniegtos padomus.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Pirmajās dienās pēc procedūras ieteicams izvairīties no ļoti cieta vai lipīga ēdiena, kas varētu radīt papildu slodzi. Vēlāk, pielāgojoties protēzēm, pakāpeniski var atgriezties pie ierastā uztura. Regulāras profilaktiskas vizītes ļauj novērot protēžu stāvokli un laikus novērst iespējamās izmaiņas.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Ievērojot šos ieteikumus, protezēšana kļūst ne tikai estētisks, bet arī ilgtermiņa risinājums, kas ļauj ikdienā justies pārliecināti un ērti.
              </p>
            </div>
          </motion.section>

          {/* MĪTI */}
          <motion.section id="miti" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
            <h2 className="text-3xl font-extrabold tracking-tight mb-10" style={{ color: P }}>
              Biežākie mīti par zobu protezēšanu
            </h2>

            <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
              Zobu protezēšana joprojām ir aptīta ar dažādiem mītiem, kas bieži attur pacientus no laikus pieņemtiem lēmumiem. Mūsdienu zobārstniecība pēdējos gados ir strauji attīstījusies, tāpēc daudzas vecās pārliecības šodien vairs neatbilst realitātei.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: 'Protēzes izskatās nedabiski',
                  text:  'Modernās protezēšanas tehnoloģijas un augstas kvalitātes materiāli ļauj izveidot protēzes, kas vizuāli gandrīz neatšķiras no dabīgajiem zobiem. Izmantojot cirkonija vai bezmetāla E-MAX keramiku, tiek atjaunota ne tikai zoba forma, bet arī dabiska krāsas caurspīdība un gaismas atstarojums.',
                },
                {
                  title: 'Grūti pierast',
                  text:  'Pareizi pielāgotas protēzes ir ērtas jau no pirmajām dienām. Nelielais adaptācijas periods ir normāls, taču precīzas digitālās plānošanas un individuāla pielāgojuma dēļ vairums pacientu ātri aizmirst, ka protēzes vispār tika veiktas.',
                },
                {
                  title: 'Tikai vecākiem cilvēkiem',
                  text:  'Zobu protezēšana var būt nepieciešama jebkurā vecumā — traumas, kariesa komplikāciju vai iedzimtu zobu defektu dēļ. Šodien tas nav vecuma, bet gan funkcijas un estētikas jautājums.',
                },
                {
                  title: 'Lēts = slikts',
                  text:  'Cena ne vienmēr atspoguļo galīgo rezultātu. Izmantojot progresīvas tehnoloģijas, piemēram, CEREC, var optimizēt ārstēšanas procesu un samazināt papildu izmaksas. Tāpēc pieejama zobu protezēšana arī var būt augstas kvalitātes, ilgmūžīgs un estētisks risinājums, ja tā tiek veikta profesionālā klīnikā.',
                },
              ].map(({ title, text }, i) => (
                <div key={i} className="bg-white p-7 rounded-2xl flex gap-5 shadow-sm" style={{ border: `1px solid ${P}10` }}>
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm mt-0.5" style={{ backgroundColor: SL, color: P }}>
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
              Mītu atspēkošana palīdz pacientiem pieņemt lēmumus, pamatojoties uz faktiem, nevis bailēm, un drošāk spert soli uz pilnvērtīga smaida atjaunošanu.
            </p>
            </div>
          </motion.section>

          {/* KĀPĒC IZVĒLĒTIES */}
          <motion.section id="kapec-izvēlēties" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 shadow-soft p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
              <h2 className="text-3xl font-extrabold tracking-tight mb-8" style={{ color: P }}>
                Kāpēc izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>

              <div className="grid lg:grid-cols-[1fr_300px_1fr] xl:grid-cols-[1fr_340px_1fr] gap-6 xl:gap-8 items-center">
                <div className="space-y-6">
                  {[
                    "Izvēloties zobu protezēšanas pakalpojumus, svarīga ir ne tikai cena, bet arī ārstēšanas kvalitāte, izmantotās tehnoloģijas un speciālistu pieredze. Bangų zobārstniecības klīnikā zobu protezēšana tiek veikta, apvienojot mūsdienu digitālās tehnoloģijas, augstas kvalitātes materiālus un individuālu pieeju katram pacientam.",
                    "Klīnikā tiek izmantota progresīvā 3D CEREC tehnoloģija, kas ļauj precīzi plānot un dažos gadījumos izgatavot zobu protēzes tajā pašā dienā. Tas ne tikai saīsina ārstēšanas laiku, bet arī nodrošina īpaši precīzu pielāgojumu un komfortu.",
                  ].map((text, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: S }}>
                        #{i + 1}
                      </span>
                      <p className="text-slate-600 text-lg leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <img
                    src="/tooth-protezavimas.png"
                    alt="Zobu protezēšana Bangų klīnikā"
                    className="w-full object-contain"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>

                <div className="space-y-6">
                  {[
                    "Izmantotie uzticamie materiāli — cirkonija oksīda keramika, bezmetāla E-MAX keramika — dod iespēju piedāvāt estētiskus un ilgmūžīgus risinājumus. Speciālisti katru gadījumu vērtē individuāli un palīdz izvēlēties optimālu cenas un kvalitātes attiecību.",
                    "Pacientu uzticību apstiprina pozitīvās atsauksmes, kurās bieži tiek uzsvērta profesionāla komunikācija, procedūru precizitāte un iepriecinošs ilgtermiņa rezultāts. Tāpēc Bangų zobārstniecības klīnika kļūst par racionālu un uzticamu izvēli.",
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

            <div className="flex flex-wrap gap-3 mt-5">
              <Link
                to="/lv/kontakti"
                className="btn-primary btn-glow rounded-full px-7 py-3 font-semibold text-base inline-block shadow-lg hover:shadow-xl transition"
              >
                Reģistrēties vizītei
              </Link>
              <a
                href="#cenas"
                className="rounded-full px-7 py-3 font-semibold text-base inline-block border border-sky-200 text-slate-700 hover:bg-sky-50 transition"
              >
                Skatīt cenas
              </a>
            </div>
          </motion.section>

        </div>
      </motion.div>
    </AnimatedSection>
  )
}
