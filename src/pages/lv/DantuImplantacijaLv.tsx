import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { TableOfContents } from '../../components/TableOfContents'
import { useRef } from 'react'
import { SITE_URL } from '../../i18n/lv'
import ReviewsCarousel from '../../components/ReviewsCarousel'

const tocSections = [
  { id: 'cenas', label: 'Implanti un cenas' },
  { id: 'kas-ir-implantacija', label: 'Kas ir implantācija?' },
  { id: 'ka-notiek', label: 'Kā notiek implantācija?' },
  { id: 'sastavdalas', label: 'No kā sastāv risinājums?' },
  { id: 'atskiribas', label: 'Atšķirības no citām metodēm' },
  { id: 'vai-piemerota', label: 'Vai piemērota visiem?' },
  { id: 'kapec-atjaunot-atri', label: 'Kāpēc svarīgi atjaunot ātrāk?' },
  { id: 'kam-nepieciesama', label: 'Kam nepieciešama implantācija?' },
  { id: 'all-on-4', label: 'ALL-ON-4 metode' },
  { id: 'all-on-4-prieksrocibas', label: 'ALL-ON-4 priekšrocības' },
  { id: 'vai-drosi', label: 'Vai droši? Vai sāpīgi?' },
  { id: 'cik-ilgi-kalpo', label: 'Cik ilgi kalpo implanti?' },
  { id: 'pec-implantacijas', label: 'Pēc implantācijas' },
  { id: 'kapec-mes', label: 'Kāpēc Bangų klīnika?' },
]

const P = '#002045'
const S = '#006b5f'
const SL = '#ecf5fb'

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

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

const processSteps = [
  {
    step: '1',
    title: 'Implants tiek ieskrūvēts kaulā',
    text: 'Pēc detalizētas diagnostikas implants tiek ievietots žoklī un kļūst par nākamā zoba balstu.',
    image: '/implantacija1.png',
  },
  {
    step: '2',
    title: 'Dzīšanas un ieaugšanas posms',
    text: 'Notiek osteointegrācija — implants saaug ar kaulu un kļūst par stabilu ilgtermiņa balstu.',
    image: '/implantacija2.png',
  },
  {
    step: '3',
    title: 'Tiek nostiprināts savienotājs',
    text: 'Pie implanta tiek piestiprināts abutments, kas savieno implantu ar nākamo kroni vai protēzi.',
    image: '/implantacija3.png',
  },
  {
    step: '4',
    title: 'Tiek nostiprināts kronis',
    text: 'Tiek pabeigta estētiska un funkcionāla zoba atjaunošana, kas maksimāli līdzinās dabiskam zobam.',
    image: '/implantacija4.png',
  },
]

const treatmentOptions = [
  {
    title: 'Ja trūkst viena zoba',
    text: 'Viens implants ļauj atjaunot trūkstošo zobu, nebojājot blakus esošos veselus zobus, un saglabāt dabisku mutes struktūru.',
    image: '/netekus1.png',
  },
  {
    title: 'Ja trūkst vairāku zobu',
    text: 'Vairāki implanti var kalpot kā balsts tiltam vai atsevišķiem kroņiem, nodrošinot stabilu un estētisku rezultātu.',
    image: '/netekus2.png',
  },
  {
    title: 'Ja trūkst visu zobu',
    text: 'Uz implantiem var nostiprināt fiksētus visa žokļa risinājumus, tostarp ALL-ON-4 metodi.',
    image: '/netekus3.png',
  },
]

