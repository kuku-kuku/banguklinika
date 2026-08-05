import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { BLOG_POSTS_LV, formatDateLv } from '../../data/blogLv'
import { SITE_URL } from '../../i18n/lv'

const C = {
  teal:     '#0ABBB5',
  deepTeal: '#043F42',
  charcoal: '#262626',
}

const W = 'max-w-7xl mx-auto px-6 lg:px-12'

const CATEGORY_COLORS: Record<string, string> = {
  'Neatliekamā palīdzība': C.teal,
  'Zobu ārstniecība':      C.deepTeal,
  'Mutes ķirurģija':       '#6366f1',
  'Zobu implantācija':     '#0891b2',
  'Mutes higiēna':         '#0891b2',
  'Zobu balināšana':       '#f59e0b',
  'Endodontija':           '#8b5cf6',
  'Bērnu zobārstniecība':  '#ec4899',
}

export default function RakstiLv() {
  return (
    <>
      <SEO
        lang="lv"
        title="Raksti par zobu veselību | Bangų klīnika"
        description="Noderīga informācija par zobu veselību, ārstniecību un aprūpi. Zobārstu padomi, atbildes uz biežāk uzdotajiem jautājumiem un aktuālas tēmas no Bangų klīnikas."
        canonical={`${SITE_URL}/lv/raksti`}
      />

      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className={W}>
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: C.teal }}>
                Bangų klīnikas blogs
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]" style={{ color: C.deepTeal }}>
                Raksti par<br />zobu veselību
              </h1>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed max-w-xl">
                Noderīga informācija, zobārstu padomi un atbildes uz biežāk uzdotajiem jautājumiem par zobu ārstniecību un aprūpi.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Posts grid */}
      <section className="pb-20 md:pb-28">
        <div className={W}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {BLOG_POSTS_LV.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.4, 0, 0.2, 1] }}
              >
                <Link
                  to={`/lv/raksti/${post.slug}`}
                  className="group flex flex-col rounded-2xl overflow-hidden bg-white border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl h-full"
                  style={{ borderColor: `${C.charcoal}12` }}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(to top, ${C.deepTeal}60, transparent)` }}
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white"
                        style={{ background: CATEGORY_COLORS[post.category] ?? C.teal }}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-5 lg:p-6">
                    <div className="flex items-center gap-3 mb-3 text-xs text-slate-400">
                      <span>{formatDateLv(post.date)}</span>
                      <span>·</span>
                      <span>{post.readTime} min. lasījums</span>
                    </div>

                    <h2
                      className="font-bold text-base lg:text-[17px] leading-snug mb-3 transition-colors duration-200 group-hover:text-[#0ABBB5]"
                      style={{ color: C.deepTeal }}
                    >
                      {post.title}
                    </h2>

                    <p className="text-sm text-slate-500 leading-relaxed flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div
                      className="flex items-center gap-1.5 mt-4 text-xs font-bold transition-all duration-200 group-hover:gap-2.5"
                      style={{ color: C.teal }}
                    >
                      Lasīt vairāk <span>→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
