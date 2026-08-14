import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { TableOfContents } from '../../components/TableOfContents'
import ReviewsCarousel from '../../components/ReviewsCarousel'
import { SITE_URL } from '../../i18n/lv'

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } },
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const sectionWrap = 'mb-12 scroll-mt-36 2xl:scroll-mt-24'
const whiteCard = 'bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft'
const innerCard = 'bg-white p-5 rounded-xl border border-slate-200 shadow-sm'

const P = '#002045'
const S = '#006b5f'
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
  { id: 'kas-yra', label: 'Kas ir atjaunošana ar 4 implantiem?' },
  { id: 'kada-rekomenduojamas', label: 'Kad ir ieteicama?' },
  { id: 'kaip-veikia', label: 'Kā darbojas ALL-ON-4?' },
  { id: 'privalumai', label: 'Galvenās priekšrocības' },
  { id: 'netinkamas', label: 'Kam var nebūt piemērota?' },
  { id: 'procedura', label: 'Kā notiek procedūra?' },
  { id: 'gijimas', label: 'Dzīšana pēc procedūras' },
  { id: 'mitai', label: 'Mīti' },
  { id: 'duk', label: 'Biežāk uzdotie jautājumi' },
  { id: 'kodel-mes', label: 'Kāpēc Bangų klīnika?' },
]

type Package = {
  title: string
  price: string
  bullets: string[]
}

const packages: Package[] = [
  {
    title: 'ALL-ON-4 ar „Straumann Group Neodent" implantiem',
    price: '3800 €',
    bullets: [
      '3D rentgena uzņēmums',
      '4 „Straumann Group Neodent" implanti',
      'Oriģinālas protezēšanas detaļas',
      'Neizņemama pagaidu protēze',
    ],
  },
  {
    title: 'ALL-ON-4 ar „Straumann Group SLA" implantiem',
    price: '4900 €',
    bullets: [
      '3D rentgena uzņēmums',
      '4 „Straumann Group SLA" implanti',
      'Oriģinālas protezēšanas detaļas',
      'Neizņemama pagaidu protēze',
    ],
  },
  {
    title: 'ALL-ON-6 ar „Straumann Group Neodent" implantiem',
    price: '5300 €',
    bullets: [
      '3D rentgena uzņēmums',
      '6 „Straumann Group Neodent" implanti',
      'Oriģinālas protezēšanas detaļas',
      'Neizņemama pagaidu protēze',
    ],
  },
]

const processSteps = [
  {
    n: '01',
    title: 'Diagnostika un plānošana',
    text: 'Tiek novērtēts mutes stāvoklis, atlikušie zobi, smaganas, sakodiens un kaula daudzums. Tiek veikti radioloģiski izmeklējumi, visbiežāk 3D datortomogrāfija, kas ļauj plānot drošas implantu pozīcijas.',
  },
  {
    n: '02',
    title: 'Ārstniecības plāna sastādīšana',
    text: 'Pamatojoties uz izmeklējumiem, pacientam tiek paskaidrots, vai ALL-ON-4 metode ir piemērota, vai būs nepieciešamas papildu procedūras, kāda pagaidu un galīgā protēze ir sagaidāma. Tiek apspriesta procedūras gaita, dzīšana, kopšana un individuālā ārstniecības prognoze.',
  },
  {
    n: '03',
    title: 'Implantu ieskrūvēšana',
    text: 'Procedūra tiek veikta, izmantojot vietējo anestēziju. Žoklī tiek ieskrūvēti četri implanti: divi priekšējā daļā un divi aizmugurējā zonā slīpā leņķī, lai labāk izmantotu esošo kaulu.',
  },
  {
    n: '04',
    title: 'Pagaidu protēzes nostiprināšana',
    text: 'Vairumā gadījumu pēc implantācijas tiek nostiprināta pagaidu fiksēta protēze. Tā palīdz atjaunot estētiku un daļēju funkciju dzīšanas laikā, kamēr implanti vēl nav pilnībā integrējušies.',
  },
  {
    n: '05',
    title: 'Dzīšanas periods',
    text: 'Implanti pakāpeniski saplūst ar kaulu. Šajā laikā svarīgi ievērot uztura, higiēnas un kontroles vizīšu ieteikumus, izvairīties no pārmērīgas slodzes un novērot pašsajūtu.',
  },
  {
    n: '06',
    title: 'Galīgā protēze',
    text: 'Kad implanti ir integrējušies, tiek izgatavota galīgā protēze, kas pielāgota sakodienam, estētikai un ilgstošai lietošanai. Tā tiek veidota tā, lai būtu ērta košļāšanai, runāšanai un ikdienas kopšanai.',
  },
]

