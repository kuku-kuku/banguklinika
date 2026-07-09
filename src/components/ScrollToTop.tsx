// src/components/ScrollToTop.tsx
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLenis } from "../hooks/useLenis";

export default function ScrollToTop() {
  const { key, hash } = useLocation();

  // scrollRestoration tik kartą
  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  // VISAS scroll čia, layout'e (anksti)
  useLayoutEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));

      // 2 frame'ai – kad tikrai spėtų susimontuoti turinys
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.getElementById(id);
          if (!el) return;

          const lenis = getLenis();
          if (lenis) {
            const scrollMarginTop = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
            lenis.scrollTo(el, { offset: -scrollMarginTop, immediate: true });
          } else {
            el.scrollIntoView({ block: "start", behavior: "auto" });
          }
        });
      });

      return;
    }

    const lenis = getLenis()
    if (lenis) {
      // scrollTo(immediate) internally calls setScroll(this.scroll) which resets native scroll
      // to the OLD position — so we override it synchronously right after
      lenis.scrollTo(0, { immediate: true })
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // priverstinai "pranešam" scroll listeneriams (TOC)
    window.dispatchEvent(new Event("scroll"));
  }, [key, hash]);

  return null;
}