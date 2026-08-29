import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { COLORS, TESTIMONIALS } from "./home-data";
import { SectionHeading } from "./section-heading";

export function Testimonials() {
  const isTwo = TESTIMONIALS.length === 2;

  return (
    <section className="relative px-6 py-28" style={{ background: "transparent" }}>
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="TESTIMONIALS" title="What clients say." />
        <div
          className={`grid grid-cols-1 gap-6 ${
            isTwo ? "mx-auto max-w-4xl md:grid-cols-2" : "md:grid-cols-3"
          }`}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex flex-col justify-between rounded-2xl border p-7 shadow-xs transition-all duration-300 hover:shadow-md"
              style={{ borderColor: COLORS.border, background: COLORS.bgPrimary }}
            >
              <div>
                <Quote className="mb-3 h-5 w-5 opacity-40" style={{ color: COLORS.accentGold }} />
                <p className="text-sm italic leading-relaxed" style={{ color: COLORS.textPrimary }}>
                  &quot;{t.quote}&quot;
                </p>
              </div>
              <div
                className="mt-6 flex items-center gap-3.5 border-t pt-4"
                style={{ borderColor: COLORS.border }}
              >
                {t.logo && (
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-white p-1 shadow-xs transition-transform hover:scale-105"
                    style={{ borderColor: COLORS.border }}
                  >
                    <img
                      src={t.logo}
                      alt={`${t.name} logo`}
                      className="h-full w-full object-contain"
                    />
                  </a>
                )}
                <div>
                  <p className="text-sm font-semibold" style={{ color: COLORS.textPrimary }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: COLORS.textSecondary }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
