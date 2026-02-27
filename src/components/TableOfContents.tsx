import { useState, useEffect, useCallback, useRef, useLayoutEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export interface TocSection {
    id: string
    label: string
}

interface TableOfContentsProps {
    sections: TocSection[]
    title?: string
}

export function TableOfContents({ sections, title = "Turinys" }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("")
    const [isOpen, setIsOpen] = useState(false)
    const tocRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        // Scroll-based detection: reliable for both short and long sections.
        // Threshold = navbar (72px) + sticky TOC bar (~52px) + buffer = 160px.
        // The active section is the last one whose offsetTop is ≤ scrollY + threshold.
        const OFFSET = 160

        function update() {
            const scrollY = window.scrollY + OFFSET
            let active = sections[0]?.id ?? ""
            for (const { id } of sections) {
                const el = document.getElementById(id)
                if (el && el.offsetTop <= scrollY) active = id
            }
            setActiveId(active)
        }

        window.addEventListener("scroll", update, { passive: true })
        update()
        return () => window.removeEventListener("scroll", update)
    }, [sections])

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (tocRef.current && !tocRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }
        if (isOpen) document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isOpen])

    const scrollTo = useCallback((id: string) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" })
            setIsOpen(false)
        }
    }, [])

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
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-0.5">{title}</span>
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
                                        activeId === id
                                            ? "bg-brand/10 text-brand"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-darkblue-700"
                                    }`}
                                >
                                    <span className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                                        activeId === id
                                            ? "bg-brand text-white"
                                            : "bg-slate-100 text-slate-400"
                                    }`}>
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
            <nav
                className="hidden 2xl:block sticky top-20 self-start w-56 shrink-0"
                aria-label="Turinio navigacija"
            >
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
                                    activeId === id
                                        ? "bg-brand/10 text-brand shadow-sm"
                                        : "text-slate-500 hover:bg-slate-50 hover:text-darkblue-700"
                                }`}
                            >
                                <span className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5 transition-all ${
                                    activeId === id
                                        ? "bg-brand text-white"
                                        : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-500"
                                }`}>
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
