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
  { id: 'kas-yra', label: 'Kas ir cirkonija keramikas kronītis?' },
  { id: 'reikalingumas', label: 'Kad ir nepieciešams?' },
  { id: 'privalumai', label: 'Kāpēc izvēlēties cirkonija keramiku?' },
  { id: 'procesas', label: 'Kā notiek procedūra?' },
  { id: 'trukme', label: 'Cik ilgi kalpo?' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function CirkonijaKeramikasKronitisLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/cirkonija-keramikas-kronitis/#service`,
    "name": "Cirkonija keramikas kronītis Klaipēdā",
    "serviceType": "Cirkonija keramikas kronītis",
    "description": "Cirkonija keramikas kronīšu izgatavošanas un pielāgošanas pakalpojums tiek sniegts Bangų zobārstniecības klīnikā Klaipēdā. Klīnikā tiek atjaunoti bojāti vai estētiski nepiemēroti zobi pacientiem Klaipēdas pilsētā.",
    "url": `${SITE_URL}/lv/pakalpojumi/cirkonija-keramikas-kronitis/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": `${SITE_URL}/#dentist` },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        title="Cirkonija keramikas kronītis Klaipēdā - Bangų klīnika"
        description="Cirkonija keramikas kronītis Klaipēdā – dabisks izskats☑️izturība☑️cena no 400€.⏩Pierakstieties konsultācijai Bangų klīnikā jau šodien."
        keywords="cirkonija keramikas kronitis, cirkonija kronitis, zobu kronitis, klaipeda"
        lang="lv"
        canonical={`${SITE_URL}/lv/pakalpojumi/cirkonija-keramikas-kronitis`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/cirkonio-keramikos-vainikelis` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/cirkonija-keramikas-kronitis` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/cirkonio-keramikos-vainikelis` },
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
              Cirkonija keramikas kronītis Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Bojāts, novājināts vai estētiski izmainīts zobs var ietekmēt ne tikai smaida izskatu, bet arī
                  ikdienas komfortu. Kad zoba audu nepietiek, lai droši atjaunotu zobu ar plombu, bet ir vēlme
                  saglabāt tā funkciju, formu un dabisko izskatu, viens no biežāk izvēlētajiem risinājumiem ir
                  cirkonija keramikas kronītis. Tas ir izturīgs, estētisks un mūsdienu zobārstniecībā plaši
                  izmantots zobu atjaunošanas veids.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā zobu atjaunošana ar kronīšiem tiek plānota individuāli,
                  izvērtējot pacienta mutes stāvokli, sakodienu, zoba bojājuma apmēru un estētiskās gaidas. Ārstēšanas
                  mērķis ir ne tikai atjaunot skaistu smaidu, bet arī nodrošināt, lai zobs būtu funkcionāls, ērts
                  košļāšanai un ilgtermiņā kalpotu stabili. Pareizi izvēlēta cirkonija keramika ļauj apvienot
                  izturību, dabisko izskatu un ilglaicīgu rezultātu.
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
                      Cirkonija keramikas kronīša cenas
                    </h2>
                    <p className="text-slate-600">
                      Konkrētas cenas tiek pārrunātas individuāli konsultācijas laikā, ņemot vērā specifisko situāciju.
                      Pirms procedūras vienmēr tiek veikta apskate, kuras laikā tiek izvērtēts zoba stāvoklis un izvēlēts
                      piemērotākais risinājums.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Cirkonija keramikas kronītis</h3>
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
                    Ja jums ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā izvērtēsim jūsu mutes stāvokli, atbildēsim uz interesējošajiem jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā tiecamies, lai katrs pacients justos droši – no pirmās konsultācijas līdz galīgajam rezultātam. Piesakieties un speriet pirmo soli ceļā uz veselu smaidu.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts detalizēts klīniskais izvērtējums',
                        'tiek pārrunātas iespējamās ārstēšanas metodes',
                        'tiek izskaidroti procedūras posmi un termiņi',
                        'tiek sagatavots individuāls ārstēšanas plāns',
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

          {/* KAS YRA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir cirkonija keramikas kronītis?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Cirkonija keramikas kronītis ir individuāli izgatavota zoba restaurācija, kas pārsedz bojātu,
                  novājinātu vai estētiski nepiemērotu zobu un atjauno tā formu, krāsu, izturību un košļāšanas
                  funkciju. Kronīti var stiprināt uz sagatavota dabiska zoba vai, atsevišķos gadījumos, uz implanta.
                </p>
                <p>
                  Mūsdienu zobārstniecībā cirkonija oksīda keramika tiek novērtēta par tās izturību, precizitāti un
                  estētiku. Tā ir bezmetāla materiāls, tāpēc cirkonija oksīda keramikas kronītim nav metāla karkasa
                  un tas izskatās dabiskāk, īpaši smaganu malās. Šī iemesla dēļ tas bieži tiek izvēlēts gan priekšējo,
                  gan sānu zobu atjaunošanai.
                </p>
                <p>
                  Pacienti šo restaurāciju dažreiz sauc par cirkonija kronīšiem vai cirkonija zobu kronīšiem.
                  Ikdienas valodā šie termini tiek lietoti diezgan bieži, taču zobārstniecībā precīzāks nosaukums
                  ir cirkonija keramikas kronītis. Neatkarīgi no lietotā termina runa ir par individuāli pielāgotu
                  restaurāciju, kuras mērķis ir atjaunot zoba funkciju, estētiku un aizsargāt atlikušos zoba audus.
                </p>
                <p>
                  Cirkonija keramikas kronīši tiek izgatavoti, ņemot vērā pacienta zobu formu, krāsu, sakodienu un
                  kopējo smaida izskatu. Pareizi pielāgots kronītis vizuāli saskan ar pārējiem zobiem, nerada
                  diskomfortu un ļauj pacientam ērti košļāt, runāt un smaidīt.
                </p>
              </div>
            </div>
          </motion.section>

          {/* REIKALINGUMAS */}
          <motion.section id="reikalingumas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kad ir nepieciešams cirkonija keramikas kronītis?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Cirkonija keramikas kronītis tiek ieteikts tad, kad dabiskā zoba audu nepietiek uzticamai un
                ilgtermiņa atjaunošanai ar vienkāršu plombu. Šādos gadījumos kronītis palīdz aizsargāt atlikušo
                zoba struktūru, atjaunot tā funkciju un samazināt tālākas plaisāšanas vai lūzuma risku.
              </p>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-darkblue-700">Cirkonija keramikas kronītis var būt nepieciešams, kad:</h3>
                <div className="grid gap-3">
                  {[
                    'zobs ir stipri bojāts kariesa vai traumas dēļ',
                    'zobs ir nolūzis, ieplaisājis vai stipri nolietots',
                    'pēc sakņu kanālu ārstēšanas zobs ir kļuvis vājāks',
                    'ir liela veca plomba, kas vairs nenodrošina stabilitāti',
                    'nepieciešams atjaunot zoba formu, krāsu vai estētisko izskatu',
                    'tiek atjaunots zobs uz implanta',
                    'vecie kronīši vairs neatbilst funkcionālajām vai estētiskajām vajadzībām',
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
                  Ir svarīgi saprast, ka katrs gadījums tiek vērtēts individuāli. Dažreiz pacientam var pietikt ar
                  ieliktni, uzliku vai citu mazāk invazīvu risinājumu, bet citos gadījumos cirkonija oksīda keramikas
                  kronītis ir drošākā un ilgmūžīgākā izvēle. Tāpēc pirms ārstēšanas uzsākšanas tiek veikta apskate,
                  izvērtēts zoba stāvoklis un pārrunātas visas iespējamās alternatīvas.
                </p>
                <p>
                  Laikus izvēlēts piemērots zoba atjaunošanas veids palīdz izvairīties no sarežģītākām problēmām
                  nākotnē. Ja vājš vai stipri bojāts zobs ilgu laiku tiek atstāts neatjaunots, var pieaugt tā
                  plaisāšanas, infekcijas vai pat izraušanas risks. Pareizi plānots kronītis palīdz saglabāt zobu
                  un nodrošināt stabilāku mutes veselību.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PRIVALUMAI */}
          <motion.section id="privalumai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kāpēc izvēlēties cirkonija keramiku?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Cirkonija keramika ir viens no progresīvākajiem materiāliem, kas tiek izmantots mūsdienu zobu
                  protezēšanā. Tā izceļas ar lielu izturību, nodilumizturību un estētisku izskatu, tāpēc ir piemērota
                  pacientiem, kuri meklē uzticamu ilgtermiņa risinājumu.
                </p>
                <p>
                  Viena no svarīgākajām cirkonija keramikas priekšrocībām ir dabiskais izskats. Cirkonija oksīda
                  keramika ļauj atjaunot zoba formu un krāsu tā, lai restaurācija harmoniski saskanētu ar pārējiem
                  zobiem. Tas ir īpaši aktuāli, atjaunojot priekšējos vai smaida zonā esošos zobus, kur estētiskā
                  precizitāte ir ļoti svarīga.
                </p>
                <p>
                  Salīdzinājumā ar metālkeramiku cirkonija keramikas kronītim nav metāla karkasa, tāpēc pie smaganām
                  neveidojas pelēcīga apmale. Tas ļauj sasniegt dabiskāku estētisko rezultātu un izvairīties no
                  vizuālā kontrasta, kas dažreiz manāms, izmantojot vecāka tipa restaurācijas.
                </p>
                <p>
                  Cirkonija oksīda keramika ir arī bioloģiski saderīga, tāpēc mutes audi to labi panes. Pareizi
                  izgatavots un pielāgots kronītis ir gluds, precīzi pieguļ zobam un palīdz samazināt aplikuma
                  uzkrāšanās risku. Šo īpašību dēļ cirkonija kronīšus bieži izvēlas pacienti, kuriem svarīgs ir ne
                  tikai skaists rezultāts, bet arī ērtība ikdienas mutes kopšanā.
                </p>
                <p>
                  Šis materiāls ir piemērots gan atsevišķiem kronīšiem, gan sarežģītākiem protezēšanas risinājumiem.
                  To var izmantot, atjaunojot priekšējos zobus, kuriem svarīgākā ir estētika, un dzerokļus, kuriem
                  jāiztur lielāka košļāšanas slodze. Pareizi izvēlēta restaurācija palīdz apvienot estētisko izskatu,
                  funkcionalitāti un ilgtermiņa izturību.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā tiek izgatavots un uzlikts cirkonija keramikas kronītis?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Cirkonija keramikas kronīša izgatavošana un pielāgošana Bangų zobārstniecības klīnikā tiek veikta
                pēc skaidras, pacientam saprotamas gaitas. Katrs posms ir svarīgs, lai galīgais rezultāts būtu
                precīzs, ērts un ilgmūžīgs.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Diagnostika un ārstēšanas plāna sagatavošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek veikta klīniskā apskate, izvērtēts zoba stāvoklis, sakodiens, apkārtējie audi un pacienta
                    gaidas. Tiek pārrunāts, vai konkrētajā gadījumā piemērotākais risinājums ir cirkonija keramikas
                    kronītis.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zoba sagatavošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek noņemti bojāti vai neuzticami audi, zobs tiek noformēts tā, lai kronītis varētu precīzi
                    pieguļt. Procedūras laikā tiek lietota vietējā anestēzija, tāpēc pacients nejūt sāpes.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Digitālā skenēšana vai nospiedums</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kad zobs ir sagatavots, tā precīza forma tiek fiksēta, izmantojot digitālo skenēšanu vai
                    tradicionālo nospiedumu. Precīzie dati ļauj izgatavot individuālu kronīti.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Kronīša izgatavošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pēc savāktajiem datiem tiek izgatavots cirkonija oksīda keramikas kronītis. Tā krāsa, forma un
                    izmērs tiek izvēlēti tā, lai restaurācija harmoniski saskanētu ar pārējiem zobiem.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Pielāgošana, fiksēšana un ieteikumi</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Izgatavotais kronītis tiek pielaikots, tiek izvērtēts tā pieguļums, krāsa un pacienta sajūta.
                    Pēc fiksēšanas pacientam tiek izskaidrots, kā rūpēties par restaurāciju un kad ierasties uz apskati.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* TRUKME */}
          <motion.section id="trukme" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Cik ilgi kalpo cirkonija keramikas kronītis?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Cirkonija keramikas kronīša kalpošanas laiks ir atkarīgs no vairākiem svarīgiem faktoriem: zoba
                  stāvokļa, restaurācijas precizitātes, sakodiena, pacienta mutes higiēnas paradumiem un regulārām
                  profilaktiskām apskatēm. Pareizi izgatavots un kopts kronītis var kalpot daudzus gadus.
                </p>
                <p>
                  Cirkonija kronīša kopšana nav sarežģīta, taču tai jābūt konsekventai. Kronīti, tāpat kā dabiskos
                  zobus, ir jātīra divas reizes dienā, jāizmanto zobu diegs, starpzobu birstītes vai citi speciālista
                  ieteiktie līdzekļi. Tāpat svarīgi ir regulāri veikt profesionālu mutes higiēnu un profilaktiskas
                  pārbaudes.
                </p>
                <p>
                  Lai gan cirkonija keramika ir izturīga un noturīga, ir svarīgi izvairīties no kaitīgiem ieradumiem,
                  piemēram, ar zobiem nekošļāt ļoti cietus priekšmetus, neatvērt iepakojumus vai negrauzt nagus. Ja
                  pacients griež zobus, var tikt ieteikta aizsargkapa naktij, kas palīdz samazināt slodzi uz kronīti
                  un dabiskajiem zobiem.
                </p>
                <p>
                  Precīza cirkonija keramikas kronīša cena ir atkarīga no individuālās situācijas – zoba sagatavošanas,
                  papildu ārstēšanas nepieciešamības, kronīša veida un izvēlētās tehnoloģijas. Galīgā cena tiek
                  pārrunāta konsultācijas laikā, kad tiek izvērtēta konkrēta klīniskā situācija un tiek sagatavots
                  skaidrs ārstēšanas plāns. Ievērojot zobārsta ieteikumus, cirkonija keramikas kronītis paliek stabils,
                  estētisks un ērts ikdienas darbībā.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KODĖL RINKTIS */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Izvēloties cirkonija keramikas kronīti, svarīgs ir ne tikai estētiskais galīgais rezultāts, bet arī
                  viss zoba atjaunošanas process – no pirmās konsultācijas līdz galīgā kronīša pielāgošanai. Bangų
                  zobārstniecības klīnikā Klaipēdā zobu atjaunošana tiek veikta, izmantojot mūsdienīgus, pacientam
                  ērtus risinājumus, kas ļauj apvienot dabisko izskatu, izturību un ilgtermiņa funkcionalitāti.
                </p>
                <p>
                  Klīnikā liela uzmanība tiek pievērsta individuālai plānošanai. Pirms ārstēšanas uzsākšanas tiek
                  izvērtēts zoba stāvoklis, sakodiens, apkārtējie audi un pacienta gaidas. Šāda pieeja ļauj skaidri
                  saprast, vai cirkonija keramikas kronītis ir piemērotākais risinājums, un pieņemt informētu
                  lēmumu par ārstēšanu.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā speciālisti velta laiku pacienta jautājumiem, skaidri izskaidro
                  katru ārstēšanas posmu un nodrošina atbildīgu pieeju ilgtermiņa rezultātam. Pacienti novērtē
                  profesionālu saziņu, komfortu procedūras laikā un dabiski izskatošos galīgo rezultātu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties cirkonija keramikas kronīšam Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja meklējat uzticamu risinājumu bojāta vai estētiski nepiemērota zoba atjaunošanai, aicinām pierakstīties
                  konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā tiks izvērtēts jūsu mutes stāvoklis, pārrunātas
                  ārstēšanas iespējas un, ja nepieciešams, tiks ieplānota cirkonija keramikas kronīša izgatavošana.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā tiecamies, lai katrs pacients saņemtu izturīgu, dabiski izskatošos un ilgi
                  kalpojošu rezultātu. Šeit jūs sagaida pieredzējuši speciālisti, moderns aprīkojums un rūpīga attieksme pret
                  katru pacientu.
                </p>
                <p>
                  Piesakieties cirkonija keramikas kronīšam un parūpējieties par savu smaidu laikus un profesionāli.
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
