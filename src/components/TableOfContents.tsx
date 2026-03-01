import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export interface TocSection {
  id: string
  label: string
}

interface TableOfContentsProps {
  sections: TocSection[]
  title?: string
  /**
   * Labai rekomenduojama paduoti rootRef (page wrapper ref),
   * kad TOC nepagautų senų puslapių elementų per route transitions (duplicate IDs).
   *
   * Pvz:
   * const pageRef = useRef<HTMLDivElement>(null)
   * <motion.div ref={pageRef}> <TableOfContents rootRef={pageRef} ... />
   */
  rootRef?: React.RefObject<HTMLElement>
}

function escapeId(id: string) {
  // reikalinga, nes turi id su lietuviškom raidėm pvz "procedūros"
  // ir querySelector turi gauti saugų selektorių
  // @ts-ignore
  return window.CSS && CSS.escape
    ? CSS.escape(id)
    : id.replace(/([ #;?%&,.+*~\\':"!^$[\]()=>|\/@])/g, "\\$1")
}

export function TableOfContents({ sections, title = "Turinys", rootRef }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")
  const [isOpen, setIsOpen] = useState(false)
  const tocRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const OFFSET = 160 // navbar + sticky toc + buffer
    const first = sections[0]?.id ?? ""
    setActiveId(first)

    const getEl = (id: string) => {
      const root = rootRef?.current
      if (root) {
        // ieškom tik šiame puslapyje (sprendžia duplicate id problemą per page transitions)
        return root.querySelector<HTMLElement>(`#${escapeId(id)}`)
      }
      // fallback jei rootRef nepaduotas
      return document.getElementById(id) as HTMLElement | null
    }

    function update() {
      let active = first

      for (const { id } of sections) {
        const el = getEl(id)
        if (!el) continue

        // offsetTop yra nepatikimas su framer-motion transformais,
        // todėl naudojam realią poziciją viewport'e
        const top = el.getBoundingClientRect().top

        // kai sekcija pasiekia "sticky" zoną, laikom ją aktyvia
        if (top <= OFFSET) active = id
      }

      setActiveId(active)
    }

    const onScroll = () => update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    // du RAF'ai, kad po route/animacijų DOM ir layout būtų stabilūs
    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(update)
    })

    return () => {
      cancelAnimationFrame(raf1)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [sections, rootRef])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (tocRef.current && !tocRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  const scrollTo = useCallback(
    (id: string) => {
      const root = rootRef?.current
      const el = root
        ? root.querySelector<HTMLElement>(`#${escapeId(id)}`)
        : (document.getElementById(id) as HTMLElement | null)

      if (el) {
        // iškart atnaujinam active, kad nešokinėtų highlight
        setActiveId(id)
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        setIsOpen(false)
      }
    },
    [rootRef]
  )

  const activeLabel = sections.find((s) => s.id === activeId)?.label || title

  return (
    <>
      {/* Mobile TOC – sticky button at top (hidden on 2xl+) */}
      <div ref={tocRef} className="2xl:hidden sticky top-[72px] z-50 mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between gap-2 bg-white border border-slate-200/80 rounded-2xl px-5 py-3.5 shadow-lg shadow-slate-200/50 text-left transition hover:border-brand/30"
          aria-expanded={isOpen}
          aria-controls="mobile-toc-list"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-7 h-7 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </span>
            <div className="min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-0.5">
                {title}
              </span>
              <span className="text-sm font-semibold text-darkblue-700 truncate block">{activeLabel}</span>
            </div>
          </div>
          <svg
            className={`w-4 h-4 shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              id="mobile-toc-list"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200/80 rounded-2xl shadow-xl shadow-slate-200/50 p-3 max-h-[60vh] overflow-y-auto"
              aria-label="Turinio navigacija"
            >
              {sections.map(({ id, label }, index) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-colors flex items-center gap-2.5 font-medium ${
                    activeId === id ? "bg-brand/10 text-brand" : "text-slate-600 hover:bg-slate-50 hover:text-darkblue-700"
                  }`}
                >
                  <span
                    className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      activeId === id ? "bg-brand text-white" : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {index + 1}
                  </span>
                  {label}
                </button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop TOC – sticky sidebar (visible on 2xl+) */}
      <nav className="hidden 2xl:block sticky top-20 self-start w-56 shrink-0" aria-label="Turinio navigacija">
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-200/50 p-5">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            <p className="text-sm font-bold text-darkblue-700">{title}</p>
          </div>

          <div className="space-y-0.5 max-h-[calc(100vh-12rem)] overflow-y-auto pr-1 scrollbar-thin">
            {sections.map(({ id, label }, index) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`group w-full text-left px-3 py-2 rounded-xl text-[13px] leading-snug transition-colors flex items-start gap-2.5 font-medium ${
                  activeId === id ? "bg-brand/10 text-brand shadow-sm" : "text-slate-500 hover:bg-slate-50 hover:text-darkblue-700"
                }`}
              >
                <span
                  className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5 transition-all ${
                    activeId === id
                      ? "bg-brand text-white"
                      : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-500"
                  }`}
                >
                  {index + 1}
                </span>
                <span className="flex-1">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}