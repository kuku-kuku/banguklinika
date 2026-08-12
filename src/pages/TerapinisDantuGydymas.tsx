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
  { id: 'kas-yra', label: 'Kas yra terapinis dantų gydymas?' },
  { id: 'kada-reikalingas', label: 'Kada reikalingas gydymas?' },
  { id: 'problemos', label: 'Sprendžiamos problemos' },
  { id: 'procesas', label: 'Kaip atliekamas gydymas?' },
  { id: 'kodel-svarbu', label: 'Kodėl svarbu gydyti laiku?' },
  { id: 'po-gydymo', label: 'Ką žinoti po gydymo?' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function TerapinisDantuGydymas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/terapinis-dantu-gydymas/#service",
    "name": "Terapinis dantų gydymas Klaipėdoje",
    "serviceType": "Terapinis dantų gydymas",
    "description": "Terapinis dantų (karieso) gydymas Bangų odontologijos klinikoje Klaipėdoje. Ėduonies diagnostika ir gydymas, dantų plombavimas, senų restauracijų keitimas, nuskilusių dantų atkūrimas ir jautrumo gydymas.",
    "url": "https://www.banguklinika.lt/paslaugos/terapinis-dantu-gydymas/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Terapinis dantų gydymas (karieso) Klaipėdoje nuo 110€"
        description="Terapinis dantų gydymas Klaipėdoje – karieso gydymas☑️plombavimas☑️nuskilusių dantų atkūrimas Bangų klinikoje.⏩Registruokitės konsultacijai jau šiandien."
        keywords="terapinis dantu gydymas, karieso gydymas, dantu plombavimas, dantu jautrumas, klaipeda"
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
              Terapinis dantų gydymas Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Danties jautrumas, skausmas kramtant, patamsėjusi vieta emalyje, nuskilęs danties kraštas ar
                  nusidėvėjusi plomba gali būti pirmieji požymiai, kad danties audiniams reikalingas gydymas. Net ir
                  nedidelis pažeidimas laikui bėgant gali plėstis, todėl svarbu dantų būklę įvertinti kuo anksčiau,
                  kol galima išsaugoti daugiau sveikų audinių ir išvengti sudėtingesnių procedūrų. Terapinis dantų
                  gydymas apima dantų ėduonies, dar vadinamo kariesu, diagnostiką ir gydymą, pažeistų dantų
                  plombavimą, senų restauracijų keitimą, nedidelių nuskilimų atkūrimą bei dantų jautrumo priežasčių
                  įvertinimą.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje kiekvienas atvejis vertinamas individualiai. Gydymo
                  sprendimas parenkamas atsižvelgiant į pažeidimo gylį, likusių danties audinių kiekį, sąkandį,
                  ankstesnių restauracijų būklę ir paciento jaučiamus simptomus. Mūsų klinikoje siekiama ne tik
                  pašalinti pažeistus audinius, bet ir tiksliai atkurti danties formą, kramtymo funkciją, kontaktą su
                  gretimais dantimis bei estetinį vientisumą.
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
                      Terapinio dantų gydymo kainos
                    </h2>
                    <p className="text-slate-600">
                      Terapinio dantų gydymo kaina priklauso nuo pažeidimo dydžio, gydomo danties vietos, restauracijos
                      apimties, naudojamų medžiagų ir papildomų diagnostinių procedūrų poreikio. Tiksli gydymo apimtis
                      ir kaina nustatomos įvertinus danties būklę konsultacijos metu.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Terapinis dantų gydymas</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Terapinis dantų (karieso) gydymas', '110–170 €'],
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
                  Tiksli terapinio dantų gydymo Klaipėdoje kaina aptariama individualios konsultacijos metu,
                  atsižvelgiant į konkrečią klinikinę situaciją. Skaidri kainodara ir profesionalus požiūris leidžia
                  pacientams jaustis užtikrintai ir priimti informuotą sprendimą.
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
                <div className="relative bg-sky-50">
                  <img
                    src="/team/Jonas-light.jpg"
                    alt="Bangų odontologijos klinikos gydytojas"
                    className="w-full lg:absolute lg:inset-0 lg:h-full object-contain"
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra terapinis dantų gydymas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Terapinis dantų gydymas – tai odontologijos sritis, skirta natūralių dantų ligų ir pažeidimų
                  diagnostikai, konservatyviam gydymui bei atkūrimui. Pagrindinis tokio gydymo tikslas – sustabdyti
                  pažeidimo progresavimą, išsaugoti kuo daugiau sveikų danties audinių ir grąžinti danties funkciją.
                </p>
                <p>
                  Dantį sudaro keli skirtingi audiniai. Išorinį paviršių dengia emalis, po juo yra minkštesnis
                  dentinas, o danties viduje – pulpa, kurioje yra nervai ir kraujagyslės. Kol ėduonies ar traumos
                  sukeltas pažeidimas apsiriboja emaliu ir dentinu, dantį dažniausiai galima gydyti terapiniais
                  metodais. Jei infekcija pasiekia pulpą ir sukelia negrįžtamą jos uždegimą, gali prireikti
                  endodontinio, arba šaknų kanalų, gydymo.
                </p>
                <p>
                  Terapinio gydymo metu pažeisti, suminkštėję ar nepatikimi danties audiniai pašalinami, o susidaręs
                  defektas atkuriamas plombine medžiaga. Restauracija formuojama atsižvelgiant į natūralią danties
                  anatomiją, kramtymo apkrovą ir sąkandį. Priekinių dantų srityje papildomai derinama spalva, forma
                  ir skaidrumas, kad atkurtas dantis kuo natūraliau įsilietų į bendrą šypseną.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA REIKALINGAS */}
          <motion.section id="kada-reikalingas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada reikalingas terapinis dantų gydymas?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Terapinis dantų gydymas gali būti reikalingas tada, kai danties emalį ar dentiną pažeidžia ėduonis,
                trauma, nusidėvėjimas arba pakitimai aplink seną restauraciją. Gydymo poreikis priklauso ne tik nuo
                jaučiamo skausmo, todėl svarbu atkreipti dėmesį ir į mažiau ryškius požymius.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Į odontologą rekomenduojama kreiptis, jei:</h3>

                <div className="grid gap-3">
                  {[
                    'dantis tapo jautrus šalčiui, karščiui, saldžiam ar rūgščiam maistui',
                    'jaučiamas skausmas kramtant ar sukandus dantis',
                    'ant danties pastebima tamsi, rusva arba balkšva dėmė',
                    'matoma ertmė, įdubimas ar nelygus danties paviršius',
                    'nuskilo danties kraštas arba dalis plombos',
                    'sena plomba pakeitė spalvą, tapo šiurkšti ar prarado sandarumą',
                    'tarp dantų nuolat stringa maistas',
                    'dantų siūlas plyšta ar užsikabina ties plombos kraštu',
                    'po traumos pasikeitė danties spalva ar atsirado jautrumas',
                    'jaučiamas neįprastas spaudimas ar diskomfortas konkrečioje danties srityje'
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
                  Kai kurie ėduonies pažeidimai, ypač esantys tarpdančiuose ar po senomis restauracijomis, gali būti
                  nematomi plika akimi. Tokiais atvejais juos padeda nustatyti klinikinė apžiūra ir radiologiniai
                  tyrimai. Kuo anksčiau pažeidimas nustatomas, tuo mažesnės apimties gydymo dažniausiai pakanka.
                  Nedidelę ertmę galima atkurti išsaugant didesnę natūralaus danties dalį. Pažeidimui progresuojant,
                  dantis silpnėja, didėja pulpos uždegimo, skilimo ir sudėtingesnio atkūrimo rizika.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROBLEMOS */}
          <motion.section id="problemos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kokios problemos sprendžiamos terapinio gydymo metu?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Terapinis dantų gydymas apima kelias dažniausiai atliekamas procedūras. Konkretus sprendimas
                parenkamas tik įvertinus danties būklę, pažeidimo dydį, vietą ir galimą ilgalaikę prognozę.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Dantų ėduonies gydymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dantų ėduonis, arba kariesas, yra kietųjų danties audinių pažeidimas, susijęs su apnašose esančių
                    bakterijų gaminamų rūgščių poveikiu. Pradinėje stadijoje emalio paviršiuje gali atsirasti balkšvas
                    ar tamsesnis pokytis, o procesui progresuojant susiformuoja ertmė. Gydymo metu pašalinami ėduonies
                    pažeisti audiniai, ertmė išvaloma ir atkuriama plombine medžiaga.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Dantų plombavimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dantų plombavimas atliekamas siekiant atkurti po ėduonies gydymo, traumos ar nusidėvėjimo prarastą
                    danties dalį. Šiuolaikinės kompozicinės medžiagos derinamos prie natūralios danties spalvos ir
                    sluoksniuojamos taip, kad būtų atkuriama ne tik išvaizda, bet ir funkcija – danties gumburai,
                    vagelės ir kontaktas su gretimu dantimi.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Senų plombų keitimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Plomba neturėtų būti keičiama vien todėl, kad yra sena. Pirmiausia įvertinamas jos sandarumas,
                    kraštų būklė, nusidėvėjimas, įtrūkimai ir aplinkinių danties audinių būklė. Restauraciją gali būti
                    rekomenduojama keisti, jei ji nuskilusi, praradusi sandarumą, tapusi per aukšta arba aplink ją
                    išsivystė antrinis ėduonis.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Nuskilusių dantų atkūrimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dantis gali nuskilti dėl traumos, kieto maisto, bruksizmo, didelės plombos ar susilpnėjusių
                    audinių. Nedideli nuskilimai dažnai atkuriami kompozicine medžiaga, parenkant formą ir spalvą pagal
                    gretimus dantis. Jei prarasta didelė danties dalis, gali būti svarstomas keramikinis užklotas,
                    vainikėlis ar kitas protezavimo sprendimas.
                  </p>
                </div>

                <div className={innerCard + ' md:col-span-2'}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Dantų jautrumo gydymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dantų jautrumą gali sukelti ėduonis, emalio nusidėvėjimas, atsitraukusios dantenos, įtrūkimas,
                    nesandari plomba ar per didelė sąkandžio apkrova. Todėl pirmiausia būtina nustatyti tikslią
                    jautrumo priežastį. Priklausomai nuo situacijos, gali būti atliekamas pažeistos vietos
                    plombavimas, esamos restauracijos korekcija, naudojamos jautrumą mažinančios priemonės arba
                    rekomenduojamas kitos srities gydymas.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip atliekamas terapinis dantų gydymas klinikoje?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Terapinis dantų gydymas Bangų odontologijos klinikoje atliekamas nuosekliai, kad būtų tiksliai
                nustatyta problema, pašalinti pažeisti audiniai ir atkurtas patogus danties funkcionavimas.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Konsultacija ir diagnostika</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pirmiausia išklausomi paciento nusiskundimai ir atliekama burnos apžiūra. Vertinama dantų, plombų,
                    dantenų ir sąkandžio būklė. Prireikus atliekami radiologiniai tyrimai, padedantys nustatyti
                    tarpdančių ėduonį, pažeidimą po plomba ar jo artumą prie pulpos.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gydymo plano sudarymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Įvertinus tyrimų rezultatus, pacientui paaiškinama danties būklė, galimi gydymo metodai ir
                    prognozė. Jei pažeidimas per didelis patikimam plombavimui, aptariamos alternatyvos, galinčios
                    geriau apsaugoti likusius danties audinius.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Nuskausminimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kai procedūra gali sukelti jautrumą ar diskomfortą, taikoma vietinė nejautra. Dauguma terapinio
                    gydymo procedūrų, tinkamai nuskausminus gydomą sritį, atliekamos nejaučiant skausmo. Pacientas
                    gali jausti spaudimą, prisilietimą ar vibraciją, tačiau neturėtų jausti aštraus skausmo.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Pažeistų audinių pašalinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ėduonies pažeisti, suminkštėję ar nepatikimi audiniai pašalinami, stengiantis išsaugoti kuo daugiau
                    sveikos danties struktūros. Paruošta ertmė išvaloma ir pritaikoma būsimai restauracijai.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Danties atkūrimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dantis atkuriamas plombine medžiaga, dažniausiai ją dedant ir kietinant sluoksniais. Formuojama
                    natūrali danties anatomija, kontaktas su gretimais dantimis ir taisyklingas kramtomasis paviršius.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">06</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Sąkandžio patikrinimas ir poliravimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Užbaigus plombavimą patikrinama, ar restauracija netrukdo sukandimui. Prireikus atliekamos
                    nedidelės korekcijos. Plombos paviršius nupoliruojamas, kad būtų lygus, patogus ir mažiau kauptų
                    apnašas.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Vieno vizito trukmė priklauso nuo gydomų dantų skaičiaus, pažeidimo gylio ir restauracijos
                sudėtingumo. Nedidelis pažeidimas dažnai sutvarkomas per vieną vizitą, tačiau gydant kelis dantis ar
                sudėtingesnes restauracijas gali prireikti kelių apsilankymų.
              </p>
            </div>
          </motion.section>

          {/* KODĖL SVARBU LAIKU */}
          <motion.section id="kodel-svarbu" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kodėl svarbu pažeistus dantis gydyti laiku?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
                <p>
                  Dantų ėduonis ir kiti kietųjų audinių pažeidimai savaime neužgyja. Ankstyvoje stadijoje, kai emalio
                  paviršius dar nėra suiręs, odontologas gali rekomenduoti profilaktines priemones ir būklės stebėjimą.
                  Tačiau susiformavus ertmei, pažeisti audiniai turi būti profesionaliai įvertinti ir gydomi.
                </p>
                <p>
                  Negydomas ėduonis palaipsniui plinta į dentiną ir artėja prie pulpos. Iš pradžių pacientas gali
                  nejausti jokių simptomų, vėliau atsiranda jautrumas, skausmas kramtant ar ilgiau trunkanti reakcija į
                  temperatūrą. Infekcijai pažeidus pulpą, paprasto plombavimo gali nebeužtekti ir gali prireikti šaknų
                  kanalų gydymo.
                </p>
                <p>
                  Didėjant pažeidimui, silpnėja likusi danties struktūra. Plonos sienelės tampa jautresnės skilimui,
                  todėl danties ne visada galima patikimai atkurti didele plomba. Tokiu atveju gali būti reikalingas
                  keramikinis užklotas ar vainikėlis. Labai stipriai pažeisto danties kartais nebeįmanoma išsaugoti.
                </p>
              </div>

              <div className={innerCard}>
                <h3 className="font-semibold text-darkblue-700 mb-4">Laiku atliktas terapinis gydymas padeda:</h3>
                <ul className="space-y-3">
                  {[
                    'sustabdyti pažeidimo progresavimą',
                    'išsaugoti daugiau natūralių danties audinių',
                    'sumažinti skausmo ir pulpos uždegimo riziką',
                    'atkurti kramtymo funkciją',
                    'apsaugoti dantį nuo tolesnio skilimo',
                    'sumažinti sudėtingesnio gydymo tikimybę ateityje'
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Reguliarios profilaktinės apžiūros svarbios net ir nejaučiant simptomų. Jų metu galima pastebėti
                ankstyvą ėduonį, pakitusius plombų kraštus ar kitus pažeidimus, kurių pacientas dar nejaučia.
              </p>
            </div>
          </motion.section>

          {/* PO GYDYMO */}
          <motion.section id="po-gydymo" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Ką svarbu žinoti po terapinio dantų gydymo?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Po plombavimo dantis kurį laiką gali būti jautresnis šalčiui, karščiui ar kramtymo apkrovai.
                  Nestiprus ir palaipsniui mažėjantis jautrumas gali būti normali reakcija, ypač jei gydytas pažeidimas
                  buvo gilus. Tačiau stiprėjantis, savaiminis, pulsuojantis ar naktį atsirandantis skausmas nėra
                  įprastas, todėl tokiu atveju reikėtų kreiptis į odontologą.
                </p>
                <p>
                  Kol veikia vietinė nejautra, rekomenduojama atsargiai valgyti ir vengti labai karštų gėrimų. Dėl
                  sumažėjusio jutimo galima nepastebimai sukąsti skruostą, lūpą ar liežuvį. Sukietėjus kompozicinei
                  plombai, dantį dažniausiai galima naudoti įprastai, tačiau pirmąją dieną verta stebėti pojūčius
                  kramtant.
                </p>
                <p>
                  Jei atrodo, kad gydytas dantis sukandant kontaktuoja pirmas, jaučiamas spaudimas ar skausmas, gali
                  būti reikalinga nedidelė sąkandžio korekcija. Per aukštos restauracijos nereikėtų ignoruoti, nes
                  nuolatinė per didelė apkrova gali sukelti jautrumą ir turėti įtakos plombos ilgaamžiškumui.
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
                  Renkantis terapinio dantų gydymo paslaugas svarbu ne tik pašalinti pažeistus danties audinius, bet
                  ir tai, kaip tiksliai įvertinama danties būklė, parenkamas gydymo metodas ir atkuriama jo funkcija.
                  Bangų odontologijos klinikoje terapinis dantų gydymas atliekamas atsakingai, siekiant kuo ilgiau
                  išsaugoti natūralius dantis ir užtikrinti paciento komfortą viso gydymo metu.
                </p>
                <p>
                  Klinikoje dirbantys specialistai kiekvieną atvejį vertina individualiai, atsižvelgdami į pažeidimo
                  gylį, danties gyvybingumą, sąkandį, ankstesnių restauracijų būklę ir paciento nusiskundimus. Gydymo
                  metu stengiamasi išsaugoti kuo daugiau sveikų danties audinių, tiksliai atkurti jo anatomiją ir
                  užtikrinti, kad restauracija būtų patogi kramtant. Dėmesys skiriamas ne tik pačiai procedūrai, bet
                  ir aiškiam situacijos paaiškinimui, galimų gydymo alternatyvų aptarimui bei rekomendacijoms po
                  gydymo.
                </p>
                <p>
                  Pacientai vertina profesionalų bendravimą, ramų požiūrį ir aiškią gydymo eigą, kuri padeda jaustis
                  saugiai viso vizito metu. Todėl ieškantiems patikimo ir profesionalaus terapinio dantų gydymo
                  Klaipėdoje, Bangų odontologijos klinika yra patikimas pasirinkimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis terapiniam dantų gydymui Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu jaučiate dantų jautrumą, skausmą kramtant ar pastebėjote pakitimus ant dantų paviršiaus,
                  kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu bus įvertinta Jūsų
                  burnos būklė, aptartos galimos gydymo alternatyvos ir suplanuotas individualus gydymas.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiame, kad terapinis dantų gydymas būtų aiškus, kokybiškas ir kuo
                  mažiau keliantis streso. Čia Jūsų laukia patyrę specialistai, moderni įranga ir rūpestingas
                  požiūris į kiekvieną pacientą.
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
