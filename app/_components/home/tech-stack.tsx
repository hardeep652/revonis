import { useState } from "react";
import { AnimatePresence, motion, easeOut } from "framer-motion";
import { COLORS, TECH_CATEGORIES } from "./home-data";

export function TechStack() {
  const [active, setActive] = useState(0);
  const activeCategory = TECH_CATEGORIES[active];

  return (
    <section id="stack" className="relative border-y px-6 py-28" style={{ borderColor: COLORS.border }}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-[13px] font-semibold tracking-[0.25em]" style={{ color: COLORS.accentGold }}>
            OUR APPROACH TO TECHNOLOGY
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: COLORS.textPrimary }}>
            We choose tools that solve your problem reliably.
          </h2>
          <p className="mt-5 text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
            No unnecessary complexity. Just solid technology chosen to support your business goals.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* category list */}
          <nav className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {TECH_CATEGORIES.map((cat, i) => {
              const isActive = i === active;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActive(i)}
                  className="relative flex flex-shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors lg:px-3"
                  style={{
                    background: isActive ? "rgba(212,175,55,0.12)" : "transparent",
                    color: isActive ? COLORS.accentGold : COLORS.textSecondary,
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="techCategoryIndicator"
                      className="absolute left-0 top-1/2 hidden h-5 w-[3px] -translate-y-1/2 rounded-full lg:block"
                      style={{ background: COLORS.accentGold }}
                      transition={{ duration: 0.3, ease: easeOut }}
                    />
                  )}
                  <span className="whitespace-nowrap tracking-wide lg:pl-2">
                    {cat.label.toUpperCase()}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* icon grid */}
          <div className="min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: easeOut }}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
              >
                {activeCategory.items.map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      whileHover={{ y: -3, borderColor: "rgba(212,175,55,0.35)" }}
                      className="flex flex-col items-center justify-center gap-3 rounded-xl border px-4 py-7 text-center"
                      style={{ borderColor: COLORS.border, background: COLORS.card }}
                    >
                      <Icon className="h-8 w-8" style={{ color: tech.color }} />
                      <span className="text-xs font-medium" style={{ color: COLORS.textSecondary }}>
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

