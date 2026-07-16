import { motion } from "framer-motion";
import { COLORS, WHY_REVONIS } from "./home-data";
import { SectionHeading } from "./section-heading";

export function WhyRevonis() {
  return (
    <section id="why" className="relative px-6 py-28" style={{ background: COLORS.bgSecondary }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="WHY WORK WITH US" title="We keep things straightforward." />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_REVONIS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group cursor-default rounded-xl border p-6 transition-shadow duration-300"
                style={{
                  borderColor: COLORS.border,
                  background: COLORS.bgPrimary,
                  boxShadow: "0 1px 2px rgba(30,58,138,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(30,58,138,0.12)";
                  e.currentTarget.style.borderColor = COLORS.accentGold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 1px 2px rgba(30,58,138,0.04)";
                  e.currentTarget.style.borderColor = COLORS.border;
                }}
              >
                <motion.div
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: "rgba(184,145,46,0.1)" }}
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="h-5 w-5" style={{ color: COLORS.accentGold }} />
                </motion.div>
                <h3 className="mb-1.5 text-sm font-semibold" style={{ color: COLORS.textPrimary }}>
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