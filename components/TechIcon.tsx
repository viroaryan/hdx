import type { JSX } from "react";

/**
 * Brand-colored mini tile for a technology, used inside the project-card
 * tech chips. Drawn as inline SVG / styled spans only — no remote images.
 * The tile is a rounded square in the technology's brand color carrying a
 * short monogram or a simplified glyph, so every chip reads instantly
 * without pretending to be the official logo artwork.
 */

interface Tile {
  bg: string;
  fg: string;
  /** Short monogram shown when no glyph is drawn. */
  label: string;
  /** Optional simplified glyph (drawn inline instead of the monogram). */
  glyph?: JSX.Element;
}

const REACT_ATOM = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.6" aria-hidden="true">
    <ellipse cx="12" cy="12" rx="10" ry="4.2" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.9" fill="#61DAFB" stroke="none" />
  </svg>
);

const PRISMAS_TRIANGLE = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.5 20.5 20h-6.2L12 13.4 9.7 20H3.5L12 2.5Z" fill="#fff" />
  </svg>
);

const SUPABASE_ZAP = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13.5 2 4 14h6.5L10 22l9.5-12H13l.5-8Z" fill="#fff" />
  </svg>
);

const GIT_BRANCH = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" aria-hidden="true">
    <circle cx="7" cy="6" r="2.4" />
    <circle cx="7" cy="18" r="2.4" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M7 8.4v7.2M17 11.4c0 3-2.5 4.1-7.5 4.3" />
  </svg>
);

const ANDROID_HEAD = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 17a8 8 0 0 1 16 0Z" fill="#fff" />
    <circle cx="9" cy="14.4" r="1" fill="#3DDC84" />
    <circle cx="15" cy="14.4" r="1" fill="#3DDC84" />
    <path d="m7.5 8 1.6 2.4M16.5 8l-1.6 2.4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CPU_CHIP = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" aria-hidden="true">
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="10" y="10" width="4" height="4" />
    <path d="M9 6V3M15 6V3M9 21v-3M15 21v-3M6 9H3M6 15H3M21 9h-3M21 15h-3" strokeLinecap="round" />
  </svg>
);

const TILES: Record<string, Tile> = {
  Java: { bg: "#5382A1", fg: "#fff", label: "Jv" },
  "C#": { bg: "#512BD4", fg: "#fff", label: "C#" },
  TypeScript: { bg: "#3178C6", fg: "#fff", label: "TS" },
  React: { bg: "#20232A", fg: "#61DAFB", label: "", glyph: REACT_ATOM },
  "Next.js": { bg: "#000000", fg: "#fff", label: "N" },
  "Node.js": { bg: "#5FA04E", fg: "#fff", label: "No" },
  "Tailwind CSS": { bg: "#38BDF8", fg: "#fff", label: "Tw" },
  Prisma: { bg: "#2D3748", fg: "#fff", label: "", glyph: PRISMAS_TRIANGLE },
  Supabase: { bg: "#3FCF8E", fg: "#fff", label: "", glyph: SUPABASE_ZAP },
  LibSQL: { bg: "#0E0E0C", fg: "#9FE870", label: "Li" },
  "Spigot API": { bg: "#C87C40", fg: "#fff", label: "Sp" },
  "ADB / Fastboot": { bg: "#3DDC84", fg: "#fff", label: "", glyph: ANDROID_HEAD },
  "Hardware APIs": { bg: "#37474F", fg: "#fff", label: "", glyph: CPU_CHIP },
  WebSockets: { bg: "#010101", fg: "#fff", label: "WS" },
  "REST APIs": { bg: "#22303C", fg: "#fff", label: "{ }" },
  Git: { bg: "#F05033", fg: "#fff", label: "", glyph: GIT_BRANCH },
};

export default function TechIcon({ tech }: { tech: string }) {
  const tile = TILES[tech] ?? { bg: "#22303C", fg: "#fff", label: tech.slice(0, 2) };
  return (
    <span
      className="ticon"
      style={{ backgroundColor: tile.bg, color: tile.fg }}
      aria-hidden="true"
    >
      {tile.glyph ?? <span className="ticon__label">{tile.label}</span>}
    </span>
  );
}
