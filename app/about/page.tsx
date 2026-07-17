"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import {
  AmbientBackground,
  Navbar,
  Footer,
  ScrollCtx,
  About,
} from "../page";

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <ScrollCtx.Provider value={{ scrolled }}>
      <div className="relative min-h-screen font-sans" style={{ color: "#1E3A8A" }}>
        <AmbientBackground />
        <Navbar />
        <main className="pt-28">
          <About />
        </main>
        <Footer />
      </div>
    </ScrollCtx.Provider>
  );
}
