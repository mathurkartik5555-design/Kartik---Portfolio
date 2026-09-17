import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  FileSpreadsheet
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';
import { TiltCard } from './TiltCard';

export const FeaturedResearch: React.FC = () => {
  const { featuredResearch } = PORTFOLIO_DATA;
  const [activeStage, setActiveStage] = useState<number>(0);

  const stageIcons = [
    <Network className="w-4 h-4 text-finance-jade" />,
    <BarChart3 className="w-4 h-4 text-finance-teal" />,
    <Scale className="w-4 h-4 text-finance-brass" />,
    <TrendingUp className="w-4 h-4 text-finance-jade" />,
    <ShieldCheck className="w-4 h-4 text-finance-copper" />,
    <FileSpreadsheet className="w-4 h-4 text-finance-mist" />,
  ];

  return (
    <section id="vrl-logistics" className="py-32 bg-institutional-mesh relative border-t border-finance-teal/20">
      
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-financial-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill & Flagship Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-finance-petrol/70 border border-finance-teal/40 text-xs font-mono text-finance-jade mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-finance-jade animate-pulse"></span>
            <span>Flagship Initiating Coverage Report · 34 Pages</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] mb-4">
            {featuredResearch.title}
          </h2>

          <div className="font-serif italic text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-finance-jade via-finance-mist to-finance-brass mb-6">
            &ldquo;{featuredResearch.subtitle}&rdquo;
          </div>

          <p className="text-base sm:text-lg text-finance-mist/90 leading-relaxed font-sans max-w-3xl mb-8">
            {featuredResearch.overview}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-finance-lavender">
            <span className="bg-finance-petrol/80 text-white font-bold px-3 py-1.5 rounded-lg border border-finance-teal/30">
              {featuredResearch.ticker}
            </span>
            <span className="text-finance-teal">·</span>
            <span className="text-finance-jade font-semibold">{featuredResearch.cohortBadge}</span>
            <span className="text-finance-teal">·</span>
            <span>Mentor: {featuredResearch.mentor}</span>
            <span className="text-finance-teal">·</span>
            <span>{featuredResearch.date}</span>
          </div>
        </motion.div>

        {/* Real Data Highlight Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {featuredResearch.keyMetrics.map((metric) => (
            <div
              key={metric.label}
              className="glass-panel p-5 rounded-2xl border border-finance-teal/25 hover:border-finance-jade/40 transition-colors shadow-sm"
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-finance-lavender/75 mb-1.5">
                {metric.label}
              </div>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                {metric.value}
              </div>
              <div className="text-[11px] text-finance-mist/70 truncate mt-1">
                {metric.detail}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Interactive 6-Stage Research Pipeline Architecture */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-finance-teal/30 shadow-institutional mb-16">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-finance-teal/20">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-finance-jade mb-1">
                Analytical Framework
              </div>
              <h3 className="font-display font-bold text-2xl text-white">
                Visual Research Pipeline & Thesis Construction
              </h3>
            </div>
            
            <div className="inline-flex items-center gap-2 text-xs font-mono text-finance-lavender bg-finance-petrol/60 px-3 py-1.5 rounded-lg border border-finance-teal/25">
              <span>Stage 0{activeStage + 1} of 06</span>
            </div>
          </div>

          {/* Stepper Timeline Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {featuredResearch.modules.map((mod, idx) => {
              const isSelected = activeStage === idx;
              return (
                <button
                  key={mod.step}
                  onClick={() => setActiveStage(idx)}
                  className={`p-3.5 rounded-xl text-left transition-all duration-300 focus:outline-none relative overflow-hidden ${
                    isSelected
                      ? 'bg-finance-teal/40 border border-finance-jade text-white shadow-glow-teal'
                      : 'bg-finance-petrol/40 hover:bg-finance-teal/20 border border-finance-teal/20 text-finance-mist/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono text-finance-jade font-bold">
                      {mod.step}
                    </span>
                    {stageIcons[idx]}
                  </div>
                  <div className="text-xs font-semibold truncate text-white">
                    {mod.name.split(' ')[0]}
                  </div>
                  {isSelected && (
                    <motion.div
                      layoutId="active-stage-indicator"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-finance-jade"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Stage Deep-Dive Card with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-finance-petrol/50 border border-finance-teal/30 rounded-2xl p-6 sm:p-8 mb-8"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-finance-brass mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-finance-brass"></span>
                <span>Stage {featuredResearch.modules[activeStage].step} Verified Findings:</span>
              </div>

              <h4 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                {featuredResearch.modules[activeStage].name}
              </h4>

              <p className="text-base text-finance-mist/90 leading-relaxed font-sans">
                {featuredResearch.modules[activeStage].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Verified Analytical Foundations Checklist */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-finance-lavender/80 mb-3">
              Included Analytical Deliverables:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-finance-mist">
              <div className="flex items-start gap-2.5 bg-finance-base/60 p-3 rounded-xl border border-finance-teal/20">
                <CheckCircle2 className="w-4 h-4 text-finance-jade shrink-0 mt-0.5" />
                <span>Integrated 3-statement model with revenue schedule linking</span>
              </div>
              <div className="flex items-start gap-2.5 bg-finance-base/60 p-3 rounded-xl border border-finance-teal/20">
                <CheckCircle2 className="w-4 h-4 text-finance-jade shrink-0 mt-0.5" />
                <span>Unlevered DCF with WACC & terminal growth sensitivity matrices</span>
              </div>
              <div className="flex items-start gap-2.5 bg-finance-base/60 p-3 rounded-xl border border-finance-teal/20">
                <CheckCircle2 className="w-4 h-4 text-finance-jade shrink-0 mt-0.5" />
                <span>DuPont analysis benchmarking ROE, ROCE & asset turnover</span>
              </div>
              <div className="flex items-start gap-2.5 bg-finance-base/60 p-3 rounded-xl border border-finance-teal/20">
                <CheckCircle2 className="w-4 h-4 text-finance-jade shrink-0 mt-0.5" />
                <span>Indian road freight TAM breakdown ($178B → $429B at 6.48% CAGR)</span>
              </div>
              <div className="flex items-start gap-2.5 bg-finance-base/60 p-3 rounded-xl border border-finance-teal/20">
                <CheckCircle2 className="w-4 h-4 text-finance-jade shrink-0 mt-0.5" />
                <span>Quarterly concall tracking & management tone evaluation</span>
              </div>
              <div className="flex items-start gap-2.5 bg-finance-base/60 p-3 rounded-xl border border-finance-teal/20">
                <CheckCircle2 className="w-4 h-4 text-finance-jade shrink-0 mt-0.5" />
                <span>Promoter holding, KMP remuneration & governance audit</span>
              </div>
            </div>
          </div>

        </div>

        {/* Peer Comps & Direct Document Download Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Peer Comps Grid (7 Cols) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 border border-finance-teal/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-mono uppercase tracking-widest text-finance-brass flex items-center gap-2">
                  <Scale className="w-4 h-4" />
                  <span>Peer Benchmarking Framework</span>
                </div>
                <span className="text-[11px] font-mono text-finance-lavender">Multiples: EV/EBIT & EV/Rev</span>
              </div>

              <p className="text-sm text-finance-mist/85 mb-6 leading-relaxed">
                VRL Logistics Ltd. was compared across operational efficiency and multiple valuations against global freight giants and domestic express leaders:
              </p>

              <div className="space-y-3">
                {featuredResearch.peersAnalyzed.map((peer) => (
                  <div
                    key={peer.name}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-finance-petrol/40 border border-finance-teal/20 hover:border-finance-jade/40 transition-colors"
                  >
                    <div className="font-semibold text-white text-sm">{peer.name}</div>
                    <div className="text-xs font-mono text-finance-jade">{peer.type}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-finance-teal/20 text-xs font-mono text-finance-lavender/80">
              Assessed metrics: EV/EBITDA, ROE, ROCE, Capex Intensity & Working Capital Turn.
            </div>
          </div>

          {/* Download Action Card with Cover Thumbnail (5 Cols) */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-8 border border-finance-teal/30 flex flex-col justify-between shadow-institutional">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-finance-jade mb-3">
                Research Assets & Verification
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Download Complete Coverage Report
              </h3>
              <p className="text-sm text-finance-mist/80 mb-6 leading-relaxed">
                Access the full 34-page institutional initiation document and the underlying financial model.
              </p>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-finance-petrol/60 border border-finance-teal/30 mb-6">
                <div className="w-16 h-20 rounded-lg overflow-hidden border border-finance-teal/30 bg-finance-base shrink-0">
                  <img
                    src={featuredResearch.coverImage}
                    alt="VRL Logistics Initiating Coverage Cover"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">VRL Logistics Report.pdf</div>
                  <div className="text-xs text-finance-lavender">Format: PDF · 34 Pages · 1.2 MB</div>
                  <div className="text-[11px] text-finance-jade font-mono mt-1">Status: Complete & Verified</div>
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
                Download Full Report (34 Pages PDF)
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
          </div>

        </div>

        {/* Mandatory Academic Disclaimer Box */}
        <div className="p-5 rounded-2xl bg-finance-petrol/40 border border-finance-copper/40 flex items-start gap-4 text-xs text-finance-mist/85">
          <AlertTriangle className="w-5 h-5 text-finance-copper shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-finance-copper font-mono uppercase tracking-wider mr-2">
              Academic & Portfolio Research Disclaimer:
            </span>
            <span>{featuredResearch.disclaimer}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
