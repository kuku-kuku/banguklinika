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
  { id: 'kas-yra', label: 'Kas ir gudrības zobu izvilkšana?' },
  { id: 'indikacijos', label: 'Kad nepieciešams izvilkt?' },
  { id: 'procesas', label: 'Kā notiek procedūra?' },
  { id: 'gijimas', label: 'Dzīšana pēc procedūras' },
  { id: 'komplikacijos', label: 'Iespējamās komplikācijas' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function GudribasZobuIzvilksanaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/lv/pakalpojumi/gudribas-zobu-izvilksana/#service",
    "name": "Gudrības zobu izvilkšana Klaipēdā",
    "serviceType": "Gudrības zobu izvilkšana",
    "description": "Gudrības zobu izvilkšanas pakalpojums tiek sniegts Bangų zobārstniecības klīnikā Klaipēdā. Klīnikā tiek veikta gudrības zobu izvilkšana pacientiem Klaipēdas pilsētā.",
    "url": "https://www.banguklinika.lt/lv/pakalpojumi/gudribas-zobu-izvilksana/",
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Gudrības zobu izvilkšana Klaipēdā - Bangų klīnika"
        description="Gudrības zobu izvilkšana Klaipēdā – droši☑️profesionāli☑️Bangų klīnikā par cenu no 150€.⏩Pierakstieties konsultācijai jau šodien."
        keywords="gudribas zobu izvilksana, gudribas zobi, zobu ekstrakcija, klaipeda, kirurgiska izvilksana"
        canonical={`${SITE_URL}/lv/pakalpojumi/gudribas-zobu-izvilksana`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/protiniu-dantu-salinimas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/gudribas-zobu-izvilksana` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/protiniu-dantu-salinimas` },
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
              Gudrības zobu izvilkšana Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Gudrības zobu izšķilšanās ir viens no biežākajiem vēlīnajiem zobu attīstības posmiem, kas nereti
                  izraisa dažādas komplikācijas. Vietas trūkuma dēļ žoklī šie zobi bieži izšķiļas nepareizi, ir daļēji
                  neizšķīlušies vai paliek pilnībā retinēti. Šādas situācijas var izraisīt sāpes, smaganu iekaisumus,
                  spiedienu uz blakus esošajiem zobiem vai pat sakodiena izmaiņas.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā gudrības zobu izvilkšana tiek veikta, izmantojot modernas
                  ķirurģiskas metodes un digitālo diagnostiku, kas ļauj precīzi novērtēt zoba stāvokli un sakņu
                  anatomiju. Katrs gadījums tiek vērtēts individuāli, lai nodrošinātu maksimālu drošību, audu
                  saudzēšanu un raitu dzīšanas procesu. Galvenais mērķis ir ne tikai izvilkt problēmu radošo zobu, bet
                  arī novērst iespējamās komplikācijas nākotnē.
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
                      Gudrības zobu izvilkšanas cenas
                    </h2>
                    <p className="text-slate-600">
                      Gudrības zobu izvilkšanas cena ir atkarīga no zoba stāvokļa, sakņu struktūras un procedūras
                      sarežģītības. Pirms procedūras veikšanas vienmēr tiek veikta apskate, kuras laikā tiek
                      novērtēta situācija un izvēlēta drošākā un piemērotākā zoba izvilkšanas metode.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Gudrības zobu izvilkšana</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Gudrības zobu izvilkšana', '150 – 300 €'],
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
                  Precīza gudrības zobu izvilkšanas cena Klaipēdā tiek apspriesta individuālas konsultācijas laikā,
                  ņemot vērā konkrēto klīnisko situāciju. Caurspīdīga cenu politika un profesionāla pieeja ļauj
                  pacientiem justies droši un pieņemt informētu lēmumu.
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
                    Ja Jums ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā novērtēsim Jūsu mutes stāvokli, atbildēsim uz interesējošajiem jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mēs tiecamies, lai katrs pacients justos droši – no pirmās konsultācijas līdz galīgajam rezultātam. Pierakstieties un speriet pirmo soli veselīga smaida virzienā.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikta detalizēta klīniskā izvērtēšana',
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

          {/* REVIEWS */}
          <motion.div className="mb-10 no-x-scroll pan-y" variants={item}>
            <ReviewsCarousel />
          </motion.div>

          {/* KAS YRA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir gudrības zobu izvilkšana un kāpēc tā tiek veikta?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Gudrības zobu izvilkšana ir ķirurģiska zobārstniecības procedūra, kuras laikā tiek izvilkti trešie
                  molārie zobi, ko dēvē arī par gudrības zobiem. Tie parasti izšķiļas pēdējie, tāpēc žoklī tiem
                  nereti nepietiek vietas, lai pareizi izvietotos zobu lokā.
                </p>
                <p>
                  Kad gudrības zobs izšķiļas nepareizi, tas var radīt spiedienu uz blakus esošajiem zobiem, veidot
                  iekaisuma perēkļus vai kļūt par pastāvīgu infekcijas cēloni. Turklāt sarežģītās piekļuves dēļ šos
                  zobus ir grūtāk iztīrīt, tāpēc tie biežāk tiek bojāti kariesa dēļ.
                </p>
                <p>
                  Gudrības zobu izvilkšana var tikt veikta gan ārstēšanas, gan profilakses nolūkos. Dažos gadījumos
                  šie zobi tiek izvilkti vēl pirms izteiktu simptomu parādīšanās, lai izvairītos no nākotnes
                  komplikācijām, īpaši ja tiek plānota ortodontiskā ārstēšana vai zobu loka korekcija. Šāds lēmums
                  palīdz nodrošināt stabilāku ilgtermiņa mutes veselību.
                </p>
              </div>
            </div>
          </motion.section>

          {/* INDIKACIJOS */}
          <motion.section id="indikacijos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kad nepieciešams izvilkt gudrības zobus?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Lēmums par gudrības zobu izvilkšanu tiek pieņemts tikai pēc detalizētas klīniskās apskates un
                radioloģiskās izmeklēšanas. Ne visi gudrības zobi ir jāizvelk, tomēr noteiktās situācijās tie kļūst
                par skaidru riska faktoru mutes veselībai.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Biežākās indikācijas gudrības zobu izvilkšanai:</h3>

                <div className="grid gap-3">
                  {[
                    'pastāvīgas vai atkārtotas sāpes zoba rajonā',
                    'smaganu iekaisums, pietūkums vai strutošana ap gudrības zobu',
                    'nepareizs zoba stāvoklis vai daļēja neizšķilšanās',
                    'spiediens uz blakus esošajiem zobiem vai to nobīde',
                    'kariesa bojājumi, kurus nav iespējams kvalitatīvi ārstēt',
                    'sagatavošanās ortodontiskajai ārstēšanai vai sakodiena korekcijai'
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

              <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Svarīgi saprast, ka pat asimptomātiski gudrības zobi nākotnē var radīt risku. Tāpēc ārsts vienmēr
                  vērtē ne tikai pašreizējo situāciju, bet arī iespējamo ilgtermiņa prognozi. Ja zobi ir pilnībā
                  izšķīlušies, stabili un nerada nekādas sūdzības, tos var atstāt novērošanai, regulāri kontrolējot
                  to stāvokli.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā tiek veikta gudrības zobu izvilkšana?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Gudrības zobu izvilkšana ir rūpīgi plānota ķirurģiska procedūra, kuras gaita ir atkarīga no zoba
                stāvokļa, sakņu formas un apkārtējo audu stāvokļa. Katrs gadījums ir individuāls, tāpēc pirms
                procedūras tiek veikta detalizēta diagnostika, kas ļauj precīzi novērtēt iespējamos sarežģītības
                faktorus un izvēlēties drošāko ārstēšanas metodi.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Diagnostika un plānošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pirms gudrības zobu izvilkšanas tiek veikta klīniskā apskate un rentgenoloģiskā vai 3D datortomogrāfijas
                    izmeklēšana. Šie dati ļauj novērtēt zoba stāvokli attiecībā pret kaulu, sakņu struktūru, nervu
                    kanālu tuvumu un iespējamos riskus. Pamatojoties uz šo informāciju, tiek sastādīts individuāls
                    ārstēšanas plāns, kas nodrošina maksimālu procedūras precizitāti un drošību.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Anestēzija</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Procedūra tiek veikta, izmantojot vietējo anestēziju, kas nodrošina, ka pacients procedūras laikā
                    nejūt sāpes. Sarežģītāku gadījumu vai paaugstinātas trauksmes gadījumā var tikt piemērotas
                    papildu sāpju mazināšanas metodes, lai nodrošinātu pilnīgu komfortu.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zoba izvilkšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Zobs uzmanīgi tiek atbrīvots un izvilkts no kaula alveolas. Ja zobs ir retinēts vai sarežģītā
                    stāvoklī, var tikt piemērota daļēja izvilkšana, kas ļauj samazināt audu traumu un nodrošināt
                    kontrolētu procedūras gaitu. Šāda taktika palīdz saglabāt apkārtējos audus un samazināt dzīšanas
                    periodu.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Brūces sakārtošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pēc zoba izvilkšanas brūce tiek rūpīgi iztīrīta, nepieciešamības gadījumā tiek uzlikti šuves vai
                    izmantoti hemostatiskie līdzekļi. Tas palīdz nodrošināt pareizu asins receklīša veidošanos, kas
                    ir nepieciešams raitai dzīšanai.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* GIJIMAS */}
          <motion.section id="gijimas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā notiek dzīšana pēc gudrības zobu izvilkšanas?</h2>

              <div className="text-slate-700 leading-relaxed space-y-4 mb-6">
                <p>
                  Dzīšana pēc gudrības zobu izvilkšanas ir dabisks organisma process, kas norit pa posmiem. Tās
                  ilgums ir atkarīgs no procedūras sarežģītības, individuālajām pacienta īpašībām un no tā, kā tiek
                  ievēroti ārsta ieteikumi. Parasti sākotnējā dzīšana ilgst 7–10 dienas, tomēr pilnīga audu
                  atjaunošanās var aizņemt ilgāku laiku.
                </p>
                <p>
                  Pirmajās stundās pēc procedūras svarīgākais process ir asins receklīša izveidošanās. Šis receklītis
                  aizsargā brūci un ir nepieciešams normālai dzīšanai. Tā bojāšana var izraisīt komplikācijas un
                  palēnināt dzīšanu.
                </p>
              </div>

              <div className={innerCard + ' mb-6'}>
                <h3 className="font-semibold text-darkblue-700 mb-4">Tipisks dzīšanas process:</h3>
                <ul className="space-y-3">
                  {[
                    '1 diena – receklīša veidošanās, iespējama viegla asiņošana',
                    '2–3 dienas – pietūkuma un jutīguma pīķis',
                    '4–7 dienas – audu reģenerācijas sākums',
                    '1–2 nedēļas – sākotnējā brūces sadzīšana'
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1">
                        <CheckIcon />
                      </span>
                      <span className="text-slate-700">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Lai nodrošinātu raitu dzīšanu, pirmajās dienās ieteicams izvairīties no karsta ēdiena, fiziskās
                  slodzes, smēķēšanas un intensīvas mutes skalošanas. Tāpat svarīgi ievērot individuālos ārsta
                  norādījumus. Pareiza kopšana būtiski samazina komplikāciju risku un paātrina atveseļošanos.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KOMPLIKACIJOS */}
          <motion.section id="komplikacijos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kādas ir iespējamās komplikācijas pēc gudrības zobu izvilkšanas?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Lai gan gudrības zobu izvilkšana tiek uzskatīta par drošu un ierastu ķirurģisku procedūru, tāpat kā
                jebkura iejaukšanās, tā var izraisīt noteiktas iespējamās komplikācijas. Visbiežāk tās ir īslaicīgas
                un viegli pārvaldāmas, ja pacients ievēro pēcoperācijas ieteikumus.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Iespējamās komplikācijas:</h3>

                <div className="grid gap-3">
                  {[
                    'alveolīts (sausā alveola) zaudēta asins receklīša dēļ',
                    'īslaicīgs pietūkums un jutīgums',
                    'neliela asiņošana pirmajās stundās',
                    'žokļa sastingums vai ierobežota mutes atvēršana',
                    'retos gadījumos – infekcijas procesi'
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
                  Alveolīts ir viena no biežākajām komplikācijām, kas izpaužas kā spēcīgākas sāpes, kuras var
                  izplatīties uz auss vai deniņu apvidu. Šādā gadījumā nepieciešama ārsta apskate un vietēja
                  ārstēšana, kas parasti ātri atvieglo simptomus.
                </p>
                <p>
                  Svarīgi uzsvērt, ka komplikāciju risks būtiski samazinās, kad procedūra tiek veikta profesionāli, un
                  pacients ievēro ieteikumus. Vairumā gadījumu dzīšana norit raiti un bez nopietnākiem sarežģījumiem.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KODĖL RINKTIS */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc izvēlēties Bangų zobārstniecības klīniku gudrības zobu izvilkšanai?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Gudrības zobu izvilkšana prasa ne tikai ķirurģisko pieredzi, bet arī precīzu plānošanu un atbildīgu
                  diagnostisko izvērtēšanu. Tāpēc svarīgi izvēlēties klīniku, kurā katrs gadījums tiek vērtēts
                  individuāli, un ārstēšanas lēmumi tiek balstīti ne tikai uz simptomiem, bet arī uz ilgtermiņa
                  pacienta mutes veselības prognozi.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā gudrības zobu izvilkšana tiek veikta, izmantojot modernu
                  diagnostiku un mūsdienīgas ķirurģiskās metodes. Pirms procedūras tiek rūpīgi novērtēts zoba
                  stāvoklis, sakņu anatomija un apkārtējo struktūru riski, lai nodrošinātu maksimālu drošību.
                </p>
                <p>
                  Klīnikā liela uzmanība tiek pievērsta pacienta komfortam. Tiek piemērota efektīva vietējā
                  anestēzija, un sarežģītāku gadījumu gadījumā tiek izvēlēti papildu sāpju mazināšanas risinājumi.
                  Procedūras gaita vienmēr tiek skaidri izskaidrota, lai pacients justos droši un izprastu katru
                  ārstēšanas posmu.
                </p>
                <p>
                  Pacienti novērtē profesionālo pieeju, konsekventu ārstēšanas procesu un mierīgu komunikāciju. Tāpēc
                  Bangų zobārstniecības klīnika ir uzticama izvēle, kad nepieciešama droša un profesionāla gudrības
                  zobu izvilkšana Klaipēdā.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties gudrības zoba izvilkšanai Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja jūtat sāpes, diskomfortu izšķiļoša gudrības zoba dēļ vai saņēmāt ieteikumu to izvilkt, aicinām
                  pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā tiks novērtēts Jūsu mutes
                  stāvoklis, apspriestas iespējamās ārstēšanas alternatīvas un, ja nepieciešams, ieplānota droša
                  gudrības zoba izvilkšana.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā mēs tiecamies, lai pat tādas procedūras kā gudrības zobu izvilkšana
                  būtu skaidras, pārvaldāmas un radītu pēc iespējas mazāku stresu. Šeit Jūs sagaida pieredzējuši
                  speciālisti, moderns aprīkojums un rūpīga attieksme pret katru pacientu.
                </p>
                <p>
                  Pierakstieties gudrības zoba izvilkšanai un parūpējieties par savu mutes veselību savlaicīgi un
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
