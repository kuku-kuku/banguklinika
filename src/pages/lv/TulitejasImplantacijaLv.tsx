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
  { id: 'kas-yra', label: 'Kas ir tūlītējā implantācija?' },
  { id: 'kada-taikoma', label: 'Kad tiek pielietota?' },
  { id: 'procesas', label: 'Kā notiek procedūra?' },
  { id: 'privalumai', label: 'Galvenās priekšrocības' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function TulitejasImplantacijaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/tulitejas-implantacija/#service`,
    "name": "Tūlītējā implantācija Klaipēdā",
    "serviceType": "Tūlītējā implantācija",
    "description": "Tūlītējās implantācijas pakalpojums tiek sniegts Bangų zobārstniecības klīnikā Klaipēdā. Zoba izvilkšana un implanta ievietošana tiek veikta viena apmeklējuma laikā.",
    "url": `${SITE_URL}/lv/pakalpojumi/tulitejas-implantacija/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": `${SITE_URL}/#dentist` },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Tūlītējā implantācija Klaipēdā - Bangų klīnika"
        description="Tūlītējā implantācija Klaipēdā – zoba izvilkšana un implanta ievietošana viena apmeklējuma laikā☑️ātrāk, ērtāk☑️Cena no 1200€.⏩Piesakieties konsultācijai jau tagad."
        keywords="tulitejas implantacija, zobu implanti, implantacija viena apmekleuma laika, klaipeda"
        canonical={`${SITE_URL}/lv/pakalpojumi/tulitejas-implantacija`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/vienmomente-implantacija` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/tulitejas-implantacija` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/vienmomente-implantacija` },
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
              Tūlītējā implantācija Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Zoba zaudēšana vai nepieciešamība to izvilkt bieži tieši ietekmē ne tikai mutes dobuma funkciju, bet
                  arī vispārējo pašsajūtu un pašapziņu. Pat viena zoba zaudēšana var izraisīt košļāšanas
                  diskomfortu, izmaiņas smaida estētikā, bet ilgtermiņā novest pie žokļa kaulaudu atrofijas un blakus
                  zobu nobīdes. Šādās situācijās tūlītējā implantācija kļūst par modernu un klīniski
                  progresīvu risinājumu, kas ļauj viena apmeklējuma laikā izvilkt zobu un uzreiz atjaunot tā sakni
                  ar implantu.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā tūlītējā implantācija tiek veikta, izmantojot mūsdienu
                  implantoloģijas principus un digitālo diagnostiku. Procedūras laikā mēs cenšamies ne tikai pēc iespējas ātrāk
                  atjaunot zaudēto zobu, bet arī maksimāli saglabāt apkārtējos audus un dabīgo smaganu
                  struktūru. Individuāla ārstēšanas plānošana, precīza diagnostika un atbildīga pieeja ļauj
                  nodrošināt prognozējamu, estētiski harmonisku un ilgstošu rezultātu.
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
                      Tūlītējās implantācijas cenas
                    </h2>
                    <p className="text-slate-600">
                      Tūlītējās implantācijas cena ir atkarīga no klīniskās situācijas, zoba stāvokļa un apkārtējo audu un kaula stāvokļa. Pirms procedūras vienmēr tiek veikta apskate un digitālā diagnostika, kuras laikā tiek novērtēta piemērotība šai ārstēšanas metodei.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Implantācija</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Tūlītējā implantācija', 'no 1200 €'],
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
                  Precīza tūlītējās implantācijas cena Klaipēdā tiek pārrunāta individuālas konsultācijas laikā, ņemot vērā konkrēto klīnisko situāciju. Caurspīdīga cenu politika un profesionāla pieeja ļauj pacientiem justies pārliecinātiem un pieņemt informētu lēmumu.
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
                    Ja Jums ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā mēs novērtēsim Jūsu mutes dobuma stāvokli, atbildēsim uz interesējošajiem jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mēs cenšamies, lai katrs pacients justos pārliecināti – no pirmās konsultācijas līdz galīgajam rezultātam. Piesakieties un speriet pirmo soli veselīga smaida virzienā.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts detalizēts klīniskais novērtējums',
                        'tiek apspriestas iespējamās ārstēšanas metodes',
                        'tiek izskaidroti procedūras posmi un termiņi',
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
                <div className="relative bg-sky-50">                  <img
                    src="/team/Jonas-light%20LV.jpg"
                    alt="Bangų zobārstniecības klīnikas ārsts"
                    className="w-full lg:absolute lg:inset-0 lg:h-full object-contain"
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir tūlītējā implantācija?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Tūlītējā implantācija ir moderna zobu atjaunošanas metode, kad bojāta vai neglābjama
                  zoba izvilkšana un zobu implanta ievietošana tiek veikta viena apmeklējuma laikā. Šī ārstēšanas metode
                  ļauj būtiski saīsināt kopējo ārstēšanas laiku un izvairīties no papildu ķirurģiskiem posmiem.
                </p>
                <p>
                  Atšķirībā no tradicionālās implantācijas, kad pēc zoba izvilkšanas ir jāgaida kaula dzīšanas
                  periods, tūlītējās implantācijas laikā implants tiek ievietots uzreiz izvilktā zoba
                  vietā. Tas palīdz saglabāt dabīgo kaula struktūru, samazināt tā rezorbciju un uzturēt
                  smaganu kontūru.
                </p>
                <p>
                  Ir svarīgi uzsvērt, ka tūlītējā implantācija nav universāls risinājums visiem pacientiem. Tā ir
                  individuāli plānojama ārstēšanas metode, kas tiek pielietota tikai tad, kad ir nodrošināts pietiekams
                  kaula daudzums un nav aktīva iekaisuma. Šī iemesla dēļ katrā gadījumā tiek veikta detalizēta
                  diagnostika un ārstēšanas plāna sastādīšana.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā tūlītējā implantācija tiek plānota digitāli,
                  lai maksimāli precīzi novērtētu klīnisko situāciju un nodrošinātu prognozējamu ilgstošu
                  rezultātu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAD TIEK PIELIETOTA */}
          <motion.section id="kada-taikoma" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kad tiek pielietota tūlītējā implantācija?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Tūlītējā implantācija tiek pielietota tikai pēc rūpīgas mutes dobuma stāvokļa novērtēšanas. Visbiežāk tā tiek
                ieteikta, kad zobs ir neatgriezeniski bojāts, tomēr apkārtējie audi ir pietiekami
                veseli.
              </p>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-darkblue-700">Šī metode ir īpaši piemērota, kad:</h3>
                <div className="grid gap-3">
                  {[
                    'nepieciešama zoba izvilkšana traumas vai kariesa dēļ',
                    'nav aktīvas infekcijas vai abscesa',
                    'kaula daudzums ļauj nodrošināt implanta stabilitāti',
                    'svarīga ātra estētiskās zonas atjaunošana',
                    'pacients vēlas samazināt kopējo ārstēšanas ilgumu',
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
                  Priekšējo zobu zonā šī metode bieži tiek izvēlēta estētikas nozīmīguma un psiholoģiskā
                  komforta dēļ, jo pat īslaicīga zoba zaudēšana var ietekmēt smaidu un pašsajūtu.
                </p>
                <p>
                  Tomēr tūlītējo implantāciju nevar veikt, ja tiek konstatēts aktīvs iekaisums,
                  nepietiekams kaula tilpums vai sarežģīta anatomiska situācija. Šādos gadījumos tiek izvēlēts
                  alternatīvs ārstēšanas plāns, kas nodrošina drošāku ilgtermiņa rezultātu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā tiek veikta tūlītējā implantācija?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Tūlītējā implantācija ir konsekvents, uz vairākiem posmiem balstīts ārstēšanas process, kurā katrs
                solis ietekmē galīgo rezultātu.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Diagnostika un plānošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek veikti rentgena vai 3D datortomogrāfijas izmeklējumi. Tiek novērtēts kaula daudzums,
                    smaganu stāvoklis, infekcijas risks un sastādīts individuāls ārstēšanas plāns.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zoba izvilkšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Zobs tiek izvilkts, maksimāli saudzējot apkārtējos audus, lai saglabātu dabīgo
                    kaula struktūru, kas ir svarīga implanta stabilitātei.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Implanta ievietošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tajā pašā vietā tiek ievietots zobu implants. Ja tiek sasniegta pietiekama primārā stabilitāte,
                    var tikt piestiprināts pagaidu kronītis, īpaši estētiskajā zonā.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Dzīšanas periods</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Notiek osteointegrācija – implanta saaugšana ar kaulu. Šis process ilgst vairākus mēnešus un
                    ir būtisks ilgtermiņa rezultāta nodrošināšanai.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Galīgā protezēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek izgatavots individuāls zoba kronītis, kas atkārto dabīgā zoba formu, krāsu
                    un funkciju.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PRIEKŠROCĪBAS */}
          <motion.section id="privalumai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Tūlītējās implantācijas priekšrocības</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Tūlītējā implantācija mūsdienu implantoloģijā tiek vērtēta kā progresīva un pacientam īpaši
                  ērta ārstēšanas metode, kas ļauj efektīvi apvienot zoba izvilkšanu un implantēšanu viena
                  apmeklējuma laikā. Šāds risinājums ne tikai saīsina kopējo ārstēšanas laiku, bet arī sniedz vairāk
                  komforta visa ārstēšanas procesa laikā.
                </p>
                <p>
                  Viena no svarīgākajām šīs metodes priekšrocībām – būtiski saīsināts ārstēšanas ceļš. Zoba
                  izvilkšana un implanta ievietošana tiek veikta vienas procedūras laikā, tāpēc tiek izvairīts no ilgas
                  gaidīšanas starp posmiem. Tas ļauj pacientam ātrāk atjaunot košļāšanas funkciju un atgriezties
                  pie ierastās ikdienas aktivitātes.
                </p>
                <p>
                  Ne mazāk svarīgi ir arī tas, ka tiek samazināts ķirurģisko iejaukšanos skaits. Divu
                  atsevišķu procedūru vietā pacientam tiek veikta viena, kas bieži nozīmē mazāku audu kairinājumu,
                  īsāku dzīšanas periodu un vienkāršāku, skaidrāk plānotu ārstēšanas procesu.
                </p>
                <p>
                  Estētiskais aspekts ir īpaši nozīmīgs, jo īpaši priekšējo zobu zonā. Noteiktos gadījumos ir iespējams uzreiz
                  pēc procedūras atjaunot pagaidu zoba kronīti, tāpēc pacients izvairās no redzamas zoba
                  spraugas un var justies pārliecināti jau uzreiz pēc ārstēšanas.
                </p>
                <p>
                  Vēl viena svarīga priekšrocība – dabīgo audu saglabāšana. Tūlītējā implantācija palīdz
                  samazināt kaula atrofiju un saglabāt smaganu kontūru, kas ir īpaši svarīgi gan estētiskajam
                  izskatam, gan ilgtermiņa implanta stabilitātei. Šo iemeslu dēļ šī metode bieži tiek
                  izvēlēta kā optimāls risinājums, kad tiek meklēts, kā apvienot ātrumu, estētiku un ilgstošu
                  rezultātu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KĀPĒC IZVĒLĒTIES */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc vērts vērsties Bangų zobārstniecības klīnikā tūlītējās implantācijas dēļ?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zoba zaudēšana vai nepieciešamība to izvilkt bieži rada ne tikai funkcionālus, bet arī estētiskus un
                  emocionālus izaicinājumus. Šādās situācijās vissvarīgākais kļūst ātrs, precīzs un drošs risinājums,
                  kas ļauj pēc iespējas ātrāk atjaunot zaudēto zobu un izvairīties no ilgtermiņa izmaiņām žokļa
                  audos. Tūlītējā implantācija ir viena no progresīvākajām metodēm, kas ļauj to sasniegt
                  maksimāli īsā laikā.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā tūlītējā implantācija tiek plānota atbildīgi,
                  pamatojoties uz detalizētu diagnostiku un individuālu pacienta situāciju. Katrs gadījums tiek novērtēts
                  kompleksi – tiek analizēts kaula stāvoklis, smaganu veselība, infekcijas risks un vispārējais mutes dobuma
                  stabilitāte. Tikai tad tiek izvēlēts drošākais un prognozējamākais ārstēšanas risinājums.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā mēs cenšamies ne tikai atjaunot zobu, bet arī saglabāt dabīgo audu
                  struktūru, nodrošinot ilgstošu implantu stabilitāti un estētiski harmonisku rezultātu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties tūlītējai implantācijai Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja vēlaties atjaunot izvilkto zobu viena apmeklējuma laikā, aicinām pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā tiks novērtēts Jūsu mutes dobuma stāvoklis, veikta digitālā diagnostika un, ja nepieciešams, plānota tūlītējā implantācija.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā mēs cenšamies, lai pat tik sarežģīta procedūra kā tūlītējā implantācija būtu skaidra, pārvaldāma un pēc iespējas mazāk stresu izraisoša. Šeit Jūs sagaida pieredzējuši speciālisti, moderns aprīkojums un rūpīga pieeja katram pacientam.
                </p>
                <p>
                  Piesakieties tūlītējai implantācijai un parūpējieties par savas mutes dobuma veselību laikus un profesionāli.
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
