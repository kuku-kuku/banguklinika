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
  { id: 'kas-yra', label: 'Kas yra fluoravimas?' },
  { id: 'kada-verta', label: 'Kada verta rinktis?' },
  { id: 'procesas', label: 'Kaip vyksta procedūra?' },
  { id: 'rezultatai', label: 'Ko tikėtis po procedūros?' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function DantuFluoravimas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/dantu-fluoravimas/#service",
    "name": "Dantų fluoravimas Klaipėdoje",
    "serviceType": "Dantų fluoravimas",
    "description": "Profesionalus dantų fluoravimas (dantų padengimas fluoro laku) Bangų odontologijos klinikoje Klaipėdoje.",
    "url": "https://www.banguklinika.lt/paslaugos/dantu-fluoravimas/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Dantų fluoravimas Klaipėdoje - Bangų klinika"
        description="Dantų fluoravimas Klaipėdoje – emalio stiprinimas fluoro laku Bangų odontologijos klinikoje. 1 dantis – 10€.⏩Registruokitės profilaktinei procedūrai."
        keywords="dantu fluoravimas, fluoro lakas, danties emalio stiprinimas, eduonies profilaktika, klaipeda"
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
              Dantų fluoravimas Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Dantų emalį kasdien veikia burnos bakterijų gaminamos rūgštys, maistas, gėrimai ir individualūs
                  burnos priežiūros įpročiai. Rūgščių poveikio metu iš emalio gali pasišalinti dalis mineralų – šis
                  procesas vadinamas demineralizacija. Jei mineralų netenkama daugiau, nei jų grįžta į danties
                  paviršių, emalis tampa mažiau atsparus rūgščių poveikiui, o dantų ėduonies rizika didėja.
                </p>
                <p className="mb-4">
                  Viena iš profesionalios ėduonies profilaktikos priemonių yra dantų fluoravimas. Vietiškai naudojami
                  fluoridai padeda didinti emalio atsparumą rūgštims ir palaiko remineralizaciją – mineralų grįžimą į
                  ankstyvai pažeistą danties paviršių.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje fluoravimo poreikis vertinamas individualiai, atsižvelgiant
                  į dantų ir dantenų būklę, burnos higieną, ankstesnius ėduonies pažeidimus, seilėtekį, mitybos
                  įpročius ir galimą dantų jautrumą. Procedūros metu ant dantų paviršiaus užtepama profesionaliam
                  naudojimui skirta fluoro priemonė, dažniausiai fluoro lakas.
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
                      Dantų fluoravimo kainos
                    </h2>
                    <p className="text-slate-600">
                      Dantų fluoravimo kaina priklauso nuo apdorojamų dantų skaičiaus ir naudojamos priemonės. Tiksli
                      kaina nustatoma įvertinus klinikinę situaciją.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Dantų fluoravimas</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['1 dantis', '10 €'],
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
                  Tiksli dantų fluoravimo Klaipėdoje kaina aptariama individualios konsultacijos metu, atsižvelgiant į
                  konkrečią klinikinę situaciją.
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
                <div className="relative lg:aspect-[4/5] bg-sky-50 min-h-[300px]">                  <img
                    src="/team/Jonas-light.jpg"
                    alt="Bangų odontologijos klinikos gydytojas"
                    className="absolute inset-0 w-full h-full object-cover lg:object-contain"
                  loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,transparent_15%)] hidden lg:block" />
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra dantų fluoravimas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų fluoravimas – tai procedūra, kurios metu dantų paviršiai padengiami fluoro turinčia priemone.
                  Klinikoje gali būti naudojamas fluoro lakas, gelis ar kita profesionaliam naudojimui skirta medžiaga.
                  Priemonė parenkama pagal paciento amžių, burnos būklę, ėduonies riziką ir procedūros tikslą.
                </p>
                <p>
                  Vietiškai naudojami fluoridai pirmiausia veikia danties paviršių. Jie padeda mažinti mineralų
                  netekimą rūgščių poveikio metu ir sudaro palankesnes sąlygas mineralams grįžti į ankstyvai pažeistas
                  emalio vietas. Tai ypač svarbu tada, kai danties paviršiuje matomi pradiniai demineralizacijos
                  požymiai, tačiau dar nėra susiformavusi ertmė.
                </p>
                <p>
                  Fluoro lakas ant dantų užtepamas plonu sluoksniu. Jis trumpam prilimpa prie emalio ir palaipsniui
                  išskiria fluoridus. Procedūrai nereikia gręžimo ar vietinės nejautros, todėl ji gali būti atliekama
                  tiek vaikams, tiek suaugusiesiems.
                </p>
                <p>
                  Svarbu suprasti, kad fluoravimas nėra aktyvaus ėduonies gydymo alternatyva. Jei dantyje jau
                  susiformavusi ertmė, atsirado skausmas, infekcija ar kita gydymo reikalaujanti būklė, pirmiausia
                  sudaromas atskiras odontologinio gydymo planas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA VERTA */}
          <motion.section id="kada-verta" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada verta rinktis dantų fluoravimą?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų fluoravimas gali būti rekomenduojamas pacientams, kuriems nustatyta didesnė ėduonies rizika.
                Sprendimas priimamas ne vien pagal amžių, bet ir pagal individualius burnos sveikatos veiksnius.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Dantų padengimas fluoro laku gali būti svarstomas, kai:</h3>

                <div className="grid gap-3">
                  {[
                    'dažnai atsiranda naujų ėduonies pažeidimų',
                    'matomos pradinės emalio demineralizacijos sritys',
                    'dantų paviršius sunku tinkamai išvalyti',
                    'pacientas nešioja breketus ar kitus ortodontinius aparatus',
                    'sumažėjęs seilėtekis arba jaučiamas burnos sausumas',
                    'yra atsidengusių dantų kaklelių ar šaknų paviršių',
                    'nustatytas padidėjęs dantų jautrumas',
                    'vaikui ar suaugusiajam nustatyta padidėjusi ėduonies rizika'
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Vaikams fluoro lakas gali būti naudojamas tiek pieniniams, tiek nuolatiniams dantims. Procedūra
                  ypač aktuali, kai burnos higiena nepakankama, jau yra buvę ėduonies pažeidimų arba sunku išvalyti
                  dygstančius nuolatinius dantis.
                </p>
                <p>
                  Suaugusiesiems fluoravimas taip pat gali būti naudingas esant burnos sausumui, atsidengusiems šaknų
                  paviršiams, pasikartojančiam ėduoniui ar padidėjusiam dantų jautrumui.
                </p>
                <p>
                  Fluoravimo dažnumas parenkamas individualiai. Didesnės ėduonies rizikos pacientams procedūra gali
                  būti rekomenduojama dažniau, o mažos rizikos pacientams profesionalios fluoro aplikacijos gali
                  reikėti rečiau arba visai nereikėti.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip vyksta fluoravimo procedūra klinikoje?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų fluoravimas yra trumpa procedūra, tačiau prieš ją svarbu įvertinti burnos būklę ir parinkti
                tinkamą priemonę.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Dantų ir emalio būklės įvertinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Gydytojas odontologas arba burnos higienistas apžiūri dantis, dantenas, esamas restauracijas ir
                    galimas emalio demineralizacijos vietas. Įvertinama burnos higiena, ankstesni ėduonies pažeidimai,
                    jautrumas, seilėtekis ir kiti rizikos veiksniai.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Dantų paviršių paruošimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dantų paviršiai apžiūrimi ir prireikus nuvalomi bei nusausinami. Jei burnoje yra daug apnašų ar
                    dantų akmenų, gali būti rekomenduojama profesionali burnos higiena. Atskirai poliruoti dantis prieš
                    kiekvieną fluoro aplikaciją nebūtina.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Fluoro priemonės parinkimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Fluoro lakas, gelis ar kita priemonė parenkama pagal paciento amžių, ėduonies riziką, dantų būklę
                    ir procedūros tikslą. Taip pat atsižvelgiama į konkretaus produkto sudėtį bei galimas alergijas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Fluoro lako užtepimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Nedideliu šepetėliu fluoro lakas plonu sluoksniu užtepamas ant pasirinktų arba visų dantų
                    paviršių. Priemonė greitai prilimpa prie emalio ir pradeda palaipsniui išskirti fluoridus.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Individualios priežiūros rekomendacijos</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Po procedūros pacientui paaiškinama, kada galima valgyti, gerti ir valytis dantis. Rekomendacijos
                    gali skirtis priklausomai nuo naudotos priemonės, todėl svarbu vadovautis klinikoje pateiktais
                    nurodymais.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* REZULTATAI */}
          <motion.section id="rezultatai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kokių rezultatų galima tikėtis po fluoravimo?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų fluoravimo tikslas – padėti emaliui tapti atsparesniam rūgščių poveikiui ir mažinti ėduonies
                  riziką. Procedūra gali prisidėti prie ankstyvų, dar ertmės nesudariusių emalio pažeidimų kontrolės,
                  tačiau rezultatas priklauso ir nuo kasdienės burnos higienos, mitybos, seilėtekio bei bendros
                  ėduonies rizikos.
                </p>
                <p>
                  Kai kuriais atvejais fluoro lakas gali padėti sumažinti atsidengusių dantų kaklelių ar šaknų
                  jautrumą. Vis dėlto jautrumo priežastį pirmiausia būtina nustatyti, nes jį gali sukelti dantenų
                  atsitraukimas, dantų įtrūkimai, kariesas ar kitos būklės.
                </p>
                <p>
                  Po fluoro lako aplikacijos ant dantų kurį laiką gali būti juntama plona, lipnesnė ar šiurkštesnė
                  plėvelė. Kai kurios priemonės gali laikinai suteikti dantų paviršiui gelsvesnį atspalvį. Šis poveikis
                  išnyksta lakui palaipsniui pasišalinus.
                </p>
                <p>
                  Fluoravimas nėra vienkartinė ilgalaikė apsauga. Geriausias profilaktinis rezultatas pasiekiamas
                  procedūrą derinant su kasdieniu dantų valymu fluoro turinčia pasta, tarpdančių priežiūra,
                  subalansuota mityba ir reguliariomis odontologo apžiūromis.
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
                  Dantų fluoravimas turėtų būti atliekamas tik įvertinus individualią paciento ėduonies riziką ir
                  burnos būklę. Bangų odontologijos klinikoje pirmiausia nustatoma, ar dantų padengimas fluoro laku
                  konkrečiu atveju yra tikslingas.
                </p>
                <p>
                  Mūsų specialistai įvertina dantų emalio būklę, dantenų sveikatą, burnos higieną, jautrumą, seilėtekį
                  ir kitus galimus ėduonies rizikos veiksnius. Pacientui paaiškinama procedūros paskirtis, galimi
                  pojūčiai ir tolesnės priežiūros rekomendacijos.
                </p>
                <p>
                  Prireikus fluoravimas derinamas su profesionalia burnos higiena, individualiomis dantų priežiūros
                  rekomendacijomis ar kitu reikalingu gydymu. Dėmesys skiriamas ne tik pačiai procedūrai, bet ir
                  ilgalaikei burnos ligų profilaktikai.
                </p>
                <p>
                  Ieškantiems profesionaliai atliekamo dantų fluoravimo Klaipėdoje, Bangų odontologijos klinika siūlo
                  individualiu burnos būklės įvertinimu pagrįstą procedūrą ir aiškų tolesnės priežiūros planą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis dantų fluoravimui Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu norite pasirūpinti dantų emalio atsparumu ar sumažinti ėduonies riziką, kviečiame registruotis
                  konsultacijai Bangų odontologijos klinikoje. Vizito metu bus įvertinta burnos būklė ir parinkta
                  tinkamiausia profilaktinė priemonė.
                </p>
                <p>
                  Registruokitės ir pasirūpinkite savo dantų sveikata laiku bei profesionaliai.
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
