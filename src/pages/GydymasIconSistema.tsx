import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { TableOfContents } from '../components/TableOfContents'
import { useRef } from 'react'
import ReviewsCarousel from '../components/ReviewsCarousel'

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
  { id: 'kainos', label: 'Kainos' },
  { id: 'kas-yra', label: 'Kas yra gydymas „ICON“ sistema?' },
  { id: 'kada-rekomenduojamas', label: 'Kada rekomenduojamas gydymas?' },
  { id: 'privalumai', label: 'Privalumai ir ribos' },
  { id: 'procesas', label: 'Kaip atliekamas gydymas?' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function GydymasIconSistema() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/gydymas-icon-sistema/#service",
    "name": "Gydymas „ICON“ sistema Klaipėdoje",
    "serviceType": "Gydymas „ICON“ sistema",
    "description": "Mikroinvazinis dantų emalio pažeidimų gydymas „ICON“ sistema Bangų odontologijos klinikoje Klaipėdoje.",
    "url": "https://www.banguklinika.lt/paslaugos/gydymas-icon-sistema/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Gydymas „ICON“ sistema Klaipėdoje - Bangų klinika"
        description="Gydymas „ICON“ sistema Klaipėdoje – mikroinvazinis ankstyvo karieso ir baltų emalio dėmių gydymas be gręžimo. Kaina nuo 80€.⏩Registruokitės Bangų klinikoje."
        keywords="icon sistema, karieso gydymas be grezimo, emalio infiltracija, baltos demes, klaipeda"
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
              Gydymas „ICON“ sistema Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Gydymas „ICON“ sistema – tai mikroinvazinis dantų emalio pažeidimų gydymo metodas, taikomas
                  ankstyvam, ertmės dar nesudariusiam kariesui ir tam tikroms baltoms emalio dėmėms koreguoti.
                  Procedūros metu į porėtą emalio struktūrą įvedama skysta infiltracinė medžiaga, kuri užpildo
                  mikroporas ir apsunkina rūgščių skverbimąsi į pažeistą audinį.
                </p>
                <p className="mb-4">
                  Tinkamai parinktais atvejais gydymas atliekamas negręžiant danties ir neformuojant plombai skirtos
                  ertmės. Taip išsaugomi nepažeisti danties audiniai ir ankstyvas pažeidimas gydomas dar prieš
                  susiformuojant didesniam defektui.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje gydymas „ICON“ sistema planuojamas individualiai,
                  įvertinus emalio pakitimo kilmę, gylį, aktyvumą ir paviršiaus vientisumą. Šis metodas tinka ne
                  visiems karieso pažeidimams ar dantų spalvos pokyčiams, todėl prieš procedūrą svarbi tiksli
                  diagnostika.
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
                      Gydymo „ICON“ sistema kainos
                    </h2>
                    <p className="text-slate-600">
                      „ICON“ sistemos kaina nustatoma individualiai, atsižvelgiant į gydymo apimtį ir papildomos
                      diagnostikos poreikį.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Gydymas „ICON“ sistema</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['1 dantis', 'nuo 80 €'],
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
                  Tiksli gydymo „ICON“ sistema Klaipėdoje kaina aptariama individualios konsultacijos metu,
                  atsižvelgiant į konkrečią klinikinę situaciją.
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
                    Kviečiame registruotis konsultacijai Bangų klinikoje
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Jeigu turite klausimų ar norite sužinoti daugiau apie gydymo galimybes, kviečiame registruotis
                    konsultacijai Bangų odontologijos klinikoje. Vizito metu įvertinsime Jūsų burnos būklę, atsakysime
                    į rūpimus klausimus ir padėsime suprasti visą gydymo eigą.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų odontologijos klinikoje siekiame, kad kiekvienas pacientas jaustųsi užtikrintai – nuo pirmosios
                    konsultacijos iki galutinio rezultato. Registruokitės ir ženkite pirmą žingsnį link sveikos šypsenos.
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
                <div className="relative bg-sky-50">                  <img
                    src="/team/Jonas-light.jpg"
                    alt="Bangų odontologijos klinikos gydytojas"
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

          {/* KAS YRA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra gydymas „ICON“ sistema?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  „ICON“ sistema odontologijoje naudojama danties emalio infiltracijai. Procedūros metu paruošiamas
                  pažeisto emalio paviršius, o į jo mikroporas įvedama mažo klampumo dervinė medžiaga. Ji prasiskverbia
                  į porėtą audinį ir sukietinama odontologine lempa.
                </p>
                <p>
                  Šis metodas gali būti taikomas dviem pagrindinėmis kryptimis. Pirmoji – ankstyvų, nekavitacinių
                  karieso pažeidimų gydymas, ypač tarpdančių srityse. Antroji – tam tikrų baltų emalio dėmių estetinė
                  korekcija priekinių dantų paviršiuose.
                </p>
                <p>
                  Baltos dėmės išryškėja todėl, kad pažeisto emalio optinės savybės skiriasi nuo sveiko audinio.
                  Infiltracinei medžiagai užpildžius emalio mikroporas, dėmės kontrastas gali sumažėti, todėl danties
                  paviršius atrodo tolygesnis.
                </p>
                <p>
                  Gydymas „ICON“ sistema nėra dantų balinimas ir nėra tradicinis plombavimas. Procedūros metu
                  nekeičiamas bendras visų dantų atspalvis, o gydoma konkreti pažeista emalio sritis.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA REKOMENDUOJAMAS */}
          <motion.section id="kada-rekomenduojamas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada rekomenduojamas gydymas „ICON“ sistema?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                „ICON“ sistema dantims gali būti rekomenduojama tuomet, kai emalio paviršius dar nėra suiręs ir nėra
                susiformavusi aiški karieso ertmė. Gydytojas įvertina pažeidimo vietą, gylį ir aktyvumą bei nustato,
                ar infiltracinė medžiaga galės pasiekti porėtą emalio sritį.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Gydymas gali būti svarstomas, kai:</h3>

                <div className="grid gap-3">
                  {[
                    'nustatomas pradinis, ertmės nesudaręs kariesas',
                    'pažeidimas yra tarpdančio srityje',
                    'ant priekinių dantų matomos baltos demineralizacijos dėmės',
                    'baltos dėmės atsirado aplink breketus ar po ortodontinio gydymo',
                    'siekiama išvengti ankstyvo danties gręžimo',
                    'emalio pakitimo struktūra tinkama infiltracijai'
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
                  Tarpdančių kariesui nustatyti gali būti reikalingas radiologinis tyrimas, nes tokio pažeidimo ne
                  visada galima pastebėti klinikinės apžiūros metu. Jei paviršius jau įgriuvęs, susiformavusi ertmė
                  arba pažeidimas išplitęs giliau, dažniausiai reikia plombavimo ar kito gydymo metodo.
                </p>
                <p>
                  Ne kiekviena balta, gelsva ar rusva dėmė tinkama „ICON“ infiltracijai. Emalio spalvos pokyčiai gali
                  būti susiję su demineralizacija, fluoroze, trauma ar vystymosi sutrikimais, todėl pirmiausia svarbu
                  nustatyti jų kilmę.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PRIVALUMAI */}
          <motion.section id="privalumai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kokie yra gydymo „ICON“ sistema privalumai ir ribos?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Vienas svarbiausių šio metodo privalumų – galimybė tinkamais atvejais gydyti pažeidimą be gręžimo ir
                  išsaugoti sveikus danties audinius. Kadangi nereikia formuoti ertmės plombai, gydymas yra
                  tausojantis ir dažniausiai gerai toleruojamas.
                </p>
                <p>
                  Infiltracinė medžiaga užpildo emalio mikroporas ir padeda stabilizuoti ankstyvą karieso pažeidimą.
                  Vis dėlto procedūra nepašalina bendrų karieso rizikos veiksnių, todėl po gydymo išlieka svarbi
                  kasdienė burnos higiena, tarpdančių priežiūra ir profilaktinės apžiūros.
                </p>
                <p>
                  Estetinės korekcijos metu baltos emalio dėmės gali tapti mažiau pastebimos. Galutinis rezultatas
                  priklauso nuo jų kilmės, gylio, spalvos ir emalio paviršiaus būklės. Ne visais atvejais dėmė
                  išnyksta visiškai, o gilesniems pakitimams gali reikėti papildomo arba kito gydymo.
                </p>
                <p>
                  „ICON“ sistema nėra skirta didelėms karieso ertmėms, stipriai suirusiems danties audiniams ar
                  mechaniniams įtrūkimams gydyti. Tinkamumas procedūrai nustatomas tik po individualaus dantų būklės
                  įvertinimo.
                </p>
                <p>
                  Reguliarūs profilaktiniai patikrinimai padeda stebėti infiltruotos srities būklę, laiku pastebėti
                  naujus emalio pokyčius ir prireikus koreguoti individualų burnos priežiūros bei karieso kontrolės
                  planą, atsižvelgiant į paciento rizikos veiksnius ir įpročius.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip atliekamas gydymas „ICON“ sistema klinikoje?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Gydymas „ICON“ sistema Bangų odontologijos klinikoje atliekamas keliais nuosekliais etapais.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Dantų būklės įvertinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Atliekama klinikinė apžiūra ir, jei reikia, radiologinis tyrimas. Įvertinamas pažeidimo gylis,
                    paviršiaus vientisumas ir galimos gydymo alternatyvos.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gydomos vietos paruošimas ir izoliavimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Danties paviršius nuvalomas, o gydoma sritis izoliuojama nuo seilių ir drėgmės. Tam gali būti
                    naudojamas koferdamas ar kitos izoliavimo priemonės.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Emalio paviršiaus paruošimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ant gydomos vietos užtepama speciali medžiaga, padedanti atverti porėtą pažeisto emalio struktūrą.
                    Paviršius nuplaunamas ir kruopščiai išsausinamas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Infiltracinės medžiagos įvedimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ant paruošto paviršiaus užtepamas mažo klampumo infiltrantas. Medžiagai leidžiama prasiskverbti į
                    emalio mikroporas, o jos perteklius pašalinamas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Medžiagos sukietinimas ir rezultato įvertinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Infiltracinė medžiaga sukietinama odontologine lempa. Prireikus aplikacija kartojama, o procedūros
                    pabaigoje danties paviršius nupoliruojamas ir įvertinamas rezultatas.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed mt-6">
                <p>
                  Kadangi dažniausiai nereikia gręžti danties audinių, vietinė nejautra paprastai nebūtina. Pacientas
                  gali jausti izoliavimo priemonių ar tarpdančių atskyrimo spaudimą, tačiau procedūra įprastai
                  nesukelia aštraus skausmo.
                </p>
                <p>
                  Procedūros trukmė priklauso nuo gydomų dantų skaičiaus, pažeidimų vietos ir paruošimo poreikio.
                  „ICON“ sistemos kaina taip pat nustatoma individualiai, atsižvelgiant į gydymo apimtį ir papildomos
                  diagnostikos poreikį.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KODĖL RINKTIS */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kodėl verta rinktis Bangų odontologijos kliniką Klaipėdoje?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Renkantis gydymą „ICON“ sistema svarbi ne tik naudojama medžiaga, bet ir tiksli diagnostika,
                  teisingas indikacijų įvertinimas bei nuoseklus procedūros atlikimas. Bangų odontologijos klinikoje
                  gydymas planuojamas individualiai, siekiant taikyti tausojantį metodą tik tada, kai jis konkrečiu
                  atveju yra tinkamas.
                </p>
                <p>
                  Mūsų specialistai įvertina karieso pažeidimo aktyvumą, emalio paviršiaus būklę, dėmės kilmę ir
                  paciento lūkesčius. Prieš procedūrą paaiškinama gydymo eiga, galimos alternatyvos ir tikėtino
                  rezultato ribos.
                </p>
                <p>
                  Dėmesys skiriamas tinkamam gydomos srities izoliavimui, kruopščiam emalio paruošimui ir
                  infiltracinės medžiagos įvedimui. Todėl ieškantiems profesionalaus gydymo „ICON“ sistema Klaipėdoje,
                  Bangų odontologijos klinika yra patikimas pasirinkimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis gydymui „ICON“ sistema Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu pastebėjote baltas emalio dėmes ar Jūsų odontologas įtaria ankstyvą karieso pažeidimą,
                  kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu bus įvertinta Jūsų
                  dantų būklė ir aptartos galimos gydymo alternatyvos.
                </p>
                <p>
                  Registruokitės ir pasirūpinkite savo dantų sveikata laiku bei profesionaliai.
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
