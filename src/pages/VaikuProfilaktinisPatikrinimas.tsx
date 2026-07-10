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
  { id: 'kas-yra', label: 'Kodėl svarbus patikrinimas?' },
  { id: 'daznis', label: 'Rekomenduojamas dažnis' },
  { id: 'etapai', label: 'Patikrinimo proceso etapai' },
  { id: 'nauda', label: 'Ką padeda išvengti?' },
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
                  Vaikų burnos sveikata yra dinamiška ir nuolat kintanti, todėl reguliari kontrolė leidžia laiku
                  pastebėti net ir labai ankstyvus dantų ar dantenų pakitimus. Nors pieniniai dantys yra laikini,
                  jų būklė turi tiesioginę įtaką nuolatinių dantų užuomazgoms, sąkandžio formavimuisi, kramtymo
                  funkcijai bei kalbos raidai.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje vaikų profilaktinis dantų patikrinimas atliekamas
                  siekiant ne tik įvertinti esamą burnos būklę, bet ir užkirsti kelią ėduonies progresavimui,
                  dantenų uždegimui ar netaisyklingam dantų dygimui. Tai yra viena svarbiausių vaikų odontologijos
                  priemonių, padedanti išvengti sudėtingesnio gydymo ateityje ir užtikrinti nuoseklią burnos
                  sveikatos priežiūrą nuo ankstyvo amžiaus.
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

          {/* SVARBA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra vaikų profilaktinis dantų patikrinimas ir kodėl jis svarbus?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Vaikų profilaktinis dantų patikrinimas – tai reguliari odontologinė apžiūra, kurios metu
                  gydytojas įvertina dantų, dantenų, burnos gleivinės ir sąkandžio būklę. Vizito tikslas yra ne tik
                  nustatyti jau esamus pakitimus, bet ir identifikuoti rizikos veiksnius, kurie ateityje gali
                  sukelti ėduonį, emalio pažeidimus ar ortodontines problemas.
                </p>
                <p>
                  Vaikų burnos ertmė nuolat keičiasi – dygsta nauji dantys, keičiasi sąkandis, o emalis dar nėra
                  pilnai subrendęs. Dėl šių priežasčių net ir nedidelės apnašų sankaupos ar netinkami higienos
                  įpročiai gali greitai sukelti ėduonies vystymąsi. Profilaktinio patikrinimo metu šie pokyčiai
                  nustatomi ankstyvoje stadijoje, kai juos galima sustabdyti minimalia intervencija.
                </p>
                <p>
                  Vaikų profilaktinis dantų patikrinimas taip pat leidžia įvertinti, kaip efektyviai atliekama
                  kasdienė burnos higiena namuose. Jei pastebimos nuolatinės apnašų kaupimosi vietos, tėvams
                  pateikiamos konkrečios rekomendacijos dėl dantų valymo technikos, priemonių pasirinkimo bei
                  priežiūros rutinos.
                </p>
                <p>
                  Svarbu suprasti, kad profilaktika nėra formalumas. Tai nuoseklus stebėjimo procesas, leidžiantis
                  užtikrinti, kad vaiko dantys vystytųsi sveikai ir be komplikacijų.
                </p>
              </div>
            </div>
          </motion.section>

          {/* DAŽNIS */}
          <motion.section id="daznis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada rekomenduojama atlikti vaikų profilaktinį dantų patikrinimą?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Vaikų profilaktinis dantų patikrinimas rekomenduojamas reguliariai, net jei nėra jokių nusiskundimų.
                Įprastai vizitas turėtų būti atliekamas kas 6–12 mėnesių, priklausomai nuo individualios ėduonies
                rizikos, burnos higienos kokybės ir dantų vystymosi etapo.
              </p>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-darkblue-700">Ypač svarbu planuoti profilaktinį patikrinimą šiais atvejais:</h3>
                <div className="grid gap-3">
                  {[
                    'išdygus pirmiesiems pieniniams ar nuolatiniams dantims',
                    'intensyvaus sąkandžio keitimosi laikotarpiu',
                    'prieš ortodontinio gydymo pradžią ar aparatų nuėmimą',
                    'esant padidėjusiai ėduonies rizikai ar dažnam kariesui',
                    'pastebėjus dantenų kraujavimą, jautrumą ar blogą burnos kvapą',
                    'prieš pateikiant sveikatos pažymą ugdymo įstaigai',
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
                  Dažnai vaikų profilaktinis dantų patikrinimas atliekamas prieš mokslo metų pradžią, tačiau
                  medicininiu požiūriu svarbiausia yra ne data, o reguliarumas. Ankstyvas vizitas leidžia išvengti
                  eilių ir užtikrinti, kad galimi pakitimai būtų įvertinti laiku, dar jiems neprogresuojant.
                </p>
                <p>
                  Reguliarūs patikrinimai taip pat padeda formuoti teigiamą vaiko požiūrį į odontologą, nes vizitas
                  tampa įprasta profilaktinės priežiūros dalimi, o ne tik gydymo poreikio situacija.
                </p>
              </div>
            </div>
          </motion.section>

          {/* ETAPAI */}
          <motion.section id="etapai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip vyksta vaikų profilaktinis dantų patikrinimas klinikoje?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Vaikų profilaktinis dantų patikrinimas Bangų odontologijos klinikoje atliekamas nuosekliai,
                užtikrinant vaiko komfortą ir aiškų kiekvieno etapo paaiškinimą. Vizito metu vertinama visa burnos
                sveikatos situacija, o tėvams pateikiamos individualios išvados bei rekomendacijos.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Burnos ir dantų būklės įvertinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Atliekama išsami dantų, dantenų ir burnos gleivinės apžiūra. Vertinamas ėduonies buvimas,
                    emalio demineralizacijos požymiai, apnašų kaupimasis bei galimi uždegiminiai procesai.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Sąkandžio ir dantų dygimo analizė</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Vertinama, kaip vystosi vaiko sąkandis, ar dantys dygsta taisyklingai, ar nėra ankstyvų
                    ortodontinių anomalijų požymių. Tai ypač svarbu keičiantis pieniniams dantims į nuolatinius.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Burnos higienos įpročių įvertinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Analizuojama, kaip vaikas prižiūri dantis namuose, ar pakankamai efektyviai pašalinamos
                    apnašos. Identifikuojamos vietos, kuriose higiena yra nepakankama, ir pateikiamos rekomendacijos.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Individualus planas ir rekomendacijos</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Po patikrinimo tėvams pateikiamas aiškus veiksmų planas: burnos priežiūros patarimai,
                    profilaktikos dažnis, galimos rizikos bei, jei reikia, tolimesni gydymo ar higienos žingsniai.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Toks struktūruotas procesas leidžia vaikų profilaktinį dantų patikrinimą paversti ne formaliu
                vizitu, o realia ankstyvos diagnostikos ir prevencijos priemone.
              </p>
            </div>
          </motion.section>

          {/* NAUDA */}
          <motion.section id="nauda" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Ką padeda išvengti reguliarus vaikų profilaktinis dantų patikrinimas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Reguliarus vaikų profilaktinis dantų patikrinimas yra viena efektyviausių priemonių užkertant
                  kelią ankstyvam ėduoniui, dantenų uždegimui ir netaisyklingo sąkandžio progresavimui. Anksti
                  nustatyti pakitimai leidžia taikyti minimaliai invazinius sprendimus, kurie yra paprastesni,
                  greitesni ir mažiau apkraunantys vaiką.
                </p>
                <p>
                  Negydomas ėduonis vaikų dantyse gali progresuoti itin greitai dėl plonesnio emalio ir intensyvaus
                  bakterinio aktyvumo. Tai gali lemti skausmą, infekcijas, dantų netekimą ar net poveikį
                  nuolatinių dantų užuomazgoms. Taip pat gali atsirasti poreikis sudėtingesniam gydymui ar
                  ortodontinėms korekcijoms ateityje.
                </p>
                <p>
                  Reguliari profilaktika leidžia užtikrinti, kad visi pokyčiai būtų pastebėti ankstyvoje stadijoje,
                  o vaiko burnos sveikata būtų nuolat kontroliuojama. Tai ne tik apsaugo dantis, bet ir padeda
                  formuoti ilgalaikius, taisyklingus burnos higienos įpročius.
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
                  Renkantis vaikų profilaktinį dantų patikrinimą svarbiausia yra ne tik diagnostikos tikslumas, bet
                  ir vaiko patirtis vizito metu. Bangų odontologijos klinikoje kiekvienas patikrinimas atliekamas
                  laikantis individualaus, švelnaus ir aiškaus komunikacijos principo, užtikrinant, kad vaikas
                  jaustųsi saugiai.
                </p>
                <p>
                  Klinikos specialistai vertina ne tik dantų būklę, bet ir bendrą burnos sveikatos kontekstą: dantų
                  dygimą, sąkandžio raidą, apnašų kaupimosi modelius bei ankstyvus rizikos veiksnius. Tėvams
                  pateikiamos aiškios, praktiškai pritaikomos rekomendacijos, orientuotos į ilgalaikę burnos
                  sveikatą.
                </p>
                <p>
                  Reguliarus vaikų profilaktinis dantų patikrinimas Bangų odontologijos klinikoje leidžia ne tik
                  užkirsti kelią dantų ligoms, bet ir formuoti teigiamą vaiko požiūrį į odontologinę priežiūrą nuo
                  pat ankstyvo amžiaus.
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
