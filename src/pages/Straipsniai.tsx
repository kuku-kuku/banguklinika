import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { BLOG_POSTS, formatDate } from '../data/blog'

const C = {
  teal:     '#0ABBB5',
  deepTeal: '#043F42',
  charcoal: '#262626',
  soft:     '#F4F5F4',
}

const W = 'max-w-7xl mx-auto px-6 lg:px-12'

const CATEGORY_COLORS: Record<string, string> = {
  'Skubi pagalba':     C.teal,
  'Dantų gydymas':    C.deepTeal,
  'Dantų chirurgija': '#6366f1',
  'Dantų implantacija': '#0891b2',
}

export default function Straipsniai() {
  return (
    <>
      <SEO
        title="Straipsniai apie dantų sveikatą | Bangų klinika"
        description="Naudinga informacija apie dantų sveikatą, gydymą ir priežiūrą. Odontologų patarimai, atsakymai į dažniausius klausimus ir aktualios temos iš Bangų klinikos."
        lang="lt"
      />

      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className={W}>
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: C.teal }}>
                Bangų klinikos blogas
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]" style={{ color: C.deepTeal }}>
                Straipsniai apie<br />dantų sveikatą
              </h1>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed max-w-xl">
                Naudinga informacija, odontologų patarimai ir atsakymai į dažniausius klausimus apie dantų gydymą ir priežiūrą.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Posts grid */}
      <section className="pb-20 md:pb-28">
        <div className={W}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {BLOG_POSTS.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.4, 0, 0.2, 1] }}
              >
                <Link
                  to={`/straipsniai/${post.slug}`}
                  className="group flex flex-col rounded-2xl overflow-hidden bg-white border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl h-full"
                  style={{ borderColor: `${C.charcoal}12` }}
                >
                  {/* Image */}
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
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white"
                        style={{ background: CATEGORY_COLORS[post.category] ?? C.teal }}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5 lg:p-6">
                    <div className="flex items-center gap-3 mb-3 text-xs text-slate-400">
                      <span>{formatDate(post.date)}</span>
                      <span>·</span>
                      <span>{post.readTime} min. skaitymas</span>
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
                      Skaityti daugiau <span>→</span>
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
