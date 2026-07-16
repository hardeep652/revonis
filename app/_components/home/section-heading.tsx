import { motion, easeOut } from "framer-motion";
import { COLORS } from "./home-data";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="mx-auto mb-16 max-w-2xl text-center"
    >
      <p className="mb-4 text-[13px] font-semibold tracking-[0.25em]" style={{ color: COLORS.accentGold }}>
        {eyebrow}
      </p>
      <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl" style={{ color: COLORS.textPrimary }}>
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
