import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

interface Friend {
  key: string
  url: string
  name: string
  alt: string
}

const friends: Friend[] = [
  { key: 'biomed', url: 'https://biomed.lt/', name: 'biomed.lt', alt: 'Biomed laboratorija' },
  { key: 'sportuok', url: 'https://sportuok.lt/', name: 'sportuok.lt', alt: 'Sportuok.lt sporto klubas' },
  { key: 'medicija', url: 'https://medicija.lt/', name: 'medicija.lt', alt: 'Medicija klinika' },
  { key: 'placenta', url: 'https://placenta.lt/', name: 'placenta.lt', alt: 'Placenta klinika' },
  { key: 'mrbiceps', url: 'https://www.mrbiceps.lt/', name: 'mrbiceps.lt', alt: 'Mr. Biceps sporto klubas' },
  { key: '32balti', url: 'https://32balti.lt/', name: '32balti.lt', alt: '32 Balti odontologijos klinika' },
  { key: 'egosmart', url: 'https://egosmart.lt/', name: 'egosmart.lt', alt: 'EgoSmart' },
  { key: 'cybercity', url: 'https://cybercity.lt/', name: 'cybercity.lt', alt: 'CyberCity' },
  { key: 'torx', url: 'https://torx.lt/', name: 'torx.lt', alt: 'Torx' },
  { key: 'kondicionieriai24', url: 'https://kondicionieriai24.lt/', name: 'kondicionieriai24.lt', alt: 'Kondicionieriai 24' },
  { key: 'silumossiurbliai24', url: 'https://silumossiurbliai24.lt/', name: 'silumossiurbliai24.lt', alt: 'Šilumos siurbliai 24' },
  { key: 'emplonet', url: 'https://emplonet.lt/', name: 'emplonet.lt', alt: 'Emplonet darbo skelbimai' },
  { key: 'specdarbai', url: 'https://www.specdarbai.lt/', name: 'specdarbai.lt', alt: 'Specdarbai' },
  { key: 'borga', url: 'https://www.borga.lt/', name: 'borga.lt', alt: 'Borga' },
  { key: 'laoda', url: 'https://www.laoda.lt/', name: 'laoda.lt', alt: 'Laoda' },
  { key: 'atvila', url: 'https://www.atvila.lt/lt', name: 'atvila.lt', alt: 'Atvila' },
  { key: 'vairuoti', url: 'https://www.vairuoti.lt/', name: 'vairuoti.lt', alt: 'Vairuoti.lt vairavimo mokykla' },
  { key: 'fishwish', url: 'https://fishwish.eu/', name: 'fishwish.eu', alt: 'Fishwish žvejyba' },
  { key: 'homosanus', url: 'https://www.homosanus.lt/', name: 'homosanus.lt', alt: 'Homo Sanus klinika Vilniuje' },
]

function FriendSlot({ friend }: { friend: Friend }) {
  return (
    <motion.a
      variants={item}
      href={friend.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center aspect-[3/2] bg-white rounded-[2rem] border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden"
    >
      <img
        src={`/friends/${friend.key}.png`}
        alt={friend.alt}
        className="w-full h-full object-cover transform-gpu will-change-transform group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </motion.a>
  )
}

export default function Draugai() {
  return (
    <AnimatedSection>
      <SEO title="Draugai | Bangų klinika" description="Mūsų partneriai ir draugai." />

      <div className="container-narrow py-20 sm:py-32">
        {/* Headeris su daugiau erdvės */}
        <header className="mb-24 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-darkblue-700 tracking-tight mb-8">
            Mūsų Draugai
          </h1>
          <p className="text-xl sm:text-2xl text-slate-500 font-light leading-relaxed">
            Vertiname kokybę ir patikimumą, todėl džiaugiamės galėdami dirbti kartu su šiais projektais bei įmonėmis.
          </p>
        </header>

        {/* Erdvesnis tinklelis: max 3 stulpeliai, kad kortelės būtų didelės */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10"
        >
          {friends.map(f => (
            <FriendSlot key={f.key} friend={f} />
          ))}
        </motion.div>

        {/* CTA blokas */}
        <footer className="mt-40">
          <div className="relative overflow-hidden rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 bg-white px-12 sm:px-16 py-12 sm:py-14">
            {/* Logo decoration – right side, fades in from left */}
            <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-end pointer-events-none select-none">
              <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent z-10" />
              <img src="/logo.png" alt="" aria-hidden="true" className="h-4/5 object-contain opacity-20" />
            </div>
            {/* Text content */}
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-darkblue-700 mb-4">Turite idėjų bendradarbiavimui?</h2>
              <p className="text-slate-500 text-lg mb-8">
                Mes visada ieškome naujų draugų ir galimybių augti kartu.
              </p>
              <Link
                to="/kontaktai"
                className="inline-block bg-brand hover:bg-brand/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105"
              >
                Parašykite mums
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </AnimatedSection>
  )
}