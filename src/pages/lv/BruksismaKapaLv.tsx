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
  { id: 'kas-yra', label: 'Kas ir bruksisma zobu kapa?' },
  { id: 'bruksizmas', label: 'Kas ir bruksisms?' },
  { id: 'pozymiai', label: 'Bruksisma pazīmes' },
  { id: 'kaip-veikia', label: 'Kā darbojas kapa?' },
  { id: 'gamyba', label: 'Kapas izgatavošana' },
  { id: 'prieziura', label: 'Kapas kopšana' },
  { id: 'duk', label: 'Biežāk uzdotie jautājumi' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function BruksismaKapaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/bruksisma-kapa/#service`,
    "name": "Bruksisma zobu kapa Klaipēdā",
    "serviceType": "Bruksisma zobu kapa",
    "description": "Bruksisma (zobu griešanas) kapas tiek piedāvātas Bangų zobārstniecības klīnikā Klaipēdā. Individuāli izgatavota kapa aizsargā zobus no nolietojuma un bojājumiem.",
    "url": `${SITE_URL}/lv/pakalpojumi/bruksisma-kapa/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": `${SITE_URL}/#dentist` },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Bruksisma zobu kapa Klaipēdā - Bangų klīnika"
        description="Griežat zobus miegā? Bruksisma zobu kapa Klaipēdā aizsargās zobus no nolietojuma☑️individuāli izgatavota☑️cena no 150€.⏩Pierakstieties jau tagad."
        keywords="bruksisma kapa, zobu griešana, nakts kapa, zobu aizsardzība, Klaipēda"
        canonical={`${SITE_URL}/lv/pakalpojumi/bruksisma-kapa`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/bruksizmo-dantu-kapa` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/bruksisma-kapa` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/bruksizmo-dantu-kapa` },
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
              Bruksisma kapa Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Zobu griešana vai spēcīga sakošana bieži notiek neapzināti, īpaši miega laikā, tāpēc cilvēks
                  ilgu laiku var pat nezināt, ka šī problēma ietekmē viņa zobus, košļājamos muskuļus un
                  žokļa locītavu. No rīta jūtams žokļa nogurums, galvas vai deniņu sāpes,
                  paaugstināta zobu jutība vai pamanāms zobu nolietojums var būt pazīmes, ka zobi tiek pakļauti
                  pārmērīgai slodzei.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā bruksisma pazīmes tiek vērtētas individuāli, ņemot vērā
                  zobu nolietojumu, sakodienu, restaurāciju stāvokli un pacienta sūdzības. Viens no biežāk
                  izmantotajiem aizsardzības veidiem ir bruksisma kapa – individuāli izgatavota kapa pret zobu griešanu,
                  kas palīdz aizsargāt zobus no turpmāka nolietojuma, plaisāšanas un pārmērīgas slodzes.
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
                      Bruksisma zobu kapas cena
                    </h2>
                    <p className="text-slate-600">
                      Bruksisma zobu kapa tiek izgatavota individuāli pēc katra pacienta mutes izmēriem, tāpēc pirms izgatavošanas vienmēr tiek veikta apskate, kuras laikā tiek izvērtēta situācija un pārrunāti turpmākie soļi.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Kapa pret bruksismu</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Bruksisma zobu kapa', '150 €'],
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
                  Atsevišķi tiek aprēķināti nospiedumi, modeļu izliešana un citi ar izgatavošanu saistītie darbi.
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
                    Ja jums ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā izvērtēsim jūsu mutes stāvokli, atbildēsim uz interesējošajiem jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā tiecamies, lai katrs pacients justos droši – no pirmās konsultācijas līdz gala rezultātam. Pierakstieties un speriet pirmo soli veselīga smaida virzienā.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts izsmeļošs klīniskais novērtējums',
                        'tiek pārrunātas iespējamās ārstēšanas metodes',
                        'tiek izskaidroti procedūras posmi un termiņi',
                        'tiek sagatavots individuāls ārstēšanas plāns',
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
                <div className="relative aspect-[4/5] bg-sky-50 min-h-[300px]">                  <img
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

          {/* KAS IR BRUKSISMA KAPA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir bruksisma zobu kapa?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Bruksisma zobu kapa – tā ir individuāli pēc pacienta zobiem izgatavota aizsargkapa,
                  ko visbiežāk izmanto naktī. Tās galvenais mērķis – radīt aizsargbarjeru starp augšējiem
                  un apakšējiem zobiem, lai griešanas vai spēcīgas sakošanas laikā zobi tieši neberzētos viens pret
                  otru.
                </p>
                <p>
                  Pareizi izgatavota bruksisma kapa palīdz samazināt zobu emaljas nolietojumu, aizsargāt zobus no
                  ieplaisāšanas, lūzumiem un restaurāciju bojājumiem. Tā ir īpaši aktuāla pacientiem, kuriem jau ir plombas,
                  kronīši, uzlikas, laminātes vai citas restaurācijas, jo bruksisms var saīsināt to kalpošanas
                  laiku.
                </p>
                <p>
                  Pacienti šo līdzekli bieži sauc dažādi: kapas pret zobu griešanu, zobu kapas pret
                  griešanu vai zobu kapas pret bruksismu. Visi šie nosaukumi visbiežāk apzīmē vienu un to pašu
                  mērķi – aizsargāt zobus no neapzinātas griešanas vai spēcīgas sakošanas sekām.
                </p>
                <p>
                  Svarīgi saprast, ka kapa ne vienmēr novērš pašu bruksisma cēloni. Bieži tā ir aizsargājošs
                  un stabilizējošs līdzeklis, kas palīdz kontrolēt bruksisma sekas un izvairīties no sarežģītākas
                  zobu ārstēšanas nākotnē.
                </p>
              </div>
            </div>
          </motion.section>

          {/* BRUKSISMS */}
          <motion.section id="bruksizmas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir bruksisms un kāpēc ir svarīgi to neignorēt?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Bruksisms – tā ir neapzināta zobu griešana vai spēcīga zobu sakošana. Tas visbiežāk
                  izpaužas nakts laikā, kad cilvēks nevar apzināti kontrolēt košļājamo muskuļu darbību.
                  Dažos gadījumos spēcīga sakošana var izpausties arī dienā, īpaši piedzīvojot spriedzi, stresu
                  vai ilgstoši koncentrējoties.
                </p>
                <p>
                  Bruksisma cēloņi var būt dažādi. Bieži tas tiek saistīts ar stresu, emocionālu spriedzi, miega
                  traucējumiem, nepareizu sakodienu, noteiktiem paradumiem vai vispārēju košļājamo muskuļu
                  aktivitāti. Šī iemesla dēļ zobu griešanas ārstēšana var būt kompleksa – vieniem
                  pacientiem pietiek ar aizsargkapu, bet citiem var būt nepieciešams papildus izvērtēt sakodienu,
                  restaurācijas, muskuļu spriedzi vai citus faktorus.
                </p>
                <p>
                  Ignorēts bruksisms ilgākā laikā var izraisīt nozīmīgas zobu un žokļa problēmas. Pastāvīga
                  mehāniskā slodze var novest pie emaljas nolietojuma, zobu augstuma samazināšanās, jutības pret aukstumu vai
                  karstumu, plombu plaisāšanas, keramikas restaurāciju bojājumiem vai pat zobu lūzumiem.
                </p>
                <p>
                  Dažos gadījumos bruksisma dēļ var rasties arī žokļa locītavas diskomforts: krakšķi,
                  smeldze, ierobežota mutes atvēršana, košļājamo muskuļu spriedze vai galvassāpes. Tāpēc, pamanot
                  iespējamās pazīmes, ir svarīgi nekavēties un konsultēties ar zobārstu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* BRUKSISMA PAZĪMES */}
          <motion.section id="pozymiai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kādas pazīmes liecina, ka jums var būt nepieciešama kapa pret zobu griešanu?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Bruksisms bieži tiek konstatēts ne uzreiz, jo cilvēks ar zobiem visbiežāk griež miegā.
                Reizēm par problēmu pastāsta blakus guļošais tuvinieks, taču nereti pirmās pazīmes pamana
                zobārsts profilaktiskās apskates laikā.
              </p>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-darkblue-700">Kapa pret zobu griešanu var būt nepieciešama, ja:</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'no rītiem jūtat žokļa nogurumu, spriedzi vai sāpes',
                    'bieži sāp galva, deniņi, kakls vai ausu apvidus',
                    'pamanāt zobu nolietojumu, saīsināšanos vai izmainījušos to formu',
                    'zobi kļuvuši jutīgāki pret aukstumu, karstumu vai pieskārienu',
                    'plaisā plombas, kronīši, laminātes vai citas restaurācijas',
                    'uz zobiem redzamas plaisas vai atskaldījumi',
                    'partneris pamana zobu griešanu naktī',
                    'dienas laikā bieži turat zobus stipri sakostus',
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
                  Šīs pazīmes ne vienmēr nozīmē, ka problēma jau ir progresējusi, taču tās liecina, ka zobi
                  var tikt pakļauti pārmērīgai slodzei. Jo agrāk tiek konstatētas bruksisma pazīmes, jo lielāka iespēja
                  aizsargāt zobus no lielāka nolietojuma un sarežģītākas atjaunošanas nākotnē.
                </p>
                <p>
                  Ja zobi jau ir stipri nolietoti, ir mainījies sakodiena augstums, bieži lūzt restaurācijas vai
                  moka žokļa locītavas sāpes, ar kapu vien var nepietikt. Šādos gadījumos ir nepieciešams
                  plašāks ārstēšanas plāns, kas ietver ne tikai zobu aizsardzību, bet arī bojājumu atjaunošanu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KĀ DARBOJAS */}
          <motion.section id="kaip-veikia" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā darbojas bruksisma kapa?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Bruksisma kapa darbojas kā aizsargslānis starp augšējiem un apakšējiem zobiem. Griešanas vai
                  spēcīgas sakošanas laikā tā pārņem daļu mehāniskās slodzes un neļauj zobiem tieši
                  berzēties vienam pret otru. Tādā veidā tiek aizsargāta emalja, dentīns, plombas un citas restaurācijas.
                </p>
                <p>
                  Individuāli pielāgota kapa arī palīdz stabilizēt zobu kontaktus nakts laikā. Tas ir
                  svarīgi pacientiem, kuru zobi ir nolietoti, noslogoti ar restaurācijām vai jutīgi pārmērīgas
                  sakošanas dēļ. Kapa palīdz samazināt nevienmērīgu slodzi un aizsargāt vājākos zobus no
                  plaisāšanas.
                </p>
                <p>
                  Svarīgi uzsvērt, ka bruksisma kapas nav vienīgais risinājums visos gadījumos. Ja zobi jau
                  ir stipri nolietoti, sakodiens mainīts vai ir žokļa locītavas traucējumi, var būt nepieciešams
                  plašāks ārstēšanas plāns. Šādos gadījumos zobārsts var ieteikt restaurāciju atjaunošanu,
                  sakodiena analīzi, protezēšanu, ortodontisko ārstēšanu vai citus papildu risinājumus.
                </p>
                <p>
                  Tomēr daudziem pacientiem individuālā kapa ir pirmais un ļoti svarīgs solis, lai
                  apturētu turpmāku zobu bojāšanu. Tā palīdz aizsargāt dabiskos zobus un jau veiktos
                  ārstēšanas darbus, tāpēc īpaši ieteicama pacientiem pēc lielākām plombēšanas, protezēšanas vai
                  estētisko restaurāciju procedūrām.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAPAS IZGATAVOŠANA */}
          <motion.section id="gamyba" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā tiek izgatavota individuāla bruksisma kapa?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Individuālas bruksisma kapas izgatavošana Bangų zobārstniecības klīnikā tiek veikta secīgi, lai kapa
                būtu precīza, ērta un droša lietošanai ikdienā. Katrs posms ir svarīgs, lai kapa labi
                turētos mutē un pildītu savu aizsargfunkciju.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Apskate un zobu stāvokļa novērtējums</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Zobārsts izvērtē zobu stāvokli, nolietojuma pazīmes, plombas, kronīšus, sakodienu un pacienta
                    sūdzības. Tiek pārrunāts, kad izpaužas griešana vai spēcīga sakošana.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Sakodiena un restaurāciju analīze</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ja mutē ir daudz restaurāciju, zobi ir stipri nolietoti vai pacients jūt diskomfortu
                    košļājot, papildus tiek izvērtēts sakodiens, lai izlemtu, vai pietiek ar aizsargkapu.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zobu skenēšana vai nospiedumi</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Lai kapa precīzi atbilstu pacienta zobu formai, tiek veikta digitāla skenēšana vai
                    ņemti zobu nospiedumi, pēc kuriem tiek izgatavota individuāla kapa.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Kapas izgatavošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kapa tiek izgatavota no speciāla medicīniska materiāla, izvēloties piemērotu biezumu un stingrību atbilstoši
                    pacienta situācijai – no plānākas aizsargkapas līdz stingrākam okluzālam risinājumam.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Pielāgošana un lietošanas ieteikumi</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Izgatavotā kapa tiek pielaikota mutē, tiek izvērtēts tās piegulums un stabilitāte. Pacientam
                    tiek izskaidrots, kā kapu ievietot, izņemt, tīrīt, glabāt un cik bieži to lietot.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Individuāla bruksisma kapa atšķiras no standarta universālajām kapām ar to, ka tā tiek izgatavota pēc
                konkrēta pacienta zobiem. Tāpēc tā precīzāk pieguļ, labāk turas, mazāk traucē miegam un
                palīdz drošāk sadalīt slodzi.
              </p>
            </div>
          </motion.section>

          {/* KAPAS KOPŠANA */}
          <motion.section id="prieziura" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Cik ilgi kalpo un kā kopt bruksisma kapu?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Bruksisma kapas kalpošanas laiks ir atkarīgs no griešanas intensitātes, kapas materiāla, tās
                  biezuma, kopšanas un regulārām pārbaudēm. Vieniem pacientiem kapa var kalpot ilgāk,
                  citiem, esot ļoti intensīvai griešanai, tā var nolietoties ātrāk. Ja kapa noplakst,
                  ieplaisā, kļūst vaļīga vai neērta, ir svarīgi vērsties pie zobārsta.
                </p>
                <p>
                  Kapas kopšana nav sarežģīta, taču tai jābūt konsekventai. Pēc katras lietošanas kapu
                  ieteicams noskalot vēsā vai remdenā ūdenī un maigi notīrīt ar tam paredzētu līdzekli vai
                  mīkstu birstīti. Nevajadzētu izmantot karstu ūdeni, jo tas var deformēt kapu.
                </p>
                <p>
                  Kad kapa netiek lietota, tā jāglabā speciālā kārbiņā, pasargātā no karstuma, putekļiem un
                  mehāniskiem bojājumiem. Tāpat ir svarīgi neaizmirst par ikdienas mutes higiēnu – kapa tiek likta uz
                  tīriem zobiem, tāpēc pirms miega ir rūpīgi jāiztīra zobi un starpzobu telpas.
                </p>
                <p>
                  Regulāri profilaktiski vizīti palīdz izvērtēt, vai kapa joprojām labi pieguļ, vai nav
                  jaunu zobu nolietojuma pazīmju, plaisu vai sakodiena izmaiņu. Tas ir īpaši svarīgi pacientiem, kuriem
                  bruksisms ir intensīvs vai jau veikti lielāki zobu atjaunošanas darbi.
                </p>
              </div>
            </div>
          </motion.section>

          {/* BUJ */}
          <motion.section id="duk" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Biežāk uzdotie jautājumi par bruksisma kapām</h2>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Vai bruksisma kapa izārstē zobu griešanu?</h3>
                  <p className="text-slate-600 text-sm">Ne vienmēr. Bruksisma kapa visbiežāk nenovērš pašu zobu griešanas cēloni, taču palīdz aizsargāt zobus no tās sekām. Ja bruksisms saistīts ar stresu, miega traucējumiem vai sakodiena problēmām, var būt nepieciešama plašāka pieeja.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Vai kapa jānēsā katru nakti?</h3>
                  <p className="text-slate-600 text-sm">Visbiežāk jā, ja zobārsts ieteica to lietot nakts bruksisma kontrolēšanai. Regulāra lietošana palīdz aizsargāt zobus un restaurācijas no pastāvīgas slodzes.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Vai bruksisma kapa būs ērta?</h3>
                  <p className="text-slate-600 text-sm">Individuāli izgatavota kapa tiek pielāgota pēc pacienta zobiem, tāpēc parasti tiek labi panesta. Pirmajās naktīs var būt jūtama neliela svešķermeņa sajūta, taču vairums pacientu pie kapas pierod pakāpeniski.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Vai kapa ir nepieciešama pēc protezēšanas vai estētiskajām restaurācijām?</h3>
                  <p className="text-slate-600 text-sm">Ja pacients griež zobus vai spēcīgi tos sakož, kapa var būt ļoti svarīga pēc protezēšanas, estētiskās plombēšanas, laminātēm vai uzlikām. Tā palīdz aizsargāt restaurācijas no plaisāšanas, nolietojuma un pārmērīgas slodzes.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Kad ir jāmaina bruksisma kapa?</h3>
                  <p className="text-slate-600 text-sm">Kapa būtu jāmaina, ja tā nolietojas, ieplaisā, vairs neprecīzi turas, mainās zobu stāvoklis vai rodas diskomforts. Lēmumu par kapas maiņu vislabāk pieņemt pēc zobārsta apskates.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">No kā atkarīga bruksisma kapas cena?</h3>
                  <p className="text-slate-600 text-sm">Bruksisma kapas cena ir atkarīga no kapas tipa, izmantotā materiāla, izgatavošanas veida un individuālās klīniskās situācijas. Precīza cena tiek pārrunāta konsultācijas laikā, kad tiek izvērtēts zobu stāvoklis, sakodiens un bruksisma pazīmes.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KĀPĒC IZVĒLĒTIES */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Izvēloties bruksisma kapu, svarīgs ir ne tikai pats aizsardzības līdzeklis, bet arī precīzs zobu, sakodiena
                  un restaurāciju stāvokļa novērtējums. Bangų zobārstniecības klīnikā Klaipēdā bruksisma pazīmes
                  tiek vērtētas individuāli, tiecoties pacientam izvēlēties piemērotu, ērtu un ilgtermiņa zobu aizsardzību
                  nodrošinošu risinājumu.
                </p>
                <p>
                  Klīnikā liela uzmanība tiek pievērsta skaidram ārstēšanas plāna izskaidrojumam. Konsultācijas laikā
                  tiek pārrunāts, vai konkrētajā gadījumā pietiek ar individuālu kapu, vai zobu nolietojuma, restaurāciju
                  bojājumu vai žokļa locītavas diskomforta dēļ ir nepieciešams plašāks ārstēšanas plāns.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā speciālisti velta laiku pacienta jautājumiem, izskaidro kapas
                  lietošanas un kopšanas ieteikumus un nodrošina turpmāku kontroli. Šāda pieeja palīdz
                  pacientam justies mierīgi, izprast savu situāciju un laikus aizsargāt zobus no turpmāka
                  nolietojuma.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties bruksisma zobu kapas izgatavošanai Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja pamanāt bruksisma pazīmes – no rīta jūtamu žokļa nogurumu, galvassāpes, paaugstinātu zobu
                  jutību vai zobu nolietojumu – aicinām pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā
                  tiks izvērtēts jūsu mutes stāvoklis un pārrunāts individuāli pielāgotas bruksisma zobu kapas izgatavošanas
                  process.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā tiecamies, lai zobu aizsardzība pret griešanu būtu vienkārša, ērta un efektīva.
                  Šeit jūs sagaida pieredzējuši speciālisti, moderna aparatūra un rūpīga attieksme pret katru pacientu.
                </p>
                <p>
                  Pierakstieties bruksisma zobu kapas izgatavošanai un parūpējieties par savu zobu veselību laikus un profesionāli.
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
