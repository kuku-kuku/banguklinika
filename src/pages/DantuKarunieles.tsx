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
  { id: 'taikymo-situacijos', label: 'Kada rekomenduojamos?' },
  { id: 'medziagos', label: 'Naudojamos medžiagos' },
  { id: 'procesas', label: 'Kaip vyksta procedūra?' },
  { id: 'prieziura', label: 'Priežiūra ir tarnavimo laikas' },
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
              Dantų karūnėlės (dantų vainikėliai) Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Dantų karūnėlės, dar vadinamos vainikėliais, yra fiksuoti protezai, naudojami atkurti stipriai pažeisto ar
                  nusilpusio danties struktūrą. Jos dažnai taikomos tada, kai paprastas plombavimas nebegali užtikrinti
                  reikalingo dantų tvirtumo ir funkcionalumo.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje dantų karūnėlės gaminamos ir tvirtinamos individualiai, atsižvelgiant
                  į kiekvieno paciento danties būklę, sąkandį ir estetinius lūkesčius. Tinkamai parinkta ir pritaikyta karūnėlė
                  ne tik grąžina dančiui natūralią išvaizdą, bet ir leidžia juo naudotis kasdien be diskomforto ilgus metus.
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
                <div className="relative min-h-[320px] lg:min-h-full bg-sky-50">
                  <img
                    src="/team/Jonas-light.jpg"
                    alt="Bangų odontologijos klinikos gydytojas"
                    className="absolute inset-0 w-full h-full object-cover object-[30%_10%] lg:object-[30%_100%]"
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra dantų karūnėlės?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų karūnėlės (vainikėliai) yra fiksuoti protezai, uždedami ant natūralaus danties ar implanto, siekiant
                  atkurti stipriai pažeisto arba nusilpusio danties formą, funkciją ir stiprumą. Jos dažnai taikomos tais
                  atvejais, kai paprastas plombavimas nebegali užtikrinti danties tvirtumo ar tinkamai atkurti jo išvaizdos.
                </p>
                <p>
                  Karūnėlė visiškai apgaubia matomą danties dalį, todėl dantis tampa atsparesnis kramtymo apkrovai ir apsaugotas
                  nuo tolesnio pažeidimo. Priklausomai nuo situacijos, karūnėlė gali būti tvirtinama tiek ant natūralaus danties
                  po jo paruošimo, tiek ant implanto, kai trūkstamas dantis atkuriamas nuo pat šaknies.
                </p>
              </div>
            </div>
          </motion.section>

          {/* TAIKYMO SITUACIJOS */}
          <motion.section id="taikymo-situacijos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada rekomenduojamos dantų karūnėlės?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Sprendimas dėl karūnėlės priimamas individualiai, įvertinus danties būklę ir jo tolesnio naudojimo galimybes.
                Dažniausiai karūnėlės rekomenduojamos esant šioms situacijoms:
              </p>

              <div className="grid gap-3">
                {[
                  'ėduonies sukeltiems pažeidimams, kai dantis yra per silpnas plombai',
                  'danties lūžiams ar įtrūkimams',
                  'dantims po šaknų kanalų gydymo',
                  'stipriam dantų nusidėvėjimui'
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
          </motion.section>

          {/* MEDŽIAGOS */}
          <motion.section id="medziagos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kokios medžiagos naudojamos?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Karūnėlių gamybai naudojamos skirtingos medžiagos, kurių pasirinkimas priklauso nuo estetinių ir funkcinių
                paciento poreikių, danties padėties bei kramtymo apkrovos.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Cirkonio keramika</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Itin tvirta ir ilgaamžė medžiaga, pasižyminti natūraliai atrodančiu, švelniai permatomu paviršiumi – dažnai renkamasi tiek priekiniams, tiek kramtomiesiems dantims.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Bemetalė keramika (E-MAX)</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pasižymi ypač aukšta estetika ir natūraliu šviesos atspindžiu, todėl dažniausiai naudojama priekinių dantų sričiai, kur svarbiausia natūrali išvaizda.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Metalo keramika</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Sujungia metalinį karkasą su keramine danga, todėl pasižymi dideliu atsparumu apkrovai – tinkamas sprendimas kramtomųjų dantų atkūrimui.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip vyksta procedūra?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų karūnėlės gamyba ir tvirtinimas Bangų odontologijos klinikoje vyksta pagal aiškiai suplanuotą eigą,
                kuri apima keturis pagrindinius etapus.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Konsultacija</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Odontologas įvertina danties būklę, aptaria galimas medžiagas ir kartu su pacientu parenka tinkamiausią karūnėlės sprendimą, atsižvelgiant į estetinius ir funkcinius poreikius.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Danties paruošimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dantis nušlifuojamas iki reikiamos formos, kad karūnėlė ant jo tvirtai ir tiksliai priglustų, o esant poreikiui atkuriama trūkstama danties struktūra.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Nuskaitymas ir gamyba</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Paimamas skaitmeninis nuskaitymas arba atspaudas, pagal kurį gaminama individuali, danties formą ir sąkandį atitinkanti karūnėlė.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Tvirtinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pagaminta karūnėlė patikrinama dėl tikslaus tinkamumo, prireikus pakoreguojama ir galiausiai patikimai pritvirtinama ant danties ar implanto.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PRIEŽIŪRA IR TARNAVIMO LAIKAS */}
          <motion.section id="prieziura" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Priežiūra ir tarnavimo laikas</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Reguliarus dantų valymas ir periodiniai odontologiniai vizitai yra esminiai dantų karūnėlės ilgaamžiškumui.
                  Tinkama burnos higiena padeda apsaugoti tiek pačią karūnėlę, tiek po ja esantį dantį ar implantą nuo
                  papildomų pažeidimų.
                </p>
                <p>
                  Vidutiniškai dantų karūnėlės tarnauja nuo 5 iki 15 metų, o tinkamai prižiūrėtos gali tarnauti dar ilgiau.
                  Todėl atsakingas požiūris į kasdienę burnos priežiūrą ir reguliarus apsilankymas pas odontologą yra
                  geriausias būdas užtikrinti ilgą ir patikimą karūnėlės tarnavimo laiką.
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
                  Renkantis dantų karūnėles svarbu ne tik pati procedūra, bet ir tai, kaip ji atliekama – nuo tikslaus danties
                  paruošimo iki kruopštaus karūnėlės pritaikymo. Bangų odontologijos klinikoje dantų karūnėlės gaminamos ir
                  tvirtinamos atsakingai, siekiant maksimaliai apsaugoti paciento komfortą ir burnos sveikatą.
                </p>
                <p>
                  Klinikoje dirbantys specialistai kiekvieną atvejį vertina individualiai, padeda parinkti tinkamiausią
                  medžiagą ir sprendimą, atsižvelgiant į estetinius bei funkcinius poreikius. Dėmesys skiriamas ne tik pačiai
                  procedūrai, bet ir aiškiam situacijos paaiškinimui bei rekomendacijoms dėl tolesnės priežiūros.
                </p>
                <p>
                  Pacientai vertina profesionalų bendravimą, ramų požiūrį ir aiškias instrukcijas, kurios padeda jaustis
                  saugiai viso gydymo metu. Todėl ieškantiems patikimų ir profesionaliai atliekamų dantų karūnėlių Klaipėdoje,
                  Bangų odontologijos klinika yra patikimas pasirinkimas.
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
