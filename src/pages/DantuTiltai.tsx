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
  { id: 'kas-yra', label: 'Kas yra dantų tiltas?' },
  { id: 'reikalingumas', label: 'Kada rekomenduojamas?' },
  { id: 'rusys', label: 'Tiltų rūšys' },
  { id: 'procesas', label: 'Gamybos procesas' },
  { id: 'privalumai', label: 'Privalumai' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function DantuTiltai() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/dantu-tiltai/#service",
    "name": "Dantų tiltai Klaipėdoje",
    "serviceType": "Dantų tiltai",
    "description": "Dantų tiltų paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Klinikoje atliekamas fiksuotas trūkstamų dantų protezavimas pacientams Klaipėdos mieste.",
    "url": "https://www.banguklinika.lt/paslaugos/dantu-tiltai/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Dantų tiltai Klaipėdoje - Bangų klinika"
        description="Trūksta danties? Dantų tiltai Klaipėdoje – fiksuotas protezavimas☑️natūrali išvaizda☑️kaina nuo 400€ už vienetą.⏩Registruokitės konsultacijai Bangų klinikoje jau dabar."
        keywords="dantu tiltai, fiksuotas protezas, tiltas ant implanto, tiltas ant danties, klaipeda"
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
              Dantų tiltai Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Dantų tiltai yra fiksuoti protezai, skirti atkurti vieną ar kelis trūkstamus dantis. Tai patikimas ir
                  natūraliai atrodantis sprendimas pacientams, netekusiems danties ar kelių dantų dėl traumos, ėduonies ar
                  kitų priežasčių. Skirtingai nei išimami protezai, dantų tiltas yra tvirtai pritvirtinamas burnoje ir
                  funkcionuoja kaip natūralūs dantys.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje dantų tiltai gaminami individualiai, atsižvelgiant į kiekvieno
                  paciento anatomines ypatybes, sąkandžio ypatumus ir estetinius lūkesčius. Kruopštus gydymo planavimas ir
                  tinkama paciento edukacija leidžia pasiekti tvarų, funkcionalų ir natūraliai atrodantį rezultatą.
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
                      Dantų tiltų kainos
                    </h2>
                    <p className="text-slate-600">
                      Dantų tilto kaina skaičiuojama už kiekvieną vienetą (dantį) atskirai, priklausomai nuo to, ar jis
                      fiksuojamas ant natūralaus danties, ar ant implanto. Bendra tilto kaina susumuojama iš reikalingų
                      vienetų skaičiaus, todėl galutinė suma priklauso nuo to, kiek dantų reikia atkurti.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Dantų tiltų vienetų kainos</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Vienas vienetas ant danties', '400 €'],
                        ['Vienas vienetas ant implanto', '450 €'],
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
                  Nurodytos kainos yra taikomos vienam vienetui (dantiui) – galutinė dantų tilto kaina apskaičiuojama
                  susumavus visus reikalingus vienetus, priklausomai nuo to, kiek dantų atkuriama ir ar tiltas fiksuojamas
                  ant natūralių dantų, ar ant implantų. Tiksli dantų tilto Klaipėdoje kaina aptariama individualios
                  konsultacijos metu, atsižvelgiant į konkrečią klinikinę situaciją ir gydymo planą.
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

          {/* KAS YRA DANTŲ TILTAS */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra dantų tiltas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų tiltas – tai fiksuotas, neišimamas protezas, skirtas atkurti vieną ar kelis trūkstamus dantis. Jį
                  sudaro dirbtiniai dantys, kurie sujungiami su atramomis – jomis gali būti tiek natūralūs, gretimi dantys,
                  tiek įsriegti dantų implantai. Taip suformuojama vientisa, stabili konstrukcija, kuri užpildo tarpą ir
                  atkuria tiek kramtymo funkciją, tiek estetišką šypseną.
                </p>
                <p>
                  Kadangi dantų tiltas yra fiksuotas burnoje, jo nereikia kasdien nuimti ar valyti atskirai, kaip įprastų
                  išimamų protezų. Toks sprendimas leidžia pacientui jaustis natūraliai ir užtikrintai kasdieniame
                  gyvenime, o tinkamai parinkta konstrukcija ir medžiagos padeda tiltui ilgai tarnauti.
                </p>
              </div>
            </div>
          </motion.section>

          {/* REIKALINGUMAS */}
          <motion.section id="reikalingumas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada rekomenduojamas dantų tiltas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų tiltas dažniausiai rekomenduojamas pacientams, kurie neteko vieno ar kelių gretimų dantų ir ieško
                  stabilaus, ilgalaikio sprendimo. Trūkstamas dantis – tai ne tik estetinė problema. Laikui bėgant jis gali
                  sutrikdyti kramtymo funkciją, paveikti taisyklingą kalbos tarimą, o gretimi dantys gali pradėti pamažu
                  slinkti į susidariusią tuščią vietą.
                </p>
                <p>
                  Būtent tokiais atvejais – kai sutrinka kramtymas, pablogėja šypsenos estetika arba atsiranda kalbos
                  sutrikimų dėl trūkstamo danties – dantų tiltas tampa vienu efektyviausių sprendimų. Jis leidžia atkurti
                  visą dantų sistemos funkcionalumą, išlaikant natūralų ir harmoningą šypsenos vaizdą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* RŪŠYS */}
          <motion.section id="rusys" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Dantų tiltų rūšys</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų tilto rūšis parenkama individualiai, atsižvelgiant į paciento burnos būklę, atramų tipą ir estetinius
                bei funkcinius lūkesčius. Bangų odontologijos klinikoje siūlomi skirtingi dantų tiltų sprendimai.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  ['Tiltas ant natūralių dantų', 'Konstrukcija fiksuojama prie gretimų, sveikų natūralių dantų, kurie paruošiami ir tampa tilto atramomis.'],
                  ['Tiltas ant implantų', 'Kai gretimų dantų nėra arba jų nenorima naudoti kaip atramų, tiltas fiksuojamas ant iš anksto įsriegtų dantų implantų.'],
                  ['Iš cirkonio keramikos', 'Itin natūralios išvaizdos, tvirtas ir ilgaamžis sprendimas, dažnai renkamasis dėl estetinių ir biologinio suderinamumo savybių.'],
                  ['Iš metalo keramikos', 'Patikimas ir tvirtas sprendimas, derinantis metalinio karkaso stiprumą su keramikos dengimo natūralia išvaizda.'],
                  ['Laikinas tiltas', 'Naudojamas pereinamuoju laikotarpiu, kol gaminama nuolatinė konstrukcija – apsaugo dantenas ir palaiko estetiką bei funkciją.'],
                ].map(([title, text], i) => (
                  <div key={i} className={innerCard}>
                    <h3 className="font-bold text-darkblue-700 mb-3">{title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* GAMYBOS PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Gamybos procesas</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų tilto gamyba Bangų odontologijos klinikoje vyksta pagal aiškiai suplanuotą eigą, kad rezultatas būtų
                tikslus, patogus ir ilgaamžis. Kiekvienas etapas atliekamas kruopščiai, siekiant užtikrinti geriausią
                įmanomą tilto pritaikymą.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  ['01', 'Konsultacija', 'Įvertinama paciento burnos būklė, aptariami lūkesčiai ir parenkamas tinkamiausias dantų tilto sprendimas.'],
                  ['02', 'Gydymo planas', 'Sudaromas individualus gydymo planas, numatant atramų tipą, tilto rūšį ir procedūros etapus.'],
                  ['03', 'Dantų paruošimas', 'Atramoms skirti dantys yra atsargiai apdorojami ir paruošiami, kad tiksliai priimtų būsimą konstrukciją.'],
                  ['04', 'Skenavimas', 'Atliekamas skaitmeninis ar tradicinis atspaudas, leidžiantis tiksliai atkurti burnos anatomiją.'],
                  ['05', 'Laboratorinė gamyba', 'Pagal gautus duomenis dantų technikų laboratorijoje pagaminamas individualiai pritaikytas dantų tiltas.'],
                  ['06', 'Pritaikymas', 'Gatavas tiltas tiksliai pritaikomas ir fiksuojamas burnoje, patikrinant sąkandį ir bendrą komfortą.'],
                ].map(([num, title, text], i) => (
                  <div key={i} className={innerCard}>
                    <div className="text-4xl font-bold text-brand/20 mb-2">{num}</div>
                    <h3 className="font-bold text-darkblue-700 mb-2">{title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* PRIVALUMAI */}
          <motion.section id="privalumai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Privalumai</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų tiltas – tai sprendimas, teikiantis nemažai naudos tiek kasdieniam komfortui, tiek ilgalaikei burnos
                sveikatai.
              </p>

              <div className="grid gap-3">
                {[
                  'natūrali išvaizda – dantų tiltas gaminamas individualiai, todėl atrodo ir funkcionuoja kaip savi dantys',
                  'fiksuota konstrukcija – tilto nereikia kasdien nuimti ar valyti atskirai, kaip įprastų išimamų protezų',
                  'laiku atkurtas dantis padeda išsaugoti bendrą dantų sistemos sveikatą, apsaugant gretimus dantis nuo poslinkio',
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
                  Renkantis dantų tiltus svarbu ne tik pati procedūra, bet ir tai, kaip ji atliekama – nuo gydymo plano
                  sudarymo iki galutinio konstrukcijos pritaikymo. Bangų odontologijos klinikoje dantų tiltai gaminami
                  atsakingai, siekiant maksimaliai apsaugoti paciento komfortą ir burnos sveikatą.
                </p>
                <p>
                  Klinikoje dirbantys specialistai kiekvieną atvejį vertina individualiai, kruopščiai planuoja gydymą ir
                  parenka tinkamiausią tilto rūšį pagal paciento poreikius. Dėmesys skiriamas ne tik pačiai konstrukcijai,
                  bet ir aiškiam situacijos paaiškinimui bei paciento edukacijai viso gydymo metu.
                </p>
                <p>
                  Pacientai vertina profesionalų bendravimą, individualų požiūrį ir skaidrią kainodarą, kurios padeda
                  jaustis saugiai viso gydymo metu. Todėl ieškantiems patikimo ir profesionalaus dantų protezavimo
                  Klaipėdoje, Bangų odontologijos klinika yra patikimas pasirinkimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis dantų tiltų konsultacijai Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu Jums trūksta danties ar kelių dantų ir ieškote stabilaus, natūraliai atrodančio sprendimo, kviečiame
                  registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu bus įvertinta Jūsų burnos būklė,
                  aptartos tinkamiausios dantų tilto galimybės ir sudarytas individualus gydymo planas.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiame, kad dantų protezavimas būtų aiškus, patogus ir kruopščiai
                  suplanuotas. Čia Jūsų laukia patyrę specialistai, moderni įranga ir rūpestingas požiūris į kiekvieną
                  pacientą.
                </p>
                <p>
                  Registruokitės dantų tilto konsultacijai ir atkurkite savo šypseną profesionaliai ir patikimai.
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
