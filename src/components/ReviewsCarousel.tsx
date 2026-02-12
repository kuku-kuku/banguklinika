import React, { useEffect, useRef, useState } from "react";

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
  reviews_url?: string;
  // jei backend pridėsi vėliau:
  place_id?: string;
};

// ✅ jei backend negrąžina reviews_url, pasidarom jį iš maps_url (query_place_id)
function extractPlaceIdFromMapsUrl(mapsUrl?: string) {
  if (!mapsUrl) return undefined;
  try {
    const u = new URL(mapsUrl);
    const qpid = u.searchParams.get("query_place_id");
    if (qpid) return qpid;

    const m = mapsUrl.match(/place_id:([^&]+)/);
    if (m?.[1]) return decodeURIComponent(m[1]);

    return undefined;
  } catch {
    return undefined;
  }
}

function buildReviewsUrl(placeId?: string) {
  if (!placeId) return undefined;
  return `https://search.google.com/local/reviews?placeid=${encodeURIComponent(placeId)}`;
}

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
      <path
        d="M12 2.75l2.95 5.98 6.6.96-4.77 4.65 1.13 6.58L12 18.77 6.09 20.92l1.13-6.58L2.45 9.69l6.6-.96L12 2.75z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
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
        className="w-11 h-11 rounded-full object-cover ring-2 ring-white shadow-sm"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    );
  }
  return (
    <div
      className="w-11 h-11 rounded-full grid place-items-center text-white text-sm font-semibold ring-2 ring-white shadow-sm"
      style={{ background: "linear-gradient(135deg, #00B7C6 0%, #0891b2 100%)" }}
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
  reviewsUrl,
}: {
  name: string;
  text: string;
  stars: number;
  avatar?: string;
  when?: string;
  reviewsUrl?: string;
}) {
  const isLong = !!text && text.length > 200;
  const displayText = isLong ? text.slice(0, 200).trimEnd() + "…" : text;

  return (
    <div
      className="h-full flex flex-col rounded-2xl p-5"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(0,183,198,0.18)",
        boxShadow: "none",
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <Avatar name={name} src={avatar} />
        <div className="min-w-0 flex-1">
          <div className="font-semibold text-darkblue-600 truncate text-sm">{name}</div>
          {when && <div className="text-xs text-gray-400 mt-0.5">{when}</div>}
        </div>
        <div className="flex items-center gap-0.5 text-yellow-400 shrink-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} filled={i < Math.round(stars)} />
          ))}
        </div>
      </div>

      <div
        className="h-px mb-3"
        style={{ background: "linear-gradient(90deg, rgba(0,183,198,0.18) 0%, transparent 100%)" }}
      />

      <p className="text-gray-700 text-sm leading-relaxed flex-1">
        {text?.trim() ? displayText : <span className="italic text-gray-400">Be komentaro</span>}
      </p>

      {isLong && reviewsUrl && (
        <a
          href={reviewsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-2 text-xs text-primary-600 hover:text-primary-700 font-medium text-left self-start"
        >
          Skaityti daugiau
        </a>
      )}

      {reviewsUrl && (
        <a
          href={reviewsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition self-start"
        >
          <GoogleIcon />
          Google atsiliepimai
        </a>
      )}
    </div>
  );
}

export default function ReviewsCarousel() {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState<number | null>(null);
  const [count, setCount] = useState<number | null>(null);
  const [reviewsUrl, setReviewsUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    let interval: number;

    const fetchReviews = async () => {
      try {
        const r = await fetch("/api/reviews");
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const j: ReviewsResponse = await r.json();

        setRating(j.rating ?? null);
        setCount(j.user_ratings_total ?? null);

        // ✅ jei backend dar neduoda reviews_url, ištraukiam placeId iš maps_url
        const placeId =
          j.place_id ||
          extractPlaceIdFromMapsUrl(j.maps_url);

        const computedReviewsUrl =
          j.reviews_url ||
          buildReviewsUrl(placeId) ||
          j.maps_url;

        setReviewsUrl(computedReviewsUrl);

        const filtered = (j.reviews || [])
          .map((rv) => ({ ...rv, rating: Number(rv.rating ?? 0) }))
          .filter((x) => x.rating >= 4);

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

  const [perView, setPerView] = useState(() =>
    typeof window !== "undefined"
      ? window.innerWidth >= 1024
        ? 3
        : window.innerWidth >= 640
          ? 2
          : 1
      : 3
  );

  useEffect(() => {
    const update = () =>
      setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);

  const maxIndex = reviews.length > 0 ? Math.max(0, reviews.length - perView) : 0;

  const goTo = (i: number) => setCurrent(Math.max(0, Math.min(i, maxIndex)));
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  useEffect(() => {
    if (paused || reviews.length <= perView) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, 5000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, paused, reviews.length, perView, maxIndex]);

  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setPaused(!e.isIntersecting), { threshold: 0.2 });
    io.observe(containerRef.current);
    return () => io.disconnect();
  }, []);

  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
    touchX.current = null;
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-44 rounded-2xl animate-pulse" style={{ background: "rgba(0,183,198,0.07)" }} />
          ))}
        </div>
      </div>
    );
  }

  if (!reviews.length) return null;

  const dotCount = maxIndex + 1;

  return (
    <div className="py-12 md:py-16" style={{ background: "transparent" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-darkblue-600 tracking-tight">
              Klientų atsiliepimai
            </h2>

            {rating !== null && count !== null && (
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-0.5 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} filled={i < Math.round(rating)} />
                  ))}
                </div>
                <span className="text-sm font-semibold text-darkblue-600">{rating.toFixed(1)}</span>
                <span className="text-sm text-gray-500">({count} atsiliepimų)</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            {reviewsUrl && (
              <a
                href={reviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-darkblue-600 hover:text-primary-600 transition border border-primary-200 bg-white rounded-xl px-4 py-2"
              >
                <GoogleIcon />
                Visi atsiliepimai
              </a>
            )}

            {reviews.length > perView && (
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  disabled={current === 0}
                  aria-label="Ankstesni atsiliepimai"
                  className="w-9 h-9 rounded-full border border-primary-200 bg-white flex items-center justify-center text-darkblue-600 hover:bg-primary-50 disabled:opacity-30 disabled:cursor-not-allowed transition text-lg font-light"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  disabled={current >= maxIndex}
                  aria-label="Kiti atsiliepimai"
                  className="w-9 h-9 rounded-full border border-primary-200 bg-white flex items-center justify-center text-darkblue-600 hover:bg-primary-50 disabled:opacity-30 disabled:cursor-not-allowed transition text-lg font-light"
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </div>

        <div
          ref={containerRef}
          className="overflow-hidden px-1 -mx-1"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex gap-5 transition-transform duration-500 ease-out py-1"
            style={{ transform: `translateX(calc(-${current} * (100% / ${perView} + ${20 / perView}px)))` }}
          >
            {reviews.map((r, i) => (
              <div
                key={i}
                className="shrink-0"
                style={{ width: `calc(${100 / perView}% - ${(perView - 1) * 20 / perView}px)` }}
              >
                <ReviewCard
                  name={r.author_name}
                  text={r.text}
                  stars={r.rating}
                  avatar={r.profile_photo_url}
                  when={r.relative_time_description}
                  reviewsUrl={reviewsUrl}
                />
              </div>
            ))}
          </div>
        </div>

        {dotCount > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: dotCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Rodyti ${i + 1} grupę`}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "w-6 h-2 bg-primary-500" : "w-2 h-2 bg-primary-200 hover:bg-primary-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}