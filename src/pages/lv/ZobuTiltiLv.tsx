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
  { id: 'kas-yra', label: 'Kas ir zobu tilts?' },
  { id: 'reikalingumas', label: 'Kad ir ieteicams?' },
  { id: 'svarba', label: 'Kāpēc svarīgi atjaunot laicīgi?' },
  { id: 'rusys', label: 'Tiltu veidi' },
  { id: 'procesas', label: 'Izgatavošanas process' },
  { id: 'duk', label: 'Biežāk uzdotie jautājumi' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function ZobuTiltiLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/zobu-tilti/#service`,
    "name": "Zobu tilti Klaipēdā",
    "serviceType": "Zobu tilti",
    "description": "Zobu tiltu pakalpojums tiek sniegts Bangų zobārstniecības klīnikā Klaipēdā. Klīnikā tiek veikta trūkstošo zobu fiksētā protezēšana pacientiem Klaipēdas pilsētā.",
    "url": `${SITE_URL}/lv/pakalpojumi/zobu-tilti/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": `${SITE_URL}/#dentist` },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Zobu tilti Klaipēdā - Bangų klīnika"
        description="Trūkst zoba? Zobu tilti Klaipēdā – fiksēta protezēšana☑️dabisks izskats☑️cena no 400€ par vienību.⏩Pierakstieties konsultācijai Bangų klīnikā jau tagad."
        keywords="zobu tilti, fiksētā protēze, tilts uz implanta, tilts uz zoba, klaipēda"
        canonical={`${SITE_URL}/lv/pakalpojumi/zobu-tilti`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-tiltai` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/zobu-tilti` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-tiltai` },
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
        <TableOfContents sections={tocSections} title="Saturs" rootRef={pageRef} cta={{ label: 'Pierakstīties vizītei', to: '/lv/kontakti' }} />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Zobu tilti Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Zaudējot vienu vai vairākus zobus, mainās ne tikai smaida estētika, bet arī ikdienas mutes funkcija.
                  Var kļūt grūtāk košļāt, skaidri runāt, palielinās atlikušo zobu slodze, un blakus esošie zobi
                  laika gaitā var sākt slīdēt uz izveidojušos tukšo vietu. Zobu tilti palīdz atjaunot trūkstošos
                  zobus, košļāšanas funkciju, sakodiena stabilitāti un smaida vienotību.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā zobu atjaunošanas veidi tiek izvēlēti individuāli, izvērtējot
                  pacienta mutes stāvokli, trūkstošo zobu skaitu, balsta zobu vai implantu iespējas, sakodienu un
                  pacienta vēlmes. Viens no iespējamiem risinājumiem, kad nepieciešams atjaunot vienu vai vairākus
                  trūkstošos zobus, ir zobu tilti. Tās ir fiksētas protēzes, kas palīdz atgriezt košļāšanas komfortu,
                  smaida estētiku un pārliecību ikdienas situācijās.
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
                      Zobu tiltu cenas
                    </h2>
                    <p className="text-slate-600">
                      Zobu tilta cena tiek aprēķināta par katru vienību (zobu) atsevišķi, atkarībā no tā, vai tas
                      tiek fiksēts uz dabiska zoba vai uz implanta. Kopējā tilta cena tiek summēta no nepieciešamo
                      vienību skaita, tāpēc galīgā summa ir atkarīga no tā, cik zobus nepieciešams atjaunot.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Zobu tiltu vienību cenas</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Viena vienība uz zoba', '400 €'],
                        ['Viena vienība uz implanta', '450 €'],
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
                  Norādītās cenas tiek piemērotas vienai vienībai (zobam) – galīgā zobu tilta cena tiek aprēķināta,
                  summējot visas nepieciešamās vienības, atkarībā no tā, cik zobus atjauno un vai tilts tiek fiksēts
                  uz dabiskiem zobiem vai uz implantiem. Precīzā zobu tilta cena Klaipēdā tiek apspriesta individuālas
                  konsultācijas laikā, ņemot vērā konkrēto klīnisko situāciju un ārstēšanas plānu.
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
                    Bangų zobārstniecības klīnikā tiecamies, lai katrs pacients justos droši – no pirmās konsultācijas līdz galīgajam rezultātam. Pierakstieties un speriet pirmo soli pretim veselam smaidam.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikta detalizēta klīniskā izvērtēšana',
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

          {/* KAS IR ZOBU TILTS */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir zobu tilts?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu tilts – tā ir fiksēta neizņemama protēze, kas paredzēta viena vai vairāku trūkstošo zobu
                  atjaunošanai. Tas it kā "aizpilda" spraugu starp atlikušajiem zobiem: mākslīgais zobs vai vairāki
                  mākslīgi zobi tiek savienoti ar balstiem, kas var būt pacienta dabiski zobi vai implanti.
                </p>
                <p>
                  Ja zobu tilts tiek stiprināts uz dabiskiem zobiem, blakus trūkstošajam zobam esošie zobi
                  parasti tiek sagatavoti un uz tiem tiek fiksēti kronīši. Starp tiem esošā daļa atjauno zaudēto
                  zobu. Ja tilts tiek stiprināts uz implantiem, balstu nodrošina žoklī ieskrūvētie implanti, tāpēc
                  dažos gadījumos var izvairīties no blakus zobu slīpēšanas.
                </p>
                <p>
                  Pacienti zobu tiltus bieži sauc arī par zobu tiltiņiem. Abi termini apraksta to pašu
                  protezēšanas principu – fiksētu konstrukciju, kas atjauno zaudētos zobus un netiek ikdienā
                  izņemta no mutes.
                </p>
                <p>
                  Zobu tilts var tikt izgatavots no dažādiem materiāliem, piemēram, metālkeramikas, cirkonija
                  keramikas vai citiem mūsdienu protezēšanā izmantotiem materiāliem. Piemērotākais variants tiek
                  izvēlēts individuāli, ņemot vērā atjaunojamo zobu atrašanās vietu, košļāšanas slodzi, estētikas
                  vajadzības un mutes stāvokli.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAD IR NEPIECIEŠAMS */}
          <motion.section id="reikalingumas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kad ir nepieciešams zobu tilts?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zobu tilts var tikt ieteikts tad, kad pacients ir zaudējis vienu vai vairākus blakus esošos zobus
                un vēlas fiksētu, stabilu zobu atjaunošanas risinājumu. Šis protezēšanas veids var tikt apsvērts
                gan priekšzobu, gan sānu zobu apgabalā, tomēr katrā gadījumā lēmums ir atkarīgs no individuālās
                klīniskās situācijas.
              </p>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-darkblue-700">Zobu tilts var būt nepieciešams, kad:</h3>
                <div className="grid gap-3">
                  {[
                    'trūkst viena vai vairāku blakus esošu zobu',
                    'zobu zaudēšanas dēļ ir kļuvis grūtāk košļāt',
                    'ir pasliktinājusies smaida estētika',
                    'ir mainījusies runa vai izruna',
                    'blakus esošie zobi sāk slīdēt uz tukšo vietu',
                    'atlikušie zobi izjūt lielāku slodzi',
                    'pacients vēlas neizņemamu protezēšanas risinājumu',
                    'noteiktu iemeslu dēļ implantācija nav piemērotākā izvēle',
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
                  Svarīgi zināt, ka zobu tilts nav universāls risinājums visos gadījumos. Ja plānota tilta
                  konstrukcija uz dabiskiem zobiem, balsta zobiem jābūt pietiekami stipriem, stabiliem un
                  piemērotiem protezēšanai. Ja balsta zobi ir vāji, kustīgi vai bojāti ar periodonta slimībām,
                  var būt nepieciešams apsvērt citus zobu atjaunošanas veidus.
                </p>
                <p>
                  Ja blakus esošie zobi ir pilnīgi veseli, dažos gadījumos var būt racionālāk apsvērt implantu,
                  jo tā tiek izvairīts no balsta zobu slīpēšanas. Tomēr, ja blakus esošie zobi jau ir stipri
                  plombēti, novājināti vai arī tiem nepieciešama protezēšana, zobu tilts var būt loģiska un
                  pamatota izvēle.
                </p>
                <p>
                  Konsultācijas laikā zobārsts izvērtē ne tikai trūkstošo zobu skaitu, bet arī vispārējo mutes
                  stāvokli, sakodienu, smaganu veselību, kaula daudzumu un pacienta higiēnas ieradumus. Tas ļauj
                  izvēlēties tādu risinājumu, kas būtu drošs, funkcionāls un ilgtermiņā pamatots.
                </p>
              </div>
            </div>
          </motion.section>

          {/* SVARĪGUMS */}
          <motion.section id="svarba" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kāpēc svarīgi laicīgi atjaunot trūkstošos zobus?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zoba zaudēšana nav tikai estētiska problēma. Pat viena zoba trūkums var ietekmēt visu zobu
                  sistēmu. Kad zobu lokā rodas tukša vieta, blakus esošie zobi laika gaitā var sākt slīdēt vai
                  liekties, bet pretējā žokļa zobs – pagarināties uz tukšo spraugu. Tas var mainīt sakodienu un
                  apgrūtināt vēlāku ārstēšanu.
                </p>
                <p>
                  Trūkstot zobiem, atlikušajiem zobiem jāuzņemas lielāka košļāšanas slodze. Tāpēc tie var ātrāk
                  nolietoties, sašķelties, kļūt jutīgi vai kustīgi. Var mainīties arī košļāšanas ieradumi –
                  pacients sāk vairāk košļāt ar vienu pusi, tāpēc slodze mutē tiek sadalīta nevienmērīgi.
                </p>
                <p>
                  Laika gaitā zobu zaudēšana var ietekmēt arī žokļa kaulu. Tajā vietā, kur vairs nav zoba saknes
                  vai implanta, kauls vairs nesaņem parasto slodzi un var pakāpeniski samazināties. Tas ir īpaši
                  svarīgi, plānojot ilgtermiņa zobu atjaunošanu, jo kaula daudzums var ietekmēt implantācijas
                  iespējas nākotnē.
                </p>
                <p>
                  Laicīgi atjaunoti zobi palīdz saglabāt pareizāku sakodienu, samazināt atlikušo zobu slodzi,
                  uzlabot košļāšanas funkciju un saglabāt smaida vienotību. Šī iemesla dēļ, pat ja trūkstošais
                  zobs nav redzams smaidot, ir vērts konsultēties ar zobārstu un apspriest iespējamos atjaunošanas
                  risinājumus.
                </p>
              </div>
            </div>
          </motion.section>

          {/* VEIDI */}
          <motion.section id="rusys" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kādi ir zobu tiltu veidi?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zobu tilti var atšķirties pēc tā, uz kā tie tiek stiprināti un no kāda materiāla tiek izgatavoti.
                Piemērotākais risinājums tiek izvēlēts individuāli, izvērtējot trūkstošo zobu atrašanās vietu,
                balsta zobu stāvokli, sakodienu, košļāšanas slodzi un pacienta estētiskās vēlmes.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Zobu tilts uz dabiskiem zobiem</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tas ir viens no biežākajiem zobu atjaunošanas veidiem, kad blakus trūkstošajam zobam esošie
                    zobi tiek izmantoti kā balsti. Tie tiek sagatavoti protezēšanai, uz tiem tiek fiksēti kronīši,
                    un starp tiem esošā daļa atjauno zaudēto zobu. Šis risinājums var būt piemērots, kad balsta
                    zobi jau ir bojāti, plombēti vai arī tiem nepieciešama protezēšana.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Zobu tilts uz implantiem</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kad vēlas atjaunot vairākus trūkstošos zobus vai izvairīties no blakus veselu zobu slīpēšanas,
                    var apsvērt zobu tiltu uz implantiem. Šādā gadījumā tilts tiek stiprināts nevis uz dabiskiem
                    zobiem, bet uz implantiem, kas pilda balsta funkciju. Šim risinājumam nepieciešams pietiekams
                    kaula daudzums un implantācijas posms, tāpēc ārstēšanas plāns vienmēr tiek izstrādāts individuāli.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Cirkonija keramikas tilts</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Cirkonija keramikas zobu tilti bieži tiek izvēlēti to izturības, estētikas un dabiskā izskata
                    dēļ. Šis materiāls var būt piemērots gan priekšzobu, gan dzerokļu apgabalā, kad svarīgi
                    savienot izturību pret košļāšanas slodzi un estētisko rezultātu. Galīgā izvēle ir atkarīga
                    no atjaunojamo zobu atrašanās vietas un individuālā mutes stāvokļa.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Metālkeramikas tilts</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Metālkeramikas tilts izceļas ar izturību un var tikt izmantots, atjaunojot zobus, kas izjūt
                    lielāku košļāšanas slodzi. Tomēr metāla karkasa dēļ šī konstrukcija var būt mazāk estētiska
                    priekšzobu apgabalā. Tāpēc tā biežāk tiek apsvērta tur, kur galvenā prioritāte ir funkcija
                    un izturība.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Pagaidu zobu tilts</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dažos gadījumos, kamēr tiek izgatavota pastāvīgā protēze, pacientam var tikt pielāgots pagaidu
                    zobu tilts. Tas palīdz aizsargāt sagatavotos zobus, uzturēt estētiku un ļauj ērtāk justies
                    ārstēšanas laikā. Pastāvīgais tilts tiek fiksēts tikai tad, kad ir izgatavota individuāla,
                    precīzi pacienta mutei pielāgota konstrukcija.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* IZGATAVOŠANAS PROCESS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā tiek izgatavots un piestiprināts zobu tilts?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zobu tilta izgatavošana un pielāgošana Bangų zobārstniecības klīnikā tiek veikta konsekventi, lai
                protēze būtu precīza, stabila, ērta un estētiski atbilstoša pacienta smaidam. Katrs posms ir
                svarīgs galīgajam rezultātam.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Konsultācija un diagnostika</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek izvērtēts mutes stāvoklis, trūkstošo zobu atrašanās vieta, balsta zobi, sakodiens un
                    smaganu stāvoklis. Ja nepieciešams, tiek veikti radioloģiskie izmeklējumi. Tiek apspriestas
                    iespējamās alternatīvas: zobu tilts uz dabiskiem zobiem, tilts uz implantiem vai citi zobu
                    atjaunošanas risinājumi.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Ārstēšanas plāna izstrāde</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ārsts izskaidro, kāds risinājums ir piemērotākais konkrētajā gadījumā, kādas sagatavošanas
                    procedūras var būt nepieciešamas un kādi materiāli varētu tikt izmantoti. Tiek apspriesta arī
                    zobu tilta cena, kas ir atkarīga no atjaunojamo zobu skaita, stiprināšanas veida, materiāla
                    un papildu ārstēšanas nepieciešamības.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Balsta zobu vai implantu sagatavošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ja tilts tiek stiprināts uz dabiskiem zobiem, balsta zobi tiek sagatavoti protezēšanai,
                    izmantojot lokālo anestēziju. Ja tilts tiek stiprināts uz implantiem, vispirms tiek veikts
                    implantācijas un sadzīšanas posms.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Digitālā skenēšana vai nospiedumi</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Lai tilts būtu precīzs, tiek fiksēta pacienta mutes anatomija, izmantojot digitālo skenēšanu
                    vai tradicionālos nospiedumus. Šie dati tiek nodoti zobu tehniķu laboratorijai.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Tilta izgatavošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Zobu tehniķu laboratorijā tiek izgatavots individuāls zobu tilts. Tiek izvēlēta zobu forma,
                    krāsa, materiāls un konstrukcija, tiecoties, lai protēze dabiski atbilstu pacienta smaidam.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">06</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Pielāgošana un fiksēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Izgatavotais tilts tiek pielaikots mutē, tiek izvērtēta tā pieguļa, krāsa, forma, sakodiens
                    un pacienta sajūta. Ja viss atbilst, tilts tiek fiksēts un tiek izskaidrots, kā to kopt.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* BUJ */}
          <motion.section id="duk" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Biežāk uzdotie jautājumi par zobu tiltiem</h2>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Vai zobu tilts ir izņemams?</h3>
                  <p className="text-slate-600 text-sm">Visbiežāk nē. Zobu tilts ir fiksēta protēze, kas tiek piestiprināta uz balsta zobiem vai implantiem un ikdienā netiek izņemta no mutes. Ja protēze ir uz implantiem, nepieciešamības gadījumā to var noņemt ārsts.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Vai, liekot zobu tiltu, jāslīpē blakus zobi?</h3>
                  <p className="text-slate-600 text-sm">Ja tilts tiek stiprināts uz dabiskiem zobiem, balsta zobiem parasti jābūt sagatavotiem. Ja tilts tiek stiprināts uz implantiem, blakus veselus zobus slīpēt nav nepieciešams. Šī iemesla dēļ pirms ārstēšanas svarīgi apspriest visas iespējamās alternatīvas.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Vai zobu tilts izskatās dabiski?</h3>
                  <p className="text-slate-600 text-sm">Jā, pareizi izvēloties materiālu, krāsu un formu, zobu tilts var izskatīties dabiski un atbilst pacienta smaidam. Estētikai īpaši svarīga ir individuāla zobu forma, krāsas izvēle un precīza protēzes pielāgošana.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">No kā ir atkarīgas zobu tiltu cenas?</h3>
                  <p className="text-slate-600 text-sm">Zobu tilta cena un zobu tiltu cenas ir atkarīgas no atjaunojamo zobu skaita, izvēlētā materiāla, stiprināšanas veida, balsta zobu vai implantu stāvokļa un papildu ārstēšanas nepieciešamības. Precīza cena tiek noteikta konsultācijas laikā, izstrādājot individuālu ārstēšanas plānu.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Cik zobus var atjaunot ar zobu tiltu?</h3>
                  <p className="text-slate-600 text-sm">Tas ir atkarīgs no balsta zobu vai implantu skaita, to stabilitātes, sakodiena un vispārējā mutes stāvokļa. Jo garāka ir tilta konstrukcija, jo svarīgāka ir precīza plānošana un pareizs slodzes sadalījums.</p>
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
                  Izvēloties zobu tiltu, svarīgi ne tikai atjaunot trūkstošos zobus, bet arī nodrošināt, lai
                  protēze būtu ērta, estētiska un droša ilgtermiņā. Bangų zobārstniecības klīnikā Klaipēdā zobu
                  tilti tiek plānoti individuāli, izvērtējot pacienta zobu, smaganu, sakodiena un vispārējo mutes
                  stāvokli.
                </p>
                <p>
                  Klīnikā liela uzmanība tiek pievērsta precīzai ārstēšanas plānošanai. Pirms protezēšanas
                  uzsākšanas tiek apspriests, vai konkrētajā gadījumā piemērotāks ir zobu tilts uz dabiskiem
                  zobiem, tilts uz implantiem vai cits zobu atjaunošanas risinājums. Pacientam skaidri tiek
                  izskaidrota ārstēšanas gaita, iespējamie materiāli, sagatavošanas posmi un turpmākā protēzes
                  kopšana.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā tiek tiekts, lai zobu atjaunošana būtu ne tikai funkcionāla, bet
                  arī dabiski atbilstu pacienta smaidam. Pēc protezēšanas pacientam tiek sniegtas skaidras
                  rekomendācijas par ikdienas higiēnu, profilaktiskajām vizītēm un tilta aizsardzību no pārmērīgas
                  slodzes, lai sasniegtais rezultāts būtu pēc iespējas ilglaicīgāks.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties zobu tiltu konsultācijai Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja Jums trūkst zoba vai vairāku zobu un meklējat stabilu, dabiski izskatīgu risinājumu, aicinām
                  pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā tiks izvērtēts Jūsu mutes
                  stāvoklis, apspriestas piemērotākās zobu tilta iespējas un izstrādāts individuāls ārstēšanas plāns.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā tiecamies, lai zobu protezēšana būtu skaidra, ērta un rūpīgi
                  saplānota. Šeit Jūs gaida pieredzējuši speciālisti, moderna aprīkojums un rūpīga attieksme pret
                  katru pacientu.
                </p>
                <p>
                  Pierakstieties zobu tilta konsultācijai un atjaunojiet savu smaidu profesionāli un uzticami.
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
