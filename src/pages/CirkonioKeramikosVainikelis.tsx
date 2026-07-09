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
  { id: 'kas-yra', label: 'Kas yra cirkonio keramikos vainikėlis?' },
  { id: 'privalumai', label: 'Privalumai' },
  { id: 'procesas', label: 'Kaip vyksta procedūra?' },
  { id: 'trukme', label: 'Kiek laiko tarnauja?' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function CirkonioKeramikosVainikelis() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/cirkonio-keramikos-vainikelis/#service",
    "name": "Cirkonio keramikos vainikėlis Klaipėdoje",
    "serviceType": "Cirkonio keramikos vainikėlis",
    "description": "Cirkonio keramikos vainikėlių gamybos ir pritaikymo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Klinikoje atkuriami pažeisti ar estetiškai netinkami dantys pacientams Klaipėdos mieste.",
    "url": "https://www.banguklinika.lt/paslaugos/cirkonio-keramikos-vainikelis/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Cirkonio keramikos vainikėlis Klaipėdoje - Bangų klinika"
        description="Cirkonio keramikos vainikėlis Klaipėdoje – natūrali išvaizda☑️tvirtumas☑️kaina nuo 400€.⏩Registruokitės konsultacijai Bangų klinikoje jau šiandien."
        keywords="cirkonio keramikos vainikelis, cirkonio vainikelis, dantu karunele, klaipeda"
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
              Cirkonio keramikos vainikėlis Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Bangų odontologijos klinika Klaipėdoje specializuojasi cirkonio keramikos vainikėlių gamyboje ir pritaikyme –
                  šiuolaikiniame ir plačiai pripažintame danties atkūrimo metode. Cirkonio keramika šiandien yra viena
                  patikimiausių medžiagų, leidžiančių atkurti pažeistą dantį taip, kad rezultatas atrodytų natūraliai ir
                  tarnautų ilgai.
                </p>
                <p>
                  Kiekvienas vainikėlis gaminamas individualiai, atsižvelgiant į paciento danties formą, spalvą ir sąkandžio
                  ypatumus. Toks individualus požiūris leidžia pasiekti rezultatą, kuris organiškai įsilieja tarp natūralių
                  dantų ir atkuria pilnavertę danties funkciją.
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
                      Cirkonio keramikos vainikėlio kainos
                    </h2>
                    <p className="text-slate-600">
                      Konkretūs tarifai aptariami individualiai konsultacijos metu, atsižvelgiant į specifinę situaciją.
                      Prieš atliekant procedūrą visuomet atliekama apžiūra, kurios metu įvertinama danties būklė ir parenkamas
                      tinkamiausias sprendimas.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Cirkonio keramikos vainikėlis</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Vainikėlis ant danties', '400 €'],
                        ['Vainikėlis ant implanto', '450 €'],
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

          {/* KAS YRA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra cirkonio keramikos vainikėlis?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Cirkonio keramikos vainikėlis – tai individualiai pagaminta danties restauracija, skirta pažeistiems ar
                  estetiškai netinkamiems dantims atkurti. Vainikėlis gaminamas iš cirkonio oksido keramikos – medžiagos,
                  plačiai naudojamos šiuolaikinėje odontologijoje dėl jos tvirtumo ir estetinių savybių.
                </p>
                <p>
                  Toks vainikėlis pilnai uždengia danties karūnėlę, atkurdamas tiek jos formą ir funkciją, tiek natūralią
                  išvaizdą. Kiekvienas vainikėlis gaminamas individualiai pagal paciento danties parametrus, todėl rezultatas
                  yra tikslus, patogus ir vizualiai harmoningas su likusiais dantimis.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PRIVALUMAI */}
          <motion.section id="privalumai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Privalumai</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Cirkonio keramika pasižymi eile savybių, dėl kurių ji tapo vienu populiariausių pasirinkimų atkuriant dantis –
                tiek estetiniu, tiek funkciniu požiūriu.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  'tvirtumas – medžiaga atspari kramtymo apkrovoms ir kasdieniam naudojimui',
                  'natūrali išvaizda – vainikėlis vizualiai beveik nesiskiria nuo natūralaus danties',
                  'biologinis suderinamumas – medžiaga gerai priimama organizmo ir dantenų audinių',
                  'be metalinio karkaso – nėra pilkšvo kraštelio prie dantenos, kaip būna su metaline keramika',
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

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip vyksta procedūra?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Cirkonio keramikos vainikėlio gamyba ir pritaikymas Bangų odontologijos klinikoje vyksta pagal aiškią eigą,
                apimančią kelis pagrindinius etapus – nuo diagnostikos iki galutinio vainikėlio pritaikymo.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Diagnostika</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pirmiausia įvertinama danties ir aplinkinių audinių būklė, nustatoma, ar vainikėlis yra tinkamiausias
                    sprendimas, ir suplanuojama tolimesnė gydymo eiga.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Danties paruošimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dantis atsargiai apdirbamas, suteikiant jam formą, reikalingą tolygiai ir tvirtai užsidėti vainikėliui.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Skaitmeninis skenavimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Paruošto danties duomenys nuskaitomi skaitmeniniu būdu, kad vainikėlis būtų pagamintas tiksliai pagal
                    paciento danties formą ir sąkandį.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gamyba ir pritaikymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Vainikėlis pagaminamas pagal individualius parametrus ir pritaikomas burnoje, atliekant reguliarią
                    priežiūrą, kad rezultatas būtų patogus ir ilgaamžis.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* TRUKME */}
          <motion.section id="trukme" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kiek laiko tarnauja vainikėlis?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Tinkamai pagamintas cirkonio keramikos vainikėlis tarnauja daugelį metų, jei laikomasi tinkamos burnos
                  higienos ir vengiama žalingų įpročių. Reguliari priežiūra ir atsakingas požiūris į kasdienę burnos higieną
                  leidžia išlaikyti vainikėlio funkciją ir estetiką ilgą laiką.
                </p>
                <p>
                  Vainikėlio ilgaamžiškumas taip pat priklauso nuo bendros burnos sveikatos, todėl svarbu reguliariai
                  apsilankyti pas odontologą profilaktinių apžiūrų metu.
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
                  Renkantis cirkonio keramikos vainikėlį svarbu ne tik pati procedūra, bet ir tai, kaip ji atliekama – nuo
                  sprendimo priėmimo iki priežiūros po procedūros. Bangų odontologijos klinikoje vainikėliai gaminami
                  atsakingai, siekiant maksimaliai apsaugoti paciento komfortą ir burnos sveikatą.
                </p>
                <p>
                  Klinikoje dirbantys specialistai kiekvieną atvejį vertina individualiai, neskuba priimti sprendimo ir
                  visuomet ieško rezultato, kuris atrodytų natūraliai ir tarnautų ilgai. Dėmesys skiriamas ne tik pačiai
                  procedūrai, bet ir aiškiam situacijos paaiškinimui bei rekomendacijoms po jos.
                </p>
                <p>
                  Pacientai vertina profesionalų bendravimą, ramų požiūrį ir aiškias instrukcijas, kurios padeda jaustis
                  saugiai viso gydymo metu. Todėl ieškantiems patikimo ir profesionalaus cirkonio keramikos vainikėlio
                  Klaipėdoje, Bangų odontologijos klinika yra patikimas pasirinkimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis cirkonio keramikos vainikėliui Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu ieškote patikimo sprendimo pažeistam ar estetiškai netinkamam dančiui atkurti, kviečiame registruotis
                  konsultacijai Bangų odontologijos klinikoje. Vizito metu bus įvertinta Jūsų burnos būklė, aptartos gydymo
                  galimybės ir, esant poreikiui, suplanuota cirkonio keramikos vainikėlio gamyba.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiame, kad kiekvienas pacientas gautų tvirtą, natūraliai atrodantį ir ilgai
                  tarnaujantį rezultatą. Čia Jūsų laukia patyrę specialistai, moderni įranga ir rūpestingas požiūris į
                  kiekvieną pacientą.
                </p>
                <p>
                  Registruokitės cirkonio keramikos vainikėliui ir pasirūpinkite savo šypsena laiku bei profesionaliai.
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
