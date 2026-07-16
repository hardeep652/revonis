import { motion, easeOut } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { COLORS } from "./home-data";
import { EngineeringSculpture } from "./engineering-sculpture";

export function Hero() {
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
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.03]"
              style={{ background: COLORS.accentGold, color: "#0A0E1F" }}
            >
              Book a Discovery Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-black/5"
              style={{ borderColor: COLORS.border, color: COLORS.textPrimary }}
            >
              See Real Results
            </Link>
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
