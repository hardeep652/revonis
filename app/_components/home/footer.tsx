import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { COLORS } from "./home-data";

// Custom SVG icons (kept out of lucide-react by request)
function LinkedinIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function InstagramIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.4" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const FOOTER_LINKS = {
  Company: [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
  ],
  Services: [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
};

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/revonis.in", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com/company/revonis", icon: LinkedinIcon },
];

function useLocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    update();
    const id = setInterval(update, 1000 * 15);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function Footer() {
  const year = new Date().getFullYear();
  const localTime = useLocalTime();

  return (
    <footer
      className="relative overflow-hidden border-t px-6 pt-20 pb-10"
      style={{ borderColor: COLORS.border, background: COLORS.bgSecondary }}
    >
      {/* Signature element: oversized outlined wordmark bleeding off the edges,
          a quiet echo of the brand rather than another CTA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-1/2 w-full -translate-x-1/2 select-none text-center font-bold leading-none"
        style={{
          fontSize: "clamp(6rem, 18vw, 14rem)",
          color: "transparent",
          WebkitTextStroke: `1px ${COLORS.border}`,
          letterSpacing: "-0.02em",
        }}
      >
        Revonis
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Status strip — callback to the Process section's uptime / response-time language,
            standing in for a generic CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-wrap items-center justify-between gap-4 rounded-2xl border px-6 py-4"
          style={{ borderColor: COLORS.border, background: COLORS.bgPrimary }}
        >
          <div className="flex items-center gap-2.5">
            <motion.span
              className="h-2 w-2 rounded-full"
              style={{ background: "#22c55e" }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
            <span className="text-sm font-medium" style={{ color: COLORS.textPrimary }}>
              All systems operational
            </span>
          </div>

          <div
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs"
            style={{ color: COLORS.textSecondary }}
          >
            <span>
              Avg. response time{" "}
              <span className="font-mono font-semibold" style={{ color: COLORS.textPrimary }}>
                2h
              </span>
            </span>
            <span className="hidden sm:inline" style={{ color: COLORS.border }}>
              /
            </span>
            <span>
              Local time{" "}
              <span className="font-mono font-semibold" style={{ color: COLORS.textPrimary }}>
                {localTime || "--:--"}
              </span>
            </span>
          </div>
        </motion.div>

        {/* Brand + link columns */}
        <div className="grid grid-cols-2 gap-10 pb-16 sm:grid-cols-4">
          <div className="col-span-2">
            <span className="text-xl font-bold" style={{ color: COLORS.textPrimary }}>
              Revonis
            </span>
            <p
              className="mt-4 max-w-xs text-sm leading-relaxed"
              style={{ color: COLORS.textSecondary }}
            >
              We design, build, and maintain reliable software — from first
              conversation to production support.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300 hover:border-transparent"
                  style={{ borderColor: COLORS.border }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = COLORS.accentGold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <Icon className="h-4 w-4" style={{ color: COLORS.textSecondary }} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: COLORS.textSecondary }}
              >
                {heading}
              </span>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-300"
                      style={{ color: COLORS.textPrimary }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: COLORS.textSecondary }}
            >
              Contact
            </span>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@revonis.com"
                  className="group inline-flex items-center gap-1"
                  style={{ color: COLORS.textPrimary }}
                >
                  hello@revonis.com
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: COLORS.accentGold }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col items-start justify-between gap-4 border-t pt-8 text-xs sm:flex-row sm:items-center"
          style={{ borderColor: COLORS.border, color: COLORS.textSecondary }}
        >
          <span>© {year} Revonis. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#terms" className="transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}