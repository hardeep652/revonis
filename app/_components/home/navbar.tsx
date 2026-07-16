import { useContext } from "react";
import { motion, easeOut } from "framer-motion";
import { NAV_LINKS } from "./home-data";
import { ScrollCtx } from "./scroll-context";

export function Navbar() {
  const { scrolled } = useContext(ScrollCtx);

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
          background: "rgba(30, 58, 138, 0.65)", // Semi-transparent navy for glass effect
          boxShadow: "0 10px 40px -10px rgba(30,58,138,0.3)",
        }}
        animate={{ paddingTop: scrolled ? 12 : 16, paddingBottom: scrolled ? 12 : 16 }}
        transition={{ duration: 0.35, ease: easeOut }}
      >
        <span className="flex items-center gap-2.5">
          <img
            src="/Revonis_Logo%20(Edited).png"
            alt="Revonis"
            className="h-9 w-auto rounded-lg object-contain"
            style={{ filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.25))" }}
          />
        </span>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.95)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}
