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

const sectionWrap = 'mb-14 scroll-mt-36 2xl:scroll-mt-24'
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
  { id: 'cenas', label: 'Cenas' },
  { id: 'kas-ir', label: 'Kas ir estētiskā plombēšana?' },
  { id: 'problemas', label: 'Kādas problēmas risina?' },
  { id: 'process', label: 'Kā tiek veikta?' },
  { id: 'priekshrocibas', label: 'Priekšrocības' },
  { id: 'rezultata-ilgums', label: 'Rezultāta ilgums' },
  { id: 'pec-plombesanas', label: 'Pēc plombēšanas' },
  { id: 'vai-drosi', label: 'Vai droši?' },
  { id: 'kapec-mes', label: 'Kāpēc Bangų klīnika?' }
]

export default function EstetikaPlombanaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/estetiska-plombana/#service`,
    "name": "Estētiskā plombēšana Klaipēdā",
    "serviceType": "Estētiskā plombēšana",
    "description": "Estētiskās plombēšanas pakalpojums tiek sniegts Bangų zobārstniecības klīnikā Klaipēdā. Pakalpojums paredzēts, lai atjaunotu zobu formu, krāsu un estētiku.",
    "url": `${SITE_URL}/lv/pakalpojumi/estetiska-plombana/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Estētiskā zobu plombēšana Klaipēdā"
        description="Neapmierina zobu forma vai krāsa? Estētiskā zobu plombēšana Klaipēdā ļauj ātri un estētiski atjaunot smaidu. Vērsieties Bangų klīnikā."
        keywords="estētiskā plombēšana, zobu restaurācija, smaida korekcija, atstarpes starp zobiem, Klaipēda"
        canonical={`${SITE_URL}/lv/pakalpojumi/estetiska-plombana`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/estetinis-plombavimas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/estetiska-plombana` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/estetinis-plombavimas` },
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
        <TableOfContents sections={tocSections} rootRef={pageRef} cta={{ label: 'Reģistrēties vizītei', to: '/lv/kontakti' }} />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-12 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Estētiskā zobu plombēšana Klaipēdā
            </h1>

            <div className="mb-8">
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                <p>
                  Smaida estētikai ir liela nozīme pašpārliecinātībā un vispārējā pašsajūtā. Pat nelieli zobu defekti — atlūzumi, nolietojumi, atstarpes vai krāsas nevienmērība — var būtiski mainīt smaida izskatu. Šādos gadījumos estētiskā plombēšana kļūst par ātru un efektīvu risinājumu, kas ļauj atjaunot dabisko zobu izskatu bez sarežģītām un ilgstošām procedūrām.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā veiktā zobu estētiskā plombēšana ir viens no galvenajiem estētiskās zobārstniecības pakalpojumiem. Procedūras laikā tiek meklēts ne tikai uzlabot zobu izskatu, bet arī maksimāli saglabāt dabisko zoba audu. Individuāla pieeja, moderni materiāli un rūpīgs darbs ļauj sasniegt harmonisku un dabiski izskatošu smaidu.
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <Link
                to="/lv/kontakti"
                className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Reģistrēties vizītei
              </Link>
            </div>

            {/* CENAS */}
            <motion.section id="cenas" className="mt-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
              <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                      Estētiskās plombēšanas cenas
                    </h2>
                    <p className="text-slate-600">
                      Estētiskās plombēšanas cena atkarīga no restaurējamā zoba stāvokļa, bojājuma apjoma un nepieciešamām estētiskām korekcijām. Pirms procedūras vienmēr tiek veikta konsultācija, kuras laikā tiek novērtēta situācija un izvēlēts vispiemērotākais ārstēšanas risinājums, kas ļauj sasniegt optimālu estētisku un funkcionālu rezultātu.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Estētiskā plombēšana</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Estētiskā viena zoba plombēšana', '150 – 200 €'],
                        ['Estētiskās plombas pulēšana (atjaunošana)', 'no 29 €'],
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
                  Precīzs procedūras apjoms un galīgā cena tiek apspriesta individuālas konsultācijas laikā, ņemot vērā pacienta vajadzības un vēlamo rezultātu. Caurredzama cenu politika ļauj pieņemt pārliecinātu lēmumu par estētiskās zobārstniecības pakalpojumiem Klaipēdā — mūsu klīnikā.
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
                    Aicinām reģistrēties konsultācijai Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām reģistrēties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā novērtēsim Jūsu mutes stāvokli, atbildēsim uz jautājumiem un palīdzēsim saprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mēs cenšamies, lai katrs pacients justos pārliecināti — no pirmās konsultācijas līdz galīgajam rezultātam. Reģistrējieties un speriet pirmo soli uz veselīgu smaidu.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts izsmeļošs klīniskais novērtējums',
                        'tiek apspriestas iespējamās ārstēšanas metodes',
                        'tiek izskaidroti procedūras posmi un termiņi',
                        'tiek izveidots individuāls ārstēšanas plāns',
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
                    Reģistrēties vizītei
                  </Link>
                </div>
                <div className="relative bg-sky-50">                  <img
                    src="/team/Odeta-light%20LV.jpg"
                    alt="Odeta Balsienė — zobārste Bangų klīnikā"
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

          {/* KAS IR ESTĒTISKĀ PLOMBĒŠANA */}
          <motion.section id="kas-ir" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir estētiskā plombēšana?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Estētiskā plombēšana ir zobārstniecības procedūra, kuras laikā zobi tiek atjaunoti ar slāņu metodi, izmantojot augstas estētikas restauratīvos materiālus. Šī metode ļauj precīzi atjaunot zoba formu, krāsu, virsmas tekstūru un dabisko mirdzumu, vienlaikus maksimāli aizsargājot veselos zoba audus.
                </p>
                <p>
                  Estētiskās plombēšanas laikā var tikt atjaunoti nolietojušies, atlūzuši, kariesa vai citādi bojāti zobi, kā arī tiek koriģēta to forma, aizvērtas atstarpes starp zobiem vai maigi koriģēts zobu nokrāsa. Atkarībā no situācijas, var koriģēt vienu zobu vai pat vairākus priekšējos zobus vienas vizītes laikā, tāpēc rezultāts bieži tiek sasniegts tajā pašā dienā.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā izmantotie mūsdienu restauratīvie materiāli ļauj minimāli mainīt cietos zoba audus un saglabāt ilgtermiņa rezultātu. Viena zoba restaurācija vidēji ilgst apmēram 1,5 stundas, un pirms procedūras visbiežāk ir ieteicams veikt profesionālo mutes higiēnu, lai nodrošinātu optimālu estētisku un funkcionālu rezultātu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROBLĒMAS */}
          <motion.section id="problemas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Kādas problēmas var atrisināt ar estētisko plombēšanu?
              </h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Estētiskā plombēšana ir universāla procedūra, kas ļauj atrisināt dažādas — gan estētiskas, gan funkcionālas — zobu problēmas. Pateicoties slāņu tehnikai un mūsdienu restauratīviem materiāliem, iespējams īpaši precīzi atjaunot dabisko zobu izskatu, pielāgojot to visa smaida proporcijām.
              </p>

              <h3 className="font-semibold text-darkblue-700 mb-4">
                Visbiežāk ar estētisko plombēšanu risinātās problēmas:
              </h3>

              <div className="grid sm:grid-cols-1 gap-3">
                {[
                  'Nolietoti vai atlūzuši zobi, kad ir bojāta zoba mala vai virsma',
                  'Kariesa bojāti zobi, kad svarīga ne tikai ārstēšana, bet arī estētiska atjaunošana',
                  'Atstarpes starp zobiem (diastēmas), īpaši priekšējo zobu rajonā',
                  'Nepareiza zobu forma vai garums, kad zobi izskatās pārāk īsi vai nevienmērīgi',
                  'Krāsas nevienmērība, ko nav iespējams novērst ar zobu balināšanu'
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="mt-1">
                      <CheckIcon />
                    </span>
                    <span className="text-slate-700">{text}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Atkarībā no situācijas, ar estētisko plombēšanu var koriģēt vienu zobu vai vairākus zobus vienlaicīgi. Vienas vizītes laikā bieži tiek atjaunoti 4–6 priekšējie zobi, tāpēc pacients rezultātu redz tajā pašā dienā.
              </p>
            </div>
          </motion.section>

          {/* PROCESS */}
          <motion.section id="process" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Kā tiek veikta estētiskā plombēšana?
              </h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Estētiskā plombēšana Bangų zobārstniecības klīnikā tiek veikta, ievērojot secīgu un rūpīgi plānotu procedūras gaitu, kas nodrošina gan estētiku, gan zobu ilgmūžību. Katrs posms tiek pielāgots individuāli, ņemot vērā pacienta zobu stāvokli un vēlamo sasniedzamo rezultātu.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none">
                    01
                  </div>
                  <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Konsultācija un plānošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed relative z-10">
                    Procedūra sākas ar izsmeļošu apskati, kuras laikā tiek novērtēts zobu stāvoklis, forma, krāsa un sakodiens. Tiek apspriestas pacienta vēlmes un iespējamās korekciju robežas, tiecoties pēc dabiska rezultāta.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none">
                    02
                  </div>
                  <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Sagatavošanās procedūrai</h3>
                  <p className="text-sm text-slate-600 leading-relaxed relative z-10">
                    Pirms estētiskās plombēšanas visbiežāk ieteicams veikt profesionālo mutes higiēnu. Tas palīdz nodrošināt tīru zobu virsmu un labāku restauratīvo materiālu saķeri.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none">
                    03
                  </div>
                  <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Zobu restaurēšana pa slāņiem</h3>
                  <p className="text-sm text-slate-600 leading-relaxed relative z-10">
                    Izmantojot modernus plombu materiālus, zobs tiek atjaunots pa slāņiem, veidojot dabisku zoba anatomiju un nokrāsu. Viena zoba restaurācija vidēji ilgst apmēram 1,5 stundas, un darbs tiek veikts, maksimāli saudzējot veselus zoba audus.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none">
                    04
                  </div>
                  <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Galīgā veidošana un pulēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed relative z-10">
                    Procedūra tiek pabeigta ar rūpīgu zobu virsmas pulēšanu, lai atjaunotie zobi būtu gludi, mirdzoši un harmoniski ieplūstu kopīgajā smaida izskatā.
                  </p>
                </div>
              </div>

              <div className={`${innerCard} mt-6`}>
                <p className="text-slate-700 leading-relaxed">
                  Šāds secīgs process ļauj sasniegt estētisku, dabisku un ilgtermiņa rezultātu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PRIEKŠROCĪBAS */}
          <motion.section id="priekshrocibas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kādas ir estētiskās plombēšanas priekšrocības?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Estētiskā plombēšana tiek vērtēta kā viena no universālākajām estētiskās zobārstniecības procedūrām, jo ļauj sasniegt izteiktu rezultātu minimāli invazīvā veidā. Šī metode piemērota pacientiem, kuri vēlas uzlabot smaida estētiku, saglabājot pēc iespējas vairāk dabiskā zoba audu.
                </p>
                <p>
                  Viena no galvenajām estētiskās plombēšanas priekšrocībām — ātrs rezultāts. Bieži vienas vizītes laikā var atjaunot pat 4–6 priekšējos zobus, tāpēc smaida izmaiņas ir redzamas tajā pašā dienā.
                </p>
                <p>
                  Procedūras laikā izmantotie mūsdienu restauratīvie materiāli ļauj īpaši precīzi atjaunot zobu krāsu, formu un virsmas tekstūru. Zobi tiek atjaunoti pa slāņiem, tāpēc galīgais izskats izskatās dabiski un harmoniski ieplūst kopīgā smaida estētikā.
                </p>
                <p>
                  Svarīga priekšrocība — minimāla zobu slīpēšana vai atsevišķos gadījumos vispār nekāda. Tas ļauj maksimāli saglabāt veselus cietos audus, un pati procedūra ir saudzīga un droša.
                </p>
              </div>
            </div>
          </motion.section>

          {/* REZULTĀTA ILGUMS */}
          <motion.section id="rezultata-ilgums" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Cik ilgi saglabājas estētiskās plombēšanas rezultāts?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Estētiskās plombēšanas rezultāta ilgmūžība ir atkarīga no vairākiem faktoriem, tāpēc katra pacienta gadījums ir individuāls. Pareizi veikta estētiskā plombēšana un atbildīga kopšana ļauj priecāties par estētisku un funkcionālu rezultātu daudzus gadus.
                </p>
                <p>
                  Vislielāko ietekmi uz rezultātu atstāj ikdienas mutes kopšanas ieradumi. Regulāra zobu tīrīšana, starpzobu telpu higiēna un profilaktiskās vizītes pie zobārsta palīdz saglabāt restaurāciju estētisko izskatu un strukturālo stabilitāti.
                </p>
                <p>
                  Rezultāta ilgumu ietekmē arī restaurācijas atrašanās vieta un apjoms. Laika gaitā restaurācijas var dabiski nolietoties, tāpēc dažos gadījumos var būt nepieciešamas nelielas korekcijas vai pulēšana.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PĒC PLOMBĒŠANAS */}
          <motion.section id="pec-plombesanas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas svarīgi zināt pēc estētiskās plombēšanas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Pēc estētiskās plombēšanas procedūras pacienti visbiežāk uzreiz pamana smaida estētikas uzlabošanos. Atjaunoto zobu virsmas kļūst gludas, mirdzošas un dabiski saskan ar atlikušajiem zobiem. Tomēr pirmajās dienās pēc procedūras svarīgi ievērot noteiktus ieteikumus, lai rezultāts saglabātos pēc iespējas ilgāk.
                </p>

                <div className={innerCard}>
                  <p className="mb-4">
                    Pirmās stundas pēc procedūras ieteicams izvairīties no ļoti cieta vai īpaši krāsojoša ēdiena un dzērieniem, īpaši ja tika atjaunoti priekšējie zobi. Arī ieteicams nelietot zobus kā rīkus un izvairīties no lielas mehāniskās slodzes restaurētajā vietā.
                  </p>
                  <p>
                    Ikdienas mutes kopšanai pēc estētiskās plombēšanas jābūt maigai, bet konsekventai. Ieteicams tīrīt zobus ar mīkstu vai vidēja mīkstuma suku, lietot neabrazīvu zobu pastu un regulāri tīrīt starpzobu telpas.
                  </p>
                </div>

                <p>
                  Regulāras profilaktiskas vizītes un, ja nepieciešams, estētiskās plombas pulēšana palīdz saglabāt restaurāciju mirdzumu, krāsu un vispārējo estētisko izskatu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* VAI DROŠI */}
          <motion.section id="vai-drosi" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Vai estētiskā plombēšana ir droša?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Estētiskā plombēšana ir droša un plaši izmantota zobārstniecības procedūra, kad tā tiek veikta, ievērojot mūsdienu ārstēšanas standartus un izmantojot kvalitatīvus restauratīvos materiālus. Bangų zobārstniecības klīnikā šī procedūra tiek plānota individuāli, tiecoties maksimāli aizsargāt dabiskos zoba audus un nodrošināt ilgtermiņa rezultātu.
                </p>
                <p>
                  Procedūras laikā izmantotie mūsdienu plombu materiāli izceļas ar labu bioloģisko saderīgumu, izturību un estētiskām īpašībām. Zobi tiek atjaunoti pa slāņiem, tāpēc tiek saglabāta to dabiskā struktūra, un iejaukšanās ir minimāla.
                </p>
                <p>
                  Svarīgi uzsvērt, ka drošība ir atkarīga ne tikai no materiāliem, bet arī no pareizas plānošanas un speciālista pieredzes. Pirms procedūras tiek novērtēts zobu stāvoklis, sakodiens un pacienta vēlmes.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KĀPĒC MĒS */}
          <motion.section id="kapec-mes" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kāpēc izvēlēties Bangų zobārstniecības klīniku Klaipēdā?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Izvēloties estētisko plombēšanu, svarīgi uzticēties klīnikai, kurā valda profesionāla pieredze, estētiska nojauta un atbildīga pieeja katram pacientam. Bangų zobārstniecības klīnikā estētiskā zobārstniecība balstās uz individuāliem risinājumiem un rūpīgu darba plānošanu.
                </p>
                <p>
                  Klīnikā strādājošie speciālisti lielu uzmanību pievērš ne tikai procedūras tehniskam izpildījumam, bet arī galīgajai estētikas izjūtai — tiek atjaunota zobu forma, proporcijas un krāsu saskaņa visā smaidā. Izmantotās mūsdienu tehnoloģijas un augstas kvalitātes materiāli ļauj sasniegt dabiski izskatošu un ilgtermiņa rezultātu.
                </p>
                <p>
                  Pacienti novērtē skaidru komunikāciju, caurspīdīgu cenu politiku un secīgu pieeju ārstēšanai, un pozitīvās atsauksmes bieži uzsver profesionālu komunikāciju, rūpīgumu un iepriecinošu galīgo rezultātu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Aicinām reģistrēties estētiskajai plombēšanai Bangų klīnikā</h2>

              <p className="text-slate-700 mb-8 max-w-3xl leading-relaxed">
                Ja meklējat uzticamu zobārstniecības klīniku, kurā tiek veikta droša un estētiski augstas kvalitātes zobu estētiskā plombēšana, aicinām apmeklēt Bangų zobārstniecības klīniku. Šeit Jūs sagaida individuāla pieeja, modernas tehnoloģijas un pieredzējuši speciālisti, kas tiecas pēc dabiska un ilgtermiņa rezultāta.
                <br />
                <br />
                Reģistrējieties konsultācijai un speriet pirmo soli uz harmonisku, kārtīgu un pašpārliecinātību sniedzošu smaidu.
              </p>

              <Link
                to="/lv/kontakti"
                className="btn-primary btn-glow rounded-full px-8 py-4 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Reģistrēties vizītei
              </Link>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </AnimatedSection>
  )
}
