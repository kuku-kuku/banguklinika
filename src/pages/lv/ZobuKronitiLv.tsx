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
  { id: 'kas-yra', label: 'Kas ir zobu kronīši?' },
  { id: 'taikymo-situacijos', label: 'Kad tie ir nepieciešami?' },
  { id: 'problemos', label: 'Kādas problēmas risina?' },
  { id: 'medziagos', label: 'Izmantotie materiāli' },
  { id: 'procesas', label: 'Kā notiek procedūra?' },
  { id: 'skausmas', label: 'Vai tas ir sāpīgi?' },
  { id: 'prieziura', label: 'Kopšana un kalpošanas laiks' },
  { id: 'kada-negalima', label: 'Kad kronītis vairs nav iespējams?' },
  { id: 'mitai', label: 'Biežākie mīti' },
  { id: 'duk', label: 'Biežāk uzdotie jautājumi' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function ZobuKronitiLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/zobu-kroniti/#service`,
    "name": "Zobu kronīši Klaipēdā",
    "serviceType": "Zobu kronīši",
    "description": "Zobu kronīšu pakalpojums tiek sniegts Bangų zobārstniecības klīnikā Klaipēdā. Klīnikā tiek veikta bojāto vai novājināto zobu atjaunošana ar fiksētām protēzēm.",
    "url": `${SITE_URL}/lv/pakalpojumi/zobu-kroniti/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": `${SITE_URL}/#dentist` },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        title="Zobu kronīši Klaipēdā - Bangų klīnika"
        description="Bojāts vai novājināts zobs? Zobu kronīši Klaipēdā☑️stipri☑️estētiski atjauno zobu jau no 400€.⏩Piesakieties konsultācijai Bangų klīnikā."
        keywords="zobu kroniti, cirkonija kronitis, klaipeda, zobu protezesana"
        lang="lv"
        canonical={`${SITE_URL}/lv/pakalpojumi/zobu-kroniti`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-karunieles` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/zobu-kroniti` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-karunieles` },
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
              Zobu kronīši Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Zobu bojājumi, nodilums vai spēcīgāks zoba audu zudums ir biežākie iemesli,
                  kāpēc pacientiem nepieciešami protezēšanas risinājumi. Šādos gadījumos zoba struktūra kļūst
                  nepietiekami stipra, lai varētu izturēt ikdienas košļājamo slodzi, tāpēc nepieciešama papildu
                  zoba nostiprināšana un atjaunošana. Laikus uzliktie zobu kronīši ļauj atjaunot ne tikai
                  zoba funkciju, bet arī estētisko izskatu, izvairoties no turpmākām komplikācijām vai zoba zaudēšanas.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā zobu kronīšu protezēšana tiek veikta, balstoties uz
                  individuālu ārstēšanas plānu un digitālām tehnoloģijām, kas ļauj precīzi novērtēt
                  pacienta mutes stāvokli. Katrs zoba kronītis tiek pielāgots konkrētai situācijai,
                  ņemot vērā sakodienu, zobu novietojumu un estētisko nepieciešamību. Klīnikas speciālisti cenšas nodrošināt,
                  lai gala rezultāts būtu ne tikai funkcionāls, bet arī dabiski izskatītos, tāpēc katrs
                  protezēšanas posms ir rūpīgi ieplānots un kontrolēts. Šāda pieeja ļauj pacientiem
                  justies pārliecinātiem visā ārstēšanas procesa laikā.
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

            {/* KAINOS */}
            <motion.section id="kainos" className="mt-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
              <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                      Zobu kronīšu cenas
                    </h2>
                    <p className="text-slate-600">
                      Zobu kronīša cena ir atkarīga no izvēlētā materiāla, zoba novietojuma un no tā, vai kronītis tiek stiprināts uz dabiskā zoba vai uz implanta. Pirms izgatavošanas vienmēr tiek veikta konsultācija, kuras laikā tiek pārrunātas visas iespējas un izvēlēts piemērotākais risinājums.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Zobu kronīši</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Kronītis uz zoba', '400 €'],
                        ['Kronītis uz implanta', '450 €'],
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
                  Sagatavošanas darbi, piemēram, zoba vainaga atjaunošana, zoba slīpēšana vai nospiedumu ņemšana, tiek aprēķināti atsevišķi.
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
                    Ja Jums ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā novērtēsim Jūsu mutes stāvokli, atbildēsim uz interesējošajiem jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mēs cenšamies, lai katrs pacients justos pārliecināts – no pirmās konsultācijas līdz gala rezultātam. Pierakstieties un speriet pirmo soli ceļā uz veselīgu smaidu.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts detalizēts klīniskais novērtējums',
                        'tiek pārrunātas iespējamās ārstēšanas metodes',
                        'tiek paskaidroti procedūras posmi un termiņi',
                        'tiek sastādīts individuāls ārstēšanas plāns',
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
                <div className="relative lg:aspect-[4/5] bg-sky-50 min-h-[300px]">                  <img
                    src="/team/Jonas-light%20LV.jpg"
                    alt="Bangų zobārstniecības klīnikas ārsts"
                    className="absolute inset-0 w-full h-full object-cover lg:object-contain"
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

          {/* KAS YRA KARŪNĖLĖS */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir zobu kronīši?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu kronīši ir fiksēts zobu protezēšanas risinājums,
                  kas paredzēts stipri bojāta vai novājināta zoba struktūras atjaunošanai. Tas ir individuāli izgatavots
                  zoba apvalks, kas tiek uzlikts uz noslīpēta dabiskā zoba vai implanta atbalsta,
                  pilnībā atjaunojot tā formu, krāsu un funkciju. Zobu kronīši ļauj saglabāt dabisko
                  sakni vai implantu, vienlaikus atjaunojot pilnvērtīgu košļājamo efektivitāti.
                </p>
                <p>
                  Šī ārstēšanas metode tiek pielietota tad, kad parastā plombēšana vairs nespēj nodrošināt pietiekamu zoba
                  stiprību. Kronītis darbojas kā aizsargslānis, kas sadala košļājamo slodzi un samazina
                  zoba lūzuma risku. Papildus funkcionālajam ieguvumam zoba kronītis atjauno arī estētisko smaida
                  izskatu, tāpēc tas tiek plaši izmantots gan priekšējo, gan sānu zobu zonā.
                </p>
                <p>
                  Mūsdienu zobārstniecībā zobu kronīši tiek izgatavoti no progresīviem materiāliem, kas ļauj sasniegt
                  dabisku caurspīdīgumu un stiprību. Tas nodrošina, ka atjaunotais zobs vizuāli neatšķiras no
                  dabiskajiem zobiem, un pacients var justies komfortabli ikdienas darbībās.
                </p>
              </div>
            </div>
          </motion.section>

          {/* TAIKYMO SITUACIJOS */}
          <motion.section id="taikymo-situacijos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kad nepieciešami zobu kronīši?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zobu kronīši tiek pielietoti tad, kad dabiskā zoba audu vairs nepietiek pilnvērtīgas funkcijas
                nodrošināšanai. Tā nav pirmās izvēles procedūra – tā tiek rekomendēta tikai tad, kad parastā
                plombēšana vairs nespēj sniegt ilgtermiņa risinājumu.
              </p>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-darkblue-700">Biežākās situācijas:</h3>
                <div className="grid gap-3">
                  {[
                    'stipri bojāts zobs kariesa dēļ',
                    'zoba lūzums vai plaisa',
                    'lielas vecas plombas, kas vājina zobu',
                    'zobs pēc saknes kanālu ārstēšanas',
                    'spēcīgs zobu nodilums bruksisma dēļ',
                    'zoba formas vai krāsas estētiskā korekcija',
                    'zoba atjaunošana uz implanta',
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

              <p className="text-slate-700 leading-relaxed">
                Katrā gadījumā lēmums tiek pieņemts individuāli, novērtējot zoba saknes stāvokli un vispārējo
                mutes situāciju. Svarīgākais mērķis ir saglabāt dabisko zobu tiktāl, cik tas medicīniski
                iespējams.
              </p>
            </div>
          </motion.section>

          {/* PROBLEMOS */}
          <motion.section id="problemos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kādas problēmas palīdz atrisināt zobu kronīši?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zobu kronīši ir viens no universālākajiem protezēšanas risinājumiem zobārstniecībā, jo tie ļauj vienlaikus
                atjaunot gan zoba funkciju, gan estētiku, gan strukturālo stiprību. Tie tiek pielietoti tajos
                gadījumos, kad dabiskā zoba audu vairs nepietiek uzticamai košļājamās slodzes izturēšanai, taču
                zoba sakni vēl var saglabāt.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Stipri bojāts zobs</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kad zobs ir bojāts kariesa vai traumas dēļ un atlikušie audi ir vāji, kronītis nostiprina
                    zobu un aizsargā to no turpmāka lūzuma vai plaisāšanas.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Zobs pēc saknes kanālu ārstēšanas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Endodontiski ārstēti zobi kļūst trausli, tāpēc kronītis palīdz atjaunot to izturību un
                    pagarināt kalpošanas laiku.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Nolauzti vai nodiluši zobi</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Zoba kronītis atjauno dabisko zoba formu, ļauj vienmērīgi sadalīt košļājamo slodzi un
                    atjauno pilnvērtīgu funkciju.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Estētiski zobu defekti</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kad zoba krāsa, forma vai proporcijas neatbilst smaida līnijai, kronītis ļauj sasniegt
                    dabisku un harmonisku estētisko izskatu.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Zobu atjaunošana uz implantiem</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kronīši tiek izmantoti kā galīgā protēze uz implantiem, atjaunojot gan funkciju, gan estētiku.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* MEDŽIAGOS */}
          <motion.section id="medziagos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">No kādiem materiāliem tiek izgatavoti zobu kronīši?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zobu kronīši tiek izgatavoti no dažādiem materiāliem, kas tiek izvēlēti individuāli, ņemot vērā
                zoba stāvokli, tā atrašanās vietu mutē, sakodiena slodzi un pacienta estētiskās vēlmes. Piemērota
                materiāla izvēle ir viens no svarīgākajiem faktoriem, kas nodrošina ilgstošu rezultātu.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Cirkonija keramika</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tas ir viens no modernākajiem un biežāk izmantotajiem materiāliem. Tas izceļas ar īpaši lielu stiprību,
                    izturību pret košļājamām slodzēm un dabisku estētiku. Cirkonija kronīši ir piemēroti gan priekšējiem,
                    gan sānu zobiem, jo ļauj saglabāt līdzsvaru starp estētiku un funkciju.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Bezmetāla keramika (E-MAX)</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tas ir īpaši estētisks risinājums, kas izceļas ar dabisku gaismas caurlaidību. Šīs īpašības dēļ
                    zobs izskatās ļoti tuvs dabiskajai emaljai, tāpēc šis materiāls visbiežāk tiek izmantots
                    priekšējo zobu zonā, kur estētika ir vissvarīgākā.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Metālkeramika</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tas ir uzticams un stiprs, bet ekonomiskāks risinājums. Tas visbiežāk tiek pielietots sānu
                    zobu zonā, kur vissvarīgākā ir izturība pret košļājamām slodzēm, savukārt estētiskās prasības ir
                    mazākas.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Pagaidu kronīši</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek izgatavoti no plastmasas vai kompozīta un izmantoti pārejas ārstēšanas periodā, kamēr
                    tiek izgatavota galīgā protēze. Tie aizsargā zobu un uztur estētiku ārstēšanas laikā.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā tiek veikta zobu kronīšu protezēšana?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zobu kronīšu protezēšana ir secīgs, posmos balstīts process, kas tiek plānots
                individuāli katram pacientam. Šāda secība ļauj nodrošināt precīzu pielāgošanu, komfortu
                un ilgtermiņa rezultātu.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Konsultācija un diagnostika</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pirmās vizītes laikā tiek novērtēts vispārējais mutes stāvoklis, zoba bojājuma pakāpe un sakodiena
                    īpatnības. Tiek veikts izmeklējums un sastādīts individuāls ārstēšanas plāns, ņemot vērā funkcionālās
                    un estētiskās vajadzības.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zoba sagatavošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Zobs tiek minimāli noslīpēts, lai izveidotu vietu kronītim. Ja nepieciešams, pirms
                    tam tiek veikta saknes kanālu ārstēšana vai citi sagatavošanas ārstēšanas posmi, kas nodrošina stabilu
                    pamatu protēzei.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Skenēšana un izgatavošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek veikta digitāla zobu skenēšana vai nospiedums, saskaņā ar kuru zobu tehniķu
                    laboratorijā tiek izgatavots individuāls kronītis. Šajā posmā tiek atjaunota precīza zoba forma,
                    krāsa un anatomija, tiecoties pēc dabiska rezultāta.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Stiprināšana un korekcija</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Izgatavotais zoba kronītis tiek stiprināts pie zoba vai implanta. Vajadzības gadījumā
                    tiek veiktas minimālas korekcijas, lai nodrošinātu komfortablu sakodienu un dabisku
                    sajūtu mutē.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* SKAUSMAS */}
          <motion.section id="skausmas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Vai zobu kronīši ir sāpīgi?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu kronīšu protezēšana tiek veikta, izmantojot vietējo anestēziju, tāpēc pati procedūra
                  pacientam nerada sāpes. Tas ir viens no biežāk pacientu uzdotajiem jautājumiem, tāpēc svarīgi
                  uzsvērt, ka viss zoba sagatavošanas un protezēšanas process tiek kontrolēts un pielāgots
                  maksimālam komfortam.
                </p>
                <p>
                  Procedūras laikā zobārsts nodrošina, ka zobs tiek sagatavots tikai tik daudz, cik
                  nepieciešams precīzai kronīša pielāgošanai. Tas nozīmē, ka iejaukšanās ir minimāla un vērsta uz
                  maksimālu dabisko audu saglabāšanu. Vairumā gadījumu pacients jūt tikai vieglu spiedienu vai
                  vibrāciju, bet ne sāpes.
                </p>
                <p>
                  Pēc procedūras, kad anestēzija beidz iedarboties, var parādīties īslaicīga jutība vai neliela
                  smeldze zoba zonā. Tā ir normāla organisma reakcija uz ārstēšanu un parasti pāriet dažu
                  dienu laikā. Sarežģītākos gadījumos diskomforts var būt nedaudz izteiktāks, taču
                  tas ir īslaicīgs un viegli kontrolējams.
                </p>
                <p>
                  Svarīgi saprast, ka zobu kronīši mūsdienās tiek plānoti īpaši precīzi, tāpēc viss process
                  ir prognozējams, drošs un pacientam komfortabls.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PRIEŽIŪRA IR TARNAVIMO LAIKAS */}
          <motion.section id="prieziura" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā kopt zobu kronīšus?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Piemērota zobu kronīšu kopšana ir būtisks nosacījums, lai nodrošinātu to ilgmūžību un
                  stabilu funkcionalitāti. Lai gan pats kronītis ir izgatavots no izturīgiem materiāliem, apkārtējie audi
                  un atbalsta zobs joprojām prasa ikdienas kopšanu.
                </p>
                <p>
                  Ieteicams zobus tīrīt vismaz divas reizes dienā, izmantojot mīkstu zobu birsti un fluoru
                  saturošu zobu pastu. Īpaši svarīgi rūpīgi iztīrīt vietas pie smaganu malas, kur var uzkrāties
                  aplikums. Tāpat nepieciešams izmantot zobu diegu vai starpzobu birstītes, lai nodrošinātu
                  tīrību ap kronīša malām.
                </p>
                <p>
                  Regulāras vizītes pie zobārsta un profesionāla mutes higiēna palīdz laikus pamanīt jebkādas
                  izmaiņas un nodrošināt, ka kronītis paliek stabili nostiprināts. Tāpat svarīgi izvairīties no
                  kaitīgiem ieradumiem, piemēram, zobu griešanas, nagu graušanas vai ļoti cietas pārtikas kodīšanas, jo
                  tas var palielināt protēzes nodilumu.
                </p>
                <p>
                  Pareizi kopti zobu kronīši ļauj ilgstoši saglabāt gan estētiku, gan pilnvērtīgu
                  košļājamo funkciju.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA NEGALIMA */}
          <motion.section id="kada-negalima" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kad zobu vairs nav iespējams atjaunot tikai ar kronīti?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Lai gan zobu kronīši ir viens no efektīvākajiem veidiem, kā atjaunot stipri bojātus zobus, ne visos
                gadījumos tie var tikt pielietoti kā vienīgais risinājums. Kronītis prasa stabilu zoba
                pamatu, tāpēc dažās situācijās dabiskā zoba saglabāšanas iespējas kļūst ierobežotas.
              </p>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-darkblue-700">Zoba atjaunošana ar kronīti var vairs nebūt iespējama, kad:</h3>
                <div className="grid gap-3">
                  {[
                    'zobs ir stipri sabrucis zem smaganu līnijas un vairs nav pietiekami daudz audu protēzes stiprināšanai',
                    'tiek konstatēta vertikāla zoba saknes plaisa, kas bojā visu strukturālo stabilitāti',
                    'ap zoba sakni ir ļoti izplatīts iekaisums, un kaula zudums ir pārāk liels',
                    'zobs vairs nav piemērots atjaunošanai pat pēc endodontiskās ārstēšanas vai ķirurģiskās sagatavošanas',
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
                  Šādos gadījumos vien kronītis nevar nodrošināt ilgtermiņa rezultātu, jo tam nav pietiekama
                  atbalsta pamata. Lēmums vienmēr tiek pieņemts individuāli, izvērtējot zoba saglabāšanas
                  iespējas un vispārējo mutes stāvokli.
                </p>
                <p>
                  Svarīgi uzsvērt, ka vispirms vienmēr tiek tiekts saglabāt dabisko zobu. Tikai tad, kad prognoze
                  ir nelabvēlīga, pacientam tiek piedāvāti alternatīvi risinājumi, piemēram, implantācija vai kompleksa
                  protezēšana. Skaidrs situācijas novērtējums ļauj izvēlēties risinājumu, kas nodrošina
                  ilgtermiņa funkciju un mutes veselību.
                </p>
              </div>
            </div>
          </motion.section>

          {/* MITAI */}
          <motion.section id="mitai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Biežākie mīti par zobu kronīšiem</h2>

              <p className="text-slate-700 leading-relaxed max-w-4xl mb-6">
                Zobu kronīši ir bieži veicama procedūra, tomēr par to joprojām pastāv daudz kļūdainu
                uzskatu, kas var radīt nevajadzīgas pacientu bažas vai mudināt atlikt nepieciešamo
                ārstēšanu. Pareiza informēšana palīdz izprast reālo procedūras gaitu un pieņemt pamatotus lēmumus
                par mutes veselību.
              </p>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mīts: „Kronīši izskatās nedabiski.“</h3>
                  <p className="text-slate-600 text-sm">Mūsdienu zobu kronīši tiek izgatavoti no estētiskiem materiāliem, kas precīzi atveido dabiskā zoba krāsu, caurspīdīgumu un formu. Pareizi pielāgots kronītis vizuāli neatšķiras no dabiskajiem zobiem un tiek pielāgots vispārējai smaida līnijai.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mīts: „Tas ir pagaidu risinājums.“</h3>
                  <p className="text-slate-600 text-sm">Lai gan kronītis ir protezēšanas konstrukcija, tas ir ilgtermiņa ārstēšanas risinājums. Pareizi izgatavots un koptas kronītis var kalpot daudzus gadus, un dažos gadījumos – pat vairākus gadu desmitus.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mīts: „Procedūra ir ļoti sāpīga.“</h3>
                  <p className="text-slate-600 text-sm">Zoba sagatavošana tiek veikta, izmantojot vietējo anestēziju, tāpēc pacients sāpes nejūt. Diskomforts pēc procedūras ir īslaicīgs un viegli kontrolējams.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mīts: „Kronīši viegli izkrīt.“</h3>
                  <p className="text-slate-600 text-sm">Pareizi nostiprināti kronīši ir stabili un uzticami. Atdalīšanās risks ir minimāls un visbiežāk saistīts tikai ar nepietiekamu mutes higiēnu vai papildu faktoriem.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mīts: „Pietiek ar jebkādu materiālu.“</h3>
                  <p className="text-slate-600 text-sm">Patiesībā materiāla izvēle ir kritiski svarīga. No tā ir atkarīga gan estētika, gan ilgmūžība, gan kronīša izturība pret košļājamo slodzi.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* DUK */}
          <motion.section id="duk" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">BUJ – biežāk uzdotie jautājumi par zobu kronīšiem</h2>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Cik ilgi kalpo zobu kronīši?</h3>
                  <p className="text-slate-600 text-sm">Zobu kronīšu kalpošanas laiks ir atkarīgs no izvēlētā materiāla, mutes higiēnas un pacienta ieradumiem. Vidēji tie kalpo no 5 līdz 15 gadiem, taču pareizi kopti var kalpot vēl ilgāk. Cirkonija un keramikas kronīši bieži izceļas ar ilgāku kalpošanas laiku, pateicoties to izturībai pret nodilumu.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">No kā ir atkarīga zobu kronīša cena?</h3>
                  <p className="text-slate-600 text-sm">Zobu kronīša cena ir atkarīga no vairākiem galvenajiem faktoriem: izvēlētā materiāla, zoba novietojuma mutē, ārstēšanas sarežģītības un papildu procedūru nepieciešamības. Tāpat ietekmē tas, vai kronītis tiek stiprināts uz dabiskā zoba vai uz implanta.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Vai pirms kronīša uzlikšanas jāslīpē zobs?</h3>
                  <p className="text-slate-600 text-sm">Jā, zobs tiek minimāli noslīpēts, lai izveidotu vietu kronītim un nodrošinātu precīzu piegulšanu. Slīpēšanas apjoms vienmēr tiek izvēlēts individuāli, cenšoties saglabāt pēc iespējas vairāk veselu audu.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Vai procedūra ir piemērota jutīgiem pacientiem?</h3>
                  <p className="text-slate-600 text-sm">Jā, procedūra tiek veikta, izmantojot vietējo anestēziju, tāpēc pat jutīgāki pacienti parasti sāpes nejūt. Ārstēšana tiek plānota tā, lai nodrošinātu maksimālu komfortu.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Vai ar kronīti var ēst kā parasti?</h3>
                  <p className="text-slate-600 text-sm">Jā, pareizi pielāgots zoba kronītis pilnībā atjauno košļājamo funkciju. Pēc adaptācijas perioda pacients var ēst parasto pārtiku bez ierobežojumiem.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Vai kronīti var nomainīt nākotnē?</h3>
                  <p className="text-slate-600 text-sm">Jā, vajadzības gadījumā kronīti var nomainīt pret jaunu. Tas ir atkarīgs no zoba stāvokļa un paša kronīša nodiluma.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KODĖL RINKTIS */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc izvēlēties Bangų zobārstniecības klīniku kronīšiem?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu kronīši ir protezēšanas risinājums, kas prasa precizitāti un profesionālu plānošanu,
                  tāpēc svarīgi, lai ārstēšana tiktu veikta saskaņā ar augstiem medicīniskajiem standartiem. Bangų
                  zobārstniecības klīnikā katrs gadījums tiek vērtēts individuāli, ņemot vērā pacienta
                  zobu stāvokli, sakodienu un estētisko nepieciešamību.
                </p>
                <p>
                  Klīnikā izmantotā digitālā ārstēšanas plānošana ļauj nodrošināt īpaši precīzu kronīšu
                  pielāgošanu, kas nosaka komfortu ikdienas darbībās un dabisku estētisko rezultātu. Izmantotie
                  mūsdienu materiāli ļauj apvienot stiprību, ilgmūžību un dabisku izskatu.
                </p>
                <p>
                  Visas ārstēšanas laikā pacientam tiek sniegta skaidra informācija par katru posmu, tāpēc process
                  kļūst saprotams, kontrolējams un prognozējams. Šāda pieeja ļauj nodrošināt ne tikai
                  kvalitatīvu zobu funkcijas atjaunošanu, bet arī ilgtermiņa mutes veselību.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties zobu kronīšu procedūrai Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja Jūsu zobs ir stipri bojāts, novājināts vai ārstēts ar saknes kanālu ārstēšanu, aicinām pierakstīties
                  konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā tiks novērtēts zoba stāvoklis un pārrunāti
                  piemērotākie kronīša materiāli un risinājumi.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā mēs cenšamies, lai zobu kronīšu procedūra būtu skaidra, rūpīgi ieplānota un
                  ērta katram pacientam. Šeit Jūs sagaida pieredzējuši speciālisti, moderns aprīkojums un rūpīga attieksme pret
                  katru pacientu.
                </p>
                <p>
                  Pierakstieties zobu kronītim un parūpējieties par sava smaida skaistumu un zobu stiprību laikus un
                  profesionāli.
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
