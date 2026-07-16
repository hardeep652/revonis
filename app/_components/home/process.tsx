import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { COLORS, PROCESS_STEPS } from "./home-data";
import { SectionHeading } from "./section-heading";

export function Process() {
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

