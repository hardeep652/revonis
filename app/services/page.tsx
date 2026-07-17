"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import {
  AmbientBackground,
  Navbar,
  Footer,
  ScrollCtx,
} from "../page";
import { Services } from "../_components/home/services";

export default function ServicesPage() {
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
          <Services />
        </main>
        <Footer />
      </div>
    </ScrollCtx.Provider>
  );
}
