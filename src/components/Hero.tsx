import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, ArrowRight, Linkedin, Github, Mail, Phone, Award, ChevronDown, Check, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HeroScene } from './HeroScene';
import { MagneticButton } from './MagneticButton';
import { RadialGlowButton } from './RadialGlowButton';
import { SocialFlipButton } from './SocialFlipButton';
import { LiquidGlass } from './LiquidGlass';
import { ParallaxDataLayer } from './ParallaxDataLayer';

export const Hero: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [downloadingResume, setDownloadingResume] = useState(false);
  const [downloadedResume, setDownloadedResume] = useState(false);

  // Parallax scroll effects
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 450], [0, -35]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0.4]);
  const portraitY = useTransform(scrollY, [0, 450], [0, 25]);
  const sceneRotate = useTransform(scrollY, [0, 600], [0, 0.25]);

  const handleResumeDownload = () => {
    setDownloadingResume(true);
    setTimeout(() => {
      setDownloadingResume(false);
      setDownloadedResume(true);
      setTimeout(() => setDownloadedResume(false), 3000);
    }, 700);
  };

  const nameWords = personal.name.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 sm:pt-36 sm:pb-24 flex items-center justify-center overflow-hidden bg-finance-base"
    >
      {/* Subtle Background Micro-Grid & Ambient Atmospheric Glow */}
      <div className="absolute inset-0 bg-financial-grid opacity-25 pointer-events-none -z-10" />
      <ParallaxDataLayer speed={0.16} />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-finance-petrol/40 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-finance-teal/15 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Thin Geometric Axis Lines */}
      <div className="absolute left-6 lg:left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-finance-teal/15 to-transparent pointer-events-none" />
      <div className="absolute right-6 lg:right-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-finance-teal/15 to-transparent pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Lean, High-Impact Typography & Compact CTAs */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start max-w-xl xl:max-w-2xl"
          >
            
            {/* Availability Tag with LiquidGlass */}
            <motion.div variants={itemVariants} className="mb-6">
              <LiquidGlass
                intensity="medium"
                glowColor="rgba(47, 230, 222, 0.25)"
                className="!rounded-full px-4 py-1.5 inline-flex items-center gap-2.5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-finance-jade opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-finance-jade"></span>
                </span>
                <span className="text-xs font-mono tracking-tight text-finance-mist/95">
                  {personal.statusBadge}
                </span>
              </LiquidGlass>
            </motion.div>

            {/* Candidate Name: 72–112px desktop, 44–60px mobile */}
            <div className="overflow-hidden mb-2">
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-[82px] text-white tracking-tight leading-[1.02]">
                {nameWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={itemVariants}
                    className="inline-block mr-3 sm:mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Subtitle / Professional Designation */}
            <motion.div
              variants={itemVariants}
              className="font-display font-medium text-xl sm:text-2xl lg:text-3xl text-finance-jade tracking-tight mb-4"
            >
              {personal.heroTitle}
            </motion.div>

            {/* One Concise Supporting Sentence */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-finance-mist/85 leading-relaxed font-sans max-w-lg mb-8"
            >
              {personal.heroSupporting}
            </motion.p>

            {/* Four Compact CTAs (Clean, restrained, magnetic) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
            >
              {/* Primary: View Featured Research — Radial Glow Button */}
              <RadialGlowButton href="#vrl-logistics">
                View Featured Research
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </RadialGlowButton>

              {/* Secondary: Explore Projects */}
              <MagneticButton
                variant="secondary"
                href="#projects"
              >
                Explore Projects
              </MagneticButton>

              {/* Download Resume with State */}
              <MagneticButton
                variant="secondary"
                href="/assets/docs/Kartik_Mathur_Resume.pdf"
                download="Kartik_Mathur_Resume.pdf"
                onClick={handleResumeDownload}
                isLoading={downloadingResume}
                title="Download Official Resume PDF"
              >
                {downloadedResume ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-finance-jade mr-1.5" />
                    <span>Downloaded</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-3.5 h-3.5 text-finance-jade mr-1.5" />
                    <span>Resume (PDF)</span>
                  </>
                )}
              </MagneticButton>

              {/* LinkedIn Compact Link */}
              <MagneticButton
                variant="secondary"
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with Kartik Mathur on LinkedIn"
                aria-label="Connect with Kartik Mathur on LinkedIn"
                className="!px-3"
              >
                <Linkedin className="w-4 h-4 text-finance-teal" />
              </MagneticButton>
            </motion.div>

            {/* 3D Social Flip Channels */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap items-center gap-3 pt-3 border-t border-finance-teal/15 w-full sm:w-auto"
            >
              <span className="text-[11px] font-mono uppercase tracking-widest text-finance-lavender/70">
                Direct Channels:
              </span>
              <SocialFlipButton
                items={[
                  {
                    letter: "In",
                    icon: <Linkedin className="w-4 h-4 text-white" />,
                    label: "LinkedIn Profile",
                    href: personal.linkedin,
                  },
                  {
                    letter: "Gh",
                    icon: <Github className="w-4 h-4 text-white" />,
                    label: "GitHub Repositories",
                    href: personal.github,
                  },
                  {
                    letter: "Em",
                    icon: <Mail className="w-4 h-4 text-white" />,
                    label: "Direct Email",
                    href: `mailto:${personal.email}`,
                  },
                  {
                    letter: "Ph",
                    icon: <Phone className="w-4 h-4 text-white" />,
                    label: "Direct Phone Call",
                    href: `tel:${personal.phone}`,
                  },
                ]}
              />
            </motion.div>

          </motion.div>

          {/* Right Column: Seamlessly Integrated Portrait & 3D Research Instrument */}
          <motion.div
            style={{ y: portraitY, rotate: sceneRotate }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]"
          >
            {/* 3D Research Instrument Canvas (Prism, Orbital Rings, Data Planes) */}
            <div className="absolute inset-0 z-0">
              <HeroScene />
            </div>

            {/* Portrait Integrated Naturally into the Scene (No bulky card box!) */}
            <div className="relative z-10 w-[240px] sm:w-[280px] lg:w-[310px] pointer-events-none select-none">
              
              {/* Soft Radial Backlight Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-finance-jade/15 via-finance-teal/20 to-finance-brass/10 blur-2xl -z-10" />

              {/* Clean Image with Seamless Gradient Bottom Fade */}
              <div className="relative aspect-[3/3.8] rounded-3xl overflow-hidden shadow-2xl border border-finance-teal/20">
                <img
                  src={personal.avatarUrl}
                  alt="Kartik Mathur - Aspiring Equity Research Analyst"
                  className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.03]"
                  loading="eager"
                />

                {/* Soft gradient bottom blend so the portrait dissolves seamlessly into the dark background */}
                <div className="absolute inset-0 bg-gradient-to-t from-finance-base via-transparent to-transparent opacity-80" />

                {/* Fine Minimalist Candidate Indicator */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-finance-base/80 backdrop-blur-md border border-finance-teal/30">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-finance-mist">
                    <Award className="w-3.5 h-3.5 text-finance-brass" />
                    <span>CFA Level I Candidate</span>
                  </div>
                  <span className="text-[10px] font-mono text-finance-jade uppercase tracking-wider">
                    Research
                  </span>
                </div>
              </div>

              {/* Delicate Orbital Coordinate Accent */}
              <div className="absolute -top-3 -right-3 text-[9px] font-mono tracking-widest text-finance-lavender/60 uppercase">
                NODE // 01 · DELHI
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Smooth Scroll Indicator */}
      <motion.a
        href="#research"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[11px] font-mono text-finance-lavender/70 hover:text-white transition-colors"
      >
        <span className="tracking-widest uppercase text-[10px]">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-3.5 h-3.5 text-finance-jade" />
        </motion.div>
      </motion.a>
    </section>
  );
};
