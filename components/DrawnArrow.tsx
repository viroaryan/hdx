"use client";

import { useEffect, useRef } from "react";

interface DrawnArrowProps {
  /** Extra classes for sizing/rotation/color (color via currentColor). */
  className?: string;
  /** Label for assistive tech when the arrow carries meaning. */
  label?: string;
}

/**
 * Hand-drawn single-stroke arrow (rounded caps) that draws itself in when it
 * enters the viewport via stroke-dashoffset. Uses pathLength=1 so the dash
 * values are resolution-independent. Static under prefers-reduced-motion.
 */
export default function DrawnArrow({ className = "", label }: DrawnArrowProps) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("drawn");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("drawn");
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 100 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`draw-arrow${className ? ` ${className}` : ""}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <path d="M6 8 C 26 40, 56 50, 90 36" pathLength={1} />
      <path d="M76 26 L 91 36 L 76 50" pathLength={1} />
    </svg>
  );
}
