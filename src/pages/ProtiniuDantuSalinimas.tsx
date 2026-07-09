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
  { id: 'kas-yra', label: 'Kas yra protinių dantų šalinimas?' },
  { id: 'indikacijos', label: 'Kada reikia šalinti?' },
  { id: 'procesas', label: 'Kaip vyksta procedūra?' },
  { id: 'gijimas', label: 'Gijimas po procedūros' },
  { id: 'komplikacijos', label: 'Galimos komplikacijos' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function ProtiniuDantuSalinimas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/protiniu-dantu-salinimas/#service",
    "name": "Protinių dantų šalinimas Klaipėdoje",
    "serviceType": "Protinių dantų šalinimas",
    "description": "Protinių dantų šalinimo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Klinikoje atliekamas protinių dantų šalinimas pacientams Klaipėdos mieste.",
    "url": "https://www.banguklinika.lt/paslaugos/protiniu-dantu-salinimas/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Protinių dantų šalinimas Klaipėdoje - Bangų klinika"
        description="Protinių dantų šalinimas Klaipėdoje – saugiai☑️profesionaliai☑️Bangų klinikoje už kainą nuo 150€.⏩Registruokitės konsultacijai jau šiandien."
        keywords="protiniu dantu salinimas, protiniai dantys, dantu traukimas, klaipeda, chirurginis salinimas"
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
              Protinių dantų šalinimas Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Protiniai dantys – paskutiniai išdygstantys krūminiai dantys, dažnai keliantys nepatogumų dėl vietos stokos
                  žandikaulyje, netaisyklingos padėties ar sudėtingos šaknų sandaros. Kai jie sukelia skausmą, uždegimą ar
                  trukdo gretimiems dantims, jų pašalinimas tampa saugiausiu ir racionaliausiu sprendimu.
                </p>
                <p>
                  Bangų odontologijos klinika Klaipėdoje specializuojasi protinių dantų šalinime, naudodama šiuolaikines
                  diagnostikos technologijas ir chirurginius metodus. Procedūra atliekama individualiai kiekvienam pacientui,
                  atsižvelgiant į danties padėtį, šaknų struktūrą ir aplinkinių audinių anatomines ypatybes, siekiant
                  užtikrinti kuo didesnį saugumą ir komfortą.
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
                      Protinių dantų šalinimo kainos
                    </h2>
                    <p className="text-slate-600">
                      Protinių dantų šalinimo kaina priklauso nuo danties padėties, šaknų struktūros ir procedūros sudėtingumo.
                      Prieš atliekant procedūrą visuomet atliekama apžiūra, kurios metu įvertinama situacija ir parenkamas
                      saugiausias bei tinkamiausias danties šalinimo metodas.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Protinių dantų šalinimas</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Protinių dantų šalinimas', '150 – 300 €'],
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
                  Tiksli protinių dantų šalinimo Klaipėdoje kaina aptariama individualios konsultacijos metu, atsižvelgiant į
                  konkrečią klinikinę situaciją. Skaidri kainodara ir profesionalus požiūris leidžia pacientams jaustis
                  užtikrintai ir priimti informuotą sprendimą.
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra protinių dantų šalinimas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Protinių dantų šalinimas – tai chirurginė procedūra, kurios metu pašalinamas paskutinis, vėliausiai
                  dygstantis krūminis dantis. Dėl riboto laisvos vietos žandikaulyje protiniai dantys dažnai dygsta
                  netaisyklingai, įstringa arba lieka iš dalies pridengti dantenos, todėl gali sukelti diskomfortą ar
                  pažeisti gretimus dantis.
                </p>
                <p>
                  Bangų odontologijos klinika Klaipėdoje specializuojasi protinių dantų šalinime, naudodama šiuolaikines
                  diagnostikos technologijas ir chirurginius metodus. Procedūra atliekama individualiai kiekvienam
                  pacientui, atsižvelgiant į danties padėtį ir anatominius veiksnius – šaknų formą, artumą nervams bei
                  žandikaulio kaulo struktūrą. Toks individualus požiūris leidžia parinkti saugiausią ir tiksliausią
                  gydymo strategiją.
                </p>
              </div>
            </div>
          </motion.section>

          {/* INDIKACIJOS */}
          <motion.section id="indikacijos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada reikia šalinti protinius dantis?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Sprendimas dėl protinio danties šalinimo priimamas įvertinus jo padėtį, sukeliamus simptomus ir poveikį
                aplinkiniams audiniams. Dažniausiai protiniai dantys šalinami, kai jie kelia realų diskomfortą ar riziką
                bendrai burnos sveikatai.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Protiniai dantys šalinami, kai:</h3>

                <div className="grid gap-3">
                  {[
                    'jaučiamas nuolatinis ar pasikartojantis skausmas danties srityje',
                    'atsiranda dantenų uždegimas aplink dygstantį ar iš dalies pridengtą dantį',
                    'protinis dantis spaudžia gretimus dantis ir kelia grėsmę jų padėčiai',
                    'dantis šalinamas profilaktiniais tikslais prieš ortodontinį gydymą'
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

              <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
                <p className="text-sm text-slate-700 leading-relaxed">
                  <span className="font-semibold text-darkblue-700">Pastaba:</span>{' '}
                  Laiku pašalintas problemiškas protinis dantis padeda išvengti skausmo, uždegimo ir gretimų dantų
                  pažeidimų, todėl svarbu nedelsti apsilankyti pas odontologą pastebėjus pirmuosius simptomus.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip vyksta procedūra?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Protinio danties šalinimas Bangų odontologijos klinikoje atliekamas pagal aiškią ir saugią eigą. Metodas
                pritaikomas kiekvieno paciento specifiniam atvejui, siekiant minimizuoti audinių traumą ir užtikrinti
                sklandų gijimą.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Diagnostika</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Prieš atliekant šalinimą, odontologas įvertina protinio danties padėtį, šaknų formą ir artumą
                    aplinkiniams audiniams bei nervams. Naudojant šiuolaikines diagnostikos technologijas, tiksliai
                    suplanuojama saugiausia procedūros eiga.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Vietinė nejautra</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Prieš pradedant šalinimą, taikoma vietinė nejautra, kuri patikimai nuskausmina gydomą sritį. Tai
                    leidžia procedūrą atlikti be skausmo, o pacientas jaučia tik lengvą spaudimą.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Danties atlaisvinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Odontologas atsargiai atlaisvina protinį dantį iš alveolės, taikydamas metodą, pritaikytą konkrečiam
                    atvejui. Procedūra atliekama kontroliuojamai, siekiant minimizuoti aplinkinių audinių traumą.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Žaizdos sutvarkymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pašalinus dantį, žaizda kruopščiai sutvarkoma, siekiant sumažinti infekcijos riziką ir sudaryti
                    sąlygas sklandžiam gijimui. Pacientui pateikiamos aiškios rekomendacijos tolimesnei priežiūrai.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* GIJIMAS */}
          <motion.section id="gijimas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Gijimas po procedūros</h2>

              <div className="text-slate-700 leading-relaxed space-y-4 mb-6">
                <p>
                  Pradinis gijimas po protinio danties šalinimo trunka 7–10 dienų. Šiuo laikotarpiu audiniai palaipsniui
                  atsistato, o traukimo vietoje susiformavęs kraujo krešulys yra būtinas sklandžiam gijimo procesui,
                  todėl svarbu jo nepažeisti.
                </p>
                <p>
                  Tinkama priežiūra šiuo laikotarpiu padeda sumažinti diskomfortą, paspartina gijimą ir sumažina
                  komplikacijų riziką.
                </p>
              </div>

              <div className={innerCard + ' mb-6'}>
                <h3 className="font-semibold text-darkblue-700 mb-4">Gijimo laikotarpiu rekomenduojama vengti:</h3>
                <ul className="space-y-3">
                  {[
                    'karšto maisto ir gėrimų, kol žaizda pradės gyti',
                    'intensyvaus fizinio krūvio pirmosiomis dienomis po procedūros',
                    'rūkymo, kuris gali sulėtinti gijimą ir padidinti komplikacijų riziką',
                    'intensyvaus burnos skalavimo, kad nebūtų pažeistas kraujo krešulys'
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1">
                        <CheckIcon />
                      </span>
                      <span className="text-slate-700">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Laikantis šių rekomendacijų, gijimas po protinio danties šalinimo vyksta sklandžiai, o audiniai
                  atsistato be papildomų komplikacijų.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KOMPLIKACIJOS */}
          <motion.section id="komplikacijos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Galimos komplikacijos</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Nors protinių dantų šalinimas yra dažnai atliekama ir gerai ištirta procedūra, retais atvejais gali
                  pasitaikyti tam tikrų komplikacijų – alveolitas (žaizdos uždegimas dėl pažeisto kraujo krešulio),
                  patinimas ar infekciniai procesai.
                </p>
                <p>
                  Šios rizikos gali būti sėkmingai išvengtos laikantis gydytojo rekomendacijų tiek prieš procedūrą, tiek
                  gijimo laikotarpiu. Jei po procedūros atsiranda neįprastas skausmas, ilgai nemažėjantis patinimas ar
                  kiti neįprasti simptomai, svarbu nedelsti ir kreiptis į odontologą.
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
                  Renkantis protinių dantų šalinimo paslaugas svarbu ne tik pati procedūra, bet ir tai, kaip ji
                  atliekama – nuo sprendimo priėmimo iki priežiūros po procedūros. Bangų odontologijos klinikoje
                  protinių dantų šalinimas atliekamas atsakingai, siekiant maksimaliai apsaugoti paciento komfortą ir
                  burnos sveikatą.
                </p>
                <p>
                  Klinikoje dirbantys specialistai kiekvieną atvejį vertina individualiai, neskuba priimti sprendimo ir
                  visuomet pirmiausia ieško galimybių išsaugoti dantį. Jei protinio danties šalinimas yra neišvengiamas,
                  procedūra atliekama taikant šiuolaikinius nuskausminimo metodus ir kruopščiai suplanuotą eigą. Dėmesys
                  skiriamas ne tik pačiai procedūrai, bet ir aiškiam situacijos paaiškinimui bei rekomendacijoms po jos.
                </p>
                <p>
                  Pacientai vertina profesionalų bendravimą, ramų požiūrį ir aiškias instrukcijas, kurios padeda
                  jaustis saugiai viso gydymo metu. Todėl ieškantiems patikimo ir profesionalaus protinių dantų
                  šalinimo Klaipėdoje, Bangų odontologijos klinika yra patikimas pasirinkimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis protinio danties šalinimui Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu jaučiate skausmą, diskomfortą dėl dygstančio protinio danties ar gavote rekomendaciją jį
                  pašalinti, kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu bus
                  įvertinta Jūsų burnos būklė, aptartos galimos gydymo alternatyvos ir, esant poreikiui, suplanuotas
                  saugus protinio danties šalinimas.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiame, kad net ir tokios procedūros kaip protinių dantų šalinimas
                  būtų aiškios, valdomos ir kuo mažiau keliančios streso. Čia Jūsų laukia patyrę specialistai, moderni
                  įranga ir rūpestingas požiūris į kiekvieną pacientą.
                </p>
                <p>
                  Registruokitės protinio danties šalinimui ir pasirūpinkite savo burnos sveikata laiku bei
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
