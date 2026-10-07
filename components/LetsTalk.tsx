"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "@/components/icons";

const WORDS = ["LET'S TALK", "LET'S BUILD", "LET'S SHIP"];

/**
 * Sticky top-right link in the hero header. The word swaps (LET'S TALK /
 * LET'S BUILD / LET'S SHIP) as you scroll through the hero — the swap is
 * scoped to the hero's scroll-through because the header (.hero__top) is
 * position:sticky only inside the hero section, so that is the only window
 * in which the link is on screen. (Measuring the whole document instead put
 * the swaps at ~1/3 of total page scroll — five ~100svh sections — long
 * after the header had scrolled away, so visitors only ever saw the static
 * "LET'S TALK".) rAF-throttled scroll listener, disabled for reduced-motion
 * users (word stays fixed).
 */
export default function LetsTalk() {
  const [index, setIndex] = useState(0);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      // Sticky window: from page top until the hero's bottom edge reaches the
      // pinned header, i.e. hero height minus the header's own height.
      const hero = linkRef.current?.closest<HTMLElement>(".hero");
      const header = linkRef.current?.closest<HTMLElement>("header");
      const max = hero && header ? hero.offsetHeight - header.offsetHeight : 0;
      const t = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      const next = Math.min(WORDS.length - 1, Math.floor(t * WORDS.length));
      setIndex((prev) => (prev === next ? prev : next));
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
    <a
      ref={linkRef}
      href="#contact"
      className="lets-talk"
      aria-label="Contact Aman — go to the contact form"
    >
      <span className="lets-talk__word" key={WORDS[index]}>
        {WORDS[index]}
      </span>
      <ArrowRightIcon size={13} />
    </a>
  );
}
