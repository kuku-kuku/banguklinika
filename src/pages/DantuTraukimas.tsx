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

function ScalpelIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  )
}

function ExclamationIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
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

export default function DantuTraukimas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Dantų traukimas",
    "description": "Profesionalus dantų traukimas Klaipėdoje. Neskausmingas dantų šalinimas, protiniai dantys, vaikų dantų traukimas.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klinika"
    }
  }

  return (
    <AnimatedSection>
      <SEO
        title="Dantų Traukimas Klaipėdoje | Neskausmingas Šalinimas | Bangų klinika"
        description="Profesionalus ir saugus dantų traukimas Klaipėdoje. Protinių dantų šalinimas, chirurginis traukimas, vaikų dantų šalinimas. Registruokitės vizitui."
        keywords="dantu traukimas, dantu salinimas, protiniai dantys, chirurginis traukimas, klaipeda, neskausmingai"
        structuredData={structuredData}
      />

      <motion.div className="container-narrow" variants={container} initial="hidden" animate="visible">
        
        {/* HERO */}
        <motion.header className="mb-10 text-center sm:text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionalus dantų traukimas Klaipėdoje
          </h1>
          
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            <p className="mb-4">
              Dantų traukimas yra odontologinė procedūra, atliekama tuomet, kai danties išsaugoti nebeįmanoma arba kai jis kelia grėsmę bendrai burnos sveikatai. Nors šiuolaikinė odontologija visada siekia išsaugoti natūralius dantis, tam tikrose situacijose jų pašalinimas tampa būtinu ir racionaliausiu sprendimu.
            </p>
            <p>
              Bangų odontologijos klinikoje Klaipėdoje atliekamas dantų traukimas yra saugus, kruopščiai suplanuotas ir orientuotas į paciento komfortą. Procedūros metu naudojami šiuolaikiniai nuskausminimo metodai, leidžiantys išvengti skausmo ir sumažinti stresą. Kiekvienu atveju sprendimas dėl danties šalinimo priimamas individualiai, įvertinus danties būklę, galimas alternatyvas ir ilgalaikę burnos sveikatos perspektyvą.
            </p>
          </div>

          {/* CTA MYGTUKAS VIRŠUJE */}
          <div className="text-center sm:text-left">
            <Link 
              to="/kontaktai" 
              className="inline-block bg-brand hover:bg-brand-600 text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1"
            >
              Registruotis vizitui
            </Link>
          </div>
        </motion.header>

        {/* KAS YRA TRAUKIMAS */}
        <motion.section className="mb-12 bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas yra dantų traukimas?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Dantų traukimas – tai odontologinė procedūra, kurios metu dantis pašalinamas iš žandikaulio kaulo alveolės. Ši procedūra taikoma tais atvejais, kai dantis yra stipriai pažeistas ėduonies, traumos ar infekcijos, netaisyklingai išdygęs arba trukdo kitų dantų gydymui ar taisyklingam sąkandžiui.
            </p>
            <p>
              Procedūra gali būti paprasta arba sudėtingesnė, priklausomai nuo danties padėties, šaknų formos ir aplinkinių audinių būklės. Prieš atliekant dantų traukimą, visada atliekama apžiūra ir, jei reikia, radiologiniai tyrimai, leidžiantys suplanuoti saugų ir tikslų gydymą. Tinkamai atliktas dantų traukimas padeda išvengti komplikacijų, sumažina skausmą ir sudaro sąlygas tolimesniam gydymui, pavyzdžiui, protezavimui ar implantacijai.
            </p>
          </div>
        </motion.section>

        {/* KADA REIKALINGA (CHECKLIST) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kada reikalingas dantų traukimas?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Dantų traukimas atliekamas tik tuomet, kai nėra galimybės danties išsaugoti arba kai jo palikimas burnoje gali sukelti rimtesnių sveikatos problemų. Prieš priimant sprendimą, visuomet įvertinamos galimos alternatyvos, tačiau tam tikrais atvejais danties pašalinimas yra saugiausias ir efektyviausias sprendimas.
          </p>
          
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-darkblue-700">Dantų traukimas gali būti reikalingas, kai:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "dantis yra stipriai pažeistas ėduonies ar traumos, o atkūrimas nebeįmanomas",
                "pasireiškia ūmus skausmas, uždegimas ar infekcija, kuri plinta į aplinkinius audinius",
                "dantis yra netaisyklingai išdygęs arba įstrigęs ir trukdo kitiems dantims",
                "reikia sudaryti vietos ortodontiniam gydymui",
                "dantis kelia grėsmę bendrai burnos ir žandikaulio sveikatai"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <span className="mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-slate-700 leading-relaxed">
            Laiku atliktas dantų traukimas padeda išvengti sudėtingesnių komplikacijų ir sudaro sąlygas tolimesniam gydymui, pavyzdžiui, protezavimui ar implantacijai.
          </p>
        </motion.section>

        {/* TRAUKIMO RŪŠYS (BURBULAI) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kokios yra dantų traukimo rūšys?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Dantų traukimo būdas parenkamas individualiai, atsižvelgiant į danties padėtį, šaknų struktūrą ir aplinkinių audinių būklę. Dažniausiai skiriami du pagrindiniai dantų traukimo tipai.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
               <ScalpelIcon />
               <h3 className="font-bold text-darkblue-700 mb-2">Paprastas dantų traukimas</h3>
               <p className="text-sm text-slate-600 leading-relaxed">
                 Atliekamas, kai dantis visiškai išdygęs ir lengvai pasiekiamas. Odontologas švelniai atlaisvina dantį ir jį pašalina. Greita procedūra ir sklandus gijimas.
               </p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
               <ExclamationIcon />
               <h3 className="font-bold text-darkblue-700 mb-2">Chirurginis dantų traukimas</h3>
               <p className="text-sm text-slate-600 leading-relaxed">
                 Taikomas sudėtingesniais atvejais (dantis neišdygęs, įstrigęs, nulūžęs). Gali prireikti nedidelio pjūvio ar danties padalinimo. Atliekama saugiai ir kontroliuojamai.
               </p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
               <ShieldCheckIcon />
               <h3 className="font-bold text-darkblue-700 mb-2">Dantų traukimas vaikams</h3>
               <p className="text-sm text-slate-600 leading-relaxed">
                 Atliekamas ypač švelniai, kai būtina šalinti pieninius ar nuolatinius dantis. Prieš procedūrą skiriama laiko paaiškinimui ir vaiko nuraminimui.
               </p>
             </div>
          </div>
        </motion.section>

        {/* KAINOS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Dantų traukimo kainos
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
             <p>
               Dantų traukimo kaina priklauso nuo procedūros sudėtingumo, danties padėties, šaknų struktūros ir aplinkinių audinių būklės. Prieš atliekant procedūrą visuomet atliekama apžiūra, kurios metu įvertinama situacija ir parenkamas saugiausias bei tinkamiausias danties šalinimo metodas.
             </p>
          </div>

          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
            <div className="divide-y divide-slate-100">
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Šaknies šalinimas</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">60 – 80 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Paprastas danties šalinimas</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">80 – 100 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Komplikuotas protinių dantų šalinimas</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">120 – 150 €</span>
              </div>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed text-sm">
            Tiksli dantų traukimo Klaipėdoje kaina aptariama individualios konsultacijos metu, atsižvelgiant į konkrečią klinikinę situaciją. Skaidri kainodara ir profesionalus požiūris leidžia pacientams jaustis užtikrintai ir priimti informuotą sprendimą.
          </p>
        </motion.section>

        {/* DELSIMAS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas vyksta, jei dantis nepašalinamas laiku?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
             <p>
               Atidėliojamas dantų traukimas gali lemti ne tik užsitęsusį skausmą, bet ir rimtesnes burnos sveikatos problemas. Pažeistas ar infekuotas dantis dažnai tampa nuolatiniu bakterijų židiniu, kuris ilgainiui gali paveikti aplinkinius audinius, dantenas ir žandikaulio kaulą.
             </p>
             <p>
               Jeigu probleminis dantis nėra pašalinamas laiku, uždegimas gali plisti į gilesnius audinius, sukelti stipresnį patinimą, skausmą ar net bendros savijautos pablogėjimą. Tokiais atvejais gydymas tampa sudėtingesnis ir gali reikalauti papildomų procedūrų ar ilgesnio gijimo laikotarpio.
             </p>
             <p>
               Be to, uždelstas dantų traukimas gali neigiamai paveikti gretimus dantis. Infekcija ar nuolatinis spaudimas gali paskatinti aplinkinių dantų pažeidimus, dantenų atsitraukimą ar kaulo nykimą.
             </p>
             <p>
               Laiku atliktas dantų traukimas padeda išvengti šių komplikacijų, sumažina gydymo apimtį ir leidžia greičiau pereiti prie sprendimų, kurie atkuria funkciją ir komfortą.
             </p>
          </div>
        </motion.section>

        {/* KAIP ATLIEKAMA (STEPS) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kaip atliekamas dantų traukimas?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Dantų traukimas Bangų odontologijos klinikoje atliekamas pagal aiškią ir saugią eigą, kad procedūra būtų kuo komfortiškesnė pacientui ir nekeltų papildomo streso.
          </p>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Apžiūra</h3>
              <p className="text-sm text-slate-600">Klinikinė apžiūra, rentgeno tyrimas, rizikos įvertinimas ir metodo parinkimas.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Nuskausminimas</h3>
              <p className="text-sm text-slate-600">Vietinė nejautra užtikrina, kad jausite tik spaudimą, bet ne skausmą.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Pašalinimas</h3>
              <p className="text-sm text-slate-600">Dantis atsargiai atlaisvinamas ir pašalinamas (prireikus – dalimis).</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Priežiūra</h3>
              <p className="text-sm text-slate-600">Žaizdos sutvarkymas, hemostazė ir rekomendacijos gijimui.</p>
            </div>
          </div>
        </motion.section>

        {/* SKAUSMAS IR PRIEŽIŪRA */}
        <motion.section className="mb-12 space-y-8" variants={item}>
          <div>
             <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Ar dantų traukimas yra skausmingas?
            </h2>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Šiuolaikinėje odontologijoje dantų traukimas atliekamas taip, kad pacientas nepatirtų skausmo. Taikant veiksmingą vietinę nejautrą, procedūros metu skausmas nejaučiamas, o dauguma pacientų procedūrą apibūdina kaip trumpą ir lengviau pakeliamą, nei tikėjosi.
              </p>
              <p>
                Po procedūros, kai nuskausminimo poveikis baigiasi, gali pasireikšti lengvas maudimas, patinimas ar jautrumas – tai normali organizmo reakcija. Šie pojūčiai paprastai sumažėja per kelias dienas ir gali būti kontroliuojami odontologo rekomenduotomis priemonėmis.
              </p>
            </div>
          </div>

          <div>
             <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Ką daryti, jei dantį skauda dar prieš traukimą?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Jeigu dantį skauda stipriai, nuolat ar skausmas stiprėja, svarbu nedelsti ir kreiptis į odontologą. Laiku atlikta apžiūra leidžia įvertinti situaciją ir nuspręsti, ar dantį galima gydyti, ar reikalingas dantų traukimas.
            </p>
          </div>

          <div>
             <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Ką svarbu žinoti po dantų traukimo?
            </h2>
            <div className="bg-brand-50/30 p-6 rounded-xl border border-brand/10 text-slate-700 text-sm leading-relaxed">
              <p className="mb-4">
                Pirmosiomis valandomis po procedūros rekomenduojama vengti intensyvios fizinės veiklos ir leisti organizmui pailsėti. Traukimo vietoje susiformuoja kraujo krešulys, kuris yra būtinas gijimo procesui, todėl labai svarbu jo nepažeisti.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Pirmąją parą vengti karšto maisto ir gėrimų, rinktis minkštą maistą.</li>
                <li>Nerūkyti ir nevartoti alkoholio bent 24–48 valandas.</li>
                <li>Laikytis odontologo paskirtų nuskausminamųjų ar kitų vaistų vartojimo rekomendacijų.</li>
                <li>Palaikyti burnos higieną, tačiau valyti dantis atsargiai, vengiant traukimo vietos.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* KODĖL MES IR CTA */}
        <motion.div className="mt-8 mb-12 text-center" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kviečiame registruotis dantų traukimui Bangų klinikoje
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Jeigu jaučiate danties skausmą, diskomfortą ar gavote rekomendaciją šalinti dantį, kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu bus įvertinta Jūsų burnos būklė, aptartos galimos gydymo alternatyvos ir, esant poreikiui, suplanuotas saugus dantų traukimas.
            <br/><br/>
            Bangų odontologijos klinikoje siekiame, kad net ir tokios procedūros kaip dantų traukimas būtų aiškios, valdomos ir kuo mažiau keliančios streso. Čia Jūsų laukia patyrę specialistai, moderni įranga ir rūpestingas požiūris į kiekvieną pacientą.
          </p>
          <Link to="/kontaktai" className="btn-primary rounded-full px-8 py-4 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
            Registruotis vizitui
          </Link>
        </motion.div>

      </motion.div>
    </AnimatedSection>
  )
}