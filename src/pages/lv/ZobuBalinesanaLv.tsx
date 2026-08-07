import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { useRef } from 'react'
import { TableOfContents } from '../../components/TableOfContents'
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
  { id: "cenas", label: "Cenas" },
  { id: "kas-ir", label: "Kas ir balināšana?" },
  { id: "beyond", label: "BEYOND® sistēma" },
  { id: "beyond-priekshrocibas", label: "BEYOND® priekšrocības" },
  { id: "majas", label: "Balināšana mājās" },
  { id: "vai-drosi", label: "Vai balināšana ir droša?" },
  { id: "process", label: "Kā notiek procedūra?" },
  { id: "pec-balinesanas", label: "Pēc balināšanas" },
  { id: "rezultats", label: "Rezultāta ilgums" },
  { id: "kam-nav-piemerota", label: "Kam nav piemērota?" },
  { id: "miti", label: "Mīti" },
]

export default function ZobuBalinesanaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/zobu-balinesana/#service`,
    "name": "Zobu balināšana Klaipēdā",
    "serviceType": "Zobu balināšana",
    "description": "Zobu balināšanas pakalpojums tiek sniegts Bangų zobārstniecības klīnikā Klaipēdā. Pakalpojums paredzēts pacientiem, kuri vēlas gaišāku un estētiskāku smaidu.",
    "url": `${SITE_URL}/lv/pakalpojumi/zobu-balinesana/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Zobu balināšana Klaipēdā"
        description="Zobu balināšana Klaipēdā par pieejamu cenu — drošs un efektīvs veids, kā paspilgtināt zobus un atjaunot estētisku smaidu. Reģistrējieties Bangų klīnikā."
        keywords="zobu balināšana, beyond sistēma, balināšanas kapas, zobu estētika, Klaipēda"
        canonical={`${SITE_URL}/lv/pakalpojumi/zobu-balinesana`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-balinimas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/zobu-balinesana` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-balinimas` },
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
        <TableOfContents sections={tocSections} rootRef={pageRef} cta={{ label: "Reģistrēties vizītei", to: "/lv/kontakti" }} />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Zobu balināšana Klaipēdā
            </h1>

            <div className="mb-8">
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p>
                  Zobu krāsa laika gaitā var mainīties dažādu iemeslu dēļ — uztura ieradumu, smēķēšanas, vecuma vai atsevišķu medikamentu iedarbības dēļ. Pat rūpīga ikdienas mutes kopšana ne vienmēr ļauj atjaunot dabisku zobu baltumu, tāpēc profesionāla zobu balināšana kļūst par vienu no efektīvākajiem estētiskajiem risinājumiem.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā veiktā zobu balināšana palīdz droši un ātri sasniegt manāmu rezultātu. Izmantotās modernās balināšanas metodes ļauj paspilgtināt zobus par vairākiem nokrāsu toņiem, saglabājot emaljas drošību un komfortu procedūras laikā. Pirms katras balināšanas tiek novērtēts individuāls mutes stāvoklis, tāpēc katram pacientam tiek izvēlēts vispiemērotākais risinājums.
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <Link to="/lv/kontakti" className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                Reģistrēties vizītei
              </Link>
            </div>

            {/* CENAS */}
            <motion.section id="cenas" className="mt-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
              <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                      Zobu balināšanas cenas
                    </h2>
                    <p className="text-slate-600">
                      Zobu balināšanas cena atkarīga no izvēlētās balināšanas metodes, procedūras apjoma un individuālām pacienta vajadzībām. Pirms balināšanas vienmēr ieteicama konsultācija, kuras laikā tiek novērtēts zobu stāvoklis un izvēlēts vispiemērotākais risinājums, kas ļauj sasniegt drošu un ilgtermiņa rezultātu.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Balināšana klīnikā</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Ofisā veikta zobu balināšana ar BEYOND® sistēmu', 'no 250 €'],
                      ].map(([name, price], i) => (
                        <div key={i} className="flex justify-between items-center py-2.5">
                          <span className="text-slate-600 text-sm">{name}</span>
                          <span className="font-bold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Balināšana mājās un papildu</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Balināšanas kapu nospiedumi', 'no 30 €'],
                        ['Balināšanas kapas ar gelu (2 gab. + gels)', 'no 200 €'],
                        ['Zoba rotas nostiprināšana', 'no 50 €'],
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
                  Precīzu zobu balināšanas cenu apspriež individuālas konsultācijas laikā, ņemot vērā izvēlēto metodi, zobu stāvokli un vēlamo rezultātu. Caurredzama cenu politika ļauj pacientiem pieņemt pārliecinātu lēmumu par zobu balināšanu Klaipēdā.
                </p>
              </div>
            </motion.section>
          </motion.header>

          {/* DOCTOR CTA */}
          <motion.div className="mt-8 mb-12" variants={item}>
            <div className="bg-white rounded-[28px] border border-sky-200 shadow-soft overflow-hidden">
              <div className="grid lg:grid-cols-[5fr_4fr] gap-0 items-stretch">
                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-darkblue-700 mb-4">
                    Aicinām reģistrēties konsultācijai Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām reģistrēties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā novērtēsim Jūsu mutes stāvokli, atbildēsim uz jautājumiem un palīdzēsim saprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mēs cenšamies, lai katrs pacients justos pārliecināti — no pirmās konsultācijas līdz galīgajam rezultātam. Reģistrējieties un speriet pirmo soli uz veselīgu smaidu.
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
                <div className="relative aspect-[4/5] bg-sky-50">
                  <div className="pt-[125%]" />
                  <img
                    src="/team/Rūta_light%20LV.jpg"
                    alt="Bangų zobārstniecības klīnikas ārsts"
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

          {/* KAS IR BALINĀŠANA */}
          <motion.section id="kas-ir" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas ir zobu balināšana?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu balināšana ir estētiska zobārstniecības procedūra, kuras laikā ar īpašām ierīcēm tiek noņemti zobu emaljā uzkrājušies pigmenti, kas rada zobu aptumšošanos vai iedzelteošanos. Atšķirībā no virsmas aplikumu noņemšanas, balināšanas laikā tiek iedarbots uz dziļāku zoba struktūru, tāpēc rezultāts ir izteiktāks un ilgstošāks.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā tiek izmantotas vairākas zobu balināšanas metodes, ņemot vērā pacienta vajadzības un vēlmes. Viens no progresīvākajiem risinājumiem — ofisā veikta zobu balināšana ar BEYOND® sistēmu, ko veic zobārsta kabinetā. Tā ir speciāla balināšanas procedūra ar gaismas filtrāciju, kas nodrošina ātru un drošu rezultātu. Izmantotā BEYOND® ACCELERATOR halogēna lampa izdala mazāku temperatūru, tāpēc procedūra ir ērtāka, un zobu jutīguma risks — mazāks. Balināšanas rezultāts ir redzams uzreiz pēc procedūras.
                </p>
                <p>
                  Tiem pacientiem, kuri vēlas balināt zobus pakāpeniski, tiek piedāvāta balināšana ar kapām mājās. Šīs metodes laikā tiek izgatavotas individuālas kapas, kuras tiek lietotas ar speciāliem balināšanas geliem. Pirms balināšanas mājās ir ieteicams veikt profesionālo mutes higiēnu, lai iegūtu labāku un vienmērīgāku rezultātu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* BEYOND SISTĒMA */}
          <motion.section id="beyond" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                    Zobu balināšana ar BEYOND® sistēmu
                  </h2>
                  <div className="space-y-4 text-slate-700 leading-relaxed">
                    <p>
                      Ofisā veikta zobu balināšana ar BEYOND® sistēmu tiek veikta zobārsta kabinetā un tiek uzskatīta par vienu no progresīvākajām profesionālās balināšanas metodēm. Procedūras laikā tiek izmantots speciāls balinošais gels un BEYOND® ACCELERATOR halogēna lampa, kas aktivizē balināšanas procesu, vienlaikus nodrošinot maksimālu drošību zobu emaljai.
                    </p>
                    <p>
                      Šī sistēma izceļas ar to, ka balināšanas laikā tiek izmantota gaismas filtrācija, kas ļauj samazināt izdalāmo siltumu. Tāpēc procedūra ir ērtāka pacientam, un zobu jutīguma risks — ievērojami mazāks, salīdzinot ar dažām citām balināšanas metodēm. Visa procedūra ilgst apmēram 45 minūtes, un rezultāts visbiežāk ir pamanāms uzreiz pēc pirmās sesijas.
                    </p>
                    <p>
                      Zobu balināšana Klaipēdā ar BEYOND® sistēmu īpaši piemērota pacientiem, kuri vēlas ātru un izteiktu rezultātu, piemēram, pirms svarīgām personiskām vai profesionālām reizēm. Pirms procedūras tiek novērtēts zobu stāvoklis, tāpēc balināšana tiek veikta tikai tad, kad tā ir droša un piemērota konkrētajam pacientam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KĀPĒC IZVĒLĒTIES BEYOND */}
          <motion.section id="beyond-priekshrocibas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Kāpēc izvēlēties BEYOND® zobu balināšanu?
              </h2>

              <p className="text-slate-700 mb-6 leading-relaxed">
                BEYOND® sistēma pasaulē tiek atzīta kā viena no vadošajām zobu estētikas jomā. Šī balināšanas metode tiek izvēlēta uzticamības, prognozējama rezultāta un komforta procedūras laikā dēļ.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  "BEYOND® — pasaules zobu estētikas līderis",
                  "Manāmi rezultāti jau pēc vienas procedūras",
                  "Lieliska izvēle, gatavojoties īpašiem gadījumiem",
                  "Piemērota dažādas izcelsmes plankumiem (tetraciklīna, fluora u.c.)",
                  "Procedūra vienkārša un nesāpīga (apmēram 45 min.)",
                  "Ilgtermiņa efekts — rezultāti bieži saglabājas līdz 2 gadiem"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="mt-1"><CheckIcon /></span>
                    <span className="text-slate-700 text-sm">{text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <p className="text-slate-700 text-sm">
                  <strong>Svarīgi:</strong> Pēc BEYOND® zobu balināšanas ļoti svarīgi ievērot speciālista ieteikumus. Pirmās 24 stundas pēc procedūras ir ieteicams izvairīties no kafijas, tabakas, krāsojošiem dzērieniem un ēdiena, kā arī no krāsotām zobu pastām vai mutes skalošanas šķīdumiem. Tas palīdz saglabāt sasniegto rezultātu un nodrošina vienmērīgāku zobu nokrāsu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* BALINĀŠANA MĀJĀS */}
          <motion.section id="majas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Zobu balināšana ar kapām mājās
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Pacientiem, kuri vēlas balināt zobus pakāpeniski un elastīgāk, Bangų zobārstniecības klīnikā tiek piedāvāta zobu balināšana ar kapām mājās. Šī metode ļauj sasniegt vienmērīgu rezultātu ilgākā laika periodā, veicot balināšanu ērti mājas apstākļos.
                </p>
                <p>
                  Balināšana ar kapām sākas klīnikā, kur pēc individuālas pacienta zobu nospieduma tiek izgatavotas personiski pielāgotas kapas. Vienlaicīgi tiek izvēlēts piemērots balināšanas gels un sniegtas izsmeļošas lietošanas instrukcijas. Tā tiek nodrošināts, ka balināšana ir droša, efektīva un pielāgota konkrētajam zobu stāvoklim.
                </p>

                <div className={innerCard + ' my-4'}>
                  <h3 className="font-semibold text-darkblue-700 mb-2">Šī balināšanas metode bieži tiek izvēlēta pacientu, kuri:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    <li>vēlas pakāpenisku un kontrolētu rezultātu</li>
                    <li>ir jutīgāki zobi</li>
                    <li>vēlas saglabāt vai pastiprināt jau veiktās ofisā balināšanas efektu</li>
                  </ul>
                </div>

                <p>
                  Pirms balināšanas ar kapām sākuma ieteicams veikt profesionālo mutes higiēnu, lai balināšanas gels iedarbotos vienmērīgi, un rezultāts būtu estētiski vienāds.
                </p>
              </div>
            </div>
          </motion.section>

          {/* DROŠĪBA */}
          <motion.section id="vai-drosi" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Vai zobu balināšana ir droša?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Mūsdienu profesionāla zobu balināšana, ko veic zobārsta uzraudzībā, tiek uzskatīta par drošu procedūru, ja tiek ievēroti noteikti protokoli un individuāli izvēlēta metode. Bangų zobārstniecības klīnikā tiek izmantotas uzticamas, klīniski pārbaudītas balināšanas sistēmas, tādas kā BEYOND®, kas veidotas tā, lai maksimāli aizsargātu zobu emalju.
                </p>
                <p>
                  Viena no biežākajām pacientu bažām — vai balināšana nebojā zobus. Pareizi veikta balināšana neārda emaljas struktūru, un iespējamais īslaicīgs zobu jutīgums visbiežāk pāriet īsā laikā. BEYOND® sistēmā izmantotā gaismas filtrācija ļauj samazināt procedūras laikā izdalāmo siltumu, tāpēc diskomforts un jutīguma risks ir mazāki.
                </p>
                <p>
                  Svarīgi uzsvērt, ka lielākie riski rodas nevis profesionālas balināšanas, bet gan nekontrolētas vai nepiemērotas balināšanas mājās, izmantojot neskaidras izcelsmes ierīces, dēļ. Tāpēc pirms lēmuma balināt zobus ieteicams konsultēties ar zobārstu, kas novērtēs situāciju un piedāvās drošāko risinājumu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESS */}
          <motion.section id="process" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Kā notiek zobu balināšanas procedūra klīnikā?
              </h2>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Lai sasniegtu drošu un prognozējamu rezultātu, zobu balināšana Bangų zobārstniecības klīnikā tiek veikta pēc skaidras un pacientam saprotamas gaitas. Pirms konkrētās balināšanas metodes izvēles vienmēr tiek novērtēts individuālais mutes stāvoklis.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">1. Konsultācija un novērtējums</h3>
                  <p className="text-sm text-slate-600">Zobārsts apskata zobus, novērtē emaljas stāvokli, restaurācijas un piemērotību. Tiek apspriestas vēlmes.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">2. Sagatavošanās balināšanai</h3>
                  <p className="text-sm text-slate-600">Ja nepieciešams, tiek veikta profesionāla higiēna aplikumu noņemšanai un vienmērīgam efektam.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">3. Balināšanas procedūra</h3>
                  <p className="text-sm text-slate-600">Tiek veikta ofisā BEYOND® procedūra vai izsniegtas kapas ar instrukcijām.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">4. Ieteikumi pēc balināšanas</h3>
                  <p className="text-sm text-slate-600">Tiek sniegtas instrukcijas, kā kopt zobus, lai rezultāts būtu ilgmūžīgs.</p>
                </div>
              </div>

              <p className="text-slate-700 mt-6 leading-relaxed">
                Šāds secīgs process ļauj nodrošināt, ka zobu balināšana Klaipēdā ir ne tikai efektīva, bet arī droša un pielāgota katram pacientam.
              </p>
            </div>
          </motion.section>

          {/* PĒC BALINĀŠANAS */}
          <motion.section id="pec-balinesanas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Kas svarīgi zināt pēc zobu balināšanas?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Pēc profesionālas zobu balināšanas zobi kļūst manāmi gaišāki, taču pirmajās dienās pēc procedūras emalja var būt jutīgāka pret ārējiem faktoriem. Tā ir normāla un īslaicīga reakcija, kas visbiežāk pāriet īsā laikā. Lai saglabātu sasniegto balināšanas rezultātu un samazinātu iespējamo jutīgumu, svarīgi ievērot zobārsta sniegtos ieteikumus.
                </p>
                <p>
                  Pirmās 24 stundas pēc balināšanas ieteicams izvairīties no krāsojošiem produktiem, tādiem kā kafija, tēja, sarkanvīns, krāsainiem dzērieniem vai intensīva pigmenta saturošu ēdienu. Arī ieteicams nesmēķēt un nelietot krāsotas zobu pastas vai mutes skalošanas šķīdumus, kas var ietekmēt zobu nokrāsu.
                </p>
                <p>
                  Ikdienas mutes kopšanai pēc balināšanas jābūt maigai un konsekventai. Ieteicams tīrīt zobus ar mīkstu suku, lietot jutīgiem zobiem paredzētu zobu pastu un izvairīties no pārmērīga spiediena. Ja zobārsts iesaka papildu ierīces, piemēram, remineralizējošus gelus, svarīgi tos lietot saskaņā ar norādījumiem.
                </p>
                <p>
                  Ievērojot šos ieteikumus, balināšanas rezultāts saglabājas ilgāk, un zobu jutīgums — samazinās. Regulāras profilaktiskas vizītes un pareiza ikdienas kopšana palīdz saglabāt estētisku smaidu un ilgtermiņa zobu baltumu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* REZULTĀTA ILGUMS */}
          <motion.section id="rezultats" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Cik ilgi saglabājas zobu balināšanas rezultāts?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu balināšanas rezultāta saglabāšanās ir atkarīga no vairākiem faktoriem, tāpēc katra pacienta pieredze var atšķirties. Vidēji profesionālas balināšanas rezultāts saglabājas no viena līdz diviem gadiem, taču pareiza kopšana var pagarināt šo laika periodu.
                </p>
                <p>
                  Vislielāko ietekmi uz balināšanas efekta ilgumu atstāj ikdienas ieradumi. Bieža kafijas, tējas, sarkanvīna lietošana, smēķēšana vai intensīvi krāsojošs ēdiens var ātrāk mainīt zobu nokrāsu. Tāpat svarīga ir regulāra mutes higiēna un profilaktiskās vizītes, kas palīdz uzturēt tīras zobu virsmas.
                </p>
                <p>
                  Ofisā veikta zobu balināšana ar BEYOND® sistēmu visbiežāk sniedz izteiktāku un ātrāku rezultātu, savukārt balināšana ar kapām mājās var tikt izmantota kā atbalsta ierīce, kas palīdz saglabāt sasniegto zobu krāsu ilgāku laiku. Zobārsts, novērtējot individuālo situāciju, var ieteikt optimālu balināšanas atkārtošanas intervālu vai papildu kopšanas ierīces.
                </p>
                <p>
                  Svarīgi saprast, ka zobu balināšana nav vienreizējs risinājums visam mūžam — tas ir process, kura rezultāts ir atkarīgs no ilgtermiņa kopšanas un pacienta ieradumiem.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAM NEPIEMĒROTA */}
          <motion.section id="kam-nav-piemerota" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Kam zobu balināšana nav piemērota?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Lai gan zobu balināšana ir droša un efektīva estētiska procedūra, tā ne vienmēr piemērota katram pacientam. Pirms balināšanas veikšanas Bangų zobārstniecības klīnikā vienmēr tiek novērtēts individuālais mutes stāvoklis, lai procedūra būtu ne tikai efektīva, bet arī droša.
                </p>

                <div className="bg-red-50 p-6 rounded-2xl border border-red-200 shadow-soft">
                  <h3 className="font-semibold text-red-800 mb-2">Zobu balināšana var būt neieteicama vai atlikta, ja:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-red-900/80">
                    <li>ir konstatēts aktīvs kariess vai citas neārstētas zobu slimības</li>
                    <li>ir smaganu iekaisums vai periodonta slimības, kas vispirms jāārstē</li>
                    <li>zobu emalja ir ļoti plāna vai bojāta, tāpēc palielinās jutīguma risks</li>
                    <li>priekšējā zonā ir plombas, kronīši vai lāminas, kuru krāsa pēc balināšanas nemainās</li>
                    <li>paciente ir grūtniecības vai zīdīšanas periodā, kad estētiskās procedūras visbiežāk tiek atliktas</li>
                  </ul>
                </div>

                <p>
                  Šādos gadījumos zobārsts piedāvā alternatīvus risinājumus vai iesaka vispirms veikt ārstniecības procedūras. Atbildīgs novērtējums palīdz izvairīties no nevēlamiem rezultātiem un nodrošina, ka zobu balināšana tiek veikta tikai tad, kad tā patiešām ir piemērota.
                </p>
              </div>
            </div>
          </motion.section>

          {/* MĪTI */}
          <motion.section id="miti" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Biežākie mīti par zobu balināšanu
              </h2>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mīts #1: pēc balināšanas zobi kļūst vājāki</h3>
                  <p className="text-slate-600 text-sm">Balināšana nemaina zoba izturību vai stiprumu. Pareizi veikta procedūra nevājina zobus, un izmantotās papildu kopšanas ierīces var pat palīdzēt pastiprināt emaljas virsmu.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mīts #2: zobu balināšana bojā zobu emalju</h3>
                  <p className="text-slate-600 text-sm">Profesionāla zobu balināšana, ko veic zobārsta uzraudzībā, nebojā zobu emalju. Mūsdienu balināšanas sistēmas, tādas kā BEYOND®, ir veidotas tā, lai iedarbotos uz pigmentiem, bet saglabātu dabisko emaljas struktūru.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mīts #3: zobu balināšana vienmēr ir sāpīga</h3>
                  <p className="text-slate-600 text-sm">Vairums pacientu zobu balināšanu apraksta kā ērtu procedūru. Mūsdienu metodes ļauj samazināt diskomfortu, un ja jutīgums arī izpaužas, tas visbiežāk ir īslaicīgs.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mīts #4: visu cilvēku zobi balinās vienādi</h3>
                  <p className="text-slate-600 text-sm">Rezultāts ir individuāls un atkarīgs no sākotnējās krāsas, emaljas struktūras un pigmentācijas izcelsmes. Pirms procedūras vienmēr tiek apspriestas reālas cerības.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mīts #5: balināšana ietekmē plombas un kronīšus</h3>
                  <p className="text-slate-600 text-sm">Balināšanas ierīces iedarbojas tikai uz dabīgo zoba audu — plombas, kronīši vai lāminas nebalinās. Tāpēc svarīgi novērtēt restaurācijas pirms balināšanas.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KĀPĒC MĒS */}
          <motion.section className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Izvēloties zobu balināšanas pakalpojumus, svarīgs ir ne tikai pats rezultāts, bet arī procedūras drošība, izmantotās tehnoloģijas un speciālistu pieredze. Bangų zobārstniecības klīnikā zobu balināšana tiek veikta, izmantojot modernas un uzticamas metodes, kas nodrošina estētisku, taču zobu emaljai drošu rezultātu.
                </p>
                <p>
                  Klīnikā strādājošie speciālisti individuāli novērtē katra pacienta zobu stāvokli un vēlmes, tāpēc tiek izvēlēta vispiemērotākā balināšanas metode — ofisā balināšana ar BEYOND® sistēmu vai balināšana ar kapām mājās. Liela uzmanība tiek pievērsta ne tikai pašai procedūrai, bet arī ieteikumiem pēc tās, lai sasniegtais rezultāts saglabātos pēc iespējas ilgāk.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā tiek izmantotas progresīvas tehnoloģijas, skaidri izskaidrota ārstēšanas gaita un nodrošināta caurredzama cenu politika. Šāda pieeja ļauj pacientiem justies mierīgi un pārliecināti, un pozitīvās zobu balināšanas atsauksmes bieži uzsver profesionālu komunikāciju, komfortu procedūras laikā un iepriecinošu galīgo rezultātu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām reģistrēties zobu balināšanai Bangų klīnikā
              </h2>
              <p className="text-slate-700 mb-8 max-w-3xl leading-relaxed">
                Ja meklējat uzticamu un profesionālu zobārstniecības klīniku, kurā tiek veikta droša un efektīva zobu balināšana Klaipēdā, aicinām apmeklēt Bangų zobārstniecības klīniku. Mūsu pacienti novērtē ne tikai redzamas estētiskas izmaiņas, bet arī skaidras konsultācijas, uzmanīgu pieeju un ilgtermiņa rezultātu, ko apstiprina viņu atsauksmes.
                <br /><br />
                Bangų zobārstniecības klīnikā Jūs sagaida modernas balināšanas tehnoloģijas, pieredzējuši speciālisti un individuāli risinājumi, pielāgoti katram pacientam. Reģistrējieties konsultācijai un speriet pirmo soli uz gaišāku, pašpārliecinātību sniedzošu smaidu.
              </p>
              <Link to="/lv/kontakti" className="btn-primary btn-glow rounded-full px-8 py-4 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1">
                Reģistrēties vizītei
              </Link>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </AnimatedSection>
  )
}
