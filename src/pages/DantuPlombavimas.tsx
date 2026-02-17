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

function ToothIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export default function DantuPlombavimas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Dantų plombavimas",
    "description": "Profesionalus dantų plombavimas Klaipėdoje. Estetinis ir gydomasis plombavimas, ėduonies gydymas.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klinika"
    }
  }

  return (
    <AnimatedSection>
      <SEO
        title="Dantų plombavimas Klaipėdoje | Kaina - Bangų klinika"
        description="Profesionalus dantų plombavimas Klaipėdoje. Estetinis ir funkcinis plombavimas, karieso gydymas, kokybiškos medžiagos ir ilgalaikis rezultatas."
        keywords="dantu plombavimas, estetinis plombavimas, dantu gydymas, eduonis, klaipeda, odontologas"
        structuredData={structuredData}
      />

      <motion.div className="container-narrow" variants={container} initial="hidden" animate="visible">

        {/* HERO */}
        <motion.header className="mb-12 text-center sm:text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionalus danties plombavimas Klaipėdoje
          </h1>
          <p className="text-xl text-brand font-medium mb-6">
            Danties funkcijos ir estetikos atkūrimas
          </p>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            <p className="mb-4">
              Dantų plombavimas yra viena dažniausiai atliekamų odontologinių procedūrų, skirta sustabdyti danties pažeidimų progresavimą ir atkurti jo funkciją bei sandarumą. Laiku atliktas danties plombavimas padeda apsaugoti dantį nuo tolimesnio gedimo, sumažinti skausmo riziką ir išvengti sudėtingesnio gydymo ateityje.
            </p>
            <p>
              Bangų odontologijos klinikoje Klaipėdoje atliekamas danties plombavimas grindžiamas kruopščia diagnostika, moderniomis plombinėmis medžiagomis ir individualiu požiūriu į kiekvieną pacientą. Procedūros metu siekiama ne tik pašalinti pažeistus audinius, bet ir atkurti natūralią danties formą bei kramtymo funkciją. Prieš gydymą įvertinama danties būklė, todėl parenkamas tinkamiausias plombavimo būdas, užtikrinantis ilgalaikį ir patikimą rezultatą.
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
            Danties plombavimo kaina
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 mb-6">
            <p>
              Danties plombavimo kaina priklauso nuo danties būklės, pažeidimo apimties, naudojamų medžiagų ir procedūros sudėtingumo. Prieš pradedant gydymą Bangų odontologijos klinikoje visuomet atliekama konsultacija ir profilaktinis patikrinimas, kurių metu sudaromas individualus gydymo planas.
            </p>
          </div>

          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden">
            <div className="divide-y divide-slate-100">
              {[
                { name: "Konsultacija, profilaktinis patikrinimas", price: "20 €" },
                { name: "Danties plombavimas helio plomba", price: "70 – 90 €" },
                { name: "Danties plombavimas stiklojonomerine plomba", price: "40 – 60 €" },
                { name: "Laikina plomba", price: "nuo 40 €" },
                { name: "Gydomasis pamušalas (kalcio/stiklojonomerinis)", price: "nuo 15 €" },
                { name: "Nuskausminimas", price: "10 €" },
                { name: "Vienkartinės priemonės", price: "15 €" },
                { name: "Rentgeno nuotrauka", price: "10 €" },
                { name: "Koferdamo sistemos naudojimas", price: "10 €" }
              ].map((service, index) => (
                <div key={index} className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                  <span className="text-slate-700 font-medium">{service.name}</span>
                  <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">{service.price}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            Tiksli danties plombavimo kaina aptariama individualios konsultacijos metu.
          </p>
          </div>
        </motion.header>

        {/* KAS TAI YRA */}
        <motion.section className="mb-14" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6 text-center sm:text-left">
            Kas yra danties plombavimas?
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            <p className="mb-4">
              Danties plombavimas – tai odontologinė procedūra, kurios metu pašalinami ėduonies ar kitaip pažeisti danties audiniai, o susidariusi ertmė atkuriama specialia plombine medžiaga. Tokiu būdu dantis tampa sandarus, atgauna savo funkciją ir yra apsaugomas nuo bakterijų patekimo bei tolimesnio gedimo.
            </p>
            <p>
              Plombavimo metu atkuriama ne tik danties struktūra, bet ir jo anatominė forma, leidžianti taisyklingai kramtyti ir išvengti netolygaus apkrovimo. Priklausomai nuo pažeidimo gylio ir vietos, gali būti taikomi skirtingi plombavimo sprendimai – nuo paprasto paviršinio plombavimo iki gilesnių restauracijų.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <ToothIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Funkcijos atkūrimas</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Atkuriama danties kramtymo funkcija ir anatominė forma, leidžianti išvengti sąkandžio problemų.
              </p>
            </div>
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <ShieldIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Apsauga ir sandarumas</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Užkertamas kelias bakterijų plitimui ir danties nervo pažeidimams.
              </p>
            </div>
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <ClockIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Ilgaamžiškumas</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Laiku atliktas plombavimas leidžia išsaugoti natūralų dantį ilgus metus.
              </p>
            </div>
          </div>
        </motion.section>

        {/* KADA REIKALINGA */}
        <motion.section className="mb-14" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kada reikalingas dantų plombavimas?
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-6">
            <p>
              Dantų plombavimas reikalingas tuomet, kai danties audiniai yra pažeisti ir būtina sustabdyti tolimesnį gedimo procesą. Dažniausiai plombavimas atliekamas ankstyvose stadijose, kai problemą dar galima išspręsti konservatyviai. Į odontologą rekomenduojama kreiptis, jei pastebimi šie požymiai:
            </p>
          </div>
          <div className="grid sm:grid-cols-1 gap-4">
            {[
              "Matomi ėduonies pažeidimai ar tamsios dėmės ant danties paviršiaus",
              "Danties skausmas ar jautrumas šalčiui, karščiui ar saldumui",
              "Nuskilęs ar įtrūkęs dantis, pažeistas kramtant ar dėl traumos",
              "Senos, nesandarios plombos, kurios gali leisti bakterijoms patekti į danties vidų",
              "Maisto strigimas ar nemalonus pojūtis konkrečioje danties vietoje"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <span className="mt-1"><CheckIcon /></span>
                <span className="text-slate-700 font-medium">{text}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-slate-700 italic">
            Laiku atliktas plombavimas padeda apsaugoti dantį nuo tolimesnio irimo, sumažina skausmo riziką ir leidžia išvengti šaknų kanalų gydymo ar danties netekimo ateityje.
          </p>
        </motion.section>

        {/* PLOMBAVIMO TIPAI */}
        <motion.section className="mb-14" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kokie dantų plombavimo tipai taikomi?
          </h2>
          <p className="text-slate-700 mb-6">
            Dantų plombavimas nėra vienodas visiems pacientams – plombavimo tipas parenkamas atsižvelgiant į danties pažeidimo pobūdį, gylį ir vietą. Bangų odontologijos klinikoje kiekvienam pacientui sudaromas individualus gydymo planas.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Gydomasis (funkcinis) plombavimas", desc: "Skirtas ėduonies pažeistiems dantims atkurti ir apsaugoti nuo tolimesnio gedimo." },
              { title: "Estetinis plombavimas", desc: "Kai atkuriama ne tik danties funkcija, bet ir jo forma bei spalva (ypač aktualu priekiniams dantims)." },
              { title: "Laikinas plombavimas", desc: "Taikomas tarp gydymo etapų arba kai reikia stebėti danties būklę prieš nuolatinį plombavimą." },
              { title: "Gilus plombavimas", desc: "Kai pažeidimas yra arti danties nervo ir reikalingas ypatingas tikslumas bei papildomos apsauginės medžiagos." }
            ].map((type, i) => (
              <div key={i} className="bg-brand-50/50 p-5 rounded-xl border border-brand/10 hover:bg-brand-50 transition">
                <h3 className="font-bold text-darkblue-700 mb-2">{type.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* EIGA (STEPS) */}
        <motion.section className="mb-14" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kaip atliekamas dantų plombavimas?
          </h2>
          <p className="text-slate-700 mb-8">
            Dantų plombavimas Bangų odontologijos klinikoje atliekamas laikantis aiškios, saugios ir pacientui suprantamos procedūros eigos.
          </p>
          <div className="grid gap-6 md:grid-cols-2">

            {/* 01 */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group">
              {/* PAKEITIMAS: buvo "-top-4 -right-4", dabar "top-0 right-4" kad būtų viduje */}
              <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">
                01
              </div>
              <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Apžiūra ir diagnostika</h3>
              <p className="text-sm text-slate-600 relative z-10">
                Odontologas įvertina danties būklę, nustato pažeidimo gylį ir, jei reikia, atlieka rentgeno tyrimą. Tai leidžia tiksliai suplanuoti gydymą.
              </p>
            </div>

            {/* 02 */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">
                02
              </div>
              <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Audinių paruošimas</h3>
              <p className="text-sm text-slate-600 relative z-10">
                Pašalinami ėduonies pažeisti ar susilpnėję danties audiniai, siekiant užtikrinti, kad bakterijos neplistų toliau. Svarbu švariai išvalyti ertmę.
              </p>
            </div>

            {/* 03 */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">
                03
              </div>
              <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Plombavimas</h3>
              <p className="text-sm text-slate-600 relative z-10">
                Paruošta ertmė atkuriama modernia plombine medžiaga, atstatant natūralią danties formą. Medžiaga sluoksniuojama ir kietinama.
              </p>
            </div>

            {/* 04 */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">
                04
              </div>
              <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Poliravimas</h3>
              <p className="text-sm text-slate-600 relative z-10">
                Plomba koreguojama ir poliruojama, kad būtų lygi, patogi sukandus ir natūraliai derėtų su kitais dantimis.
              </p>
            </div>

          </div>
        </motion.section>

        {/* INFO BLOKAI (DUK ir PATARIMAI) */}
        <motion.section className="mb-14" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Svarbi informacija pacientams
          </h2>
          <div className="space-y-6">
            <div className="bg-brand-50/30 p-6 rounded-2xl border border-brand/10">
              <h3 className="font-bold text-lg text-darkblue-700 mb-3">Ar dantų plombavimas skausmingas?</h3>
              <p className="text-slate-700 leading-relaxed">
                Dantų plombavimas dažniausiai atliekamas be skausmo, taikant vietinę nejautrą. Prieš procedūrą odontologas pasirūpina, kad jaustumėtės komfortiškai. Procedūros metu galite jausti tik nežymų spaudimą ar vibraciją. Po plombavimo kai kuriais atvejais gali pasireikšti laikinas jautrumas, kuris greitai praeina.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-lg text-darkblue-700 mb-3">Kiek laiko tarnauja dantų plombos?</h3>
              <p className="text-slate-700 leading-relaxed">
                Tarnavimo laikas priklauso nuo plombos dydžio, vietos ir priežiūros. Kokybiškai atliktos plombos tarnauja daugelį metų. Didžiausią įtaką ilgaamžiškumui turi asmeninė burnos higiena ir reguliarūs profilaktiniai patikrinimai, leidžiantys laiku pastebėti ir pakoreguoti senas plombas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-lg text-darkblue-700 mb-3">Ką svarbu žinoti po dantų plombavimo?</h3>
              <p className="text-slate-700 leading-relaxed">
                Pirmosiomis valandomis po gydymo rekomenduojama vengti kieto maisto ir nekramtyti plombuota puse, ypač jei buvo taikyta nejautra (kad neįsikąstumėte). Jei jaučiate laikiną jautrumą šalčiui ar kramtant – tai normalu ir dažniausiai praeina per kelias dienas. Svarbiausia – kruopšti kasdienė higiena.
              </p>
            </div>
          </div>
        </motion.section>

        {/* KODĖL MES & FINAL CTA */}
        <motion.div className="mt-8 mb-12 text-center" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kodėl verta rinktis Bangų odontologijos kliniką?
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Renkantis danties plombavimą svarbu ne tik kaina, bet ir kokybė. Bangų odontologijos klinikoje naudojame modernias medžiagas ir technologijas, užtikriname skaidrią kainodarą ir profesionalumą. Mūsų specialistai kiekvieną atvejį vertina individualiai, siekdami ilgaamžio ir estetiško rezultato.
          </p>

          <div className="bg-brand-50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="font-bold text-xl text-darkblue-700 mb-3">Kviečiame registruotis vizitui</h3>
            <p className="text-slate-600 mb-6">
              Jeigu pastebėjote danties pažeidimus, jautrumą ar skausmą, nelaukite. Laiku atliktas gydymas padeda išsaugoti dantis.
            </p>
            <Link to="/kontaktai" className="btn-primary rounded-full px-8 py-4 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
              Registruotis vizitui
            </Link>
          </div>
        </motion.div>

      </motion.div>
    </AnimatedSection>
  )
}