import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { TableOfContents } from '../../components/TableOfContents'
import { useRef } from 'react'
import ReviewsCarousel from '../../components/ReviewsCarousel'
import { SITE_URL } from '../../i18n/lv'

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

const sectionWrap = 'mb-12 scroll-mt-36 2xl:scroll-mt-24'
const whiteCard = 'bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft'
const innerCard = 'bg-white p-5 rounded-xl border border-slate-200 shadow-sm'

const P  = '#002045'
const S  = '#006b5f'
const SL = '#ecf5fb'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

const tocSections = [
  { id: 'kainos', label: 'Cenas' },
  { id: 'kas-yra', label: 'Kas ir kaula augmentācija?' },
  { id: 'priezastis', label: 'Kāpēc kauls izzūd?' },
  { id: 'kada-reikalingas', label: 'Kad nepieciešama?' },
  { id: 'nustatymas', label: 'Kā tiek noteikts, vai nepieciešama?' },
  { id: 'metodai', label: 'Augmentācijas metodes' },
  { id: 'medziagos', label: 'Izmantojamie materiāli' },
  { id: 'procesas', label: 'Kā notiek procedūra?' },
  { id: 'duk', label: 'Biežākie jautājumi' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function ZoklakaulaAugmentacijaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/lv/pakalpojumi/zoklakaula-augmentacija/#service",
    "name": "Žokļa kaula augmentācija Klaipēdā",
    "serviceType": "Žokļa kaula augmentācija",
    "description": "Žokļa kaula augmentācijas pakalpojums tiek sniegts Bangų zobārstniecības klīnikā Klaipēdā. Klīnikā tiek veikta kaula augmentācijas ārstēšana, gatavojoties zobu implantācijai.",
    "url": "https://www.banguklinika.lt/lv/pakalpojumi/zoklakaula-augmentacija/",
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Žokļa kaula augmentācija Klaipēdā - Bangų klīnika"
        description="Nepietiek kaula implantācijai? Žokļa kaula augmentācija (kaula palielināšana) Klaipēdā☑️individuāla plānošana☑️cena no 450€.⏩Piesakieties konsultācijai jau tagad."
        keywords="zokla kaula augmentacija, kaula palielinasana, implantacijas sagatavosana, klaipeda"
        canonical={`${SITE_URL}/lv/pakalpojumi/zoklakaula-augmentacija`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/zandikaulio-kaulo-priauginimas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/zoklakaula-augmentacija` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/zandikaulio-kaulo-priauginimas` },
        ]}
        structuredData={structuredData}
      />

      <motion.div
        ref={pageRef}
        className="max-w-screen-2xl mx-auto px-8 xl:px-28 2xl:px-8 2xl:flex 2xl:gap-8 2xl:items-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <TableOfContents sections={tocSections} rootRef={pageRef} title="Saturs" cta={{ label: 'Pierakstīties vizītei', to: '/lv/kontakti' }} />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Žokļa kaula augmentācija Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Zobu implantācija ir viens no uzticamākajiem veidiem, kā atjaunot zaudētos zobus, taču veiksmīgai
                  implantācijai nepieciešams pietiekams žokļa kaula apjoms. Ja kauls ir pārāk šaurs, pārāk zems vai
                  izzudis pēc zoba zaudēšanas, implanta ievietošana var būt sarežģīta vai nav ieteicama bez papildu
                  sagatavošanas. Šādos gadījumos var tikt veikta žokļa kaula augmentācija.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā kaula augmentācija tiek plānota individuāli, izvērtējot
                  pacienta mutes stāvokli, kaula apjomu, nākamo implantu novietojumu un kopējo ārstēšanas plānu.
                  Mērķis ir izveidot pietiekamu un drošu pamatu implantam, atjaunot zaudēto kaula balstu un radīt
                  apstākļus ilglaicīgam zobu atjaunošanas rezultātam.
                </p>
              </div>
            </div>

            <div className="flex justify-start mt-6">
              <Link
                to="/lv/kontakti"
                className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Pierakstīties vizītei
              </Link>
            </div>

            {/* CENAS */}
            <motion.section id="kainos" className="mt-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
              <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                      Žokļa kaula augmentācijas cenas
                    </h2>
                    <p className="text-slate-600">
                      Žokļa kaula augmentācijas cena ir atkarīga no trūkstošā kaula apjoma, izmantotās metodes un procedūras
                      apjoma. Pirms ārstēšanas vienmēr tiek veikta diagnostika, kuras laikā tiek izvērtēta situācija un izvēlēts
                      piemērotākais kaula augmentācijas risinājums.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Kaula augmentācija</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Žokļa kaula augmentācija', 'no 450 €'],
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
                  Precīza žokļa kaula augmentācijas cena Klaipēdā tiek apspriesta individuālas konsultācijas laikā, ņemot vērā
                  konkrēto klīnisko situāciju. Caurspīdīga cenu politika un profesionāla pieeja ļauj pacientiem justies
                  pārliecinātiem un pieņemt informētu lēmumu.
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
                    Aicinām pierakstīties konsultācijai Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja Jums ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā izvērtēsim Jūsu mutes stāvokli, atbildēsim uz interesējošajiem jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mēs tiecamies, lai katrs pacients justos pārliecināti – no pirmās konsultācijas līdz galīgajam rezultātam. Pierakstieties un speriet pirmo soli uz veselīgu smaidu.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts detalizēts klīniskais izvērtējums',
                        'tiek apspriestas iespējamās ārstēšanas metodes',
                        'tiek izskaidroti procedūras posmi un termiņi',
                        'tiek izstrādāts individuāls ārstēšanas plāns',
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
                    Pierakstīties vizītei
                  </Link>
                </div>
                {/* Right: doctor photo */}
                <div className="relative aspect-[4/5] bg-sky-50">                  <img
                    src="/team/Jonas-light%20LV.jpg"
                    alt="Bangų zobārstniecības klīnikas ārsts"
                    className="absolute inset-0 w-full h-full object-contain"
                  loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,transparent_15%)] hidden lg:block" />
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

          {/* KAS IR */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir žokļa kaula augmentācija?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Žokļa kaula augmentācija, dēvēta arī par kaula palielināšanu, ir ķirurģiska procedūra, kuras
                  laikā tiek atjaunots vai palielināts žokļa kaula apjoms. Tā visbiežāk tiek veikta tad, kad
                  plānota zobu implantācija, taču esošā kaula augstums vai platums nav pietiekams drošai implanta
                  ievietošanai.
                </p>
                <p>
                  Implantam jābūt stabili nostiprinātam kaulā. Ja kaula ir pārāk maz, implantam var nebūt
                  pietiekama balsta, kas var palielināt komplikāciju vai neveiksmīgas ārstēšanas risku. Tāpēc kaula
                  augmentācija implantam var būt svarīgs sagatavošanās posms pirms implantācijas vai tās laikā.
                </p>
                <p>
                  Procedūras laikā tiek izmantots speciāls kaula aizvietotāja materiāls vai citi individuāli izvēlēti
                  risinājumi, kas palīdz atjaunot trūkstošo kaula apjomu. Laika gaitā palielinātā zona dzīst,
                  integrējas ar pacienta audiem un var kļūt par piemērotu pamatu implantam.
                </p>
                <p>
                  Svarīgi saprast, ka žokļa kaula augmentācija nav nepieciešama visiem pacientiem. Dažos
                  gadījumos implantāciju var veikt bez papildu kaula atjaunošanas, taču to var precīzi noteikt
                  tikai pēc diagnostikas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* IEMESLS */}
          <motion.section id="priezastis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kāpēc žokļa kauls izzūd?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Žokļa kauls ir dzīvs audi, kas reaģē uz košļāšanas slodzi. Kamēr mutē ir dabīgais
                  zobs, tā sakne nodod košļāšanas slodzi kaulam un palīdz uzturēt tā apjomu. Zaudējot zobu,
                  šajā vietā kauls vairs nesaņem parasto mehānisko slodzi, tāpēc laika gaitā tas var sākt samazināties.
                </p>
                <p>
                  Viens no biežākajiem kaula izzušanas iemesliem ir ilgstoši neatjaunots zaudēts zobs. Jo ilgāk
                  zoba nav, jo lielāka iespējamība, ka kauls šajā zonā būs samazinājies. Tāpēc implantācija
                  vēlāk var kļūt sarežģītāka un var būt nepieciešamas papildu ķirurģiskas procedūras.
                </p>
                <p>
                  Kaula zudumu var izraisīt arī periodonta slimības. Kad iekaisums bojā smaganas un ap
                  zobiem esošo kaulu, zobi var kļūt kustīgi un kaula balsts samazināties. Šādos gadījumos pirms
                  implantācijas plānošanas svarīgi izvērtēt ne tikai trūkstošā zoba vietu, bet arī vispārējo smaganu un
                  periodonta stāvokli.
                </p>
                <p>
                  Žokļa kauls var tikt zaudēts arī traumu, cistu, infekciju, sarežģītas zoba
                  izraušanas vai individuālu anatomisku īpatnību dēļ. Dažiem pacientiem kaula apjoms noteiktās
                  žokļa vietās no dabas var būt mazāks, īpaši augšžokļa dzerokļu
                  zonā, kur tuvu atrodas augšžokļa deguna blakusdobumi.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAD NEPIECIEŠAMA */}
          <motion.section id="kada-reikalingas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kad nepieciešama kaula augmentācija pirms implantācijas?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Kaula augmentācija pirms implantācijas var būt nepieciešama tad, kad 3D izmeklējums vai klīniskais
                izvērtējums parāda, ka implantam nepietiek kaula augstuma, platuma vai blīvuma. Šādā gadījumā vispirms
                jāatjauno balsts, kas ļautu droši un precīzi ieplānot implantu.
              </p>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-darkblue-700">Kaula augmentācija var tikt ieteikta, kad:</h3>
                <div className="grid gap-3">
                  {[
                    'zobs bija zaudēts sen un kauls šajā vietā ir izzudis',
                    'pēc zoba izraušanas kauls sadzija nepietiekami',
                    'žokļa kauls ir pārāk šaurs vai pārāk zems implantam',
                    'bija iekaisums, cista, trauma vai sarežģīta zoba izraušana',
                    'plānota implantācija estētiski svarīgā smaida zonā',
                    'nepieciešams atjaunot smaganu un kaula kontūru turpmākajai protezēšanai',
                    '3D izmeklējums parāda, ka implantam trūkst stabila balsta',
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

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Ne visos gadījumos kaula augmentācija ir vienīgais ceļš. Reizēm var izvēlēties citu
                  implantu, mainīt tā novietojumu vai izvēlēties alternatīvu zobu atjaunošanas plānu. Tāpēc ļoti svarīgi,
                  lai lēmums tiktu pieņemts nevis pēc vispārēja pieņēmuma, bet pēc precīziem diagnostikas datiem.
                </p>
                <p>
                  Ja kaula trūkums ir neliels, atsevišķos gadījumos kaula augmentāciju var veikt kopā ar
                  implantāciju. Ja kaula trūkums ir lielāks, vispirms tiek veikta kaula augmentācijas procedūra,
                  tiek sagaidīta dzīšana, un implantācija tiek plānota vēlāk.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KĀ TIEK NOTEIKTS */}
          <motion.section id="nustatymas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā tiek noteikts, vai kaula augmentācija ir nepieciešama?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Vienas apskates bieži nepietiek, lai izvērtētu, vai pacientam nepieciešama kaula augmentācija.
                  No ārpuses smaganas var izskatīties pietiekama apjoma, taču zem tām esošais kauls var būt
                  pārāk šaurs, pārāk zems vai nepiemērotas formas implantam.
                </p>
                <p>
                  Tāpēc, plānojot implantāciju, bieži tiek veikti radioloģiskie izmeklējumi, kas palīdz precīzi
                  izvērtēt kaula stāvokli. Viens no svarīgākajiem izmeklējumiem ir 3D rentgena izmeklējums vai
                  datortomogrāfija. Šis izmeklējums ļauj redzēt kaula augstumu, platumu, nervu gaitu, deguna blakusdobumu novietojumu un nākamo
                  implantu plānošanas iespējas.
                </p>
                <p>
                  Pēc diagnostikas datiem ārsts izvērtē, vai implantu var ievietot uzreiz, vai nepieciešama
                  papildu kaula atjaunošana. Tāpat tiek lemts, vai procedūru var veikt kopā ar
                  implantāciju, vai labāk to sadalīt atsevišķos posmos.
                </p>
                <p>
                  Šāda plānošana ir svarīga pacienta drošībai un ilglaicīgam rezultātam. Precīzi izvērtējot kaula
                  apjomu, var samazināt komplikāciju risku, izvēlēties piemērotu implantu pozīciju un ieplānot
                  protezēšanu tā, lai atjaunotais zobs būtu ne tikai stabils, bet arī estētiski saskanētu ar
                  smaidu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* METODES */}
          <motion.section id="metodai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kādi ir žokļa kaula augmentācijas veidi?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Žokļa kaula augmentācijas veids tiek izvēlēts individuāli, izvērtējot kaula trūkuma vietu,
                apjomu, nākamo implantu novietojumu un vispārējo mutes stāvokli. Vieniem pacientiem pietiek ar nelielu kaula
                apjoma atjaunošanu, citiem var būt nepieciešama sarežģītāka sagatavošanās implantācijai.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Kaula augmentācija viena vai vairāku zobu zonā</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tas ir viens no biežākajiem kaula augmentācijas veidiem, kad nepieciešams palielināt kaula platumu vai augstumu
                    konkrētā vietā. Šī metode tiek izmantota tad, kad plānotajam implantam trūkst stabila
                    balsta, taču kaula defekts nav ļoti liela apjoma.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Alveolas saglabāšana pēc zoba izraušanas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kad zobs tiek izrauts un nākotnē tiek plānota implantācija, var tikt veikta alveolas
                    saglabāšana. Pēc zoba izraušanas tā vietā tiek ievietots kaula aizvietotāja materiāls, kas palīdz
                    samazināt kaula apjoma zudumu dzīšanas laikā un atvieglot vēlāku implantācijas plānošanu.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Deguna blakusdobuma pacelšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Augšžokļa dzerokļu zonā dažreiz trūkst kaula augstuma tuvu esošā
                    augšžokļa deguna blakusdobuma dēļ. Šādā gadījumā var tikt veikta deguna blakusdobuma pacelšana – procedūra, kuras
                    laikā tiek radīts vairāk vietas kaula aizvietotājam un radīti apstākļi drošai implanta ievietošanai.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Kaula augmentācija kopā ar implantāciju</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ja kaula trūkums ir neliels un var nodrošināt implanta primāro stabilitāti, kaula augmentāciju
                    var veikt tās pašas procedūras laikā kā implantāciju. Tas ļauj saīsināt
                    ārstēšanas gaitu, taču šāds risinājums nav piemērots visos gadījumos.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Lielāka apjoma kaula atjaunošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kad kaula trūkums ir izteiktāks, var būt nepieciešama plašāka apjoma kaula atjaunošana.
                    Šādos gadījumos ārstēšana visbiežāk tiek plānota pa posmiem: vispirms tiek atjaunots kaula apjoms,
                    tiek sagaidīta dzīšana, un implantācija tiek veikta vēlāk.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* MATERIĀLI */}
          <motion.section id="medziagos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kādi materiāli tiek izmantoti kaula augmentācijai?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Kaula augmentācijai var tikt izmantoti dažādi materiāli. Piemērotākā izvēle ir atkarīga
                  no kaula trūkuma apjoma, vietas, pacienta veselības stāvokļa, plānotās implantācijas un
                  ārsta sastādītā ārstēšanas plāna.
                </p>
                <p>
                  Dažos gadījumos var tikt izmantots pacienta paša kauls. To var ņemt no
                  citas mutes zonas un izmantot tur, kur nepieciešams atjaunot kaula apjomu. Tas no bioloģiskā viedokļa ir
                  tuvs materiāls, taču tā izmantošana ir atkarīga no konkrētā defekta un procedūras apjoma.
                </p>
                <p>
                  Tāpat tiek izmantoti sintētiskie, donoru vai dzīvnieku izcelsmes kaula aizvietotāji. Šie materiāli
                  darbojas kā atbalsta struktūra, palīdzot organismam veidot jaunus kaulaudus. Dzīšanas laikā
                  pacienta audi pakāpeniski integrējas ar palielināto zonu.
                </p>
                <p>
                  Bieži tiek izmantotas arī speciālas membrānas. Tās palīdz aizsargāt palielināmo zonu, noturēt
                  kaula aizvietotāju vajadzīgajā vietā un radīt labākus apstākļus dzīšanai. Membrānu nepieciešamība
                  ir atkarīga no defekta izmēra un izvēlētās procedūras.
                </p>
                <p>
                  Pacientam nav nepieciešams iepriekš zināt visu materiālu atšķirības. Konsultācijas laikā ārsts
                  izskaidro, kādi materiāli tiek ieteikti konkrētā gadījumā, kāpēc tie tiek izvēlēti un kādu
                  dzīšanas procesu var sagaidīt.
                </p>
                <p>
                  Papildus ārsts izvērtē arī pacienta dzīšanas apstākļus: mutes higiēnu, smēķēšanas paradumus, vispārējo
                  veselības stāvokli, lietotos medikamentus un plānotās implantācijas laiku. Šie faktori var ietekmēt
                  to, cik raiti dzīst palielinātais kauls un kad var pāriet uz nākamo ārstēšanas posmu.
                  Tāpēc materiāla izvēle nav tikai tehnisks lēmums – tā vienmēr tiek saistīta ar visu ārstēšanas
                  gaitu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā tiek veikta žokļa kaula augmentācijas procedūra?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Žokļa kaula augmentācijas procedūra Bangų zobārstniecības klīnikā tiek plānota secīgi,
                balstoties uz diagnostikas datiem un individuālu pacienta situāciju. Precīza plānošana ļauj
                procedūru veikt drošāk un paredzēt turpmākos implantācijas posmus.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Konsultācija un diagnostika</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek izvērtēts pacienta mutes stāvoklis, trūkstošo zobu vieta, smaganas, sakodiens un vispārējā ārstēšanas
                    nepieciešamība. Nepieciešamības gadījumā tiek veikti radioloģiskie izmeklējumi, kas palīdz precīzi noteikt kaula
                    trūkuma apjomu.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">3D izmeklējuma izvērtēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Datortomogrāfijas vai cita 3D izmeklējuma dati ļauj izvērtēt kaula augstumu, platumu,
                    nervu, deguna blakusdobumu un citu anatomisko struktūru novietojumu. Šis posms ir īpaši svarīgs, plānojot drošu
                    implantāciju.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Ārstēšanas plāna sastādīšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pacientam tiek izskaidrots, vai nepieciešama kaula augmentācija, kāda metode ir piemērotākā un vai
                    implantāciju varēs veikt vienlaikus. Tiek apspriesta arī kaula augmentācijas cena, kas atkarīga
                    no procedūras apjoma, izmantotajiem materiāliem un papildu ārstēšanas posmiem.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Procedūras veikšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kaula augmentācija tiek veikta ar vietējo anestēziju, tāpēc procedūras laikā pacientam
                    nevajadzētu sajust sāpes. Ārsts sagatavo zonu, pielāgo izvēlēto kaula aizvietotāju vai citu
                    materiālu, nepieciešamības gadījumā izmanto membrānu un sašuj audus.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Dzīšanas periods</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pacientam tiek sniegti skaidri ieteikumi par uzturu, mutes higiēnu, fizisko slodzi,
                    medikamentu lietošanu un kontroles vizītēm. Dzīšanas laikā svarīgi ievērot ārsta norādījumus, nesmēķēt
                    un uzraudzīt pašsajūtu.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">06</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Implantācijas plānošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kad palielinātais kauls sadzīst un ir piemērots implantam, tiek plānots nākamais ārstēšanas posms. Dažos
                    gadījumos implantāciju var veikt kopā ar kaula augmentāciju, taču, ja
                    defekts ir lielāks, visbiežāk tiek gaidīti vairāki mēneši.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* BUJ */}
          <motion.section id="duk" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Biežāk uzdotie jautājumi par žokļa kaula augmentāciju</h2>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Vai kaula augmentācija vienmēr ir nepieciešama pirms implantācijas?</h3>
                  <p className="text-slate-600 text-sm">Ne vienmēr. Kaula augmentācija ir nepieciešama tikai tad, kad esošā kaula apjoma nepietiek drošai implanta ievietošanai. Ja kaula apjoms ir pietiekams, implantāciju var veikt bez papildu augmentācijas.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Vai kaula augmentāciju var veikt kopā ar implantāciju?</h3>
                  <p className="text-slate-600 text-sm">Dažos gadījumos jā. Ja kaula trūkums ir neliels un var nodrošināt implanta primāro stabilitāti, kaula augmentāciju var veikt vienlaikus ar implantāciju. Ja kaula trūkums ir lielāks, vispirms tiek veikta augmentācija, un implantācija tiek plānota pēc dzīšanas.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Vai žokļa kaula augmentācija ir sāpīga?</h3>
                  <p className="text-slate-600 text-sm">Procedūra tiek veikta ar vietējo anestēziju, tāpēc tās laikā sāpēm nevajadzētu būt. Pēc procedūras var būt pietūkums, smelgšana, jutīgums vai zilumi. Tā visbiežāk ir normāla dzīšanas daļa, kas tiek kontrolēta ar ārsta ieteikumiem un izrakstītajiem medikamentiem.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Cik ilgi dzīst kauls pēc augmentācijas?</h3>
                  <p className="text-slate-600 text-sm">Dzīšanas ilgums ir atkarīgs no procedūras apjoma, vietas, pacienta veselības, mutes higiēnas un izvēlētās metodes. Mazāki defekti var dzīt ātrāk, savukārt lielāka apjoma kaula augmentācijai var būt nepieciešami vairāki mēneši, līdz varēs plānot implantāciju.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Kādas ir iespējamās kaula augmentācijas komplikācijas?</h3>
                  <p className="text-slate-600 text-sm">Kā pēc jebkuras ķirurģiskas procedūras, iespējamās kaula augmentācijas komplikācijas var būt infekcija, ieilgusi pietūkuma saglabāšanās, asiņošana, sāpes, brūces dzīšanas traucējumi vai nepietiekama kaula integrācija. Komplikāciju risku mazina precīza diagnostika, atbilstoša procedūras plānošana, ārsta ieteikumu ievērošana un laba mutes higiēna.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">No kā ir atkarīga žokļa kaula augmentācijas cena?</h3>
                  <p className="text-slate-600 text-sm">Žokļa kaula augmentācijas cena ir atkarīga no kaula trūkuma apjoma, izvēlētās metodes, izmantotajiem materiāliem, procedūras sarežģītības un tā, vai tā tiek veikta kopā ar implantāciju. Precīza cena tiek noteikta konsultācijas laikā, izvērtējot pacienta mutes stāvokli un sastādot individuālu ārstēšanas plānu.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KĀPĒC IZVĒLĒTIES */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc vērts izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Izvēloties žokļa kaula augmentāciju, svarīga ir ne tikai pati ķirurģiskā procedūra, bet arī viss
                  sagatavošanās implantācijai process – no precīzas diagnostikas līdz dzīšanas kontrolei un turpmākajam
                  zobu atjaunošanas plānam. Bangų zobārstniecības klīnikā Klaipēdā kaula augmentācija tiek plānota
                  individuāli, izvērtējot pacienta kaula apjomu, smaganu stāvokli, sakodienu un nākamo implantu novietojumu.
                </p>
                <p>
                  Klīnikā liela uzmanība tiek pievērsta individuālai plānošanai. Pirms ārstēšanas uzsākšanas tiek veikta
                  detalizēta diagnostika, kas palīdz precīzi izvērtēt, vai kaula augmentācija ir nepieciešama, kāda metode
                  var būt nepieciešama un kad varētu plānot implantāciju. Šāda pieeja ļauj pacientam skaidri
                  saprast ārstēšanas gaitu, iespējamos posmus un pieņemt informētu lēmumu.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā pacientam skaidri tiek izskaidrots, kā notiek procedūra, kādi
                  materiāli var tikt izmantoti un ko sagaidīt pēc kaula augmentācijas operācijas. Pēc ārstēšanas
                  tiek sniegti ieteikumi par dzīšanu, higiēnu, uzturu un kontroles vizītēm, lai tiktu radīti
                  pēc iespējas labāki apstākļi raitai dzīšanai un turpmākai zobu atjaunošanai ar implantiem.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties žokļa kaula augmentācijai Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja Jums tika ieteikta kaula augmentācija pirms implantācijas vai vēlaties uzzināt, vai Jūsu
                  žokļa kaula pietiek drošai implantācijai, aicinām pierakstīties konsultācijai Bangų zobārstniecības
                  klīnikā. Vizītes laikā tiks izvērtēts Jūsu kaula stāvoklis un apspriestas piemērotākās ārstēšanas iespējas.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā mēs tiecamies, lai implantācijas sagatavošana būtu skaidra, rūpīgi ieplānota un
                  cik vien iespējams mazāk stresu radoša. Šeit Jūs sagaida pieredzējuši speciālisti, moderna iekārta un rūpīga pieeja
                  katram pacientam.
                </p>
                <p>
                  Pierakstieties un speriet pirmo soli uz stabilu pamatu Jūsu nākamajam implantam.
                </p>
              </div>

              <Link
                to="/lv/kontakti"
                className="btn-primary btn-glow rounded-full px-8 py-4 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Pierakstīties vizītei
              </Link>
            </div>
          </motion.div>


        </div>
      </motion.div>
    </AnimatedSection>
  )
}
