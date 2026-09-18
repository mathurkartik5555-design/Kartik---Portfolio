import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Download, 
  Table, 
  CheckCircle2, 
  AlertTriangle, 
  ExternalLink,
  ChevronRight,
  BarChart3,
  Network,
  Scale,
  ShieldCheck,
  TrendingUp,
  FileSpreadsheet,
  Building2,
  FileText,
  BookOpen
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';
import { SpotlightCard } from './SpotlightCard';
import { AnimatedCounter } from './AnimatedCounter';
import { ParallaxDataLayer } from './ParallaxDataLayer';

export const FeaturedResearch: React.FC = () => {
  const { featuredResearch } = PORTFOLIO_DATA;
  const [activeStage, setActiveStage] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Dynamic Reading Progress Indicator for Featured Research Section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const readingPercentage = useTransform(scrollYProgress, (v) => Math.min(100, Math.max(0, Math.round(v * 100))));
  const [progressPercent, setProgressPercent] = useState<number>(0);

  React.useEffect(() => {
    return readingPercentage.on('change', (latest) => {
      setProgressPercent(latest);
    });
  }, [readingPercentage]);

  const stageIcons = [
    <Network className="w-4 h-4 text-finance-jade" />,
    <BarChart3 className="w-4 h-4 text-finance-teal" />,
    <Scale className="w-4 h-4 text-finance-brass" />,
    <TrendingUp className="w-4 h-4 text-finance-jade" />,
    <ShieldCheck className="w-4 h-4 text-finance-copper" />,
    <FileSpreadsheet className="w-4 h-4 text-finance-mist" />,
  ];

  const stagesFlow = [
    'Business',
    'Industry',
    'Financials',
    'Valuation',
    'Governance & Risk',
    'Research Conclusion'
  ];

  // Helper to render metric value with animated counter if numeric
  const renderMetricValue = (label: string, rawValue: string) => {
    if (label.includes('Length')) {
      return <AnimatedCounter value={34} suffix=" Pages" duration={1.2} />;
    }
    if (label.includes('Revenue')) {
      return (
        <span className="flex items-center">
          <AnimatedCounter prefix="₹" value={3221} suffix=" Cr" duration={1.4} />
        </span>
      );
    }
    if (label.includes('Margin')) {
      return <AnimatedCounter value={20.8} decimals={1} suffix="%" duration={1.3} />;
    }
    if (label.includes('ROE')) {
      return <AnimatedCounter value={21.0} decimals={1} suffix="%" duration={1.3} />;
    }
    if (label.includes('Fleet')) {
      return <AnimatedCounter value={77} suffix="%" duration={1.2} />;
    }
    return <span className="tabular-nums">{rawValue}</span>;
  };

  return (
    <section 
      ref={sectionRef}
      id="vrl-logistics" 
      className="py-32 sm:py-40 bg-finance-base/95 relative border-t border-finance-teal/20 overflow-hidden"
    >
      {/* Sticky Editorial Reading Depth Progress Tracker (FT / WSJ Style) */}
      <div className="sticky top-0 left-0 right-0 z-40 bg-finance-base/80 backdrop-blur-xl border-b border-finance-teal/20 px-4 py-2 flex items-center justify-between shadow-institutional transition-all">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] font-mono">
          <div className="flex items-center gap-2 text-finance-mist truncate pr-4">
            <BookOpen className="w-3.5 h-3.5 text-finance-jade shrink-0" />
            <span className="text-finance-jade font-bold uppercase tracking-wider">RESEARCH DOSSIER:</span>
            <span className="text-white truncate">VRL Logistics Ltd. (NSE: VRLLOG) Initiating Coverage</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-finance-lavender text-[10px] uppercase tracking-widest hidden sm:inline">
              Reading Depth
            </span>
            <span className="tabular-nums font-bold text-finance-jade bg-finance-petrol/80 px-2 py-0.5 rounded border border-finance-teal/30">
              {progressPercent}%
            </span>
          </div>
        </div>

        {/* The 2px dynamic reading depth progress bar */}
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-finance-teal via-finance-jade to-finance-brass origin-left pointer-events-none"
        />
      </div>

      {/* Parallax Background Data & Micro-Grid Layers */}
      <div className="absolute inset-0 bg-financial-grid opacity-20 pointer-events-none" />
      <ParallaxDataLayer speed={0.15} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        
        {/* Academic Project Label & Header with Sequential Wipes */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-16 sm:mb-20"
        >
          {/* Explicit Academic Attribution */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-finance-petrol/70 border border-finance-teal/40 text-xs font-mono text-finance-jade mb-5 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-finance-jade" />
            <span className="tracking-wide">Academic & Cohort Research Project · The Valuation School</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05] mb-5">
            {featuredResearch.title}
          </h2>

          <div className="font-serif italic text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-finance-jade via-finance-mist to-finance-brass mb-6">
            &ldquo;{featuredResearch.subtitle}&rdquo;
          </div>

          <p className="text-base sm:text-lg text-finance-mist/90 leading-relaxed font-sans max-w-3xl mb-8">
            {featuredResearch.overview}
          </p>

          <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-finance-lavender">
            <span className="bg-finance-petrol/90 text-white font-bold px-3 py-1 rounded-md border border-finance-teal/30">
              {featuredResearch.ticker}
            </span>
            <span className="text-finance-teal">·</span>
            <span className="text-finance-jade font-semibold">Initiating Coverage (34 Pages)</span>
            <span className="text-finance-teal">·</span>
            <span>Mentor: {featuredResearch.mentor}</span>
            <span className="text-finance-teal">·</span>
            <span>{featuredResearch.date}</span>
          </div>
        </motion.div>

        {/* Sequential Metric Reveal Cards with Cursor-Tracking Spotlights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-20 sm:mb-24">
          {featuredResearch.keyMetrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <SpotlightCard
                glassLevel="2"
                spotlightColor="rgba(101, 184, 155, 0.18)"
                className="rounded-xl p-4 sm:p-5 h-full flex flex-col justify-between border border-finance-teal/20 hover:border-finance-jade/40 transition-colors"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-finance-lavender/70 mb-1.5 truncate">
                    {metric.label}
                  </div>
                  <div className="text-xl sm:text-2xl font-display font-extrabold text-white mb-1">
                    {renderMetricValue(metric.label, metric.value)}
                  </div>
                </div>
                <div className="text-[11px] text-finance-mist/70 truncate mt-1">
                  {metric.detail}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Scroll-Animated Research Flow Line & Stages */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-finance-indigo/60 to-finance-petrol/40 rounded-3xl p-6 sm:p-10 border border-finance-teal/25 mb-20 shadow-institutional"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-8 pb-5 border-b border-finance-teal/15">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-finance-jade mb-1 font-semibold">
                Research Methodology Sequence
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Sequential Analysis & Thesis Construction
              </h3>
            </div>
            
            <div className="text-xs font-mono text-finance-lavender bg-finance-petrol/70 px-3.5 py-1.5 rounded-lg border border-finance-teal/30 self-start md:self-auto tabular-nums">
              Stage 0{activeStage + 1} of 06
            </div>
          </div>

          {/* SVG Animated Flow Line Connecting Stages */}
          <div className="relative mb-8 hidden md:block">
            <svg viewBox="0 0 800 24" className="w-full h-6 overflow-visible">
              <line x1="20" y1="12" x2="780" y2="12" stroke="#20365F" strokeWidth="2" strokeDasharray="4 4" />
              <motion.line
                x1="20"
                y1="12"
                x2="780"
                y2="12"
                stroke="#65B89B"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {/* Illuminated Stages Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
            {featuredResearch.modules.map((mod, idx) => {
              const isSelected = activeStage === idx;
              return (
                <button
                  key={mod.step}
                  onClick={() => setActiveStage(idx)}
                  className={`p-3.5 rounded-xl text-left transition-all duration-200 focus:outline-none relative overflow-hidden ${
                    isSelected
                      ? 'bg-finance-teal/40 border border-finance-jade text-white shadow-glow-teal'
                      : 'bg-finance-petrol/40 hover:bg-finance-teal/25 border border-finance-teal/20 text-finance-mist/75'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono text-finance-jade font-bold tabular-nums">
                      {mod.step}
                    </span>
                    {stageIcons[idx]}
                  </div>
                  <div className="text-xs font-medium truncate text-white">
                    {stagesFlow[idx]}
                  </div>
                  {isSelected && (
                    <motion.div
                      layoutId="active-stage-line"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-finance-jade"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="bg-finance-petrol/60 border border-finance-teal/30 rounded-2xl p-6 sm:p-8 mb-8"
            >
              <div className="text-xs font-mono text-finance-brass mb-2 flex items-center gap-1.5 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-finance-brass"></span>
                <span>Stage 0{activeStage + 1} Analytical Focus:</span>
              </div>

              <h4 className="font-display font-bold text-lg sm:text-2xl text-white mb-3">
                {featuredResearch.modules[activeStage].name}
              </h4>

              <p className="text-sm sm:text-base text-finance-mist/90 leading-relaxed font-sans">
                {featuredResearch.modules[activeStage].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Verified Analytical Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-finance-mist/85">
            <div className="flex items-start gap-2.5 bg-finance-base/60 p-3.5 rounded-xl border border-finance-teal/20">
              <CheckCircle2 className="w-4 h-4 text-finance-jade shrink-0 mt-0.5" />
              <span>Linked 3-statement model & revenue schedule linking</span>
            </div>
            <div className="flex items-start gap-2.5 bg-finance-base/60 p-3.5 rounded-xl border border-finance-teal/20">
              <CheckCircle2 className="w-4 h-4 text-finance-jade shrink-0 mt-0.5" />
              <span>Unlevered DCF with WACC & terminal sensitivity matrices</span>
            </div>
            <div className="flex items-start gap-2.5 bg-finance-base/60 p-3.5 rounded-xl border border-finance-teal/20">
              <CheckCircle2 className="w-4 h-4 text-finance-jade shrink-0 mt-0.5" />
              <span>DuPont analysis benchmarking ROE, ROCE & margins</span>
            </div>
            <div className="flex items-start gap-2.5 bg-finance-base/60 p-3.5 rounded-xl border border-finance-teal/20">
              <CheckCircle2 className="w-4 h-4 text-finance-jade shrink-0 mt-0.5" />
              <span>Indian road freight TAM ($178B → $429B at 6.48% CAGR)</span>
            </div>
            <div className="flex items-start gap-2.5 bg-finance-base/60 p-3.5 rounded-xl border border-finance-teal/20">
              <CheckCircle2 className="w-4 h-4 text-finance-jade shrink-0 mt-0.5" />
              <span>Quarterly concall tracking & guidance shifts</span>
            </div>
            <div className="flex items-start gap-2.5 bg-finance-base/60 p-3.5 rounded-xl border border-finance-teal/20">
              <CheckCircle2 className="w-4 h-4 text-finance-jade shrink-0 mt-0.5" />
              <span>Promoter holding, KMP remuneration & governance audit</span>
            </div>
          </div>

        </motion.div>

        {/* Peer Comps & Direct Document Download Block with SpotlightCards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Peer Comps Table (7 Cols) */}
          <div className="lg:col-span-7">
            <SpotlightCard
              glassLevel="2"
              spotlightColor="rgba(197, 164, 109, 0.12)"
              className="rounded-3xl p-7 sm:p-9 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-mono uppercase tracking-[0.18em] text-finance-brass flex items-center gap-2 font-semibold">
                    <Scale className="w-4 h-4" />
                    <span>Peer Benchmarking Framework</span>
                  </div>
                  <span className="text-[11px] font-mono text-finance-lavender">Multiples: EV/EBIT & EV/Rev</span>
                </div>

                <p className="text-sm text-finance-mist/85 mb-6 leading-relaxed font-sans">
                  VRL Logistics Ltd. was compared across operational efficiency, margin durability, and enterprise multiples against global freight networks and domestic leaders:
                </p>

                <div className="space-y-3">
                  {featuredResearch.peersAnalyzed.map((peer) => (
                    <div
                      key={peer.name}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-finance-petrol/50 border border-finance-teal/20 hover:border-finance-jade/40 transition-colors"
                    >
                      <div className="font-semibold text-white text-sm">{peer.name}</div>
                      <div className="text-xs font-mono text-finance-jade">{peer.type}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-finance-teal/15 text-xs font-mono text-finance-lavender/75">
                Comparative metrics: EV/EBITDA, ROE, ROCE, Capex Intensity & Fleet Debt Profile.
              </div>
            </SpotlightCard>
          </div>

          {/* Download Action Card with Cover Thumbnail & Liquid Shimmer Sweep (5 Cols) */}
          <div className="lg:col-span-5">
            <SpotlightCard
              glassLevel="3"
              spotlightColor="rgba(101, 184, 155, 0.2)"
              className="rounded-3xl p-7 sm:p-9 h-full flex flex-col justify-between shadow-2xl relative overflow-hidden"
            >
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-finance-jade mb-2.5 font-semibold">
                  Official Report Assets
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                  Download Initiating Coverage Report
                </h3>
                <p className="text-xs sm:text-sm text-finance-mist/80 mb-6 leading-relaxed font-sans">
                  Access the verified 34-page institutional initiation document and the linked financial model.
                </p>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-finance-petrol/70 border border-finance-teal/30 mb-8">
                  <div className="w-14 h-20 rounded-xl overflow-hidden border border-finance-teal/40 bg-finance-base shrink-0 shadow-md">
                    <img
                      src={featuredResearch.coverImage}
                      alt="VRL Logistics Initiating Coverage Cover"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">VRL Logistics Report.pdf</div>
                    <div className="text-xs text-finance-lavender font-mono">Format: PDF · 34 Pages · 1.2 MB</div>
                    <div className="text-[11px] text-finance-jade font-mono mt-1">Cohort Research Document</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <MagneticButton
                  variant="primary"
                  href={featuredResearch.pdfUrl}
                  download="VRL_Logistics_Initiating_Coverage_Report_Kartik_Mathur.pdf"
                  showArrow
                  className="w-full !py-4"
                >
                  Download Coverage Report (PDF)
                </MagneticButton>

                <MagneticButton
                  variant="secondary"
                  href={featuredResearch.excelUrl}
                  download="VRL_Logistics_Financial_Model_Kartik_Mathur.xlsx"
                  className="w-full !py-4"
                >
                  <Table className="w-4 h-4 text-finance-brass mr-2" />
                  <span>Financial Model (.xlsx)</span>
                </MagneticButton>
              </div>
            </SpotlightCard>
          </div>

        </div>

        {/* Academic Disclaimer Box */}
        <div className="p-5 rounded-2xl bg-finance-petrol/30 border border-finance-copper/30 flex items-start gap-4 text-xs text-finance-mist/85">
          <AlertTriangle className="w-4 h-4 text-finance-copper shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-finance-copper font-mono uppercase tracking-wider mr-2">
              Academic & Portfolio Research Project Disclaimer:
            </span>
            <span>
              This academic research project was conducted as part of the Equity Research Cohort at The Valuation School. It is presented for educational and portfolio demonstration purposes only and does not constitute professional employment experience, investment advice, a target price, or a recommendation to buy, sell, or hold any security.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