const myths = [
  {
    title: '4 implantu nepietiek visai zobu rindai',
    text: 'Četri implanti var būt pietiekams atbalsts visai zobu rindai, ja tie ir plānoti un ieskrūvēti pareizās pozīcijās. Stabilitāti nosaka ne tikai implantu skaits, bet arī to leņķis, kaula kvalitāte, protēzes konstrukcija un košļāšanas slodzes sadalījums.',
  },
  {
    title: 'Procedūra ir ļoti sāpīga',
    text: 'Zobu atjaunošana ar 4 implantiem tiek veikta, izmantojot vietējo anestēziju, tāpēc procedūras laikā pacientam sāpes nav jājūt. Pēc implantācijas var būt smeldze, jutīgums vai pietūkums, taču tas visbiežāk ir īslaicīga dzīšanas daļa.',
  },
  {
    title: 'Šī metode ir piemērota tikai vecāka gadagājuma cilvēkiem',
    text: 'ALL-ON-4 metode nav vecuma jautājums. Tā var būt piemērota dažāda vecuma pacientiem, kuri zaudējuši lielāko daļu vai visus zobus. Vissvarīgākais ir kaula stāvoklis, vispārējā veselība, mutes higiēna un ārstniecības prognoze.',
  },
  {
    title: 'Zobi uz 4 implantiem izskatās nedabīgi',
    text: 'Mūsdienu protezēšanas risinājumi ļauj atjaunot dabīgi izskatošos smaidu. Protēze tiek izgatavota individuāli, izvērtējot pacienta sejas vaibstus, lūpu līniju, sakodienu, smaganu estētiku un vēlamo zobu formu.',
  },
  {
    title: 'Pēc procedūras uzreiz var ēst visu',
    text: 'Lai gan pagaidu protēze bieži tiek nostiprināta ātri, dzīšanas laikā implantus nedrīkst pārslogot. Sākotnēji ieteicams mīkstāks ēdiens, lai implanti varētu stabili saplūst ar kaulu.',
  },
  {
    title: 'ALL-ON-4 der pat tad, kad kaula gandrīz nav',
    text: 'Šī metode var palīdzēt efektīvāk izmantot esošo kaulu, taču tā neder absolūti visos gadījumos. Ja kaula trūkums ir ļoti izteikts, var būt nepieciešama kaula papildināšana, papildu implanti vai cits ārstniecības plāns.',
  },
  {
    title: 'Pagaidu protēze ir tāda pati kā galīgā',
    text: 'Pagaidu protēze ir paredzēta dzīšanas laikam. Tā palīdz atjaunot estētiku un daļēju funkciju, taču galīgā protēze tiek izgatavota tikai pēc implantu integrācijas. Tā ir izturīgāka, precīzāka un paredzēta ilgstošai lietošanai.',
  },
  {
    title: 'Zobu atjaunošana ar 4 implantiem neprasa kopšanu',
    text: 'Fiksēta protēze nenozīmē, ka kopšana vairs nav nepieciešama. Ikdienas higiēna, speciāli tīrīšanas līdzekļi un regulāras profilaktiskas vizītes ir nepieciešamas, lai implanti, smaganas un protēze paliktu stabili.',
  },
  {
    title: 'Ja nesāp, kontroles vizītes nav nepieciešamas',
    text: 'Kontroles vizītes ir svarīgas arī tad, kad pacients jūtas labi. To laikā tiek novērtēts implantu, smaganu, protēzes un sakodiena stāvoklis, tāpēc iespējamās izmaiņas var pamanīt agri.',
  },
  {
    title: 'Visiem pacientiem der vienāds ārstniecības plāns',
    text: 'Zobu atjaunošana ar 4 implantiem vienmēr tiek plānota individuāli. Atšķiras kaula daudzums, smaganu stāvoklis, sakodiens, veselības vēsture, estētiskās gaidas un protezēšanas iespējas. Tāpēc galīgais plāns tiek sastādīts tikai pēc diagnostikas un konsultācijas.',
  },
]

