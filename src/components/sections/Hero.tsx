import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import { routePaths } from "@/app/routes";
import { FadeIn, FloatingElement, HoverScale, SlideUp } from "@/components/animations";
import { Badge, Container, GlassCard, Heading, Paragraph } from "@/components/ui";
import { ArrowRight, Check, HandHeart, Heart, Sparkles } from "@/lib/icons";

const HeroIllustration = lazy(async () => {
  const module = await import("./HeroIllustration");
  return { default: module.HeroIllustration };
});

type HeroMetricProps = {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
};

function HeroMetric({ value, suffix, label, delay = 0 }: HeroMetricProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const reduceMotion = useReducedMotion();
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (reduceMotion) {
      setCurrentValue(value);
      return undefined;
    }

    const duration = 1100;
    let startedAt: number | undefined;
    const startTimer = window.setTimeout(() => {
      const tick = (now: number) => {
        startedAt ??= now;
        const progress = Math.min((now - startedAt) / duration, 1);
        setCurrentValue(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame.current = window.requestAnimationFrame(tick);
      };
      frame.current = window.requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(startTimer);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, [delay, reduceMotion, value]);

  return (
    <div className="hero-metric">
      <strong>{currentValue.toLocaleString()}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}

function HeroArtworkFallback() {
  return <div className="hero-artwork__fallback" aria-hidden="true" />;
}

/** Above-the-fold home page narrative and primary conversion actions. */
export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__ambient hero__ambient--mint" aria-hidden="true" />
      <div className="hero__ambient hero__ambient--gold" aria-hidden="true" />
      <div className="hero__noise ds-noise" aria-hidden="true" />
      <svg className="hero__wave" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 72c190 82 337 86 534 28 202-59 341-83 524-27 125 38 242 36 382-21v108H0Z" />
      </svg>

      <Container className="hero__container" maxWidth="full">
        <div className="hero__content">
          <div className="hero__copy">
            <FadeIn delay={0.08} className="hero__eyebrow-wrap">
              <Badge className="hero__eyebrow"><Sparkles size={14} aria-hidden="true" /> Neighbours creating possibility</Badge>
            </FadeIn>

            <SlideUp delay={0.16}>
              <Heading level={1} id="hero-title" className="hero__title">
                A little care can <span>move a whole community.</span>
              </Heading>
            </SlideUp>

            <SlideUp delay={0.24}>
              <p className="hero__mission">InAmigos turns shared compassion into lasting, local action.</p>
              <Paragraph className="hero__description">
                We bring people, practical resources, and trusted local partners together so every act of care can grow into meaningful change.
              </Paragraph>
            </SlideUp>

            <SlideUp delay={0.32} className="hero__actions">
              <Link className="hero-action hero-action--primary ds-focus" to={routePaths.projects}>
                Explore our projects <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="hero-action hero-action--secondary ds-focus" to={routePaths.volunteer}>
                <HandHeart size={18} aria-hidden="true" /> Become a volunteer
              </Link>
            </SlideUp>

            <SlideUp delay={0.4} className="hero__impact" id="hero-impact">
              <HeroMetric value={2400} suffix="+" label="neighbours supported" delay={500} />
              <HeroMetric value={48} suffix="" label="local initiatives" delay={620} />
              <HeroMetric value={14} suffix="" label="community partners" delay={740} />
            </SlideUp>

            <FadeIn delay={0.52} className="hero__trust" aria-label="Our commitments">
              <span><Check size={15} aria-hidden="true" /> Community-led</span>
              <span><Check size={15} aria-hidden="true" /> People-first</span>
              <span><Check size={15} aria-hidden="true" /> Transparent progress</span>
            </FadeIn>
          </div>

          <div className="hero__visual" aria-label="InAmigos community impact illustration">
            <div className="hero-artwork">
              <Suspense fallback={<HeroArtworkFallback />}>
                <HeroIllustration />
              </Suspense>
            </div>

            <FloatingElement className="hero-float hero-float--impact" distance={10} duration={4.2} delay={0.45}>
              <GlassCard padding="sm" className="hero-float__card hero-float__card--impact">
                <span className="hero-float__icon hero-float__icon--heart"><Heart size={18} fill="currentColor" aria-hidden="true" /></span>
                <span><strong>One shared goal</strong><small>Care that reaches further</small></span>
              </GlassCard>
            </FloatingElement>

            <FloatingElement className="hero-float hero-float--volunteers" distance={8} duration={4.8} delay={0.8}>
              <GlassCard padding="sm" className="hero-float__card hero-float__card--people">
                <div className="hero-avatars" aria-hidden="true"><i>R</i><i>S</i><i>A</i><i>+</i></div>
                <span><strong>300+ volunteers</strong><small>Showing up together</small></span>
              </GlassCard>
            </FloatingElement>

            <motion.div
              className="hero-progress"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.58, duration: 0.45, ease: "easeOut" }}
            >
              <span>Community momentum</span>
              <div role="progressbar" aria-label="Community momentum" aria-valuemin={0} aria-valuemax={100} aria-valuenow={78}>
                <i />
              </div>
              <strong>78% <small>of this season's goal</small></strong>
            </motion.div>
          </div>
        </div>

        <HoverScale className="hero-scroll" scale={1.04}>
          <a className="ds-focus" href="#hero-impact" aria-label="See our impact">
            <span>Scroll to explore</span><i aria-hidden="true" />
          </a>
        </HoverScale>
      </Container>
    </section>
  );
}
