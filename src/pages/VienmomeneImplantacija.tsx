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
  { id: 'privalumai', label: 'Pagrindiniai privalumai' },
  { id: 'kada-taikoma', label: 'Kada taikoma?' },
  { id: 'procesas', label: 'Kaip vyksta procedūra?' },
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
                  Bangų odontologijos klinika siūlo modernią dantų atkūrimo procedūrą, kurios metu danties pašalinimas ir
                  implanto įsriegimas atliekami vieno vizito metu. Toks sprendimas leidžia sutrumpinti gydymo trukmę ir
                  paprasčiau planuoti tolimesnius vizitus, neprarandant saugumo ar procedūros kokybės.
                </p>
                <p>
                  Vienmomentė implantacija Klaipėdoje atliekama pasitelkiant šiuolaikinę skaitmeninę diagnostiką ir kruopščiai
                  suplanuotą eigą, todėl kiekvienas atvejis vertinamas individualiai, atsižvelgiant į danties būklę, aplinkinių
                  audinių sveikatą ir kaulo tūrį. Bangų odontologijos klinikoje siekiame, kad procedūra būtų kuo patogesnė ir
                  suteiktų greitą, patikimą rezultatą.
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra vienmomentė implantacija?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Vienmomentė implantacija – tai gydymo metodas, kurio metu du atskiri etapai, danties pašalinimas ir implanto
                  įsriegimas, sujungiami į vieną procedūrą. Dantis pašalinamas maksimaliai tausojant aplinkinius audinius, o iš
                  karto po to į atsilaisvinusią vietą įsriegiamas implantas.
                </p>
                <p>
                  Toks požiūris leidžia išvengti papildomo laukimo laikotarpio tarp danties šalinimo ir implantavimo, kuris
                  taikomas taikant klasikinį, kelių etapų gydymo metodą. Bangų odontologijos klinikoje vienmomentė implantacija
                  atliekama kruopščiai suplanuotos eigos metu, siekiant užtikrinti tiek saugumą, tiek geriausią įmanomą rezultatą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PRIVALUMAI */}
          <motion.section id="privalumai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Pagrindiniai privalumai</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Vienmomentė implantacija turi keletą svarbių privalumų, dėl kurių šis metodas tampa patrauklia alternatyva
                klasikiniam, kelių etapų implantavimui.
              </p>

              <div className="grid gap-3">
                {[
                  ['Sutrumpintas laikas', 'Danties pašalinimas ir implanto įsriegimas atliekami vienos procedūros metu, todėl nereikia laukti tarp dviejų atskirų vizitų ir gydymo procesas tampa gerokai spartesnis.'],
                  ['Audinių išsaugojimas', 'Implantą įsriegiant iš karto po danties pašalinimo, sumažinamas kaulo nykimas ir suteikiamos palankesnės sąlygos greitesniam gijimui.'],
                  ['Estetika', 'Tam tikrais atvejais galimas laikino vainikėlio uždėjimas iš karto, o tai ypač svarbu, kai gydoma priekinių dantų zona ir svarbus estetinis rezultatas.'],
                  ['Komfortas', 'Mažesnis chirurginių intervencijų skaičius reiškia paprastesnį, aiškesnį gydymo planą ir mažiau streso pacientui.'],
                ].map(([title, text], i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="mt-1">
                      <CheckIcon />
                    </span>
                    <span className="text-slate-700">
                      <span className="font-semibold text-darkblue-700">{title}.</span> {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* KADA TAIKOMA */}
          <motion.section id="kada-taikoma" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada taikoma vienmomentė implantacija?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Vienmomentė implantacija rekomenduojama tais atvejais, kai dantis nebegali būti išsaugotas, tačiau aplinkiniai
                  audiniai yra sveiki, o kaulo tūris pakankamas saugiam implanto įsriegimui. Prieš priimant sprendimą dėl šio
                  gydymo metodo, visuomet atliekama kruopšti apžiūra ir skaitmeninė diagnostika, leidžianti tiksliai įvertinti
                  situaciją.
                </p>
                <p>
                  Vienmomentė implantacija netaikoma esant aktyviai infekcijai gydomoje srityje arba kai kaulo tūris yra
                  nepakankamas patikimam implanto įtvirtinimui. Tokiais atvejais renkamasi klasikinis, kelių etapų gydymo
                  metodas, kuris leidžia pirmiausia užtikrinti audinių sveikimą ir tik vėliau atlikti implantaciją.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip vyksta procedūra?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Bangų odontologijos klinikoje vienmomentė implantacija atliekama naudojant skaitmeninę diagnostiką, kuri padeda
                tiksliai suplanuoti kiekvieną gydymo etapą. Procedūros eiga yra aiški ir nuosekli, kad pacientas jaustųsi
                saugiai viso vizito metu.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Diagnostika</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Atliekama skaitmeninė diagnostika, kurios metu įvertinama danties, aplinkinių audinių ir kaulo būklė. Ši informacija padeda nustatyti, ar pacientui tinka vienmomentė implantacija, ir suplanuoti tikslią procedūros eigą.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Pašalinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dantis pašalinamas maksimaliai tausojant aplinkinius audinius ir kaulą, kad būtų sudarytos kuo geresnės sąlygos sėkmingam implanto įsriegimui.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Implanto įsriegimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Iš karto po danties pašalinimo į atsilaisvinusią vietą įsriegiamas implantas, taip sujungiant abu gydymo etapus į vieną vizitą.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gijimas ir protezavimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Po procedūros seka gijimo laikotarpis, o jam pasibaigus atliekamas galutinis protezavimas, atkuriantis danties funkciją ir estetiką.
                  </p>
                </div>
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
                  Renkantis vienmomentę implantaciją svarbu ne tik pati procedūra, bet ir tai, kaip ji atliekama – nuo tikslios diagnostikos iki priežiūros po gydymo. Bangų odontologijos klinikoje vienmomentė implantacija atliekama atsakingai, siekiant maksimaliai apsaugoti paciento komfortą ir burnos sveikatą.
                </p>
                <p>
                  Klinikoje dirbantys specialistai kiekvieną atvejį vertina individualiai, naudoja skaitmeninę diagnostiką ir kruopščiai planuoja procedūros eigą. Jei vienmomentė implantacija yra tinkamas sprendimas, ji atliekama taikant šiuolaikinius metodus, kurie leidžia sutrumpinti gydymo laiką neprarandant saugumo ar kokybės.
                </p>
                <p>
                  Pacientai vertina profesionalų bendravimą, ramų požiūrį ir aiškias instrukcijas, kurios padeda jaustis saugiai viso gydymo metu. Todėl ieškantiems patikimos ir profesionalios vienmomentės implantacijos Klaipėdoje, Bangų odontologijos klinika yra patikimas pasirinkimas.
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
