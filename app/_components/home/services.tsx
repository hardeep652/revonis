"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { Sparkles } from "lucide-react";
import { COLORS, SERVICES, type Service } from "./home-data";
import { SectionHeading } from "./section-heading";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: index * 0.06, ease: easeOut },
        },
        hover: {
          y: -4,
          borderColor: "rgba(212,175,55,0.4)",
          transition: { duration: 0.2, ease: "easeOut" },
        },
      }}
      className="rounded-2xl border p-7"
      style={{ borderColor: COLORS.border, background: COLORS.card }}
    >
      <div
        className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
        style={{ background: "rgba(212,175,55,0.1)" }}
      >
        <Icon className="h-5 w-5" style={{ color: COLORS.accentGold }} />
      </div>
      <h3 className="mb-2.5 text-lg font-semibold" style={{ color: COLORS.textPrimary }}>
        {service.title}
      </h3>
      <p className="mb-3 text-sm leading-relaxed" style={{ color: COLORS.textSecondary }}>
        {service.description}
      </p>
      <p className="text-sm font-medium leading-relaxed" style={{ color: COLORS.accentGold }}>
        {service.value}
      </p>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative px-6 py-28" style={{ background: "transparent" }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="SERVICES"
          title="What we actually help with."
          description="Practical solutions for the challenges most growing businesses face."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Blueprint = { title: string; lines: string[] };

const RESPONSES: Record<string, Blueprint> = {
  leads: {
    title: "What we'd build",
    lines: [
      "A lead capture flow that logs and tags every inquiry the moment it lands",
      "Instant automated confirmation so no one is left wondering",
      "A simple dashboard your team checks each morning, nothing falls through",
    ],
  },
  manual: {
    title: "What we'd build",
    lines: [
      "Map the 2-3 repetitive steps eating the most time each week",
      "Replace them with a small automation that runs quietly in the background",
      "You keep the oversight, the busywork disappears",
    ],
  },
  website: {
    title: "What we'd build",
    lines: [
      "A fast, professional site that actually reflects the quality of your work",
      "Clear structure so visitors understand what you do in seconds",
      "Built to load fast and convert, not just look nice",
    ],
  },
  scale: {
    title: "What we'd build",
    lines: [
      "Audit the parts of your current setup that are close to breaking",
      "Rebuild the weak points on infrastructure that scales with you",
      "Systems that handle 10x the volume without 10x the headaches",
    ],
  },
  default: {
    title: "What we'd build",
    lines: [
      "A short discovery chat to understand exactly what is slowing you down",
      "A plan built around your real workflow, not a generic template",
      "Something shipped in weeks, not months",
    ],
  },
};

function matchKey(text: string): keyof typeof RESPONSES {
  const t = text.toLowerCase();
  if (t.includes("lead") || t.includes("follow")) return "leads";
  if (t.includes("manual") || t.includes("task") || t.includes("repetitive")) return "manual";
  if (t.includes("website") || t.includes("site") || t.includes("outdated")) return "website";
  if (t.includes("scale") || t.includes("grow") || t.includes("break")) return "scale";
  return "default";
}

const CHIPS = [
  { label: "Losing leads", val: "leads" },
  { label: "Too much manual work", val: "manual" },
  { label: "Website feels outdated", val: "website" },
  { label: "Systems breaking as we grow", val: "scale" },
];

const ROW_H = 62;

function BlinkingCursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
      style={{ display: "inline-block", width: 2, height: 14, background: COLORS.accentGold, marginLeft: 2, verticalAlign: -2 }}
    />
  );
}

function TypedLine({ text, onDone }: { text: string; onDone: () => void }) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let cancelled = false;
    function tick() {
      if (cancelled) return;
      i++;
      setShown(text.slice(0, i));
      if (i < text.length) setTimeout(tick, 11);
      else {
        setDone(true);
        onDone();
      }
    }
    tick();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <p className="text-sm" style={{ color: COLORS.textPrimary, paddingLeft: 6 }}>
      {shown}
      {!done && <BlinkingCursor />}
    </p>
  );
}

