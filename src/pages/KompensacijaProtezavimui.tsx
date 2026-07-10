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
  { id: 'kas-yra', label: 'Kas yra kompensacija protezavimui?' },
  { id: 'kas-gauna', label: 'Kas gali gauti kompensaciją?' },
  { id: 'kaip-suzinoti', label: 'Kaip sužinoti, ar priklauso?' },
  { id: 'procesas', label: 'Kaip vyksta gydymo procesas?' },
  { id: 'svarbu-zinoti', label: 'Ką svarbu žinoti?' },
  { id: 'duk', label: 'Dažniausi klausimai' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function KompensacijaProtezavimui() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/kompensacija-protezavimui/#service",
    "name": "Kompensacija protezavimui Klaipėdoje",
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
        title="Kompensacija protezavimui Klaipėdoje - Bangų klinika"
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
              Kompensacija protezavimui Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Dantų netekimas ar stipriai pažeisti dantys gali apsunkinti kramtymą, kalbėjimą, šypseną ir
                  kasdienį komfortą. Kai dantų atkurti plombomis ar kitais paprastesniais būdais nebeįmanoma, gali
                  būti reikalingas dantų protezavimas. Tam tikroms pacientų grupėms ši paslauga gali būti iš dalies
                  kompensuojama Privalomojo sveikatos draudimo fondo lėšomis.
                </p>
                <p>
                  Kompensacija protezavimui padeda sumažinti paciento išlaidas ir sudaro galimybę laiku atkurti
                  prarastus ar stipriai pažeistus dantis. Bangų odontologijos klinikoje Klaipėdoje pacientui
                  suteikiama aiški informacija apie galimus protezavimo sprendimus, gydymo eigą ir tai, ką svarbu
                  žinoti prieš naudojantis kompensavimo galimybe.
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

          {/* KAS YRA KOMPENSUOJAMAS PROTEZAVIMAS */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra kompensacija dantų protezavimui?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Kompensacija dantų protezavimui – tai valstybės nustatyta tvarka teikiama finansinė pagalba
                  pacientams, kuriems reikalingas dantų atkūrimas protezais. Ji skiriama tam, kad tam tikros
                  pacientų grupės galėtų lengviau pasirūpinti kramtymo funkcijos, estetikos ir bendros burnos
                  sveikatos atkūrimu.
                </p>
                <p>
                  Dantų protezavimas gali būti reikalingas netekus vieno, kelių ar visų dantų, esant dideliam dantų
                  nusidėvėjimui, stipriai pažeistiems dantims ar sutrikusiai kramtymo funkcijai. Tinkamai parinkti
                  protezavimo sprendimai padeda ne tik atkurti šypseną, bet ir sumažinti likusių dantų apkrovą,
                  pagerinti maisto kramtymą bei bendrą gyvenimo kokybę.
                </p>
                <p>
                  Svarbu žinoti, kad kompensacija ne visada padengia visą gydymo kainą. Kompensuojama suma ir jos
                  taikymo sąlygos priklauso nuo galiojančios tvarkos, paciento grupės, klinikinės situacijos ir
                  pasirinkto protezavimo plano.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAS GALI GAUTI */}
          <motion.section id="kas-gauna" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kam gali būti skiriama dantų protezavimo kompensacija?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų protezavimo kompensacija gali būti skiriama tik tam tikroms pacientų grupėms, kurios yra
                apdraustos privalomuoju sveikatos draudimu. Dažniausiai teisę į kompensuojamą dantų protezavimą
                gali turėti šios grupės:
              </p>

              <div className="grid gap-3">
                {[
                  'senatvės pensijos amžiaus sulaukę asmenys',
                  'vaikai iki 18 metų',
                  'asmenys, kuriems nustatytas nedarbingumas ar dalinis darbingumas',
                  'pacientai, kuriems buvo taikytas gydymas dėl burnos, veido ar žandikaulių onkologinių ligų'
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="mt-1">
                      <CheckIcon />
                    </span>
                    <span className="text-slate-700">{text}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed mt-6">
                <p>
                  Vis dėlto priklausymas vienai iš šių grupių dar nereiškia, kad kompensacija automatiškai bus
                  pritaikyta visais atvejais. Vertinama ir paciento burnos būklė, dantų protezavimo poreikis,
                  kramtymo funkcija bei kiti medicininiai kriterijai.
                </p>
                <p>
                  Kadangi kompensavimo tvarka, sumos ir kriterijai gali keistis, tiksliausia informacija patvirtinama
                  pagal galiojančią TLK tvarką. Konsultacijos metu pacientui paaiškinama, kokie žingsniai reikalingi
                  ir kokius duomenis ar dokumentus gali reikėti turėti.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAIP SUŽINOTI */}
          <motion.section id="kaip-suzinoti" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip sužinoti, ar jums priklauso kompensacija protezavimui?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Norint sužinoti, ar jums gali būti taikoma kompensacija protezavimui, pirmiausia reikalingas
                  burnos būklės įvertinimas. Gydytojas odontologas apžiūros metu įvertina, kiek dantų yra prarasta,
                  kokia likusių dantų būklė, ar yra kramtymo funkcijos sutrikimų, ar burnos ertmė paruošta
                  protezavimui.
                </p>
                <p>
                  Kai kuriais atvejais pacientas dėl teisės į kompensaciją pirmiausia kreipiasi į gydymo įstaigą,
                  prie kurios yra prisirašęs. Ten įvertinamas protezavimo poreikis ir pacientas registruojamas pagal
                  galiojančią kompensavimo tvarką. Jei pacientas jau turi patvirtintą teisę į kompensaciją,
                  atvykstant į kliniką svarbu apie tai informuoti registracijos metu.
                </p>
                <p>
                  Bangų odontologijos klinikoje konsultacijos metu pacientui aiškiai paaiškinama, kokie protezavimo
                  sprendimai galimi jo situacijoje, kokie paruošiamieji gydymo etapai gali būti reikalingi ir kaip
                  kompensacija gali būti pritaikoma konkrečiam gydymo planui.
                </p>
              </div>
            </div>
          </motion.section>

          {/* GYDYMO PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip vyksta dantų protezavimas su kompensacija?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų protezavimas su kompensacija vyksta nuosekliai, kad pacientas aiškiai suprastų visą gydymo
                eigą ir numatomas išlaidas.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Konsultacija ir burnos būklės įvertinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pirmojo vizito metu įvertinama dantų, dantenų, sąkandžio ir bendra burnos būklė. Jei reikia,
                    atliekami papildomi tyrimai, padedantys tiksliau suplanuoti protezavimą.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Kompensacijos galimybės aptarimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pacientui paaiškinama, ar jo situacijoje gali būti taikoma kompensacija, kokius žingsnius reikia
                    atlikti ir kokia dalis gydymo gali būti kompensuojama pagal galiojančią tvarką.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gydymo plano sudarymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Gydytojas parenka tinkamiausią protezavimo sprendimą pagal paciento burnos būklę, funkcinius
                    poreikius, estetikos lūkesčius ir finansines galimybes. Plane aiškiai nurodoma gydymo eiga ir
                    numatomos išlaidos.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Paruošiamasis gydymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Prieš protezavimą gali reikėti atlikti dantų gydymą, profesionalią burnos higieną, pašalinti
                    nebeišsaugomus dantis ar pasirūpinti dantenų būkle. Tai svarbu, kad protezavimo rezultatas
                    būtų stabilesnis ir ilgaamžiškesnis.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Protezo gamyba ir pritaikymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pagal pasirinktą gydymo planą gaminami ir pritaikomi dantų protezai. Vizitų metu tikrinamas jų
                    patogumas, sąkandis, estetika ir funkcija.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">06</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Priežiūros rekomendacijos</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Po protezavimo pacientui paaiškinama, kaip prižiūrėti protezus, kada atvykti kontrolei ir kokių
                    įpročių vengti, kad rezultatas tarnautų kuo ilgiau.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* SVARBU ŽINOTI */}
          <motion.section id="svarbu-zinoti" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Ką svarbu žinoti prieš naudojantis kompensacija protezavimui?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Prieš pradedant gydymą svarbu suprasti, kad kompensacija gali sumažinti protezavimo išlaidas,
                  tačiau ne visada padengia visą pasirinktą gydymo planą. Jei pacientas renkasi sudėtingesnius,
                  estetiškesnius ar platesnės apimties protezavimo sprendimus, gali būti reikalinga priemoka.
                </p>
                <p>
                  Galutinė protezavimo kaina priklauso nuo burnos būklės, trūkstamų dantų skaičiaus, pasirinkto
                  protezavimo tipo, naudojamų medžiagų ir paruošiamųjų procedūrų. Todėl tikslus gydymo planas ir
                  paciento mokama dalis aptariami individualiai po apžiūros.
                </p>
                <p>
                  Renkantis dantų protezavimą svarbu atkreipti dėmesį ne tik į kompensaciją, bet ir į ilgalaikį
                  rezultatą. Tinkamai suplanuotas protezavimas padeda atkurti kramtymo funkciją, apsaugoti likusius
                  dantis nuo per didelės apkrovos ir pagerinti kasdienį komfortą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* DUK */}
          <motion.section id="duk" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Dažniausiai užduodami klausimai apie kompensaciją protezavimui</h2>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Ar kompensacija protezavimui padengia visą gydymo kainą?</h3>
                  <p className="text-slate-600 text-sm">Ne visada. Kompensacija gali padengti dalį protezavimo išlaidų, tačiau jei pasirinktas gydymo planas viršija kompensuojamą sumą, skirtumą pacientas dengia savo lėšomis.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Ar kompensacija taikoma visiems protezavimo sprendimams?</h3>
                  <p className="text-slate-600 text-sm">Kompensacija taikoma pagal galiojančią tvarką ir mediciniškai pagrįstą protezavimo poreikį. Ne visi estetiniai ar sudėtingesni sprendimai gali būti visiškai kompensuojami.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Kada verta kreiptis dėl kompensacijos protezavimui?</h3>
                  <p className="text-slate-600 text-sm">Kreiptis verta tada, kai trūksta dantų, sunku kramtyti, esami protezai nebėra patogūs arba gydytojas yra nurodęs, kad reikalingas dantų protezavimas.</p>
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
                  Renkantis kompensaciją protezavimui svarbu ne tik pati valstybės kompensacija, bet ir kokybiškas,
                  ilgalaikis gydymo rezultatas. Bangų odontologijos klinikoje Klaipėdoje kiekvienas pacientas
                  įvertinamas individualiai, sudarant aiškų ir pagrįstą gydymo planą.
                </p>
                <p>
                  Klinikoje daug dėmesio skiriama aiškiam viso proceso paaiškinimui – nuo kompensacijos galimybių
                  iki galutinio protezavimo sprendimo. Pacientai viso gydymo metu gauna aiškias rekomendacijas ir
                  nuoseklią priežiūrą.
                </p>
                <p>
                  Toks požiūris leidžia užtikrinti, kad kompensacija protezavimui būtų pritaikyta sklandžiai, o
                  gydymo rezultatas būtų funkcionalus, patogus ir ilgaamžis.
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
