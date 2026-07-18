"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { AmbientBackground } from "../_components/home/ambient-background";
import { Navbar } from "../_components/home/navbar";
import { Footer } from "../_components/home/footer";
import { FeaturedProjects } from "../_components/home/featured-projects";
import { ScrollCtx } from "../_components/home/scroll-context";

export default function WorkPage() {
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
        <main>
          <FeaturedProjects />
        </main>
        <Footer />
      </div>
    </ScrollCtx.Provider>
  );
}
