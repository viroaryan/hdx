"use client";

import { useEffect, useRef } from "react";

/**
 * Pure-CSS mock of the HDX Cloud Dashboard inside a browser chrome — no
 * remote images, everything is styled divs. Subtle scroll parallax via a
 * rAF-throttled listener writing a transform-only custom property; disabled
 * under prefers-reduced-motion.
 */
export default function BrowserMockup() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const mid = rect.top + rect.height / 2 - window.innerHeight / 2;
      const p = Math.max(-1, Math.min(1, mid / window.innerHeight));
      el.style.setProperty("--py", `${(-p * 26).toFixed(1)}px`);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="mockup" role="img" aria-label="Stylized preview of the HDX Cloud Dashboard interface">
      <div className="mockup__chrome">
        <div className="mockup__dots">
          <span className="mockup__dot mockup__dot--r" />
          <span className="mockup__dot mockup__dot--y" />
          <span className="mockup__dot mockup__dot--g" />
        </div>
        <div className="mockup__url">hdx.cloud/dashboard</div>
      </div>
      <div className="mockup__body">
        <div className="mockup__side" aria-hidden="true">
          <span className="mockup__side-logo" />
          <span className="mockup__side-item mockup__side-item--on" />
          <span className="mockup__side-item" />
          <span className="mockup__side-item" />
          <span className="mockup__side-item" />
        </div>
        <div className="mockup__main" aria-hidden="true">
          <div className="mockup__cards">
            <span className="mockup__card">
              <span className="mockup__card-line" />
              <span className="mockup__card-num" />
            </span>
            <span className="mockup__card">
              <span className="mockup__card-line" />
              <span className="mockup__card-num" />
            </span>
            <span className="mockup__card">
              <span className="mockup__card-line" />
              <span className="mockup__card-num" />
            </span>
          </div>
          <div className="mockup__chart">
            <span className="mockup__bar" style={{ height: "42%" }} />
            <span className="mockup__bar" style={{ height: "68%" }} />
            <span className="mockup__bar" style={{ height: "54%" }} />
            <span className="mockup__bar" style={{ height: "86%" }} />
            <span className="mockup__bar" style={{ height: "61%" }} />
            <span className="mockup__bar" style={{ height: "74%" }} />
          </div>
          <div className="mockup__rows">
            <span className="mockup__row">
              <span className="mockup__status mockup__status--ok" />
              <span className="mockup__row-line" style={{ maxWidth: "72%" }} />
            </span>
            <span className="mockup__row">
              <span className="mockup__status mockup__status--ok" />
              <span className="mockup__row-line" style={{ maxWidth: "58%" }} />
            </span>
            <span className="mockup__row">
              <span className="mockup__status mockup__status--warn" />
              <span className="mockup__row-line" style={{ maxWidth: "64%" }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
