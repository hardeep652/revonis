
"use client";

/**
 * REVONIS — Marketing Site
 * Single-file Next.js (App Router) page component.
 *
 * Stack assumed to be installed in the host project:
 *   next, react, react-dom, typescript, tailwindcss,
 *   framer-motion, lucide-react
 *
 * Drop this in as: app/page.tsx
 *
 * Notes:
 * - Colors are inlined as Tailwind arbitrary values so no tailwind.config
 *   changes are required, but you may want to promote them to theme tokens.
 * - The "testimonials" array below contains placeholder copy only.
 *   Replace with real client quotes before shipping — do not launch with
 *   fabricated testimonials.
 * - The featured-project visuals are CSS "browser chrome" mockups, not
 *   real screenshots. Swap in real product imagery when available.
 */

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
  easeOut,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Code2,
  Cpu,
  GitBranch,
  Layers,
  Mail,
  Rocket,
  ShieldCheck,
  Timer,
  Workflow,
  Zap,
  FileCode2,
  Gauge,
  Radar,
  Boxes,
  ClipboardCheck,
  MessageSquare,
  Hammer,
  Search,
  PenTool,
  TestTube2,
  LifeBuoy,
} from "lucide-react";
import {
  SiSpringboot,
  SiNextdotjs,
  SiReact,
  SiApachekafka,
  SiRedis,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiLangchain,
  SiTensorflow,
  SiNodedotjs,
  SiPrisma,
  SiHibernate,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbBrandAzure } from "react-icons/tb";

/* -------------------------------------------------------------------------- */
/*  Design tokens                                                             */
/* -------------------------------------------------------------------------- */

const COLORS = {
  bgPrimary: "#F8F9FA",
  bgSecondary: "#F1F3F5",
  card: "#FFFFFF",
  accentBlue: "#1E3A8A",
  accentGold: "#B8912E",
  textPrimary: "#1E3A8A",
  textSecondary: "#475569",
  border: "rgba(30,58,138,0.15)",
  success: "#16A34A",
  error: "#DC2626",
};
/* -------------------------------------------------------------------------- */
/*  Shared data                                                               */
/* -------------------------------------------------------------------------- */

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#why" },
  { label: "Contact", href: "/contact" },
];

const STATS = [
  { label: "Projects Delivered", value: 40, suffix: "+" },
  { label: "Business Domains", value: 8, suffix: "" },
  { label: "Performance Score", value: 95, suffix: "+" },
  { label: "Avg. Response Time", value: 2, suffix: "h" },
  { label: "Source Code Ownership", value: 100, suffix: "%" },
  { label: "Long-Term Support", value: 12, suffix: "mo" },
];

type Project = {
  name: string;
  domain: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  accent: "gold" | "blue";
};

const PROJECTS: Project[] = [
  {
    name: "Nirmaan Academy",
    domain: "Education",
    problem:
      "Admissions were scattered across spreadsheets and phone calls. Leads slipped away and follow-ups took too long during busy enrollment periods.",
    solution:
      "We built one clear platform that handles applications, tracks every lead, and gives families an easy way to apply online.",
    impact:
      "More inquiries turn into enrollments, staff spend far less time chasing paperwork, and the team finally has one place for all applicant information.",
    tech: ["Next.js", "PostgreSQL", "Spring Boot", "AWS"],
    accent: "gold",
  },
  {
    name: "CrochetStory",
    domain: "E-Commerce",
    problem:
      "The handmade business needed an online store that felt personal and high-quality — not another generic template that was hard to manage.",
    solution:
      "We created a clean, fast storefront tied directly to their products, with simple checkout and inventory tools the owner could handle herself.",
    impact:
      "Pages load quickly, more visitors complete purchases, and the founder spends her time growing the business instead of fighting with the website.",
    tech: ["Next.js", "TypeScript", "Redis", "Docker"],
    accent: "blue",
  },
  {
    name: "Payment Reconciliation Platform",
    domain: "Fintech Infrastructure",
    problem:
      "The finance team spent days each month manually matching payments from different providers. Mistakes were common and discovered late.",
    solution:
      "We built a system that automatically pulls in transactions from every source, spots differences immediately, and creates clear reports.",
    impact:
      "Reconciliation now takes minutes instead of days. The team has confidence in the numbers and spends time on higher-value work.",
    tech: ["Java", "Kafka", "PostgreSQL", "Kubernetes"],
    accent: "gold",
  },
];

