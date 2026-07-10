import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { TableOfContents } from '../components/TableOfContents'
import { useRef } from 'react'
import ReviewsCarousel from '../components/ReviewsCarousel'

// Animacijų nustatymai
const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

// UI helpers
const sectionWrap = 'mb-12 scroll-mt-36 2xl:scroll-mt-24'
const whiteCard = 'bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft'
const innerCard = 'bg-white p-5 rounded-xl border border-slate-200 shadow-sm'

// Kainų dizaino žetonai
const P  = '#002045'
const S  = '#006b5f'
const SL = '#ecf5fb'

// Ikonos
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

const tocSections = [
  { id: 'kainos', label: 'Kainos' },
  { id: 'kas-yra', label: 'Kas yra dantų karūnėlės?' },
  { id: 'taikymo-situacijos', label: 'Kada reikalingos?' },
  { id: 'problemos', label: 'Kokias problemas išsprendžia?' },
  { id: 'medziagos', label: 'Naudojamos medžiagos' },
  { id: 'procesas', label: 'Kaip vyksta procedūra?' },
  { id: 'skausmas', label: 'Ar tai skausminga?' },
  { id: 'prieziura', label: 'Priežiūra ir tarnavimo laikas' },
  { id: 'kada-negalima', label: 'Kada karūnėlė nebeįmanoma?' },
  { id: 'mitai', label: 'Dažniausi mitai' },
  { id: 'duk', label: 'Dažniausi klausimai' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function DantuKarunieles() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/dantu-karunieles/#service",
    "name": "Dantų karūnėlės (vainikėliai) Klaipėdoje",
    "serviceType": "Dantų karūnėlės",
    "description": "Dantų karūnėlių (vainikėlių) paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Klinikoje atliekamas pažeistų ar nusilpusių dantų atkūrimas fiksuotais protezais.",
    "url": "https://www.banguklinika.lt/paslaugos/dantu-karunieles/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Dantų karūnėlės (vainikėliai) Klaipėdoje - Bangų klinika"
        description="Pažeistas ar nusilpęs dantis? Dantų karūnėlės (vainikėliai) Klaipėdoje☑️tvirtai☑️estetiškai atkuria dantį jau nuo 400€.⏩Registruokitės konsultacijai Bangų klinikoje."
        keywords="dantu karunieles, dantu vainikeliai, cirkonio karunele, klaipeda, dantu protezavimas"
        structuredData={structuredData}
      />

      <motion.div
        ref={pageRef}
        className="max-w-screen-2xl mx-auto px-8 xl:px-28 2xl:px-8 2xl:flex 2xl:gap-8 2xl:items-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <TableOfContents sections={tocSections} rootRef={pageRef} cta={{ label: 'Registruotis vizitui', to: '/kontaktai' }} />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Dantų karūnėlės Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Dantų pažeidimai, nusidėvėjimas ar stipresnis danties audinių praradimas yra dažnos priežastys,
                  dėl kurių pacientams prireikia protezavimo sprendimų. Tokiais atvejais danties struktūra tampa
                  nepakankamai stipri, kad galėtų atlaikyti kasdienį kramtymo krūvį, todėl reikalingas papildomas
                  danties sutvirtinimas ir atkūrimas. Laiku pritaikytos dantų karūnėlės leidžia atkurti ne tik
                  danties funkciją, bet ir estetinį vaizdą, išvengiant tolimesnių komplikacijų ar danties netekimo.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje dantų karūnėlių protezavimas atliekamas remiantis
                  individualiu gydymo planu ir skaitmeninėmis technologijomis, leidžiančiomis tiksliai įvertinti
                  paciento burnos būklę. Kiekvienas danties vainikėlis pritaikomas konkrečiai situacijai,
                  atsižvelgiant į sąkandį, dantų padėtį ir estetinį poreikį. Klinikos specialistai siekia užtikrinti,
                  kad galutinis rezultatas būtų ne tik funkcionalus, bet ir natūraliai atrodantis, todėl kiekvienas
                  protezavimo etapas yra kruopščiai suplanuotas ir kontroliuojamas. Toks požiūris leidžia pacientams
                  jaustis užtikrintai viso gydymo proceso metu.
                </p>
              </div>
            </div>

            <div className="flex justify-start mt-6">
              <Link
                to="/kontaktai"
                className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Registruotis vizitui
              </Link>
            </div>

            {/* KAINOS */}
            <motion.section id="kainos" className="mt-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
              <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                      Dantų karūnėlių kainos
                    </h2>
                    <p className="text-slate-600">
                      Dantų karūnėlės kaina priklauso nuo pasirinktos medžiagos, danties padėties ir to, ar karūnėlė tvirtinama ant natūralaus danties, ar ant implanto. Prieš gamybą visuomet atliekama konsultacija, kurios metu aptariamos visos galimybės ir parenkamas tinkamiausias sprendimas.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Dantų karūnėlės</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Karūnėlė ant danties', '400 €'],
                        ['Karūnėlė ant implanto', '450 €'],
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
                  Paruošiamieji darbai, tokie kaip vainiko atstatymas, danties šlifavimas ar atspaudų ėmimas, skaičiuojami atskirai.
                </p>
              </div>
            </motion.section>
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
                    Kviečiame registruotis konsultacijai Bangų klinikoje
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Jeigu turite klausimų ar norite sužinoti daugiau apie gydymo galimybes, kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu įvertinsime Jūsų burnos būklę, atsakysime į rūpimus klausimus ir padėsime suprasti visą gydymo eigą.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų odontologijos klinikoje siekiame, kad kiekvienas pacientas jaustųsi užtikrintai – nuo pirmosios konsultacijos iki galutinio rezultato. Registruokitės ir ženkite pirmą žingsnį link sveikos šypsenos.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultacijos metu:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'atliekamas išsamus klinikinis įvertinimas',
                        'aptariami galimi gydymo metodai',
                        'paaiškinami procedūros etapai ir terminai',
                        'sudaromas individualus gydymo planas',
                      ].map((t, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1"><CheckIcon /></span>
                          <span className="leading-relaxed">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/kontaktai"
                    className="btn-primary btn-glow rounded-full px-7 py-3 font-semibold text-base inline-block shadow-lg hover:shadow-xl transition"
                  >
                    Registruotis vizitui
                  </Link>
                </div>
                {/* Right: doctor photo */}
                <div className="relative aspect-[4/5] bg-sky-50">
                  <img
                    src="/team/Jonas-light.jpg"
                    alt="Bangų odontologijos klinikos gydytojas"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,transparent_15%)]" />
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

          {/* KAS YRA KARŪNĖLĖS */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra dantų karūnėlės (dantų vainikėliai)?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų karūnėlės, dar vadinamos dantų vainikėliais, yra fiksuotas dantų protezavimo sprendimas,
                  skirtas atkurti stipriai pažeisto ar nusilpusio danties struktūrą. Tai individualiai gaminamas
                  danties apvalkalas, kuris uždedamas ant nušlifuoto natūralaus danties arba implanto atramos,
                  visiškai atkuriant jo formą, spalvą ir funkciją. Dantų karūnėlės leidžia išsaugoti natūralią
                  šaknį ar implantą, tuo pačiu atkuriant pilnavertį kramtymo efektyvumą.
                </p>
                <p>
                  Šis gydymo metodas taikomas tada, kai įprastas plombavimas nebegali užtikrinti pakankamo danties
                  tvirtumo. Karūnėlė veikia kaip apsauginis sluoksnis, kuris paskirsto kramtymo apkrovas ir sumažina
                  danties lūžimo riziką. Be funkcinės naudos, dantų vainikėlis taip pat atkuria estetinę šypsenos
                  išvaizdą, todėl yra plačiai naudojamas tiek priekinėje, tiek krūminių dantų srityje.
                </p>
                <p>
                  Šiuolaikinėje odontologijoje dantų karūnėlės gaminamos iš pažangių medžiagų, leidžiančių pasiekti
                  natūralų skaidrumą ir tvirtumą. Tai užtikrina, kad atkurtas dantis vizualiai nesiskirtų nuo
                  natūralių dantų, o pacientas galėtų jaustis komfortiškai kasdienėje veikloje.
                </p>
              </div>
            </div>
          </motion.section>

          {/* TAIKYMO SITUACIJOS */}
          <motion.section id="taikymo-situacijos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada reikalingos dantų karūnėlės?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų karūnėlės taikomos tada, kai natūralaus danties audinių nebeužtenka pilnavertei funkcijai
                užtikrinti. Tai nėra pirmo pasirinkimo procedūra – ji rekomenduojama tik tuomet, kai paprastas
                plombavimas nebegali suteikti ilgalaikio sprendimo.
              </p>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-darkblue-700">Dažniausios situacijos:</h3>
                <div className="grid gap-3">
                  {[
                    'stipriai pažeistas dantis dėl ėduonies',
                    'danties lūžis ar įtrūkimas',
                    'didelės senos plombos, silpninančios dantį',
                    'dantis po šaknų kanalų gydymo',
                    'stiprus dantų nusidėvėjimas dėl bruksizmo',
                    'estetinis danties formos ar spalvos koregavimas',
                    'danties atkūrimas ant implanto',
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

              <p className="text-slate-700 leading-relaxed">
                Kiekvienu atveju sprendimas priimamas individualiai, įvertinus danties šaknies būklę ir bendrą
                burnos situaciją. Svarbiausias tikslas – išsaugoti natūralų dantį tiek, kiek tai mediciniškai
                įmanoma.
              </p>
            </div>
          </motion.section>

          {/* PROBLEMOS */}
          <motion.section id="problemos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kokias problemas padeda išspręsti dantų karūnėlės?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų karūnėlės yra vienas universaliausių protezavimo sprendimų odontologijoje, nes leidžia vienu
                metu atkurti tiek danties funkciją, tiek estetiką, tiek struktūrinį tvirtumą. Jos taikomos tais
                atvejais, kai natūralaus danties audinių nebeužtenka patikimam kramtymo krūvio atlaikymui, tačiau
                danties šaknį dar galima išsaugoti.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Stipriai pažeistas dantis</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kai dantis yra pažeistas ėduonies arba traumos, o likę audiniai yra silpni, karūnėlė sustiprina
                    dantį ir apsaugo jį nuo tolesnio lūžimo ar skilimo.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Dantis po šaknų kanalų gydymo</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Endodontiškai gydyti dantys tampa trapūs, todėl karūnėlė padeda atkurti jų atsparumą ir
                    prailginti tarnavimo laiką.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Nuskilę ar nudilę dantys</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dantų vainikėlis atkuria natūralią danties formą, leidžia tolygiai paskirstyti kramtymo krūvį ir
                    atkuria pilnavertę funkciją.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Estetiniai dantų defektai</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kai danties spalva, forma ar proporcijos neatitinka šypsenos linijos, karūnėlė leidžia pasiekti
                    natūralų ir harmoningą estetinį vaizdą.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Dantų atkūrimas ant implantų</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Karūnėlės naudojamos kaip galutinis protezas ant implantų, atkuriant tiek funkciją, tiek estetiką.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* MEDŽIAGOS */}
          <motion.section id="medziagos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Iš kokių medžiagų gaminamos dantų karūnėlės?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų karūnėlės gaminamos iš skirtingų medžiagų, kurios parenkamos individualiai, atsižvelgiant į
                danties būklę, jo vietą burnoje, sąkandžio apkrovą ir estetinius paciento lūkesčius. Tinkamas
                medžiagos pasirinkimas yra vienas svarbiausių veiksnių, užtikrinančių ilgaamžišką rezultatą.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Cirkonio keramika</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tai viena moderniausių ir dažniausiai naudojamų medžiagų. Ji pasižymi itin dideliu tvirtumu,
                    atsparumu kramtymo apkrovoms ir natūralia estetika. Cirkonio karūnėlės tinka tiek priekiniams,
                    tiek krūminiams dantims, nes leidžia išlaikyti balansą tarp estetikos ir funkcijos.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Bemetalė keramika (E-MAX)</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tai itin estetiškas sprendimas, pasižymintis natūraliu šviesos pralaidumu. Dėl šios savybės
                    dantis atrodo labai artimas natūraliam emaliui, todėl ši medžiaga dažniausiai naudojama
                    priekinėje dantų srityje, kur estetika yra svarbiausia.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Metalo keramika</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tai patikimas ir tvirtas, tačiau ekonomiškesnis sprendimas. Ji dažniausiai taikoma krūminių
                    dantų srityje, kur svarbiausia yra atsparumas kramtymo apkrovoms, o estetiniai reikalavimai yra
                    mažesni.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Laikinos karūnėlės</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Gaminamos iš plastiko ar kompozito ir naudojamos pereinamuoju gydymo laikotarpiu, kol
                    pagaminamas galutinis protezas. Jos apsaugo dantį ir palaiko estetiką gydymo metu.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip atliekamas dantų karūnėlių protezavimas?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų karūnėlių protezavimas yra nuoseklus, etapais pagrįstas procesas, kuris planuojamas
                individualiai kiekvienam pacientui. Toks nuoseklumas leidžia užtikrinti tikslų pritaikymą, komfortą
                ir ilgalaikį rezultatą.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Konsultacija ir diagnostika</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pirmojo vizito metu įvertinama bendra burnos būklė, danties pažeidimo laipsnis ir sąkandžio
                    ypatumai. Atliekamas tyrimas ir sudaromas individualus gydymo planas, atsižvelgiant į funkcinius
                    ir estetinius poreikius.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Danties paruošimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dantis yra minimaliai nušlifuojamas tam, kad būtų sudaryta vieta karūnėlei. Jei reikia, prieš
                    tai atliekamas šaknų kanalų gydymas ar kiti paruošiamieji gydymo etapai, užtikrinantys stabilų
                    pagrindą protezui.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Nuskaitymas ir gamyba</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Atliekamas skaitmeninis dantų nuskaitymas arba atspaudas, pagal kurį dantų technikų
                    laboratorijoje gaminama individuali karūnėlė. Šiame etape atkuriama tiksli danties forma,
                    spalva ir anatomija, siekiant natūralaus rezultato.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Tvirtinimas ir korekcija</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pagamintas danties vainikėlis yra tvirtinamas prie danties arba implanto. Esant poreikiui,
                    atliekami minimalūs koregavimai, kad būtų užtikrintas komfortiškas sukandimas ir natūralus
                    pojūtis burnoje.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* SKAUSMAS */}
          <motion.section id="skausmas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Ar dantų karūnėlės yra skausmingos?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų karūnėlių protezavimas yra atliekamas taikant vietinę nejautrą, todėl pati procedūra
                  pacientui nesukelia skausmo. Tai vienas iš dažniausiai pacientų užduodamų klausimų, todėl svarbu
                  pabrėžti, kad visas danties paruošimo ir protezavimo procesas yra kontroliuojamas ir pritaikytas
                  maksimaliam komfortui.
                </p>
                <p>
                  Procedūros metu gydytojas odontologas užtikrina, kad dantis būtų paruošiamas tik tiek, kiek
                  būtina tiksliai karūnėlei pritaikyti. Tai reiškia, kad intervencija yra minimali ir orientuota į
                  maksimalų natūralių audinių išsaugojimą. Daugeliu atvejų pacientas jaučia tik lengvą spaudimą arba
                  vibraciją, bet ne skausmą.
                </p>
                <p>
                  Po procedūros, kai nuskausminimas baigia veikti, gali pasireikšti laikinas jautrumas ar nedidelis
                  maudimas danties srityje. Tai yra normali organizmo reakcija į gydymą ir paprastai praeina per
                  kelias dienas. Esant sudėtingesniems atvejams, diskomfortas gali būti šiek tiek ryškesnis, tačiau
                  jis yra trumpalaikis ir lengvai kontroliuojamas.
                </p>
                <p>
                  Svarbu suprasti, kad dantų karūnėlės šiandien yra planuojamos itin tiksliai, todėl visas procesas
                  yra prognozuojamas, saugus ir pacientui komfortiškas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PRIEŽIŪRA IR TARNAVIMO LAIKAS */}
          <motion.section id="prieziura" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip prižiūrėti dantų karūnėles?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Tinkama dantų karūnėlių priežiūra yra esminė sąlyga, siekiant užtikrinti jų ilgaamžiškumą ir
                  stabilų funkcionalumą. Nors pati karūnėlė yra pagaminta iš atsparių medžiagų, aplinkiniai audiniai
                  ir atraminis dantis vis tiek reikalauja kasdienės priežiūros.
                </p>
                <p>
                  Rekomenduojama dantis valyti bent du kartus per dieną, naudojant minkštą dantų šepetėlį ir fluoro
                  turinčią dantų pastą. Ypač svarbu kruopščiai išvalyti vietas ties dantenų kraštu, kur gali kauptis
                  apnašos. Taip pat būtina naudoti tarpdančių siūlą arba tarpdančių šepetėlius, kad būtų užtikrinta
                  švara aplink karūnėlės kraštus.
                </p>
                <p>
                  Reguliarūs vizitai pas odontologą ir profesionali burnos higiena padeda laiku pastebėti bet kokius
                  pokyčius ir užtikrinti, kad karūnėlė išliktų stabiliai pritvirtinta. Taip pat svarbu vengti
                  žalingų įpročių, tokių kaip dantų griežimas, nagų kramtymas ar labai kieto maisto kandimas, nes
                  tai gali padidinti protezo nusidėvėjimą.
                </p>
                <p>
                  Tinkamai prižiūrimos dantų karūnėlės leidžia ilgą laiką išlaikyti tiek estetiką, tiek pilnavertę
                  kramtymo funkciją.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA NEGALIMA */}
          <motion.section id="kada-negalima" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada danties jau nebeįmanoma atkurti tik karūnėle?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Nors dantų karūnėlės yra vienas efektyviausių būdų atkurti stipriai pažeistus dantis, ne visais
                atvejais jos gali būti taikomos kaip vienintelis sprendimas. Karūnėlė reikalauja stabilaus danties
                pagrindo, todėl kai kuriose situacijose natūralaus danties išsaugojimo galimybės tampa ribotos.
              </p>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-darkblue-700">Danties atkūrimas karūnėle gali nebebūti įmanomas, kai:</h3>
                <div className="grid gap-3">
                  {[
                    'dantis yra stipriai suiręs žemiau dantenų linijos ir nebelieka pakankamo audinio protezui tvirtinti',
                    'nustatomas vertikalus danties šaknies skilimas, kuris pažeidžia visą struktūrinį stabilumą',
                    'aplink danties šaknį yra labai išplitęs uždegimas, o kaulo praradimas yra per didelis',
                    'dantis yra nebepritaikomas atstatymui net po endodontinio gydymo ar chirurginio paruošimo',
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
                  Tokiais atvejais vien karūnėlė negali užtikrinti ilgalaikio rezultato, nes ji neturi pakankamo
                  atraminio pagrindo. Sprendimas visada priimamas individualiai, įvertinus danties išsaugojimo
                  galimybes ir bendrą burnos būklę.
                </p>
                <p>
                  Svarbu pabrėžti, kad pirmiausia visada siekiama išsaugoti natūralų dantį. Tik tada, kai prognozė
                  yra nepalanki, pacientui siūlomi alternatyvūs sprendimai, tokie kaip implantacija ar kompleksinis
                  protezavimas. Aiškus situacijos įvertinimas leidžia pasirinkti sprendimą, kuris užtikrina
                  ilgalaikę funkciją ir burnos sveikatą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* MITAI */}
          <motion.section id="mitai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Dažniausi mitai apie dantų karūnėles</h2>

              <p className="text-slate-700 leading-relaxed max-w-4xl mb-6">
                Dantų karūnėlės yra dažnai atliekama procedūra, tačiau apie ją vis dar egzistuoja nemažai klaidingų
                įsitikinimų, kurie gali sukelti nereikalingą pacientų nerimą ar paskatinti atidėti reikalingą
                gydymą. Tinkamas informavimas padeda suprasti realią procedūros eigą ir priimti pagrįstus sprendimus
                dėl burnos sveikatos.
              </p>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mitas: „Karūnėlės atrodo nenatūraliai.“</h3>
                  <p className="text-slate-600 text-sm">Šiuolaikinės dantų karūnėlės gaminamos iš estetiškų medžiagų, kurios tiksliai atkartoja natūralaus danties spalvą, skaidrumą ir formą. Tinkamai pritaikytas vainikėlis vizualiai nesiskiria nuo natūralių dantų ir yra pritaikomas prie bendros šypsenos linijos.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mitas: „Tai laikinas sprendimas.“</h3>
                  <p className="text-slate-600 text-sm">Nors karūnėlė yra protezavimo konstrukcija, ji yra ilgalaikis gydymo sprendimas. Tinkamai pagaminta ir prižiūrima karūnėlė gali tarnauti daugelį metų, o kai kuriais atvejais – net kelis dešimtmečius.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mitas: „Procedūra labai skausminga.“</h3>
                  <p className="text-slate-600 text-sm">Danties paruošimas atliekamas taikant vietinę nejautrą, todėl pacientas skausmo nejaučia. Diskomfortas po procedūros yra laikinas ir lengvai kontroliuojamas.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mitas: „Karūnėlės lengvai iškrenta.“</h3>
                  <p className="text-slate-600 text-sm">Tinkamai pritvirtintos karūnėlės yra stabilios ir patikimos. Atsiskyrimo rizika yra minimali ir dažniausiai susijusi tik su nepakankama burnos higiena ar papildomais veiksniais.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mitas: „Užtenka bet kokios medžiagos.“</h3>
                  <p className="text-slate-600 text-sm">Iš tiesų medžiagos pasirinkimas yra kritiškai svarbus. Nuo jo priklauso tiek estetika, tiek ilgaamžiškumas, tiek karūnėlės atsparumas kramtymo apkrovai.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* DUK */}
          <motion.section id="duk" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">DUK – dažniausiai užduodami klausimai apie dantų karūnėles</h2>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Kiek laiko tarnauja dantų karūnėlės?</h3>
                  <p className="text-slate-600 text-sm">Dantų karūnėlių tarnavimo laikas priklauso nuo pasirinktos medžiagos, burnos higienos ir paciento įpročių. Vidutiniškai jos tarnauja nuo 5 iki 15 metų, tačiau tinkamai prižiūrimos gali išlikti dar ilgiau. Cirkonio ir keraminės karūnėlės dažnai pasižymi ilgesniu tarnavimo laikotarpiu dėl savo atsparumo nusidėvėjimui.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Nuo ko priklauso dantų karūnėlės kaina?</h3>
                  <p className="text-slate-600 text-sm">Dantų karūnėlės kaina priklauso nuo kelių pagrindinių veiksnių: pasirinktos medžiagos, danties padėties burnoje, gydymo sudėtingumo bei papildomų procedūrų poreikio. Taip pat įtakos turi tai, ar karūnėlė tvirtinama ant natūralaus danties, ar ant implanto.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Ar prieš karūnėlės uždėjimą reikia šlifuoti dantį?</h3>
                  <p className="text-slate-600 text-sm">Taip, dantis yra minimaliai nušlifuojamas tam, kad būtų sudaryta vieta karūnėlei ir užtikrintas tikslus prigludimas. Šlifavimo apimtis visada parenkama individualiai, siekiant išsaugoti kuo daugiau sveikų audinių.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Ar procedūra tinka jautriems pacientams?</h3>
                  <p className="text-slate-600 text-sm">Taip, procedūra atliekama taikant vietinę nejautrą, todėl net ir jautresni pacientai paprastai nejaučia skausmo. Gydymas planuojamas taip, kad būtų užtikrintas maksimalus komfortas.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Ar galima valgyti įprastai su karūnėle?</h3>
                  <p className="text-slate-600 text-sm">Taip, tinkamai pritaikytas danties vainikėlis pilnai atkuria kramtymo funkciją. Po adaptacijos laikotarpio pacientas gali valgyti įprastą maistą be apribojimų.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Ar karūnėlę galima pakeisti ateityje?</h3>
                  <p className="text-slate-600 text-sm">Taip, esant poreikiui karūnėlė gali būti pakeičiama nauja. Tai priklauso nuo danties būklės ir pačios karūnėlės nusidėvėjimo.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KODĖL RINKTIS */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kodėl verta rinktis Bangų odontologijos kliniką karūnėlėms?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų karūnėlės yra tikslumo ir profesionalaus planavimo reikalaujantis protezavimo sprendimas,
                  todėl svarbu, kad gydymas būtų atliekamas laikantis aukštų medicininių standartų. Bangų
                  odontologijos klinikoje kiekvienas atvejis vertinamas individualiai, atsižvelgiant į paciento
                  dantų būklę, sąkandį ir estetinį poreikį.
                </p>
                <p>
                  Klinikoje taikomas skaitmeninis gydymo planavimas leidžia užtikrinti itin tikslų karūnėlių
                  pritaikymą, kuris lemia komfortą kasdienėje veikloje ir natūralų estetinį rezultatą. Naudojamos
                  šiuolaikinės medžiagos leidžia suderinti tvirtumą, ilgaamžiškumą ir natūralią išvaizdą.
                </p>
                <p>
                  Viso gydymo metu pacientui suteikiama aiški informacija apie kiekvieną etapą, todėl procesas
                  tampa suprantamas, kontroliuojamas ir prognozuojamas. Toks požiūris leidžia užtikrinti ne tik
                  kokybišką dantų funkcijos atkūrimą, bet ir ilgalaikę burnos sveikatą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis dantų karūnėlių procedūrai Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu Jūsų dantis yra stipriai pažeistas, nusilpęs ar gydytas šaknų kanalų gydymu, kviečiame registruotis
                  konsultacijai Bangų odontologijos klinikoje. Vizito metu bus įvertinta danties būklė ir aptartos
                  tinkamiausios karūnėlės medžiagos bei sprendimai.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiame, kad dantų karūnėlių procedūra būtų aiški, kruopščiai suplanuota ir
                  patogi kiekvienam pacientui. Čia Jūsų laukia patyrę specialistai, moderni įranga ir rūpestingas požiūris į
                  kiekvieną pacientą.
                </p>
                <p>
                  Registruokitės dantų karūnėlei ir pasirūpinkite savo šypsenos grožiu bei dantų tvirtumu laiku bei
                  profesionaliai.
                </p>
              </div>

              <Link
                to="/kontaktai"
                className="btn-primary btn-glow rounded-full px-8 py-4 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Registruotis vizitui
              </Link>
            </div>
          </motion.div>


        </div>
      </motion.div>
    </AnimatedSection>
  )
}
