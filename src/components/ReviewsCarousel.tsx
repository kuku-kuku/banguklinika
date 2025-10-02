import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";

type Review = {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  text: string;
  relative_time_description?: string;
  author_url?: string;
};

type ReviewsResponse = {
  rating: number | null;
  user_ratings_total: number | null;
  name?: string | null;
  address?: string | null;
  reviews: Review[];
  maps_url?: string;
};

function StarIcon({ filled = true, className = "w-4 h-4" }: { filled?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 2.75l2.95 5.98 6.6.96-4.77 4.65 1.13 6.58L12 18.77 6.09 20.92l1.13-6.58L2.45 9.69l6.6-.96L12 2.75z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

function initialsFromName(name?: string) {
  if (!name) return "G";
  const parts = name.trim().split(/\s+/);
  const a = parts[0]?.[0] ?? "";
  const b = parts.length > 1 ? parts[parts.length - 1][0] ?? "" : "";
  return (a + b).toUpperCase() || "G";
}

function Avatar({ name, src }: { name?: string; src?: string }) {
  if (src) {
    return (
      <img
        src={src}
        alt={name || "Google User"}
        className="w-10 h-10 rounded-full object-cover"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    );
  }
  return (
    <div
      className="w-10 h-10 rounded-full grid place-items-center text-white text-sm font-semibold shadow"
      style={{
        background: "radial-gradient(circle at 30% 30%, rgba(0,183,198,0.9), rgba(0,119,204,1))",
      }}
      aria-label={name || "Google User"}
      title={name || "Google User"}
    >
      {initialsFromName(name)}
    </div>
  );
}

function ReviewCard({
  name,
  text,
  stars,
  avatar,
  when,
  style,
}: {
  name: string;
  text: string;
  stars: number;
  avatar?: string;
  when?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-soft hover:shadow-md transition h-full flex flex-col"
      style={style}
    >
      <div className="relative p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <Avatar name={name} src={avatar} />
          <div className="min-w-0">
            <div className="font-semibold text-darkblue-600 truncate">{name}</div>
            {when ? <div className="text-xs text-gray-500">{when}</div> : null}
          </div>
          <div className="ml-auto flex items-center gap-0.5 text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} filled={i < Math.round(stars)} className="w-5 h-5" />
            ))}
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          {text?.trim() ? text : <span className="italic text-gray-500">Be teksto</span>}
        </p>
        {/* Per-kortelės nuorodos į Google PAŠALINTOS */}
      </div>
    </div>
  );
}