export function LiveDemo() {
  const [inputVal, setInputVal] = useState("");
  const [phase, setPhase] = useState<"idle" | "answering">("idle");
  const [visibleCount, setVisibleCount] = useState(0);
  const [litNodes, setLitNodes] = useState<boolean[]>([]);
  const [data, setData] = useState<Blueprint | null>(null);
  const runningRef = useRef(false);

  const totalH = data ? ROW_H * data.lines.length : 0;
  const drawnTo = visibleCount > 0 ? ROW_H * visibleCount - ROW_H / 2 : 0;

  async function runDemo(raw: string) {
    if (runningRef.current) return;
    runningRef.current = true;
    const chosen = RESPONSES[matchKey(raw)];
    setData(chosen);
    setLitNodes(new Array(chosen.lines.length).fill(false));
    setVisibleCount(1);
    setPhase("answering");
    runningRef.current = false;
  }

  function handleLineDone(i: number) {
    setLitNodes((prev) => {
      const next = [...prev];
      next[i] = true;
      return next;
    });
    setTimeout(() => setVisibleCount((v) => Math.max(v, i + 2)), 200);
  }

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-xl">
        <p className="mb-2.5 text-center text-sm" style={{ color: COLORS.textSecondary }}>
          Tell us what's slowing you down
        </p>
        <div className="mb-3.5 flex gap-2">
          <input
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && runDemo(inputVal)}
            placeholder="e.g. we lose leads because follow-up is slow"
            className="flex-1 rounded-xl border px-4 py-2.5 text-sm outline-none"
            style={{ borderColor: COLORS.border, background: COLORS.card, color: COLORS.textPrimary }}
          />
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => runDemo(inputVal)}
            className="whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium"
            style={{ background: COLORS.accentGold, color: "#0a0a0a" }}
          >
            See the fix
          </motion.button>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {CHIPS.map((chip) => (
            <motion.button
              key={chip.val}
              whileTap={{ scale: 0.95 }}
              onClick={() => runDemo(chip.val)}
              className="rounded-full border px-3 py-1.5 text-xs"
              style={{ borderColor: COLORS.border, color: COLORS.textSecondary }}
            >
              {chip.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {phase === "answering" && data && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              className="rounded-2xl p-6"
              style={{ background: COLORS.card }}
            >
              <p className="mb-3.5 flex items-center gap-1.5 text-xs font-medium" style={{ color: COLORS.accentGold }}>
                <Sparkles className="h-3.5 w-3.5" />
                {data.title}
              </p>

              <div className="flex" style={{ position: "relative" }}>
                <svg width={28} height={totalH} style={{ flexShrink: 0 }}>
                  <motion.path
                    d={`M14 0 L14 ${totalH}`}
                    stroke={COLORS.accentGold}
                    strokeWidth={2}
                    fill="none"
                    strokeDasharray={totalH}
                    animate={{ strokeDashoffset: totalH - drawnTo }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </svg>
                <div style={{ flex: 1, paddingLeft: 8 }}>
                  {data.lines.slice(0, visibleCount).map((line, i) => (
                    <div key={i} style={{ position: "relative", height: ROW_H, display: "flex", alignItems: "center" }}>
                      <motion.div
                        animate={{
                          background: litNodes[i] ? COLORS.accentGold : COLORS.card,
                          scale: litNodes[i] ? [1.3, 1] : 1,
                        }}
                        transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                        style={{
                          position: "absolute",
                          left: -28,
                          top: "50%",
                          translateY: "-50%",
                          width: 14,
                          height: 14,
                          borderRadius: "50%",
                          border: `2px solid ${COLORS.accentGold}`,
                          zIndex: 1,
                        }}
                      />
                      <TypedLine text={line} onDone={() => handleLineDone(i)} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}