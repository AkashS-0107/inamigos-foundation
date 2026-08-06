import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import { routePaths } from "@/app/routes";
import { FadeIn, FloatingElement, HoverScale, SlideUp } from "@/components/animations";
import { Container } from "@/components/ui";
import { ArrowRight, Check, HandHeart, Heart, Sparkles } from "@/lib/icons";

// Lazy-load the heavy vector visual artwork for optimum performance and split chunks
const HeroVisual = lazy(async () => {
  const module = await import("./HeroVisual");
  return { default: module.HeroVisual };
});

interface HeroStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delayMs?: number;
}

function HeroStat({ value, suffix = "+", prefix = "", label, delayMs = 200 }: HeroStatProps) {
  const [count, setCount] = useState(0);
  const reduceMotion = useReducedMotion();
  const animFrame = useRef<number | null>(null);

  useEffect(() => {
    if (reduceMotion) {
      setCount(value);
      return undefined;
    }

    const duration = 1400;
    let startTime: number | null = null;

    const timer = window.setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        // Ease-out cubic function for organic deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(value * easeOut));

        if (progress < 1) {
          animFrame.current = window.requestAnimationFrame(step);
        }
      };

      animFrame.current = window.requestAnimationFrame(step);
    }, delayMs);

    return () => {
      window.clearTimeout(timer);
      if (animFrame.current !== null) {
        window.cancelAnimationFrame(animFrame.current);
      }
    };
  }, [value, delayMs, reduceMotion]);

  return (
    <div className="stat-item">
      <span className="stat-item__value">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="stat-item__label">{label}</span>
    </div>
  );
}

function HeroVisualFallback() {
  return (
    <div className="hero-visual__artwork-wrapper">
      <div className="hero-visual__fallback" aria-hidden="true" />
    </div>
  );
}

/**
 * Production-ready Hero section for InAmigos Foundation.
 * Communicates Hope, Community, Impact, Trust, and Volunteer Spirit.
 */
