"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@/components/icons";

/**
 * Floating red circular back-to-top button (white up arrow), bottom-left.
 * Appears after scrolling past the first viewport; hidden from the a11y tree
 * and from tab order while not visible.
 */
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setShow((prev) => {
        const next = window.scrollY > window.innerHeight * 0.8;
        return prev === next ? prev : next;
      });
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

  const scrollTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      className={`back-top${show ? " back-top--show" : ""}`}
      onClick={scrollTop}
      aria-label="Back to top"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
    >
      <ArrowUpIcon />
    </button>
  );
}
