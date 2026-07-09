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
  { id: 'paslaugos', label: 'Ką apima procedūra?' },
  { id: 'daznis', label: 'Vizito dažnis' },
  { id: 'saugumas', label: 'Ar saugu vaikams?' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function DantuHigienaVaikams() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/dantu-higiena-vaikams/#service",
    "name": "Dantų higiena vaikams Klaipėdoje",
    "serviceType": "Dantų higiena vaikams",
    "description": "Dantų higienos vaikams paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Profesionali, saugi ir neskausminga vaikų dantų priežiūra.",
    "url": "https://www.banguklinika.lt/paslaugos/dantu-higiena-vaikams/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Dantų higiena vaikams Klaipėdoje - Bangų klinika"
        description="Profesionali dantų higiena vaikams Klaipėdoje☑️saugi, neskausminga ir vaiko amžių atitinkanti procedūra☑️kaina nuo 70€.⏩Registruokite savo vaiką jau šiandien."
        keywords="dantu higiena vaikams, vaiku odontologija, apnasu salinimas, fluoravimas, klaipeda"
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
              Dantų higiena vaikams Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Bangų odontologijos klinika siūlo profesionalią vaikų dantų priežiūrą, pabrėždama, kad tinkama burnos
                  higiena yra svarbi nuo pat pirmųjų dantukų išdygimo. Reguliari profesionali higiena padeda laiku pastebėti
                  galimas problemas, apsaugo dantis nuo ėduonies ir moko vaiką rūpintis savo burnos sveikata jau nuo mažens.
                </p>
                <p>
                  Klinikoje procedūra atliekama rūpestingai ir šiltai, atsižvelgiant į kiekvieno vaiko amžių bei emocinę
                  būseną, kad apsilankymas pas odontologą taptų maloni ir nebauginanti patirtis, o ne stresą kelianti
                  procedūra.
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
                      Dantų higienos vaikams kainos
                    </h2>
                    <p className="text-slate-600">
                      Dantų higienos vaikams kaina priklauso nuo vaiko amžiaus, burnos būklės ir procedūros apimties. Prieš atliekant procedūrą visuomet įvertinama burnos ertmės būklė ir parenkamas jauniausiam pacientui tinkamiausias priežiūros planas.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Vaikų dantų higiena</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Dantų higiena vaikams', 'nuo 70 €'],
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
                  Tiksli dantų higienos vaikams Klaipėdoje kaina aptariama vizito metu, atsižvelgiant į konkrečią klinikinę situaciją. Skaidri kainodara ir individualus dėmesys leidžia tėvams jaustis ramiai, o vaikams – saugiai.
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

          {/* KĄ APIMA PASLAUGA */}
          <motion.section id="paslaugos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Ką apima dantų higienos procedūra?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Vaikų dantų higienos procedūra Bangų odontologijos klinikoje apima kompleksinę burnos priežiūrą, skirtą
                įvertinti ir palaikyti sveiką vaiko burnos ertmę. Kiekvienas vizitas pritaikomas individualiai, atsižvelgiant
                į vaiko amžių ir dantų būklę.
              </p>

              <div className="grid gap-3">
                {[
                  'burnos būklės įvertinimas',
                  'apnašų pašalinimas',
                  'dantų poliravimas',
                  'fluoravimas',
                  'konsultacijos tėvams apie kasdienę burnos higienos praktiką'
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

          {/* VIZITO DAŽNIS */}
          <motion.section id="daznis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Rekomenduojamas vizito dažnis</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Profesionali dantų higiena rekomenduojama nuo 2–3 metų amžiaus, kai vaikas jau turi pieninius dantis ir
                  gali priprasti prie reguliarių apsilankymų pas odontologą. Ankstyva pradžia padeda vaikui nuo mažens
                  suvokti burnos priežiūros svarbą ir mažina baimę, susijusią su vėlesniais vizitais.
                </p>
                <p>
                  Toliau profesionali higiena atliekama kas 6–12 mėnesių, o esant didesnei ėduonies ar kitų burnos
                  problemų rizikai – dažniau. Vizitų dažnumas nustatomas individualiai, atsižvelgiant į vaiko burnos
                  būklę ir gydytojo rekomendacijas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* SAUGUMAS */}
          <motion.section id="saugumas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Ar procedūra saugi vaikams?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų higienos procedūra yra visiškai saugi, neskausminga ir neinvazinė, pritaikyta pagal vaiko amžių ir
                  emocinį pasirengimą. Bangų odontologijos klinikoje procedūra atliekama švelniai, o odontologas visada
                  atsižvelgia į vaiko savijautą ir jam parodo, kas bus daroma, kad procedūra netaptų nemaloni patirtis.
                </p>
                <p>
                  Klinika akcentuoja individualų požiūrį į kiekvieną mažąjį pacientą, greitą ankstyvos ėduonies diagnozę
                  bei tėvų edukaciją, siekiant ilgalaikės burnos sveikatos. Toks kompleksinis požiūris leidžia laiku
                  pastebėti galimas problemas ir jų išvengti dar prieš joms išsivystant.
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
                  Renkantis vaikų dantų higienos paslaugas svarbu ne tik pati procedūra, bet ir tai, kaip ji atliekama – nuo pirmojo kontakto su vaiku iki priežiūros rekomendacijų po vizito. Bangų odontologijos klinikoje dantų higiena vaikams atliekama atsakingai, siekiant maksimaliai apsaugoti mažojo paciento komfortą ir burnos sveikatą.
                </p>
                <p>
                  Klinikoje dirbantys specialistai kiekvieną atvejį vertina individualiai, skiria laiko vaiko emocinei būsenai ir visuomet siekia, kad apsilankymas paliktų teigiamą įspūdį. Dėmesys skiriamas ne tik pačiai procedūrai, bet ir aiškiam situacijos paaiškinimui tėvams bei rekomendacijoms, kaip rūpintis vaiko burnos higiena namuose.
                </p>
                <p>
                  Pacientai vertina profesionalų bendravimą, ramų požiūrį ir aiškias instrukcijas, kurios padeda jaustis saugiai viso vizito metu. Todėl ieškantiems patikimos ir profesionalios dantų higienos vaikams Klaipėdoje, Bangų odontologijos klinika yra patikimas pasirinkimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis dantų higienai vaikams Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu norite pasirūpinti savo vaiko burnos sveikata nuo pat mažens, kviečiame registruotis dantų higienos
                  vizitui Bangų odontologijos klinikoje. Vizito metu bus įvertinta vaiko burnos būklė, atliktas apnašų
                  pašalinimas, dantų poliravimas ir fluoravimas, o Jūs gausite naudingų patarimų kasdienei burnos priežiūrai.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiame, kad kiekvienas vaiko apsilankymas pas odontologą būtų malonus,
                  saugus ir nekeltų streso. Čia Jūsų laukia rūpestingi specialistai ir šilta aplinka, pritaikyta mažiesiems
                  pacientams.
                </p>
                <p>
                  Registruokite savo vaiką dantų higienos procedūrai ir pasirūpinkite jo sveika šypsena jau šiandien.
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
