import { motion, easeOut } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { COLORS } from "./home-data";

export function FinalCTA() {
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
          Let&apos;s <span style={{ color: COLORS.accentGold }}>talk.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base" style={{ color: COLORS.textSecondary }}>
          One honest conversation is the best way to see if we&apos;re the right partner for your project.
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
