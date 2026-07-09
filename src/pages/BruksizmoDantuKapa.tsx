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
  { id: 'kas-yra', label: 'Kas yra bruksizmo dantų kapa?' },
  { id: 'pozymiai', label: 'Bruksizmo požymiai' },
  { id: 'gamyba', label: 'Kapos gamyba' },
  { id: 'prieziura', label: 'Kapos priežiūra' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function BruksizmoDantuKapa() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/bruksizmo-dantu-kapa/#service",
    "name": "Bruksizmo dantų kapa Klaipėdoje",
    "serviceType": "Bruksizmo dantų kapa",
    "description": "Bruksizmo (dantų griežimo) kapos siūlomos Bangų odontologijos klinikoje Klaipėdoje. Individualiai pagaminta kapa apsaugo dantis nuo dilimo ir pažeidimų.",
    "url": "https://www.banguklinika.lt/paslaugos/bruksizmo-dantu-kapa/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Bruksizmo dantų kapa Klaipėdoje - Bangų klinika"
        description="Griežiate dantimis miegodami? Bruksizmo dantų kapa Klaipėdoje apsaugos dantis nuo dilimo☑️pagaminta individualiai☑️kaina nuo 150€.⏩Registruokitės jau dabar."
        keywords="bruksizmo kapa, dantu griezimas, naktine kapa, dantu apsauga, klaipeda"
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
              Bruksizmo dantų kapa Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Bruksizmas, dažniau vadinamas dantų griežimu, yra paplitusi problema, kuri gali sukelti rimtą žalą dantims,
                  žandikaulio sąnariams ir bendrai burnos sveikatai. Dažniausiai jis pasireiškia miego metu, todėl daugelis
                  pacientų net nesuvokia, kad griežia dantimis, kol nepastebi pirmųjų pasekmių.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje pacientams siūloma individualiai pagaminta bruksizmo dantų kapa –
                  patikima ir paprasta priemonė, padedanti apsaugoti dantis nuo tolimesnio dilimo, įtrūkimų ir kitų su bruksizmu
                  susijusių pažeidimų. Kapa pagaminama pagal tikslius Jūsų burnos matmenis, todėl dėvima patogiai ir nekelia
                  papildomo diskomforto.
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
                      Bruksizmo dantų kapos kaina
                    </h2>
                    <p className="text-slate-600">
                      Bruksizmo dantų kapa gaminama individualiai pagal kiekvieno paciento burnos matmenis, todėl prieš gamybą visuomet atliekama apžiūra, kurios metu įvertinama situacija ir aptariami tolimesni žingsniai.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Kapa nuo bruksizmo</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Bruksizmo dantų kapa', '150 €'],
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
                  Atskirai skaičiuojami atspaudai, modelių atpylimas ir kiti su gamyba susiję darbai.
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

          {/* KAS YRA BRUKSIZMO KAPA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra bruksizmo dantų kapa?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Bruksizmo dantų kapa – tai individualiai pagaminta apsauginė priemonė, kurią pacientai dažniausiai dėvi
                  nakties metu. Kapa tarnauja kaip barjeras tarp viršutinio ir apatinio žandikaulio dantų, todėl griežimo ar
                  sukandimo metu susidariusi apkrova paskirstoma tolygiau ir nebeveikia tiesiogiai dantų emalio.
                </p>
                <p>
                  Reguliariai dėvima bruksizmo kapa padeda sumažinti dantų emalio dilimą, apsaugoti dantis nuo įtrūkimų,
                  lūžių ir jau esamų restauracijų – plombų, vainikėlių ar kitų atkūrimų – pažeidimų. Kadangi kapa gaminama
                  individualiai pagal Jūsų burnos matmenis, ji tiksliai priglunda ir yra patogi dėvėti kasdien.
                </p>
              </div>
            </div>
          </motion.section>

          {/* BRUKSIZMO POŽYMIAI */}
          <motion.section id="pozymiai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Bruksizmo požymiai</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Kadangi bruksizmas dažniausiai pasireiškia miego metu, patys pacientai jo dažnai nepastebi. Tačiau yra keletas
                įspėjamųjų ženklų, į kuriuos verta atkreipti dėmesį ir, juos pastebėjus, apsilankyti pas odontologą.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  'rytą jaučiamas žandikaulio nuovargis ar skausmas',
                  'galvos skausmas, ypač jaučiamas rytais',
                  'padidėjęs dantų jautrumas',
                  'pastebimas dantų nudilimas',
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

          {/* KAPOS GAMYBA */}
          <motion.section id="gamyba" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip vyksta kapos gamyba?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Bruksizmo dantų kapa gaminama laikantis aiškios eigos, kad galutinis rezultatas tiksliai atitiktų Jūsų burnos
                anatomiją ir kapa būtų patogi dėvėti kasdien.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Dantų apžiūra</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pirmiausia odontologas atlieka dantų ir žandikaulio sąnarių apžiūrą, įvertina galimus bruksizmo požymius bei aptaria su pacientu jo jaučiamus simptomus. Tai leidžia parinkti tinkamiausią kapos tipą.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Skenavimas ar atspaudų nuėmimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Siekiant pagaminti kapą, tiksliai atitinkančią Jūsų dantų formą, nuimami dantų atspaudai arba atliekamas skaitmeninis burnos skenavimas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Medžiagos panaudojimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Remiantis gautais duomenimis, kapa pagaminama iš specialios medicininės medžiagos, užtikrinančios tiek patvarumą, tiek dėvėjimo komfortą.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Pritaikymas burnoje</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pagaminta kapa pritaikoma tiesiogiai burnoje – patikrinamas jos priglundimas, patogumas ir, esant poreikiui, atliekami smulkūs pakoregavimai.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KAPOS PRIEŽIŪRA */}
          <motion.section id="prieziura" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kapos priežiūra</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Tinkama bruksizmo dantų kapos priežiūra padeda ilgiau išlaikyti jos funkcionalumą ir švarą. Kapa turi būti
                  valoma šaltu vandeniu po kiekvieno naudojimo, o kai ji nenaudojama – laikoma specialioje dėžutėje, kuri
                  apsaugo ją nuo pažeidimų, dulkių ir nešvarumų.
                </p>
                <p>
                  Taip pat rekomenduojama reguliariai apsilankyti pas odontologą profilaktinės apžiūros vizitų metu – tai
                  leidžia įvertinti kapos būklę, jos priglundimą ir, esant poreikiui, laiku aptarti tolimesnę priežiūrą ar
                  kapos atnaujinimą.
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
                  Renkantis bruksizmo dantų kapą svarbu ne tik pati priemonė, bet ir tai, kaip ji pagaminama – nuo tikslios
                  apžiūros iki galutinio pritaikymo burnoje. Bangų odontologijos klinikoje kapa gaminama atsakingai, siekiant
                  maksimaliai apsaugoti paciento dantis ir užtikrinti dėvėjimo komfortą.
                </p>
                <p>
                  Klinikoje dirbantys specialistai kiekvieną atvejį vertina individualiai, atsižvelgdami į paciento burnos
                  anatomiją ir bruksizmo pasireiškimo pobūdį. Kapa gaminama naudojant kokybiškas medicinines medžiagas, o
                  procesas apima tikslų skenavimą ar atspaudų nuėmimą, kad galutinis rezultatas tiksliai atitiktų Jūsų
                  poreikius.
                </p>
                <p>
                  Pacientai vertina profesionalų bendravimą, aiškias priežiūros rekomendacijas ir dėmesį kiekvienai detalei.
                  Todėl ieškantiems patikimos bruksizmo dantų kapos Klaipėdoje, Bangų odontologijos klinika yra patikimas
                  pasirinkimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis bruksizmo dantų kapos gamybai Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu pastebite bruksizmo požymius – ryte jaučiamą žandikaulio nuovargį, galvos skausmą, padidėjusį dantų
                  jautrumą ar dantų nudilimą – kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu
                  bus įvertinta Jūsų burnos būklė ir aptartas individualiai pritaikytos bruksizmo dantų kapos gamybos
                  procesas.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiame, kad dantų apsauga nuo griežimo būtų paprasta, patogi ir efektyvi.
                  Čia Jūsų laukia patyrę specialistai, moderni įranga ir rūpestingas požiūris į kiekvieną pacientą.
                </p>
                <p>
                  Registruokitės bruksizmo dantų kapos gamybai ir pasirūpinkite savo dantų sveikata laiku bei profesionaliai.
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
