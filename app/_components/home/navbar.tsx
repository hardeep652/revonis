"use client";

import { useContext, useState } from "react";
import { motion, easeOut, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "./home-data";
import { ScrollCtx } from "./scroll-context";

function Hamburger({ open }: { open: boolean }) {
  return (
    <div className="flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
      <span
        className="h-[2px] w-5 rounded-full bg-white transition-transform duration-300"
        style={{ transform: open ? "translateY(7px) rotate(45deg)" : "none" }}
      />
      <span
        className="h-[2px] w-5 rounded-full bg-white transition-opacity duration-300"
        style={{ opacity: open ? 0 : 1 }}
      />
      <span
        className="h-[2px] w-5 rounded-full bg-white transition-transform duration-300"
        style={{ transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }}
      />
    </div>
  );
}

export function Navbar() {
  const { scrolled } = useContext(ScrollCtx);
  const [hovered, setHovered] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed left-1/2 top-4 z-50 w-[94%] max-w-6xl -translate-x-1/2"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
    >
      <motion.div
        className="flex items-center justify-between rounded-full border px-6 backdrop-blur-xl"
        style={{
          borderColor: "rgba(255, 255, 255, 0.3)",
          background: "rgba(30, 58, 138, 0.65)",
          boxShadow: "0 10px 40px -10px rgba(30,58,138,0.3)",
        }}
        animate={{ paddingTop: scrolled ? 12 : 16, paddingBottom: scrolled ? 12 : 16 }}
        transition={{ duration: 0.35, ease: easeOut }}
      >
        <motion.span
          className="flex items-center gap-2.5"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.25, ease: easeOut }}
        >
          <img
            src="/Revonis_Logo%20(Edited).png"
            alt="Revonis"
            className="h-6 w-auto rounded-lg object-contain"
            style={{ filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.25))" }}
          />
        </motion.span>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHovered(link.href)}
              className="relative px-4 py-1.5 text-[13px] font-medium transition-colors"
              style={{ color: hovered === link.href ? "#FFFFFF" : "rgba(255,255,255,0.85)" }}
            >
              {hovered === link.href && (
                <motion.span
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "rgba(255,255,255,0.14)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full md:hidden"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          <Hamburger open={menuOpen} />
        </button>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: easeOut }}
            className="mt-3 overflow-hidden rounded-3xl border px-4 py-3 md:hidden"
            style={{
              borderColor: "rgba(255, 255, 255, 0.18)",
              background: "rgba(30, 58, 138, 0.85)",
              backdropFilter: "blur(16px)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/90 transition-colors"
                style={{ minHeight: 44 }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
