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
  { id: 'svarba', label: 'Kodėl svarbu atkurti laiku?' },
  { id: 'rusys', label: 'Tiltų rūšys' },
  { id: 'procesas', label: 'Gamybos procesas' },
  { id: 'duk', label: 'Dažniausi klausimai' },
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
                  Praradus vieną ar kelis dantis, keičiasi ne tik šypsenos estetika, bet ir kasdienė burnos funkcija.
                  Gali tapti sunkiau kramtyti, aiškiai kalbėti, didėja likusių dantų apkrova, o gretimi dantys
                  ilgainiui gali pradėti slinkti į atsiradusią tuščią vietą. Dantų tiltai padeda atkurti trūkstamus
                  dantis, kramtymo funkciją, sąkandžio stabilumą ir šypsenos vientisumą.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje dantų atkūrimo būdai parenkami individualiai, įvertinus
                  paciento burnos būklę, trūkstamų dantų skaičių, atraminių dantų ar implantų galimybes, sąkandį ir
                  paciento lūkesčius. Vienas iš galimų sprendimų, kai reikia atkurti vieną ar kelis trūkstamus
                  dantis, yra dantų tiltai. Tai fiksuoti protezai, kurie padeda grąžinti kramtymo komfortą,
                  šypsenos estetiką ir pasitikėjimą kasdienėse situacijose.
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

          {/* KAS YRA DANTŲ TILTAS */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra dantų tiltas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų tiltas – tai fiksuotas neišimamas protezas, skirtas atkurti vieną ar kelis trūkstamus dantis.
                  Jis tarsi „užpildo“ tarpą tarp likusių dantų: dirbtinis dantis arba keli dirbtiniai dantys
                  sujungiami su atramomis, kurios gali būti natūralūs paciento dantys arba implantai.
                </p>
                <p>
                  Jei dantų tiltas tvirtinamas ant natūralių dantų, šalia trūkstamo danties esantys dantys
                  dažniausiai paruošiami ir ant jų fiksuojami vainikėliai. Tarp jų esanti dalis atkuria prarastą
                  dantį. Jei tiltas tvirtinamas ant implantų, atramą suteikia į žandikaulį įsriegti implantai, todėl
                  kai kuriais atvejais galima išvengti gretimų dantų šlifavimo.
                </p>
                <p>
                  Pacientai dantų tiltus dažnai vadina ir dantų tilteliais. Abu terminai apibūdina tą patį
                  protezavimo principą – fiksuotą konstrukciją, kuri atkuria prarastus dantis ir nėra kasdien
                  išimama iš burnos.
                </p>
                <p>
                  Dantų tiltas gali būti gaminamas iš skirtingų medžiagų, pavyzdžiui, metalo keramikos, cirkonio
                  keramikos ar kitų šiuolaikinių protezavimui naudojamų medžiagų. Tinkamiausias variantas
                  parenkamas individualiai, atsižvelgiant į atkuriamų dantų vietą, kramtymo apkrovą, estetikos
                  poreikius ir burnos būklę.
                </p>
              </div>
            </div>
          </motion.section>

          {/* REIKALINGUMAS */}
          <motion.section id="reikalingumas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada reikalingas dantų tiltas?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų tiltas gali būti rekomenduojamas tada, kai pacientas yra netekęs vieno ar kelių gretimų dantų
                ir nori fiksuoto, stabilaus dantų atkūrimo sprendimo. Šis protezavimo būdas gali būti svarstomas
                tiek priekinių, tiek šoninių dantų srityje, tačiau kiekvienu atveju sprendimas priklauso nuo
                individualios klinikinės situacijos.
              </p>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-darkblue-700">Dantų tiltas gali būti reikalingas, kai:</h3>
                <div className="grid gap-3">
                  {[
                    'trūksta vieno ar kelių šalia esančių dantų',
                    'dėl dantų netekimo tapo sunkiau kramtyti',
                    'suprastėjo šypsenos estetika',
                    'pakito kalba ar tarimas',
                    'gretimi dantys pradeda krypti į tuščią vietą',
                    'likę dantys patiria didesnę apkrovą',
                    'pacientas nori neišimamo protezavimo sprendimo',
                    'dėl tam tikrų priežasčių implantacija nėra tinkamiausias pasirinkimas',
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
                  Svarbu žinoti, kad dantų tiltas nėra universalus sprendimas visais atvejais. Jei planuojama tilto
                  konstrukcija ant natūralių dantų, atraminiai dantys turi būti pakankamai tvirti, stabilūs ir
                  tinkami protezavimui. Jei atraminiai dantys yra silpni, paslankūs ar pažeisti periodonto ligų,
                  gali reikėti svarstyti kitus dantų atkūrimo būdus.
                </p>
                <p>
                  Jei gretimi dantys yra visiškai sveiki, kai kuriais atvejais gali būti racionaliau svarstyti
                  implantą, nes taip išvengiama atraminių dantų šlifavimo. Tačiau jei gretimi dantys jau yra
                  stipriai plombuoti, nusilpę ar jiems taip pat reikalingas protezavimas, dantų tiltas gali būti
                  logiškas ir pagrįstas pasirinkimas.
                </p>
                <p>
                  Konsultacijos metu odontologas įvertina ne tik trūkstamų dantų skaičių, bet ir bendrą burnos
                  būklę, sąkandį, dantenų sveikatą, kaulo kiekį ir paciento higienos įpročius. Tai leidžia parinkti
                  tokį sprendimą, kuris būtų saugus, funkcionalus ir ilgalaikėje perspektyvoje pagrįstas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* SVARBA */}
          <motion.section id="svarba" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kodėl svarbu atkurti trūkstamus dantis laiku?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Danties netekimas nėra tik estetinė problema. Net ir vieno danties trūkumas gali turėti įtakos
                  visai dantų sistemai. Kai dantų lanke atsiranda tuščia vieta, gretimi dantys ilgainiui gali
                  pradėti slinkti ar krypti, o priešingo žandikaulio dantis – ilgėti į tuščią tarpą. Tai gali keisti
                  sąkandį ir apsunkinti vėlesnį gydymą.
                </p>
                <p>
                  Trūkstant dantų, likusiems dantims tenka didesnė kramtymo apkrova. Dėl to jie gali greičiau
                  dėvėtis, skilti, jautrėti ar tapti paslankesni. Taip pat gali pasikeisti kramtymo įpročiai –
                  pacientas pradeda labiau kramtyti viena puse, todėl apkrova burnoje pasiskirsto netolygiai.
                </p>
                <p>
                  Ilgainiui dantų netekimas gali turėti įtakos ir žandikaulio kaului. Toje vietoje, kur nebėra
                  danties šaknies ar implanto, kaulas nebegauna įprastos apkrovos ir gali palaipsniui mažėti. Tai
                  ypač svarbu planuojant ilgalaikį dantų atkūrimą, nes kaulo kiekis gali turėti įtakos implantacijos
                  galimybėms ateityje.
                </p>
                <p>
                  Laiku atkurti dantys padeda išlaikyti taisyklingesnį sąkandį, sumažinti likusių dantų apkrovą,
                  pagerinti kramtymo funkciją ir išsaugoti šypsenos vientisumą. Dėl šios priežasties, net jei
                  trūkstamas dantis nesimato šypsantis, verta pasikonsultuoti su odontologu ir aptarti galimus
                  atkūrimo sprendimus.
                </p>
              </div>
            </div>
          </motion.section>

          {/* RŪŠYS */}
          <motion.section id="rusys" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kokios yra dantų tiltų rūšys?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų tiltai gali skirtis pagal tai, ant ko jie tvirtinami ir iš kokios medžiagos gaminami.
                Tinkamiausias sprendimas parenkamas individualiai, įvertinus trūkstamų dantų vietą, atraminių
                dantų būklę, sąkandį, kramtymo apkrovą ir paciento estetinius lūkesčius.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Dantų tiltas ant natūralių dantų</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tai vienas dažniausių dantų atkūrimo būdų, kai šalia trūkstamo danties esantys dantys
                    naudojami kaip atramos. Jie paruošiami protezavimui, ant jų fiksuojami vainikėliai, o tarp jų
                    esanti dalis atkuria prarastą dantį. Šis sprendimas gali būti tinkamas, kai atraminiai dantys
                    jau yra pažeisti, plombuoti ar jiems taip pat reikalingas protezavimas.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Dantų tiltas ant implantų</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kai norima atkurti kelis trūkstamus dantis arba išvengti gretimų sveikų dantų šlifavimo, gali
                    būti svarstomas dantų tiltas ant implantų. Tokiu atveju tiltas tvirtinamas ne ant natūralių
                    dantų, o ant implantų, kurie atlieka atramos funkciją. Šis sprendimas reikalauja pakankamo
                    kaulo kiekio ir implantacijos etapo, todėl gydymo planas visuomet sudaromas individualiai.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Cirkonio keramikos tiltas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Cirkonio keramikos dantų tiltai dažnai pasirenkami dėl tvirtumo, estetikos ir natūralios
                    išvaizdos. Ši medžiaga gali būti tinkama tiek priekinių, tiek krūminių dantų srityje, kai
                    svarbu suderinti atsparumą kramtymo apkrovai ir estetinį rezultatą. Galutinis pasirinkimas
                    priklauso nuo atkuriamų dantų vietos ir individualios burnos būklės.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Metalo keramikos tiltas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Metalo keramikos tiltas pasižymi tvirtumu ir gali būti naudojamas atkuriant didesnę kramtymo
                    apkrovą patiriančius dantis. Vis dėlto dėl metalinio karkaso ši konstrukcija gali būti mažiau
                    estetiška priekinių dantų srityje. Todėl ji dažniau svarstoma ten, kur pagrindinis prioritetas
                    yra funkcija ir atsparumas.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Laikinas dantų tiltas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kai kuriais atvejais, kol gaminamas nuolatinis protezas, pacientui gali būti pritaikomas
                    laikinas dantų tiltas. Jis padeda apsaugoti paruoštus dantis, palaikyti estetiką ir leidžia
                    patogiau jaustis gydymo laikotarpiu. Nuolatinis tiltas fiksuojamas tik tuomet, kai yra
                    pagaminta individuali, tiksliai paciento burnai pritaikyta konstrukcija.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* GAMYBOS PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip gaminamas ir pritvirtinamas dantų tiltas?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų tilto gamyba ir pritaikymas Bangų odontologijos klinikoje atliekami nuosekliai, kad protezas
                būtų tikslus, stabilus, patogus ir estetiškai derėtų prie paciento šypsenos. Kiekvienas etapas
                svarbus galutiniam rezultatui.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Konsultacija ir diagnostika</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Įvertinama burnos būklė, trūkstamų dantų vieta, atraminiai dantys, sąkandis ir dantenų būklė.
                    Prireikus atliekami radiologiniai tyrimai. Aptariamos galimos alternatyvos: dantų tiltas ant
                    natūralių dantų, tiltas ant implantų ar kiti dantų atkūrimo sprendimai.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gydymo plano sudarymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Gydytojas paaiškina, koks sprendimas tinkamiausias konkrečiu atveju, kokių paruošiamųjų
                    procedūrų gali reikėti ir kokios medžiagos galėtų būti naudojamos. Aptariama ir dantų tilto
                    kaina, priklausanti nuo atkuriamų dantų skaičiaus, tvirtinimo būdo, medžiagos ir papildomo
                    gydymo poreikio.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Atraminių dantų arba implantų paruošimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Jei tiltas tvirtinamas ant natūralių dantų, atraminiai dantys paruošiami protezavimui taikant
                    vietinę nejautrą. Jei tiltas tvirtinamas ant implantų, pirmiausia atliekamas implantacijos ir
                    gijimo etapas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Skaitmeninis skenavimas arba atspaudai</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kad tiltas būtų tikslus, užfiksuojama paciento burnos anatomija naudojant skaitmeninį skenavimą
                    arba tradicinius atspaudus. Šie duomenys perduodami dantų technikų laboratorijai.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Tilto gamyba</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dantų technikų laboratorijoje gaminamas individualus dantų tiltas. Parenkama dantų forma,
                    spalva, medžiaga ir konstrukcija, siekiant, kad protezas natūraliai derėtų prie paciento
                    šypsenos.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">06</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Pritaikymas ir fiksavimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pagamintas tiltas pamatuojamas burnoje, įvertinamas jo prigludimas, spalva, forma, sąkandis ir
                    paciento pojūtis. Jei viskas tinka, tiltas fiksuojamas ir paaiškinama, kaip jį prižiūrėti.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* DUK */}
          <motion.section id="duk" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Dažniausiai užduodami klausimai apie dantų tiltus</h2>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Ar dantų tiltas yra išimamas?</h3>
                  <p className="text-slate-600 text-sm">Dažniausiai ne. Dantų tiltas yra fiksuotas protezas, kuris pritvirtinamas ant atraminių dantų arba implantų ir kasdien nėra išimamas iš burnos. Jei protezas yra ant implantų, prireikus jį gali nuimti gydytojas.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Ar dedant dantų tiltą reikia šlifuoti gretimus dantis?</h3>
                  <p className="text-slate-600 text-sm">Jei tiltas tvirtinamas ant natūralių dantų, atraminiai dantys dažniausiai turi būti paruošiami. Jei tiltas tvirtinamas ant implantų, gretimų sveikų dantų šlifuoti nereikia. Dėl šios priežasties prieš gydymą svarbu aptarti visas galimas alternatyvas.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Ar dantų tiltas atrodo natūraliai?</h3>
                  <p className="text-slate-600 text-sm">Taip, tinkamai parinkus medžiagą, spalvą ir formą, dantų tiltas gali atrodyti natūraliai ir derėti prie paciento šypsenos. Estetikai ypač svarbi individuali dantų forma, spalvos parinkimas ir tikslus protezo pritaikymas.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Nuo ko priklauso dantų tiltų kainos?</h3>
                  <p className="text-slate-600 text-sm">Dantų tilto kaina ir dantų tiltų kainos priklauso nuo atkuriamų dantų skaičiaus, pasirinktos medžiagos, tvirtinimo būdo, atraminių dantų ar implantų būklės ir papildomo gydymo poreikio. Tiksli kaina nustatoma konsultacijos metu, sudarius individualų gydymo planą.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Kiek dantų galima atkurti dantų tiltu?</h3>
                  <p className="text-slate-600 text-sm">Tai priklauso nuo atraminių dantų ar implantų skaičiaus, jų stabilumo, sąkandžio ir bendros burnos būklės. Kuo ilgesnė tilto konstrukcija, tuo svarbesnis tikslus planavimas ir tinkamas apkrovos paskirstymas.</p>
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
                  Renkantis dantų tiltą svarbu ne tik atkurti trūkstamus dantis, bet ir užtikrinti, kad protezas
                  būtų patogus, estetiškas ir saugus ilgalaikėje perspektyvoje. Bangų odontologijos klinikoje
                  Klaipėdoje dantų tiltai planuojami individualiai, įvertinus paciento dantų, dantenų, sąkandžio ir
                  bendrą burnos būklę.
                </p>
                <p>
                  Klinikoje didelis dėmesys skiriamas tiksliam gydymo planavimui. Prieš pradedant protezavimą
                  aptariama, ar konkrečiu atveju tinkamesnis dantų tiltas ant natūralių dantų, tiltas ant implantų
                  ar kitas dantų atkūrimo sprendimas. Pacientui aiškiai paaiškinama gydymo eiga, galimos medžiagos,
                  paruošiamieji etapai ir būsima protezo priežiūra.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiama, kad dantų atkūrimas būtų ne tik funkcionalus, bet ir
                  natūraliai derėtų prie paciento šypsenos. Po protezavimo pacientui suteikiamos aiškios
                  rekomendacijos dėl kasdienės higienos, profilaktinių vizitų ir tilto apsaugos nuo per didelės
                  apkrovos, kad pasiektas rezultatas būtų kuo ilgaamžiškesnis.
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
