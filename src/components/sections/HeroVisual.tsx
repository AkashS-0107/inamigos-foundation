import { motion, useReducedMotion } from "framer-motion";

/**
 * HeroVisual component provides a rich, modern vector artwork celebrating
 * community, hope, education, and shared impact.
 * Kept modular for lazy-loading and fast initial bundle evaluation.
 */
export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  const gentleFloat = {
    duration: 6,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut" as const,
  };

  const pulseGlow = {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut" as const,
  };

  return (
    <div className="hero-visual__artwork-wrapper">
      {/* Background ambient lighting halo */}
      <div className="hero-visual__glow-halo" aria-hidden="true" />

      <svg
        className="hero-visual__svg"
        viewBox="0 0 720 660"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="hero-visual-title hero-visual-desc"
      >
        <title id="hero-visual-title">InAmigos Community & Impact Illustration</title>
        <desc id="hero-visual-desc">
          Vector artwork showing diverse hands nurturing a flourishing tree of hope, surrounded by interconnected community symbols.
        </desc>

        <defs>
          {/* Gradients */}
          <linearGradient id="primary-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0F766E" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>

          <linearGradient id="accent-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>

          <linearGradient id="sky-sun" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFBF5" />
            <stop offset="50%" stopColor="#FED7AA" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>

          <radialGradient id="portal-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#FFFDF9" />
            <stop offset="100%" stopColor="#FFEED6" />
          </radialGradient>

          {/* Shadows */}
          <filter id="drop-shadow-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#0F766E" floodOpacity="0.12" />
          </filter>

          <filter id="drop-shadow-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#F97316" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Central Organic Backdrop Circle */}
        <motion.g
          animate={reduceMotion ? undefined : { scale: [1, 1.015, 1] }}
          transition={pulseGlow}
          style={{ transformOrigin: "360px 330px" }}
        >
          <circle cx="360" cy="330" r="270" fill="url(#portal-bg)" filter="url(#drop-shadow-soft)" />
          <circle cx="360" cy="330" r="268" stroke="#CCECE9" strokeWidth="2" strokeDasharray="6 6" />
        </motion.g>

        {/* Background Sun Burst */}
        <motion.circle
          cx="360"
          cy="210"
          r="110"
          fill="url(#sky-sun)"
          opacity="0.8"
          animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={gentleFloat}
        />

        {/* Floating Hope Rays */}
        <g stroke="#F97316" strokeWidth="3" strokeLinecap="round" opacity="0.4">
          <line x1="360" y1="70" x2="360" y2="86" />
          <line x1="260" y1="110" x2="272" y2="122" />
          <line x1="460" y1="110" x2="448" y2="122" />
          <line x1="210" y1="210" x2="226" y2="210" />
          <line x1="510" y1="210" x2="494" y2="210" />
        </g>

        {/* Community Hill / Foundation Ground */}
        <path
          d="M 120 460 C 220 380, 500 380, 600 460 C 650 500, 670 560, 670 600 L 50 600 C 50 560, 70 500, 120 460 Z"
          fill="#0F766E"
          opacity="0.05"
        />
        <path
          d="M 140 480 C 250 410, 470 410, 580 480 C 620 510, 640 550, 640 590 L 80 590 C 80 550, 100 510, 140 480 Z"
          fill="url(#primary-grad)"
          opacity="0.12"
        />

        {/* Central Tree of Hope & Growth */}
        <motion.g
          animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [0, 0.8, 0] }}
          transition={gentleFloat}
          style={{ transformOrigin: "360px 420px" }}
        >
          {/* Main Trunk & Branch Support */}
          <path
            d="M 350 490 C 350 410, 330 380, 310 330 C 300 305, 315 300, 335 320 C 350 335, 355 370, 360 400 C 365 370, 370 335, 385 320 C 405 300, 420 305, 410 330 C 390 380, 370 410, 370 490 Z"
            fill="#0F766E"
          />

          {/* Leaves Cluster 1 (Left Wing) */}
          <path
            d="M 310 320 C 260 270, 240 330, 290 360 C 320 380, 330 340, 310 320 Z"
            fill="url(#primary-grad)"
            filter="url(#drop-shadow-soft)"
          />

          {/* Leaves Cluster 2 (Right Wing) */}
          <path
            d="M 410 320 C 460 270, 480 330, 430 360 C 400 380, 390 340, 410 320 Z"
            fill="#16A34A"
            filter="url(#drop-shadow-soft)"
          />

          {/* Top Heart Blossom */}
          <path
            d="M 360 275 C 345 245, 315 255, 335 285 L 360 310 L 385 285 C 405 255, 375 245, 360 275 Z"
            fill="url(#accent-grad)"
            filter="url(#drop-shadow-glow)"
          />

          {/* Glowing Seeds / Fruit of Kindness */}
          <circle cx="280" cy="300" r="10" fill="#F97316" />
          <circle cx="440" cy="300" r="10" fill="#F97316" />
          <circle cx="360" cy="215" r="14" fill="#ffffff" stroke="#F97316" strokeWidth="4" />
          <path d="M 360 207 L 360 223 M 352 215 L 368 215" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
        </motion.g>

        {/* Nurturing Hands (Bottom Base) */}
        <g filter="url(#drop-shadow-soft)">
          {/* Left Hand */}
          <path
            d="M 210 520 C 240 500, 290 480, 340 500 C 345 502, 348 508, 343 512 C 320 525, 280 535, 240 545 C 220 550, 200 540, 210 520 Z"
            fill="#1F2937"
          />
          {/* Right Hand */}
          <path
            d="M 510 520 C 480 500, 430 480, 380 500 C 375 502, 372 508, 377 512 C 400 525, 440 535, 480 545 C 500 550, 520 540, 510 520 Z"
            fill="#F97316"
          />
        </g>

        {/* Community Interconnected Sparks & Badges */}
        <motion.g
          animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          {/* Left Floating Badge: Education */}
          <g transform="translate(130, 240)">
            <rect width="64" height="64" rx="20" fill="#ffffff" filter="url(#drop-shadow-soft)" />
            <circle cx="32" cy="32" r="22" fill="#ECFDF5" />
            <path d="M22 28 L32 22 L42 28 L32 34 Z M25 31 V38 C25 41, 39 41, 39 38 V31" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Right Floating Badge: Healthcare */}
          <g transform="translate(520, 260)">
            <rect width="64" height="64" rx="20" fill="#ffffff" filter="url(#drop-shadow-soft)" />
            <circle cx="32" cy="32" r="22" fill="#FFEDD5" />
            <path d="M32 23 C27 19, 21 23, 24 29 L32 37 L40 29 C43 23, 37 19, 32 23 Z" fill="#F97316" />
          </g>
        </motion.g>

        {/* Floating Sparkles & Light Orbs */}
        <circle cx="190" cy="160" r="6" fill="#F97316" opacity="0.7" />
        <circle cx="550" cy="170" r="8" fill="#16A34A" opacity="0.6" />
        <circle cx="160" cy="420" r="7" fill="#2563EB" opacity="0.5" />
        <circle cx="570" cy="430" r="5" fill="#F97316" opacity="0.8" />
      </svg>
    </div>
  );
}
