import { motion } from "framer-motion";
import { COLORS, WHY_REVONIS } from "./home-data";
import { SectionHeading } from "./section-heading";

export function WhyRevonis() {
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

