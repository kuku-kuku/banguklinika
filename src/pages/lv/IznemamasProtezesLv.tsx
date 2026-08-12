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
  { id: 'kas-yra', label: 'Kas ir izņemamās protēzes?' },
  { id: 'kada-rekomenduojami', label: 'Kad ir ieteicamas?' },
  { id: 'rusys', label: 'Protēžu veidi' },
  { id: 'procesas', label: 'Izgatavošana un pielāgošana' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function IznemamasProtezesLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/iznemamas-protezes/#service`,
    "name": "Izņemamās zobu protēzes Klaipēdā",
    "serviceType": "Izņemamās zobu protēzes",
    "description": "Izņemamās zobu protēzes – daļējas, pilnas, lokveida balsta un uz implantiem fiksētas protēzes Bangų zobārstniecības klīnikā Klaipēdā.",
    "url": `${SITE_URL}/lv/pakalpojumi/iznemamas-protezes/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": `${SITE_URL}/#dentist` },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Izņemamās zobu protēzes Klaipēdā - Bangų klīnika"
        description="Izņemamās zobu protēzes Klaipēdā – daļējas, pilnas, lokveida balsta un uz implantiem fiksētas protēzes Bangų zobārstniecības klīnikā. Cena no 180€ līdz 690€.⏩Pierakstieties konsultācijai."
        keywords="iznemamas zobu protezes, daleja zobu plaksne, pilna zobu plaksne, lokveida balsta protezes, klaipeda"
        canonical={`${SITE_URL}/lv/pakalpojumi/iznemamas-protezes`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/isimami-protezai` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/iznemamas-protezes` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/isimami-protezai` },
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
              Izņemamās zobu protēzes Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Izņemamās zobu protēzes ir individuāli izgatavotas konstrukcijas, kas paredzētas zaudēto zobu un to
                  funkciju atjaunošanai. Tās var lietot, kad ir zaudēti daži, lielākā daļa vai visi vienas žokļa
                  zobi. Pareizi pielāgota protēze palīdz košļāt, skaidrāk izrunāt skaņas, uzturēt sejas audus
                  un atjaunot estētiskāku smaida izskatu.
                </p>
                <p className="mb-4">
                  Šo protezēšanas veidu bieži izvēlas kā ekonomiskāku vai pagaidu risinājumu, īpaši tad, kad
                  trūkst daudz zobu, nav piemērotu balstu fiksētam tiltam vai konkrētajā brīdī implantācija netiek
                  veikta. Tomēr lēmums nebūtu jāpieņem tikai pēc cenas. Ir svarīgi novērtēt
                  paredzamo protēzes stabilitāti, mutes anatomiju, kopšanas iespējas un pacienta gaidas.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā izņemamās protēzes tiek pielāgotas individuāli, novērtējot atlikušo
                  zobu stāvokli, žokļa anatomiju, gļotādu un sakodienu. Pirms ārstēšanas tiek pārrunāti iespējamie protezēšanas
                  virzieni, to priekšrocības, ierobežojumi un ilgtermiņa kopšana.
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
                      Izņemamo zobu protēžu cenas
                    </h2>
                    <p className="text-slate-600">
                      Izņemamo protēžu cena ir atkarīga no protēzes veida, izmantotajiem materiāliem, balsta elementiem,
                      implantu nepieciešamības un papildu ārstēšanas. Tāpēc protēžu cenas tiek precīzi noteiktas pēc konsultācijas
                      un individuāla ārstēšanas plāna sastādīšanas.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Izņemamās protēzes</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Izņemamās zobu protēzes', '180 – 690 €'],
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
                  Precīza izņemamo zobu protēžu cena Klaipēdā tiek apspriesta individuālas konsultācijas laikā,
                  ņemot vērā konkrēto klīnisko situāciju.
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
                    Aicinām pierakstīties konsultācijai Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja Jums ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām pierakstīties
                    konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā novērtēsim Jūsu mutes stāvokli, atbildēsim
                    uz jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mēs cenšamies, lai katrs pacients justos droši – no pirmās
                    konsultācijas līdz galīgajam rezultātam. Pierakstieties un speriet pirmo soli uz veselīgu smaidu.
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

          {/* REVIEWS */}
          <motion.div className="mb-10 no-x-scroll pan-y" variants={item}>
            <ReviewsCarousel />
          </motion.div>

          {/* KAS YRA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir izņemamās zobu protēzes?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Izņemamā zobu protēze ir konstrukcija, kuru pacients var patstāvīgi izņemt no mutes un
                  atkal ievietot. Atkarībā no klīniskās situācijas protēze var balstīties uz mutes gļotādu, atlikušajiem
                  dabiskajiem zobiem, speciāliem balsta elementiem vai implantiem.
                </p>
                <p>
                  No fiksētiem kronīšiem un tiltiem izņemamās protēzes atšķiras ar to, ka nav pastāvīgi piestiprinātas mutē.
                  Tās ir regulāri jāizņem, jātīra un jākopj atbilstoši ārsta ieteikumiem. Šo risinājumu
                  var izmantot, ja trūkst daudz zobu, nav pietiekami daudz balstu fiksētai protēzei vai
                  pacients izvēlas izņemamo konstrukciju.
                </p>
                <p>
                  Protēzes stabilitāte ir atkarīga no tās veida, atlikušo zobu skaita un izvietojuma, žokļa
                  kaula, gļotādas un sakodiena. Daļējās protēzes var tikt stabilizētas ar atlikušajiem zobiem, savukārt
                  pilnās izņemamās protēzes galvenokārt balstās uz gļotādu un piekļaujas žokļa anatomiskajām
                  virsmām.
                </p>
                <p>
                  Izņemamās protēzes nevar pilnībā atkārtot dabisko zobu sajūtu un funkciju. Sākumā var būt
                  jūtams svešķermenis, palielināties siekalošanās, uz laiku mainīties dažu skaņu izruna vai košļāšanas
                  sajūta. Konsekventa protēzes nēsāšana un ārsta ieteikumu ievērošana palīdz vieglāk
                  pielāgoties.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA REKOMENDUOJAMI */}
          <motion.section id="kada-rekomenduojami" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kad ir ieteicamas izņemamās protēzes?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Izņemamā protezēšana var tikt ieteikta, kad zobu zaudēšanas dēļ kļūst grūtāk košļāt,
                runāt vai uzturēt piemērotu sakodiena balstu. Protēzes nepieciešamība tiek vērtēta ne tikai pēc trūkstošo
                zobu skaita, bet arī pēc atlikušo zobu stāvokļa un vispārējās mutes veselības.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Izņemamās zobu protēzes var tikt apsvērtas, kad:</h3>

                <div className="grid gap-3">
                  {[
                    'trūkst vairāki zobi dažādās zobu loka vietās',
                    'zaudēta lielākā daļa vienas žokļa zobu',
                    'vienā vai abās žokļos nav palicis dabisko zobu',
                    'nav piemērotu balsta zobu fiksētam tiltam',
                    'implantācija veselības, anatomisku vai citu iemeslu dēļ netiek veikta',
                    'nepieciešams pagaidu risinājums līdz pastāvīgai protezēšanai',
                    'pacients izvēlas ekonomiskāku zobu atjaunošanas veidu'
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Pirms protezēšanas ir svarīgi novērst aktīvos mutes slimību perēkļus. Var būt nepieciešama kariesa,
                  periodonta slimību ārstēšana, neuzticamu zobu izņemšana vai profesionālas mutes higiēnas veikšana. Zobiem,
                  kas tiks izmantoti kā protēzes balsti, ir jābūt pietiekami stipriem un pareizi koptiem.
                </p>
                <p>
                  Pēc zobu zaudēšanas žokļa kauls laika gaitā var mainīties un sarukt. Šo izmaiņu dēļ agrāk
                  labi pieguļoša protēze var sākt kustēties, berzties vai spiest gļotādu. Šādā gadījumā var būt nepieciešama
                  korekcija, protēzes pārbāzēšana vai jaunas konstrukcijas izgatavošana. Regulāras apskates palīdz laikus
                  pamanīt šīs izmaiņas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* RŪŠYS */}
          <motion.section id="rusys" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kādi ir izņemamo zobu protēžu veidi?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Izņemamās protēzes konstrukcija tiek izvēlēta atbilstoši trūkstošo zobu skaitam, atlikušo zobu stāvoklim un pieejamiem
                balstiem.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Daļējās izņemamās protēzes</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Daļējās protēzes tiek izgatavotas pacientiem, kuriem ir palikuši daļa dabisko zobu. Tās aizpilda zobu
                    loka spragas un var tikt piestiprinātas ar āķīšiem vai citiem fiksācijas elementiem. Atlikušie zobi palīdz
                    stabilizēt konstrukciju un sadalīt košļāšanas slodzi.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Daļējā zobu plāksne visbiežāk tiek izgatavota no akrila vai citiem zobārstniecībā izmantotiem materiāliem.
                    Dažos gadījumos var tikt izvēlētas elastīgākas termoplastiskas konstrukcijas, taču to
                    piemērotība ir atkarīga no defekta lieluma un balsta zobu stāvokļa.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Pilnās izņemamās protēzes</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Pilnā zobu plāksne tiek izmantota, kad vienā žoklī vairs nav palicis dabisko zobu. Tā
                    aizvieto visu zobu loku un balstās uz mutes gļotādu un zem tās esošo žokļa kaulu.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Augšējā žokļa protēzei parasti ir lielāka balsta virsma. Apakšējās protēzes
                    stabilitāti var apgrūtināt mazāks balsta laukums, mēles kustības un žokļa kaula
                    sarukums. Ja pilnā protēze turas nepietiekami stabili, var tikt apsvērts implantu
                    balsts.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Lokveida balsta protēzes</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Lokveida balsta protēzei ir metāla karkass, pie kura tiek piestiprināti mākslīgie zobi. Tā
                    parasti ir plānāka par parasto plāksnes protēzi un daļu košļāšanas slodzes pārnes
                    uz balsta zobiem.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Šī konstrukcija ir iespējama tikai tad, ja mutē ir piemēroti, pietiekami stipri balsta zobi. Pirms
                    ārstēšanas tiek novērtēts to novietojums, periodonta stāvoklis un ilgtermiņa prognoze.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Izņemamās protēzes uz implantiem</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Izņemamās protēzes uz implantiem ar speciāliem stiprinājuma elementiem tiek fiksētas pie žoklī
                    ieskrūvētajiem implantiem. Pacients protēzi var izņemt higiēnai, taču mutē tā parasti turas
                    stabilāk nekā tikai uz gļotādu balstīta pilnā protēze.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Implantu balsti palīdz samazināt protēzes kustību runājot un košļājot. Tomēr šāda ārstēšana
                    prasa implantāciju, piemērotu kaula stāvokli un rūpīgu implantu un protēzes kopšanu.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā notiek izņemamo protēžu izgatavošana un pielāgošana?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Izņemamo protēžu izgatavošana notiek vairākos posmos. Vizīšu skaits ir atkarīgs no izvēlētās konstrukcijas,
                mutes stāvokļa un sagatavošanas procedūrām.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Mutes stāvokļa novērtēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ārsts apskata zobus, smaganas, gļotādu un sakodienu. Ja nepieciešams, tiek veikti radioloģiskie
                    izmeklējumi. Tiek novērtēts, kurus zobus var saglabāt un izmantot kā balstus.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Ārstēšanas plāna sastādīšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek apspriesti piemēroti protēžu veidi, to fiksācijas iespējas, kopšana un alternatīvas. Ja
                    tiek plānota protēze uz implantiem, papildus tiek vērtēts žokļa kaula stāvoklis.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Nospiedumu vai digitālo datu iegūšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    No žokļiem tiek noņemti nospiedumi vai apkopoti citi protēzes izgatavošanai nepieciešamie dati.
                    Mērķis ir precīzi atkārtot mutes anatomiju un protēzes balsta virsmas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Protēzes izgatavošana un mērījumi</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Zobu tehniķu laboratorijā tiek izgatavota individuāla konstrukcija. Starpvizītēs var tikt
                    pārbaudīts sakodiena augstums, zobu forma, izmērs, novietojums, krāsa un topošā smaida izskats.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Galīgā pielāgošana un kopšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Izgatavotā protēze tiek pielāgota mutē, tiek pārbaudīta tās stabilitāte, sakodiens un kontakts ar
                    gļotādu. Pacientam tiek izskaidrots, kā protēzi ievietot, izņemt, tīrīt un uzglabāt.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed mt-6">
                <p>
                  Pirmajās dienās var rasties spiediena vai berzes vietas, tāpēc reizēm ir nepieciešamas viena vai
                  vairākas korekcijas. Protēzi nedrīkstētu slīpēt vai labot patstāvīgi.
                </p>
                <p>
                  Izņemamā protēze katru dienu ir jātīra ar mīkstu birsti un tai paredzētiem līdzekļiem. Tāpat
                  ir svarīgi kopt atlikušos zobus, mēli, gļotādu un implantu balstus. Nakts nēsāšanas un
                  uzglabāšanas ieteikumi ir atkarīgi no konkrētās konstrukcijas.
                </p>
                <p>
                  Izņemamo protēžu cena ir atkarīga no protēzes veida, izmantotajiem materiāliem, balsta elementiem,
                  implantu nepieciešamības un papildu ārstēšanas. Tāpēc protēžu cenas tiek precīzi noteiktas pēc konsultācijas un
                  individuāla ārstēšanas plāna sastādīšanas.
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
                  Izvēloties izņemamo protēzi, ir svarīgi novērtēt ne tikai tās cenu vai izskatu, bet arī balsta zobu stāvokli,
                  sakodienu, gļotādas anatomiju un konstrukcijas kopšanas iespējas. Bangų zobārstniecības klīnikā
                  ārstēšana tiek plānota individuāli, lai pacientam izvēlētos funkcionālu un viņa klīniskajai
                  situācijai piemērotu risinājumu.
                </p>
                <p>
                  Mūsu speciālisti izskaidro daļējo, pilno, lokveida balsta un uz implantiem fiksēto protēžu
                  atšķirības. Pacients tiek informēts par paredzamo ārstēšanas gaitu, pielāgošanās periodu, iespējamām
                  alternatīvām un ilgtermiņa kopšanu.
                </p>
                <p>
                  Uzmanība tiek pievērsta precīzai protēzes pielāgošanai, sakodiena pārbaudei, nepieciešamām korekcijām un
                  kontroles vizītēm. Tāpēc tiem, kas meklē profesionāli izgatavotas izņemamās zobu protēzes Klaipēdā,
                  Bangų zobārstniecības klīnika ir uzticama izvēle.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties izņemamo protēžu konsultācijai Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja esat zaudējuši vairākus vai lielāko daļu zobu un apsverat izņemamo protezēšanu, aicinām pierakstīties
                  konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā tiks novērtēts mutes stāvoklis un pārrunātas
                  vispiemērotākās protezēšanas iespējas.
                </p>
                <p>
                  Pierakstieties un speriet pirmo soli uz atjaunotu smaidu.
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
