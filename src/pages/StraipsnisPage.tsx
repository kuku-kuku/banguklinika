import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'
import { BLOG_POSTS, getPost, formatDate } from '../data/blog'
import { CLINIC } from '../data/clinic'

const C = {
  teal:     '#0ABBB5',
  deepTeal: '#043F42',
  charcoal: '#262626',
}

const W = 'max-w-7xl mx-auto px-6 lg:px-12'

function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const others = BLOG_POSTS.filter(p => p.slug !== currentSlug).slice(0, 3)
  return (
    <section className="py-14 border-t" style={{ borderColor: `${C.charcoal}10` }}>
      <div className={W}>
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-8" style={{ color: C.deepTeal }}>
            Kiti straipsniai
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-5">
          {others.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                to={`/straipsniai/${post.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full"
                style={{ borderColor: `${C.charcoal}12` }}
              >
                <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-slate-400 mb-1.5">{formatDate(post.date)}</p>
                  <h3
                    className="font-bold text-sm leading-snug transition-colors group-hover:text-[#0ABBB5]"
                    style={{ color: C.deepTeal }}
                  >
                    {post.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function StraipsnisPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = getPost(slug ?? '')

  if (!post) return <Navigate to="/straipsniai" replace />

  const SITE = 'https://www.banguklinika.lt'

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE}${post.coverImage}`,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Bangų odontologijos klinika',
      url: SITE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bangų odontologijos klinika',
      logo: { '@type': 'ImageObject', url: `${SITE}/Asset 64.svg` },
    },
  }

  const faqSchema = post.faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }
    : undefined

  return (
    <>
      <SEO
        title={`${post.title} | Bangų klinika`}
        description={post.excerpt}
        structuredData={articleSchema}
        lang="lt"
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-10">
        <div className={W}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
              <Link to="/" className="hover:text-slate-600 transition-colors">Pradžia</Link>
              <span>/</span>
              <Link to="/straipsniai" className="hover:text-slate-600 transition-colors">Straipsniai</Link>
              <span>/</span>
              <span className="text-slate-600 line-clamp-1">{post.title}</span>
            </nav>

            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-[11px] font-bold text-white"
                  style={{ background: C.teal }}
                >
                  {post.category}
                </span>
                <span className="text-xs text-slate-400">{formatDate(post.date)}</span>
                <span className="text-xs text-slate-400">· {post.readTime} min. skaitymas</span>
              </div>

              <h1
                className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] tracking-tight"
                style={{ color: C.deepTeal }}
              >
                {post.title}
              </h1>

              <p className="mt-4 text-lg text-slate-500 leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover image */}
      <section>
        <div className={W}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="rounded-[2rem] overflow-hidden shadow-lg"
            style={{ maxHeight: 480 }}
          >
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
              style={{ maxHeight: 480 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 md:py-16">
        <div className={W}>
          <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-16 xl:gap-20">

            {/* Main content */}
            <div>
              <article className="prose-article">
                {post.sections.map((section, i) => (
                  <AnimatedSection key={i}>
                    {section.image && (
                      <div className="not-prose my-6 rounded-2xl overflow-hidden shadow-md">
                        <img
                          src={section.image}
                          alt={section.h ?? ''}
                          className="w-full object-cover"
                          style={{ maxHeight: 420 }}
                        />
                      </div>
                    )}
                    {section.h && (
                      <h2 style={{ color: C.deepTeal }}>{section.h}</h2>
                    )}
                    {section.p.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </AnimatedSection>
                ))}

                {/* FAQ */}
                {post.faq && post.faq.length > 0 && (
                  <AnimatedSection>
                    <h2 style={{ color: C.deepTeal }}>Dažniausiai užduodami klausimai</h2>
                    <div className="not-prose space-y-4 mt-6">
                      {post.faq.map((item, i) => (
                        <div key={i}>
                          {item.preImage && (
                            <div className="rounded-2xl overflow-hidden shadow-md mb-4">
                              <img
                                src={item.preImage}
                                alt=""
                                className="w-full object-cover"
                                style={{ maxHeight: 380 }}
                              />
                            </div>
                          )}
                          <div
                            className="rounded-2xl border p-5"
                            style={{ borderColor: `${C.charcoal}12`, background: '#F4F5F4' }}
                          >
                            <p className="font-bold text-sm leading-snug mb-2" style={{ color: C.deepTeal }}>
                              {item.q}
                            </p>
                            <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AnimatedSection>
                )}
              </article>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-5">
                {/* CTA card */}
                <div
                  className="rounded-2xl p-6 text-white"
                  style={{ background: C.deepTeal }}
                >
                  <p className="text-xs font-bold tracking-[0.15em] uppercase mb-2" style={{ color: C.teal }}>
                    Pirmasis vizitas
                  </p>
                  <h3 className="text-lg font-bold leading-snug mb-3">
                    Pirminė konsultacija nemokama
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed mb-4">
                    Turite klausimų? Mūsų gydytojai įvertins situaciją ir pasiūlys tinkamiausią sprendimą.
                  </p>
                  <a
                    href={`tel:${CLINIC.phone}`}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90"
                    style={{ background: C.teal }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.4 2.11 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16z"/>
                    </svg>
                    {CLINIC.phone}
                  </a>
                  <Link
                    to="/kontaktai#registracija"
                    className="flex items-center justify-center w-full py-3 mt-2 rounded-xl font-bold text-sm transition-colors hover:bg-white/10"
                    style={{ border: `1.5px solid ${C.teal}50`, color: 'white' }}
                  >
                    Registruotis internetu
                  </Link>
                </div>

                {/* Other articles */}
                <div className="rounded-2xl border p-5" style={{ borderColor: `${C.charcoal}12` }}>
                  <h4 className="text-sm font-bold mb-4" style={{ color: C.deepTeal }}>
                    Kiti straipsniai
                  </h4>
                  <ul className="space-y-3">
                    {BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 4).map(p => (
                      <li key={p.slug}>
                        <Link
                          to={`/straipsniai/${p.slug}`}
                          className="text-sm leading-snug text-slate-600 hover:text-[#0ABBB5] transition-colors"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/straipsniai"
                    className="mt-4 block text-xs font-bold transition-colors hover:opacity-80"
                    style={{ color: C.teal }}
                  >
                    Visi straipsniai →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <RelatedPosts currentSlug={post.slug} />
    </>
  )
}
