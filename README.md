# HDX — Aman | Developer Portfolio

Next.js 15 (App Router) + TypeScript portfolio for **Aman — HDX**, a developer based in
Kolkata, West Bengal, India. A faithful adaptation of the **lil-boxes.com** design
language: full-bleed color-blocked full-screen sections (one background per section),
giant editorial serif typography, mega condensed display type, and hand-drawn
annotations.

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:3000)
npm run dev

# 3. Production build
npm run build
```

## Design language

| Section              | Background                                    |
| -------------------- | --------------------------------------------- |
| Hero                 | Warm off-white `#F4F1EC`                      |
| "Down Bad"           | Orange-red gradient `#FF6B3D → #F0402B`       |
| "Our Secret Sauce"   | Blush pink `#F3DCD8`                          |
| Case studies         | Sky blue `#45B4EE`                            |
| Footer / contact     | Charcoal `#1B1918` with cream `#F2E5DC`       |

Accents: ink `#161412`, red `#C31C11` (arrows/eyebrows — darkened from `#E8342A`
so red text passes WCAG AA 4.5:1 on every background), pink `#F27E9D` (asterisks),
ink handwritten notes (Caveat), all annotations in Caveat.

Sections, in order:

1. **Hero** — CSS 3D "HDX" cube logo, sticky LET'S TALK → LET'S BUILD → LET'S SHIP
   word swap, giant serif headline over a pink highlight bar, two red hand-drawn
   arrows that draw themselves in.
2. **Down Bad** — massive Anton "DOWN BAD?" with a hard offset dark-red shadow,
   justified pitch, and a tilted pure-CSS mock of the HDX Cloud Dashboard with a
   cyan handwritten note and scroll parallax.
3. **Secret Sauce** — giant serif statement, justified philosophy copy, vertical
   infinite marquee of technologies (pink asterisks), and a 4-stat row.
4. **Case studies** — "Mind if we brag a bit?" + the four project names as huge
   overlapping cream serif lines (hover highlight sweep + status badge), each
   linking to the GitHub profile, plus a compact 2×2 card grid.
5. **Footer / contact** — cream caps kicker, rounded-square outline social buttons,
   giant cropped Anton "AMAN / HDX", handwritten orange note, and a minimal
   underline-input form that opens a prefilled mailto to `mail@hdx.xyz`.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript 5**
- No runtime dependencies beyond `next` / `react` / `react-dom` — no Tailwind, no UI libraries
- Global CSS with design-system custom properties; giant type scales via `clamp()` from 320px to 4K
- Google Fonts via `next/font`: Playfair Display (serif display), Anton (mega condensed),
  Archivo (body), Caveat (handwritten annotations), JetBrains Mono (labels) — all with
  system fallbacks
- All icons/arrows are inline SVG React components; no external images, no logo CDNs

## Project structure

```
app/
  layout.tsx          # Root layout: fonts, metadata/OG, skip link, back-to-top
  page.tsx            # Page composition (server-rendered section content)
  globals.css         # Full design system + all section styles
  icon.svg            # Favicon (red tile, cream HDX)
  opengraph-image.tsx # Generated social card (charcoal/cream/orange)
components/
  Hero.tsx            # §1 hero (server) — headline, highlight bar, red arrows
  CubeLogo.tsx        # Pure-CSS 3D "HDX" cube logo
  LetsTalk.tsx        # 'use client' — sticky word-swap link (rAF scroll)
  DownBad.tsx         # §2 orange section (server) — mega type + mockup
  BrowserMockup.tsx   # 'use client' — CSS dashboard mock with scroll parallax
  SecretSauce.tsx     # §3 blush section (server) — marquee, stats
  CaseStudies.tsx     # §4 blue section (server) — giant link list + card grid
  FooterContact.tsx   # §5 footer (server) — giant type, socials, note
  ContactForm.tsx     # 'use client' — mailto contact form
  BackToTop.tsx       # 'use client' — floating red back-to-top button
  DrawnArrow.tsx      # 'use client' — hand-drawn arrow, stroke draw-in on view
  Reveal.tsx          # 'use client' — IntersectionObserver scroll reveal
  icons.tsx           # All inline SVG icons
lib/
  data.ts             # Single source of truth for all site content
```

## Accessibility & performance

- `prefers-reduced-motion` disables the marquee loop, cube spin, word swap,
  parallax, arrow draw-in, and reveals (content stays fully visible; no-JS also
  stays visible via the `html.js` flag)
- All animations are transform/opacity/stroke-dashoffset based; scroll listeners
  are rAF-throttled and passive
- Semantic landmarks (`header`, `main`, `footer`, `nav`), skip-to-content link,
  visible focus rings that adapt to each section's palette, `aria` labels on icon
  buttons, the marquee, and the form

## Deploy to Vercel

The project is **zero-config for Vercel** — it is a standard Next.js 15 App Router
app with `npm run build` as its build command.

1. Push this repository to GitHub (this repo: `viroaryan/hdx`).
2. Go to [vercel.com/new](https://vercel.com/new) and **Import** the `viroaryan/hdx`
   repository. Vercel auto-detects Next.js — leave the build settings at their
   defaults (`Build Command: next build`, `Output: .next`).
3. (Optional) Environment variables — none are required:
   - `NEXT_PUBLIC_SITE_URL` — set it to your production origin
     (e.g. `https://hdx.vercel.app` or a custom domain) to make the absolute
     metadata URLs (og:image, canonical) explicit. Without it, Vercel's own
     `VERCEL_PROJECT_PRODUCTION_URL` is used, then `https://hdxaman.hdxcloud.xyz`
     as the last production fallback.
4. Click **Deploy**. Every push to `main` redeploys automatically; every PR gets
   a preview URL.

No other environment variables, databases, or server functions are needed — the
site is fully static (prerendered) and the contact form opens a mailto draft.

## Deploying elsewhere

Any Node 18.18+ host works: `npm ci && npm run build && npm start` (serves on
port 3000). Static export is not used because the OpenGraph image is generated
server-side.

## Contact

- Primary email: mail@hdx.xyz · Secondary: hdx.pyy@gmail.com
- Discord: `hdx.py` · GitHub: [@hdxpyy](https://github.com/hdxpyy)
- LinkedIn: [HDX Aman](https://www.linkedin.com/in/hdx-aman-3b2505434/) ·
  Instagram: [@hdx.py](https://www.instagram.com/hdx.py/)

---

© 2026 HDX. Built by Aman. All rights reserved.
