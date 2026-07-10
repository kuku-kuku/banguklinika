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
  { id: 'kas-yra', label: 'Kas yra vienmomentė implantacija?' },
  { id: 'kada-taikoma', label: 'Kada taikoma?' },
  { id: 'procesas', label: 'Kaip vyksta procedūra?' },
  { id: 'privalumai', label: 'Pagrindiniai privalumai' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function VienmomeneImplantacija() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/vienmomente-implantacija/#service",
    "name": "Vienmomentė implantacija Klaipėdoje",
    "serviceType": "Vienmomentė implantacija",
    "description": "Vienmomentės implantacijos paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Danties pašalinimas ir implanto įsriegimas atliekami vieno vizito metu.",
    "url": "https://www.banguklinika.lt/paslaugos/vienmomente-implantacija/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Vienmomentė implantacija Klaipėdoje - Bangų klinika"
        description="Vienmomentė implantacija Klaipėdoje – danties šalinimas ir implanto įsriegimas per vieną vizitą☑️greičiau, patogiau☑️Kaina nuo 1200€.⏩Registruokitės konsultacijai jau dabar."
        keywords="vienmomente implantacija, dantu implantai, implantacija per viena vizita, klaipeda"
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
              Vienmomentė implantacija Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Danties netekimas ar būtinybė jį pašalinti dažnai turi tiesioginę įtaką ne tik burnos funkcijai, bet
                  ir bendrai savijautai bei pasitikėjimui savimi. Net ir vieno danties praradimas gali sukelti kramtymo
                  diskomfortą, šypsenos estetikos pokyčius, o ilgainiui lemti žandikaulio kaulo nykimą bei gretimų
                  dantų pasislinkimą. Tokiose situacijose vienmomentė implantacija tampa moderniu ir kliniškai
                  pažangiu sprendimu, leidžiančiu vieno vizito metu pašalinti dantį ir iš karto atkurti jo šaknį
                  implantu.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje vienmomentė implantacija atliekama taikant šiuolaikinius
                  implantologijos principus ir skaitmeninę diagnostiką. Procedūros metu siekiama ne tik kuo greičiau
                  atkurti prarastą dantį, bet ir maksimaliai išsaugoti aplinkinius audinius bei natūralią dantenų
                  struktūrą. Individualus gydymo planavimas, tiksli diagnostika ir atsakingas požiūris leidžia
                  užtikrinti prognozuojamą, estetiškai harmoningą ir ilgalaikį rezultatą.
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
                      Vienmomentės implantacijos kainos
                    </h2>
                    <p className="text-slate-600">
                      Vienmomentės implantacijos kaina priklauso nuo klinikinės situacijos, danties padėties ir aplinkinių audinių bei kaulo būklės. Prieš atliekant procedūrą visuomet atliekama apžiūra ir skaitmeninė diagnostika, kurios metu įvertinamas tinkamumas šiam gydymo metodui.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Implantacija</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Vienmomentė implantacija', 'nuo 1200 €'],
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
                  Tiksli vienmomentės implantacijos Klaipėdoje kaina aptariama individualios konsultacijos metu, atsižvelgiant į konkrečią klinikinę situaciją. Skaidri kainodara ir profesionalus požiūris leidžia pacientams jaustis užtikrintai ir priimti informuotą sprendimą.
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
                  <div className="pt-[125%]" />
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

          {/* KAS YRA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra vienmomentė implantacija?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Vienmomentė implantacija – tai modernus dantų atkūrimo metodas, kai pažeisto ar nebeišsaugomo
                  danties pašalinimas ir dantų implanto įsriegimas atliekami to paties vizito metu. Šis gydymo būdas
                  leidžia ženkliai sutrumpinti bendrą gydymo laiką ir išvengti papildomų chirurginių etapų.
                </p>
                <p>
                  Skirtingai nuo tradicinės implantacijos, kai po danties šalinimo reikia laukti kaulo gijimo
                  laikotarpio, vienmomentės implantacijos metu implantas įsriegiamas iš karto į pašalinto danties
                  vietą. Tai padeda išsaugoti natūralią kaulo struktūrą, sumažinti jo rezorbciją ir palaikyti
                  dantenų kontūrą.
                </p>
                <p>
                  Svarbu pabrėžti, kad vienmomentė implantacija nėra universalus sprendimas visiems pacientams. Tai
                  individualiai planuojamas gydymo metodas, kuris taikomas tik tuomet, kai užtikrinamas pakankamas
                  kaulo kiekis ir nėra aktyvaus uždegimo. Dėl šios priežasties kiekvienu atveju atliekama išsami
                  diagnostika ir gydymo plano sudarymas.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje vienmomentė implantacija planuojama skaitmeniniu būdu,
                  siekiant maksimaliai tiksliai įvertinti klinikinę situaciją ir užtikrinti prognozuojamą ilgalaikį
                  rezultatą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA TAIKOMA */}
          <motion.section id="kada-taikoma" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada taikoma vienmomentė implantacija?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Vienmomentė implantacija taikoma tik kruopščiai įvertinus burnos būklę. Dažniausiai ji
                rekomenduojama, kai dantis yra nepataisomai pažeistas, tačiau aplinkiniai audiniai yra pakankamai
                sveiki.
              </p>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-darkblue-700">Šis metodas ypač tinkamas, kai:</h3>
                <div className="grid gap-3">
                  {[
                    'reikalingas danties šalinimas dėl traumos ar karieso',
                    'nėra aktyvios infekcijos ar pūlinio',
                    'kaulo kiekis leidžia užtikrinti implanto stabilumą',
                    'svarbus greitas estetinės zonos atkūrimas',
                    'pacientas nori sumažinti bendrą gydymo trukmę',
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
                  Priekinėje dantų srityje šis metodas dažnai pasirenkamas dėl estetikos svarbos ir psichologinio
                  komforto, nes net trumpalaikis danties netekimas gali turėti įtakos šypsenai ir savijautai.
                </p>
                <p>
                  Tačiau vienmomentė implantacija negali būti atliekama, jei nustatomas aktyvus uždegimas,
                  nepakankamas kaulo tūris arba sudėtinga anatominė situacija. Tokiais atvejais parenkamas
                  alternatyvus gydymo planas, kuris užtikrina saugesnį ilgalaikį rezultatą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip atliekama vienmomentė implantacija?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Vienmomentė implantacija yra nuoseklus, keliais etapais pagrįstas gydymo procesas, kuriame kiekvienas
                žingsnis turi įtakos galutiniam rezultatui.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Diagnostika ir planavimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Atliekami rentgeno arba 3D kompiuterinės tomografijos tyrimai. Įvertinamas kaulo kiekis,
                    dantenų būklė, infekcijos rizika ir sudaromas individualus gydymo planas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Danties pašalinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dantis pašalinamas maksimaliai tausojant aplinkinius audinius, siekiant išsaugoti natūralią
                    kaulo struktūrą, kuri yra svarbi implanto stabilumui.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Implanto įsriegimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Į tą pačią vietą įsriegiamas dantų implantas. Jei pasiekiamas pakankamas pirminis stabilumas,
                    gali būti tvirtinamas laikinas vainikėlis, ypač estetinėje zonoje.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gijimo laikotarpis</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Vyksta osteointegracija – implanto suaugimas su kaulu. Šis procesas trunka kelis mėnesius ir
                    yra esminis ilgalaikio rezultato užtikrinimui.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Galutinis protezavimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pagaminamas individualus danties vainikėlis, kuris atkartoja natūralią danties formą, spalvą
                    ir funkciją.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PRIVALUMAI */}
          <motion.section id="privalumai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Vienmomentės implantacijos privalumai</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Vienmomentė implantacija šiuolaikinėje implantologijoje vertinama kaip pažangus ir pacientui itin
                  patogus gydymo metodas, leidžiantis efektyviai suderinti danties šalinimą ir implantavimą vieno
                  vizito metu. Toks sprendimas ne tik sutrumpina bendrą gydymo laiką, bet ir suteikia daugiau
                  komforto viso gydymo proceso metu.
                </p>
                <p>
                  Vienas svarbiausių šio metodo privalumų – ženkliai sutrumpintas gydymo kelias. Danties
                  pašalinimas ir implanto įsriegimas atliekami vienos procedūros metu, todėl išvengiama ilgo
                  laukimo laikotarpio tarp etapų. Tai leidžia pacientui greičiau atkurti kramtymo funkciją ir grįžti
                  prie įprastos kasdienės veiklos.
                </p>
                <p>
                  Ne mažiau svarbu ir tai, kad sumažinamas chirurginių intervencijų skaičius. Vietoje dviejų
                  atskirų procedūrų pacientui atliekama viena, o tai dažnai reiškia mažesnį audinių dirginimą,
                  trumpesnį gijimo laikotarpį ir paprastesnį, aiškiau suplanuotą gydymo procesą.
                </p>
                <p>
                  Estetinis aspektas ypač reikšmingas, ypač priekinių dantų zonoje. Tam tikrais atvejais galima iš
                  karto po procedūros atkurti laikiną danties vainikėlį, todėl pacientas išvengia matomo danties
                  tarpo ir gali jaustis užtikrintai jau iškart po gydymo.
                </p>
                <p>
                  Dar vienas svarbus privalumas – natūralių audinių išsaugojimas. Vienmomentė implantacija padeda
                  sumažinti kaulo nykimą ir išlaikyti dantenų kontūrą, kuris yra itin svarbus tiek estetinei
                  išvaizdai, tiek ilgalaikiam implanto stabilumui. Dėl šių priežasčių šis metodas dažnai
                  pasirenkamas kaip optimalus sprendimas, kai siekiama suderinti greitį, estetiką ir ilgalaikį
                  rezultatą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KODĖL RINKTIS */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kodėl verta kreiptis į Bangų odontologijos kliniką dėl vienmomentės implantacijos?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Danties netekimas ar būtinybė jį šalinti dažnai sukelia ne tik funkcinius, bet ir estetinius bei
                  emocinius iššūkius. Tokiose situacijose svarbiausia tampa greitas, tikslus ir saugus sprendimas,
                  leidžiantis kuo greičiau atkurti prarastą dantį ir išvengti ilgalaikių pokyčių žandikaulio
                  audiniuose. Vienmomentė implantacija yra vienas pažangiausių metodų, leidžiančių tai pasiekti per
                  maksimaliai trumpą laiką.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje vienmomentė implantacija planuojama atsakingai,
                  remiantis išsamia diagnostika ir individualia paciento situacija. Kiekvienas atvejis įvertinamas
                  kompleksiškai – analizuojama kaulo būklė, dantenų sveikata, infekcijos rizika ir bendras burnos
                  stabilumas. Tik tuomet parenkamas saugiausias ir prognozuojamas gydymo sprendimas.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiama ne tik atkurti dantį, bet ir išsaugoti natūralią audinių
                  struktūrą, užtikrinant ilgalaikį implantų stabilumą bei estetiškai harmoningą rezultatą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis vienmomentei implantacijai Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu norite atkurti pašalintą dantį per vieną vizitą, kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu bus įvertinta Jūsų burnos būklė, atlikta skaitmeninė diagnostika ir, esant poreikiui, suplanuota vienmomentė implantacija.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiame, kad net ir tokia sudėtinga procedūra kaip vienmomentė implantacija būtų aiški, valdoma ir kuo mažiau keliančios streso. Čia Jūsų laukia patyrę specialistai, moderni įranga ir rūpestingas požiūris į kiekvieną pacientą.
                </p>
                <p>
                  Registruokitės vienmomentei implantacijai ir pasirūpinkite savo burnos sveikata laiku bei profesionaliai.
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
