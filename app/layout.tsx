import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Anton, Archivo, Caveat, JetBrains_Mono } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-archivo",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-caveat",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono-jb",
  display: "swap",
});

/**
 * Origin for absolute metadata URLs (og:image, canonical, …). Resolution
 * order: 1) NEXT_PUBLIC_SITE_URL — the explicit, documented production
 * origin; 2) VERCEL_PROJECT_PRODUCTION_URL / VERCEL_URL — set automatically
 * by Vercel deployments; 3) https://hdxaman.hdxcloud.xyz — the owner's live
 * portfolio domain; 4) http://localhost:3000 — local dev only.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit;
  const vercelHost = (
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL
  )?.replace(/^https?:\/\//, "");
  if (vercelHost) return `https://${vercelHost}`;
  // The owner's live portfolio domain — correct default for the real deploy.
  if (process.env.NODE_ENV === "production") return "https://hdxaman.hdxcloud.xyz";
  return "http://localhost:3000";
}

export const metadata: Metadata = {
  // Resolves the relative opengraph-image URL to an absolute one.
  metadataBase: new URL(resolveSiteUrl()),
  title: "HDX - Aman | Developer from Kolkata",
  description:
    "Aman — the developer behind HDX. Full-stack web applications, custom digital tools, Android device diagnostics, and server integrations. Precision, performance, dedicated engineering.",
  openGraph: {
    title: "HDX - Aman | Developer from Kolkata",
    description:
      "Full-stack web applications, custom digital tools, Android device diagnostics, and server integrations — built under the HDX brand: precision, performance, dedicated engineering.",
    type: "website",
    locale: "en_IN",
    siteName: "HDX",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4F1EC",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // The inline script below adds a `js` class to <html> before hydration,
    // which is an intentional server/client difference — suppressHydrationWarning
    // stops the otherwise guaranteed hydration-mismatch warning on this element.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${anton.variable} ${archivo.variable} ${caveat.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {/* Sets a JS flag synchronously so reveal animations only hide content
            when interactivity is actually available (no-JS stays fully visible). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
