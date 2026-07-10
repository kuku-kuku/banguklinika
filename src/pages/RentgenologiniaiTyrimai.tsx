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
  { id: 'kas-yra', label: 'Kas yra rentgenologiniai tyrimai?' },
  { id: 'indikacijos', label: 'Kada reikalingas?' },
  { id: 'paslaugu-tipai', label: 'Tyrimų rūšys' },
  { id: 'procesas', label: 'Kaip atliekamas tyrimas?' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function RentgenologiniaiTyrimai() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/rentgenologiniai-tyrimai/#service",
    "name": "Rentgenologiniai tyrimai Klaipėdoje",
    "serviceType": "Rentgenologiniai tyrimai",
    "description": "Rentgenologinės diagnostikos paslaugos teikiamos Bangų odontologijos klinikoje Klaipėdoje. Klinikoje atliekami dantų rentgeno tyrimai naudojant modernią skaitmeninę įrangą.",
    "url": "https://www.banguklinika.lt/paslaugos/rentgenologiniai-tyrimai/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Rentgenologiniai tyrimai Klaipėdoje - Bangų klinika"
        description="Rentgenologiniai tyrimai ir dantų rentgenas Klaipėdoje☑️moderni skaitmeninė įranga☑️tiksli diagnostika už kainą nuo 30€.⏩Registruokitės Bangų klinikoje jau dabar."
        keywords="rentgenologiniai tyrimai, dantu rentgenas, panoramine nuotrauka, kompiuterine tomografija, 3D CBCT, klaipeda"
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
              Rentgenologiniai tyrimai Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Dantų ir žandikaulių ligos dažnai vystosi nepastebimai, o ankstyvose stadijose jų požymiai gali būti
                  nematomi plika akimi. Dėl šios priežasties rentgenologinė diagnostika yra viena svarbiausių
                  šiuolaikinės odontologijos dalių, leidžianti tiksliai įvertinti tiek dantų, tiek aplinkinių audinių
                  būklę. Laiku atliktas rentgenologinis tyrimas padeda išvengti sudėtingesnių gydymo etapų ir
                  užtikrina tikslesnį gydymo planavimą.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje rentgenologiniai tyrimai atliekami naudojant modernią
                  skaitmeninę diagnostinę įrangą, kuri leidžia gauti aiškius, detalius ir greitai apdorojamus vaizdus.
                  Tai suteikia gydytojams galimybę įvertinti situaciją tiksliai ir parinkti optimalų gydymo sprendimą
                  kiekvienam pacientui individualiai.
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
                      Rentgenologinių tyrimų kainos
                    </h2>
                    <p className="text-slate-600">
                      Rentgenologinio tyrimo kaina priklauso nuo pasirinkto tyrimo tipo ir jo apimties. Tinkamiausią tyrimą
                      parenka gydytojas, atsižvelgdamas į klinikinį poreikį – ar tai būtų dantų skausmo priežasties nustatymas,
                      implantacijos planavimas ar ortodontinio gydymo vertinimas.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Rentgenologiniai tyrimai</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Panoraminė rentgeno nuotrauka', '30 €'],
                        ['Kompiuterinė tomografo nuotrauka (3D)', '80 €'],
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
                  Tiksli rentgenologinio tyrimo Klaipėdoje kaina aptariama konsultacijos metu, atsižvelgiant į konkretų
                  klinikinį poreikį. Skaidri kainodara ir profesionalus požiūris leidžia pacientams jaustis užtikrintai ir
                  priimti informuotą sprendimą.
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

          {/* KAS YRA RENTGENOLOGINIAI TYRIMAI */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra rentgenologiniai tyrimai odontologijoje?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Rentgenologiniai tyrimai odontologijoje – tai modernūs diagnostikos metodai, leidžiantys gydytojui
                  pamatyti struktūras, kurios nėra matomos įprastos apžiūros metu. Tai vienas svarbiausių diagnostikos
                  etapų, be kurio šiuolaikinis gydymo planavimas dažnai būtų neįmanomas arba nepakankamai tikslus.
                </p>

                <div className="space-y-3 my-2">
                  <p className="font-semibold text-darkblue-700">Rentgenologinio tyrimo metu gaunama informacija apie:</p>
                  <div className="grid gap-3">
                    {[
                      'dantų šaknų struktūrą ir anatomiją',
                      'kaulo tankį, kiekį ir rezorbcijos laipsnį',
                      'paslėptus ėduonies židinius tarp dantų',
                      'uždegiminius procesus prie šaknų ar kaulo audiniuose',
                      'cistas, darinius, retinuotus ar neišdygusius dantis'
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

                <p>
                  Šie duomenys leidžia gydytojui remtis ne spėjimu, o objektyvia diagnostine informacija. Tai
                  ženkliai sumažina gydymo klaidų riziką ir pagerina ilgalaikę prognozę.
                </p>
                <p>
                  Svarbu pabrėžti, kad rentgenologinis tyrimas nėra tik papildomas diagnostinis žingsnis. Daugeliu
                  atvejų tai yra esminė gydymo dalis, ypač planuojant implantaciją, endodontinį gydymą, ortodontiją
                  ar chirurgines procedūras.
                </p>
                <p>
                  Šiuolaikinė skaitmeninė rentgeno technologija leidžia gauti itin aukštos raiškos vaizdus su
                  minimalia spinduliuotės doze. Dėl to tyrimas yra saugus, greitas ir gali būti taikomas tiek
                  suaugusiems, tiek vaikams, kai tai yra mediciniškai būtina.
                </p>
              </div>
            </div>
          </motion.section>

          {/* INDIKACIJOS */}
          <motion.section id="indikacijos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada reikalingi rentgenologiniai tyrimai?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Rentgenologiniai tyrimai skiriami tada, kai gydytojui būtina tiksliai įvertinti vidines burnos
                struktūras, kurių neįmanoma nustatyti vizualinės apžiūros metu. Dažnai jie atliekami ne tik esant
                simptomams, bet ir planuojant gydymą iš anksto.
              </p>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-darkblue-700">Dažniausios indikacijos:</h3>
                <div className="grid gap-3">
                  {[
                    'dantų skausmas, jautrumas ar spaudimo pojūtis',
                    'įtariamas šaknų kanalų uždegimas',
                    'implantacijos planavimas',
                    'ortodontinis gydymas ar sąkandžio vertinimas',
                    'dantų šalinimas ar chirurginės intervencijos',
                    'traumos, smūgiai ar žandikaulio pažeidimai',
                    'retinuoti, papildomi ar neišdygę dantys',
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

              <p className="text-slate-700 leading-relaxed mb-6">
                Labai svarbu tai, kad daugelis dantų patologijų ilgą laiką vystosi be simptomų. Pavyzdžiui,
                uždegimas prie šaknies gali progresuoti tyliai, kol jau paveikia kaulo audinį.
              </p>

              <div className="space-y-3">
                <h3 className="font-semibold text-darkblue-700">Laiku atliktas rentgenologinis tyrimas leidžia:</h3>
                <div className="grid gap-3">
                  {[
                    'anksti nustatyti patologijas',
                    'išvengti sudėtingo chirurginio gydymo',
                    'išsaugoti natūralius dantis',
                    'tiksliai suplanuoti implantaciją',
                    'sumažinti komplikacijų riziką',
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

              <p className="text-slate-700 leading-relaxed mt-6">
                Dėl šių priežasčių rentgenologinė diagnostika laikoma neatsiejama tiek gydymo, tiek profilaktikos
                dalimi.
              </p>
            </div>
          </motion.section>

          {/* PASLAUGŲ TIPAI */}
          <motion.section id="paslaugu-tipai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kokie rentgenologiniai tyrimai atliekami Bangų odontologijos klinikoje?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Bangų odontologijos klinikoje atliekamas platus rentgenologinių tyrimų spektras, leidžiantis tiksliai
                įvertinti skirtingas klinikines situacijas. Tyrimo metodas parenkamas individualiai, atsižvelgiant į
                paciento būklę ir planuojamą gydymą.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Dentalinės rentgeno nuotraukos</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tai tikslinis vieno ar kelių dantų vaizdas, leidžiantis įvertinti šaknų kanalus, ėduonies
                    pažeidimus, uždegiminius procesus ir kaulo pokyčius aplink konkretų dantį. Šis tyrimas ypač
                    svarbus endodontiniam gydymui.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Panoraminės rentgeno nuotraukos (ortopantomogramos)</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tai bendras viso žandikaulio vaizdas, kuriame matomi visi dantys, šaknys ir aplinkinės
                    struktūros. Tyrimas dažnai naudojamas implantacijos, protezavimo ar chirurginių procedūrų
                    planavimui.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">3D kompiuterinė tomografija (CBCT)</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tai trimatis vaizdas, leidžiantis itin tiksliai įvertinti kaulo tūrį, tankį, nervų kanalų padėtį
                    bei kitus anatominius ypatumus. Tai vienas svarbiausių tyrimų implantologijoje.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Cefalometriniai tyrimai</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Naudojami ortodontijoje, vertinant žandikaulių santykį, augimo kryptį ir dantų pozicijas.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Intraoralinis skenavimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Skaitmeninis dantų modeliavimas, leidžiantis sukurti itin tikslų 3D burnos vaizdą be tradicinių
                    atspaudų. Naudojamas protezavimui ir ortodontiniam gydymui.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip atliekami rentgenologiniai tyrimai?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Rentgenologiniai tyrimai Bangų odontologijos klinikoje atliekami pagal aiškią ir nuoseklią eigą,
                užtikrinant diagnostikos tikslumą ir paciento komfortą. Kiekvienas atvejis vertinamas individualiai,
                todėl tyrimo eiga gali nežymiai skirtis priklausomai nuo pasirinkto metodo.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Paciento informavimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pacientas supažindinamas su tyrimu, jo tikslu ir eiga. Paaiškinama, kokia informacija bus gauta
                    ir kaip ji bus naudojama gydymo planavimui.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Apsaugos priemonės</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Uždedamos apsauginės priemonės, tokios kaip švininė prijuostė, siekiant maksimaliai sumažinti
                    spinduliuotės poveikį. Šiuolaikinė įranga naudoja itin mažą apšvitą, todėl tyrimas yra saugus.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Tyrimo parinkimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Parenkamas tinkamiausias metodas – dentalinė, panoraminė ar 3D nuotrauka – pagal klinikinę
                    situaciją ir diagnostinį poreikį.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Vaizdo fiksavimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Atliekamas greitas skaitmeninis vaizdo fiksavimas, trunkantis vos kelias sekundes. Svarbu
                    išlikti nejudant, kad vaizdas būtų tikslus.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Rezultatų vertinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Gauti duomenys perduodami gydytojui, kuris juos įvertina ir įtraukia į gydymo planą. Tyrimas
                    atliekamas tik esant medicininei indikacijai, todėl yra pagrįstas ir saugus.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KODĖL RINKTIS */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kodėl verta rinktis Bangų odontologijos kliniką rentgenologiniams tyrimams?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Tiksli diagnostika yra sėkmingo odontologinio gydymo pagrindas, todėl rentgenologinis tyrimas turi
                  būti atliekamas ne tik techniškai kokybiškai, bet ir profesionaliai interpretuojant gautus
                  duomenis. Bangų odontologijos klinikoje Klaipėdoje didelis dėmesys skiriamas tiek moderniai
                  skaitmeninei įrangai, tiek gydytojų patirčiai analizuojant diagnostinius vaizdus.
                </p>
                <p>
                  Klinikoje kiekvienas atvejis vertinamas kompleksiškai – rentgenologiniai duomenys visada derinami
                  su klinikine apžiūra ir paciento anamneze. Tai leidžia išvengti paviršutiniškų sprendimų ir
                  užtikrinti individualiai pritaikytą gydymo planą, atitinkantį realią burnos būklę. Tokia metodika
                  ypač svarbi planuojant implantaciją, endodontinį ar chirurginį gydymą, kai net mažiausios detalės
                  gali turėti įtakos galutiniam rezultatui.
                </p>
                <p>
                  Moderni skaitmeninė rentgenologinė įranga suteikia galimybę greitai gauti aukštos raiškos vaizdus,
                  todėl diagnostika ir gydymo planavimas gali būti pradedami iš karto. Pacientai taip pat gali gauti
                  aiškų paaiškinimą apie savo būklę jau pirmo vizito metu, be papildomo laukimo ar neapibrėžtumo.
                </p>
                <p>
                  Pacientai vertina profesionalų bendravimą, aiškias rekomendacijas ir atsakingą požiūrį į
                  diagnostiką. Todėl Bangų odontologijos klinika Klaipėdoje yra patikimas pasirinkimas, kai
                  reikalingas tikslus, saugus ir profesionaliai atliktas rentgenologinis tyrimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis rentgenologiniam tyrimui Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu Jums reikalingas rentgenologinis tyrimas – ar tai būtų dantų skausmo priežasties nustatymas,
                  implantacijos planavimas ar ortodontinio gydymo vertinimas – kviečiame registruotis konsultacijai Bangų
                  odontologijos klinikoje. Vizito metu bus parinktas tinkamiausias tyrimo tipas ir aptarti tolimesni žingsniai.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiame, kad diagnostika būtų tiksli, greita ir kuo mažiau varginanti
                  pacientą. Čia Jūsų laukia patyrę specialistai, moderni skaitmeninė įranga ir rūpestingas požiūris į kiekvieną
                  pacientą.
                </p>
                <p>
                  Registruokitės rentgenologiniam tyrimui ir pasirūpinkite savo burnos sveikata laiku bei profesionaliai.
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
