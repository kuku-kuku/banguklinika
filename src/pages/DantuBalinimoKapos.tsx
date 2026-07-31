import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { TableOfContents } from '../components/TableOfContents'
import { useRef } from 'react'
import ReviewsCarousel from '../components/ReviewsCarousel'

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

const sectionWrap = 'mb-12 scroll-mt-36 2xl:scroll-mt-24'
const whiteCard = 'bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft'
const innerCard = 'bg-white p-5 rounded-xl border border-slate-200 shadow-sm'

const P  = '#002045'
const S  = '#006b5f'
const SL = '#ecf5fb'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

const tocSections = [
  { id: 'kainos', label: 'Kainos' },
  { id: 'kas-yra', label: 'Kas yra balinimas kapomis?' },
  { id: 'kam-tinka', label: 'Kam tinka?' },
  { id: 'procesas', label: 'Kaip vyksta procedūra?' },
  { id: 'ka-zinoti', label: 'Ką svarbu žinoti?' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function DantuBalinimoKapos() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/dantu-balinimo-kapos/#service",
    "name": "Dantų balinimo kapos Klaipėdoje",
    "serviceType": "Dantų balinimo kapos",
    "description": "Individualių dantų balinimo kapų gamyba ir balinimo planavimas Bangų odontologijos klinikoje Klaipėdoje.",
    "url": "https://www.banguklinika.lt/paslaugos/dantu-balinimo-kapos/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Dantų balinimo kapos Klaipėdoje - Bangų klinika"
        description="Individualios dantų balinimo kapos Klaipėdoje – planuojamas namų balinimas Bangų odontologijos klinikoje. Kaina nuo 200€ (be balinimo gelio).⏩Registruokitės konsultacijai."
        keywords="dantu balinimo kapos, individualios balinimo kapos, namu balinimas, opalescence, klaipeda"
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
              Dantų balinimo kapos Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Dantų spalva laikui bėgant gali keistis dėl natūralių senėjimo procesų, kavos, arbatos, tabako,
                  dažančių maisto produktų ar kitų kasdienių įpročių. Kai norima palaipsniui pašviesinti natūralių
                  dantų atspalvį ir procedūrą atlikti namuose, vienas iš galimų sprendimų yra individualios dantų
                  balinimo kapos.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje balinimas kapomis planuojamas individualiai, pirmiausia
                  įvertinus dantų, dantenų, plombų ir kitų restauracijų būklę. Pagal paciento dantų formą pagamintos
                  kapos padeda tolygiai paskirstyti balinamąją priemonę ir sumažinti jos patekimą ant dantenų.
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
                      Dantų balinimo kapų kainos
                    </h2>
                    <p className="text-slate-600">
                      Balinimo kapų kaina priklauso nuo pasirinktos sistemos, individualių kapų gamybos, balinamosios
                      priemonės ir reikalingų vizitų. Todėl tiksli dantų balinimo kapų kaina nustatoma po konsultacijos
                      ir burnos būklės įvertinimo.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Dantų balinimo kapos</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Individualios balinimo kapos (be balinimo gelio)', 'nuo 200 €'],
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
                  Tiksli dantų balinimo kapų Klaipėdoje kaina aptariama individualios konsultacijos metu, atsižvelgiant
                  į konkrečią klinikinę situaciją.
                </p>
              </div>
            </motion.section>
          </motion.header>

          {/* DOCTOR CTA */}
          <motion.div className="mt-8 mb-12" variants={item}>
            <div className="bg-white rounded-[28px] border border-sky-200 shadow-soft overflow-hidden">
              <div className="grid lg:grid-cols-[5fr_4fr] gap-0 items-stretch">
                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-darkblue-700 mb-4">
                    Kviečiame registruotis konsultacijai Bangų klinikoje
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Jeigu turite klausimų ar norite sužinoti daugiau apie gydymo galimybes, kviečiame registruotis
                    konsultacijai Bangų odontologijos klinikoje. Vizito metu įvertinsime Jūsų burnos būklę, atsakysime
                    į rūpimus klausimus ir padėsime suprasti visą gydymo eigą.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų odontologijos klinikoje siekiame, kad kiekvienas pacientas jaustųsi užtikrintai – nuo pirmosios
                    konsultacijos iki galutinio rezultato. Registruokitės ir ženkite pirmą žingsnį link sveikos šypsenos.
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

          {/* REVIEWS */}
          <motion.div className="mb-10 no-x-scroll pan-y" variants={item}>
            <ReviewsCarousel />
          </motion.div>

          {/* KAS YRA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra dantų balinimas kapomis?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų balinimas kapomis – tai namuose atliekama estetinė procedūra, kurios metu į individualiai
                  pagamintas kapas dedamas nedidelis gydytojo parinktos balinamosios priemonės kiekis. Kapos uždedamos
                  ant dantų ir nešiojamos nustatytą laiką dieną arba naktį, atsižvelgiant į konkretaus produkto
                  naudojimo režimą.
                </p>
                <p>
                  Balinamosiose priemonėse dažniausiai naudojami vandenilio arba karbamido peroksido junginiai. Jie
                  veikia danties audiniuose esančias spalvą lemiančias medžiagas, todėl natūralus dantų atspalvis
                  palaipsniui šviesėja.
                </p>
                <p>
                  Individualios kapos balinimui gaminamos pagal konkretaus paciento dantų lanką. Jos turi tiksliai
                  priglusti, būti patogios ir išlaikyti balinamąją priemonę reikiamoje vietoje. Didesnis gelio kiekis
                  rezultato nepagreitina, tačiau gali ištekėti ant dantenų ir jas sudirginti.
                </p>
                <p>
                  Svarbu žinoti, kad dantų balinimo kapos keičia tik natūralių dantų spalvą. Plombos, vainikėliai,
                  laminatės, tiltai ir kitos restauracijos nebalsta. Jei jos yra matomoje šypsenos zonoje, po balinimo
                  gali atsirasti spalvos skirtumas, todėl tai aptariama dar prieš procedūrą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAM TINKA */}
          <motion.section id="kam-tinka" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kam tinka dantų balinimo kapos?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
                <p>
                  Balinimo kapos gali būti tinkamos pacientams, norintiems palaipsniui pašviesinti natūralių dantų
                  atspalvį ir procedūrą atlikti patogiu metu namuose. Šis metodas dažnai pasirenkamas, kai dantys
                  patamsėję dėl maisto, gėrimų, tabako ar natūralių amžinių pokyčių.
                </p>
                <p>
                  Prieš balinimą gydytojas įvertina, ar nėra aktyvaus karieso, nesandarių plombų, dantenų uždegimo,
                  įtrūkimų ar ryškaus dantų jautrumo. Jei ant dantų susikaupę pigmentinių apnašų ar akmenų, gali būti
                  rekomenduojama profesionali burnos higiena. Pašalinus paviršines apnašas galima tiksliau įvertinti
                  natūralų dantų atspalvį ir tolygiau planuoti balinimą.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Dantų balinimą gali reikėti atidėti, jei:</h3>

                <div className="grid gap-3">
                  {[
                    'burnoje yra negydytų ėduonies pažeidimų',
                    'dantenos kraujuoja ar yra stipriai uždegusios',
                    'nustatytas ryškus dantų jautrumas',
                    'yra nesandarių restauracijų ar dantų įtrūkimų',
                    'pacientas laukiasi arba maitina krūtimi',
                    'balinamosios priemonės negalima saugiai naudoti pagal instrukcijas'
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Ne visi spalvos pokyčiai į balinimą reaguoja vienodai. Jei patamsėjęs vienas anksčiau šaknų kanalais
                  gydytas dantis, išorinės balinimo kapos gali nesuteikti tolygaus rezultato. Tokiu atveju gali būti
                  svarstomas vidinis danties balinimas arba kitas estetinis sprendimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip vyksta dantų balinimas kapomis?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Balinimas kapomis atliekamas keliais nuosekliais etapais.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Burnos būklės įvertinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Apžiūrimi dantys, dantenos ir esamos restauracijos. Įvertinama pradinė dantų spalva, jautrumas ir
                    paciento lūkesčiai. Jei nustatomos burnos ligos, pirmiausia sudaromas jų gydymo planas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Dantų atspaudų arba skaitmeninio vaizdo gavimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kad kapos tiksliai atitiktų dantų formą, paimami tradiciniai atspaudai arba atliekamas skaitmeninis
                    skenavimas. Pagal gautus duomenis sukuriamas dantų modelis.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Individualių balinimo kapų gamyba</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pagaminamos plonos ir skaidrios kapos. Vizito metu patikrinama, ar jos patogios, nespaudžia
                    dantenų, lengvai užsideda ir stabiliai laikosi ant dantų.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Balinamosios priemonės naudojimas namuose</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pacientui parodoma, kiek priemonės dėti į kapas, kaip jas užsidėti ir kiek laiko nešioti. Balinimo
                    laikotarpis gali trukti nuo kelių dienų iki kelių savaičių, tačiau jo nereikėtų savarankiškai
                    ilginti. Tikslus režimas priklauso nuo produkto koncentracijos ir dantų reakcijos.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Rezultato įvertinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Po rekomenduoto balinimo laikotarpio gali būti atliekama kontrolinė apžiūra. Įvertinamas pasiektas
                    atspalvis, jautrumas ir tolesnės priežiūros poreikis.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Galutinis rezultatas priklauso nuo pradinės dantų spalvos, pigmentacijos pobūdžio ir individualių
                dantų audinių savybių. Todėl tikslus pašviesėjimo laipsnis negali būti garantuojamas iš anksto.
              </p>
            </div>
          </motion.section>

          {/* KĄ SVARBU ŽINOTI */}
          <motion.section id="ka-zinoti" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Ką svarbu žinoti balinant dantis namuose?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Balinimo kapas ir priemonę reikia naudoti tik pagal gydytojo pateiktas rekomendacijas. Ilgesnis
                  nešiojimas ar didesnis gelio kiekis nebūtinai pagerina rezultatą, tačiau gali padidinti jautrumo ir
                  dantenų sudirginimo riziką.
                </p>
                <p>
                  Laikinas jautrumas šalčiui ar šilumai yra vienas dažniausių šalutinių poveikių. Jei jis ryškus, gali
                  būti rekomenduojama daryti pertraukas, keisti naudojimo režimą ar naudoti jautrumą mažinančias
                  priemones. Atsiradus stipriam skausmui ar ilgai išliekančiam dantenų dirginimui, balinimą reikėtų
                  nutraukti ir kreiptis į kliniką.
                </p>
                <p>
                  Po kiekvieno naudojimo kapos išplaunamos vėsiu arba drungnu vandeniu ir laikomos dėžutėje. Karšto
                  vandens bei agresyvių valymo priemonių reikėtų vengti, nes kapos gali deformuotis ar būti pažeistos.
                </p>
                <p>
                  Balinimo laikotarpiu verta riboti dažnai vartojamus stipriai pigmentuojančius produktus, pavyzdžiui,
                  kavą, arbatą, raudonąjį vyną ir tabaką. Svarbiausia laikytis konkrečiai balinimo sistemai pateiktų
                  rekomendacijų.
                </p>
                <p>
                  „Opalescence“ balinimo kapos ir kitos profesionalios namų balinimo sistemos gali turėti skirtingas
                  koncentracijas bei naudojimo režimus. Todėl priemonės nereikėtų rinktis vien pagal pavadinimą ar
                  internete rastus patarimus.
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
                  Dantų balinimas turėtų būti planuojamas įvertinus ne tik pageidaujamą spalvą, bet ir bendrą burnos
                  būklę. Bangų odontologijos klinikoje pirmiausia nustatoma, ar balinimas pacientui tinkamas ir kokio
                  rezultato galima pagrįstai tikėtis.
                </p>
                <p>
                  Mūsų specialistai įvertina natūralių dantų spalvą, restauracijas, jautrumą ir dantenų būklę. Pacientui
                  paaiškinama, kaip naudoti kapas, kiek balinamosios priemonės dėti, kiek laiko jas nešioti ir kaip
                  elgtis atsiradus jautrumui.
                </p>
                <p>
                  Balinimo kapų kaina priklauso nuo pasirinktos sistemos, individualių kapų gamybos, balinamosios
                  priemonės ir reikalingų vizitų. Todėl tiksli dantų balinimo kapų kaina nustatoma po konsultacijos ir
                  burnos būklės įvertinimo.
                </p>
                <p>
                  Ieškantiems individualių balinimo kapų Klaipėdoje, Bangų odontologijos klinika siūlo profesionaliai
                  suplanuotą balinimą, aiškias naudojimo rekomendacijas ir paciento burnos būklei pritaikytą gydymo
                  planą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis dantų balinimo kapų konsultacijai Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu svarstote apie dantų balinimą namuose, kviečiame registruotis konsultacijai Bangų odontologijos
                  klinikoje. Vizito metu bus įvertinta Jūsų burnos būklė, aptartos galimos gydymo alternatyvos ir
                  parinktas tinkamiausias balinimo režimas.
                </p>
                <p>
                  Registruokitės ir pasirūpinkite savo šypsena profesionaliai.
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