type Service = {
  icon: React.ElementType;
  title: string;
  problem: string;
  solution: string;
  value: string;
};

const SERVICES: Service[] = [
  {
    icon: Rocket,
    title: "Get More Admissions",
    problem: "Good leads come in but many never complete the application.",
    solution: "We build straightforward enrollment sites and systems that make it easy for families to apply and for your team to follow up.",
    value: "Higher conversion from interest to enrollment with less manual work.",
  },
  {
    icon: Layers,
    title: "Professional Business Websites",
    problem: "Your current site looks generic and doesn't reflect the quality of your work.",
    solution: "We design and build websites that look professional, load fast, and clearly communicate what you do.",
    value: "A website visitors trust within seconds.",
  },
  {
    icon: Workflow,
    title: "Automate Repetitive Tasks",
    problem: "Your team loses hours every week on manual processes that could be handled automatically.",
    solution: "We create simple automations that remove the boring, error-prone steps from daily work.",
    value: "More time for the work that actually moves your business forward.",
  },
  {
    icon: Code2,
    title: "Custom Business Tools",
    problem: "Off-the-shelf software is close but never quite fits how you actually operate.",
    solution: "We build tools designed around your real workflows and team.",
    value: "Software that supports your business instead of forcing you to adapt to it.",
  },
  {
    icon: Cpu,
    title: "Practical AI Features",
    problem: "AI sounds promising but most attempts stay experimental and never deliver real results.",
    solution: "We add focused AI capabilities that solve specific problems inside your existing systems.",
    value: "Automation that works reliably day after day.",
  },
  {
    icon: Boxes,
    title: "Systems That Grow With You",
    problem: "As your business grows, older systems start slowing you down and creating new problems.",
    solution: "We build or improve platforms that handle more volume without breaking.",
    value: "Reliable infrastructure you can depend on as you expand.",
  },
];

const PROCESS_STEPS = [
  { icon: Search, title: "Discovery", desc: "We talk through your goals, current challenges, and what success looks like for you." },
  { icon: Radar, title: "Research", desc: "We study how your business works today and what needs to change." },
  { icon: PenTool, title: "Design", desc: "We create clear interfaces and a solid plan for the system behind them." },
  { icon: Hammer, title: "Build", desc: "We develop the solution using proven approaches that last." },
  { icon: TestTube2, title: "Testing", desc: "We check everything thoroughly so it works reliably in real conditions." },
  { icon: Rocket, title: "Launch", desc: "We put it live with monitoring and a clear plan if anything needs adjustment." },
  { icon: LifeBuoy, title: "Support", desc: "We stay available after launch to fix issues quickly and answer questions." },
];

const WHY_REVONIS = [
  { icon: Zap, title: "Fast Responses", desc: "You won't wait days for answers. We keep communication clear and timely." },
  { icon: FileCode2, title: "Clear Pricing", desc: "You get a detailed scope and price upfront. No hidden costs later." },
  { icon: Layers, title: "Built to Last", desc: "We create systems that continue working well as your business grows." },
  { icon: Gauge, title: "Speed Matters", desc: "Every part of the experience is built to feel quick and responsive." },
  { icon: ShieldCheck, title: "Security First", desc: "We build in proper controls and protection from the beginning." },
  { icon: ClipboardCheck, title: "Clear Documentation", desc: "You receive practical guides your own team can actually follow." },
  { icon: GitBranch, title: "You Own Everything", desc: "The code and system belong to you completely." },
  { icon: Timer, title: "Ongoing Support", desc: "We're still here when you need help months after launch." },
  { icon: MessageSquare, title: "Regular Updates", desc: "You always know what's done and what comes next." },
  { icon: Cpu, title: "Full Deployment", desc: "We handle the launch to production, not just hand over files." },
];

const CLIENT_JOURNEY = [
  { title: "Discovery Call", desc: "A direct conversation about your situation, goals, and timeline." },
  { title: "Proposal", desc: "A clear document outlining exactly what we'll build, how long it will take, and the investment." },
  { title: "Design Review", desc: "You see and give feedback on the proposed interfaces before any code is written." },
  { title: "Development", desc: "We build the system while keeping you informed of progress." },
  { title: "Weekly Updates", desc: "Short, regular check-ins so you always know the current status." },
  { title: "Testing", desc: "We test across devices and real scenarios before launch." },
  { title: "Deployment", desc: "We launch the system and make sure everything is running smoothly." },
  { title: "Ongoing Support", desc: "We remain available to resolve any issues that come up." },
];

