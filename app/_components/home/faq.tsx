import { useState } from "react";
import { AnimatePresence, motion, easeOut } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { COLORS, FAQS } from "./home-data";
import { SectionHeading } from "./section-heading";

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b" style={{ borderColor: COLORS.border }}>
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="text-base font-medium" style={{ color: COLORS.textPrimary }}>
          {q}
        </span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="h-5 w-5 flex-shrink-0" style={{ color: COLORS.accentGold }} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm leading-relaxed" style={{ color: COLORS.textSecondary }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq" className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Common questions." />
        <div>
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
