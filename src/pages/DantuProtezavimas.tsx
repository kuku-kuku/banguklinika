import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { TableOfContents } from '../components/TableOfContents'
import { useRef } from 'react'

// Animacijų nustatymai
const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

// UI helper klasės
const sectionWrap = 'mb-12 scroll-mt-36 2xl:scroll-mt-24'
const whiteCard = 'bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft'
const innerCard = 'bg-white p-5 rounded-xl border border-slate-200 shadow-sm'

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
  { id: 'kas-yra', label: 'Kas yra protezavimas?' },
  { id: 'kada-reikalingas', label: 'Kada reikalingas?' },
  { id: 'cerec', label: '3D CEREC technologija' },
  { id: 'medziagos', label: 'Protezų medžiagos' },
  { id: 'implantai', label: 'Protezavimas ant implantų' },
  { id: 'procesas', label: 'Kaip vyksta protezavimas?' },
  { id: 'tarnaves', label: 'Kiek laiko tarnauja?' },
  { id: 'po-protezavimo', label: 'Po protezavimo' },
  { id: 'mitai', label: 'Mitai apie protezavimą' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' },
]

export default function DantuProtezavimas() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Dantų protezavimas',
    description:
      'Profesionalus dantų protezavimas Klaipėdoje. CEREC technologija, cirkonio keramika, protezavimas ant implantų.',
    provider: {
      '@type': 'Dentist',
      name: 'Bangų klinika',
    },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Dantų protezavimas Klaipėdoje - Bangų klinika"
        description="Profesionalus dantų protezavimas Klaipėdoje. 3D CEREC technologija, cirkonio keramika, bemetalė keramika ir protezavimas ant implantų. Prieinamos kainos."
        keywords="dantu protezavimas, cerec, cirkonio keramika, protezai, klaipeda, implantai"
        structuredData={structuredData}
      />

      <motion.div
        ref={pageRef}
        className="max-w-screen-2xl mx-auto px-8 xl:px-28 2xl:px-8 2xl:flex 2xl:gap-8 2xl:items-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <TableOfContents
          sections={tocSections}
          rootRef={pageRef}
          cta={{ label: 'Registruotis vizitui', to: '/kontaktai' }}
        />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Profesionalus ir prieinamas dantų protezavimas Klaipėdoje
            </h1>

            <div className="mb-8">
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Dantų netekimas ar stiprus jų pažeidimas gali turėti įtakos ne tik šypsenos
                  estetikai, bet ir kramtymo funkcijai, kalbai bei bendrai savijautai. Šiuolaikinė
                  odontologija leidžia efektyviai atkurti dantis, tačiau pacientams dažnai svarbus
                  ir kainos aspektas. Būtent todėl Bangų odontologijos klinikoje siekiama suderinti
                  aukštą gydymo kokybę, pažangias technologijas ir racionalią kainodarą.
                </p>
                <p className="mb-4">
                  Bangų odontologijos klinikoje Klaipėdoje atliekamas profesionalus dantų
                  protezavimas, neatsisakant profesionalumo ar estetikos. Naudojamos modernios
                  skaitmeninės technologijos, tokios kaip 3D CEREC sistema, leidžia optimizuoti
                  gydymo procesą, sumažinti laiko sąnaudas ir pasiūlyti pacientams patrauklius,
                  ilgalaikius sprendimus.
                </p>
                <p>
                  Kiekvienam pacientui parenkamas individualus protezavimo planas, atsižvelgiant į
                  poreikius, burnos būklę ir lūkesčius. Siekiame, kad dantų protezavimas būtų ne tik
                  estetiškas ir funkcionalus, bet ir aiškus, saugus bei komfortiškas procesas.
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <Link
                to="/kontaktai"
                className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Registruotis vizitui
              </Link>
            </div>

            {/* KAINOS */}
            <div id="kainos" className="mt-8 scroll-mt-36 2xl:scroll-mt-24">
              <div className="space-y-5">
                <div className="w-full">
                  <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                    Dantų protezavimo kainos
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Dantų protezavimo kaina priklauso nuo pasirinkto sprendimo, naudojamų medžiagų,
                    protezavimo technologijos ir individualios paciento burnos būklės. Bangų
                    odontologijos klinikoje kiekvienam pacientui sudaromas individualus protezavimo
                    planas.
                  </p>
                </div>

                <div className="w-full rounded-2xl border border-brand/20 bg-white shadow-soft overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    {/* KAIRĖ */}
                    <div className="lg:border-r lg:border-slate-200">
                      <div className="bg-brand-50/50 px-4 py-3 border-b border-slate-100 font-bold text-darkblue-700">
                        CEREC technologija (greitas gaminimas)
                      </div>
                      <div className="divide-y divide-slate-100">
                        <div className="flex justify-between items-center px-4 py-3 gap-4">
                          <span className="text-slate-700">
                            CEREC vainikėlis ant natūralaus danties
                          </span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">
                            nuo 400 €
                          </span>
                        </div>
                        <div className="flex justify-between items-center px-4 py-3 gap-4">
                          <span className="text-slate-700">CEREC vainikėlis ant implanto</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">450 €</span>
                        </div>
                        <div className="flex justify-between items-center px-4 py-3 gap-4">
                          <span className="text-slate-700">CEREC užklotas arba laminatė</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">
                            nuo 600 €
                          </span>
                        </div>
                      </div>

                      <div className="bg-brand-50/50 px-4 py-3 border-y border-slate-100 font-bold text-darkblue-700">
                        Keramikiniai vainikėliai
                      </div>
                      <div className="divide-y divide-slate-100">
                        <div className="flex justify-between items-center px-4 py-3 gap-4">
                          <span className="text-slate-700">Metalo keramikos vainikėlis</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">
                            nuo 350 €
                          </span>
                        </div>
                        <div className="flex justify-between items-center px-4 py-3 gap-4">
                          <span className="text-slate-700">
                            Bemetalės E-MAX keramikos vainikėlis
                          </span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">
                            nuo 400 €
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* DEŠINĖ */}
                    <div>
                      <div className="bg-brand-50/50 px-4 py-3 border-b border-slate-100 font-bold text-darkblue-700">
                        Keramikiniai vainikėliai / papildomi sprendimai
                      </div>
                      <div className="divide-y divide-slate-100">
                        <div className="flex justify-between items-center px-4 py-3 gap-4">
                          <span className="text-slate-700">
                            Cirkonio keramikos vainikėlis (ant implanto)
                          </span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">450 €</span>
                        </div>
                        <div className="flex justify-between items-center px-4 py-3 gap-4">
                          <span className="text-slate-700">
                            Cirkonio keramikos vainikėlis (ant danties)
                          </span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">400 €</span>
                        </div>
                        <div className="flex justify-between items-center px-4 py-3 gap-4">
                          <span className="text-slate-700">Laminatė</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">
                            nuo 600 €
                          </span>
                        </div>
                        <div className="flex justify-between items-center px-4 py-3 gap-4">
                          <span className="text-slate-700">Laikinas vainikėlis (kabinetinis)</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">
                            nuo 40 €
                          </span>
                        </div>
                        <div className="flex justify-between items-center px-4 py-3 gap-4">
                          <span className="text-slate-700">
                            Skaitmeniniai / silikoniniai atspaudai
                          </span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">150 €</span>
                        </div>
                        <div className="flex justify-between items-center px-4 py-3 gap-4">
                          <span className="text-slate-700">Dantų plokštelės</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">
                            nuo 350 €
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed text-sm">
                  Tiksli dantų protezavimo kaina aptariama individualios konsultacijos metu,
                  įvertinus paciento burnos būklę, pasirinktą technologiją ir gydymo apimtį.
                </p>
              </div>
            </div>
          </motion.header>

          {/* KAS YRA PROTEZAVIMAS */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas yra dantų protezavimas?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų protezavimas – tai odontologinė procedūra, kurios metu atkuriami prarasti ar
                  stipriai pažeisti dantys, pasitelkiant įvairius sprendimus. Protezavimo tikslas –
                  sugrąžinti pilnavertę kramtymo funkciją, estetinį vaizdą ir komfortą kasdienėje
                  veikloje.
                </p>
                <p>
                  Priklausomai nuo situacijos, dantų protezavimas gali būti taikomas tiek vienam
                  danties defektui atkurti, tiek kelių ar visų dantų atkūrimui. Šiuolaikiniai
                  protezai kuriami taip, kad būtų patvarūs, estetiški ir kuo artimesni natūraliems
                  dantims.
                </p>
                <p>
                  Pasirinkus tinkamą metodą ir medžiagas, dantų protezavimas gali būti ne tik
                  finansiškai prieinamas, bet ir patikimas ilgalaikis sprendimas, padedantis
                  susigrąžinti pilnavertį komfortą kasdienybėje.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA REIKALINGA */}
          <motion.section id="kada-reikalingas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kada reikalingas dantų protezavimas?
              </h2>

              <p className="text-slate-700 leading-relaxed max-w-4xl mb-6">
                Dantų protezavimas rekomenduojamas tais atvejais, kai natūralių dantų struktūra
                nebegali pilnai atlikti savo funkcijos arba kai dantų trūkumas daro įtaką
                kasdieniam komfortui. Laiku pasirinktas protezavimo sprendimas padeda išvengti
                tolimesnių burnos sveikatos problemų ir sudėtingesnio gydymo ateityje.
              </p>

              <div className={innerCard + ' mb-6'}>
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Dantų protezavimas gali būti reikalingas, jei:
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Trūksta vieno ar kelių dantų (apsunkintas kramtymas ar kalba)',
                    'Dantys yra stipriai pažeisti, nudilę ar susilpnėję',
                    'Seni protezai ar restauracijos nebeatlieka savo funkcijos',
                    'Atsirado estetinės problemos, mažinančios pasitikėjimą šypsena',
                    'Pasikeitė sąkandis ar juntamas diskomfortas žandikaulio srityje',
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm"
                    >
                      <span className="mt-1">
                        <CheckIcon />
                      </span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Tokiais atvejais individualiai suplanuotas ir racionaliai parinktas sprendimas
                leidžia užtikrinti, kad dantų protezavimas Klaipėdoje būtų ne tik prieinamas, bet ir
                efektyvus ilgalaikėje perspektyvoje.
              </p>
            </div>
          </motion.section>

          {/* 3D CEREC */}
          <motion.section id="cerec" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Pažangus 3D CEREC estetinis restauravimas
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
                <p>
                  Bangų odontologijos klinikoje dantų protezavimui plačiai taikoma pažangi 3D CEREC
                  technologija, leidžianti pasiekti itin tikslų ir greitą rezultatą. Skaitmeninio
                  skenavimo metu sukuriamas preciziškas dantų modelis, kuris leidžia individualiai
                  pritaikyti kiekvieną restauraciją pagal paciento anatomiją.
                </p>
                <p>
                  Ši technologija ne tik sutrumpina gydymo laiką, bet ir leidžia optimizuoti
                  procesą, todėl pacientams gali būti pasiūlytas kokybiškas dantų protezavimas,
                  neprarandant estetikos ar ilgaamžiškumo.
                </p>
              </div>

              <div className={innerCard}>
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  CEREC sistema suteikia galimybę:
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Išvengti tradicinių atspaudų ir su tuo susijusio diskomforto',
                    'Sukurti itin tikslią restauraciją, idealiai priglundančią nuo pirmos dienos',
                    'Pagaminti danties protezą vietoje, vos per kelias valandas',
                    'Iš karto atlikti galutinį protezavimą, be laikinų vainikėlių',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-brand-50/60">
                      <span className="mt-1">
                        <CheckIcon />
                      </span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* MEDŽIAGOS */}
          <motion.section id="medziagos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Iš kokių medžiagų gaminami dantų protezai?
              </h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų protezavimo sėkmė priklauso ne tik nuo technologijų, bet ir nuo pasirinktų
                medžiagų. Bangų odontologijos klinikoje naudojamos pasaulyje pripažintos, patikimos
                ir estetiškos medžiagos, leidžiančios pasiūlyti sprendimus, atitinkančius tiek
                funkcinius, tiek estetinius paciento lūkesčius.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Cirkonio oksido keramika</h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">
                    Cirkonio keramika – viena pažangiausių ir patikimiausių medžiagų šiuolaikiniame
                    dantų protezavime. Ji pasižymi itin dideliu tvirtumu ir atsparumu
                    nusidėvėjimui, todėl tinka tiek priekinių, tiek šoninių dantų atkūrimui.
                  </p>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>• Labai tikslus pritaikymas ir komfortas nuo pirmos dienos</p>
                    <p>• Atsparumas apnašoms, spalvos ir formos pokyčiams</p>
                    <p>• Ilgesnė tarnavimo trukmė lyginant su metalo keramika</p>
                    <p>• Estetiškas vaizdas be metalinio kraštelio ties dantenomis</p>
                    <p>• Lėtesnis šilumos ir šalčio perdavimas</p>
                  </div>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">
                    Bemetalė keramika – E-MAX
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">
                    Bemetalė keramika E-MAX ypač vertinama dėl išskirtinės estetikos. Ši medžiaga
                    pasižymi puikiu šviesos pralaidumu, todėl protezuoti dantys atrodo itin
                    natūraliai ir harmoningai dera su šalia esančiais dantimis.
                  </p>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>• Išlaikomas natūralus spalvos skaidrumas ir blizgesys</p>
                    <p>• Dantys neįgauna matinio atspalvio laikui bėgant</p>
                    <p>• Medžiaga nedirgina dantenų ir yra biologiškai suderinama</p>
                    <p>• Atsparumas temperatūros pokyčiams ir apnašų kaupimuisi</p>
                    <p>• Itin tikslus pritaikymas leidžia pasiekti puikų rezultatą</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PROTEZAVIMAS ANT IMPLANTŲ */}
          <motion.section id="implantai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Protezavimas ant implantų
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Protezavimas ant implantų laikomas vienu pažangiausių dantų atkūrimo būdų, kai
                  prarastų dantų vietoje įtvirtinamos dirbtinės šaknys – implantai, ant kurių
                  vėliau tvirtinami individualiai pagaminti protezai. Šis metodas leidžia atkurti
                  ne tik dantų estetiką, bet ir natūralų kramtymo pojūtį bei stabilumą.
                </p>
                <p>
                  Bangų odontologijos klinikoje protezavimas ant implantų atliekamas naudojant
                  patikimas ir pasaulyje pripažintas sistemas – Straumann® ir Medentika® implantus.
                  Ant implantų tvirtinami protezai gaminami taip, kad būtų vizualiai ir funkciniu
                  požiūriu beveik neatskiriami nuo natūralių dantų.
                </p>
                <p>
                  Implantais paremtas protezavimas padeda išvengti gretimų dantų šlifavimo,
                  užtikrina gerą sukandimo stabilumą ir lėtina žandikaulio kaulo nykimą. Tai
                  sprendimas, tinkantis tiek vieno danties atkūrimui, tiek kelių ar visų dantų
                  protezavimui.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAIP VYKSTA PROTEZAVIMAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Kaip vyksta dantų protezavimas klinikoje?
              </h2>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">
                    Diagnostika ir planavimas
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Atliekama klinikinė apžiūra, vertinama dantų, dantenų ir sąkandžio būklė,
                    prireikus atliekami radiologiniai tyrimai ir skaitmeninis planavimas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Paruošiamieji darbai</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Jei reikia, atliekamas dantų gydymas, restauracijų keitimas, dantenų būklės
                    koregavimas ar implantų integracija, kad protezai būtų tvirtinami ant stabilaus
                    pagrindo.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Protezų gamyba ir pritaikymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pagal individualų planą gaminami protezai, pritaikyti paciento anatomijai ir
                    estetiniams poreikiams. Kai kuriais atvejais su CEREC technologija tai galima
                    atlikti net tą pačią dieną.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Kontrolė ir rekomendacijos</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Įvertinamas prigludimas, sukandimas ir savijauta, pateikiamos priežiūros
                    rekomendacijos bei suplanuojami profilaktiniai patikrinimai.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Toks nuoseklus procesas leidžia užtikrinti, kad protezavimas būtų saugus,
                komfortiškas ir orientuotas į ilgalaikį rezultatą.
              </p>
            </div>
          </motion.section>

          {/* TARNAVIMO LAIKAS */}
          <motion.section id="tarnaves" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kiek laiko tarnauja dantų protezai?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų protezų tarnavimo laikas priklauso nuo kelių svarbių veiksnių – pasirinktų
                  medžiagų, protezavimo technologijos, paciento burnos higienos įpročių ir
                  reguliarios priežiūros. Šiuolaikinė odontologija leidžia sukurti ilgaamžius ir
                  patikimus protezus, kurie, tinkamai prižiūrimi, gali tarnauti daugelį metų.
                </p>
                <p>
                  Cirkonio oksido keramikos protezai pasižymi itin dideliu tvirtumu ir atsparumu
                  nusidėvėjimui, o bemetalė keramika E-MAX išsiskiria puikiomis estetinėmis
                  savybėmis ir stabilia spalva. Naudojant pažangią CEREC technologiją, protezai
                  gaminami itin tiksliai, o tai mažina nusidėvėjimo riziką ir pagerina jų
                  ilgaamžiškumą.
                </p>
                <p>
                  Ne mažiau svarbi kasdienė burnos higiena, tarpdančių priežiūra, profesionali burnos
                  higiena ir reguliarūs profilaktiniai patikrinimai. Tinkamai suplanuotas ir
                  profesionaliai atliktas protezavimas leidžia pasiekti optimalų kainos ir kokybės
                  santykį.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PO PROTEZAVIMO */}
          <motion.section id="po-protezavimo" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Ką svarbu žinoti po dantų protezavimo?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
                <p>
                  Po dantų protezavimo organizmui reikalingas trumpas adaptacijos laikotarpis. Nors
                  modernūs protezai pritaikomi itin tiksliai, pirmosiomis dienomis gali būti
                  jaučiamas nežymus neįprastas pojūtis ar lengvas diskomfortas – tai natūrali
                  organizmo reakcija, kuri paprastai greitai praeina.
                </p>
                <p>
                  Pirmuoju laikotarpiu rekomenduojama stebėti savo pojūčius kramtant ir kalbant. Jei
                  jaučiamas spaudimas, dirginimas ar pakitęs sąkandis, svarbu apie tai informuoti
                  odontologą – dažnai pakanka nedidelės korekcijos, kad protezai taptų visiškai
                  komfortiški.
                </p>
              </div>

              <div className={innerCard}>
                <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm leading-relaxed">
                  <li>Galimas trumpas adaptacijos periodas ir lengvas diskomfortas.</li>
                  <li>Svarbi kruopšti kasdienė higiena, kaip ir natūralių dantų atveju.</li>
                  <li>Pirmosiomis dienomis rekomenduojama vengti labai kieto ar lipnaus maisto.</li>
                  <li>Jei diskomfortas nepraeina, verta kreiptis dėl korekcijos.</li>
                  <li>Reguliarūs profilaktiniai vizitai padeda ilgiau išlaikyti gerą rezultatą.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* MITAI */}
          <motion.section id="mitai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Dažniausi mitai apie dantų protezavimą
              </h2>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">
                    Mitas #1: protezai atrodo nenatūraliai
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Modernios protezavimo technologijos ir aukštos kokybės medžiagos leidžia sukurti
                    protezus, kurie vizualiai beveik nesiskiria nuo natūralių dantų.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">
                    Mitas #2: prie protezų sunku priprasti
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Tinkamai pritaikyti protezai yra komfortiški nuo pirmųjų dienų. Nedidelis
                    adaptacijos laikotarpis yra normalus, tačiau dauguma pacientų greitai pripranta.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">
                    Mitas #3: protezavimas skirtas tik vyresniems žmonėms
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Dantų protezavimas gali būti reikalingas bet kuriame amžiuje – dėl traumos,
                    ėduonies komplikacijų ar kitų priežasčių. Tai nėra amžiaus, o funkcijos ir
                    estetikos klausimas.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">
                    Mitas #4: prieinama kaina reiškia prastą kokybę
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Naudojant pažangias technologijas, tokias kaip CEREC, galima optimizuoti gydymo
                    procesą ir sumažinti papildomas išlaidas, neatsisakant kokybės, estetikos ir
                    ilgaamžiškumo.
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
                  Renkantis dantų protezavimo paslaugas svarbu ne tik kaina, bet ir gydymo kokybė,
                  naudojamos technologijos bei specialistų patirtis. Bangų odontologijos klinikoje
                  dantų protezavimas atliekamas derinant šiuolaikines skaitmenines technologijas,
                  aukštos kokybės medžiagas ir individualų požiūrį į kiekvieną pacientą.
                </p>
                <p>
                  Klinikoje taikoma pažangi 3D CEREC technologija, leidžianti tiksliai suplanuoti ir,
                  kai kuriais atvejais, pagaminti dantų protezus tą pačią dieną. Naudojamos
                  patikimos medžiagos – cirkonio oksido keramika ir bemetalė E-MAX keramika –
                  suteikia galimybę pasiūlyti estetiškus ir ilgaamžius sprendimus.
                </p>
                <p>
                  Bangų odontologijos klinikos specialistai kiekvieną atvejį vertina individualiai,
                  aiškiai paaiškina galimus sprendimus ir padeda pasirinkti optimalų kainos ir
                  kokybės santykį. Todėl ieškantiems patikimo sprendimo dantų protezavimui
                  Klaipėdoje, tai tampa racionaliu ir patikimu pasirinkimu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis dantų protezavimo konsultacijai Bangų klinikoje
              </h2>

              <p className="text-slate-700 mb-8 max-w-3xl leading-relaxed">
                Jeigu svarstote apie dantų protezavimą arba ieškote sprendimo, kaip atkurti
                prarastus ar stipriai pažeistus dantis, kviečiame registruotis konsultacijai Bangų
                odontologijos klinikoje. Konsultacijos metu įvertinama Jūsų burnos būklė, aptariami
                galimi gydymo variantai ir parenkamas individualus sprendimas, atsižvelgiant į Jūsų
                poreikius bei lūkesčius.
              </p>

              <p className="text-slate-700 mb-8 max-w-3xl leading-relaxed">
                Modernios technologijos, patyrę specialistai ir skaidri kainodara leidžia pasiūlyti
                racionalius sprendimus tiek funkcijos, tiek estetikos požiūriu. Registruokitės
                konsultacijai ir ženkite pirmą žingsnį link patikimo bei estetiško sprendimo.
              </p>

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