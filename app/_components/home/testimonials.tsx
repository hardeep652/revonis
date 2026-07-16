import { motion } from "framer-motion";
import { COLORS, TESTIMONIALS } from "./home-data";
import { SectionHeading } from "./section-heading";

export function Testimonials() {
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
                &quot;{t.quote}&quot;
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
