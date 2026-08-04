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
  { id: 'kas-yra', label: 'Kāpēc pārbaude ir svarīga?' },
  { id: 'daznis', label: 'Ieteicamais biežums' },
  { id: 'etapai', label: 'Pārbaudes procesa posmi' },
  { id: 'nauda', label: 'No kā palīdz izvairīties?' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function BernuProfilaktiskaParbaudeLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/bernu-profilaktiska-parbaude/#service`,
    "name": "Bērnu profilaktiskā zobu pārbaude Klaipēdā",
    "serviceType": "Bērnu profilaktiskā zobu pārbaude",
    "description": "Bērnu profilaktiskās zobu pārbaudes pakalpojums tiek sniegts Bangų zobārstniecības klīnikā Klaipēdā. Klīnikā tiek veiktas regulāras bērnu mutes veselības pārbaudes.",
    "url": `${SITE_URL}/lv/pakalpojumi/bernu-profilaktiska-parbaude/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": `${SITE_URL}/#dentist` },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Bērnu profilaktiskā zobu pārbaude Klaipēdā — Bangų klīnika"
        description="Bērnu zobu pārbaude Klaipēdā ☑️ agrīna diagnostika ☑️ rūpīgi speciālisti ☑️ cena no 30€. Pierakstiet bērnu profilaktiskajai pārbaudei jau tagad."
        keywords="bērnu zobu pārbaude, bērnu zobārstniecība, profilaktiskā pārbaude, Klaipēda"
        canonical={`${SITE_URL}/lv/pakalpojumi/bernu-profilaktiska-parbaude`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/vaiku-profilaktinis-patikrinimas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/bernu-profilaktiska-parbaude` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/vaiku-profilaktinis-patikrinimas` },
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
              Bērnu profilaktiskā zobu pārbaude Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Bērnu mutes veselība ir dinamiska un nepārtraukti mainīga, tāpēc regulāra kontrole ļauj laikus
                  pamanīt pat ļoti agrīnas zobu vai smaganu izmaiņas. Lai gan piena zobi ir īslaicīgi, to stāvoklis
                  tieši ietekmē pastāvīgo zobu aizmetņus, sakodiena veidošanos, košļāšanas funkciju un runas
                  attīstību.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā bērnu profilaktiskā zobu pārbaude tiek veikta ne tikai lai
                  novērtētu esošo mutes stāvokli, bet arī lai novērstu kariesa progresēšanu, smaganu iekaisumu vai
                  nepareizu zobu izšķilšanos. Tā ir viena no svarīgākajām bērnu zobārstniecības metodēm, kas palīdz
                  izvairīties no sarežģītākas ārstēšanas nākotnē un nodrošina konsekventu mutes veselības aprūpi
                  no agrīna vecuma.
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
                      Bērnu profilaktiskās pārbaudes cenas
                    </h2>
                    <p className="text-slate-600">
                      Bērnu profilaktiskās zobu pārbaudes cena ir atkarīga no tā, vai vizītes laikā papildus tiek izsniegta izziņa. Pirms pārbaudes vienmēr tiek novērtēts bērna mutes stāvoklis un individuālās vajadzības.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Profilaktiskā pārbaude</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Profilaktiskā pārbaude', '30 €'],
                        ['Profilaktiskā pārbaude ar izziņu', '40 €'],
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
                  Precīza bērnu profilaktiskās zobu pārbaudes cena Klaipēdā tiek apspriesta konsultācijas laikā, ņemot vērā konkrēto gadījumu. Caurspīdīga cenu noteikšana palīdz vecākiem iepriekš zināt, ko sagaidīt no vizītes.
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
                    Ja Jums ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā novērtēsim Jūsu mutes stāvokli, atbildēsim uz interesējošiem jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā tiecamies, lai katrs pacients justos pārliecinoši — no pirmās konsultācijas līdz gala rezultātam. Pierakstieties un speriet pirmo soli pretim veselam smaidam.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts detalizēts klīniskais novērtējums',
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir bērnu profilaktiskā zobu pārbaude un kāpēc tā ir svarīga?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Bērnu profilaktiskā zobu pārbaude ir regulāra zobārstnieciska apskate, kuras laikā ārsts novērtē
                  zobu, smaganu, mutes gļotādas un sakodiena stāvokli. Vizītes mērķis ir ne tikai konstatēt jau
                  esošās izmaiņas, bet arī identificēt riska faktorus, kas nākotnē var izraisīt kariesu, emaljas
                  bojājumus vai ortodontiskās problēmas.
                </p>
                <p>
                  Bērna mutes dobums nepārtraukti mainās — izšķiļas jauni zobi, mainās sakodiens, un emalja vēl
                  nav pilnīgi nobriedusi. Šo iemeslu dēļ pat nelielas aplikuma uzkrāšanās vai neatbilstoši
                  higiēnas paradumi var ātri izraisīt kariesa attīstību. Profilaktiskās pārbaudes laikā šīs
                  izmaiņas tiek konstatētas agrīnā stadijā, kad tās var apturēt ar minimālu iejaukšanos.
                </p>
                <p>
                  Bērnu profilaktiskā zobu pārbaude arī ļauj novērtēt, cik efektīvi tiek veikta ikdienas mutes
                  higiēna mājās. Ja tiek pamanītas pastāvīgas aplikuma uzkrāšanās vietas, vecākiem tiek sniegti
                  konkrēti ieteikumi par zobu tīrīšanas tehniku, līdzekļu izvēli un aprūpes rutīnu.
                </p>
                <p>
                  Ir svarīgi saprast, ka profilakse nav formalitāte. Tas ir konsekvents novērošanas process, kas
                  ļauj nodrošināt, ka bērna zobi attīstās veselīgi un bez sarežģījumiem.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section id="daznis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kad ieteicams veikt bērnu profilaktisko zobu pārbaudi?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Bērnu profilaktiskā zobu pārbaude ir ieteicama regulāri, pat ja nav nekādu sūdzību. Parasti vizīte
                būtu jāveic ik pēc 6–12 mēnešiem, atkarībā no individuālā kariesa riska, mutes higiēnas kvalitātes
                un zobu attīstības posma.
              </p>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-darkblue-700">Īpaši svarīgi plānot profilaktisko pārbaudi šādos gadījumos:</h3>
                <div className="grid gap-3">
                  {[
                    'izšķiļoties pirmajiem piena vai pastāvīgajiem zobiem',
                    'intensīvas sakodiena maiņas periodā',
                    'pirms ortodontiskās ārstēšanas sākuma vai aparātu noņemšanas',
                    'ja ir paaugstināts kariesa risks vai biežs kariess',
                    'pamanot smaganu asiņošanu, jutību vai sliktu mutes elpu',
                    'pirms veselības izziņas iesniegšanas izglītības iestādei',
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
                  Bieži bērnu profilaktiskā zobu pārbaude tiek veikta pirms mācību gada sākuma, tomēr no
                  medicīniskā viedokļa svarīgākais ir nevis datums, bet gan regularitāte. Agrīna vizīte ļauj
                  izvairīties no rindām un nodrošināt, ka iespējamās izmaiņas tiek novērtētas laikus, kamēr tās
                  vēl nav progresējušas.
                </p>
                <p>
                  Regulāras pārbaudes arī palīdz veidot bērna pozitīvu attieksmi pret zobārstu, jo vizīte kļūst
                  par ierastu profilaktiskās aprūpes daļu, nevis tikai ārstēšanas nepieciešamības situāciju.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section id="etapai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā notiek bērnu profilaktiskā zobu pārbaude klīnikā?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Bērnu profilaktiskā zobu pārbaude Bangų zobārstniecības klīnikā tiek veikta konsekventi,
                nodrošinot bērna komfortu un skaidru katra posma paskaidrojumu. Vizītes laikā tiek novērtēta visa
                mutes veselības situācija, un vecākiem tiek sniegti individuāli slēdzieni un ieteikumi.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Mutes un zobu stāvokļa novērtēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek veikta detalizēta zobu, smaganu un mutes gļotādas apskate. Tiek novērtēta kariesa
                    esamība, emaljas demineralizācijas pazīmes, aplikuma uzkrāšanās un iespējamie iekaisuma procesi.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Sakodiena un zobu izšķilšanās analīze</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek novērtēts, kā attīstās bērna sakodiens, vai zobi izšķiļas pareizi, vai nav agrīnu
                    ortodontisku anomāliju pazīmju. Tas ir īpaši svarīgi, mainoties piena zobiem uz pastāvīgajiem.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Mutes higiēnas paradumu novērtēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek analizēts, kā bērns kopj zobus mājās, vai pietiekami efektīvi tiek noņemts aplikums.
                    Tiek identificētas vietas, kurās higiēna ir nepietiekama, un tiek sniegti ieteikumi.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Individuāls plāns un ieteikumi</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pēc pārbaudes vecākiem tiek sniegts skaidrs rīcības plāns: mutes aprūpes padomi, profilakses
                    biežums, iespējamie riski un, ja nepieciešams, turpmākie ārstēšanas vai higiēnas soļi.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Šāds strukturēts process ļauj bērnu profilaktisko zobu pārbaudi padarīt par nevis formālu
                vizīti, bet par reālu agrīnas diagnostikas un profilakses līdzekli.
              </p>
            </div>
          </motion.section>

          <motion.section id="nauda" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">No kā palīdz izvairīties regulāra bērnu profilaktiskā zobu pārbaude?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Regulāra bērnu profilaktiskā zobu pārbaude ir viens no efektīvākajiem līdzekļiem, lai novērstu
                  agrīnu kariesu, smaganu iekaisumu un nepareiza sakodiena progresēšanu. Agrīni konstatētas
                  izmaiņas ļauj piemērot minimāli invazīvus risinājumus, kas ir vienkāršāki, ātrāki un mazāk
                  noslogojoši bērnam.
                </p>
                <p>
                  Neārstēts kariess bērnu zobos var progresēt ļoti ātri plānākas emaljas un intensīvas bakteriālas
                  aktivitātes dēļ. Tas var izraisīt sāpes, infekcijas, zobu zaudēšanu vai pat ietekmi uz
                  pastāvīgo zobu aizmetņiem. Var arī rasties nepieciešamība pēc sarežģītākas ārstēšanas vai
                  ortodontiskām korekcijām nākotnē.
                </p>
                <p>
                  Regulāra profilakse ļauj nodrošināt, ka visas izmaiņas tiek pamanītas agrīnā stadijā un bērna
                  mutes veselība tiek pastāvīgi kontrolēta. Tas ne tikai aizsargā zobus, bet arī palīdz veidot
                  ilgtermiņa, pareizus mutes higiēnas paradumus.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc vērts izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Izvēloties bērnu profilaktisko zobu pārbaudi, svarīga ir ne tikai diagnostikas precizitāte, bet
                  arī bērna pieredze vizītes laikā. Bangų zobārstniecības klīnikā katra pārbaude tiek veikta,
                  ievērojot individuālas, maigas un skaidras komunikācijas principu, nodrošinot, ka bērns jūtas
                  droši.
                </p>
                <p>
                  Klīnikas speciālisti novērtē ne tikai zobu stāvokli, bet arī vispārējo mutes veselības
                  kontekstu: zobu izšķilšanos, sakodiena attīstību, aplikuma uzkrāšanās modeļus un agrīnos riska
                  faktorus. Vecākiem tiek sniegti skaidri, praktiski piemērojami ieteikumi, kas orientēti uz
                  ilgtermiņa mutes veselību.
                </p>
                <p>
                  Regulāra bērnu profilaktiskā zobu pārbaude Bangų zobārstniecības klīnikā ļauj ne tikai novērst
                  zobu slimības, bet arī veidot bērna pozitīvu attieksmi pret zobārstniecisko aprūpi jau no
                  agrīna vecuma.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīt bērnu profilaktiskajai pārbaudei Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja vēlaties parūpēties par sava bērna mutes veselību vai ir pienācis laiks regulārai pārbaudei, aicinām
                  pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā tiks novērtēts bērna mutes stāvoklis,
                  apspriesti higiēnas ieteikumi un, ja nepieciešams, saplānota turpmāka ārstēšana.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā tiecamies, lai katra bērna apmeklējums būtu mierīgs, skaidrs un iespējami maz
                  satraukumu izraisošs. Šeit Jūsu bērnu gaida pieredzējuši speciālisti, moderns aprīkojums un rūpīga attieksme
                  pret katru mazo pacientu.
                </p>
                <p>
                  Pierakstieties profilaktiskajai pārbaudei un parūpējieties par bērna mutes veselību laikus un profesionāli.
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
