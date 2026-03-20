import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { CLINIC } from '../../data/clinic'
import { SITE_URL } from '../../i18n/lv'
import { useRef } from 'react'
import { TableOfContents } from '../../components/TableOfContents'

const tocSections = [
  { id: "cenas", label: "Cenas" },
  { id: "kas-ir", label: "Kas ir kanālu ārstniecība?" },
  { id: "kad-nepieciesama", label: "Kad nepieciešama?" },
  { id: "ka-notiek-klinika", label: "Ko veicam klīnikā?" },
  { id: "ka-notiek", label: "Procedūras gaita" },
  { id: "sapes", label: "Sāpes un atlikšanas risks" },
  { id: "kad-nepalid", label: "Kad ārstniecība nepalīdz?" },
  { id: "kapec-mes", label: "Kāpēc Bangų klīnika?" },
]

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export default function EndodontijaLv() {
  const pageRef = useRef(null)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Endodontija",
    "description": "Profesionāla endodontiskā (kanālu) ārstniecība Klaipēdā. Pirmējā endodontiskā palīdzība: diagnostika, sāpju un iekaisuma mazināšana, zoba sagatavošana turpmākai ārstniecībai.",
    "provider": { "@type": "Dentist", "name": "Bangų klīnika" }
  }

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Endodontija (kanālu ārstniecība) Klaipēdā — Bangų klīnika"
        description="Profesionāla endodontiskā (kanālu) ārstniecība Klaipēdā. Pirmējā endodontiskā palīdzība: diagnostika, sāpju mazināšana, infekcijas kontrole un zoba sagatavošana turpmākai ārstniecībai."
        keywords="endodontija, kanālu ārstniecība, pirmējā endodontiskā palīdzība, zobu sāpes, kanāli, klaipēda"
        canonical={`${SITE_URL}/lv/pakalpojumi/endodontija`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/endodontinis-gydymas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/endodontija` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/endodontinis-gydymas` },
        ]}
        structuredData={structuredData}
      />

      <motion.div ref={pageRef} className="max-w-screen-2xl mx-auto px-4 xl:px-8 2xl:px-4 2xl:flex 2xl:gap-8 2xl:items-start" variants={container} initial="hidden" animate="visible">
        <TableOfContents sections={tocSections} title="Saturs" rootRef={pageRef} cta={{ label: "Pierakstīties vizītei", to: "/kontaktai" }} />
        <div className="min-w-0 flex-1">

        {/* HERO */}
        <motion.header className="mb-10 text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionāla endodontiskā (kanālu) ārstniecība Klaipēdā
          </h1>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            <p className="mb-4">
              Stipras, pulsējošas zobu sāpes, ilgstoša jutīgums pret karstumu vai aukstumu, pietūkums vai nepatīkama spiediena sajūta bieži liecina par dziļākiem zoba bojājumiem. Šādos gadījumos parasta plombēšana vairs nepietiek, jo problēma atrodas nevis zoba virsmā, bet tā iekšpusē. Tieši tad ir nepieciešama endodontiskā ārstniecība — kanālu ārstniecība, kuras mērķis ir novērst infekciju un saglabāt dabīgo zobu.
            </p>
            <p className="mb-4">
              Endodontiskā ārstniecība ir svarīga mūsdienu zobārstniecības daļa, kas ļauj izvairīties no zoba ekstrakcijas pat sarežģītos gadījumos. Savlaicīgi veikta ārstniecība palīdz apturēt infekcijas izplatīšanos, mazināt sāpes un saglabāt zobu turpmākai funkcionēšanai. Nārstēti kanālu bojājumi var izraisīt nopietnas komplikācijas — no abscesiem līdz žokļa kaula bojājumiem, tādēļ ātra reaģēšana ir ārkārtīgi svarīga.
            </p>
            <p>
              Bangų zobārstniecības klīnikā Klaipēdā pacienti, kas saskaras ar akūtām zobu sāpēm vai aizdomājušies par dziļu bojājumu, var vērsties pēc pirmējās endodontiskās palīdzības. Šī posma mērķis — novērtēt situāciju, mazināt iekaisumu un sagatavot zobu turpmākai specializētai ārstniecībai.
            </p>
          </div>

          <div className="flex justify-start">
            <Link to="/lv/kontakti" className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1">
              Pierakstīties vizītei
            </Link>
          </div>

          {/* CENAS */}
          <div id="cenas" className="mt-8 scroll-mt-36 2xl:scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
              Pirmējās endodontiskās palīdzības cenas
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
              <p>
                Pirmējās endodontiskās palīdzības cena ir atkarīga no konkrētās klīniskās situācijas, zoba stāvokļa un nepieciešamo sagatavošanas procedūru apjoma. Tā kā katrs gadījums ir individuāls, pirms ārstniecības uzsākšanas vienmēr tiek veikta konsultācija un diagnostika.
              </p>
            </div>

            <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
              <div className="divide-y divide-slate-100">
                <div className="p-5 hover:bg-brand-50/30 transition">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-900 font-bold">Pirmējā endodontiskā palīdzība</span>
                    <span className="text-darkblue-700 font-bold">no 70 €</span>
                  </div>
                  <span className="block text-slate-600 text-sm">Visbiežāk tiek pielietota akūtu sāpju vai iekaisuma gadījumā — stabilizēšanai un sagatavošanai turpmākajai ārstniecībai.</span>
                </div>
                <div className="p-5 hover:bg-brand-50/30 transition">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-900 font-bold">Kanālu zāles</span>
                    <span className="text-darkblue-700 font-bold">no 30 €</span>
                  </div>
                  <span className="block text-slate-600 text-sm">Medikamenti kanālu dezinfekcijai vai iekaisuma kontrolei, ja to nosaka klīniskā situācija.</span>
                </div>
                <div className="p-5 hover:bg-brand-50/30 transition">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-900 font-bold">Viena zoba saknes kanāla ķīmismehāniskā sagatavošana</span>
                    <span className="text-darkblue-700 font-bold">no 35 €</span>
                  </div>
                  <span className="block text-slate-600 text-sm">Kanālu tīrīšana un dezinfekcija pirmajā posmā.</span>
                </div>
                <div className="p-5 hover:bg-brand-50/30 transition">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-900 font-bold">Viena zoba saknes kanāla plombēšana (sagatavošanas)</span>
                    <span className="text-darkblue-700 font-bold">no 35 €</span>
                  </div>
                  <span className="block text-slate-600 text-sm">Pagaidu vai sagatavošanas kanālu plombēšana, kad tas nepieciešams zoba aizsardzībai.</span>
                </div>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed text-sm">
              Svarīgi uzsvērt, ka šīs ir sagatavošanas procedūru cenas. Galīgā pilnās endodontiskās ārstniecības cena tiek noteikta ārstniecības iestādē, kur tiek veikta visa kanālu ārstniecība. Caurspīdīga cenu veidošana ļauj pacientiem skaidri saprast, par ko tiek maksāts katrā ārstniecības posmā.
            </p>
          </div>
        </motion.header>

        {/* KAS IR ENDODONTIJA */}
        <motion.section id="kas-ir" className="mb-12 bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas ir endodontiskā (kanālu) ārstniecība?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Endodontiskā ārstniecība ir zobārstniecības procedūra, kuras laikā tiek ārstēti zoba saknes kanāli. Šo kanālu iekšpusē atrodas pulpa — mīkstais auds, kas sastāv no nerviem, asinsvadiem un saistaudiem. Pulpa veic svarīgu lomu zoba attīstības laikā, taču pieauguša cilvēka zobam tās galvenā funkcija ir maņu uztvere.
            </p>
            <p>
              Kad pulpa tiek bojāta dziļa kariesa, traumas, plaisu vai baktēriju infekcijas dēļ, zobs kļūst sāpīgs, jutīgs vai ilgu laiku var neradīt nekādus simptomus, lai gan infekcija progresē. Endodontiskās ārstniecības laikā bojātie audi tiek izņemti no saknes kanāliem, kanāli rūpīgi iztīrīti un dezinficēti.
            </p>
            <p>
              Kanālu ārstniecības galvenais mērķis — saglabāt dabīgo zobu. Pat stipri bojāts zobs, pareizi ārstēts, var veiksmīgi funkcionēt kā košļāšanas daļa vai kā balsts turpmākai protezēšanai. Tas ļauj izvairīties no zoba ekstrakcijas un sarežģītākām atjaunošanas procedūrām nākotnē.
            </p>
          </div>
        </motion.section>

        {/* KAD NEPIECIEŠAMA */}
        <motion.section id="kad-nepieciesama" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kad nepieciešama endodontiskā ārstniecība?
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Endodontiskā ārstniecība nepieciešama tad, kad zoba bojājums sasniedzis dziļākos audus un infekcija skārusi pulpas zonu. Šādos gadījumos virsmas ārstniecība vai vienkārša plombēšana vairs nevar novērst problēmas cēloni.
          </p>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Visbiežāk pacienti vēršas pie ārsta stipru vai pulsējošu zobu sāpju dēļ, kas pastiprinās naktī vai košļājot. Raksturīgs arī ilgstošs jutīgums pret karstumu vai aukstumu, spiediena sajūta vai sāpes ap zobu. Dažos gadījumos parādās smaganu pietūkums, apsārtums vai pat abscess blakus bojātajam zobam.
          </p>

          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-darkblue-700">Endodontiskā ārstniecība visbiežāk nepieciešama, ja:</h3>
            <div className="grid sm:grid-cols-1 gap-3">
              {[
                "jūtamas stipras vai pulsējošas zobu sāpes (īpaši naktī vai košļājot)",
                "ilgstoši nepāriet jutīgums pret karstumu vai aukstumu",
                "jūtama spiediena sajūta vai sāpes ap zobu",
                "parādās smaganu pietūkums, apsārtums vai abscesi pie zoba",
                "profilakses laikā vai rentgenogrammā konstatētas iekaisuma izmaiņas pie zoba saknes",
                "pēc zoba traumas simptomi parādās vēlāk, lai gan zobs no ārpuses izskatās nebojāts"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <span className="mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Svarīgi zināt, ka ne visos gadījumos endodontiskās ārstniecības nepieciešamību pavada stipras sāpes. Dažreiz pulpa iet bojā pakāpeniski, un infekcija attīstās bez izteiktiem simptomiem. Šādos gadījumos problēmu bieži nosaka profilaktiskās pārbaudes laikā vai veicot rentgena izmeklēšanu.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            Pamanot kādu no šiem simptomiem, svarīgi nekavēties. Jo agrāk tiek konstatēta problēma, jo lielāka iespēja veiksmīgi saglabāt dabīgo zobu.
          </p>
        </motion.section>

        {/* KĀDA DAĻA TIEK VEIKTA */}
        <motion.section id="ka-notiek-klinika" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kāda endodontiskās ārstniecības daļa tiek veikta Bangų zobārstniecības klīnikā?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Bangų zobārstniecības klīnikā tiek sniegta pirmējā endodontiskā palīdzība, kuras mērķis — stabilizēt situāciju, mazināt sāpes un sagatavot zobu turpmākai specializētai kanālu ārstniecībai. Šobrīd klīnikā nav ārsta, kas specializētos tikai pilnā endodontiskajā ārstniecībā, tādēļ pacienti, kuriem nepieciešama sarežģīta vai pilna kanālu ārstniecība, tiek nosūtīti pie uzticamiem speciālistiem citās ārstniecības iestādēs.
            </p>
            <p>
              Pirmējās endodontiskās palīdzības laikā vispirms tiek veikta padziļināta diagnostika — klīniskā apskate un rentgena izmeklēšana. Pēc vajadzības tiek pielietota vietējā nejutība. Zobs tiek atvērts, izņemti inficētie audi, samazināts baktēriju skaits un, nepieciešamības gadījumā, izmantoti medikamenti iekaisuma kontrolei.
            </p>
            <p>
              Turpmākajai ārstniecībai pacienti tiek nosūtīti pie profesionāla endodonta Klaipēdā. Šāds sadarbības modelis ļauj nodrošināt, ka katru ārstniecības posmu veic tieši tās jomas speciālists.
            </p>
            <p>
              Svarīgi uzsvērt, ka pirmējā endodontiskā palīdzība nav pagaidu risinājums "atlikšanai". Tā ir mērķtiecīgs un atbildīgs ārstniecības posms, kas ievērojami palielina turpmākās endodontiskās ārstniecības panākumus.
            </p>
          </div>
        </motion.section>

        {/* GAITA (SOĻI) */}
        <motion.section id="ka-notiek" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kā tiek veikta pirmējā endodontiskā palīdzība Bangų klīnikā?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Pirmējā endodontiskā palīdzība tiek veikta pēc skaidras un drošas secības, lai ātri un droši stabilizētu zoba stāvokli un sagatavotu to turpmākajai kanālu ārstniecībai.
          </p>

          <div className="space-y-6">
            {[
              { n: 1, title: "Diagnostika", text: "Padziļināta klīniskā apskate un rentgena izmeklēšana, kas ļauj novērtēt zoba bojājuma dziļumu, kanālu skaitu, to anatomiju un iekaisuma apjomu pie zoba saknes." },
              { n: 2, title: "Anestēzija", text: "Pirms procedūras uzsākšanas tiek pielietota vietējā nejutība, tādēļ pacients nejūt sāpes. Anestēzija ļauj ārstam strādāt precīzi un mierīgi." },
              { n: 3, title: "Zoba atvēršana un inficēto audu izņemšana", text: "Pēc anestēzijas zobs uzmanīgi tiek atvērts, lai piekļūtu inficētajiem iekšējiem audiem. Bojātie pulpas audi tiek izņemti, kanālu iekšpuse apstrādāta." },
              { n: 4, title: "Medikamenti (ja nepieciešams)", text: "Pēc vajadzības kanālos var tikt ievietoti medikamenti, kas palīdz kontrolēt infekciju un mazināt iekaisumu līdz turpmākajai ārstniecībai." },
              { n: 5, title: "Pagaidu aizsardzība un turpmākais plāns", text: "Procedūra tiek pabeigta ar pagaidu risinājumu, kas pasargā zobu no turpmākas baktēriju iekļūšanas. Tiek izskaidroti turpmākie ārstniecības soļi." }
            ].map(s => (
              <div key={s.n} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                  <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">{s.n}</span>
                  {s.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SĀPES UN KAVĒŠANĀS */}
        <motion.section id="sapes" className="mb-12 space-y-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Vai pirmējā endodontiskā palīdzība ir sāpīga?
            </h2>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Mūsdienu zobārstniecībā pirmējā endodontiskā palīdzība tiek veikta, pielietojot efektīvu vietējo nejutību, tādēļ procedūras laikā sāpes netiek izjustas. Vairākumā gadījumu pati ārstniecība ir daudz komfortablāka nekā sāpes, ko izraisa nārstēts zoba iekaisums.
              </p>
              <p>
                Procedūras laikā pacients var just vieglu spiedienu vai vibrāciju, taču tā nav sāpe. Pēc procedūras iespējams neliels sāpīgums vai jutīgums — tā ir normāla un pārejoša ķermeņa reakcija, kas parasti izzūd dažu dienu laikā.
              </p>
              <p>
                Savlaicīgi sniegta pirmējā palīdzība ļauj izvairīties no stiprākām sāpēm, akūtām komplikācijām un dod iespēju turpmāko ārstniecību plānot bez stresa.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Kas notiek, ja kanālu ārstniecība tiek atlikta?
            </h2>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Kanālu infekcija pati no sevis nepāriet. Lai gan dažreiz sāpes var uz laiku mazināties vai izzust, tas nenozīmē, ka problēma ir atrisināta. Bieži vien pulpa jau ir gājusi bojā, bet infekcija turpina izplatīties nemanāmi.
              </p>
              <p>
                Nārstēta infekcija var pāriet uz apkārtējiem audiem un izraisīt abscesu, smaganu pietūkumu vai sāpīgu iekaisumu. Laika gaitā iekaisums var bojāt žokļa kaulu, veidoties hroniski infekcijas perēkļi, kas apgrūtina turpmāko ārstniecību.
              </p>
              <p>
                Pirmējā endodontiskā palīdzība ļauj apturēt šo negatīvo procesu agrīnā stadijā un radīt labvēlīgus apstākļus turpmākajai pilnajai kanālu ārstniecībai.
              </p>
            </div>
          </div>
        </motion.section>

        {/* KAD NEPALĪDZ */}
        <motion.section id="kad-nepalid" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kad endodontiskā ārstniecība var vairs nepalīdzēt?
          </h2>
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <p className="text-slate-700 mb-4 leading-relaxed">
              Lai gan endodontiskā ārstniecība vairākumā gadījumu ļauj veiksmīgi saglabāt dabīgo zobu, noteiktās situācijās tā var būt neefektīva. Šādos gadījumos lēmums tiek pieņemts, novērtējot zoba stāvokli, bojājuma apjomu un iespējamo ieguvumu pacientam.
            </p>
            <h3 className="font-semibold text-red-900 mb-2">Endodontiskā ārstniecība var vairs nepalīdzēt, kad:</h3>
            <ul className="list-disc pl-5 space-y-2 text-red-900/80 mb-4">
              <li>zobs ir stipri sairējis vai nolūzis zem smaganas līmeņa un to nav iespējams droši atjaunot</li>
              <li>konstatētas vertikālas zoba saknes plaisas</li>
              <li>iekaisums ir bojājis lielu kaula daļu ap zoba sakni un prognoze ir nelabvēlīga</li>
              <li>iepriekšējā kanālu ārstniecība veikta nekvalificēti, bet atkārtotajai ārstniecībai vairs nav pietiekamas panākumu iespējas</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              Lēmums atteikties no endodontiskās ārstniecības nekad netiek pieņemts steigā. Vispirms tiek izvērtētas visas iespējas saglabāt zobu. Tikai tad, kad prognoze ir nelabvēlīga, pacientam tiek piedāvāti alternatīvi risinājumi — piemēram, zoba ekstrakcija un vēlāka atjaunošana ar implantiem.
            </p>
          </div>
        </motion.section>

        {/* KĀPĒC MĒS */}
        <motion.section id="kapec-mes" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kāpēc vērts vērsties Bangų zobārstniecības klīnikā pēc pirmējās endodontiskās palīdzības?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Bangų zobārstniecības klīnikā Klaipēdā pirmējā endodontiskā palīdzība tiek sniegta atbildīgi, orientējoties uz pacienta pašsajūtas uzlabošanu un drošu turpmākās ārstniecības plānošanu. Katrs gadījums tiek vērtēts individuāli — tiek veikta diagnostika, novērtēts zoba stāvoklis un iekaisuma apjoms, izskaidroti iespējamie ārstniecības virzieni.
            </p>
            <p>
              Pacienti tiek skaidri informēti, kādas darbības tiek veiktas klīnikā un kuros gadījumos nepieciešama turpmāka ārstniecība pie specializēta ārsta. Šāda caurspīdīga pieeja palīdz izvairīties no neaizkumiem un ļauj pieņemt informētus lēmumus.
            </p>
            <p>
              Svarīgs klīnikas darba princips — sadarbība ar uzticamiem speciālistiem citās ārstniecības iestādēs. Ja nepieciešama pilna kanālu ārstniecība, pacienti tiek nosūtīti pie pieredzējušiem endodontiem Klaipēdā, nodrošinot raitu ārstniecības turpinājumu.
            </p>
          </div>
        </motion.section>

        {/* BEIGU CTA */}
        <motion.div className="mt-8 mb-12 text-left" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Aicinām pierakstīties pirmējai endodontiskajai ārstniecībai Bangų klīnikā
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xl leading-relaxed">
            Ja jūtat stipras zobu sāpes, pamanījāt pietūkumu, ilgstošu jutīgumu vai saņēmāt ieteikumu par kanālu ārstniecību, aicinām nekavējoties pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā tiks novērtēts Jūsu zoba stāvoklis, sniegta pirmējā endodontiskā palīdzība un skaidri izskaidroti turpmākie ārstniecības soļi.
            <br /><br />
            Savlaicīgi sniegta palīdzība ļauj mazināt sāpes, apturēt infekcijas progresēšanu un radīt labvēlīgus apstākļus turpmākajai ārstniecībai pie endodonta. Bangų zobārstniecības klīnikā cenšamies, lai katrs pacients saņemtu profesionālu un godīgu palīdzību.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link to="/lv/kontakti" className="btn-primary btn-glow rounded-full px-8 py-4 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1">
              Pierakstīties vizītei
            </Link>
            <a href={`tel:${CLINIC.phone}`} className="btn-ghost rounded-full px-8 py-4 font-semibold text-lg inline-block border border-brand text-brand hover:bg-brand-50 transition">
              Zvanīt mums
            </a>
          </div>
        </motion.div>

        </div>
      </motion.div>
    </AnimatedSection>
  )
}
