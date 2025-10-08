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

  useEffect(() => {
    let interval: number;
    const fetchReviews = async () => {
      try {
        const r = await fetch("/api/reviews");
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const j: ReviewsResponse = await r.json();

        setRating(j.rating ?? null);
        setCount(j.user_ratings_total ?? null);
        setMapsUrl(j.maps_url);

        const all: Review[] = (j.reviews || []).map(rv => ({
          ...rv,
          rating: Number(rv.rating ?? 0),
        }));

        const filtered = all.filter(x => x.rating >= 4);
        setReviews(filtered);
      } catch (e) {
        console.error("Reviews fetch error:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
    interval = window.setInterval(fetchReviews, 120_000);

    return () => window.clearInterval(interval);
  }, []);

  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [maxCardH, setMaxCardH] = useState<number>(0);

  useEffect(() => {
    const els = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;

    let raf = 0;
    const compute = () => {
      const h = Math.max(...els.map(el => el.offsetHeight || 0));
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
    if (ro) els.forEach(el => ro.observe(el));

    const onResize = () => compute();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ro && ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reviews, perSlide]);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [frozen, setFrozen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    if (!paused && !frozen && reviews.length > 1) {
      timerRef.current = window.setTimeout(() => {
        setIsTransitioning(true);
        setIndex((i) => i + 1);
      }, 5000);
    }
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index, paused, frozen, reviews.length]);

  // Reset position when reaching end of first set
  useEffect(() => {
    if (index >= reviews.length && isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [index, reviews.length, isTransitioning]);

  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setPaused(!entry.isIntersecting), { threshold: 0.25 });
    io.observe(containerRef.current);
    return () => io.disconnect();
  }, []);

  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) {
      setFrozen(true);
      setIsTransitioning(true);
      if (dx < 0) {
        setIndex((i) => i + 1);
      } else {
        setIndex((i) => Math.max(0, i - 1));
      }
    }
    touchX.current = null;
  };

  const onPointerDown = () => setFrozen(true);
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

  // Create infinite loop array for seamless carousel
  const extendedReviews = [...reviews, ...reviews, ...reviews];

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
        <div className="overflow-hidden rounded-2xl bg-white" style={maxCardH ? { minHeight: maxCardH } : undefined}>
          <div 
            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-out' : ''}`}
            style={{ 
              transform: `translateX(-${(index + reviews.length) * (100 / perSlide)}%)`,
            }}
          >
            {extendedReviews.map((r, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / perSlide}%` }}
                ref={(el) => { if (i < perSlide) cardRefs.current[i] = el; }}
              >
                <ReviewCard
                  name={r.author_name}
                  text={r.text}
                  stars={r.rating}
                  avatar={r.profile_photo_url}
                  when={r.relative_time_description}
                  style={maxCardH ? { height: maxCardH } : undefined}
                />
              </div>
            ))}
          </div>
        </div>

        {reviews.length > 1 && (
          <div className="mt-4 flex items-center justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`h-2.5 rounded-full transition-all ${i === (index % reviews.length) ? "w-6 bg-darkblue-600" : "w-2.5 bg-gray-300 hover:bg-gray-400"}`}
                onClick={() => { 
                  setFrozen(true);
                  setIsTransitioning(true);
                  setIndex(i);
                }}
                aria-label={`Peršokti į ${i + 1}-ą atsiliepimą`}
              />
            ))}
          </div>
        )}
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