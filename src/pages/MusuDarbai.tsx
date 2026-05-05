import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const cases = [
  {
    num: '01',
    category: 'All-on-4 Implantacija',
    image: '/musu-darbai/06.jpg',
    alt: 'All-on-4 implantacija — prieš ir po',
  },
  {
    num: '02',
    category: 'All-on-4 Implantacija',
    image: '/musu-darbai/41.jpg',
    alt: 'All-on-4 implantacija — prieš ir po',
  },
  {
    num: '03',
    category: 'All-on-4 Implantacija',
    image: '/musu-darbai/20.jpg',
    alt: 'All-on-4 implantacija — prieš ir po',
  },
]

export default function MusuDarbai() {
  return (
    <AnimatedSection>
      <SEO
        title="Mūsų darbai | Bangų klinika"
        description="Realūs pacientų rezultatai — All-on-4 implantacija, dantų atstatymas. Prieš ir po nuotraukos."
        canonical="/musu-darbai"
      />

      {/* Hero */}
      <div className="container-narrow pt-16 pb-10 sm:pt-24 sm:pb-14">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Mūsų darbai
          </h1>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Tikri pacientų atvejai - nuotraukos prieš procedūrą ir po jos.
          </p>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="mt-10 h-px bg-gradient-to-r from-slate-200 via-slate-100 to-transparent"
        />
      </div>

      {/* Cases */}
      <div className="container-narrow pb-20 sm:pb-28">
        <div className="space-y-20 sm:space-y-28">
          {cases.map((c, i) => (
            <motion.div
              key={c.num}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <div className={`flex flex-col-reverse ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-start`}>

                {/* Image */}
                <div className="w-full lg:w-[62%] shrink-0">
                  <div className="relative group rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-100">
                    <img
                      src={c.image}
                      alt={c.alt}
                      className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className={`w-full lg:w-[38%] pt-1 ${i % 2 === 1 ? 'lg:text-right' : ''}`}>
                  <div className={`flex items-center gap-3 mb-4 ${i % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    <span className="text-xs font-bold tabular-nums text-slate-300">{c.num}</span>
                    <div className="h-px w-8 bg-slate-200" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">All-on-4</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Taikant All-on-4 metodiką, visas dantų lankas atkuriamas ant 4 implantų per vieną vizitą. Pacientas išeina su funkcionuojančia šypsena tą pačią dieną.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="mt-20 sm:mt-28 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-24 sm:mt-32 relative overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-lg"
        >
          <div className="absolute inset-0 z-0">
            <img src="/hero.webp" alt="" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 md:via-white/75 to-transparent" />
          </div>
          <div className="relative z-10 px-8 py-14 sm:px-14 sm:py-20 max-w-lg">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-3">
              Norite tokio rezultato?
            </p>
            <p className="text-slate-500 text-base mb-8">
              Susisiekite — aptarsime tinkamiausią sprendimą jums.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/kontaktai#registracija"
                className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-primary-500/25"
              >
                Registruotis
              </Link>
              <a
                href="tel:+37067191399"
                className="inline-flex items-center justify-center bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm shadow-sm"
              >
                Skambinti
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
