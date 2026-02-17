import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'

// Animacijų nustatymai
const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

// Ikonos
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function CubeIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
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

function ShieldCheckIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

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

  return (
    <AnimatedSection>
      <SEO
        title="Dantų protezavimas Klaipėdoje - Bangų klinika"
        description="Profesionalus dantų protezavimas Klaipėdoje. 3D CEREC technologija, cirkonio keramika, bemetalė keramika ir protezavimas ant implantų. Prieinamos kainos."
        keywords="dantu protezavimas, cerec, cirkonio keramika, protezai, klaipeda, implantai"
        structuredData={structuredData}
      />

      <motion.div className="container-narrow" variants={container} initial="hidden" animate="visible">
        
        {/* HERO */}
        <motion.header className="mb-10 text-center sm:text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionalus dantų protezavimas Klaipėdoje
          </h1>
          
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            <p className="mb-4">
              Dantų netekimas ar stiprus jų pažeidimas gali turėti įtakos ne tik šypsenos estetikai, bet ir kramtymo funkcijai, kalbai bei bendrai savijautai. Šiuolaikinė odontologija leidžia efektyviai atkurti dantis, tačiau pacientams dažnai svarbus ir kainos aspektas. Būtent todėl Bangų odontologijos klinikoje siekiama suderinti aukštą gydymo kokybę, pažangias technologijas ir racionalią kainodarą.
            </p>
            <p>
              Bangų odontologijos klinikoje Klaipėdoje atliekamas profesionalus dantų protezavimas, neatsisakant profesionalumo ar estetikos. Naudojamos modernios skaitmeninės technologijos, tokios kaip 3D CEREC sistema, leidžia optimizuoti gydymo procesą, sumažinti laiko sąnaudas ir pasiūlyti pacientams patrauklius, ilgalaikius sprendimus. Kiekvienam pacientui parenkamas individualus protezavimo planas, atsižvelgiant į poreikius, burnos būklę ir lūkesčius.
            </p>
          </div>

          {/* CTA MYGTUKAS VIRŠUJE */}
          <div className="flex justify-center sm:justify-start">
             <Link to="/kontaktai" className="btn-primary rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
              Registruotis vizitui
            </Link>
          </div>

          {/* KAINOS */}
          <div className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Dantų protezavimo kainos
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
             <p>
               Dantų protezavimo kaina priklauso nuo pasirinkto sprendimo, naudojamų medžiagų, protezavimo technologijos ir individualios paciento burnos būklės. Bangų odontologijos klinikoje kiekvienam pacientui sudaromas individualus protezavimo planas.
             </p>
          </div>

          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
            {/* CEREC */}
            <div className="bg-brand-50/50 p-4 border-b border-brand/10 font-bold text-darkblue-700">
              CEREC technologija (greitas gaminimas)
            </div>
            <div className="divide-y divide-slate-100">
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">CEREC vainikėlis ant natūralaus danties</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">nuo 400 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">CEREC vainikėlis ant implanto</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">450 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">CEREC užklotas arba laminatė</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">nuo 600 €</span>
              </div>
            </div>

            {/* KERAMIKINIAI */}
            <div className="bg-brand-50/50 p-4 border-y border-brand/10 font-bold text-darkblue-700 mt-2">
              Keramikiniai vainikėliai
            </div>
            <div className="divide-y divide-slate-100">
               <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Metalo keramikos vainikėlis</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">nuo 350 €</span>
              </div>
               <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Bemetalės E-MAX keramikos vainikėlis</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">nuo 400 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Cirkonio keramikos vainikėlis</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">nuo 400 €</span>
              </div>
            </div>

            {/* PAPILDOMI */}
            <div className="bg-brand-50/50 p-4 border-y border-brand/10 font-bold text-darkblue-700 mt-2">
              Papildomos procedūros ir atspaudai
            </div>
            <div className="divide-y divide-slate-100">
               <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Laminatė</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">nuo 600 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Laikinas vainikėlis (kabinetinis)</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">nuo 40 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Skaitmeniniai / silikoniniai atspaudai</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">150 €</span>
              </div>
               <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Dantų plokštelės</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">nuo 350 €</span>
              </div>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed text-sm">
            Tiksli dantų protezavimo kaina aptariama individualios konsultacijos metu, įvertinus paciento burnos būklę, pasirinktą technologiją ir gydymo apimtį.
          </p>
          </div>
        </motion.header>

        {/* KAS YRA PROTEZAVIMAS */}
        <motion.section className="mb-12 bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10" variants={item}>
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
        </motion.section>

        {/* KADA REIKALINGA (CHECKLIST) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kada reikalingas dantų protezavimas?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Dantų protezavimas rekomenduojamas tais atvejais, kai natūralių dantų struktūra nebegali pilnai atlikti savo funkcijos arba kai dantų trūkumas daro įtaką kasdieniam komfortui. Laiku pasirinktas protezavimo sprendimas padeda išvengti tolimesnių burnos sveikatos problemų ir sudėtingesnio gydymo ateityje.
          </p>
          
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-darkblue-700">Dantų protezavimas gali būti reikalingas, jei:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Trūksta vieno ar kelių dantų (apsunkintas kramtymas/kalba)",
                "Dantys stipriai pažeisti, nudilę ar susilpnėję",
                "Seni protezai ar restauracijos nebeatlieka funkcijos",
                "Atsirado estetinės problemos, mažinančios pasitikėjimą",
                "Pasikeitė sąkandis ar juntamas diskomfortas"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <span className="mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-slate-700 leading-relaxed">
            Tokiais atvejais individualiai suplanuotas ir racionaliai parinktas sprendimas leidžia užtikrinti, kad dantų protezavimas Klaipėdoje būtų ne tik prieinamas, bet ir efektyvus ilgalaikėje perspektyvoje.
          </p>
        </motion.section>

        {/* 3D CEREC */}
        <motion.section className="mb-12" variants={item}>
          <div className="flex flex-col md:flex-row gap-8 items-start">
             <div className="flex-1">
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
             <div className="w-full md:w-1/3 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
                <ChipIcon />
                <p className="font-semibold text-darkblue-700 mt-2">Skaitmeninis tikslumas</p>
                <p className="text-sm text-slate-500">Jokių atspaudų, greitas rezultatas</p>
             </div>
          </div>
        </motion.section>

        {/* MEDŽIAGOS (CIRKONIS / E-MAX / IMPLANTAI) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Iš kokių medžiagų gaminami dantų protezai?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
               <h3 className="font-bold text-darkblue-700 mb-2">Cirkonio oksido keramika</h3>
               <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                 Itin tvirta medžiaga, tinkama tiek priekiniams, tiek šoniniams dantims. Atspari nusidėvėjimui, be metalinio kraštelio, lėčiau perduoda temperatūrą.
               </p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
               <h3 className="font-bold text-darkblue-700 mb-2">Bemetalė keramika E-MAX</h3>
               <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                 Pasižymi išskirtine estetika ir natūraliu šviesos pralaidumu. Idealiai tinka priekiniams dantims, biologiškai suderinama, nekeičia spalvos.
               </p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
               <h3 className="font-bold text-darkblue-700 mb-2">Protezavimas ant implantų</h3>
               <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                 Dirbtinės šaknys (implantai) atkuria stabilumą ir kramtymo jėgą. Naudojame Straumann® ir Medentika® sistemas, leidžiančias atkurti vieną ar visus dantis.
               </p>
             </div>
          </div>
        </motion.section>

        {/* KAIP VYKSTA PROTEZAVIMAS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kaip vyksta dantų protezavimas klinikoje?
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Diagnostika</h3>
              <p className="text-sm text-slate-600">Išsami analizė, skaitmeninis planavimas, medžiagų parinkimas.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Paruošimas</h3>
              <p className="text-sm text-slate-600">Burnos paruošimas, gydymas, atspaudai ar skenavimas.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Gamyba</h3>
              <p className="text-sm text-slate-600">Protezų gamyba (su CEREC - net tą pačią dieną).</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Kontrolė</h3>
              <p className="text-sm text-slate-600">Prigludimo patikra, rekomendacijos priežiūrai.</p>
            </div>
          </div>
        </motion.section>

        {/* TARNAVIMO LAIKAS IR PRIEŽIŪRA */}
        <motion.section className="mb-12 space-y-8" variants={item}>
          <div>
             <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Kiek laiko tarnauja dantų protezai?
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Dantų protezų tarnavimo laikas priklauso nuo medžiagų ir priežiūros. Cirkonio ir E-MAX keramika yra itin ilgaamžė. Reguliari higiena ir profilaktiniai vizitai leidžia protezams tarnauti daugelį metų.
            </p>
          </div>
          <div>
             <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Ką svarbu žinoti po dantų protezavimo?
            </h2>
            <div className="bg-brand-50/30 p-6 rounded-xl border border-brand/10">
              <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                <li>Galimas trumpas adaptacijos periodas (keistas pojūtis, lengvas diskomfortas).</li>
                <li>Svarbi kruopšti higiena (kaip natūralių dantų).</li>
                <li>Pirmosiomis dienomis vengti labai kieto maisto.</li>
                <li>Jei diskomfortas nepraeina, kreiptis korekcijai.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* MITAI (ACCORDION STYLE) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Dažniausi mitai apie dantų protezavimą
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mitas #1: protezai atrodo nenatūraliai</h3>
              <p className="text-slate-600 text-sm">Moderni keramika leidžia sukurti protezus, kurie vizualiai nesiskiria nuo natūralių dantų (spalva, skaidrumas).</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mitas #2: sunku priprasti</h3>
              <p className="text-slate-600 text-sm">Tinkamai pritaikyti protezai yra komfortiški. Adaptacija trunka trumpai, vėliau pacientai pamiršta apie protezus.</p>
            </div>
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mitas #3: tik vyresniems</h3>
              <p className="text-slate-600 text-sm">Protezavimas reikalingas bet kuriame amžiuje, jei prarasti dantys ar jie stipriai pažeisti.</p>
            </div>
          </div>
        </motion.section>

        {/* KODĖL MES IR CTA */}
        <motion.div className="mt-8 mb-12 text-center" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kviečiame registruotis dantų protezavimo konsultacijai Bangų klinikoje
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Jeigu svarstote apie dantų protezavimą arba ieškote sprendimo, kaip atkurti prarastus ar stipriai pažeistus dantis, kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Modernios technologijos, patyrę specialistai ir skaidri kainodara leidžia pasiūlyti racionalius sprendimus tiek funkcijos, tiek estetikos požiūriu.
          </p>
          <Link to="/kontaktai" className="btn-primary rounded-full px-8 py-4 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
            Registruotis vizitui
          </Link>
        </motion.div>

      </motion.div>
    </AnimatedSection>
  )
}