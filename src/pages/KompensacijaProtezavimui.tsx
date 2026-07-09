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
  { id: 'kas-yra', label: 'Kas yra kompensuojamas protezavimas?' },
  { id: 'kas-gauna', label: 'Kas gali gauti kompensaciją?' },
  { id: 'procesas', label: 'Kaip vyksta gydymo procesas?' },
  { id: 'svarbu-zinoti', label: 'Ką svarbu žinoti?' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function KompensacijaProtezavimui() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/kompensacija-protezavimui/#service",
    "name": "Kompensacija dantų protezavimui Klaipėdoje",
    "serviceType": "Kompensuojamas dantų protezavimas",
    "description": "Informacija apie dantų protezavimo kompensaciją Bangų odontologijos klinikoje Klaipėdoje, skiriamą tam tikroms pacientų grupėms per TLK ir PSDF.",
    "url": "https://www.banguklinika.lt/paslaugos/kompensacija-protezavimui/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Kompensacija dantų protezavimui Klaipėdoje - Bangų klinika"
        description="TLK kompensacija dantų protezavimui Klaipėdoje☑️sužinokite, ar priklausote tinkamų pacientų grupei☑️Bangų klinikoje.⏩Registruokitės konsultacijai jau dabar."
        keywords="kompensacija protezavimui, TLK kompensacija, dantu protezavimas, nemokamas protezavimas, klaipeda"
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
              Kompensacija dantų protezavimui Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Bangų odontologijos klinika Klaipėdoje teikia informaciją apie dantų protezavimo kompensaciją, kurią gali gauti
                  tam tikros pacientų grupės. Klinika yra sudariusi sutartį su Teritorinėmis ligonių kasomis (TLK), kurios
                  skiria kompensaciją dantų protezavimo išlaidoms iš Privalomojo sveikatos draudimo fondo (PSDF).
                </p>
                <p>
                  Kompensuojamas protezavimas leidžia tinkamoms pacientų grupėms sumažinti gydymo išlaidas ir atkurti prarastų
                  dantų funkciją bei šypseną. Bangų odontologijos klinikoje pacientams padedama suprasti, ar jie atitinka
                  kompensacijai keliamus reikalavimus, ir kartu sudaromas aiškus, individualiai pritaikytas gydymo planas.
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

          {/* KAS YRA KOMPENSUOJAMAS PROTEZAVIMAS */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra kompensuojamas dantų protezavimas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Kompensuojamas dantų protezavimas – tai valstybės remiama programa, leidžianti tam tikroms pacientų grupėms
                  sumažinti protezavimo išlaidas. Bangų odontologijos klinika yra sudariusi sutartį su Teritorinėmis ligonių
                  kasomis (TLK), kurios skiria kompensaciją dantų protezavimo išlaidoms iš Privalomojo sveikatos draudimo
                  fondo (PSDF).
                </p>
                <p>
                  Ši kompensacija skirta padėti pacientams, kuriems dantų protezavimas yra reikalingas, tačiau pilna gydymo
                  kaina galėtų būti sunkiai pakeliama. Kompensacija skiriama tik tam tikroms, privalomuoju sveikatos draudimu
                  apdraustoms pacientų grupėms, todėl prieš pradedant gydymą svarbu išsiaiškinti, ar konkretus pacientas
                  atitinka nustatytus reikalavimus.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAS GALI GAUTI */}
          <motion.section id="kas-gauna" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas gali gauti kompensaciją?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Kompensacija gali būti skiriama tik tam tikroms pacientų grupėms, kurios yra apdraustos privalomuoju sveikatos
                draudimu. Žemiau pateikiamos pagrindinės grupės, kurioms gali būti taikoma dantų protezavimo kompensacija.
              </p>

              <div className="grid gap-3">
                {[
                  'asmenys, kuriems sukako senatvės pensijos amžius',
                  'vaikai iki 18 metų',
                  'asmenys, pripažinti nedarbingais arba iš dalies darbingais',
                  'asmenys po burnos, veido ir žandikaulių onkologinių ligų gydymo'
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="mt-1">
                      <CheckIcon />
                    </span>
                    <span className="text-slate-700">{text}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 mt-6">
                <p className="text-sm text-slate-700 leading-relaxed">
                  <span className="font-semibold text-darkblue-700">Pastaba:</span>{' '}
                  Tiksliai nustatyti, ar priklausote kompensaciją gaunančiai pacientų grupei, galima konsultacijos Bangų
                  odontologijos klinikoje metu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* GYDYMO PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip vyksta gydymo procesas?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Klinika siūlo šešių etapų protezavimo schemą, kuri užtikrina, kad pacientas visą gydymo eigą suprastų aiškiai
                ir jaustųsi užtikrintai kiekviename žingsnyje.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Konsultacija</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pirmojo vizito metu odontologas įvertina paciento burnos būklę, aptaria dantų netekimo priežastis ir
                    galimus protezavimo sprendimus.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Kompensacijos aptarimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kartu su pacientu išsiaiškinama, ar jis priklauso kompensaciją gaunančiai pacientų grupei, ir aptariama,
                    kokia dalis gydymo išlaidų galėtų būti padengta.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gydymo plano sudarymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Atsižvelgiant į paciento poreikius ir kompensacijos galimybes, sudaromas individualus, aiškiai
                    struktūruotas gydymo planas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Paruošiamasis gydymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Prieš protezavimą, jei reikia, atliekamas paruošiamasis gydymas – gydomi ar šalinami pažeisti dantys,
                    sutvarkoma dantenų ir burnos ertmės būklė.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Protezo gamyba</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pagal individualius matmenis pagaminamas dantų protezas, kuris pritaikomas taip, kad atkurtų tiek
                    funkciją, tiek natūralią šypseną.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">06</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Priežiūros rekomendacijos</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Užbaigus protezavimą, pacientui pateikiamos rekomendacijos, kaip tinkamai prižiūrėti protezą ir burnos
                    ertmę, kad rezultatas išliktų ilgai.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* SVARBU ŽINOTI */}
          <motion.section id="svarbu-zinoti" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Ką svarbu žinoti apie kompensaciją?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Kompensacija gali sumažinti protezavimo išlaidas, tačiau ne visada padengia visą pasirinktą gydymo planą.
                  Kompensuojamos sumos ir sąlygos priklauso nuo pacientui priskirtos grupės bei pasirinkto protezavimo tipo.
                </p>
                <p>
                  Pacientai turėtų numatyti galimą savitarpę sumą, jei pasirinks sudėtingesnes procedūras ar papildomus
                  sprendimus, kurių pilna kompensacija neapima. Todėl prieš pradedant gydymą svarbu aiškiai aptarti visas
                  galimybes su klinikos specialistais, kad būtų priimtas informuotas ir pacientui tinkamiausias sprendimas.
                </p>
                <p>
                  Klinikai rekomenduojama apsilankyti, jei trūksta dantų arba esama kramtymo problema – laiku suplanuotas
                  protezavimas padeda atkurti kramtymo funkciją ir išvengti tolimesnių burnos sveikatos komplikacijų.
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
                  Renkantis kompensuojamą protezavimą svarbu ne tik pati procedūra, bet ir tai, kaip ji atliekama – nuo
                  sprendimo priėmimo iki priežiūros po procedūros. Bangų odontologijos klinikoje protezavimas atliekamas
                  atsakingai, siekiant maksimaliai apsaugoti paciento komfortą ir burnos sveikatą.
                </p>
                <p>
                  Klinikoje dirbantys specialistai kiekvieną atvejį vertina individualiai, neskuba priimti sprendimo ir
                  visuomet pirmiausia ieško galimybių, kurios geriausiai atitinka paciento poreikius. Procedūra atliekama
                  taikant šiuolaikinius metodus ir kruopščiai suplanuotą eigą. Dėmesys skiriamas ne tik pačiai procedūrai,
                  bet ir aiškiam situacijos paaiškinimui bei rekomendacijoms po jos.
                </p>
                <p>
                  Pacientai vertina profesionalų bendravimą, ramų požiūrį ir aiškias instrukcijas, kurios padeda jaustis
                  saugiai viso gydymo metu. Todėl ieškantiems patikimo ir profesionalaus kompensuojamo dantų protezavimo
                  Klaipėdoje, Bangų odontologijos klinika yra patikimas pasirinkimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis konsultacijai dėl kompensuojamo protezavimo
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu jums trūksta dantų arba jaučiate kramtymo problemų, kviečiame registruotis konsultacijai Bangų
                  odontologijos klinikoje. Vizito metu bus įvertinta Jūsų burnos būklė, patikrinta, ar priklausote
                  kompensaciją gaunančiai pacientų grupei, ir sudarytas individualus gydymo planas.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiame, kad kompensuojamas protezavimas būtų aiškus, suprantamas ir kuo
                  mažiau keliantis streso. Čia Jūsų laukia patyrę specialistai, moderni įranga ir rūpestingas požiūris į
                  kiekvieną pacientą.
                </p>
                <p>
                  Registruokitės konsultacijai ir sužinokite, kokia protezavimo kompensacija Jums priklauso.
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
