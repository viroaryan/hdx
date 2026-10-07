"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger index inside a group — rendered as --stagger custom property (index × 60ms delay). */
  stagger?: number;
}

/**
 * Scroll-reveal wrapper: fades/slides content in the first time it enters the
 * viewport. Content is visible by default when JS is disabled and under
 * prefers-reduced-motion (the .in class is applied immediately).
 */
export default function Reveal({ children, className = "", stagger = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("in");
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${className ? ` ${className}` : ""}`}
      style={stagger ? ({ "--stagger": stagger } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