const faqs = [
  {
    q: 'Vai zobu atjaunošana ar 4 implantiem ir sāpīga?',
    a: 'Procedūra tiek veikta, izmantojot vietējo anestēziju, tāpēc tās laikā pacientam sāpes nav jājūt. Pēc implantācijas var parādīties pietūkums, smeldze vai jutīgums, taču tā visbiežāk ir parasta dzīšanas reakcija, kas tiek kontrolēta ar ārsta ieteikumiem un nozīmētajām zālēm.',
  },
  {
    q: 'Kad zobu atjaunošana ar 4 implantiem ir piemērots risinājums?',
    a: 'Šī metode visbiežāk tiek ieteikta pacientiem, kuri zaudējuši visus vai lielāko daļu zobu vienā žoklī. Tā arī var būt piemērota, kad atlikušie zobi ir stipri bojāti, nav piemēroti saglabāšanai vai kad pacients vēlas atteikties no nestabilām izņemamajām protēzēm.',
  },
  {
    q: 'Ar ko šī metode atšķiras no izņemamajām protēzēm?',
    a: 'Atšķirībā no izņemamajām protēzēm, zobu atjaunošana ar 4 implantiem sniedz fiksētu risinājumu. Protēze tiek nostiprināta uz implantiem, tāpēc tā nekustas ēdot, runājot vai smaidot. Tas palīdz justies stabilāk, ērtāk un pārliecinātāk ikdienas situācijās.',
  },
  {
    q: 'Vai visus zobus var atjaunot vienā dienā?',
    a: 'Dažos gadījumos jā. Pēc implantu ieskrūvēšanas var tikt nostiprināta pagaidu fiksēta protēze, tāpēc pacients var iziet no klīnikas ar atjaunotu smaidu. Galīgā protēze tiek izgatavota vēlāk, kad implanti pilnībā saplūst ar žokļa kaulu.',
  },
  {
    q: 'Cik ilgi ilgst dzīšana pēc implantācijas?',
    a: 'Dzīšanas ilgums ir atkarīgs no pacienta mutes stāvokļa, kaula kvalitātes, vispārējās veselības, higiēnas un procedūras apjoma. Visbiežāk implantu integrācijas periods ilgst vairākus mēnešus. Šajā laikā notiek osteointegrācija — implantu saplūšana ar kaulu.',
  },
  {
    q: 'Vai šī metode der, ja ir samazinājies žokļa kauls?',
    a: 'Zobu atjaunošana ar 4 implantiem bieži ļauj efektīvāk izmantot esošo kaulu, jo aizmugurējie implanti var tikt ieskrūvēti slīpā leņķī. Tomēr piemērotība ir atkarīga no individuālās situācijas un tiek precīzi novērtēta pēc 3D datortomogrāfijas izmeklējuma.',
  },
  {
    q: 'No kā atkarīga visi zobi uz 4 implantiem cena?',
    a: 'Visi zobi uz 4 implantiem cena ir atkarīga no izvēlētās implantu sistēmas, pagaidu un galīgās protēzes veida, diagnostikas, papildu procedūru nepieciešamības un individuālā ārstniecības plāna. Precīza cena tiek noteikta konsultācijas laikā, izvērtējot pacienta mutes stāvokli.',
  },
  {
    q: 'Kā sagatavoties zobu atjaunošanai ar 4 implantiem?',
    a: 'Pirms procedūras tiek veikta konsultācija, klīniskā apskate un radioloģiskie izmeklējumi. Pacientam ir svarīgi informēt ārstu par lietotajām zālēm, hroniskajām slimībām, alerģijām un vispārējo veselības stāvokli. Ja nepieciešams, pirms implantācijas var tikt ieteikta profesionāla mutes higiēna vai cita sagatavošanas ārstēšana.',
  },
  {
    q: 'Kas ir svarīgi zināt pēc zobu atjaunošanas ar 4 implantiem?',
    a: 'Pēc procedūras svarīgi ievērot ārsta ieteikumus: izvēlēties mīkstāku ēdienu, izvairīties no lielas fiziskās slodzes, nesmēķēt, atbildīgi rūpēties par muti un ierasties uz kontroles vizītēm. Pareiza kopšana palīdz samazināt komplikāciju risku un nodrošināt raitāku dzīšanu.',
  },
  {
    q: 'Vai protēze uz 4 implantiem izskatās dabīgi?',
    a: 'Jā, protēze tiek izgatavota individuāli, ņemot vērā pacienta sejas vaibstus, smaida līniju, sakodienu, smaganu estētiku un vēlamo zobu formu. Pareizi plānota protēze izskatās dabīgi, palīdz atjaunot smaida estētiku un ļauj ērti košļāt.',
  },
]

