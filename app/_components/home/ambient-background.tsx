import { useEffect, useRef } from "react";
import { COLORS } from "./home-data";

export function AmbientBackground() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      if (spotRef.current) {
        spotRef.current.style.background = `radial-gradient(520px circle at ${x}% ${y}%, rgba(30,58,138,0.14), rgba(212,175,55,0.06) 35%, transparent 60%)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ background: COLORS.bgPrimary }}>
      {/* living morphing gradient field */}
      <div className="ambient-mesh absolute inset-0" />

      {/* slow diagonal sheen sweep */}
      <div className="ambient-sheen" />

      {/* interactive cursor spotlight */}
      <div ref={spotRef} className="absolute inset-0" />

      {/* grain */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.025]">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}

