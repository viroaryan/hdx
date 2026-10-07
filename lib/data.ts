// ---------------------------------------------------------------------------
// HDX portfolio — single source of truth for all site content.
// Content is taken verbatim from the approved brief; no invented facts.
// ---------------------------------------------------------------------------

export type ProjectStatus = "Active Project" | "Production Ready" | "Completed";

export interface Project {
  name: string;
  /** URL-safe key used for the per-project card preview theme. */
  slug: "device-inspector" | "cloud-dashboard" | "greensmp" | "minerift";
  category: string;
  status: ProjectStatus;
  role: string;
  summary: string;
  tech: string[];
}

export const PROJECTS: Project[] = [
  {
    name: "HDX Device Inspector",
    slug: "device-inspector",
    category: "Applications & Diagnostics",
    status: "Active Project",
    role: "Lead Developer — designed protocol bridge, diagnostic parsers, and UI",
    summary:
      "Hardware diagnostics & Android ADB / Fastboot inspection suite. Specialized device diagnostics tool supporting Android ADB & Fastboot protocols, hardware verification, partition inspection, and telemetry.",
    tech: ["Java", "C#", "TypeScript", "React", "ADB / Fastboot", "Hardware APIs"],
  },
  {
    name: "HDX Cloud Dashboard",
    slug: "cloud-dashboard",
    category: "Full-Stack Web Development",
    status: "Active Project",
    role: "Full-Stack Developer — built end-to-end architecture, APIs, and UI",
    summary:
      "Cloud infrastructure control panel & resource management platform. High-performance cloud management panel featuring secure JWT authentication, LibSQL/Prisma database integration, and node monitoring.",
    tech: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Prisma", "LibSQL"],
  },
  {
    name: "GreenSMP & GREENSync Plugin",
    slug: "greensmp",
    category: "Java & Real-Time Systems",
    status: "Production Ready",
    role: "Developer — authored custom Java plugin and web synchronization bridge",
    summary:
      "Minecraft Java server ecosystem & real-time Supabase sync plugin. GreenSMP is a dedicated Java game server ecosystem powered by the custom GREENSync plugin (GREENSync-1.0.0.jar), pushing game state asynchronously to a Supabase database linked to a live web portal.",
    tech: ["Java", "Spigot API", "Supabase", "Node.js", "TypeScript", "WebSockets"],
  },
  {
    name: "MineRift Web Portal",
    slug: "minerift",
    category: "Web Development",
    status: "Completed",
    role: "Frontend & Full-Stack Developer",
    summary:
      "Interactive gaming community portal & player telemetry dashboard. Responsive community portal featuring player directories, server status monitors, authentication, and custom interaction tooling.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
];

// Live-site parity: every project name links to the owner's GitHub profile.
export const GITHUB_PROFILE_URL = "https://github.com/hdxpyy";

// ---------------------------------------------------------------------------

export const TAGLINE = "Building digital experiences, applications, tools, and projects.";

export const INTRO_LINE =
  "HDX is the personal brand and developer identity under which Aman builds software, releases tools, and hosts web applications — precision, performance, and dedicated engineering.";

export const ABOUT =
  "Hi, I am Aman, a developer based in Kolkata, India. I focus on developing full-stack web applications, custom digital tools, Android device diagnostics, and server integrations. My development philosophy centers on building functional, high-performance software with direct purpose. Rather than overcomplicating systems, I focus on clean architecture, reliable protocols, and genuine user utility. I enjoy understanding how code operates across different environments — from web browser engines and Node.js runtimes down to Android ADB communication protocols, Java server plugins, and C# desktop utilities.";

export const STACK_NOTE =
  "From Java server plugins and C# desktop utilities to full-stack Next.js applications, Android ADB diagnostics and real-time Supabase pipelines — one brand, one standard of engineering.";

// Vertical marquee words in the SECRET SAUCE section (one per technology).
export const SAUCE_WORDS = [
  "Java",
  "C#",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Prisma",
  "Supabase",
  "ADB & Fastboot",
  "Spigot API",
  "Git",
];

// Counts derived only from the brief: 4 projects shipped/active, 12 marquee
// technologies, 3 disciplines (apps & diagnostics / web full-stack / Java
// real-time systems), 1 brand.
export const STATS = [
  { value: "4", label: "Production Projects" },
  { value: "12+", label: "Technologies" },
  { value: "3", label: "Disciplines" },
  { value: "1", label: "Unified Brand" },
];

// ---------------------------------------------------------------------------

export const EMAIL_PRIMARY = "mail@hdx.xyz";
export const EMAIL_SECONDARY = "hdx.pyy@gmail.com";

export interface Social {
  key: "github" | "linkedin" | "instagram" | "mail";
  label: string;
  href: string;
  external: boolean;
}

export const SOCIALS: Social[] = [
  { key: "github", label: "GitHub — @hdxpyy", href: "https://github.com/hdxpyy", external: true },
  {
    key: "linkedin",
    label: "LinkedIn — HDX Aman",
    href: "https://www.linkedin.com/in/hdx-aman-3b2505434/",
    external: true,
  },
  { key: "instagram", label: "Instagram — @hdx.py", href: "https://www.instagram.com/hdx.py/", external: true },
  { key: "mail", label: "Email — mail@hdx.xyz", href: `mailto:${EMAIL_PRIMARY}`, external: false },
];

export const FOOTER_LEGAL = "© 2026 HDX. Built by Aman. All rights reserved.";
