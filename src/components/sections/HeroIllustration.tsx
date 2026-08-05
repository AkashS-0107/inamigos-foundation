import { motion, useReducedMotion } from "framer-motion";

/**
 * Lightweight, local hero artwork. It is kept in its own module so the home
 * page can load it lazily without introducing an image request or dependency.
 */
export function HeroIllustration() {
  const reduceMotion = useReducedMotion();
  const driftingTransition = { duration: 5.4, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as const };

  return (
    <svg className="hero-illustration" viewBox="0 0 680 620" role="img" aria-labelledby="hero-illustration-title hero-illustration-description">
      <title id="hero-illustration-title">Neighbours creating change together</title>
      <desc id="hero-illustration-description">An abstract illustration of a diverse community holding a growing plant around a shared circle.</desc>
      <defs>
        <linearGradient id="hero-sun" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#F9D99C" />
          <stop offset="1" stopColor="#F2A11B" />
        </linearGradient>
        <linearGradient id="hero-leaf" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#68C7A7" />
          <stop offset="1" stopColor="#0B6B57" />
        </linearGradient>
        <linearGradient id="hero-ground" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#E0F2EB" />
          <stop offset="1" stopColor="#BCE6D8" />
        </linearGradient>
        <filter id="hero-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#0B6B57" floodOpacity=".16" />
        </filter>
      </defs>

      <motion.g
        animate={reduceMotion ? undefined : { y: [0, -7, 0], rotate: [0, 1, 0] }}
        transition={driftingTransition}
        style={{ transformOrigin: "340px 315px" }}
      >
        <circle cx="341" cy="280" r="188" fill="#F3FBF7" />
        <path d="M125 390C159 304 244 264 340 264c100 0 186 42 218 126-41 78-119 130-218 130-97 0-177-50-215-130Z" fill="url(#hero-ground)" />
        <path d="M194 430c46 48 93 72 146 72 58 0 108-24 151-72" fill="none" stroke="#8CCEB8" strokeWidth="7" strokeLinecap="round" />
        <circle cx="340" cy="334" r="93" fill="#FFFDF8" filter="url(#hero-shadow)" />
        <circle cx="340" cy="334" r="78" fill="#F7FCF9" stroke="#D1E9DE" strokeWidth="3" />

        <path d="M340 379V310" stroke="#0B6B57" strokeWidth="10" strokeLinecap="round" />
        <path d="M339 328c-47-4-67-42-62-71 43-2 66 23 62 71Z" fill="url(#hero-leaf)" />
        <path d="M342 346c9-42 40-59 72-50-1 37-25 58-72 50Z" fill="#159475" />
        <path d="M340 303c0-24 14-43 35-52 10 27-2 48-35 52Z" fill="#F6A623" />

        <g strokeLinecap="round" strokeLinejoin="round">
          <path d="M225 392c9-48 22-75 52-83 25 5 41 38 47 81" fill="#123B5D" />
          <circle cx="278" cy="281" r="29" fill="#9D5D45" />
          <path d="M250 279c3-29 53-40 58-3-10 7-16 6-25 0-8 7-18 8-33 3Z" fill="#263B42" />
          <path d="M235 370c28 16 57 16 86 0" fill="none" stroke="#F8FAF9" strokeWidth="8" />

          <path d="M397 391c1-51 16-79 45-87 34 8 48 42 50 87" fill="#EAA144" />
          <circle cx="441" cy="275" r="30" fill="#754733" />
          <path d="M414 269c3-38 57-46 61 2-14 8-38 5-61-2Z" fill="#172B26" />
          <path d="M397 367c25 13 50 13 76 0" fill="none" stroke="#FFF7EC" strokeWidth="8" />
        </g>

        <g filter="url(#hero-shadow)">
          <path d="M152 297c0-28 22-50 50-50s50 22 50 50-22 50-50 50-50-22-50-50Z" fill="url(#hero-sun)" />
          <path d="M202 266v62M171 297h62" stroke="#FFF8EB" strokeWidth="7" strokeLinecap="round" />
          <path d="M486 205c0-24 19-43 43-43s43 19 43 43-19 43-43 43-43-19-43-43Z" fill="#DFF3EC" />
          <path d="m511 205 12 12 23-27" fill="none" stroke="#0B6B57" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <circle cx="132" cy="204" r="12" fill="#F6A623" />
        <circle cx="537" cy="320" r="10" fill="#159475" />
        <circle cx="463" cy="112" r="8" fill="#F6A623" />
      </motion.g>
    </svg>
  );
}
