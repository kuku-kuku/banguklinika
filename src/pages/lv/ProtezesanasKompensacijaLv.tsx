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
  { id: 'kas-yra', label: 'Kas ir protezēšanas kompensācija?' },
  { id: 'kas-gauna', label: 'Kas var saņemt kompensāciju?' },
  { id: 'kaip-suzinoti', label: 'Kā uzzināt, vai pienākas?' },
  { id: 'procesas', label: 'Kā notiek ārstēšanas process?' },
  { id: 'svarbu-zinoti', label: 'Kas ir svarīgi zināt?' },
  { id: 'duk', label: 'Biežāk uzdotie jautājumi' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function ProtezesanasKompensacijaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/protezesanas-kompensacija/#service`,
    "name": "Protezēšanas kompensācija Klaipēdā",
    "serviceType": "Kompensējamā zobu protezēšana",
    "description": "Informācija par zobu protezēšanas kompensāciju Bangų zobārstniecības klīnikā Klaipēdā, kas tiek piešķirta noteiktām pacientu grupēm caur TLK un PSDF.",
    "url": `${SITE_URL}/lv/pakalpojumi/protezesanas-kompensacija/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": `${SITE_URL}/#dentist` },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        title="Protezēšanas kompensācija Klaipēdā - Bangų klīnika"
        description="TLK kompensācija zobu protezēšanai Klaipēdā☑️uzziniet, vai piederat atbilstošai pacientu grupai☑️Bangų klīnikā.⏩Piesakieties konsultācijai jau tagad."
        keywords="protezēšanas kompensācija, TLK kompensācija, zobu protezēšana, bezmaksas protezēšana, klaipēda"
        lang="lv"
        canonical={`${SITE_URL}/lv/pakalpojumi/protezesanas-kompensacija`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/kompensacija-protezavimui` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/protezesanas-kompensacija` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/kompensacija-protezavimui` },
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
              Protezēšanas kompensācija Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Zobu zaudēšana vai stipri bojāti zobi var apgrūtināt košļāšanu, runāšanu, smaidīšanu un
                  ikdienas komfortu. Kad zobus vairs nav iespējams atjaunot ar plombām vai citiem vienkāršākiem veidiem,
                  var būt nepieciešama zobu protezēšana. Noteiktām pacientu grupēm šo pakalpojumu var daļēji
                  kompensēt no Obligātās veselības apdrošināšanas fonda līdzekļiem. Šis pakalpojums ir pieejams personām,
                  kuras ir Lietuvas pastāvīgie iedzīvotāji un ir Valstybinės ligonių kasos (VLK) apdrošinātie.
                </p>
                <p>
                  Protezēšanas kompensācija palīdz samazināt pacienta izdevumus un dod iespēju laikus atjaunot
                  zaudētos vai stipri bojātos zobus. Bangų zobārstniecības klīnikā Klaipēdā pacientam
                  tiek sniegta skaidra informācija par iespējamiem protezēšanas risinājumiem, ārstēšanas gaitu un to, kas ir svarīgi
                  zināt pirms kompensācijas iespējas izmantošanas.
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
                    Aicinām pieteikties konsultācijai Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja jums ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām pieteikties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā izvērtēsim Jūsu mutes stāvokli, atbildēsim uz interesējošajiem jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā tiecamies, lai katrs pacients justos droši – no pirmās konsultācijas līdz galīgajam rezultātam. Piesakieties un speriet pirmo soli uz veselu smaidu.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts detalizēts klīniskais izvērtējums',
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir zobu protezēšanas kompensācija?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu protezēšanas kompensācija ir valsts noteiktā kārtībā sniegtā finansiālā palīdzība
                  pacientiem, kuriem nepieciešama zobu atjaunošana ar protēzēm. Tā tiek piešķirta, lai noteiktas
                  pacientu grupas varētu vieglāk parūpēties par košļāšanas funkcijas, estētikas un vispārējās mutes
                  veselības atjaunošanu.
                </p>
                <p>
                  Zobu protezēšana var būt nepieciešama pēc viena, vairāku vai visu zobu zaudēšanas, esot lielai zobu
                  nolietošanai, stipri bojātiem zobiem vai traucētai košļāšanas funkcijai. Pareizi izvēlēti
                  protezēšanas risinājumi palīdz ne tikai atjaunot smaidu, bet arī samazināt atlikušo zobu slodzi,
                  uzlabot pārtikas košļāšanu un vispārējo dzīves kvalitāti.
                </p>
                <p>
                  Ir svarīgi zināt, ka kompensācija ne vienmēr sedz visu ārstēšanas cenu. Kompensējamā summa un tās
                  piemērošanas nosacījumi ir atkarīgi no spēkā esošās kārtības, pacienta grupas, klīniskās situācijas un
                  izvēlētā protezēšanas plāna.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAS GALI GAUTI */}
          <motion.section id="kas-gauna" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kam var tikt piešķirta zobu protezēšanas kompensācija?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zobu protezēšanas kompensācija var tikt piešķirta tikai noteiktām pacientu grupām, kuras ir
                apdrošinātas ar obligāto veselības apdrošināšanu. Visbiežāk tiesības uz kompensējamo zobu protezēšanu
                var būt šādām grupām:
              </p>

              <div className="grid gap-3">
                {[
                  'personas, kas sasniegušas vecuma pensijas vecumu',
                  'bērni līdz 18 gadu vecumam',
                  'personas, kurām noteikta darbnespēja vai daļēja darbspēja',
                  'pacienti, kuriem tika veikta ārstēšana mutes, sejas vai žokļu onkoloģisko slimību dēļ'
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="mt-1">
                      <CheckIcon />
                    </span>
                    <span className="text-slate-700">{text}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed mt-6">
                <p>
                  Tomēr piederība vienai no šīm grupām vēl nenozīmē, ka kompensācija automātiski tiks
                  piemērota visos gadījumos. Tiek izvērtēts arī pacienta mutes stāvoklis, zobu protezēšanas vajadzība,
                  košļāšanas funkcija un citi medicīniskie kritēriji.
                </p>
                <p>
                  Tā kā kompensēšanas kārtība, summas un kritēriji var mainīties, precīzākā informācija tiek apstiprināta
                  saskaņā ar spēkā esošo TLK kārtību. Konsultācijas laikā pacientam tiek izskaidrots, kādi soļi ir nepieciešami
                  un kādi dati vai dokumenti var būt nepieciešami.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAIP SUŽINOTI */}
          <motion.section id="kaip-suzinoti" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā uzzināt, vai jums pienākas protezēšanas kompensācija?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Lai uzzinātu, vai jums var tikt piemērota protezēšanas kompensācija, vispirms ir nepieciešams
                  mutes stāvokļa izvērtējums. Zobārsts apskates laikā izvērtē, cik zobu ir zaudēts,
                  kāds ir atlikušo zobu stāvoklis, vai ir košļāšanas funkcijas traucējumi, vai mutes dobums ir sagatavots
                  protezēšanai.
                </p>
                <p>
                  Dažos gadījumos pacients par tiesībām uz kompensāciju vispirms vēršas ārstniecības iestādē,
                  pie kuras ir pierakstīts. Tur tiek izvērtēta protezēšanas vajadzība un pacients tiek reģistrēts saskaņā ar
                  spēkā esošo kompensēšanas kārtību. Ja pacientam jau ir apstiprinātas tiesības uz kompensāciju,
                  ierodoties klīnikā ir svarīgi par to informēt reģistrācijas laikā.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā konsultācijas laikā pacientam skaidri tiek izskaidrots, kādi protezēšanas
                  risinājumi ir iespējami viņa situācijā, kādi sagatavošanas ārstēšanas posmi var būt nepieciešami un kā
                  kompensācija var tikt piemērota konkrētam ārstēšanas plānam.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā notiek zobu protezēšana ar kompensāciju?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zobu protezēšana ar kompensāciju notiek secīgi, lai pacients skaidri saprastu visu ārstēšanas
                gaitu un paredzamos izdevumus.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Konsultācija un mutes stāvokļa izvērtēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pirmās vizītes laikā tiek izvērtēts zobu, smaganu, sakodiena un vispārējais mutes stāvoklis. Ja nepieciešams,
                    tiek veikti papildu izmeklējumi, kas palīdz precīzāk saplānot protezēšanu.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Kompensācijas iespēju apspriešana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pacientam tiek izskaidrots, vai viņa situācijā var tikt piemērota kompensācija, kādi soļi jāveic
                    un kāda ārstēšanas daļa var tikt kompensēta saskaņā ar spēkā esošo kārtību.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Ārstēšanas plāna izveidošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ārsts izvēlas piemērotāko protezēšanas risinājumu atbilstoši pacienta mutes stāvoklim, funkcionālajām
                    vajadzībām, estētikas gaidām un finansiālajām iespējām. Plānā skaidri norādīta ārstēšanas gaita un
                    paredzamie izdevumi.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Sagatavojošā ārstēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pirms protezēšanas var būt nepieciešams veikt zobu ārstēšanu, profesionālu mutes higiēnu, izņemt
                    nesaglabājamos zobus vai parūpēties par smaganu stāvokli. Tas ir svarīgi, lai protezēšanas rezultāts
                    būtu stabilāks un ilgmūžīgāks.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Protēzes izgatavošana un pielāgošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Saskaņā ar izvēlēto ārstēšanas plānu tiek izgatavotas un pielāgotas zobu protēzes. Vizīšu laikā tiek pārbaudīts to
                    komforts, sakodiens, estētika un funkcija.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">06</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Kopšanas ieteikumi</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pēc protezēšanas pacientam tiek izskaidrots, kā kopt protēzes, kad ierasties uz kontroli un no kādiem
                    ieradumiem izvairīties, lai rezultāts kalpotu pēc iespējas ilgāk.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* SVARBU ŽINOTI */}
          <motion.section id="svarbu-zinoti" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir svarīgi zināt pirms protezēšanas kompensācijas izmantošanas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Pirms ārstēšanas sākšanas ir svarīgi saprast, ka kompensācija var samazināt protezēšanas izdevumus,
                  tomēr ne vienmēr sedz visu izvēlēto ārstēšanas plānu. Ja pacients izvēlas sarežģītākus,
                  estētiskākus vai plašāka apjoma protezēšanas risinājumus, var būt nepieciešama piemaksa.
                </p>
                <p>
                  Galīgā protezēšanas cena ir atkarīga no mutes stāvokļa, trūkstošo zobu skaita, izvēlētā
                  protezēšanas veida, izmantotajiem materiāliem un sagatavošanas procedūrām. Tāpēc precīzs ārstēšanas plāns un
                  pacienta maksājamā daļa tiek apspriesta individuāli pēc apskates.
                </p>
                <p>
                  Izvēloties zobu protezēšanu, ir svarīgi pievērst uzmanību ne tikai kompensācijai, bet arī ilgtermiņa
                  rezultātam. Pareizi saplānota protezēšana palīdz atjaunot košļāšanas funkciju, aizsargāt atlikušos
                  zobus no pārmērīgas slodzes un uzlabot ikdienas komfortu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* DUK */}
          <motion.section id="duk" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Biežāk uzdotie jautājumi par protezēšanas kompensāciju</h2>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Vai protezēšanas kompensācija sedz visu ārstēšanas cenu?</h3>
                  <p className="text-slate-600 text-sm">Ne vienmēr. Kompensācija var segt daļu no protezēšanas izdevumiem, tomēr, ja izvēlētais ārstēšanas plāns pārsniedz kompensējamo summu, starpību pacients sedz no saviem līdzekļiem.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Vai kompensācija tiek piemērota visiem protezēšanas risinājumiem?</h3>
                  <p className="text-slate-600 text-sm">Kompensācija tiek piemērota saskaņā ar spēkā esošo kārtību un medicīniski pamatotu protezēšanas vajadzību. Ne visi estētiskie vai sarežģītākie risinājumi var tikt pilnībā kompensēti.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Kad ir vērts vērsties par protezēšanas kompensāciju?</h3>
                  <p className="text-slate-600 text-sm">Vērsties ir vērts tad, kad trūkst zobu, ir grūti košļāt, esošās protēzes vairs nav ērtas vai ārsts ir norādījis, ka ir nepieciešama zobu protezēšana.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KODĖL RINKTIS */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc ir vērts izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Izvēloties protezēšanas kompensāciju, ir svarīga ne tikai pati valsts kompensācija, bet arī kvalitatīvs,
                  ilgtermiņa ārstēšanas rezultāts. Bangų zobārstniecības klīnikā Klaipēdā katrs pacients
                  tiek izvērtēts individuāli, izveidojot skaidru un pamatotu ārstēšanas plānu.
                </p>
                <p>
                  Klīnikā liela uzmanība tiek pievērsta skaidram visa procesa izskaidrojumam – no kompensācijas iespējām
                  līdz galīgajam protezēšanas risinājumam. Pacienti visas ārstēšanas laikā saņem skaidrus ieteikumus un
                  konsekventu kopšanu.
                </p>
                <p>
                  Šāda pieeja ļauj nodrošināt, lai protezēšanas kompensācija tiktu piemērota raiti, bet
                  ārstēšanas rezultāts būtu funkcionāls, ērts un ilgmūžīgs.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pieteikties konsultācijai par kompensējamo protezēšanu
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja jums trūkst zobu vai jūtat košļāšanas problēmas, aicinām pieteikties konsultācijai Bangų
                  zobārstniecības klīnikā. Vizītes laikā tiks izvērtēts Jūsu mutes stāvoklis, pārbaudīts, vai piederat
                  kompensāciju saņemošai pacientu grupai, un izveidots individuāls ārstēšanas plāns.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā tiecamies, lai kompensējamā protezēšana būtu skaidra, saprotama un pēc iespējas
                  mazāk stresu izraisoša. Šeit Jūs sagaida pieredzējuši speciālisti, moderns aprīkojums un rūpīga attieksme pret
                  katru pacientu.
                </p>
                <p>
                  Piesakieties konsultācijai un uzziniet, kāda protezēšanas kompensācija Jums pienākas.
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
