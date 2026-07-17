import { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useInView,
} from "framer-motion";
import { COLORS, PROCESS_STEPS } from "./home-data";
import { SectionHeading } from "./section-heading";

function StepVisual({ step }: { step: number }) {
  const variants = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
  };

  switch (step) {
    case 0: // Discovery — notes typing in
      return (
        <motion.div
          key="discovery"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          className="space-y-3"
        >
          {[
            "Business goals",
            "Current pain points",
            "Success metrics",
            "Constraints & budget",
          ].map((line, i) => (
            <motion.div
              key={line}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="flex items-center gap-3 overflow-hidden whitespace-nowrap"
            >
              <div
                className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ background: COLORS.accentGold }}
              />
              <span className="text-sm" style={{ color: COLORS.textSecondary }}>
                {line}
              </span>
            </motion.div>
          ))}
        </motion.div>
      );

    case 1: // Research — data rows
      return (
        <motion.div
          key="research"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          className="space-y-3"
        >
          {[70, 45, 90, 60].map((w, i) => (
            <div key={i} className="flex items-center gap-3">
              <span
                className="w-16 flex-shrink-0 text-xs"
                style={{ color: COLORS.textSecondary }}
              >
                Metric {i + 1}
              </span>
              <div
                className="h-2 flex-1 overflow-hidden rounded-full"
                style={{ background: COLORS.border }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: COLORS.accentGold }}
                  initial={{ width: 0 }}
                  animate={{ width: `${w}%` }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      );

    case 2: // Design — an actual UI wireframe drawing itself with stroke animation
      return (
        <motion.div
          key="design"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          className="rounded-lg p-4"
          style={{ background: COLORS.bgPrimary }}
        >
          <svg viewBox="0 0 240 160" className="h-full w-full">
            {/* outer frame */}
            <motion.rect
              x="4" y="4" width="232" height="152" rx="6"
              fill="none" stroke={COLORS.border} strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6 }}
            />
            {/* top nav bar */}
            <motion.rect
              x="4" y="4" width="232" height="24" rx="6"
              fill="none" stroke={COLORS.accentGold} strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            />
            <motion.circle
              cx="16" cy="16" r="3" fill={COLORS.accentGold}
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}
            />
            {[0, 1, 2].map((i) => (
              <motion.rect
                key={i}
                x={170 + i * 20} y="12" width="14" height="8" rx="2"
                fill="none" stroke={COLORS.textSecondary} strokeWidth="1"
                initial={{ opacity: 0 }} animate={{ opacity: 0.6 }}
                transition={{ delay: 0.55 + i * 0.08 }}
              />
            ))}
            {/* sidebar */}
            <motion.rect
              x="12" y="36" width="52" height="112" rx="4"
              fill="none" stroke={COLORS.textSecondary} strokeWidth="1.2"
              strokeDasharray="4 3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            />
            {[0, 1, 2, 3].map((i) => (
              <motion.rect
                key={i}
                x="20" y={48 + i * 22} width="36" height="8" rx="2"
                fill={COLORS.textSecondary}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 0.35, x: 0 }}
                transition={{ delay: 0.9 + i * 0.08 }}
              />
            ))}
            {/* content cards */}
            {[0, 1].map((i) => (
              <motion.rect
                key={i}
                x="76" y={36 + i * 60} width="152" height="52" rx="4"
                fill="none" stroke={COLORS.accentGold} strokeWidth="1.2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1.1 + i * 0.2, duration: 0.5 }}
              />
            ))}
            <motion.rect
              x="88" y="48" width="70" height="7" rx="2" fill={COLORS.textPrimary}
              initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1.5 }}
            />
            <motion.rect
              x="88" y="62" width="110" height="6" rx="2" fill={COLORS.textSecondary}
              initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 1.6 }}
            />
            <motion.rect
              x="88" y="108" width="70" height="7" rx="2" fill={COLORS.textPrimary}
              initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1.7 }}
            />
            <motion.rect
              x="88" y="122" width="110" height="6" rx="2" fill={COLORS.textSecondary}
              initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 1.8 }}
            />
          </svg>
        </motion.div>
      );

    case 3: // Build — code typing in
      return (
        <motion.div
          key="build"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          className="space-y-1.5 rounded-lg p-4 font-mono text-xs"
          style={{ background: COLORS.bgPrimary }}
        >
          {[
            "function reconcile(txn) {",
            "  const match = ledger.find(txn.id);",
            "  if (!match) throw new Err();",
            "  return commit(match);",
            "}",
          ].map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.12 }}
              style={{
                color: i === 0 || i === 4 ? COLORS.accentGold : COLORS.textSecondary,
              }}
            >
              {line}
            </motion.div>
          ))}
        </motion.div>
      );

    case 4: // Testing — terminal checks ticking off
      return (
        <motion.div
          key="testing"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          className="space-y-2 rounded-lg p-4 font-mono text-xs"
          style={{ background: COLORS.bgPrimary }}
        >
          {[
            "auth.spec.ts",
            "payments.spec.ts",
            "reconcile.spec.ts",
            "e2e/checkout.spec.ts",
          ].map((line, i) => (
            <motion.div
              key={line}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.2 + 0.15 }}
                style={{ color: "#22c55e" }}
              >
                ✓
              </motion.span>
              <span style={{ color: COLORS.textSecondary }}>{line}</span>
            </motion.div>
          ))}
        </motion.div>
      );

    case 5: // Launch — deploy checklist, then goes live
      return (
        <motion.div
          key="launch"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          className="space-y-4"
        >
          <div className="space-y-2 font-mono text-xs">
            {["Build passing", "Env vars configured", "DNS propagated"].map((line, i) => (
              <motion.div
                key={line}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.2 + 0.15 }}
                  style={{ color: "#22c55e" }}
                >
                  ✓
                </motion.span>
                <span style={{ color: COLORS.textSecondary }}>{line}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex items-center justify-between rounded-lg border px-4 py-3"
            style={{ borderColor: COLORS.accentGold, background: COLORS.bgPrimary }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <span className="text-sm font-medium" style={{ color: COLORS.textPrimary }}>
              Production
            </span>
            <span className="flex items-center gap-2 text-xs" style={{ color: "#22c55e" }}>
              <motion.span
                className="h-2 w-2 rounded-full"
                style={{ background: "#22c55e" }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ delay: 1.1, duration: 1.4, repeat: Infinity }}
              />
              Live
            </span>
          </motion.div>
        </motion.div>
      );

    case 6: // Support — uptime + response, ongoing care after launch
      return (
        <motion.div
          key="support"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          className="space-y-4"
        >
          <div className="flex items-end gap-1.5" style={{ height: 48 }}>
            {[60, 75, 55, 90, 70, 95, 85].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm"
                style={{ background: COLORS.accentGold }}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: `${h}%`, opacity: 1 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              />
            ))}
          </div>
          <div className="flex items-center justify-between text-xs" style={{ color: COLORS.textSecondary }}>
            <span>7-day uptime</span>
            <motion.span
              className="font-mono font-semibold"
              style={{ color: COLORS.textPrimary }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              99.98%
            </motion.span>
          </div>
          <motion.div
            className="flex items-center gap-2 rounded-lg border px-4 py-3"
            style={{ borderColor: COLORS.border }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
          >
            <div className="h-1.5 w-1.5 rounded-full" style={{ background: "#22c55e" }} />
            <span className="text-xs" style={{ color: COLORS.textSecondary }}>
              Avg. response time: 2h
            </span>
          </motion.div>
        </motion.div>
      );

    default:
      return null;
  }
}

