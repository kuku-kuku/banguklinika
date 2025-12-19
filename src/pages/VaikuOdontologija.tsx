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

// Ikonos (Švelnesnės, vaikiškos temos)
function SmileIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export default function VaikuOdontologija() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Vaikų odontologija",
    "description": "Profesionali vaikų dantų priežiūra ir gydymas Klaipėdoje. Adaptaciniai vizitai, pieninių dantų gydymas.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klinika"
    }
  }

  return (
    <AnimatedSection>
      <SEO
        title="Vaikų Odontologas Klaipėdoje | Pieninių Dantų Gydymas | Bangų klinika"
        description="Profesionali vaikų odontologija Klaipėdoje. Pieninių dantų gydymas, profilaktika ir adaptaciniai vizitai be baimės. Registruokite vaiką vizitui."
        keywords="vaiku odontologas, pieniniu dantu gydymas, vaiku dantu prieziura, klaipeda, silantai, be baimes"
        structuredData={structuredData}
      />

      <motion.div className="container-narrow" variants={container} initial="hidden" animate="visible">
        
        {/* HERO */}
        <motion.header className="mb-10 text-center sm:text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionali vaikų odontologija Klaipėdoje
          </h1>
          
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            <p className="mb-4">
              Vaikų dantų priežiūra reikalauja ne tik odontologinių žinių, bet ir ypatingo dėmesio vaiko emocinei savijautai. Pirmieji apsilankymai pas odontologą dažnai formuoja vaiko požiūrį į dantų gydymą visam gyvenimui, todėl svarbu, kad ši patirtis būtų rami, saugi ir pozityvi.
            </p>
            <p>
              Bangų odontologijos klinikoje Klaipėdoje dirbantis vaikų odontologas siekia sukurti draugišką aplinką, kurioje vaikas jaustųsi suprastas ir nebijotų gydymo. Klinikoje didelis dėmesys skiriamas ne tik dantų gydymui, bet ir profilaktikai, adaptacijai bei nuosekliam vaiko supažindinimui su odontologinėmis procedūromis. Toks požiūris padeda formuoti teigiamus įpročius ir ilgalaikį pasitikėjimą gydytoju.
            </p>
          </div>

          {/* CTA MYGTUKAS VIRŠUJE */}
          <div className="flex justify-center sm:justify-start">
            <Link to="/kontaktai" className="btn-primary rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
              Registruotis vizitui
            </Link>
          </div>
        </motion.header>

        {/* KAS YRA VAIKŲ ODONTOLOGIJA */}
        <motion.section className="mb-12 bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas yra vaikų odontologija?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Vaikų odontologija – tai odontologijos sritis, skirta vaikų dantų ir burnos priežiūrai nuo pirmųjų pieninių dantų iki nuolatinių dantų susiformavimo. Ji apima ne tik dantų gydymą, bet ir profilaktiką, ankstyvą problemų nustatymą bei vaiko adaptaciją prie odontologinių vizitų.
            </p>
            <p>
              Vaikų dantys skiriasi nuo suaugusiųjų – pieniniai dantys yra jautresni, o ėduonis juose gali plisti greičiau. Dėl šios priežasties vaikų odontologijoje taikomi specialūs metodai ir medžiagos, pritaikytos vaiko amžiui ir dantų vystymosi etapui. Patyręs vaikų odontologas ne tik gydo dantis, bet ir moko vaiką bei tėvus taisyklingos burnos priežiūros, padedančios išvengti problemų ateityje.
            </p>
            <p>
              Tinkamai prižiūrimi pieniniai dantys yra svarbūs ne tik kramtymui ir kalbos vystymuisi, bet ir nuolatinių dantų sveikatai. Todėl reguliarios apžiūros ir laiku pradėta priežiūra yra svarbi vaiko burnos sveikatos dalis.
            </p>
          </div>
        </motion.section>

        {/* KODĖL SVARBU PRIŽIŪRĖTI (BURBULAI) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kodėl svarbu prižiūrėti pieninius dantis?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <SmileIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Vystymasis</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Pieniniai dantys padeda vaikui taisyklingai kramtyti, formuoti kalbą ir palaikyti vietą nuolatiniams dantims.
              </p>
            </div>
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <StarIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Greitas gedimas</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Pieninių dantų ėduonis vystosi greičiau. Laiku apsilankius, galima nustatyti pakitimus ir taikyti švelnius metodus.
              </p>
            </div>
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <HeartIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Ateities sveikata</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Paneigiame mitą, kad jų gydyti nereikia. Sveiki pieniniai dantys formuoja teigiamą vaiko požiūrį į burnos priežiūrą.
              </p>
            </div>
          </div>
        </motion.section>

        {/* KADA KREIPTIS (CHECKLIST) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kada vaikui reikalingas apsilankymas pas odontologą?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Pirmasis vaiko apsilankymas pas odontologą rekomenduojamas vos išdygus pirmiesiems dantims arba ne vėliau kaip iki vienerių metų amžiaus. Ankstyvas vizitas leidžia vaikui susipažinti su aplinka, o tėvams – gauti naudingų patarimų.
          </p>
          
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-darkblue-700">Į odontologą reikėtų kreiptis, jei pastebimi šie požymiai:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Vaikas skundžiasi dantų skausmu ar jautrumu",
                "Ant dantų matomos baltos ar tamsios dėmės",
                "Dantenos paraudusios ar kraujuoja",
                "Vaikas vengia kramtyti viena puse",
                "Atėjo laikas profilaktiniam patikrinimui (net jei nėra skausmo)"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <span className="mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* PASLAUGOS SĄRAŠAS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kokias vaikų odontologijos paslaugas teikiame?
          </h2>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft">
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {[
                "Konsultacijos ir profilaktiniai patikrinimai",
                "Pieninių dantų gydymas (vaikams pritaikytos medžiagos)",
                "Dantų plombavimas (ėduonies stabdymas)",
                "Ėduonies profilaktika",
                "Profesionali burnos higiena vaikams",
                "Dantų šalinimas (tik kai neišvengiama)"
              ].map((service, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-slate-700 mt-4 leading-relaxed">
            Platus paslaugų spektras leidžia užtikrinti, kad vaiko dantų priežiūra būtų nuosekli ir atliekama vienoje vietoje, o vaikų odontologas galėtų stebėti paciento dantų būklę ilgalaikėje perspektyvoje.
          </p>
        </motion.section>

        {/* KAINOS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Vaikų odontologijos kainos
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
            <p>
              Vaikų dantų gydymo kaina priklauso nuo vaiko amžiaus, dantų būklės, pasirinkto gydymo metodo ir procedūros sudėtingumo. Bangų odontologijos klinikoje prieš pradedant bet kokį gydymą pirmiausia atliekama apžiūra.
            </p>
          </div>

          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
            <div className="divide-y divide-slate-100">
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Pirminė konsultacija ir profilaktika</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">20 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Pieninių dantų tvarkymas (gydymas)</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">nuo 50 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Stiklojonomerinė / kompomerinė plomba</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">nuo 30 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Komplikuoto ėduonies gydymas</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">nuo 60 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Adaptacinis vizitas (iki 30 min.)</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">nuo 30 €</span>
              </div>
            </div>
          </div>
          
          <p className="text-slate-700 leading-relaxed text-sm">
            Galutinė vaikų dantų gydymo kaina aptariama individualiai, atsižvelgiant į konkrečią situaciją ir vaiko poreikius. Skaidrus kainų pateikimas leidžia tėvams jaustis ramiai planuojant vaiko odontologinę priežiūrą.
          </p>
        </motion.section>

        {/* KAIP VYKSTA GYDYMAS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kaip vyksta vaikų dantų gydymas klinikoje?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Adaptacija ir apžiūra</h3>
              <p className="text-sm text-slate-600">Ramus susipažinimas su odontologu ir aplinka. Apžiūra atliekama neskubant, paaiškinant vaikui suprantama kalba.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Gydymas (jei reikia)</h3>
              <p className="text-sm text-slate-600">Atliekamas švelniai, vaiko tempu. Naudojamos vaikams pritaikytos priemonės, daromos pertraukos.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Paskatinimas</h3>
              <p className="text-sm text-slate-600">Vaikas paskatinamas už drąsą, tėvams suteikiamos rekomendacijos dėl priežiūros namuose.</p>
            </div>
          </div>
          <p className="text-slate-700 mt-6 leading-relaxed">
            Toks nuoseklus ir ramus procesas padeda sukurti teigiamą patirtį ir mažina baimę ateities vizitams.
          </p>
        </motion.section>

        {/* PATARIMAI TĖVAMS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kaip paruošti vaiką vizitui?
          </h2>
          <div className="bg-brand-50/30 p-6 rounded-2xl border border-brand/10">
            <h3 className="font-semibold text-darkblue-700 mb-4">Tėvams rekomenduojama:</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>Apie vizitą kalbėti ramiai ir pozityviai, vengti bauginančių žodžių.</li>
              <li>Paaiškinti, kad odontologas padeda dantukams būti sveikiems.</li>
              <li>Nevartoti žodžių, susijusių su skausmu ar baime.</li>
              <li>Pasirinkti vizitui laiką, kai vaikas yra pailsėjęs ir geros nuotaikos.</li>
            </ul>
          </div>
        </motion.section>

        {/* SKAUSMAS IR KODĖL MES */}
        <motion.section className="mb-12 space-y-8" variants={item}>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Ar vaikų dantų gydymas yra skausmingas?
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Šiuolaikinėje vaikų odontologijoje didelis dėmesys skiriamas komfortui. Procedūros dažniausiai atliekamos be skausmo arba su minimaliu diskomfortu, naudojant vaikams pritaikytus nuskausminimo metodus. Daugeliu atvejų didžiausią baimę sukelia nežinomybė, todėl aiškus paaiškinimas ir draugiškas bendravimas padeda sukurti teigiamą patirtį.
            </p>
          </div>
          
          <div>
             <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Kodėl verta rinktis Bangų odontologijos kliniką Klaipėdoje?
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Mūsų klinikoje vaikų odontologija grindžiama kantrybe, pagarba vaiko jausmams ir nuosekliu pasitikėjimo kūrimu. Kiekvienas vaikas vertinamas individualiai, skiriant laiko adaptacijai. Tėvai vertina ramią aplinką, aiškią komunikaciją ir nuoširdų specialistų bendravimą su mažaisiais pacientais.
            </p>
          </div>
        </motion.section>

        {/* PABAIGOS CTA */}
        <motion.div className="mt-8 mb-12 text-center" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kviečiame registruotis vaikų odontologo konsultacijai Bangų klinikoje
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Jeigu norite pasirūpinti savo vaiko dantų sveikata nuo pat pirmųjų dantukų arba pastebėjote požymių, kad reikalingas gydymas, kviečiame registruotis vizitui Bangų odontologijos klinikoje. Ankstyva priežiūra padeda išvengti sudėtingesnių problemų ir leidžia vaikui priprasti prie odontologo be streso.
          </p>
          <Link to="/kontaktai" className="btn-primary rounded-full px-8 py-4 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
            Registruotis vizitui
          </Link>
        </motion.div>

      </motion.div>
    </AnimatedSection>
  )
}