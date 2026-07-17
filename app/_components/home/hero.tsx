"use client";

import { useReducedMotion, motion } from "framer-motion";
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
  const items = [...WORK_TYPES, ...WORK_TYPES, ...WORK_TYPES]; // triple for smoother loop

  return (
    <div className="relative h-[420px] w-full max-w-[450px] overflow-hidden rounded-3xl border border-white/5">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1B3D] via-[#0A1429] to-[#0F1B3D]" />

      <style jsx>{`
        @keyframes ticketScroll {
          from { transform: translateY(0); }
          to { transform: translateY(-33.333%); } /* 1/3 because we duplicated 3x */
        }

        .ticket-track {
          animation: ticketScroll 18s linear infinite;
        }

        .ticket-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="ticket-track flex flex-col gap-4 px-6 py-6"
        style={{
          animation: reduceMotion ? "none" : undefined,
        }}
      >
        {items.map(({ label, icon: Icon }, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
            className="group flex items-center gap-4 rounded-2xl border px-6 py-5 transition-all duration-300"
            style={{
              borderColor: "#22305C",
              background: "rgba(19, 28, 61, 0.8)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform group-hover:rotate-12"
              style={{ background: "#1B2650" }}
            >
              <Icon className="h-5 w-5" style={{ color: COLORS.accentGold }} />
            </div>

            <div>
              <p className="text-[15px] font-medium" style={{ color: "#E4E7F2" }}>
                {label}
              </p>
              <p className="text-xs" style={{ color: "#94A3C0" }}>
                Perfect for growing teams
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Top & Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0F1B3D] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0F1B3D] to-transparent" />
    </div>
  );
}

// Hero component remains same (only TicketTape changed)
export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pb-16 pt-28">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left content unchanged */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 font-mono text-[12px] tracking-[0.15em]"
            style={{ color: COLORS.textSecondary }}
          >
            REVONIS — SOFTWARE STUDIO
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: COLORS.textPrimary }}
          >
            Got something that's been
            <br />
            waiting <span style={{ color: COLORS.accentGold }}>too long?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 max-w-md text-base leading-relaxed sm:text-lg"
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
            className="mt-8 flex flex-wrap items-center gap-4"
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
            className="mt-6 font-mono text-[11px] tracking-wide"
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