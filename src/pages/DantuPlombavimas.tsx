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
        title="Dantų Plombavimas Klaipėdoje | Kaina ir Gydymas | Bangų klinika"
        description="Profesionalus dantų plombavimas Klaipėdoje. Estetinis ir funkcinis plombavimas, karieso gydymas, kokybiškos medžiagos ir ilgalaikis rezultatas."
        keywords="dantu plombavimas, estetinis plombavimas, dantu gydymas, eduonis, klaipeda, odontologas"
        structuredData={structuredData}
      />

      <motion.div className="container-narrow" variants={container} initial="hidden" animate="visible">
        
        {/* HERO */}
        <motion.header className="mb-10 text-center sm:text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-4">
            Profesionalus danties plombavimas Klaipėdoje
          </h1>
          <p className="text-xl text-brand font-medium mb-6">
            Danties funkcijos ir estetikos atkūrimas
          </p>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
            <p className="mb-4">
              Dantų plombavimas yra viena dažniausiai atliekamų odontologinių procedūrų, skirta sustabdyti danties pažeidimų progresavimą ir atkurti jo funkciją bei sandarumą. Laiku atliktas danties plombavimas padeda apsaugoti dantį nuo tolimesnio gedimo, sumažinti skausmo riziką ir išvengti sudėtingesnio gydymo ateityje.
            </p>
            <p>
              Bangų odontologijos klinikoje Klaipėdoje atliekamas danties plombavimas grindžiamas kruopščia diagnostika, moderniomis plombinėmis medžiagomis ir individualiu požiūriu į kiekvieną pacientą. Procedūros metu siekiama ne tik pašalinti pažeistus audinius, bet ir atkurti natūralią danties formą bei kramtymo funkciją.
            </p>
          </div>
        </motion.header>

        {/* KAS TAI YRA (BURBULAI) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6 text-center sm:text-left">
            Kas yra danties plombavimas?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <ToothIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Funkcijos atkūrimas</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Tai procedūra, kurios metu pašalinami pažeisti audiniai, o ertmė atkuriama specialia medžiaga. Dantis atgauna savo funkciją ir formą.
              </p>
            </div>
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <ShieldIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Apsauga</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Plombavimas padaro dantį sandarų ir apsaugo nuo bakterijų patekimo bei tolimesnio gedimo ar skausmo rizikos.
              </p>
            </div>
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <ClockIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Prevencija</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Laiku atliktas plombavimas leidžia išvengti sudėtingesnio gydymo, pavyzdžiui, šaknų kanalų gydymo ar danties netekimo.
              </p>
            </div>
          </div>
        </motion.section>

        {/* KADA REIKALINGA (CHECKLIST) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kada reikalingas dantų plombavimas?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Matomi ėduonies pažeidimai ar tamsios dėmės ant paviršiaus",
              "Danties skausmas ar jautrumas šalčiui, karščiui, saldumui",
              "Nuskilęs ar įtrūkęs dantis (dėl traumos ar kramtymo)",
              "Senos, nesandarios plombos",
              "Maisto strigimas konkrečioje danties vietoje"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <span className="mt-1"><CheckIcon /></span>
                <span className="text-slate-700 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* PLOMBAVIMO TIPAI */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kokie dantų plombavimo tipai taikomi?
          </h2>
          <div className="space-y-4">
             {[
               { title: "Gydomasis (funkcinis) plombavimas", desc: "Skirtas ėduonies pažeistiems dantims atkurti ir apsaugoti." },
               { title: "Estetinis plombavimas", desc: "Kai atkuriama ne tik funkcija, bet ir danties forma bei spalva (dažniausiai priekiniams dantims)." },
               { title: "Laikinas plombavimas", desc: "Taikomas tarp gydymo etapų arba stebint danties būklę." },
               { title: "Gilus plombavimas", desc: "Kai pažeidimas arti nervo, reikalingas ypatingas tikslumas ir apsauga." }
             ].map((type, i) => (
               <div key={i} className="bg-brand-50/50 p-4 rounded-xl border border-brand/10">
                 <h3 className="font-bold text-darkblue-700 mb-1">{type.title}</h3>
                 <p className="text-sm text-slate-700">{type.desc}</p>
               </div>
             ))}
          </div>
        </motion.section>

        {/* KAINOS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Danties plombavimo kaina
          </h2>
          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden">
            <div className="p-4 bg-brand-50/30 border-b border-brand/10 text-sm text-slate-700">
              Prieš pradedant gydymą visuomet atliekama konsultacija (20 €), kurios metu sudaromas individualus planas.
            </div>
            <div className="divide-y divide-slate-100">
              {[
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
        </motion.section>

        {/* EIGA (STEPS) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kaip atliekamas dantų plombavimas?
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Diagnostika</h3>
              <p className="text-sm text-slate-600">Apžiūra, rentgeno tyrimas ir gydymo plano sudarymas.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Valymas</h3>
              <p className="text-sm text-slate-600">Pašalinami ėduonies pažeisti audiniai, paruošiama ertmė.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Plombavimas</h3>
              <p className="text-sm text-slate-600">Ertmė užpildoma medžiaga, atstatoma natūrali danties forma.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Poliravimas</h3>
              <p className="text-sm text-slate-600">Plomba koreguojama ir poliruojama, kad būtų lygi ir patogi.</p>
            </div>
          </div>
        </motion.section>

        {/* DUK */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Dažniausi klausimai
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Ar dantų plombavimas skausmingas?</h3>
              <p className="text-slate-600 text-sm">Dažniausiai procedūra atliekama su vietine nejautra, todėl skausmo nejaučiama. Gali būti jaučiamas tik nedidelis spaudimas ar vibracija.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Kiek laiko tarnauja plombos?</h3>
              <p className="text-slate-600 text-sm">Tarnavimo laikas priklauso nuo plombos dydžio, vietos ir priežiūros. Kokybiškai atliktos plombos tarnauja daugelį metų.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Ką daryti po plombavimo?</h3>
              <p className="text-slate-600 text-sm">Pirmas valandas rekomenduojama nevalgyti (ypač jei buvo nejautra). Gali būti trumpalaikis jautrumas, kuris greitai praeina.</p>
            </div>
          </div>
        </motion.section>

        {/* KODĖL MES & CTA */}
        <motion.div className="mt-8 mb-12 text-center" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kodėl verta rinktis Bangų kliniką?
          </h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Mūsų klinikoje dantų plombavimas atliekamas naudojant modernias medžiagas ir technologijas. Užtikriname skaidrią kainodarą, profesionalumą ir ilgalaikį rezultatą.
          </p>
          <Link to="/kontaktai" className="btn-primary rounded-full px-8 py-4 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
            Registruotis vizitui
          </Link>
        </motion.div>

      </motion.div>
    </AnimatedSection>
  )
}