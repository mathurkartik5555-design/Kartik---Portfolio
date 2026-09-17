import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Linkedin, MapPin, Award, ChevronDown, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HeroScene } from './HeroScene';
import { MagneticButton } from './MagneticButton';

export const Hero: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [downloadingResume, setDownloadingResume] = useState(false);
  const [downloadedResume, setDownloadedResume] = useState(false);

  const handleResumeDownload = () => {
    setDownloadingResume(true);
    setTimeout(() => {
      setDownloadingResume(false);
      setDownloadedResume(true);
      setTimeout(() => setDownloadedResume(false), 3000);
    }, 800);
  };

  // Word-by-word staggered animation variants for the name
  const nameWords = personal.name.split(' ');
  const titleWords = personal.heroTitle.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 35, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-institutional-mesh"
    >
      {/* Background Micro Financial Grid & Ambient Depth Lights */}
      <div className="absolute inset-0 bg-financial-grid opacity-35 pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-finance-petrol/60 via-finance-base/20 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-finance-teal/20 via-finance-navy/15 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Massive Cinematic Typography, Badges & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start"
          >
            
            {/* Status & Availability Tag */}
            <motion.div
              variants={wordVariants}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-finance-petrol/60 border border-finance-teal/30 text-finance-mist mb-8 shadow-sm backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-finance-jade opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-finance-jade"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-tight">
                {personal.statusBadge}
              </span>
            </motion.div>

            {/* Geographical & Candidate Metadata */}
            <motion.div
              variants={wordVariants}
              className="flex items-center gap-2.5 text-xs font-mono text-finance-lavender uppercase tracking-widest mb-3"
            >
              <MapPin className="w-4 h-4 text-finance-teal" />
              <span>{personal.location}</span>
              <span className="text-finance-teal/60">·</span>
              <span className="text-finance-jade font-semibold">{personal.cfaDesignation}</span>
            </motion.div>

            {/* Massive Hero Heading: 72-112px desktop, 44-60px mobile */}
            <div className="overflow-hidden mb-3">
              <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-[86px] xl:text-[96px] text-white tracking-tight leading-[0.95] flex flex-wrap gap-x-4 gap-y-2">
                {nameWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordVariants}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Hero Subtitle */}
            <div className="overflow-hidden mb-6">
              <motion.div
                variants={wordVariants}
                className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-finance-jade via-finance-mist to-finance-brass"
              >
                {personal.heroTitle}
              </motion.div>
            </div>

            {/* Supporting Copy & Editorial Thesis */}
            <motion.p
              variants={wordVariants}
              className="text-base sm:text-xl text-finance-mist/90 max-w-2xl leading-relaxed mb-4"
            >
              {personal.heroSupporting}
            </motion.p>

            <motion.div
              variants={wordVariants}
              className="font-serif italic text-base sm:text-lg text-finance-lavender/95 border-l-2 border-finance-brass/60 pl-4 py-1.5 mb-10 max-w-xl"
            >
              &ldquo;{personal.heroSecondary}&rdquo;
            </motion.div>

            {/* 4 Interactive Magnetic CTAs */}
            <motion.div
              variants={wordVariants}
              className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-12"
            >
              {/* Primary: View Featured Research */}
              <MagneticButton
                variant="primary"
                href="#vrl-logistics"
                showArrow
              >
                View Featured Research
              </MagneticButton>

              {/* Secondary: Explore Projects */}
              <MagneticButton
                variant="secondary"
                href="#projects"
              >
                Explore Projects
              </MagneticButton>

              {/* Download Resume with State & Confetti Feedback */}
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
                    <Check className="w-4 h-4 text-finance-jade mr-1" />
                    <span>Resume Downloaded</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4 text-finance-jade mr-1" />
                    <span>Resume (PDF)</span>
                  </>
                )}
              </MagneticButton>

              {/* LinkedIn Magnetic Link */}
              <MagneticButton
                variant="secondary"
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with Kartik Mathur on LinkedIn"
                aria-label="Connect with Kartik Mathur on LinkedIn"
                className="!px-3.5"
              >
                <Linkedin className="w-4 h-4 text-finance-teal" />
              </MagneticButton>
            </motion.div>

            {/* Micro Institutional Trust Grid */}
            <motion.div
              variants={wordVariants}
              className="pt-8 border-t border-finance-teal/20 grid grid-cols-3 gap-6 w-full max-w-xl"
            >
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-finance-lavender/70 mb-1">
                  Primary Coverage
                </div>
                <div className="text-sm sm:text-base font-display font-bold text-white">
                  VRL Logistics Ltd.
                </div>
                <div className="text-xs text-finance-mist/75">34-Page Initiation</div>
              </div>

              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-finance-lavender/70 mb-1">
                  SEBI Licenses
                </div>
                <div className="text-sm sm:text-base font-display font-bold text-white">
                  NISM XV & VIII
                </div>
                <div className="text-xs text-finance-jade font-semibold">Both Passed</div>
              </div>

              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-finance-lavender/70 mb-1">
                  CFA Institute
                </div>
                <div className="text-sm sm:text-base font-display font-bold text-white">
                  Level I Candidate
                </div>
                <div className="text-xs text-finance-brass font-semibold">Active Candidate</div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: 3D Scene Canvas + Mask-Revealed Executive Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[500px] lg:min-h-[580px]"
          >
            {/* 3D Research Instrument Canvas */}
            <div className="absolute inset-0 z-0">
              <HeroScene />
            </div>

            {/* Floating Executive Frame with Mask Reveal */}
            <div className="relative z-10 w-full max-w-sm pointer-events-auto">
              <div className="glass-panel rounded-3xl p-5 shadow-institutional border border-finance-teal/30 hover:border-finance-jade/50 transition-all duration-500 group">
                
                {/* Image Frame with Mask Reveal */}
                <div className="relative aspect-[4/3.8] rounded-2xl overflow-hidden bg-finance-petrol/60 border border-finance-teal/30 mb-5">
                  <img
                    src={personal.avatarUrl}
                    alt="Kartik Mathur - Aspiring Equity Research Analyst"
                    className="w-full h-full object-cover object-top filter brightness-95 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                    loading="eager"
                  />

                  {/* Gradient blend with dark petrol background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-finance-base via-transparent to-transparent opacity-65 pointer-events-none" />

                  {/* Candidate Designation Pill */}
                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-finance-base/90 backdrop-blur-md border border-finance-teal/40 text-xs font-mono text-finance-mist shadow-sm">
                    <Award className="w-3.5 h-3.5 text-finance-brass" />
                    <span>CFA Level I Candidate</span>
                  </div>
                </div>

                {/* Card Meta Footer */}
                <div className="flex items-center justify-between px-1">
                  <div>
                    <h3 className="font-display font-bold text-white text-base">Kartik Mathur</h3>
                    <p className="text-xs text-finance-lavender">B.Com (H) · VIPS-TC Delhi</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono text-finance-jade font-bold">Cohort Alum</div>
                    <div className="text-[11px] text-finance-mist/70">The Valuation School</div>
                  </div>
                </div>

              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Animated Scroll Indicator at the bottom */}
      <motion.a
        href="#research"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[11px] font-mono text-finance-lavender/70 hover:text-white transition-colors"
      >
        <span className="tracking-widest uppercase text-[10px]">Scroll to Discover</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-finance-jade" />
        </motion.div>
      </motion.a>
    </section>
  );
};
