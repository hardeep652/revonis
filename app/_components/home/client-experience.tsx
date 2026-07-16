import { motion } from "framer-motion";
import { CLIENT_JOURNEY, COLORS } from "./home-data";
import { SectionHeading } from "./section-heading";

export function ClientExperience() {
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