export default function VisiZobiUz4ImplantiemLv() {
  const pageRef = useRef<HTMLDivElement | null>(null)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.banguklinika.lt/lv/pakalpojumi/visi-zobi-uz-4-implantiem/#service',
    name: 'Visi zobi uz 4 implantiem (All-on-4 implanti) Klaipēdā',
    serviceType: 'All-on-4 implantācija',
    description:
      'Visi zobi uz 4 implantiem (All-on-4) Klaipēdā – visas zobu rindas atjaunošana uz 4 implantiem Bangų zobārstniecības klīnikā. Cena no 3800 €.',
    url: 'https://www.banguklinika.lt/lv/pakalpojumi/visi-zobi-uz-4-implantiem/',
    areaServed: { '@type': 'City', name: 'Klaipēda' },
    provider: { '@id': 'https://www.banguklinika.lt/#dentist' },
  }

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Visi zobi uz 4 implantiem (All-on-4 implanti) Klaipēdā | Cena no 3800€ | Bangų klīnika"
        description="Visi zobi uz 4 implantiem (All-on-4) Klaipēdā – uzticams☑️moderns☑️risinājums visas zobu rindas atjaunošanai. Pierakstieties konsultācijai⏩Bangų klīnikā."
        keywords="visi zobi uz 4 implantiem, all-on-4, all on 4, zobu implantacija, straumann, neodent, klaipeda, bangų klinika"
        canonical={`${SITE_URL}/lv/pakalpojumi/visi-zobi-uz-4-implantiem`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/visi-dantys-ant-4-implantu` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/visi-zobi-uz-4-implantiem` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/visi-dantys-ant-4-implantu` },
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
              Visi zobi uz 4 implantiem (All-on-4 implanti)
            </h1>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                Zobu zaudēšana ir ne tikai estētiska, bet arī funkcionāla problēma, kas tieši ietekmē
                košļāšanu, runāšanu un vispārējo mutes veselību. Zaudējot lielāku daudzumu zobu, tradicionālie
                protezēšanas risinājumi ne vienmēr nodrošina stabilitāti vai komfortu, tāpēc mūsdienu
                implantoloģijā arvien biežāk tiek izvēlēta zobu atjaunošana ar 4 implantiem.
              </p>
              <p>
                Tā ir moderna ārstniecības metode, kas ļauj atjaunot visu zobu rindu tikai uz četriem
                implantiem, stratēģiski ieskrūvētiem žoklī. Šāda tehnoloģija sniedz pacientiem iespēju atgūt
                pilnvērtīgu košļāšanas funkciju, estētiku un pašapziņu ievērojami īsākā laikā nekā, piemērojot
                parastās implantācijas metodes.
              </p>
              <p>
                Bangų zobārstniecības klīnikā Klaipēdā šis ārstniecības risinājums tiek plānots individuāli,
                pamatojoties uz detalizētu diagnostiku, digitāliem izmeklējumiem un ilgtermiņa veiksmes
                prognozi. Mērķis ir ne tikai atjaunot zobus, bet arī nodrošināt dabisku sakodiena funkciju un
                ilgstošu rezultātu.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                to="/lv/kontakti"
                className="btn-primary btn-glow rounded-full px-7 py-3 font-semibold text-base inline-block shadow-lg hover:shadow-xl transition"
              >
                Pierakstīties vizītei
              </Link>
              <a
                href="#kainos"
                className="rounded-full px-7 py-3 font-semibold text-base inline-block border border-brand/20 text-darkblue-700 hover:bg-brand-50 transition"
              >
                Skatīt cenas
              </a>
            </div>
          </motion.header>

          {/* KAINOS */}
          <motion.section id="kainos" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                    Visi zobi uz 4 implantiem — cenas
                  </h2>
                  <p className="text-slate-600">
                    Katrā piedāvājumā ietilpst 3D rentgena uzņēmums, implanti, oriģinālas protezēšanas detaļas
                    un neizņemama pagaidu protēze. Pēc „All-on-4" implantācijas uzreiz tiek nostiprinātas
                    pagaidu protēzes, lai pacients varētu normāli smaidīt un košļāt dzīšanas laikā.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {packages.map((p, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 sm:p-7 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all flex flex-col"
                    style={{ borderColor: S }}
                  >
                    <h3 className="text-base font-extrabold mb-3 leading-snug" style={{ color: P }}>
                      {p.title}
                    </h3>
                    <div className="text-3xl font-extrabold mb-4" style={{ color: P }}>
                      {p.price}
                    </div>
                    <ul className="space-y-2 text-sm text-slate-700 mb-4 flex-1">
                      {p.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="mt-1"><CheckIcon /></span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="text-slate-600 text-sm mt-6 space-y-3">
                <p>
                  Pagaidu protēzes parasti tiek nēsātas apmēram 3–6 mēnešus, līdz implanti pilnībā integrējas
                  kaulā. Pēc šī perioda tiek veikts galīgais novērtējums, nolasīti precīzi nospiedumi, tiek
                  izgatavotas un nostiprinātas pastāvīgās protēzes, kas ir izturīgākas, estētiskākas un
                  ilgmūžīgākas.
                </p>
                <p>
                  Pastāvīgās protēzes visbiežāk tiek uzstādītas aptuveni 4 mēnešus pēc implantācijas (atkarībā
                  no individuālās dzīšanas). Precīza cena tiek noteikta konsultācijas laikā, izvērtējot
                  pacienta mutes stāvokli un individuālo ārstniecības plānu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* DOCTOR CTA */}
          <motion.div className="mt-8 mb-12" variants={item}>
            <div className="bg-white rounded-[28px] border border-sky-200 shadow-soft overflow-hidden">
              <div className="grid lg:grid-cols-[5fr_4fr] gap-0 items-stretch">
                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-darkblue-700 mb-4">
                    Aicinām pierakstīties konsultācijai Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja jums ir jautājumi vai vēlaties uzzināt vairāk par ārstniecības iespējām, aicinām
                    pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā mēs novērtēsim
                    jūsu mutes stāvokli, atbildēsim uz interesējošajiem jautājumiem un palīdzēsim izprast visu
                    ārstniecības gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Mēs tiecamies, lai katrs pacients justos droši — no pirmās konsultācijas līdz galīgajam
                    rezultātam. Pierakstieties un speriet pirmo soli uz veselīgu smaidu.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts detalizēts klīniskais novērtējums',
                        'tiek apspriestas iespējamās ārstniecības metodes',
                        'tiek paskaidroti procedūras posmi un termiņi',
                        'tiek sastādīts individuāls ārstniecības plāns',
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
                <div className="relative bg-sky-50">
                  <img
                    src="/team/donataskubilius.jpg"
                    alt="Donatas Kubilius – implantologs Bangų klīnikā"
                    className="w-full lg:absolute lg:inset-0 lg:h-full object-contain"
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas ir zobu atjaunošana ar 4 implantiem?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu atjaunošana ar 4 implantiem (ALL-ON-4 metode) ir mūsdienu implantoloģisks risinājums,
                  kad visa augšējā vai apakšējā žokļa zobu rinda tiek atjaunota, nostiprinot fiksētu protēzi
                  uz četriem implantiem. Divi implanti visbiežāk tiek ieskrūvēti priekšējā žokļa daļā
                  vertikāli, bet divi aizmugurējie — slīpā leņķī, lai labāk tiktu izmantots esošais kauls un
                  tiktu izveidots stabils balsts topošajai protēzei.
                </p>
                <p>
                  Šī metode ir paredzēta pacientiem, kuri zaudējuši lielāko daļu vai visus zobus, kad
                  izņemamās protēzes vairs nesniedz pietiekamu stabilitāti, košļāšanas komfortu vai pašapziņu
                  ikdienas situācijās. Uz implantiem var tikt nostiprināta pagaidu protēze, kas ļauj ātrāk
                  atjaunot smaida estētiku, un pēc implantu integrācijas tiek izgatavota galīgā protēze,
                  pielāgota sakodienam, smaganām un sejas proporcijām.
                </p>
                <p>
                  Zobu atjaunošana ar 4 implantiem ļauj atjaunot ne atsevišķus zobus, bet visu zobu rindu kā
                  vienotu funkcionālu sistēmu. Tas palīdz uzlabot košļāšanu, runas skaidrību, sejas atbalstu
                  un vispārējo dzīves kvalitāti. Svarīgi saprast, ka tas nav tikai ātrs estētisks risinājums —
                  ārstniecībai jābūt pamatotai ar precīzu diagnostiku, implantu stabilitātes novērtējumu un
                  ilgstošas kopšanas plānu. Galīgais lēmums vienmēr tiek pieņemts individuāli, izvērtējot
                  kaula daudzumu, smaganu stāvokli, sakodienu, vispārējo veselību un pacienta gaidas. Šāda
                  analīze palīdz izvēlēties drošāko atjaunošanas ceļu un nodrošināt, ka protēze ir ērta,
                  stabila un piemērota ikdienas lietošanai. Tas ir īpaši svarīgi pacientiem, kuri tiecas nevis
                  pēc pagaidu kompromisa, bet pēc skaidra, medicīniski pamatota zobu atjaunošanas risinājuma
                  un patieso ilgtermiņa pacienta vajadzību apmierināšanas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA REKOMENDUOJAMAS */}
          <motion.section id="kada-rekomenduojamas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kad ir ieteicama zobu atjaunošana ar 4 implantiem?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu atjaunošana ar 4 implantiem ir ieteicama pacientiem, kuri zaudējuši lielāko daļu vai
                  visus zobus vienā vai abos žokļos un vēlas fiksētu, ērtāku risinājumu nekā izņemamās
                  protēzes. Šī metode visbiežāk tiek apsvērta tad, kad tiek tiekts atjaunot visu zobu rindu,
                  uzlabot košļāšanu, runāšanu, smaida estētiku un ikdienas pašapziņu.
                </p>
                <p>
                  Šāda ārstēšana var būt piemērota, kad atlikušie zobi ir stipri bojāti kariesa, periodonta
                  slimību, traumu vai vecu restaurāciju dēļ un tos vairs nevar uzticami saglabāt. Tā ir
                  aktuāla arī pacientiem, kuri jau lieto izņemamās protēzes, taču jūt to kustību, spiedienu,
                  berzi, sliktu turēšanos vai diskomfortu ēdot un runājot.
                </p>
                <p>
                  Zobu atjaunošana ar 4 implantiem var tikt apsvērta arī tad, kad tiek novērota kaula
                  izzušana, taču vēl var stratēģiski izmantot esošās kaula zonas. Slīpā leņķī ieskrūvēto
                  aizmugurējo implantu princips dažos gadījumos palīdz samazināt kaula papildināšanas
                  nepieciešamību, tāpēc ārstniecība var būt īsāka un mazāk sarežģīta.
                </p>
                <p>
                  Tomēr piemērotība šai metodei tiek noteikta tikai individuāli. Ārsts novērtē kaula tilpumu,
                  smaganu stāvokli, sakodienu, vispārējo veselību, lietotās zāles, mutes higiēnu un pacienta
                  iespējas ievērot pēcoperācijas ieteikumus. Tikai pēc šāda novērtējuma var izlemt, vai
                  ALL-ON-4 metode sniegs drošu, stabilu un ilgstošu rezultātu. Ja šis risinājums nav
                  piemērots, tiek apspriestas citas implantācijas vai protezēšanas iespējas. Šāda gaita
                  palīdz izvairīties no nepamatotām gaidām un izvēlēties ārstēšanu atbilstoši reālajai mutes
                  klīniskajai situācijai un prognozei.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAIP VEIKIA */}
          <motion.section id="kaip-veikia" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kā darbojas ALL-ON-4 implantu metode?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  ALL-ON-4 implantu metode ir balstīta uz precīzu implantu izvietojumu un košļāšanas slodzes
                  sadalījumu. Daudzu implantu vietā visai zobu rindai tiek izmantoti četri implanti: divi
                  visbiežāk tiek ieskrūvēti priekšējā žokļa daļā vertikāli, bet divi aizmugurējie — slīpā
                  leņķī. Šāds risinājums ļauj labāk izmantot esošo kaulu un izveidot stabilu pamatu fiksētai
                  protēzei.
                </p>
                <p>
                  Priekšējā žokļa daļā kauls parasti ir blīvāks, tāpēc tur ieskrūvētie implanti palīdz
                  nodrošināt sākotnējo stabilitāti. Aizmugurējie slīpie implanti palielina balsta laukumu,
                  ļauj izvairīties no noteiktām anatomiskajām zonām, piemēram, sinusiem vai nerviem, un
                  palīdz vienmērīgāk sadalīt košļāšanas spēkus.
                </p>
                <p>
                  Uz četriem implantiem tiek nostiprināta pagaidu protēze, kas dzīšanas laikā atjauno estētiku
                  un daļēju funkciju. Kad implanti ir integrējušies ar kaulu, tiek izgatavota galīgā protēze,
                  precīzi pielāgota pacienta sakodienam, smaganām, sejas proporcijām un ikdienas košļāšanas
                  slodzei.
                </p>
                <p>
                  Šīs metodes veiksme ir atkarīga no diagnostikas, 3D plānošanas un individuāla protezēšanas
                  risinājuma. Tāpēc pirms procedūras tiek novērtēts kaula augstums, platums, mīksto audu
                  stāvoklis, sakodiena attiecība un vispārējā ārstniecības prognoze. Šāda plānošana palīdz
                  paredzēt, vai pacientam būs nepieciešamas papildu procedūras, vai implantus var ieskrūvēt
                  izvēlētā leņķī un kā pagaidu protēze pāries uz galīgo atjaunošanu. Katrs lēmums tiek
                  pieņemts atbilstoši klīniskajai situācijai, tāpēc metode paliek droša, prognozējama un
                  piemērota ilgstošai lietošanai. Tas sniedz pacientam vairāk skaidrības pirms ārstniecības
                  un ļauj precīzāk plānot visus posmus. Tas ir svarīgi ilgtermiņa mutes veselības ziņā.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PRIVALUMAI */}
          <motion.section id="privalumai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kādas ir galvenās zobu atjaunošanas ar 4 implantiem priekšrocības?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu atjaunošanai ar 4 implantiem ir vairākas svarīgas priekšrocības, kuru dēļ šī metode
                  bieži tiek izvēlēta, atjaunojot visu augšējā vai apakšējā žokļa zobu rindu. Pirmkārt, tas
                  ir fiksēts risinājums. Protēze tiek nostiprināta uz implantiem, tāpēc tā nekustas ēdot,
                  runājot vai smaidot un sniedz vairāk stabilitātes nekā izņemamās protēzes.
                </p>
                <p>
                  Cita priekšrocība ir ātrāka funkcijas un estētikas atjaunošana. Vairumā gadījumu pagaidu
                  protēze var tikt nostiprināta drīz pēc implantācijas, tāpēc pacients ārstniecības procesa
                  laikā nepaliek bez zobiem. Tas ir īpaši svarīgi psiholoģiskam komfortam, pašapziņai un
                  ikdienas komunikācijai.
                </p>
                <p>
                  Svarīga ir arī mazāka ķirurģiskās iejaukšanās nepieciešamība. Izmantojot četrus implantus,
                  var samazināt implantu skaitu, un slīpā leņķī ieskrūvēto aizmugurējo implantu dēļ dažos
                  gadījumos izdodas izvairīties no sarežģītākas kaula papildināšanas.
                </p>
                <p>
                  Šī metode arī palīdz atjaunot košļāšanas funkciju, skaidrāku runu, sejas atbalstu un
                  dabiskāku smaida estētiku. Tomēr lielākā priekšrocība ir nevis tikai ātrums, bet
                  individuāli plānots, ilgstošs risinājums, pielāgots konkrētā pacienta kaula stāvoklim,
                  sakodienam un veselības situācijai. Pareizi kopta protēze uz implantiem var palīdzēt
                  pacientam atgriezties pie parastā uztura, skaidrākas izrunas un brīvākas komunikācijas.
                  Vienlaikus samazinās izņemamo protēžu radītais diskomforts, berze vai bailes, ka protēze
                  pakustēsies nepiemērotā brīdī. Tāpēc tiek atjaunota ne tikai zobu funkcija, bet arī
                  vispārējs dzīves komforts un pašapziņa ikdienā.
                </p>
              </div>
            </div>
          </motion.section>

          {/* NETINKAMAS */}
          <motion.section id="netinkamas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kam var nebūt piemērota ALL-ON-4 metode?
              </h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Lai gan zobu atjaunošana ar 4 implantiem ir progresīva un bieži izmantota metode, tā nav
                universāls risinājums visiem pacientiem. Piemērotība ir atkarīga no mutes stāvokļa, kaula
                daudzuma, vispārējās veselības, higiēnas paradumiem un pacienta iespējām ievērot ārsta
                ieteikumus pēc procedūras. Tāpēc pirms ALL-ON-4 izvēles ir jānovērtē ne tikai vēlamais
                rezultāts, bet arī reālie medicīniskie apstākļi.
              </p>

              <h3 className="font-semibold text-darkblue-700 mb-4">ALL-ON-4 var netikt ieteikta, ja:</h3>
              <div className="grid gap-3">
                {[
                  'mutē ir aktīva infekcija, neārstēts iekaisums vai progresējusi periodonta slimība',
                  'tiek konstatēts ļoti izteikts kaula trūkums, kas neļauj droši ieskrūvēt implantus',
                  'pacients slimo ar nekontrolētām sistēmiskām slimībām, kas var traucēt dzīšanu',
                  'mutes higiēna ir nepietiekama un to neizdodas uzlabot pirms ārstniecības',
                  'pacients smēķē, nekontrolē bruksismu vai nevar ievērot pēcoperācijas norādījumus',
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="mt-1"><CheckIcon /></span>
                    <span className="text-slate-700">{t}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Šādos gadījumos ārsts vispirms var ieteikt sagatavošanas ārstēšanu: infekciju kontroli,
                profesionālu mutes higiēnu, periodontoloģisku ārstēšanu, kaula papildināšanu vai citu
                implantācijas plānu. Dažreiz četru implantu vietā var tikt piedāvāts lielāks implantu skaits
                vai posmveida zobu atjaunošana.
              </p>
              <p className="text-slate-700 leading-relaxed mt-4">
                Svarīgākais ir tas, ka lēmums netiek pieņemts pēc viena rādītāja. Galīgā piemērotība tiek
                noteikta tikai pēc konsultācijas, 3D izmeklējuma un individuālas risku analīzes. Šāds
                piesardzīgs novērtējums palīdz izvēlēties drošāko ceļu, izvairīties no nepamatotām gaidām un
                nodrošināt ilgtermiņa ārstniecības prognozi konkrētajam pacientam. Ja riski ir koriģējami,
                ārstniecība var tikt plānota vēlāk, kad mutes audi un vispārējais veselības stāvoklis kļūst
                stabilāki.
              </p>
            </div>
          </motion.section>

          {/* PROCEDURA */}
          <motion.section id="procedura" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kā notiek zobu atjaunošana ar 4 implantiem?
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Bangų zobārstniecības klīnikā procedūra tiek veikta secīgi, pamatojoties uz diagnostikas
                datiem un individuālo pacienta situāciju. Precīza plānošana palīdz izvēlēties implantu
                atrašanās vietu, izvērtēt protezēšanas iespējas un paredzēt dzīšanas gaitu.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {processSteps.map((s) => (
                  <div key={s.n} className={innerCard}>
                    <div className="text-4xl font-bold text-brand/20 mb-2">{s.n}</div>
                    <h3 className="font-bold text-darkblue-700 mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* GIJIMAS */}
          <motion.section id="gijimas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kā notiek dzīšana pēc zobu atjaunošanas ar 4 implantiem?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
                <p>
                  Dzīšana pēc zobu atjaunošanas ar 4 implantiem ir svarīgs ārstniecības posms, no kura ir
                  atkarīga implantu integrācija, protēzes stabilitāte un ilgstošais rezultāts. Lai gan
                  pagaidu fiksēta protēze bieži var tikt nostiprināta ātri, pirmajās nedēļās implanti vēl
                  nav pilnībā saplūduši ar kaulu, tāpēc ļoti svarīgi ir aizsargāt ārstēto zonu un ievērot
                  ārsta ieteikumus.
                </p>
                <p>
                  Pirmajās dienās pēc implantācijas var būt pietūkums, smeldze, jutīgums vai neliela
                  asiņošana. Tā ir parasta organisma reakcija uz ķirurģisku procedūru. Diskomforts parasti
                  pakāpeniski mazinās, un dzīšanas gaita ir atkarīga no pacienta veselības, mutes higiēnas,
                  smēķēšanas paradumiem, uztura un procedūras apjoma.
                </p>
              </div>

              <h3 className="font-semibold text-darkblue-700 mb-4">Dzīšanas posmi:</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ['Pirmās 24–72 st.', 'Iespējams pietūkums, jutīgums un nepieciešamība ievērot saudzīgāku režīmu.'],
                  ['3–7 dienas', 'Mīksto audu dzīšanas sākums, svarīga uzmanīga higiēna un mīkstāks ēdiens.'],
                  ['2–6 nedēļas', 'Audi stabilizējas, taču implantu slodze joprojām jākontrolē.'],
                  ['3–6 mēn.', 'Notiek osteointegrācija — implantu saplūšana ar žokļa kaulu.'],
                ].map(([title, text], i) => (
                  <div key={i} className={innerCard}>
                    <div className="font-bold text-darkblue-700 mb-1">{title}</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Dzīšanas laikā ir ieteicams izvairīties no cietas pārtikas, lielas fiziskās slodzes,
                smēķēšanas un patvaļīgas zāļu lietošanas. Regulāras kontroles vizītes ļauj izvērtēt, vai
                implanti dzīst atbilstoši plānam, vai pagaidu protēze pareizi sadala slodzi un kad var plānot
                galīgo protēzi. Pareiza kopšana palīdz samazināt komplikāciju risku un rada labākus
                apstākļus ilgstošam rezultātam.
              </p>
            </div>
          </motion.section>

          {/* MITAI */}
          <motion.section id="mitai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Mīti par zobu atjaunošanu ar 4 implantiem
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Zobu atjaunošana ar 4 implantiem joprojām ir apvīta ar dažādiem mītiem, kas pacientiem var
                radīt šaubas vai lieku uztraukumu. Mūsdienu implantoloģija balstās uz precīzu diagnostiku,
                individuālu plānošanu un modernām ārstniecības metodēm, tāpēc daudzi vecie priekšstati par
                ALL-ON-4 metodi šodien vairs neatbilst realitātei.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {myths.map((m, i) => (
                  <div key={i} className={innerCard}>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm font-extrabold text-brand">#{i + 1}</span>
                      <h3 className="font-bold text-darkblue-700 leading-snug">{m.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{m.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* DUK */}
          <motion.section id="duk" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Biežāk uzdotie jautājumi
              </h2>
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <details key={i} className="group bg-white rounded-xl border border-slate-200 shadow-sm">
                    <summary className="cursor-pointer list-none p-4 sm:p-5 flex items-start justify-between gap-4 font-semibold text-darkblue-700">
                      <span>{f.q}</span>
                      <span className="text-brand transition-transform group-open:rotate-45 text-2xl leading-none shrink-0">+</span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-5 text-slate-700 leading-relaxed">{f.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </motion.section>

          {/* KODĖL MES */}
          <motion.section id="kodel-mes" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Izvēloties zobu atjaunošanu ar 4 implantiem, svarīga ir ne tikai pati implantācijas
                  procedūra, bet arī viss ārstniecības process — no precīzas diagnostikas līdz pagaidu
                  protēzes pielāgošanai, dzīšanas kontrolei un galīgā zobu atjaunošanas plāna. Bangų
                  zobārstniecības klīnikā zobu atjaunošana ar 4 implantiem tiek plānota individuāli,
                  izvērtējot pacienta kaula tilpumu, smaganu stāvokli, sakodienu, atlikušo zobu situāciju,
                  estētikas vajadzības un topošās protēzes atrašanās vietu.
                </p>
                <p>
                  Klīnikā liela uzmanība tiek pievērsta individuālai plānošanai. Pirms ārstniecības uzsākšanas
                  tiek veikta detalizēta diagnostika, kas palīdz precīzi novērtēt, vai ALL-ON-4 metode ir
                  piemērota konkrētajā gadījumā, kādas implantu pozīcijas būtu drošākās, vai nepieciešamas
                  papildu procedūras un kāds protezēšanas risinājums var būt nepieciešams. Šāda pieeja ļauj
                  pacientam skaidri saprast ārstniecības gaitu, iespējamos posmus, dzīšanas periodu un
                  pieņemt informētu lēmumu.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā pacientam skaidri tiek paskaidrots, kā notiek zobu
                  atjaunošana ar 4 implantiem, ar ko pagaidu protēze atšķiras no galīgās un kas ir sagaidāms
                  pēc implantācijas. Pēc ārstniecības tiek sniegti ieteikumi par dzīšanu, higiēnu, uzturu un
                  kontroles vizītēm, lai tiktu radīti pēc iespējas labāki apstākļi implantu integrācijai,
                  protēzes stabilitātei un ilgstošam zobu atjaunošanas rezultātam.
                </p>
              </div>
            </div>
          </motion.section>

          {/* FINAL CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Pierakstieties konsultācijai Bangų klīnikā
              </h2>
              <div className="text-slate-700 max-w-3xl leading-relaxed mb-6 space-y-4">
                <p>
                  Vizītes laikā tiks novērtēts jūsu mutes stāvoklis, apspriestas iespējamās ārstniecības
                  alternatīvas un plānota vispiemērotākā ALL-ON-4 implantācijas gaita. Speriet pirmo soli uz
                  atjaunotu smaidu.
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
