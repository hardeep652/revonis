"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { AmbientBackground } from "./ambient-background";
import { ClientExperience } from "./client-experience";
import { FAQ } from "./faq";
import { FinalCTA } from "./final-cta";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Navbar } from "./navbar";
import { Process } from "./process";
import { ScrollCtx } from "./scroll-context";
import { StatsBar } from "./stats-bar";
import { TechStack } from "./tech-stack";
import { Testimonials } from "./testimonials";
import { COLORS } from "./home-data";
import { WhyRevonis } from "./why-revonis";
import { About } from "./about";

export default function RevonisPage() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <ScrollCtx.Provider value={{ scrolled }}>
      <div className="relative min-h-screen font-sans" style={{ color: COLORS.textPrimary }}>
        <AmbientBackground />

        <Navbar />
        <main>
          <Hero />
          <StatsBar />
          <Process />
          <About />
          <ClientExperience />
          <TechStack />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </ScrollCtx.Provider>
  );
}