export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="hero scroll-mt-20" aria-labelledby="hero-headline">
      {/* Background Ambient Lighting Layers */}
      <div className="hero__ambient hero__ambient--emerald" aria-hidden="true" />
      <div className="hero__ambient hero__ambient--amber" aria-hidden="true" />
      <div className="hero__ambient hero__ambient--teal" aria-hidden="true" />
      <div className="hero__mesh-pattern" aria-hidden="true" />

      {/* Decorative Bottom Wave Transition */}
      <svg className="hero__wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,32 C280,84 520,96 720,54 C920,12 1180,24 1440,64 L1440,120 L0,120 Z" />
      </svg>

      <Container className="hero__container" maxWidth="full">
        <div className="hero__grid">
          {/* LEFT COLUMN: Mission Narrative & Conversion Actions */}
          <div className="hero__content">
            <SlideUp delay={0.15}>
              <h1 id="hero-headline" className="hero__headline">
                Bringing <span className="hero__headline-accent">Hope</span>, Building{" "}
                <span className="hero__headline-highlight">Communities</span>, Creating Lasting Impact.
              </h1>
            </SlideUp>

            <SlideUp delay={0.25}>
              <p className="hero__description">
                InAmigos Foundation unites compassionate volunteers, local leaders, and vital resources to uplift underserved families. Together, every act of care creates ripple effects of permanent, meaningful change.
              </p>
            </SlideUp>

            {/* Primary & Secondary Action CTAs */}
            <SlideUp delay={0.35} className="hero__cta-group">
              <Link className="hero-btn hero-btn--primary ds-focus" to={routePaths.projects}>
                <span>Explore Our Projects</span>
                <ArrowRight size={18} className="hero-btn__icon" aria-hidden="true" />
              </Link>
              <Link className="hero-btn hero-btn--secondary ds-focus" to={routePaths.volunteer}>
                <HandHeart size={18} aria-hidden="true" />
                <span>Become a Volunteer</span>
              </Link>
            </SlideUp>

            {/* Quick NGO Statistics - Premium Glass Cards */}
            <SlideUp delay={0.45} className="hero__stats" id="hero-stats">
              <HeroStat value={150} suffix="+" label="Communities Supported" delayMs={400} />
              <HeroStat value={45} suffix="+" label="Projects Running" delayMs={520} />
              <HeroStat value={1200} suffix="+" label="Active Volunteers" delayMs={640} />
              <HeroStat value={50000} suffix="+" label="Lives Impacted" delayMs={760} />
            </SlideUp>

            {/* Trust Badges */}
            <FadeIn delay={0.55} className="hero__trust" aria-label="Our NGO Commitment Promises">
              <span className="trust-badge">
                <Check size={16} aria-hidden="true" /> Community-Led Action
              </span>
              <span className="trust-badge">
                <Check size={16} aria-hidden="true" /> 100% Financial Transparency
              </span>
              <span className="trust-badge">
                <Check size={16} aria-hidden="true" /> Verified Social Impact
              </span>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: Interactive Visual Stage & Dynamic Overlay Cards */}
          <div className="hero__stage" aria-label="InAmigos Community Impact Visual Experience">
            <Suspense fallback={<HeroVisualFallback />}>
              <HeroVisual />
            </Suspense>

            {/* Floating Impact Card 1: Emergency Relief (Max float distance: 4px) */}
            <FloatingElement className="hero-card hero-card--top-right" distance={4} duration={5.0} delay={0.2}>
              <div className="hero-card__icon-box hero-card__icon-box--heart">
                <Heart size={20} fill="currentColor" aria-hidden="true" />
              </div>
              <div className="hero-card__content">
                <span className="hero-card__title">Emergency Relief</span>
                <span className="hero-card__subtitle">Food & Shelter Delivered</span>
              </div>
            </FloatingElement>

            {/* Floating Impact Card 2: Volunteer Squad (Max float distance: 4px) */}
            <FloatingElement className="hero-card hero-card--bottom-left" distance={4} duration={5.5} delay={0.4}>
              <div className="hero-avatars" aria-hidden="true">
                <span className="hero-avatar hero-avatar--emerald">A</span>
                <span className="hero-avatar hero-avatar--amber">R</span>
                <span className="hero-avatar hero-avatar--blue">S</span>
                <span className="hero-avatar hero-avatar--count">+</span>
              </div>
              <div className="hero-card__content">
                <span className="hero-card__title">1,200+ Volunteers</span>
                <span className="hero-card__subtitle">Active Across 15+ Cities</span>
              </div>
            </FloatingElement>

            {/* Floating Impact Card 3: Impact Progress (Max float distance: 4px) */}
            <FloatingElement className="hero-card hero-card--bottom-right" distance={4} duration={4.8} delay={0.6}>
              <div className="hero-card__icon-box hero-card__icon-box--gold">
                <Sparkles size={20} aria-hidden="true" />
              </div>
              <div className="hero-card__content" style={{ width: "100%" }}>
                <span className="hero-card__title">84% Annual Goal</span>
                <div
                  className="hero-progress-bar"
                  role="progressbar"
                  aria-label="Annual Impact Goal Progress"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={84}
                >
                  <motion.div
                    className="hero-progress-bar__fill"
                    initial={reduceMotion ? { width: "84%" } : { width: "0%" }}
                    animate={{ width: "84%" }}
                    transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
                  />
                </div>
              </div>
            </FloatingElement>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <HoverScale scale={1.05} className="hero__scroll-indicator">
          <a className="hero-scroll-btn ds-focus" href="#hero-stats" aria-label="Scroll to view statistics">
            <span>Scroll to explore</span>
            <span className="hero-scroll-mouse" aria-hidden="true" />
          </a>
        </HoverScale>
      </Container>
    </section>
  );
}
