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
  { id: 'kas-yra', label: 'Kas ir rentgena izmeklējumi?' },
  { id: 'indikacijos', label: 'Kad nepieciešams?' },
  { id: 'paslaugu-tipai', label: 'Izmeklējumu veidi' },
  { id: 'procesas', label: 'Kā tiek veikts izmeklējums?' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function RentgenaIzmeklejumiLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/rentgena-izmeklejumi/#service`,
    "name": "Rentgena izmeklējumi Klaipēdā",
    "serviceType": "Rentgena izmeklējumi",
    "description": "Rentgena diagnostikas pakalpojumi tiek sniegti Bangų zobārstniecības klīnikā Klaipēdā. Klīnikā tiek veikti zobu rentgena izmeklējumi, izmantojot modernu digitālo aprīkojumu.",
    "url": `${SITE_URL}/lv/pakalpojumi/rentgena-izmeklejumi/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": `${SITE_URL}/#dentist` },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Rentgena izmeklējumi Klaipēdā - Bangų klīnika"
        description="Rentgena izmeklējumi un zobu rentgens Klaipēdā☑️moderns digitālais aprīkojums☑️precīza diagnostika par cenu no 30€.⏩Pierakstieties Bangų klīnikā jau tagad."
        keywords="rentgena izmeklējumi, zobu rentgens, panorāmas uzņēmums, datortomogrāfija, 3D CBCT, Klaipēda"
        canonical={`${SITE_URL}/lv/pakalpojumi/rentgena-izmeklejumi`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/rentgenologiniai-tyrimai` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/rentgena-izmeklejumi` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/rentgenologiniai-tyrimai` },
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
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Rentgena izmeklējumi Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Zobu un žokļu slimības bieži attīstās nepamanāmi, un agrīnās stadijās to pazīmes var nebūt redzamas ar neapbruņotu aci. Šī iemesla dēļ rentgena diagnostika ir viena no svarīgākajām mūsdienu zobārstniecības sastāvdaļām, kas ļauj precīzi novērtēt gan zobu, gan apkārtējo audu stāvokli. Laikus veikts rentgena izmeklējums palīdz izvairīties no sarežģītākiem ārstēšanas posmiem un nodrošina precīzāku ārstēšanas plānošanu.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā rentgena izmeklējumi tiek veikti, izmantojot modernu digitālu diagnostikas aprīkojumu, kas ļauj iegūt skaidrus, detalizētus un ātri apstrādājamus attēlus. Tas sniedz ārstiem iespēju precīzi novērtēt situāciju un izvēlēties optimālo ārstēšanas risinājumu katram pacientam individuāli.
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

            <motion.section id="kainos" className="mt-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
              <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                      Rentgena izmeklējumu cenas
                    </h2>
                    <p className="text-slate-600">
                      Rentgena izmeklējuma cena ir atkarīga no izvēlētā izmeklējuma veida un tā apjoma. Piemērotāko izmeklējumu izvēlas ārsts, ņemot vērā klīnisko nepieciešamību – vai tā būtu zobu sāpju cēloņa noteikšana, implantēšanas plānošana vai ortodontiskās ārstēšanas novērtēšana.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Rentgena izmeklējumi</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Panorāmas rentgena uzņēmums', '30 €'],
                        ['Datortomogrāfijas uzņēmums (3D)', '80 €'],
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
                  Precīza rentgena izmeklējuma cena Klaipēdā tiek apspriesta konsultācijas laikā, ņemot vērā konkrēto klīnisko nepieciešamību. Caurspīdīga cenu noteikšana un profesionāla pieeja ļauj pacientiem justies pārliecināti un pieņemt informētu lēmumu.
                </p>
              </div>
            </motion.section>
          </motion.header>

          <motion.div className="mt-8 mb-12" variants={item}>
            <div className="bg-white rounded-[28px] border border-sky-200 shadow-soft overflow-hidden">
              <div className="grid lg:grid-cols-[5fr_4fr] gap-0 items-stretch">
                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-darkblue-700 mb-4">
                    Aicinām pierakstīties konsultācijai Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja Jums ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā mēs novērtēsim Jūsu mutes stāvokli, atbildēsim uz interesējošiem jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mēs tiecamies, lai katrs pacients justos pārliecināti – no pirmās konsultācijas līdz galīgajam rezultātam. Pierakstieties un speriet pirmo soli pretim veselam smaidam.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts izsmeļošs klīniskais novērtējums',
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
                <div className="relative aspect-[4/5] bg-sky-50">
                  <div className="pt-[125%]" />
                  <img
                    src="/team/Jonas-light%20LV.jpg"
                    alt="Bangų zobārstniecības klīnikas ārsts"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,transparent_15%)]" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="mb-10 no-x-scroll pan-y" variants={item}>
            <ReviewsCarousel />
          </motion.div>

          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir rentgena izmeklējumi zobārstniecībā?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Rentgena izmeklējumi zobārstniecībā ir mūsdienīgas diagnostikas metodes, kas ļauj ārstam ieraudzīt struktūras, kuras nav redzamas parastas apskates laikā. Tas ir viens no svarīgākajiem diagnostikas posmiem, bez kura mūsdienu ārstēšanas plānošana bieži būtu neiespējama vai nepietiekami precīza.
                </p>

                <div className="space-y-3 my-2">
                  <p className="font-semibold text-darkblue-700">Rentgena izmeklējuma laikā tiek iegūta informācija par:</p>
                  <div className="grid gap-3">
                    {[
                      'zobu sakņu struktūru un anatomiju',
                      'kaula blīvumu, apjomu un rezorbcijas pakāpi',
                      'slēptiem kariesa perēkļiem starp zobiem',
                      'iekaisuma procesiem pie saknēm vai kaula audos',
                      'cistām, veidojumiem, retinētiem vai neizšķīlušiem zobiem'
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

                <p>
                  Šie dati ļauj ārstam balstīties nevis uz minējumiem, bet uz objektīvu diagnostisko informāciju. Tas ievērojami samazina ārstēšanas kļūdu risku un uzlabo ilgtermiņa prognozi.
                </p>
                <p>
                  Svarīgi uzsvērt, ka rentgena izmeklējums nav tikai papildu diagnostikas solis. Daudzos gadījumos tā ir būtiska ārstēšanas daļa, īpaši plānojot implantēšanu, endodontisko ārstēšanu, ortodontiju vai ķirurģiskās procedūras.
                </p>
                <p>
                  Mūsdienīgā digitālā rentgena tehnoloģija ļauj iegūt īpaši augstas izšķirtspējas attēlus ar minimālu starojuma devu. Tāpēc izmeklējums ir drošs, ātrs un var tikt izmantots gan pieaugušajiem, gan bērniem, kad tas ir medicīniski nepieciešams.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section id="indikacijos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kad ir nepieciešami rentgena izmeklējumi?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Rentgena izmeklējumi tiek nozīmēti tad, kad ārstam ir nepieciešams precīzi novērtēt iekšējās mutes struktūras, kuras nav iespējams noteikt vizuālas apskates laikā. Bieži tie tiek veikti ne tikai simptomu esamības gadījumā, bet arī plānojot ārstēšanu iepriekš.
              </p>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-darkblue-700">Biežākās indikācijas:</h3>
                <div className="grid gap-3">
                  {[
                    'zobu sāpes, jutīgums vai spiediena sajūta',
                    'iespējams sakņu kanālu iekaisums',
                    'implantēšanas plānošana',
                    'ortodontiskā ārstēšana vai sakodiena novērtēšana',
                    'zobu izraušana vai ķirurģiskās iejaukšanās',
                    'traumas, triecieni vai žokļa bojājumi',
                    'retinēti, papildu vai neizšķīluši zobi',
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

              <p className="text-slate-700 leading-relaxed mb-6">
                Ļoti svarīgi ir tas, ka daudzas zobu patoloģijas ilgu laiku attīstās bez simptomiem. Piemēram, iekaisums pie saknes var progresēt klusi, līdz jau skar kaula audus.
              </p>

              <div className="space-y-3">
                <h3 className="font-semibold text-darkblue-700">Laikus veikts rentgena izmeklējums ļauj:</h3>
                <div className="grid gap-3">
                  {[
                    'agrīni noteikt patoloģijas',
                    'izvairīties no sarežģītas ķirurģiskas ārstēšanas',
                    'saglabāt dabīgos zobus',
                    'precīzi ieplānot implantēšanu',
                    'samazināt komplikāciju risku',
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

              <p className="text-slate-700 leading-relaxed mt-6">
                Šo iemeslu dēļ rentgena diagnostika tiek uzskatīta par neatņemamu gan ārstēšanas, gan profilakses sastāvdaļu.
              </p>
            </div>
          </motion.section>

          <motion.section id="paslaugu-tipai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kādi rentgena izmeklējumi tiek veikti Bangų zobārstniecības klīnikā?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Bangų zobārstniecības klīnikā tiek veikts plašs rentgena izmeklējumu spektrs, kas ļauj precīzi novērtēt dažādas klīniskās situācijas. Izmeklējuma metode tiek izvēlēta individuāli, ņemot vērā pacienta stāvokli un plānoto ārstēšanu.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Dentālie rentgena uzņēmumi</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tas ir mērķtiecīgs viena vai vairāku zobu attēls, kas ļauj novērtēt sakņu kanālus, kariesa bojājumus, iekaisuma procesus un kaula izmaiņas ap konkrētu zobu. Šis izmeklējums ir īpaši svarīgs endodontiskajai ārstēšanai.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Panorāmas rentgena uzņēmumi (ortopantomogrammas)</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tas ir kopīgs visa žokļa attēls, kurā redzami visi zobi, saknes un apkārtējās struktūras. Izmeklējums bieži tiek izmantots implantēšanas, protezēšanas vai ķirurģisko procedūru plānošanai.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">3D datortomogrāfija (CBCT)</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tas ir trīsdimensiju attēls, kas ļauj īpaši precīzi novērtēt kaula tilpumu, blīvumu, nervu kanālu novietojumu un citas anatomiskās īpatnības. Tas ir viens no svarīgākajiem izmeklējumiem implantoloģijā.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Cefalometriskie izmeklējumi</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek izmantoti ortodontijā, novērtējot žokļu attiecību, augšanas virzienu un zobu pozīcijas.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Intraorālā skenēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Digitāla zobu modelēšana, kas ļauj izveidot īpaši precīzu 3D mutes attēlu bez tradicionāliem nospiedumiem. Tiek izmantota protezēšanai un ortodontiskajai ārstēšanai.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā tiek veikti rentgena izmeklējumi?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Rentgena izmeklējumi Bangų zobārstniecības klīnikā tiek veikti pēc skaidras un konsekventas gaitas, nodrošinot diagnostikas precizitāti un pacienta komfortu. Katrs gadījums tiek novērtēts individuāli, tāpēc izmeklējuma gaita var nedaudz atšķirties atkarībā no izvēlētās metodes.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Pacienta informēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pacients tiek iepazīstināts ar izmeklējumu, tā mērķi un gaitu. Tiek paskaidrots, kāda informācija tiks iegūta un kā tā tiks izmantota ārstēšanas plānošanai.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Aizsardzības līdzekļi</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek uzlikti aizsardzības līdzekļi, piemēram, svina priekšauts, lai maksimāli samazinātu starojuma ietekmi. Mūsdienīgais aprīkojums izmanto īpaši mazu apstarojumu, tāpēc izmeklējums ir drošs.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Izmeklējuma izvēle</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek izvēlēta piemērotākā metode – dentālais, panorāmas vai 3D uzņēmums – atbilstoši klīniskajai situācijai un diagnostiskajai nepieciešamībai.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Attēla fiksēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek veikta ātra digitāla attēla fiksēšana, kas ilgst tikai dažas sekundes. Svarīgi palikt nekustīgi, lai attēls būtu precīzs.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Rezultātu novērtēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Iegūtie dati tiek nodoti ārstam, kurš tos novērtē un iekļauj ārstēšanas plānā. Izmeklējums tiek veikts tikai medicīniskas indikācijas gadījumā, tāpēc ir pamatots un drošs.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc vērts izvēlēties Bangų zobārstniecības klīniku rentgena izmeklējumiem?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Precīza diagnostika ir veiksmīgas zobārstnieciskās ārstēšanas pamats, tāpēc rentgena izmeklējumam jābūt veiktam ne tikai tehniski kvalitatīvi, bet arī profesionāli interpretējot iegūtos datus. Bangų zobārstniecības klīnikā Klaipēdā liela uzmanība tiek pievērsta gan modernajam digitālajam aprīkojumam, gan ārstu pieredzei diagnostisko attēlu analīzē.
                </p>
                <p>
                  Klīnikā katrs gadījums tiek novērtēts kompleksi – rentgena dati vienmēr tiek saskaņoti ar klīnisko apskati un pacienta anamnēzi. Tas ļauj izvairīties no virspusējiem lēmumiem un nodrošināt individuāli pielāgotu ārstēšanas plānu, kas atbilst reālajam mutes stāvoklim. Šāda metodika ir īpaši svarīga, plānojot implantēšanu, endodontisko vai ķirurģisko ārstēšanu, kad pat mazākās detaļas var ietekmēt galīgo rezultātu.
                </p>
                <p>
                  Mūsdienīgais digitālais rentgena aprīkojums sniedz iespēju ātri iegūt augstas izšķirtspējas attēlus, tāpēc diagnostiku un ārstēšanas plānošanu var uzsākt uzreiz. Pacienti arī var saņemt skaidru paskaidrojumu par savu stāvokli jau pirmās vizītes laikā, bez papildu gaidīšanas vai neskaidrības.
                </p>
                <p>
                  Pacienti novērtē profesionālu komunikāciju, skaidras rekomendācijas un atbildīgu pieeju diagnostikai. Tāpēc Bangų zobārstniecības klīnika Klaipēdā ir uzticama izvēle, kad nepieciešams precīzs, drošs un profesionāli veikts rentgena izmeklējums.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties rentgena izmeklējumam Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja Jums ir nepieciešams rentgena izmeklējums – vai tā būtu zobu sāpju cēloņa noteikšana, implantēšanas plānošana vai ortodontiskās ārstēšanas novērtēšana – aicinām pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā tiks izvēlēts piemērotākais izmeklējuma veids un apspriesti turpmākie soļi.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā mēs tiecamies, lai diagnostika būtu precīza, ātra un pēc iespējas mazāk nogurdinoša pacientam. Šeit Jūs gaida pieredzējuši speciālisti, moderns digitālais aprīkojums un rūpīga attieksme pret katru pacientu.
                </p>
                <p>
                  Pierakstieties rentgena izmeklējumam un parūpējieties par savu mutes veselību laikus un profesionāli.
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
