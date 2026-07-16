"use client";

import { useReducedMotion, motion, easeOut } from "framer-motion";
import {
  ArrowRight,
  Globe,
  LayoutDashboard,
  CalendarCheck,
  Workflow,
  ShoppingCart,
  Plug,
} from "lucide-react";
import Link from "next/link";
import { COLORS } from "./home-data";

const WORK_TYPES = [
  { label: "Custom websites", icon: Globe },
  { label: "Internal dashboards", icon: LayoutDashboard },
  { label: "Booking systems", icon: CalendarCheck },
  { label: "Automations", icon: Workflow },
  { label: "Online stores", icon: ShoppingCart },
  { label: "API integrations", icon: Plug },
];

function TicketTape() {
  const reduceMotion = useReducedMotion();
  const items = [...WORK_TYPES, ...WORK_TYPES]; // duplicated for a seamless loop

  return (
    <div
      className="relative h-[420px] w-full max-w-xs overflow-hidden rounded-2xl"
      style={{
        background: "#0F1B3D",
        maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <style>{`
        @keyframes ticket-scroll {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .ticket-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div
        className="ticket-track flex flex-col gap-3 px-4 py-6"
        style={{
          animation: reduceMotion ? "none" : "ticket-scroll 16s linear infinite",
        }}
      >
        {items.map(({ label, icon: Icon }, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl border px-4 py-3.5"
            style={{ borderColor: "#22305C", background: "#131C3D" }}
          >
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
              style={{ background: "#1B2650" }}
            >
              <Icon className="h-4 w-4" style={{ color: COLORS.accentGold }} />
            </span>
            <span className="text-sm font-medium" style={{ color: "#E4E7F2" }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-32">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 font-mono text-[12px] tracking-[0.15em]"
            style={{ color: COLORS.textSecondary }}
          >
            REVONIS — SOFTWARE STUDIO
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
            style={{ color: COLORS.textPrimary }}
          >
            Got something that's
            <br />
            been waiting <span style={{ color: COLORS.accentGold }}>too long?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-md text-lg leading-relaxed"
            style={{ color: COLORS.textSecondary }}
          >
            A clunky spreadsheet. A manual step that eats an hour every
            week. A website that's been "almost done" for a year. Small
            team, no backlog — we can actually start on it soon.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.03]"
              style={{ background: COLORS.accentGold, color: "#0A0E1F" }}
            >
              Tell us about it
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-black/5"
              style={{ borderColor: COLORS.border, color: COLORS.textPrimary }}
            >
              How we work
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 font-mono text-[11px] tracking-wide"
            style={{ color: COLORS.textSecondary }}
          >
            OPEN FOR NEW PROJECTS
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center"
        >
          <TicketTape />
        </motion.div>
      </div>
    </section>
  );
}