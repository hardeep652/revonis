import { motion, easeOut } from "framer-motion";

export function EngineeringSculpture() {
  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.2, ease: easeOut }}
    >
      <motion.svg
        viewBox="0 0 400 400"
        className="h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <linearGradient id="metalGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F4E7B1" />
            <stop offset="45%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8A6E1E" />
          </linearGradient>
          <linearGradient id="metalSteel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6B84BE" />
            <stop offset="50%" stopColor="#304D8A" />
            <stop offset="100%" stopColor="#161E3B" />
          </linearGradient>
          <linearGradient id="metalSteelSoft" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#3C4E80" />
            <stop offset="100%" stopColor="#1E2247" />
          </linearGradient>
        </defs>

        {/* outer precision ring */}
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="rgba(167,179,200,0.25)"
          strokeWidth="1"
          strokeDasharray="1 8"
        />
        <circle cx="200" cy="200" r="118" fill="none" stroke="rgba(167,179,200,0.15)" strokeWidth="1" />

        {/* rotating polygon planes */}
        <polygon points="200,70 300,150 265,280 135,280 100,150" fill="url(#metalSteelSoft)" opacity="0.55" stroke="rgba(255,255,255,0.08)" />
        <polygon points="200,110 265,165 245,255 155,255 135,165" fill="url(#metalSteel)" opacity="0.85" />

        {/* gold precision facet */}
        <polygon points="200,140 235,175 220,225 180,225 165,175" fill="url(#metalGold)" />

        {/* fine tick marks - engineering measurement motif */}
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = (i * 10 * Math.PI) / 180;
          const r1 = 150;
          const r2 = i % 3 === 0 ? 138 : 144;
          const x1 = Math.round((200 + r1 * Math.cos(angle)) * 1e3) / 1e3;
          const y1 = Math.round((200 + r1 * Math.sin(angle)) * 1e3) / 1e3;
          const x2 = Math.round((200 + r2 * Math.cos(angle)) * 1e3) / 1e3;
          const y2 = Math.round((200 + r2 * Math.sin(angle)) * 1e3) / 1e3;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(212,175,55,0.5)"
              strokeWidth="1"
            />
          );
        })}
      </motion.svg>

      {/* static logo mark — stays fixed while the geometry rotates behind it.
          Swap the <text> below for an <image href="/logo.svg" .../> if you
          have a real logo file. */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.7, ease: easeOut }}
      >
        <svg viewBox="0 0 120 120" className="h-[68%] w-[68%]" style={{ filter: "drop-shadow(0 0 20px rgba(212,175,55,0.5))" }}>
          <defs>
            <linearGradient id="logoRing" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F4E7B1" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r="56" fill="#FFFFFF" stroke="url(#logoRing)" strokeWidth="2" />
          <clipPath id="logoClip">
            <circle cx="60" cy="60" r="56" />
          </clipPath>
          <image href="/R_Logo%20.png" x="28" y="28" width="64" height="64" clipPath="url(#logoClip)" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
