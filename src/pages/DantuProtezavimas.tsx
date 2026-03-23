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

function ChipIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  )
}

const tocSections = [
  { id: "kainos", label: "Kainos" },
  { id: "kas-yra", label: "Kas yra protezavimas?" },
  { id: "kada-reikalingas", label: "Kada reikalingas?" },
  { id: "cerec", label: "3D CEREC technologija" },
  { id: "medziagos", label: "Protezų medžiagos" },
  { id: "procesas", label: "Kaip vyksta protezavimas?" },
  { id: "tarnaves", label: "Kiek laiko tarnauja?" },
  { id: "po-protezavimo", label: "Po protezavimo" },
  { id: "mitai", label: "Mitai apie protezavimą" },
]

export default function DantuProtezavimas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Dantų protezavimas",
    "description": "Profesionalus dantų protezavimas Klaipėdoje. CEREC technologija, cirkonio keramika, protezavimas ant implantų.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klinika"
    }
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
        <TableOfContents sections={tocSections} rootRef={pageRef} cta={{ label: "Registruotis vizitui", to: "/kontaktai" }} />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Profesionalus dantų protezavimas Klaipėdoje
            </h1>

            <div className={`mb-8`}>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Dantų netekimas ar stiprus jų pažeidimas gali turėti įtakos ne tik šypsenos estetikai, bet ir kramtymo funkcijai, kalbai bei bendrai savijautai. Šiuolaikinė odontologija leidžia efektyviai atkurti dantis, tačiau pacientams dažnai svarbus ir kainos aspektas. Būtent todėl Bangų odontologijos klinikoje siekiama suderinti aukštą gydymo kokybę, pažangias technologijas ir racionalią kainodarą.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje atliekamas profesionalus dantų protezavimas, neatsisakant profesionalumo ar estetikos. Naudojamos modernios skaitmeninės technologijos, tokios kaip 3D CEREC sistema, leidžia optimizuoti gydymo procesą, sumažinti laiko sąnaudas ir pasiūlyti pacientams patrauklius, ilgalaikius sprendimus. Kiekvienam pacientui parenkamas individualus protezavimo planas, atsižvelgiant į poreikius, burnos būklę ir lūkesčius.
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <Link to="/kontaktai" className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
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
                    Dantų protezavimo kaina priklauso nuo pasirinkto sprendimo, naudojamų medžiagų, protezavimo technologijos ir individualios paciento burnos būklės. Bangų odontologijos klinikoje kiekvienam pacientui sudaromas individualus protezavimo planas.
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
                          <span className="text-slate-700">CEREC vainikėlis ant natūralaus danties</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">nuo 400 €</span>
                        </div>
                        <div className="flex justify-between items-center px-4 py-3 gap-4">
                          <span className="text-slate-700">CEREC vainikėlis ant implanto</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">450 €</span>
                        </div>
                        <div className="flex justify-between items-center px-4 py-3 gap-4">
                          <span className="text-slate-700">CEREC užklotas arba laminatė</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">nuo 600 €</span>
                        </div>
                      </div>

                      <div className="bg-brand-50/50 px-4 py-3 border-y border-slate-100 font-bold text-darkblue-700">
                        Keramikiniai vainikėliai
                      </div>
                      <div className="divide-y divide-slate-100">
                        <div className="flex justify-between items-center px-4 py-3 gap-4">
                          <span className="text-slate-700">Metalo keramikos vainikėlis</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">nuo 350 €</span>
                        </div>
                        <div className="flex justify-between items-center px-4 py-3 gap-4">
                          <span className="text-slate-700">Bemetalės E-MAX keramikos vainikėlis</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">nuo 400 €</span>
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
                          <span className="text-slate-700">Cirkonio keramikos vainikėlis (ant implanto)</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">450 €</span>
                        </div>
                        <div className="flex justify-between items-center px-4 py-3 gap-4">
                          <span className="text-slate-700">Cirkonio keramikos vainikėlis (ant danties)</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">400 €</span>
                        </div>
                        <div className="flex justify-between items-center px-4 py-3 gap-4">
                          <span className="text-slate-700">Laminatė</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">nuo 600 €</span>
                        </div>
                        <div className="flex justify-between items-center px-4 py-3 gap-4">
                          <span className="text-slate-700">Laikinas vainikėlis (kabinetinis)</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">nuo 40 €</span>
                        </div>
                        <div className="flex justify-between items-center px-4 py-3 gap-4">
                          <span className="text-slate-700">Skaitmeniniai / silikoniniai atspaudai</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">150 €</span>
                        </div>
                        <div className="flex justify-between items-center px-4 py-3 gap-4">
                          <span className="text-slate-700">Dantų plokštelės</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">nuo 350 €</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed text-sm">
                  Tiksli dantų protezavimo kaina aptariama individualios konsultacijos metu, įvertinus paciento burnos būklę, pasirinktą technologiją ir gydymo apimtį.
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
                  Dantų protezavimas – tai odontologinė procedūra, kurios metu atkuriami prarasti ar stipriai pažeisti dantys, pasitelkiant įvairius sprendimus. Protezavimo tikslas – sugrąžinti pilnavertę kramtymo funkciją, estetinį vaizdą ir komfortą kasdienėje veikloje.
                </p>
                <p>
                  Priklausomai nuo situacijos, dantų protezavimas gali būti taikomas tiek vienam danties defektui atkurti, tiek kelių ar visų dantų atkūrimui. Šiuolaikiniai protezai kuriami taip, kad būtų patvarūs, estetiški ir kuo artimesni natūraliems dantims. Pasirinkus tinkamą metodą ir medžiagas, dantų protezavimas gali būti ne tik finansiškai prieinamas, bet ir patikimas ilgalaikis sprendimas.
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
                Dantų protezavimas rekomenduojamas tais atvejais, kai natūralių dantų struktūra nebegali pilnai atlikti savo funkcijos arba kai dantų trūkumas daro įtaką kasdieniam komfortui. Laiku pasirinktas protezavimo sprendimas padeda išvengti tolimesnių burnos sveikatos problemų ir sudėtingesnio gydymo ateityje.
              </p>

              <div className={innerCard + ' mb-6'}>
                <h3 className="font-semibold text-darkblue-700 mb-4">Dantų protezavimas gali būti reikalingas, jei:</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Trūksta vieno ar kelių dantų (apsunkintas kramtymas/kalba)",
                    "Dantys stipriai pažeisti, nudilę ar susilpnėję",
                    "Seni protezai ar restauracijos nebeatlieka funkcijos",
                    "Atsirado estetinės problemos, mažinančios pasitikėjimą",
                    "Pasikeitė sąkandis ar juntamas diskomfortas"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Tokiais atvejais individualiai suplanuotas ir racionaliai parinktas sprendimas leidžia užtikrinti, kad dantų protezavimas Klaipėdoje būtų ne tik prieinamas, bet ir efektyvus ilgalaikėje perspektyvoje.
              </p>
            </div>
          </motion.section>

          {/* 3D CEREC */}
          <motion.section id="cerec" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Pažangus 3D CEREC estetinis restauravimas
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Bangų odontologijos klinikoje dantų protezavimui plačiai taikoma pažangi 3D CEREC technologija, leidžianti pasiekti itin tikslų ir greitą rezultatą. Skaitmeninio skenavimo metu sukuriamas preciziškas dantų modelis, kuris leidžia individualiai pritaikyti kiekvieną restauraciją pagal paciento anatomiją.
                </p>
                <p>
                  CEREC sistema suteikia galimybę išvengti tradicinių atspaudų, sukurti itin tikslią restauraciją, pagaminti protezą vietoje per kelias valandas ir iš karto atlikti galutinį protezavimą be laikinų vainikėlių.
                </p>
                <p>
                  Ši technologija ne tik sutrumpina gydymo laiką, bet ir leidžia optimizuoti procesą, todėl pacientams gali būti pasiūlytas kokybiškas dantų protezavimas, neprarandant estetikos ar ilgaamžiškumo.
                </p>
              </div>
            </div>
          </motion.section>

          {/* MEDŽIAGOS */}
          <motion.section id="medziagos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Iš kokių medžiagų gaminami dantų protezai?
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Cirkonio oksido keramika</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Itin tvirta medžiaga, tinkama tiek priekiniams, tiek šoniniams dantims. Atspari nusidėvėjimui, be metalinio kraštelio, lėčiau perduoda temperatūrą.
                  </p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Bemetalė keramika E-MAX</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pasižymi išskirtine estetika ir natūraliu šviesos pralaidumu. Idealiai tinka priekiniams dantims, biologiškai suderinama, nekeičia spalvos.
                  </p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Protezavimas ant implantų</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dirbtinės šaknys (implantai) atkuria stabilumą ir kramtymo jėgą. Naudojame Straumann® ir Medentika® sistemas, leidžiančias atkurti vieną ar visus dantis.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KAIP VYKSTA PROTEZAVIMAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kaip vyksta dantų protezavimas klinikoje?
              </h2>

              <div className="grid gap-6 md:grid-cols-4">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Diagnostika</h3>
                  <p className="text-sm text-slate-600">Išsami analizė, skaitmeninis planavimas, medžiagų parinkimas.</p>
                </div>
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Paruošimas</h3>
                  <p className="text-sm text-slate-600">Burnos paruošimas, gydymas, atspaudai ar skenavimas.</p>
                </div>
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gamyba</h3>
                  <p className="text-sm text-slate-600">Protezų gamyba (su CEREC - net tą pačią dieną).</p>
                </div>
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Kontrolė</h3>
                  <p className="text-sm text-slate-600">Prigludimo patikra, rekomendacijos priežiūrai.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* TARNAVIMO LAIKAS IR PRIEŽIŪRA */}
          <div className="mb-12 space-y-8">
            <motion.section
              id="tarnaves"
              className="scroll-mt-36 2xl:scroll-mt-24"
              variants={item}
            >
              <div className={whiteCard}>
                <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                  Kiek laiko tarnauja dantų protezai?
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Dantų protezų tarnavimo laikas priklauso nuo medžiagų ir priežiūros. Cirkonio ir E-MAX keramika yra itin ilgaamžė. Reguliari higiena ir profilaktiniai vizitai leidžia protezams tarnauti daugelį metų.
                </p>
              </div>
            </motion.section>

            <motion.section
              id="po-protezavimo"
              className="scroll-mt-36 2xl:scroll-mt-24"
              variants={item}
            >
              <div className={whiteCard}>
                <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                  Ką svarbu žinoti po dantų protezavimo?
                </h2>

                <div className={innerCard}>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                    <li>Galimas trumpas adaptacijos periodas (keistas pojūtis, lengvas diskomfortas).</li>
                    <li>Svarbi kruopšti higiena (kaip natūralių dantų).</li>
                    <li>Pirmosiomis dienomis vengti labai kieto maisto.</li>
                    <li>Jei diskomfortas nepraeina, kreiptis korekcijai.</li>
                  </ul>
                </div>
              </div>
            </motion.section>
          </div>

          {/* MITAI */}
          <motion.section id="mitai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Dažniausi mitai apie dantų protezavimą
              </h2>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mitas #1: protezai atrodo nenatūraliai</h3>
                  <p className="text-slate-600 text-sm">Moderni keramika leidžia sukurti protezus, kurie vizualiai nesiskiria nuo natūralių dantų (spalva, skaidrumas).</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mitas #2: sunku priprasti</h3>
                  <p className="text-slate-600 text-sm">Tinkamai pritaikyti protezai yra komfortiški. Adaptacija trunka trumpai, vėliau pacientai pamiršta apie protezus.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mitas #3: tik vyresniems</h3>
                  <p className="text-slate-600 text-sm">Protezavimas reikalingas bet kuriame amžiuje, jei prarasti dantys ar jie stipriai pažeisti.</p>
                </div>
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
                Jeigu svarstote apie dantų protezavimą arba ieškote sprendimo, kaip atkurti prarastus ar stipriai pažeistus dantis, kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Modernios technologijos, patyrę specialistai ir skaidri kainodara leidžia pasiūlyti racionalius sprendimus tiek funkcijos, tiek estetikos požiūriu.
              </p>

              <Link to="/kontaktai" className="btn-primary btn-glow rounded-full px-8 py-4 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1">
                Registruotis vizitui
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}