type TechItem = { name: string; icon: React.ElementType; color: string };
type TechCategory = { label: string; items: TechItem[] };

const TECH_CATEGORIES: TechCategory[] = [
  {
    label: "Frontend",
    items: [
      { name: "Next.js", icon: SiNextdotjs, color: "#111827" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Java", icon: FaJava, color: "#F89820" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Hibernate", icon: SiHibernate, color: "#9FB4BA" },
      { name: "JSP", icon: Code2, color: "#F89820" },
    ],
  },
  {
    label: "Data & Messaging",
    items: [
      { name: "Kafka", icon: SiApachekafka, color: "#5B6472" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Prisma", icon: SiPrisma, color: "#A78BFA" },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Azure", icon: TbBrandAzure, color: "#0089D6" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
    ],
  },
  {
    label: "AI & Automation",
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "LangChain", icon: SiLangchain, color: "#4DB6AC" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    ],
  },
];

// Placeholder testimonials — replace with real, attributed client quotes
// before launch. Do not ship fabricated reviews.
const TESTIMONIALS = [
  {
    quote: "REPLACE_WITH_REAL_QUOTE",
    name: "Client Name",
    role: "Title, Company",
  },
  {
    quote: "REPLACE_WITH_REAL_QUOTE",
    name: "Client Name",
    role: "Title, Company",
  },
  {
    quote: "REPLACE_WITH_REAL_QUOTE",
    name: "Client Name",
    role: "Title, Company",
  },
];

const FAQS = [
  {
    q: "How long does a project take?",
    a: "Most projects take between six and twelve weeks. We give you a clear timeline in the proposal before any work starts.",
  },
  {
    q: "Who owns the code?",
    a: "You own it completely. The system and all code belong to your business with no ongoing licensing or restrictions.",
  },
  {
    q: "Can you work with our existing software?",
    a: "Yes. We often improve or replace parts of older systems while keeping your current operations running smoothly.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. Every project includes a support period after launch. We can also set up longer-term arrangements if needed.",
  },
  {
    q: "What happens after the project launches?",
    a: "We monitor the system, help with any early issues, and provide clear documentation so your team understands it.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Scroll context (drives navbar shrink + progress bar)                     */
/* -------------------------------------------------------------------------- */

export const ScrollCtx = createContext<{ scrolled: boolean }>({ scrolled: false });

/* -------------------------------------------------------------------------- */
/*  Utility: count-up hook triggered by viewport visibility                  */
/* -------------------------------------------------------------------------- */

function useCountUp(target: number, durationMs = 1600) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / durationMs, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(eased * target));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return { ref, value };
}

/* -------------------------------------------------------------------------- */
/*  Background: engineering grid + noise + soft glow + slow particles        */
/* -------------------------------------------------------------------------- */

export function AmbientBackground() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      if (spotRef.current) {
        spotRef.current.style.background = `radial-gradient(520px circle at ${x}% ${y}%, rgba(30,58,138,0.14), rgba(212,175,55,0.06) 35%, transparent 60%)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ background: COLORS.bgPrimary }}>
      {/* living morphing gradient field */}
      <div className="ambient-mesh absolute inset-0" />

      {/* slow diagonal sheen sweep */}
      <div className="ambient-sheen" />

      {/* interactive cursor spotlight */}
      <div ref={spotRef} className="absolute inset-0" />

      {/* grain */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.025]">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Navbar                                                                    */
/* -------------------------------------------------------------------------- */

export function Navbar() {
  const { scrolled } = useContext(ScrollCtx);

  return (
    <motion.header
      className="fixed left-1/2 top-4 z-50 w-[94%] max-w-6xl -translate-x-1/2"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
    >
      <motion.div
        className="flex items-center justify-between rounded-full border px-6 backdrop-blur-xl"
        style={{
          borderColor: "rgba(255, 255, 255, 0.3)",
          background: "rgba(30, 58, 138, 0.65)", // Semi-transparent navy for glass effect
          boxShadow: "0 10px 40px -10px rgba(30,58,138,0.3)",
        }}
        animate={{ paddingTop: scrolled ? 12 : 16, paddingBottom: scrolled ? 12 : 16 }}
        transition={{ duration: 0.35, ease: easeOut }}
      >
        <span
          className="text-sm font-semibold tracking-[0.25em]"
          style={{ color: "#ffffff" }}
        >
          REVONIS
        </span>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.95)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/#contact"
          className="rounded-full px-5 py-2.5 text-[13px] font-semibold transition-transform hover:scale-[1.03]"
          style={{ background: COLORS.accentGold, color: "#111827" }}
        >
          Book a Discovery Call
        </a>
      </motion.div>
    </motion.header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero: abstract metallic engineering sculpture (pure SVG)                 */
/* -------------------------------------------------------------------------- */

function EngineeringSculpture() {
  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.2, ease: easeOut }}
    >
      <motion.svg
        viewBox="0 0 400 400"
        className="h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <linearGradient id="metalGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F4E7B1" />
            <stop offset="45%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8A6E1E" />
          </linearGradient>
          <linearGradient id="metalSteel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6B84BE" />
            <stop offset="50%" stopColor="#304D8A" />
            <stop offset="100%" stopColor="#161E3B" />
          </linearGradient>
          <linearGradient id="metalSteelSoft" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#3C4E80" />
            <stop offset="100%" stopColor="#1E2247" />
          </linearGradient>
        </defs>

        {/* outer precision ring */}
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="rgba(167,179,200,0.25)"
          strokeWidth="1"
          strokeDasharray="1 8"
        />
        <circle cx="200" cy="200" r="118" fill="none" stroke="rgba(167,179,200,0.15)" strokeWidth="1" />

        {/* rotating polygon planes */}
        <polygon points="200,70 300,150 265,280 135,280 100,150" fill="url(#metalSteelSoft)" opacity="0.55" stroke="rgba(255,255,255,0.08)" />
        <polygon points="200,110 265,165 245,255 155,255 135,165" fill="url(#metalSteel)" opacity="0.85" />

        {/* gold precision facet */}
        <polygon points="200,140 235,175 220,225 180,225 165,175" fill="url(#metalGold)" />

        {/* fine tick marks - engineering measurement motif */}
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = (i * 10 * Math.PI) / 180;
          const r1 = 150;
          const r2 = i % 3 === 0 ? 138 : 144;
          const x1 = 200 + r1 * Math.cos(angle);
          const y1 = 200 + r1 * Math.sin(angle);
          const x2 = 200 + r2 * Math.cos(angle);
          const y2 = 200 + r2 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(212,175,55,0.5)"
              strokeWidth="1"
            />
          );
        })}
      </motion.svg>

      {/* static logo mark — stays fixed while the geometry rotates behind it.
          Swap the <text> below for an <image href="/logo.svg" .../> if you
          have a real logo file. */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.7, ease: easeOut }}
      >
        <svg viewBox="0 0 120 120" className="h-[22%] w-[22%]" style={{ filter: "drop-shadow(0 0 18px rgba(212,175,55,0.45))" }}>
          <defs>
            <linearGradient id="logoRing" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F4E7B1" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r="56" fill={COLORS.bgPrimary} stroke="url(#logoRing)" strokeWidth="2" />
          <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(212,175,55,0.25)" strokeWidth="1" />
        <image href="/logo(1).svg" x="30" y="30" width="60" height="60" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-32">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 text-[13px] font-semibold tracking-[0.25em]"
            style={{ color: COLORS.accentGold }}
          >
            SOFTWARE STUDIO FOR GROWING BUSINESSES
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: easeOut }}
            className="text-[13vw] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            style={{ color: COLORS.textPrimary }}
          >
            Software that
            <br />
            helps your business <span style={{ color: COLORS.accentGold }}>grow.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 max-w-lg text-lg leading-relaxed"
            style={{ color: COLORS.textSecondary }}
          >
            We build reliable tools, websites, and automations that save you time, attract more customers, and make daily operations smoother.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.03]"
              style={{ background: COLORS.accentGold, color: "#0A0E1F" }}
            >
              Book a Discovery Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-black/5"
              style={{ borderColor: COLORS.border, color: COLORS.textPrimary }}
            >
              See Real Results
            </a>
          </motion.div>
        </div>

        <EngineeringSculpture />
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" style={{ color: COLORS.textSecondary }} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Stats bar (credibility, not logos)                                       */
/* -------------------------------------------------------------------------- */

function StatCard({ stat }: { stat: (typeof STATS)[number] }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div className="flex flex-col items-center gap-2 px-4 py-6 text-center">
      <span ref={ref} className="text-4xl font-semibold sm:text-5xl" style={{ color: COLORS.textPrimary }}>
        {value}
        <span style={{ color: COLORS.accentGold }}>{stat.suffix}</span>
      </span>
      <span className="text-xs font-medium tracking-wide" style={{ color: COLORS.textSecondary }}>
        {stat.label}
      </span>
    </div>
  );
}

function StatsBar() {
  return (
    <section className="relative px-6 py-16">
      <div
        className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y rounded-3xl border sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0"
        style={{ borderColor: COLORS.border }}
      >
        {STATS.map((stat, i) => (
          <div key={stat.label} style={{ borderColor: COLORS.border }} className={i > 0 ? "border-black/5" : ""}>
            <StatCard stat={stat} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section heading helper                                                   */
/* -------------------------------------------------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="mx-auto mb-16 max-w-2xl text-center"
    >
      <p className="mb-4 text-[13px] font-semibold tracking-[0.25em]" style={{ color: COLORS.accentGold }}>
        {eyebrow}
      </p>
      <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl" style={{ color: COLORS.textPrimary }}>
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Featured Projects                                                        */
/* -------------------------------------------------------------------------- */

function ProjectMock({ project }: { project: Project }) {
  const accent = project.accent === "gold" ? COLORS.accentGold : COLORS.accentBlue;
  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border"
      style={{ borderColor: COLORS.border, background: COLORS.bgSecondary }}
    >
      <div className="flex items-center gap-1.5 border-b px-4 py-3" style={{ borderColor: COLORS.border }}>
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#DC2626" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#D4AF37" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#16A34A" }} />
      </div>
      <div className="grid h-full grid-cols-3 gap-3 p-5">
        <div className="col-span-1 space-y-3">
          <div className="h-3 w-3/4 rounded-full" style={{ background: "rgba(15,23,42,0.1)" }} />
          <div className="h-16 rounded-lg" style={{ background: "rgba(15,23,42,0.05)" }} />
          <div className="h-16 rounded-lg" style={{ background: "rgba(15,23,42,0.05)" }} />
        </div>
        <div className="col-span-2 space-y-3">
          <div className="h-24 rounded-lg" style={{ background: `${accent}22`, border: `1px solid ${accent}55` }} />
          <div className="grid grid-cols-3 gap-3">
            <div className="h-14 rounded-lg" style={{ background: "rgba(15,23,42,0.05)" }} />
            <div className="h-14 rounded-lg" style={{ background: "rgba(15,23,42,0.05)" }} />
            <div className="h-14 rounded-lg" style={{ background: "rgba(15,23,42,0.05)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = project.accent === "gold" ? COLORS.accentGold : COLORS.accentBlue;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: easeOut, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group rounded-3xl border p-6 sm:p-10"
      style={{ borderColor: COLORS.border, background: COLORS.card }}
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div className={index % 2 === 1 ? "lg:order-2" : ""}>
          <ProjectMock project={project} />
        </div>
        <div className={index % 2 === 1 ? "lg:order-1" : ""}>
          <span
            className="mb-4 inline-block rounded-full border px-3 py-1 text-xs font-semibold tracking-wide"
            style={{ borderColor: `${accent}55`, color: accent }}
          >
            {project.domain}
          </span>
          <h3 className="mb-5 text-3xl font-semibold tracking-tight" style={{ color: COLORS.textPrimary }}>
            {project.name}
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold tracking-wide" style={{ color: COLORS.textSecondary }}>
                THE CHALLENGE
              </p>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: COLORS.textPrimary }}>
                {project.problem}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide" style={{ color: COLORS.textSecondary }}>
                WHAT WE BUILT
              </p>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: COLORS.textPrimary }}>
                {project.solution}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide" style={{ color: COLORS.textSecondary }}>
                THE RESULT
              </p>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: COLORS.textPrimary }}>
                {project.impact}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border px-3 py-1 text-xs font-medium"
                style={{ borderColor: COLORS.border, color: COLORS.textSecondary }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedProjects() {
  return (
    <section id="work" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Real businesses. Real outcomes."
          description="We focus on solving the problems that actually hold growth back."
        />
        <div className="space-y-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Services                                                                  */
/* -------------------------------------------------------------------------- */

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: easeOut }}
      whileHover={{ y: -4, borderColor: "rgba(212,175,55,0.4)" }}
      className="rounded-2xl border p-7"
      style={{ borderColor: COLORS.border, background: COLORS.card }}
    >
      <div
        className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
        style={{ background: "rgba(212,175,55,0.1)" }}
      >
        <Icon className="h-5 w-5" style={{ color: COLORS.accentGold }} />
      </div>
      <h3 className="mb-3 text-lg font-semibold" style={{ color: COLORS.textPrimary }}>
        {service.title}
      </h3>
      <p className="mb-2 text-sm leading-relaxed" style={{ color: COLORS.textSecondary }}>
        <span className="font-medium" style={{ color: COLORS.textPrimary }}>The problem — </span>
        {service.problem}
      </p>
      <p className="mb-2 text-sm leading-relaxed" style={{ color: COLORS.textSecondary }}>
        <span className="font-medium" style={{ color: COLORS.textPrimary }}>Our approach — </span>
        {service.solution}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: COLORS.accentGold }}>
        {service.value}
      </p>
    </motion.div>
  );
}

function Services() {
  return (
    <section id="services" className="relative px-6 py-28" style={{ background: COLORS.bgSecondary }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="SERVICES"
          title="What we actually help with."
          description="Practical solutions for the challenges most growing businesses face."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Process (animated timeline)                                              */
/* -------------------------------------------------------------------------- */

function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="PROCESS"
          title="How we work together."
        />
        <div ref={containerRef} className="relative">
          <div
            className="absolute left-6 top-0 hidden h-full w-px sm:block"
            style={{ background: COLORS.border }}
          />
          <motion.div
            className="absolute left-6 top-0 hidden w-px origin-top sm:block"
            style={{ height: "100%", background: COLORS.accentGold, scaleY: lineScale }}
          />
          <div className="space-y-10">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="relative flex items-start gap-6 sm:pl-2"
                >
                  <div
                    className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border"
                    style={{ borderColor: COLORS.accentGold, background: COLORS.bgPrimary }}
                  >
                    <Icon className="h-5 w-5" style={{ color: COLORS.accentGold }} />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold" style={{ color: COLORS.textPrimary }}>
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm" style={{ color: COLORS.textSecondary }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Why Revonis                                                              */
/* -------------------------------------------------------------------------- */

function WhyRevonis() {
  return (
    <section id="why" className="relative px-6 py-28" style={{ background: COLORS.bgSecondary }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="WHY WORK WITH US" title="We keep things straightforward." />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_REVONIS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="rounded-xl border p-5"
                style={{ borderColor: COLORS.border, background: COLORS.bgPrimary }}
              >
                <Icon className="mb-3 h-5 w-5" style={{ color: COLORS.accentGold }} />
                <h3 className="mb-1 text-sm font-semibold" style={{ color: COLORS.textPrimary }}>
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: COLORS.textSecondary }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Client Experience                                                        */
/* -------------------------------------------------------------------------- */

function ClientExperience() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="CLIENT EXPERIENCE"
          title="What to expect when you work with us."
          description="We remove the usual uncertainty that comes with software projects."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CLIENT_JOURNEY.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex gap-4 rounded-xl border p-5"
              style={{ borderColor: COLORS.border, background: COLORS.card }}
            >
              <span
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold"
                style={{ background: "rgba(212,175,55,0.12)", color: COLORS.accentGold }}
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-sm font-semibold" style={{ color: COLORS.textPrimary }}>
                  {step.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed" style={{ color: COLORS.textSecondary }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tech marquee                                                             */
/* -------------------------------------------------------------------------- */

function TechStack() {
  const [active, setActive] = useState(0);
  const activeCategory = TECH_CATEGORIES[active];

  return (
    <section id="stack" className="relative border-y px-6 py-28" style={{ borderColor: COLORS.border }}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-[13px] font-semibold tracking-[0.25em]" style={{ color: COLORS.accentGold }}>
            OUR APPROACH TO TECHNOLOGY
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: COLORS.textPrimary }}>
            We choose tools that solve your problem reliably.
          </h2>
          <p className="mt-5 text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
            No unnecessary complexity. Just solid technology chosen to support your business goals.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* category list */}
          <nav className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {TECH_CATEGORIES.map((cat, i) => {
              const isActive = i === active;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActive(i)}
                  className="relative flex flex-shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors lg:px-3"
                  style={{
                    background: isActive ? "rgba(212,175,55,0.12)" : "transparent",
                    color: isActive ? COLORS.accentGold : COLORS.textSecondary,
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="techCategoryIndicator"
                      className="absolute left-0 top-1/2 hidden h-5 w-[3px] -translate-y-1/2 rounded-full lg:block"
                      style={{ background: COLORS.accentGold }}
                      transition={{ duration: 0.3, ease: easeOut }}
                    />
                  )}
                  <span className="whitespace-nowrap tracking-wide lg:pl-2">
                    {cat.label.toUpperCase()}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* icon grid */}
          <div className="min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: easeOut }}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
              >
                {activeCategory.items.map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      whileHover={{ y: -3, borderColor: "rgba(212,175,55,0.35)" }}
                      className="flex flex-col items-center justify-center gap-3 rounded-xl border px-4 py-7 text-center"
                      style={{ borderColor: COLORS.border, background: COLORS.card }}
                    >
                      <Icon className="h-8 w-8" style={{ color: tech.color }} />
                      <span className="text-xs font-medium" style={{ color: COLORS.textSecondary }}>
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                             */
/* -------------------------------------------------------------------------- */

function Testimonials() {
  return (
    <section className="relative px-6 py-28" style={{ background: COLORS.bgSecondary }}>
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="TESTIMONIALS" title="What clients say." />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border p-7"
              style={{ borderColor: COLORS.border, background: COLORS.bgPrimary }}
            >
              <p className="text-sm italic leading-relaxed" style={{ color: COLORS.textPrimary }}>
                "{t.quote}"
              </p>
              <div className="mt-5 border-t pt-4" style={{ borderColor: COLORS.border }}>
                <p className="text-sm font-semibold" style={{ color: COLORS.textPrimary }}>
                  {t.name}
                </p>
                <p className="text-xs" style={{ color: COLORS.textSecondary }}>
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                      */
/* -------------------------------------------------------------------------- */

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b" style={{ borderColor: COLORS.border }}>
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="text-base font-medium" style={{ color: COLORS.textPrimary }}>
          {q}
        </span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="h-5 w-5 flex-shrink-0" style={{ color: COLORS.accentGold }} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm leading-relaxed" style={{ color: COLORS.textSecondary }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq" className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Common questions." />
        <div>
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Final CTA                                                                */
/* -------------------------------------------------------------------------- */

function FinalCTA() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: easeOut }}
        className="mx-auto max-w-4xl rounded-3xl border px-8 py-20 text-center"
        style={{ borderColor: COLORS.border, background: COLORS.card }}
      >
        <h2
          className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
          style={{ color: COLORS.textPrimary }}
        >
          Ready to move forward?
          <br />
          Let's <span style={{ color: COLORS.accentGold }}>talk.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base" style={{ color: COLORS.textSecondary }}>
          One honest conversation is the best way to see if we're the right partner for your project.
        </p>
        <a
          href="mailto:hello@revonis.com"
          className="mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-transform hover:scale-[1.03]"
          style={{ background: COLORS.accentGold, color: "#0A0E1F" }}
        >
          Book a Discovery Call
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Inline brand icons (lucide-react no longer ships trademarked logos)      */
/* -------------------------------------------------------------------------- */

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                   */
/* -------------------------------------------------------------------------- */

export function Footer() {
  return (
    <footer className="border-t px-6 py-12" style={{ borderColor: COLORS.border }}>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <span className="text-sm font-semibold tracking-[0.25em]" style={{ color: COLORS.textPrimary }}>
          REVONIS
        </span>
        <div className="flex items-center gap-6">
          <a href="mailto:hello@revonis.com" aria-label="Email" style={{ color: COLORS.textSecondary }}>
            <Mail className="h-4 w-4" />
          </a>
          <a href="#" aria-label="LinkedIn" style={{ color: COLORS.textSecondary }}>
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Instagram" style={{ color: COLORS.textSecondary }}>
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>
        <span className="text-xs" style={{ color: COLORS.textSecondary }}>
          © {new Date().getFullYear()} Revonis. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                     */
/* -------------------------------------------------------------------------- */

export default function RevonisPage() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <ScrollCtx.Provider value={{ scrolled }}>
      <div className="relative min-h-screen font-sans" style={{ color: COLORS.textPrimary }}>
        <AmbientBackground />

        <Navbar />
        <main>
          <Hero />
          <StatsBar />
          <Services />
          <Process />
          <WhyRevonis />
          <ClientExperience />
          <TechStack />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </ScrollCtx.Provider>
  );
}