export function Process() {
  // Wraps BOTH columns so scroll-progress math and the sticky panel share the same boundary
  const containerRef = useRef<HTMLDivElement>(null);
  // Watches the sticky panel specifically, so we know the moment it's actually on screen
  const panelRef = useRef<HTMLDivElement>(null);

  const [activeStep, setActiveStep] = useState(0);
  // Gate: don't play the reveal animation until the panel has actually scrolled into view
  const [hasEntered, setHasEntered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(
      PROCESS_STEPS.length - 1,
      Math.floor(latest * PROCESS_STEPS.length)
    );
    setActiveStep(idx);
  });

  const panelInView = useInView(panelRef, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (panelInView && !hasEntered) {
      setHasEntered(true);
    }
  }, [panelInView, hasEntered]);

  return (
    <section id="process" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="PROCESS" title="How we work together." />

        {/* containerRef moved here so scroll math + sticky panel share the same boundary */}
        <div ref={containerRef} className="grid gap-16 lg:grid-cols-[1fr_360px]">
          {/* Left: timeline */}
          <div className="relative">
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
                const isActive = i === activeStep;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    className="relative flex flex-col gap-6 sm:pl-2"
                  >
                    <div className="flex items-start gap-6">
                      <div
                        className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border transition-colors duration-300"
                        style={{
                          borderColor: COLORS.accentGold,
                          background: isActive ? COLORS.accentGold : COLORS.bgPrimary,
                        }}
                      >
                        <Icon
                          className="h-5 w-5 transition-colors duration-300"
                          style={{ color: isActive ? COLORS.bgPrimary : COLORS.accentGold }}
                        />
                      </div>
                      <div className="pt-2">
                        <h3 className="text-lg font-semibold" style={{ color: COLORS.textPrimary }}>
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm" style={{ color: COLORS.textSecondary }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Mobile/tablet fallback: renders the visual inline under each step,
                        since the sticky panel is hidden below the lg breakpoint */}
                    <div
                      className="ml-[4.5rem] rounded-xl border p-5 lg:hidden"
                      style={{ borderColor: COLORS.border, background: COLORS.bgSecondary }}
                    >
                      <div className="min-h-[140px]">
                        <StepVisual step={i} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: sticky panel (desktop only) */}
          <div className="hidden lg:block" ref={panelRef}>
            <div className="sticky top-32">
              <div
                className="rounded-2xl border p-8"
                style={{ borderColor: COLORS.border, background: COLORS.bgSecondary }}
              >
                <span
                  className="text-6xl font-bold leading-none"
                  style={{ color: COLORS.accentGold, opacity: 0.25 }}
                >
                  {String(activeStep + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 text-xl font-semibold" style={{ color: COLORS.textPrimary }}>
                  {PROCESS_STEPS[activeStep].title}
                </h3>

                <div className="mt-6 min-h-[160px]">
                  {hasEntered ? (
                    <AnimatePresence mode="wait">
                      <StepVisual key={activeStep} step={activeStep} />
                    </AnimatePresence>
                  ) : (
                    <div className="h-full w-full" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
