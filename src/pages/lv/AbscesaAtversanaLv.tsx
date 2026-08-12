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
  { id: 'kas-yra', label: 'Kas ir zoba abscess?' },
  { id: 'simptomai', label: 'Simptomi' },
  { id: 'kada-butinas', label: 'Kad nepieciešama atvēršana?' },
  { id: 'procesas', label: 'Kā tiek veikta?' },
  { id: 'po-procedūros', label: 'Pēc procedūras' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function AbscesaAtversanaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/abscesa-atversana/#service`,
    "name": "Abscesa atvēršana Klaipēdā",
    "serviceType": "Abscesa atvēršana",
    "description": "Zoba abscesa atvēršana (incīzija) un drenāža Bangų zobārstniecības klīnikā Klaipēdā.",
    "url": `${SITE_URL}/lv/pakalpojumi/abscesa-atversana/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": `${SITE_URL}/#dentist` },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Abscesa atvēršana Klaipēdā - Bangų klīnika"
        description="Zoba abscesa atvēršana (incīzija) un drenāža Klaipēdā – Bangų zobārstniecības klīnikā. Cena no 70€ līdz 150€.⏩Pierakstieties steidzami vai konsultācijai."
        keywords="abscesa atvēršana, zoba abscess, incīzija, drenāža, Klaipēda"
        canonical={`${SITE_URL}/lv/pakalpojumi/abscesa-atversana`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/pulinio-atverimas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/abscesa-atversana` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/pulinio-atverimas` },
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
              Abscesa atvēršana Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Pastiprinošas zobu sāpes, pietūkušas smaganas vai sejas apvidus tūska var liecināt, ka ap zobu vai
                  mutes mīkstajos audos ir uzkrājies strutains saturs. Zoba abscess ir bakteriālas infekcijas izraisīts
                  stāvoklis, kas pats no sevis nepāriet un var izplatīties apkārtējos audos. Tāpēc, parādoties
                  raksturīgiem simptomiem, ir svarīgi neatlikt zobārsta apskati.
                </p>
                <p className="mb-4">
                  Bangų zobārstniecības klīnikā Klaipēdā abscesa ārstēšana tiek plānota individuāli, vispirms nosakot
                  infekcijas vietu un cēloni. Ja mīkstajos audos ir izveidojies strutu uzkrājums, var tikt veikta
                  abscesa atvēršana, ko sauc arī par incīziju, un drenāža. Procedūras laikā tiek radīti apstākļi
                  strutainā satura izvadei, tiek samazināts spiediens audos un palīdzēts kontrolēt infekcijas
                  izplatīšanos.
                </p>
                <p>
                  Abscesa atvēršana visbiežāk ir tikai viens ārstēšanas posms. Samazinājušās sāpes vai tūska vēl
                  nenozīmē, ka ir novērsts infekcijas cēlonis. Atkarībā no situācijas vēlāk var būt nepieciešama sakņu
                  kanālu, periodontoloģiskā ārstēšana, zoba izraušana vai cita procedūra.
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
                      Abscesa atvēršanas cenas
                    </h2>
                    <p className="text-slate-600">
                      Abscesa atvēršanas cena ir atkarīga no abscesa lieluma, atrašanās vietas, drenāžas
                      nepieciešamības un papildu ārstēšanas. Precīza cena tiek noteikta, izvērtējot klīnisko situāciju.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Abscesa atvēršana</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Abscesa atvēršana un drenāža', '70 – 150 €'],
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
                  Precīza abscesa atvēršanas cena Klaipēdā tiek apspriesta individuālas konsultācijas laikā, ņemot vērā
                  konkrēto klīnisko situāciju.
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
                    konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā izvērtēsim Jūsu mutes veselību, atbildēsim
                    uz interesējošiem jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mēs cenšamies, lai katrs pacients justos droši – no pirmās
                    konsultācijas līdz galīgajam rezultātam. Pierakstieties un speriet pirmo soli veselīga smaida
                    virzienā.
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir zoba abscess?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zoba abscess ir strutu uzkrājums, kas veidojas organismam reaģējot uz bakteriālu infekciju. Tas var
                  veidoties pie zoba saknes galotnes, smaganās, periodonta audos vai ap daļēji izšķīlušos zobu.
                </p>
                <p>
                  Viens no biežākajiem iemesliem ir dziļi izplatījies kariess. Bakterijām sasniedzot zoba pulpu, tajā
                  var sākties iekaisums, audu bojāeja un infekcijas izplatīšanās ārpus saknes robežām. Abscess var
                  veidoties arī zoba traumas, iesprāgšanas, neblīvas restaurācijas, periodonta slimības vai infekcijas
                  ap gudrības zobu dēļ.
                </p>
                <p>
                  Periapikāls abscess visbiežāk veidojas zoba saknes galotnes rajonā un ir saistīts ar inficētu pulpu.
                  Periodontāls abscess veidojas zobu apņemošajos audos, bieži blakus dziļai periodonta kabatai.
                </p>
                <p>
                  Infekcijai izplatoties apkārtējos audos, var attīstīties periosta iekaisums, ko sauc par periostītu.
                  Tam raksturīga lokāla vai plašāka tūska, sāpes, audu jutīgums un dažkārt apgrūtināta mutes atvēršana.
                  Zoba abscess un periostīts ir saistīti, bet ne pilnīgi identiski stāvokļi, tāpēc precīza diagnoze
                  tiek noteikta pēc apskates.
                </p>
              </div>
            </div>
          </motion.section>

          {/* SIMPTOMAI */}
          <motion.section id="simptomai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kādi simptomi var liecināt par zoba abscesu?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zoba abscesa simptomi ir atkarīgi no infekcijas vietas, tās izplatības un organisma reakcijas. Sāpes
                var būt pulsējošas, pastiprinošas košļājot vai izstarojošas uz ausi, deniņiem, žokli vai kaklu.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Par abscesu var brīdināt:</h3>

                <div className="grid gap-3">
                  {[
                    'stipras vai pulsējošas zobu sāpes',
                    'sāpes sakožot vai pieskaroties zobam',
                    'pietūkušas, apsārtušas un jutīgas smaganas',
                    'strutains izcilnītis uz smaganām',
                    'vaiga, lūpas vai žokļa apvidus tūska',
                    'nepatīkama garša vai smaka mutē',
                    'strutaina šķidruma izdalīšanās',
                    'palielināti un sāpīgi limfmezgli',
                    'drudzis, nespēks vai vispārējs slikta pašsajūta',
                    'apgrūtināta mutes atvēršana'
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
                  Abscesam pašam pārplīstot, sāpes var uz laiku samazināties, taču tas nenozīmē, ka infekcija ir
                  izārstēta. Tās avots var palikt zoba sakņu kanālos, periodonta audos vai kaulā.
                </p>
                <p>
                  Steidzama medicīniskā palīdzība ir nepieciešama, ja tūska strauji pieaug, izplatās zem apakšžokļa,
                  virzienā uz aci vai kaklu, kļūst grūti norīt, elpot, runāt vai plaši atvērt muti. Nekavējoties jāvēršas
                  pēc palīdzības arī, ja parādās augsta temperatūra, izteikts nespēks vai citas strauji progresējošas
                  infekcijas pazīmes.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA BUTINAS */}
          <motion.section id="kada-butinas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kad nepieciešama abscesa atvēršana?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Abscesa atvēršana var būt nepieciešama, kad mīkstajos audos veidojas skaidrs strutu uzkrājums, kuru
                  nevar pienācīgi likvidēt citādā veidā. Incīzijas laikā gļotādā tiek veikts neliels iegriezums, caur
                  kuru tiek izvadīts strutainais saturs un samazināts audos uzkrājies spiediens.
                </p>
                <p>
                  Lēmums par procedūru tiek pieņemts pēc klīniskās apskates. Ārsts izvērtē tūskas vietu, audu stāvokli,
                  sāpīgumu, zobu dzīvotspēju un iespējamo infekcijas avotu. Ja nepieciešams, tiek veikts zoba
                  rentgenuzņēmums vai panorāmas uzņēmums.
                </p>
                <p>
                  Ne katras zobu sāpes vai tūska tiek ārstētas ar iegriezumu smaganās. Dažos gadījumos strutainais
                  saturs var tikt izvadīts caur sakņu kanāliem. Ja infekcija ir saistīta ar periodonta kabatu, var būt
                  nepieciešama tās tīrīšana un drenāža. Ja zobu nav iespējams saglabāt, infekcijas avots var tikt
                  likvidēts kopā ar zobu.
                </p>
                <p>
                  Vai ir nepieciešamas antibiotikas pret zoba abscesu, izlemj ārsts. Tās nav automātisks katra abscesa
                  ārstēšanas posms. Antibiotikas var būt nepieciešamas, kad infekcija izplatās, parādās drudzis, vispārējs
                  slikta pašsajūta, limfmezglu reakcija vai pacientam noteikts paaugstināts komplikāciju risks.
                  Lokalizēta abscesa gadījumā svarīgākais ir nodrošināt drenāžu un ārstēt infekcijas cēloni.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā tiek veikta abscesa atvēršana klīnikā?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Abscesa atvēršanas gaita ir atkarīga no tā atrašanās vietas, lieluma, infekcijas avota un apkārtējo
                audu stāvokļa.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Mutes stāvokļa un infekcijas avota izvērtēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ārsts apskata sāpīgo apvidu, zobus, smaganas un apkārtējos audus. Pacientam tiek uzdoti jautājumi
                    par simptomu sākumu, vispārējo veselības stāvokli, lietotajām zālēm un alerģijām. Ja nepieciešams,
                    tiek veikts radioloģiskais izmeklējums.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Vietējās anestēzijas pielietošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pirms procedūras tiek pielietota vietējā anestēzija, kas palīdz samazināt sāpes. Akūta iekaisuma
                    gadījumā anestēzijas līdzekļa iedarbība pašā infekcijas avotā var būt vājāka, tāpēc anestēzijas
                    metode tiek izvēlēta individuāli.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Abscesa atvēršana un satura izvadīšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Gļotādā strutu uzkrājuma vietā tiek veikts neliels iegriezums. Caur izveidojušos atveri tiek
                    izvadīts strutainais saturs un samazināts audos uzkrājies spiediens.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Brūces skalošana un drenāža</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Abscesa dobums var tikt uzmanīgi izskalots. Ja pastāv iespēja, ka iegriezuma vieta ātri aizvērsies,
                    var tikt ievietota drenāža. Tā ir šaura elastīga lentīte vai caurulīte, kas uz laiku uztur atvērtu
                    izvades ceļu. Drenāžas nepieciešamību un izņemšanas laiku nosaka ārsts.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Turpmākā ārstēšanas plāna izveide</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pēc abscesa atvēršanas tiek noteikts, kā tiks ārstēts tā cēlonis. Ja infekcija ir cēlusies sakņu
                    kanālos, var tikt veikta endodontiskā ārstēšana. Ja cēlonis ir periodonta slimība, ir nepieciešama
                    periodontoloģiskā ārstēšana. Zobu, kuru nav iespējams droši saglabāt, var nākties izraut.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PO PROCEDŪROS */}
          <motion.section id="po-procedūros" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Ko svarīgi zināt pēc procedūras?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Pēc abscesa atvēršanas samazinājies spiediens bieži atvieglo sāpes, taču ārstētā vieta vēl var būt
                  jutīga. Nelielas asiņošanas vai šķidruma noplūde no drenētās vietas var būt saistīta ar dzīšanu.
                </p>
                <p>
                  Ja ir nozīmētas antibiotikas, tās jālieto precīzi tā, kā norādījis ārsts. Nedrīkst patstāvīgi mainīt
                  devu, pārtraukt ārstēšanu vai lietot iepriekš atlikušās zāles. Sāpes mazinošos līdzekļus arī jālieto
                  saskaņā ar individuālajām rekomendācijām.
                </p>
                <p>
                  Ārstēto vietu nevajadzētu spiest, durt vai mēģināt atvērt patstāvīgi. Kamēr saglabājas jutīgums,
                  ieteicams izvēlēties mīkstāku, ne pārāk karstu ēdienu un košļāt ar otru mutes pusi. Mute ir jākopj
                  uzmanīgi, nebojājot iegriezuma vai drenāžas vietu.
                </p>
                <p>
                  Obligāti jāierodas uz nozīmēto kontroles vizīti, pat ja pašsajūta ir uzlabojusies. Tā laikā tiek
                  izvērtēta dzīšana, ja nepieciešams, tiek izņemta drenāža un tiek turpināta pamatinfekcijas cēloņa
                  ārstēšana. Neārstējot cēloņa zobu vai periodonta audus, abscess var atjaunoties.
                </p>
                <p>
                  Steidzami jāvēršas pēc palīdzības, ja tūska palielinās, sāpes pastiprinās, nepāriet drudzis, parādās
                  rīšanas vai elpošanas grūtības, izteikts nespēks vai sāk tūkt kakla vai acu apvidus.
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
                  Abscesu ārstēšana prasa ne tikai samazināt sāpes vai likvidēt uzkrājušos strutaino saturu, bet arī
                  precīzi noteikt infekcijas avotu. Bangų zobārstniecības klīnikā pacienta stāvoklis tiek vērtēts
                  kompleksi, ņemot vērā simptomus, zobu un smaganu stāvokli, radioloģisko izmeklējumu datus un vispārējo
                  veselību.
                </p>
                <p>
                  Mūsu speciālisti izskaidro, kāpēc izveidojies abscess, vai ir nepieciešama incīzija un kāda turpmākā
                  ārstēšana var būt nepieciešama. Pacientam tiek sniegtas skaidras rekomendācijas par brūces kopšanu,
                  zāļu lietošanu, kontroles vizītēm un simptomiem, kuru parādīšanās gadījumā ir nepieciešams vērsties
                  steidzami.
                </p>
                <p>
                  Abscesa risku palīdz mazināt savlaicīga kariesa un smaganu slimību ārstēšana, ikdienas mutes higiēna
                  un regulāras profilaktiskās apskates. Parādoties sāpēm, jutīgumam vai smaganu tūskai, nevajadzētu
                  gaidīt, kamēr izveidosies izteikta sejas tūska.
                </p>
                <p>
                  Uzmanība mūsu klīnikā tiek pievērsta ne tikai akūtu simptomu mazināšanai, bet arī infekcijas cēloņa
                  novēršanai. Tāpēc tiem, kas meklē profesionāli veiktu abscesa atvēršanu un zobu abscesu ārstēšanu
                  Klaipēdā, Bangų zobārstniecības klīnika ir uzticama izvēle.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties abscesa ārstēšanai Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja jūtat stipras zobu sāpes, tūsku vai citas abscesa pazīmes, nekavējieties un vērsieties Bangų
                  zobārstniecības klīnikā. Izvērtēsim situāciju, veiksim nepieciešamo ārstēšanu un apspriedīsim
                  turpmāko ārstēšanas gaitu.
                </p>
                <p>
                  Pierakstieties un parūpējieties par savu mutes veselību laikus un profesionāli.
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
