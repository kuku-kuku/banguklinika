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
  { id: 'svarba', label: 'Kodėl svarbus patikrinimas?' },
  { id: 'daznis', label: 'Rekomenduojamas dažnis' },
  { id: 'etapai', label: 'Patikrinimo proceso etapai' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function VaikuProfilaktinisPatikrinimas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/vaiku-profilaktinis-patikrinimas/#service",
    "name": "Vaikų profilaktinis dantų patikrinimas Klaipėdoje",
    "serviceType": "Vaikų profilaktinis dantų patikrinimas",
    "description": "Vaikų profilaktinio dantų patikrinimo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Klinikoje atliekami reguliarūs vaikų burnos sveikatos patikrinimai.",
    "url": "https://www.banguklinika.lt/paslaugos/vaiku-profilaktinis-patikrinimas/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Vaikų profilaktinis dantų patikrinimas Klaipėdoje - Bangų klinika"
        description="Vaikų dantų patikrinimas Klaipėdoje☑️ankstyva diagnostika☑️rūpestingi specialistai☑️kaina nuo 30€.⏩Registruokite vaiką profilaktiniam patikrinimui jau dabar."
        keywords="vaiku dantu patikrinimas, vaiku odontologija, profilaktinis patikrinimas, klaipeda"
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
              Vaikų profilaktinis dantų patikrinimas Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Bangų odontologijos klinika Klaipėdoje siūlo reguliarius vaikų burnos sveikatos patikrinimus. Pagrindinis jų
                  tikslas – anksti nustatyti bet kokius dantų ar dantenų pokyčius, kol jie dar nesukėlė didesnių problemų. Toks
                  prevencinis požiūris leidžia vaiko dantų sveikatą prižiūrėti nuolat, o ne tik tuomet, kai jau atsiranda skausmas
                  ar akivaizdūs pažeidimai.
                </p>
                <p>
                  Profilaktinis patikrinimas – tai neatsiejama vaiko burnos sveikatos priežiūros dalis, padedanti laiku pastebėti
                  ėduonies pradžią, dantenų uždegimo požymius ar sąkandžio pokyčius. Bangų odontologijos klinikoje vizitai
                  vaikams pritaikomi taip, kad jie jaustųsi saugiai ir ramiai, o tėvai gautų aiškias rekomendacijas dėl tolimesnės
                  priežiūros.
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
                      Vaikų profilaktinio patikrinimo kainos
                    </h2>
                    <p className="text-slate-600">
                      Vaikų profilaktinio dantų patikrinimo kaina priklauso nuo to, ar vizito metu papildomai išduodama pažyma. Prieš atliekant patikrinimą visuomet įvertinama vaiko burnos būklė ir individualūs poreikiai.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Profilaktinis patikrinimas</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Profilaktinis patikrinimas', '30 €'],
                        ['Profilaktinis patikrinimas su pažyma', '40 €'],
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
                  Tiksli vaikų profilaktinio dantų patikrinimo Klaipėdoje kaina aptariama konsultacijos metu, atsižvelgiant į konkretų atvejį. Skaidri kainodara padeda tėvams iš anksto žinoti, ko tikėtis iš vizito.
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

          {/* SVARBA */}
          <motion.section id="svarba" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kodėl svarbus profilaktinis patikrinimas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Kadangi vaiko burnos ertmė nuolat keičiasi dygstant naujiems dantims, profilaktika yra esminė vaiko dantų
                  sveikatos priežiūros dalis. Pieniniai dantys ilgainiui keičiasi nuolatiniais, o šis procesas gali sukelti
                  įvairių pokyčių – nuo sąkandžio nukrypimų iki padidėjusios ėduonies rizikos.
                </p>
                <p>
                  Reguliari kontrolė leidžia laiku pastebėti net ir labai ankstyvus dantų ar dantenų pakitimus, kuriuos vaikas
                  ar tėvai patys namuose gali nepastebėti. Anksti nustačius problemą, gydymas dažniausiai būna paprastesnis,
                  greitesnis ir mažiau varginantis vaikui. Todėl profilaktiniai patikrinimai yra viena efektyviausių priemonių,
                  padedančių išlaikyti vaiko burnos sveikatą nuo pat mažens.
                </p>
              </div>
            </div>
          </motion.section>

          {/* DAŽNIS */}
          <motion.section id="daznis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Rekomenduojamas vizitų dažnis</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Vizitai turėtų vykti kas 6–12 mėnesių, atsižvelgiant į individualią ėduonies riziką ir burnos higienos būklę.
                  Kai kuriems vaikams, turintiems didesnę ėduonies riziką ar sudėtingesnę burnos higienos situaciją, odontologas
                  gali rekomenduoti dažnesnius vizitus, kad situacija būtų nuolat stebima ir kontroliuojama.
                </p>
                <p>
                  Patikrinimas ypač svarbus keičiantis dantims ar prieš pradedant ortodontinį gydymą. Šiais laikotarpiais burnos
                  ertmėje vyksta daug pokyčių, todėl reguliari odontologo priežiūra padeda užtikrinti, kad dantys dygtų ir
                  augtų taisyklingai, o galimos problemos būtų pastebėtos kuo anksčiau.
                </p>
              </div>
            </div>
          </motion.section>

          {/* ETAPAI */}
          <motion.section id="etapai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Patikrinimo proceso etapai</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Klinikoje atliekamą vizitą sudaro keli pagrindiniai etapai, leidžiantys visapusiškai įvertinti vaiko burnos
                sveikatą ir sudaryti individualiai pritaikytą tolimesnės priežiūros planą.
              </p>

              <div className="grid gap-3">
                {[
                  'Burnos ir dantų apžiūra',
                  'Sąkandžio bei dantų dygimo analizė',
                  'Higienos įpročių vertinimas',
                  'Individualaus plano sudarymas',
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

          {/* KODĖL RINKTIS */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kodėl verta rinktis Bangų odontologijos kliniką Klaipėdoje?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Renkantis vaikų profilaktinį dantų patikrinimą svarbu ne tik pati procedūra, bet ir tai, kaip ji atliekama – nuo pirmojo kontakto su vaiku iki rekomendacijų tėvams. Bangų odontologijos klinikoje patikrinimas atliekamas atsakingai, siekiant maksimaliai apsaugoti vaiko komfortą ir burnos sveikatą.
                </p>
                <p>
                  Klinikoje dirbantys specialistai kiekvieną vaiką vertina individualiai, skiria laiko paaiškinimui ir stengiasi
                  sukurti draugišką, nestresinę aplinką. Dėmesys skiriamas ne tik pačiai apžiūrai, bet ir aiškiam situacijos
                  paaiškinimui bei rekomendacijoms tėvams dėl burnos higienos namuose.
                </p>
                <p>
                  Reguliarus patikrinimas padeda išvengti sudėtingesnio gydymo ateityje ir formuoti teigiamą vaiko požiūrį į
                  odontologinę priežiūrą. Todėl ieškantiems patikimo ir profesionalaus vaikų dantų patikrinimo Klaipėdoje,
                  Bangų odontologijos klinika yra patikimas pasirinkimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis vaiko profilaktiniam patikrinimui Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu norite pasirūpinti savo vaiko burnos sveikata ar atėjo laikas reguliariam patikrinimui, kviečiame
                  registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu bus įvertinta vaiko burnos būklė,
                  aptartos higienos rekomendacijos ir, esant poreikiui, suplanuotas tolimesnis gydymas.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiame, kad kiekvienas vaiko apsilankymas būtų ramus, aiškus ir kuo mažiau
                  keliantis nerimo. Čia Jūsų vaiko laukia patyrę specialistai, moderni įranga ir rūpestingas požiūris į
                  kiekvieną mažąjį pacientą.
                </p>
                <p>
                  Registruokitės profilaktiniam patikrinimui ir pasirūpinkite vaiko burnos sveikata laiku bei profesionaliai.
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
