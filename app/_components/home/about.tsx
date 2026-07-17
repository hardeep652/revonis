import { motion, easeOut } from "framer-motion";
import {
  Compass,
  Target,
  Sparkles,
  ShieldCheck,
  GitBranch,
  MessageSquare,
  Cpu,
  Gauge,
  Code2,
  Workflow,
  LifeBuoy,
  Layers,
  Rocket,
  Quote,
} from "lucide-react";
import { COLORS, STATS } from "./home-data";
import { SectionHeading } from "./section-heading";

const MISSION =
  "We help small and growing teams turn the software that slows them down into systems that move them forward — built clearly, owned fully, and supported for the long run.";

const VISION =
  "A world where every ambitious team, regardless of size, has access to software that fits how they actually work — reliable, modern, and quietly powerful.";

const STORY = [
  "Revonis is a software studio for businesses that have outgrown spreadsheets and off-the-shelf tools but don't need a full in-house engineering team. We build the websites, internal tools, automations, and AI features that keep your operation moving.",
  "Most of our work starts with a simple problem: a manual step that eats an hour every week, a site that's been 'almost done' for a year, or a system that can't keep up as you grow. We sit down, understand how you actually operate, and build something that fits — without the enterprise price tag or the enterprise wait.",
  "We've shipped work across education, local services, and product businesses, and we bring the same calm, practical approach to every engagement. You get clear pricing, regular updates, and code you fully own.",
];

const CORE_VALUES = [
  {
    icon: Sparkles,
    title: "Practical Innovation",
    desc: "We use modern tech where it helps and skip it where it doesn't. No solutions looking for a problem.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    desc: "Proper controls and protection are built in from day one, not bolted on before launch.",
  },
  {
    icon: GitBranch,
    title: "You Own Everything",
    desc: "The code and the system belong to your business completely — no lock-in, no surprises.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    desc: "Regular updates and honest timelines. You always know what's done and what comes next.",
  },
  {
    icon: Gauge,
    title: "Built to Last",
    desc: "We create systems that keep working well as your business grows and changes.",
  },
  {
    icon: LifeBuoy,
    title: "Long-Term Support",
    desc: "We're still here months after launch to fix issues quickly and answer questions.",
  },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: easeOut, delay },
  };
}

function ValueCard({ icon: Icon, title, desc, index }: { icon: any; title: string; desc: string; index: number }) {
  return (
    <motion.div
      {...fadeUp((index % 3) * 0.06)}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group rounded-2xl border p-7 transition-shadow duration-300"
      style={{
        borderColor: COLORS.border,
        background: COLORS.card,
        boxShadow: "0 1px 2px rgba(30,58,138,0.04)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 16px 32px rgba(30,58,138,0.12)";
        e.currentTarget.style.borderColor = COLORS.accentGold;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 1px 2px rgba(30,58,138,0.04)";
        e.currentTarget.style.borderColor = COLORS.border;
      }}
    >
      <motion.div
        className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl"
        style={{ background: "rgba(184,145,46,0.1)" }}
        whileHover={{ rotate: 8, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="h-6 w-6" style={{ color: COLORS.accentGold }} />
      </motion.div>
      <h3 className="mb-2 text-base font-semibold" style={{ color: COLORS.textPrimary }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: COLORS.textSecondary }}>
        {desc}
      </p>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="why" className="relative px-6 py-28" style={{ background: "transparent" }}>
      <div className="mx-auto max-w-6xl">
        {/* Hero heading */}
        <SectionHeading
          eyebrow="ABOUT REVONIS"
          title="Software that fits how you actually work."
          description="Revonis is a software studio for growing teams — we build the websites, tools, and automations that turn daily friction into quiet momentum."
        />

        {/* Company story */}
        <div className="mx-auto mb-24 max-w-3xl">
          {STORY.map((para, i) => (
            <motion.p
              key={i}
              {...fadeUp(i * 0.08)}
              className="mb-5 text-base leading-relaxed last:mb-0 sm:text-lg"
              style={{ color: COLORS.textSecondary }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Mission + Vision */}
        <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            {...fadeUp(0)}
            className="relative overflow-hidden rounded-3xl border p-8"
            style={{ borderColor: COLORS.border, background: COLORS.card }}
          >
            <Target className="mb-4 h-7 w-7" style={{ color: COLORS.accentGold }} />
            <p className="mb-3 text-[13px] font-semibold tracking-[0.2em]" style={{ color: COLORS.accentBlue }}>
              OUR MISSION
            </p>
            <p className="text-lg font-medium leading-relaxed" style={{ color: COLORS.textPrimary }}>
              {MISSION}
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.08)}
            className="relative overflow-hidden rounded-3xl border p-8"
            style={{ borderColor: COLORS.border, background: COLORS.card }}
          >
            <Compass className="mb-4 h-7 w-7" style={{ color: COLORS.accentGold }} />
            <p className="mb-3 text-[13px] font-semibold tracking-[0.2em]" style={{ color: COLORS.accentBlue }}>
              OUR VISION
            </p>
            <p className="text-lg font-medium leading-relaxed" style={{ color: COLORS.textPrimary }}>
              {VISION}
            </p>
          </motion.div>
        </div>

        {/* Core values */}
        <SectionHeading eyebrow="WHAT WE STAND FOR" title="Core values" />
        <div className="mb-24 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_VALUES.map((v, i) => (
            <ValueCard key={v.title} {...v} index={i} />
          ))}
        </div>

        {/* Closing statement */}
        <SectionHeading eyebrow="BY THE NUMBERS" title="What our work adds up to." />
        <div className="mb-24 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              {...fadeUp(i * 0.05)}
              className="rounded-2xl border p-6 text-center"
              style={{ borderColor: COLORS.border, background: COLORS.card }}
            >
              <p className="text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: COLORS.accentBlue }}>
                {s.value}
                {s.suffix}
              </p>
              <p className="mt-2 text-xs leading-snug" style={{ color: COLORS.textSecondary }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          {...fadeUp(0)}
          className="relative overflow-hidden rounded-3xl border px-8 py-16 text-center"
          style={{ borderColor: COLORS.border, background: COLORS.card }}
        >
          <Quote className="mx-auto mb-6 h-9 w-9" style={{ color: COLORS.accentGold }} />
          <p className="mx-auto max-w-2xl text-xl font-medium leading-relaxed sm:text-2xl" style={{ color: COLORS.textPrimary }}>
            If you have a system that's been "almost done" for too long — or one that should exist but doesn't yet — that's exactly the kind of work we love. Let's build your next digital product, properly.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.03]"
            style={{ background: COLORS.accentGold, color: "#0A0E1F" }}
          >
            Start a project
            <Rocket className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
