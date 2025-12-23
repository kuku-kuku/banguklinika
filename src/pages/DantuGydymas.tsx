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

function HeartPulseIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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

function ClipboardListIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  )
}

export default function DantuGydymas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Dantų taisymas ir gydymas",
    "description": "Profesionalus dantų gydymas Klaipėdoje. Terapinis gydymas, plombavimas, kanalų gydymas, skubi pagalba.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klinika"
    }
  }

  return (
    <AnimatedSection>
      <SEO
        title="Dantų gydymas, taisymas (tvarkymas) Klaipėdoje - Bangų klinika"
        description="Profesionalus dantų taisymas ir gydymas Klaipėdoje. Skubi pagalba, ėduonies gydymas, plombavimas. Registruokitės vizitui."
        keywords="dantu gydymas, dantu taisymas, skubi pagalba, eduonis, plombavimas, klaipeda"
        structuredData={structuredData}
      />

      <motion.div className="container-narrow" variants={container} initial="hidden" animate="visible">
        
        {/* HERO */}
        <motion.header className="mb-10 text-center sm:text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionalus dantų taisymas Klaipėdoje
          </h1>
          
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            <p className="mb-4">
              Dantų skausmas, diskomfortas ar profilaktinio patikrinimo poreikis – tai dažniausios priežastys, dėl kurių pacientai kreipiasi į odontologą. Laiku atliktas dantų gydymas leidžia ne tik pašalinti nemalonius simptomus, bet ir išsaugoti natūralius dantis bei užkirsti kelią sudėtingesniems gydymo etapams ateityje.
            </p>
            <p>
              Bangų odontologijos klinikoje Klaipėdoje teikiama dantų taisymo paslauga apima platų spektrą procedūrų – nuo konsultacijų ir profilaktinių patikrinimų iki sudėtingų gydymo ir atkūrimo procedūrų. Klinikos specialistai operatyviai padeda tiek esant ūmiam danties skausmui, tiek planuojant ilgalaikį gydymą. Kompleksinis požiūris leidžia pacientams gauti visas reikalingas paslaugas vienoje vietoje, todėl dantų tvarkymas tampa patogus, aiškus ir užtikrintas procesas.
            </p>
          </div>

          {/* CTA MYGTUKAS VIRŠUJE */}
          <div className="flex justify-center sm:justify-start">
             <Link to="/kontaktai" className="btn-primary rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
              Registruotis vizitui
            </Link>
          </div>
        </motion.header>

        {/* KAS YRA DANTŲ GYDYMAS */}
        <motion.section className="mb-12 bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas yra dantų gydymas?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Dantų gydymas – tai įvairių odontologinių procedūrų visuma, skirta palaikyti burnos sveikatą, gydyti pažeistus dantis ir atkurti jų funkciją bei estetiką. Jis apima tiek profilaktinius patikrinimus, leidžiančius anksti pastebėti problemas, tiek aktyvų gydymą, kai būtina pašalinti pažeidimus ir atkurti dantų struktūrą.
            </p>
            <p>
              Dantų gydymo metu sprendžiamos tokios problemos kaip dantų ėduonis, danties skausmas, jautrumas, uždegiminiai procesai ar mechaniniai pažeidimai. Priklausomai nuo situacijos, gydymas gali apimti plombavimą, šaknų kanalų gydymą, profesionalią burnos higieną ar kitas procedūras. Toks nuoseklus ir individualiai suplanuotas požiūris leidžia užtikrinti, kad dantų tvarkymas mūsų klinikoje būtų ne tik efektyvus, bet ir orientuotas į ilgalaikį rezultatą.
            </p>
          </div>
        </motion.section>

        {/* KADA REIKALINGAS (CHECKLIST) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kada reikalingas dantų gydymas?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Dantų gydymas reikalingas ne tik tada, kai atsiranda stiprus skausmas. Daugelis burnos problemų vystosi palaipsniui ir ilgą laiką gali nesukelti ryškių simptomų, todėl reguliarūs profilaktiniai patikrinimai yra itin svarbūs. Laiku pastebėtos problemos leidžia jas išspręsti paprasčiau ir išvengti sudėtingesnio gydymo ateityje.
          </p>
          
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-darkblue-700">Į odontologą rekomenduojama kreiptis, jei pastebimi šie požymiai:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Danties skausmas ar maudimas (spontaniškai arba valgant)",
                "Padidėjęs jautrumas šalčiui, karščiui ar saldumui",
                "Nuskilęs, įtrūkęs ar patamsėjęs dantis",
                "Kraujuojančios ar patinusios dantenos",
                "Nemalonus kvapas iš burnos (nepraeina valant)",
                "Poreikis profilaktiniam patikrinimui"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <span className="mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-slate-700 leading-relaxed">
            Reguliarus ir laiku atliekamas dantų taisymas padeda išsaugoti dantų sveikatą, sumažinti gydymo apimtis ir išlaidas bei užtikrinti gerą savijautą ilgalaikėje perspektyvoje.
          </p>
        </motion.section>

        {/* KOKIAS PASLAUGAS TEIKIAME */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kokias dantų gydymo paslaugas teikiame?
          </h2>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft">
            <p className="text-slate-700 mb-6 leading-relaxed">
              Bangų odontologijos klinikoje teikiamos visos pagrindinės dantų gydymo paslaugos, leidžiančios pacientams gauti kompleksinę pagalbą vienoje vietoje. Atsižvelgiant į individualią situaciją, sudaromas aiškus ir nuoseklus gydymo planas.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {[
                "Konsultacijos ir gydymo plano sudarymas",
                "Danties plombavimas (helio/stiklojonomerine)",
                "Dentalinė rentgenograma",
                "Profesionali burnos higiena",
                "Estetinis dantų plombavimas",
                "Dantų šaknų kanalų gydymas",
                "Vaikų dantų gydymas",
                "Dantų traukimas",
                "Dantų implantacija",
                "Kaulo priauginimo operacijos",
                "Dantų protezavimas"
              ].map((service, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-slate-700 mt-4 leading-relaxed">
            Platus paslaugų spektras leidžia užtikrinti, kad dantų tvarkymas būtų atliekamas nuosekliai, saugiai ir orientuotai į ilgalaikį rezultatą, nesiunčiant paciento iš vienos klinikos į kitą.
          </p>
        </motion.section>

        {/* KAINOS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Dantų gydymo kainos
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
            <p>
              Dantų gydymo kaina priklauso nuo paciento amžiaus, dantų būklės, taikomo gydymo metodo ir procedūros sudėtingumo. Bangų odontologijos klinikoje prieš pradedant gydymą visuomet atliekama konsultacija ir profilaktinis patikrinimas, kurių metu sudaromas individualus gydymo planas ir aptariama preliminari gydymo apimtis bei kaina. Toks požiūris leidžia užtikrinti skaidrumą ir parinkti tinkamiausią sprendimą kiekvienam pacientui.
            </p>
          </div>

          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
            {/* Suaugusiems */}
            <div className="bg-brand-50/50 p-4 border-b border-brand/10 font-bold text-darkblue-700">
              Suaugusiųjų gydymas
            </div>
            <div className="divide-y divide-slate-100">
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Konsultacija ir plano sudarymas</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">20 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Plombavimas helio plomba</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">70 – 90 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Plombavimas stiklojonomerine plomba</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">40 – 60 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Laikina plomba</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">nuo 40 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Nuskausminimas / Rentgeno nuotrauka</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">po 10 €</span>
              </div>
            </div>

            {/* Vaikams */}
            <div className="bg-brand-50/50 p-4 border-y border-brand/10 font-bold text-darkblue-700 mt-2">
              Vaikų gydymas
            </div>
            <div className="divide-y divide-slate-100">
               <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Konsultacija vaikams</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">20 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Pieninių dantų gydymas</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">nuo 50 €</span>
              </div>
               <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Stiklojonomerinė / kompomerinė plomba</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">nuo 30 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Vizitas, kai vaikas nesileidžia gydomas (iki 30 min.)</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">nuo 30 €</span>
              </div>
            </div>
          </div>
          
          <p className="text-slate-700 leading-relaxed text-sm">
            Tiksli dantų gydymo kaina visada nustatoma individualios konsultacijos metu, įvertinus konkrečią situaciją ir gydymo poreikius. Aiški ir skaidri kainodara leidžia pacientams ir tėvams jaustis užtikrintai planuojant dantų gydymą.
          </p>
        </motion.section>

        {/* KAIP VYKSTA GYDYMAS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kaip vyksta dantų gydymas mūsų klinikoje?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Konsultacija ir diagnostika</h3>
              <p className="text-sm text-slate-600">Patikrinimas, rentgeno tyrimai, būklės įvertinimas. Sudaromas individualus gydymo planas su prioritetais.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Gydymo atlikimas</h3>
              <p className="text-sm text-slate-600">Atliekamos procedūros (plombavimas, kanalų gydymas ir kt.) naudojant nuskausminimą, užtikrinant komfortą.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Rekomendacijos ir priežiūra</h3>
              <p className="text-sm text-slate-600">Patarimai dėl priežiūros namuose ir kito vizito suplanavimas ilgalaikiam rezultatui užtikrinti.</p>
            </div>
          </div>
        </motion.section>

        {/* PROFILAKTIKA (BURBULAI) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kodėl svarbūs profilaktiniai patikrinimai?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <ShieldCheckIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Ankstyva diagnostika</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Leidžia nustatyti ėduonį ar uždegimą dar pradinėje stadijoje, kai nejaučiamas skausmas.
              </p>
            </div>
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <ClipboardListIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Paprastesnis gydymas</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Laiku pastebėtos problemos reikalauja mažesnės intervencijos, trumpesnio laiko ir mažesnių išlaidų.
              </p>
            </div>
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <HeartPulseIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Ilgalaikė sveikata</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Reguliarūs vizitai padeda išvengti netikėto skausmo ir išsaugoti natūralius dantis kuo ilgiau.
              </p>
            </div>
          </div>
        </motion.section>

        {/* KODĖL MES */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kodėl verta rinktis Bangų odontologijos kliniką Klaipėdoje?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Renkantis dantų gydymą svarbu ne tik greitai pašalinti problemą, bet ir užtikrinti ilgalaikį rezultatą bei saugų gydymo procesą. Bangų odontologijos klinikoje dantų taisymas ir gydymas atliekami vadovaujantis šiuolaikiniais odontologijos standartais, derinant patirtį, modernias technologijas ir individualų požiūrį į kiekvieną pacientą.
            </p>
            <p>
              Klinikoje dirbantys specialistai skiria ypatingą dėmesį tiksliai diagnostikai, aiškiam gydymo plano sudarymui ir nuosekliam jo įgyvendinimui. Tai leidžia pacientams suprasti gydymo eigą, pasirinkti tinkamiausius sprendimus ir jaustis užtikrintai viso proceso metu. Platus paslaugų spektras užtikrina, kad dantų tvarkymas Klaipėdoje būtų atliekamas vienoje vietoje – nuo profilaktikos iki sudėtingesnių gydymo ar atkūrimo procedūrų.
            </p>
            <p>
              Pacientai vertina ramų bendravimą, skaidrią kainodarą ir dėmesingą požiūrį, o teigiami atsiliepimai dažnai pabrėžia profesionalumą, komfortą ir pasitikėjimą galutiniu rezultatu. Tai leidžia Bangų odontologijos klinikai tapti patikimu pasirinkimu ieškantiems kokybiško ir atsakingo dantų gydymo.
            </p>
          </div>
        </motion.section>

        {/* PABAIGOS CTA */}
        <motion.div className="mt-8 mb-12 text-center" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kviečiame registruotis dantų gydymui Bangų klinikoje
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Jeigu jaučiate danties skausmą, pastebėjote diskomfortą ar tiesiog norite atlikti profilaktinį patikrinimą, kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Laiku pradėtas dantų gydymas padeda išvengti sudėtingesnių procedūrų ir išsaugoti natūralius dantis.
          </p>
          <Link to="/kontaktai" className="btn-primary rounded-full px-8 py-4 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
            Registruotis vizitui
          </Link>
        </motion.div>

      </motion.div>
    </AnimatedSection>
  )
}