export default function DantuImplantacijaLv() {
  const pageRef = useRef<HTMLDivElement | null>(null)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Zobu implantācija',
    description:
      'Zobu implantācija Klaipēdā — modernākais zaudēto zobu atjaunošanas risinājums. Ilgmūžīgi Straumann® un Neodent® implanti, ALL-ON-4 metode, skaidras cenas.',
    url: `${SITE_URL}/lv/pakalpojumi/zobu-implantacija`,
    performedBy: {
      '@type': 'Dentist',
      name: 'Bangų klinika',
      url: SITE_URL,
      telephone: '+37067191399',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bangų g. 7-3, Klaipėda',
        addressLocality: 'Klaipēda',
        addressCountry: 'LT',
      },
    },
  }

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Zobu implantācija Klaipēdā - Bangų klīnika"
        description="Zobu implantācija Klaipēdā — modernākais zaudēto zobu atjaunošanas risinājums. Ilgmūžīgi Straumann® un Neodent® implanti, ALL-ON-4 metode, skaidras cenas."
        keywords="zobu implantācija, implanti Klaipēda, Straumann, Neodent, all-on-4, zobu atjaunošana, Bangų klīnika"
        canonical={`${SITE_URL}/lv/pakalpojumi/zobu-implantacija`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-implantacija` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/zobu-implantacija` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-implantacija` },
        ]}
        structuredData={structuredData as any}
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
          <motion.header
            className="mb-12 rounded-[28px] border border-brand/10 bg-white overflow-hidden shadow-soft"
            variants={item}
          >
            <div className="grid lg:grid-cols-[5fr_7fr] gap-0 items-stretch">
              <div className="p-6 sm:p-8 lg:p-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-darkblue-700 mb-4">
                  Zobu implantācija
                </h1>
                <h2 className="text-base sm:text-lg font-semibold text-darkblue-600 mb-5 leading-snug">
                  Zobu implantācija Klaipēdā — modernākais zaudēto zobu atjaunošanas risinājums
                </h2>
                <p className="text-base text-slate-600 leading-relaxed mb-6">
                  Moderns un ilgtermiņa risinājums zaudēto zobu atjaunošanai — no viena zoba līdz visa žokļa atjaunošanai.
                </p>
                <div className="space-y-3 text-slate-700 mb-8">
                  {[
                    'Individuāls ārstēšanas plāns atbilstoši jūsu situācijai',
                    'Ilgmūžīgi un estētiski implantu risinājumi',
                    'Iespēja atjaunot vienu, vairākus vai visus zobus',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-1"><CheckIcon /></span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/lv/kontakti"
                    className="btn-primary btn-glow rounded-full px-7 py-3 font-semibold text-base inline-block shadow-lg hover:shadow-xl transition"
                  >
                    Pierakstīties vizītei
                  </Link>
                  <a
                    href="#cenas"
                    className="rounded-full px-7 py-3 font-semibold text-base inline-block border border-brand/20 text-darkblue-700 hover:bg-brand-50 transition"
                  >
                    Skatīt cenas
                  </a>
                </div>
              </div>

              <div className="relative min-h-[320px] lg:min-h-full bg-brand-50/40">
                <img
                  src="/implantacija.webp"
                  alt="Zobu implantācija Klaipēdā"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/20 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/30 lg:to-transparent" />
              </div>
            </div>
          </motion.header>

          {/* INTRO */}
          <motion.section className="mb-12 space-y-4 text-slate-700 leading-relaxed" variants={item}>
            <p>
              Zaudēti zobi — tā nav tikai estētiska problēma. Tie tieši ietekmē košļāšanas funkciju, runu, sakodumu,
              sejas proporcijas un kopējo dzīves kvalitāti. Laika gaitā, zaudējot vienu vai vairākus zobus, mainās
              visa mutes sistēma: blakus zobi sāk pārvietoties, palielinās slodze uz atlikušajiem zobiem, žokļa kauls
              sāk zust, bet sejas vaibsti var kļūt izteiktāk iegrimuši. Tāpēc mūsdienu zobārstniecībā arvien lielāka
              uzmanība tiek pievērsta ne tikai pagaidu risinājumiem, bet ilgtermiņa, uzticamam un fizioloģiski pareizam
              zobu atjaunošanas veidam.
            </p>
            <p>
              Tieši tāpēc zobu implantācija šodien tiek uzskatīta par modernāko un efektīvāko metodi zaudēto zobu
              atjaunošanai. Tas ir risinājums, kas ļauj atjaunot ne tikai redzamo zoba daļu, bet arī tā sakni,
              nodrošinot dabisku funkciju, stabilitāti un estētiku. Atšķirībā no izņemamajām protēzēm vai tiltiem,
              implanti kļūst par stingru balstu mākslīgajiem zobiem un palīdz saglabāt žokļa kaulu un dabisko sejas
              formu.
            </p>
            <p>
              Bangų zobārstniecības klīnikā Klaipēdā implantācija tiek veikta, izmantojot tikai augstākās kvalitātes,
              pasaulē atzītus risinājumus. Pacientiem tiek piedāvāti ilgmūžīgi zobu implanti, izgatavoti pēc stingrākajiem
              medicīniskajiem standartiem un piemēroti ilgstošai lietošanai. Pieredzējušie implantologi katru gadījumu
              izvērtē individuāli, izvēloties piemērotāko ārstēšanas metodi atbilstoši mutes stāvoklim, kaula apjomam un
              pacienta gaidām.
            </p>
          </motion.section>

          {/* KAINOS / CENAS */}
          <motion.section
            id="cenas"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                    Zobu implantācijas cenas
                  </h2>
                  <p className="text-slate-600">
                    Galīgā zobu implantācijas cena ir atkarīga no nepieciešamo implantu skaita, izvēlētā implanta veida, žokļa kaula stāvokļa un papildu procedūru nepieciešamības. Pirms ārstēšanas vienmēr tiek veikta detalizēta konsultācija un diagnostika.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                  <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Izmantotie zobu implanti</h3>
                  <div className="divide-y divide-slate-100">
                    {[
                      ['Straumann® implants', '650 €'],
                      ['Neodent® implants', '500 €'],
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
                      ['Sinusa pacelšanas operācija', '500–700 €'],
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
                Precīza implantācijas cena tiek noteikta individuālās konsultācijas laikā, izvērtējot pacienta mutes stāvokli, diagnostikas datus un plānoto ārstēšanas gaitu. Skaidra cenu politika un mūsdienīgas tehnoloģijas ļauj Bangų zobārstniecības klīnikā piedāvāt finansiāli pieejamus implantācijas risinājumus, neatkāpjoties no kvalitātes un ilgmūžības.
              </p>
            </div>
          </motion.section>

          <div className="space-y-4 mb-12">
            <div className="bg-brand-50 rounded-2xl p-6 border border-brand border-slate-100 shadow-sm space-y-4 text-slate-700 leading-relaxed">
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700">No kā atkarīga implantācijas galīgā cena?</h2>
              <p>
                Zobu implantācijas cena katram pacientam var atšķirties, jo tā ir atkarīga no vairākiem individuāliem faktoriem.
                Cenu ietekmē nepieciešamo implantu skaits, izvēlētais implanta veids un žokļa kaula stāvoklis. Dažos gadījumos
                var būt vajadzīgas papildu procedūras, lai nodrošinātu drošu un stabilu implantāciju. Svarīgs ir arī ārstēšanas
                veids — vai tiek izvēlēta klasiskā implantācija, vai modernāks risinājums, piemēram, ALL-ON-4 metode.
              </p>
              <p>
                Tāpēc pirms ārstēšanas vienmēr tiek veikta detalizēta konsultācija un diagnostika. Tā ļauj precīzi izvērtēt
                situāciju, izplānot optimālu ārstēšanu un sniegt skaidru, pamatotu implantācijas un galīgās cenas plānu.
              </p>
            </div>
            <div className="bg-brand-50 rounded-2xl p-6 border border-brand shadow-sm space-y-4 text-slate-700 leading-relaxed">
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700">Ieguldījums ilgtermiņa risinājumā</h2>
              <p>
                Lai arī implantācija ir lielāks ieguldījums nekā pagaidu risinājumi, ilgtermiņā tā bieži ir ekonomiski izdevīgāka.
                Implanti palīdz saglabāt žokļa kaulu, nodrošina stabilu košļāšanu un parasti neprasa biežu nomaiņu vai korekcijas.
                Tas ir ieguldījums ne tikai smaidā, bet arī dzīves kvalitātē, komfortā un pārliecībā.
              </p>
            </div>
          </div>

          {/* CTA */}
          <motion.div className="mt-8 mb-12" variants={item}>
            <div className="bg-white rounded-[28px] border border-brand shadow-soft overflow-hidden">
              <div className="grid lg:grid-cols-[5fr_4fr] gap-0 items-stretch">
                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-darkblue-700 mb-4">
                    Aicinām pierakstīties implantācijas konsultācijai Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja apsverat zobu atjaunošanu ar implantiem un vēlaties uzzināt, kāds risinājums būtu vispiemērotākais jūsu situācijā, aicinām pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā pieredzējuši implantologi novērtēs mutes stāvokli, atbildēs uz jūsu jautājumiem un palīdzēs izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mēs cenšamies, lai implantācija būtu skaidrs, drošs un pacientam saprotams process, kas ved pie ilgtermiņa un stabila rezultāta. Pierakstieties konsultācijai un speriet drošu soli pretī pilnvērtīgam smaidam.
                  </p>

                  <div className="bg-brand-50/40 rounded-xl p-5 border border-brand/10 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts detalizēts klīniskais novērtējums',
                        'tiek apspriesti iespējamie ārstēšanas veidi',
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

                <div className="relative min-h-[320px] lg:min-h-0 bg-sky-50">
                  <img
                    src="/team/Donatas_Kubliuslight%20LV.jpg"
                    alt="Donatas Kubilius – implantologs Bangų klīnikā"
                    className="absolute inset-0 w-full h-full object-contain object-top"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,transparent_15%)]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* REVIEWS */}
          <motion.div className="mb-12 no-x-scroll pan-y" variants={item}>
            <ReviewsCarousel />
          </motion.div>

          {/* KAS IR IMPLANTĀCIJA */}
          <motion.section
            id="kas-ir-implantacija"
            className="mb-12 bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir zobu implantācija?</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Zobu implantācija ir mūsdienīga zobārstniecības metode, kuras laikā tiek atjaunots zaudēts zobs vai zobi,
                imitējot dabisku zoba struktūru jau no saknes. Atšķirībā no tradicionāliem risinājumiem, kas atjauno tikai
                redzamo zoba daļu, implantācija ļauj atjaunot visu zobu — gan balsta daļu žoklī, gan estētisko daļu virs smaganas.
              </p>
              <p>
                Implantācijas pamatā ir zobu implants, kas pilda dabiskās zoba saknes funkciju. Tas tiek ieskrūvēts žokļa kaulā un
                kļūst par stabilu balstu nākamajam mākslīgajam zobam. Uz implanta vēlāk tiek nostiprināts kronis, tilts vai protēze,
                kas atjauno košļāšanas funkciju un dabisku zobu estētiku.
              </p>
              <p>
                Viens no svarīgākajiem ieguvumiem ir implanta mijiedarbība ar kaulu. Pēc ievietošanas notiek osteointegrācija —
                implants pakāpeniski saaug ar žokļa kaulu un kļūst tā sastāvdaļa. Tāpēc implants ir stabils, uzticams un, pareizi kopjot,
                var kalpot daudzus gadus vai pat visu mūžu.
              </p>
            </div>
          </motion.section>

          {/* KĀ NOTIEK IMPLANTĀCIJA */}
          <motion.section
            id="ka-notiek"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
              Kā notiek zobu implantācija?
            </h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-brand-50 rounded-2xl border border-brand border-slate-100 shadow-sm overflow-hidden"
                >
                  <div className="relative">
                    <img src={step.image} alt={step.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/95 text-darkblue-700 font-bold flex items-center justify-center shadow">
                      {step.step}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-darkblue-700 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* SASTĀVDAĻAS */}
          <motion.section
            id="sastavdalas"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
              No kā sastāv zobu implantācijas risinājums?
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Zobu implantācija nav tikai implanta ievietošana. Tā ir kompleksa ārstēšana, ko veido vairāki savstarpēji saistīti elementi:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                'Implants — mākslīga zoba sakne, kas ievietota kaulā',
                'Abutments (savienotājs) — starpposma daļa, kas savieno implantu ar protēzi',
                'Kronis vai protēze — redzamā zoba daļa, kas atjauno estētiku un funkciju',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-brand-50 border border-brand border-slate-100 shadow-sm">
                  <span className="mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-700 leading-relaxed mt-6">
              Šo daļu kopums ļauj izveidot risinājumu, kas vizuāli un funkcionāli ir maksimāli līdzīgs dabiskam zobam.
            </p>
          </motion.section>

          {/* ATŠĶIRĪBAS */}
          <motion.section
            id="atskiribas"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Ar ko implantācija atšķiras no citām zobu atjaunošanas metodēm?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Salīdzinot ar tiltiem vai izņemamām protēzēm, implantācijai ir būtiskas priekšrocības. Protezējot ar tiltu, bieži jānoslīpē
                  blakus esošie veselie zobi, lai tie kalpotu kā balsts. Implantācijas gadījumā blakus zobi netiek skarti, tāpēc saglabājas to
                  integritāte.
                </p>
                <p>
                  Izņemamās protēzes nereti rada diskomfortu, kustību, spiedienu uz smaganām un ne vienmēr nodrošina pietiekamu košļāšanas stabilitāti.
                  Uz implantiem balstīti risinājumi ir fiksēti, nekustas un ļauj justies droši ēdot, runājot vai smaidot.
                </p>
              </div>
            </div>
          </motion.section>

          {/* VAI PIEMĒROTA */}
          <motion.section
            id="vai-piemerota"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <div className="space-y-6">
              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                  Vai implantācija ir piemērota visiem?
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Zobu implantācija ir iespējama daudziem pacientiem, taču pirms ārstēšanas vienmēr tiek veikts detalizēts izvērtējums.
                    Svarīgākie faktori — mutes dobuma stāvoklis, žokļa kaula apjoms un pacienta veselība. Pat tad, ja kaula trūkst, mūsdienu
                    zobārstniecība piedāvā risinājumus, kas ļauj sagatavoties implantācijai.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Implantāciju var veikt:
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'ja trūkst viena zoba',
                    'ja trūkst vairāku zobu',
                    'ja trūkst visu zobu vienā vai abos žokļos',
                    'pacientiem, kuri nav apmierināti ar izņemamām protēzēm',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-brand shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* KĀPĒC ĀTRI */}
          <motion.section
            id="kapec-atjaunot-atri"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8 mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Kāpēc zaudēto zobu ir svarīgi atjaunot pēc iespējas ātrāk?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zaudētā zoba atjaunošanu nevajadzētu atlikt uz ilgu laiku. Lai gan sākumā var šķist, ka viena zoba trūkums nerada lielas
                  neērtības, laika gaitā mutē sākas sarežģītas un bieži nemanāmas izmaiņas, kas ietekmē gan mutes veselību, gan pašsajūtu.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand border-slate-100 shadow-sm">
                <h3 className="font-bold text-darkblue-700 mb-2">Blakus zobu pārvietošanās un sakoduma izmaiņas</h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Zaudējot zobu, izveidojusies tukšā vieta mutē nekad nepaliek "neitrāla". Blakus zobi pakāpeniski pārvietojas spraugā,
                  bet pretējie zobi var pagarināties. Mainās sakodums, rodas nevienmērīga slodze, pieaug zobu nodiluma un lūzumu risks.
                  Tas var radīt žokļa locītavas diskomfortu, galvas vai kakla sāpes.
                </p>
              </div>
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand border-slate-100 shadow-sm">
                <h3 className="font-bold text-darkblue-700 mb-2">Žokļa kaula zudums</h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Dabīgā zoba sakne košļāšanas laikā stimulē žokļa kaulu. Kad zoba nav, stimulācija izzūd un kauls šajā vietā sāk
                  samazināties. Rezorbcija ir pakāpeniska, bet neizbēgama, ja zobs netiek atjaunots. Jo ilgāk gaida, jo mazāks kļūst
                  kaula apjoms, un nākotnē implantācija var būt sarežģītāka vai nepieciešamas papildu procedūras.
                </p>
              </div>
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand border-slate-100 shadow-sm">
                <h3 className="font-bold text-darkblue-700 mb-2">Košļāšanas un gremošanas problēmas</h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Trūkstot zobiem, košļāšanas funkcija kļūst neefektīva — pārtika netiek pietiekami sasmalcināta, tāpēc palielinās
                  slodze gremošanas sistēmai. Ilgtermiņā tas var radīt diskomfortu ēšanas laikā un gremošanas traucējumus, kā arī
                  ietekmēt uztura kvalitāti.
                </p>
              </div>
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand border-slate-100 shadow-sm">
                <h3 className="font-bold text-darkblue-700 mb-2">Mutes higiēnas un smaganu problēmas</h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Spraugas starp zobiem kļūst par vietu, kur vieglāk uzkrājas pārtikas atliekas un baktērijas. Tas apgrūtina ikdienas
                  higiēnu un palielina smaganu iekaisuma, kariesa un nepatīkamas elpas risku. Pat rūpīgi kopjot zobus, tukšā vieta var
                  kļūt par pastāvīgu problēmu avotu.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand">
                <h3 className="font-bold text-darkblue-700 mb-2">Sejas estētikas un pārliecības izmaiņas</h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Kaula zuduma un sakoduma izmaiņu dēļ var mainīties sejas kontūras — parādīties iegrimuši vaigi, dziļākas grumbas,
                  seja var izskatīties vecāka. Zobu trūkums bieži ietekmē arī psiholoģiski: cilvēki izvairās smaidīt, jūtas neērti
                  sarunās vai fotografējoties.
                </p>
              </div>
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand">
                <h3 className="font-bold text-darkblue-700 mb-2">Agrīna atjaunošana — vienkāršāka ārstēšana</h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Jo ātrāk tiek atjaunots zaudētais zobs, jo vienkāršāka un prognozējamāka ir ārstēšana. Laikus veikta implantācija
                  palīdz izvairīties no papildu procedūrām (piemēram, kaula pieaudzēšanas) un saīsina ārstēšanas procesu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAM NEPIECIEŠAMA */}
          <motion.section
            id="kam-nepieciesama"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <div className="space-y-6">
              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                  Kam nepieciešama zobu implantācija?
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Zobu implantācija ir viens no universālākajiem un plašāk pielietotajiem risinājumiem mūsdienu zobārstniecībā. To var izmantot
                    dažādās situācijās — no viena zoba atjaunošanas līdz sarežģītiem gadījumiem, kad trūkst visu zobu vienā vai abos žokļos.
                    Piemērotība vienmēr tiek vērtēta individuāli, taču indikāciju spektrs ir ļoti plašs.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Kad implantācija ir ieteicama?
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Implantācija parasti tiek rekomendēta, ja:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {[
                    'trūkst viens vai vairāki pastāvīgie zobi',
                    'zobs tika izņemts kariesa, periodonta slimību vai traumas dēļ',
                    'zobi ir stipri bojāti un vairs nav atjaunojami ar plombām vai kroņiem',
                    'senāks zobu zudums radījis sakoduma vai košļāšanas problēmas',
                    'izņemamās protēzes rada diskomfortu vai nestabilitāti',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-brand shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Svarīgi uzsvērt, ka implantāciju var plānot gan uzreiz pēc zoba zuduma, gan pēc ilgāka laika. Tomēr agrīns lēmums bieži
                  ļauj izvairīties no papildu procedūrām un saīsina ārstēšanas gaitu.
                </p>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Kāpēc pacienti izvēlas implantāciju?
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Pacienti izvēlas implantāciju tās funkcionālo, estētisko un ilgtermiņa priekšrocību dēļ. Galvenie iemesli:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Dabīga sajūta — uz implantiem atjaunotie zobi visvairāk līdzinās dabiskajiem.',
                    'Stabilitāte — implanti ir fiksēti, nekustas un netraucē ikdienā.',
                    'Kaula saglabāšana — implanti palīdz apturēt žokļa kaula zudumu.',
                    'Blakus zobu aizsardzība — nav jāslīpē veseli zobi, kā tiltu gadījumā.',
                    'Ilgmūžība — pareizi kopti implanti var kalpot gadu desmitiem.',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-brand shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* ALL-ON-4 */}
          <motion.section
            id="all-on-4"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            {/* Poster image block */}
            <div className="rounded-[28px] border border-brand bg-brand-50 overflow-hidden shadow-soft mb-8">
              <div className="grid lg:grid-cols-2 gap-0 items-stretch">
                <div className="p-6 sm:p-8 lg:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand mb-4">
                    Moderna metode
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-darkblue-700 mb-5">
                    ALL-ON-4 implantācija — visi zobi vienā dienā
                  </h2>
                  <div className="space-y-4 text-slate-700 leading-relaxed">
                    <p>
                      ALL-ON-4 implantācija ir viens no modernākajiem risinājumiem pacientiem, kuri zaudējuši visus vai gandrīz visus zobus vienā žoklī.
                      Metode ļauj atjaunot visu zobu loku vienas dienas laikā, nodrošinot fiksētus, stabilus un estētiskus zobus bez ilgas gaidīšanas.
                    </p>
                    <p>
                      Tas ir risinājums tiem, kuri vairs nevēlas samierināties ar izņemamām protēzēm, pastāvīgu diskomfortu vai ilgu ārstēšanas procesu.
                      ALL-ON-4 būtiski maina dzīves kvalitāti — jau pirmajā dienā pacients var smaidīt, runāt un ēst ar fiksētiem zobiem.
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link
                      to="/lv/ipasi-piedavajumi"
                      className="btn-primary rounded-full px-7 py-3 font-semibold text-base inline-block"
                    >
                      Uzzināt vairāk par ALL-ON-4
                    </Link>
                  </div>
                </div>
                <div className="relative aspect-[4/5] bg-brand-50">
                  <div className="pt-[125%]" />
                  <img
                    src="/1.jpg"
                    alt="ALL-ON-4 implantācija"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* ALL-ON-4 content */}
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">Kas ir ALL-ON-4 metode?</h3>
                <p>
                  ALL-ON-4 ir tehnika, kurā visa viena žokļa zobu loka atjaunošanai tiek izmantoti četri implanti. Divi implanti tiek ievietoti vertikāli
                  priekšējā daļā, bet pārējie divi — slīpā leņķī aizmugurē. Šāds izvietojums ļauj maksimāli izmantot esošo kaulu un nodrošina stingru
                  balstu visam zobu lokam.
                </p>
                <p className="mt-4">
                  Uz šiem četriem implantiem tajā pašā dienā tiek nostiprināta pagaidu, bet fiksēta protēze — tā izskatās kā dabīgi zobi un ļauj atgriezties
                  pie ierastā dzīves ritma.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-darkblue-700">Ko pacientam nozīmē "viens žoklis vienā dienā"?</h3>
                <p className="mt-4">Praksē tas nozīmē:</p>
                <div className="grid sm:grid-cols-2 gap-3 mt-4">
                  {[
                    'implantu ievietošana tiek veikta vienas dienas laikā',
                    'tajā pašā dienā tiek nostiprināti pagaidu fiksētie zobi',
                    'nav jāvalkā izņemamas protēzes dzīšanas laikā',
                    'pacients no klīnikas iziet ar zobiem',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-brand-50 border border-brand border-slate-100 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-darkblue-700">Kam ALL-ON-4 ir vispiemērotākā?</h3>
                <p className="mt-4">Metodi visbiežāk iesaka:</p>
                <div className="grid sm:grid-cols-2 gap-3 mt-4">
                  {[
                    'pacientiem, kuri zaudējuši visus zobus vienā vai abos žokļos',
                    'tiem, kuru atlikušie zobi ir stipri bojāti un vairs nav ārstējami',
                    'cilvēkiem, kuri nav apmierināti ar izņemamām protēzēm',
                    'pacientiem ar samazinātu žokļa kaula apjomu',
                    'tiem, kuri vēlas ātru un fiksētu risinājumu, nevis ilgu ārstēšanu',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-brand-50 border border-brand border-slate-100 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">Kāpēc ALL-ON-4 bieži ļauj izvairīties no kaula pieaudzēšanas?</h3>
                <p>
                  Klasiskā implantācijā papildu procedūras var būt nepieciešamas, ja žokļa kaula apjoms ir nepietiekams. ALL-ON-4 izmanto zonas, kur
                  kaula parasti ir vairāk, un ļauj implantus ievietot slīpi, nodrošinot stabilitāti pat pie kaula trūkuma.
                </p>
                <p className="mt-4">
                  Tas nozīmē īsāku ārstēšanas laiku, mazāk ķirurģisku iejaukšanos, zemāku komplikāciju risku un ātrāku atgriešanos pie ierastā dzīves ritma.
                </p>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">Pagaidu un galīgie zobi — kā notiek process?</h3>
                <p>
                  Pirmajā dienā tiek nostiprināti pagaidu fiksētie zobi — estētiski, stabili un funkcionāli. Tie ļauj komfortabli dzīvot dzīšanas laikā,
                  kamēr implanti pilnībā saaug ar kaulu.
                </p>
                <p className="mt-4">
                  Pēc dzīšanas posma pagaidu zobi tiek nomainīti pret galīgajiem — tie tiek izgatavoti individuāli, ņemot vērā sejas vaibstus, smaida līniju,
                  sakodumu un estētiskās gaidas. Rezultāts — dabīgi izskatīgi, stingri un ilgmūžīgi zobi.
                </p>
              </div>
            </div>
          </motion.section>

          {/* ALL-ON-4 PRIEKŠROCĪBAS */}
          <motion.section
            id="all-on-4-prieksrocibas"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <div className="space-y-6">
              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                  ALL-ON-4 priekšrocības, salīdzinot ar citiem zobu atjaunošanas risinājumiem
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Izvēloties zobu atjaunošanas metodi, pacientiem bieži rodas jautājums, ar ko ALL-ON-4 atšķiras no citām iespējām un kāpēc tā tiek uzskatīta
                    par vienu no modernākajiem risinājumiem. Lai pieņemtu pamatotu lēmumu, ir svarīgi saprast atšķirības starp ALL-ON-4, klasisko implantāciju un
                    izņemamām protēzēm.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">ALL-ON-4 un izņemamās protēzes</h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Izņemamās protēzes bieži izvēlas kā pagaidu vai lētāku risinājumu, taču tām ir vairāki trūkumi. Tās var kustēties, spiest smaganas,
                    traucēt runai vai ēšanai. Turklāt tās neaptur žokļa kaula zudumu, tāpēc situācija ar laiku var pasliktināties.
                  </p>
                  <p>
                    ALL-ON-4, pretēji, nodrošina fiksētu risinājumu, kas nekustas un ir stingri nostiprināts uz implantiem. Pacients var justies droši ēdot,
                    runājot un smaidot. Turklāt implanti stimulē žokļa kaulu, palīdzot saglabāt tā struktūru.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">ALL-ON-4 un klasiskā implantācija ar lielāku implantu skaitu</h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Pilna žokļa klasiskā implantācija bieži prasa vairāk implantus, papildu ķirurģiskas procedūras un ilgāku ārstēšanas laiku. Var būt nepieciešama
                    kaula pieaudzēšana, sinusa pacelšana un ilgs dzīšanas periods līdz galīgo zobu nostiprināšanai.
                  </p>
                  <p>
                    ALL-ON-4 ļauj sasniegt stabilu rezultātu ar četriem implantiem, daudzos gadījumos izvairoties no sarežģītām papildu procedūrām. Tas nozīmē
                    īsāku ārstēšanas laiku, mazāku ķirurģisko slodzi un ātrāku atgriešanos pie ierastā ritma.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">Laiks — viena no lielākajām ALL-ON-4 priekšrocībām</h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Būtiska atšķirība ir ārstēšanas ilgums. Klasiskās implantācijas gadījumā pacients var gaidīt vairākus mēnešus līdz galīgajiem zobiem.
                  </p>
                  <p>
                    ALL-ON-4 ļauj vienas dienas laikā atjaunot visu zobu loku, nostiprinot pagaidu, bet fiksētus zobus tajā pašā dienā. Tas ir īpaši svarīgi, ja
                    pacients nevēlas vai nevar ilgi palikt bez zobiem vai lietot izņemamas protēzes.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">Ilgtermiņa vērtība</h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Lai arī sākotnēji ALL-ON-4 var šķist dārgāks, ilgtermiņā tas nereti ir ekonomiski izdevīgāks. Mazāk implantu, īsāks ārstēšanas laiks un
                    retākas korekcijas palīdz izvairīties no papildu izmaksām nākotnē.
                  </p>
                  <p>
                    ALL-ON-4 apvieno stabilitāti, estētiku, laiku un komfortu vienā risinājumā, kas daudziem pacientiem ir optimāla izvēle.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* VAI DROŠI / SĀPĪGI */}
          <motion.section
            id="vai-drosi"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <div className="space-y-6">
              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                  Vai zobu implantācija ir droša? Vai tā ir sāpīga?
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Implantācija bieži rada jautājumus un satraukumu, īpaši pacientiem, kuri ar ķirurģiskām procedūrām saskaras pirmo reizi.
                    Viens no biežākajiem uztraukumiem — vai procedūra būs sāpīga un vai implantācija ir droša ilgtermiņā. Mūsdienu zobārstniecība
                    ļauj uz šiem jautājumiem atbildēt droši.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">Implantācijas drošība</h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Zobu implantācija ir viena no visvairāk pētītajām un uzticamākajām procedūrām mūsdienu zobārstniecībā. Implanti tiek ražoti pēc stingriem
                    medicīnas standartiem un ir bioloģiski saderīgi, tāpēc organisms tos pieņem kā dabisku daļu.
                  </p>
                  <p>Drošību nodrošina:</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      'detalizēta diagnostika pirms ārstēšanas',
                      'individuāla ārstēšanas plānošana',
                      'sterili darba apstākļi',
                      'pieredzējušu speciālistu darbs',
                      'mūsdienīgas ķirurģiskās tehnoloģijas',
                    ].map((text, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-brand shadow-sm">
                        <span className="mt-1"><CheckIcon /></span>
                        <span className="text-slate-700">{text}</span>
                      </div>
                    ))}
                  </div>
                  <p>
                    Profesionāli veikta implantācija parasti sasniedz ļoti augstu panākumu rādītāju — bieži virs 95%.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">Vai implantācija ir sāpīga?</h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Implanta ievietošana tiek veikta vietējā anestēzijā, tāpēc procedūras laikā sāpes nav jūtamas. Daudzi pacienti procedūru apraksta kā īsu
                    un daudz mazāk nepatīkamu, nekā viņi gaidīja.
                  </p>
                  <p>
                    Procedūras laikā var būt jūtams viegls spiediens, vibrācija vai kustības sajūta, bet ne sāpes. Ja pacients izjūt lielāku satraukumu,
                    ārsts vienmēr izvēlas piemērotāko atsāpināšanas risinājumu.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">Sajūtas pēc procedūras</h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Pēc anestēzijas var parādīties neliels diskomforts, pietūkums vai vilkšanas sajūta — tā ir normāla organisma reakcija. Parasti simptomi ir
                    īslaicīgi un mazinās dažu dienu laikā.
                  </p>
                  <p>
                    Pacientiem tiek sniegtas skaidras rekomendācijas, kā kopt mutes dobumu, no kā izvairīties pirmajās dienās un kā samazināt pietūkumu un
                    diskomfortu. Ievērojot norādījumus, dzīšana parasti norit gludi.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">Riski un kā tie tiek kontrolēti</h3>
                <p className="text-slate-700 leading-relaxed">
                  Kā jebkurai medicīniskai procedūrai, arī implantācijai ir noteikti riski, taču tie ir reti un visbiežāk saistīti ar nepietiekamu mutes
                  higiēnu, smēķēšanu vai vispārējām veselības problēmām. Tāpēc pirms ārstēšanas tiek veikts detalizēts izvērtējums, kas palīdz samazināt
                  riskus līdz minimumam.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CIK ILGI KALPO */}
          <motion.section
            id="cik-ilgi-kalpo"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <div className="space-y-6">
              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                  Cik ilgi kalpo zobu implanti?
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Viens no biežākajiem jautājumiem ir par ilgmūžību: cik ilgi kalpos implanti un vai tas tiešām ir ilgtermiņa risinājums.
                    Mūsdienu zobārstniecība ļauj droši teikt, ka profesionāli ievietoti implanti, pareizi kopjot, var kalpot gadu desmitiem vai pat visu mūžu.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">Ilgmūžības pamats — implants un kauls</h3>
                <p className="text-slate-700 leading-relaxed">
                  Ilgmūžību nosaka osteointegrācija — process, kurā implants saaug ar žokļa kaulu. Kad integrācija ir pilnīga, implants kļūst par stabilu balstu,
                  kas spēj izturēt ikdienas košļāšanas slodzi.
                </p>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">Kas ietekmē implantu kalpošanas laiku?</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Lai gan implants ir izturīgs, tā kalpošanu ietekmē vairāki faktori:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                  <li>Mutes higiēna: ikdienas kopšana un profesionālā higiēna palīdz izvairīties no iekaisuma ap implantu.</li>
                  <li>Regulāras profilaktiskās vizītes: kontroles ļauj laikus pamanīt izmaiņas un novērst komplikācijas.</li>
                  <li>Vispārējā veselība: atsevišķas slimības un kaitīgi ieradumi var ietekmēt dzīšanu un ilgtermiņa stabilitāti.</li>
                  <li>Ārsta pieredze un plānošana: precīzs izvietojums un pareizs plāns ir stabilitātes pamats.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">Kroņi un protēzes — vai tos vajag mainīt?</h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Svarīgi atšķirt implantu no kroņa vai protēzes, kas uz tā tiek nostiprināta. Pats implants parasti kalpo ļoti ilgi, bet augšējā daļa laika gaitā
                    var tikt atjaunota nolietojuma vai estētisku izmaiņu dēļ.
                  </p>
                  <p>
                    Tas ļauj ilgtermiņā saglabāt stabilu implantu un, ja nepieciešams, atjaunot tikai augšējo, redzamo zobu daļu.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">Implanti kā ilgtermiņa ieguldījums</h3>
                <p className="text-slate-700 leading-relaxed">
                  Lai gan sākotnēji implantācija var šķist lielāks ieguldījums, ilgtermiņā tā bieži ir izdevīgāka par alternatīvām, kuras prasa biežāku nomaiņu
                  vai korekcijas. Stabili implanti ļauj dzīvot pilnvērtīgi ar komfortu un pārliecību.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PĒC IMPLANTĀCIJAS */}
          <motion.section
            id="pec-implantacijas"
            className="mb-12 space-y-8 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas svarīgi zināt pēc implantācijas?
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Veiksmīga implantācija nebeidzas ar implanta ievietošanu. Ļoti svarīgs ir periods pēc procedūras, kad notiek dzīšana un implants saaug ar kaulu.
                Pareiza kopšana un ārsta rekomendāciju ievērošana palīdz nodrošināt gludu dzīšanu un ilgtermiņa stabilitāti.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand border-slate-100 shadow-sm">
                <h3 className="font-bold text-darkblue-700 mb-2">Pirmās dienas pēc implantācijas</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Pirmajās dienās var būt neliels pietūkums, vilkšanas sajūta vai jutīgums implantācijas zonā. Tā ir normāla reakcija.
                  Parasti simptomi pakāpeniski mazinās dažu dienu laikā.
                </p>
                <p className="text-slate-700 text-sm leading-relaxed mt-3">
                  Ieteicams izvairīties no intensīvas fiziskas slodzes, pirmo diennakti izvēlēties mīkstāku ēdienu, nelietot ļoti karstus dzērienus vai ēdienu,
                  nesmēķēt un nelietot alkoholu.
                </p>
              </div>
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand border-slate-100 shadow-sm">
                <h3 className="font-bold text-darkblue-700 mb-2">Mutes higiēna dzīšanas laikā</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Mutes higiēna ir viens no svarīgākajiem nosacījumiem implanta veiksmīgai ieaugšanai. Pat ja zona ir jutīga, kopšanu pārtraukt nedrīkst.
                </p>
                <p className="text-slate-700 text-sm leading-relaxed mt-3">
                  Jālieto mīksta zobu birste, ārsta rekomendētie līdzekļi un jāizvairās no spēcīga spiediena implantācijas zonā.
                </p>
              </div>
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand border-slate-100 shadow-sm">
                <h3 className="font-bold text-darkblue-700 mb-2">Uzturs pēc implantācijas</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Pirmajās dienās ieteicams mīksts, viegli sakošļājams ēdiens. Vēlāk var pakāpeniski atgriezties pie ierastā uztura, taču
                  jāizvairās no pārāk cieta vai lipīga ēdiena implantācijas zonā.
                </p>
                <p className="text-slate-700 text-sm leading-relaxed mt-3">
                  Piemērots uzturs palīdz izvairīties no mehāniska kairinājuma un nodrošina organismam nepieciešamās vielas dzīšanai.
                </p>
              </div>
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand border-slate-100 shadow-sm">
                <h3 className="font-bold text-darkblue-700 mb-2">Kontroles vizītes</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Pēc implantācijas tiek plānotas kontroles vizītes, kur ārsts novērtē dzīšanas gaitu, implanta stabilitāti un audu stāvokli.
                  Tas ļauj laikus pamanīt izmaiņas un nodrošināt, ka dzīšana norit pareizi.
                </p>
                <p className="text-slate-700 text-sm leading-relaxed mt-3">
                  Kontrole ir īpaši svarīga osteointegrācijas laikā, kad implants saaug ar kaulu.
                </p>
              </div>
            </div>
            <div className="bg-brand-50 p-6 rounded-2xl border border-brand border-slate-100 shadow-sm">
              <h3 className="text-lg font-semibold text-darkblue-700 mb-2">Ilgtermiņa kopšana</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Pat pēc veiksmīgas ieaugšanas ir svarīgi turpināt rūpēties par implantiem: ikdienas higiēna, profesionālā higiēna un profilaktiskās vizītes
                palīdz saglabāt stabilitāti un estētiku daudzus gadus.
              </p>
            </div>
          </motion.section>

          {/* KĀPĒC MĒS */}
          <motion.section
            id="kapec-mes"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
              Kāpēc izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
            </h2>
            <div className="bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand">
              <p className="text-slate-700 leading-relaxed mb-6">
                Izvēloties, kur veikt zobu atjaunošanu ar implantiem, svarīgi ir ne tikai cena vai ātrums, bet arī komanda un pieeja, kas stāv aiz rezultāta.
                Bangų klīnikā implantācija tiek veikta, balstoties uz mūsdienīgiem standartiem, precīzu diagnostiku un individuālu pieeju katram pacientam.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Pieredzējuši implantologi',
                    text: 'Klīnikā strādā speciālisti, kuri veic gan viena zoba implantāciju, gan sarežģītus pilna žokļa atjaunošanas gadījumus.',
                  },
                  {
                    title: 'Precīza plānošana',
                    text: 'Ārstēšanas plāns tiek veidots, izvērtējot mutes stāvokli, kaula apjomu, gaidas, dzīvesveidu un ilgtermiņa mērķi.',
                  },
                  {
                    title: 'Uzticami implantu risinājumi',
                    text: 'Tiek izmantoti pasaulē atzīti implanti, izvēlēti atbildīgi — pēc klīniskās situācijas un paredzamās slodzes.',
                  },
                  {
                    title: 'Skaidra komunikācija',
                    text: 'Pacienti novērtē skaidru izskaidrojumu, caurspīdīgu cenu politiku un mierīgu, profesionālu attieksmi visā procesā.',
                  },
                ].map((c, i) => (
                  <div key={i} className="bg-brand-50 p-5 rounded-xl border border-brand border-slate-100 shadow-sm">
                    <div className="flex items-start gap-3">
                      <span className="mt-1"><CheckIcon /></span>
                      <div>
                        <p className="font-semibold text-darkblue-700">{c.title}</p>
                        <p className="text-sm text-slate-600 leading-relaxed mt-1">{c.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

        </div>
      </motion.div>
    </AnimatedSection>
  )
}