export default function ReviewsCarousel() {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState<number | null>(null);
  const [count, setCount] = useState<number | null>(null);
  const [mapsUrl, setMapsUrl] = useState<string | undefined>(undefined);

  // 1 kortelė <1024px, 3 kortelės ≥1024px
  const [perSlide, setPerSlide] = useState<number>(() =>
    typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : 1
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) =>
      setPerSlide("matches" in e ? (e.matches ? 3 : 1) : (mq.matches ? 3 : 1));
    handler(mq);
    mq.addEventListener?.("change", handler as (e: MediaQueryListEvent) => void);
    return () => mq.removeEventListener?.("change", handler as (e: MediaQueryListEvent) => void);
  }, []);

  // Fetch iš proxy
  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("/api/reviews");
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const j: ReviewsResponse = await r.json();

        setRating(j.rating ?? null);
        setCount(j.user_ratings_total ?? null);
        setMapsUrl(j.maps_url);

        const all: Review[] = (j.reviews || []).map((rv: Review) => ({
          ...rv,
          rating: Number(rv.rating ?? 0),
        }));

        // rodome tik 5★; jei nėra – rodome visus
        const only5 = all.filter((x) => Math.round(x.rating) === 5);
        setReviews(only5.length > 0 ? only5 : all);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // skaidės
  const slides = useMemo(() => {
    const arr: Review[][] = [];
    for (let i = 0; i < reviews.length; i += perSlide) arr.push(reviews.slice(i, i + perSlide));
    return arr.length ? arr : [[]];
  }, [reviews, perSlide]);

  // ==== Vienodas aukštis per VISAS skaidres ====
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [maxCardH, setMaxCardH] = useState<number>(0);

  useEffect(() => {
    const els = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;

    let raf = 0;
    const compute = () => {
      const h = Math.max(...els.map((el) => el.offsetHeight || 0));
      setMaxCardH(h);
    };
    compute();

    const RO = (window as any).ResizeObserver;
    const ro = RO
      ? new RO(() => {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(compute);
        })
      : null;
    if (ro) els.forEach((el) => ro.observe(el));

    const onResize = () => compute();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ro && ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reviews, perSlide]);

  // Auto-slinkimas + „freeze“
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [frozen, setFrozen] = useState(false); // kai true – visiškai nestumdom daugiau
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    if (!paused && !frozen && slides.length > 1) {
      timerRef.current = window.setTimeout(() => setIndex((i) => (i + 1) % slides.length), 5000);
    }
    return () => { if (timerRef.current) window.clearTimeout(timerRef.current); };
  }, [index, paused, frozen, slides.length]);

  // Pauzė kai nematoma
  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setPaused(!entry.isIntersecting), { threshold: 0.25 });
    io.observe(containerRef.current);
    return () => io.disconnect();
  }, []);

  // Touch swipe
  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) {
      setFrozen(true); // vartotojas aktyviai naršo – užfiksuojam
      setIndex((i) => (i + (dx < 0 ? 1 : -1) + slides.length) % slides.length);
    }
    touchX.current = null;
  };

  const onPointerDown = () => setFrozen(true); // bet koks click/tap – stop
  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Enter" || e.key === " ") setFrozen(true);
  };

  if (loading)
    return (
      <div className="container-narrow">
        <div className="h-28 rounded-2xl bg-gray-100 animate-pulse" />
      </div>
    );

  if (!reviews.length)
    return (
      <div className="container-narrow">
        <div className="text-gray-500">Šiuo metu nerodome atsiliepimų.</div>
      </div>
    );

  return (
    <div className="container-narrow no-x-scroll pan-y">
      <div className="flex items-end justify-between gap-4 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-darkblue-600 tracking-tight">Klientų atsiliepimai</h2>
        {rating !== null && count !== null && (
          <span className="hidden sm:inline text-xs sm:text-sm text-gray-500">
            Google įvertinimas: <b>{rating.toFixed(1)}</b> ({count})
          </span>
        )}
      </div>

      <div
        ref={containerRef}
        className="relative select-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onPointerDown={onPointerDown}
        onKeyDown={onKeyDown}
        tabIndex={0}
        role="group"
        aria-label="Atsiliepimų karuselė"
      >
        {/* Langas */}
        <div className="relative rounded-2xl bg-white overflow-x-hidden overflow-y-visible">
          {/* Track */}
          <div
            className="
              flex transition-transform duration-500 ease-out
              will-change-transform
              [backface-visibility:hidden]
              [transform-style:preserve-3d]
            "
            style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
          >
            {slides.map((group, gi) => (
              <div key={gi} className="shrink-0 w-full">
                <div className={perSlide === 1 ? "grid gap-6 grid-cols-1 items-stretch" : "grid gap-6 grid-cols-3 items-stretch"}>
                  {group.map((r, ri) => {
                    const flatIndex = gi * perSlide + ri;
                    return (
                      <div
                        key={`${gi}-${ri}`}
                        className="h-full"
                        ref={(el) => { cardRefs.current[flatIndex] = el; }}
                      >
                        <ReviewCard
                          name={r.author_name}
                          text={r.text}
                          stars={r.rating}
                          avatar={r.profile_photo_url}
                          when={r.relative_time_description}
                          style={maxCardH ? { minHeight: maxCardH } : undefined}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Taškeliai */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-6 bg-darkblue-600" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => { setFrozen(true); setIndex(i); }}
              aria-label={`Peršokti į ${i + 1}-ą skaidrę`}
            />
          ))}
        </div>
      </div>

      {mapsUrl && (
        <div className="mt-4 text-center">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-600 underline"
          >
            Peržiūrėti visus atsiliepimus Google
          </a>
        </div>
      )}
    </div>
  );
}
