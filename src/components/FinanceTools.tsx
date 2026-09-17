import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Cpu, Sparkles, AlertCircle, ArrowUpRight, TrendingUp, Newspaper, Layers, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { MagneticButton } from './MagneticButton';

export const FinanceTools: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  const renderVisualArtefact = (projectId: string) => {
    switch (projectId) {
      case 'the-concall':
        return (
          <div className="relative w-full aspect-[16/11] rounded-2xl bg-gradient-to-br from-finance-indigo/60 to-finance-petrol/40 border border-finance-teal/20 p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-inner">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-finance-jade/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header / State */}
            <div className="flex items-center justify-between border-b border-finance-teal/15 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-finance-jade">
                <Cpu className="w-4 h-4" />
                <span>TRANSCRIPT NLP ENGINE</span>
              </div>
              <span className="text-[10px] font-mono text-finance-lavender uppercase tracking-wider">
                Model: Concall-v4
              </span>
            </div>

            {/* Transcript Transformation Flow Graphic */}
            <div className="space-y-2.5 my-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-finance-mist/75 font-mono">Executive Tone Index:</span>
                <span className="text-finance-jade font-mono font-bold bg-finance-petrol/60 px-2.5 py-0.5 rounded border border-finance-teal/20">
                  Cautiously Bullish
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-finance-mist/75 font-mono">Capex Guidance Extraction:</span>
                <span className="text-finance-brass font-mono font-bold bg-finance-petrol/60 px-2.5 py-0.5 rounded border border-finance-teal/20">
                  ₹300Cr – ₹350Cr
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-finance-mist/75 font-mono">Margin Trajectory:</span>
                <span className="text-finance-jade font-mono font-bold bg-finance-petrol/60 px-2.5 py-0.5 rounded border border-finance-teal/20">
                  +160 bps Expansion
                </span>
              </div>
            </div>

            {/* Bottom Processing Bar */}
            <div className="pt-3 border-t border-finance-teal/15 flex items-center justify-between text-[11px] font-mono text-finance-lavender/80">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-finance-teal" />
                <span>Raw Transcript → 2-Min Brief</span>
              </span>
              <span className="text-finance-jade">Automated</span>
            </div>
          </div>
        );

      case 'optionforge':
        return (
          <div className="relative w-full aspect-[16/11] rounded-2xl bg-gradient-to-br from-finance-indigo/60 to-finance-petrol/40 border border-finance-teal/20 p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-inner">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-finance-brass/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header / State */}
            <div className="flex items-center justify-between border-b border-finance-teal/15 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-finance-brass">
                <TrendingUp className="w-4 h-4" />
                <span>DERIVATIVES PAYOFF MODEL</span>
              </div>
              <span className="text-[10px] font-mono text-finance-jade font-bold bg-finance-petrol/60 px-2 py-0.5 rounded border border-finance-teal/20">
                POP: 68.4%
              </span>
            </div>

            {/* Dynamic Payoff Curve Graphic */}
            <div className="relative h-28 w-full flex items-center justify-center my-2">
              <svg viewBox="0 0 320 80" className="w-full h-full overflow-visible">
                {/* Zero profit baseline */}
                <line x1="10" y1="45" x2="310" y2="45" stroke="#20365F" strokeWidth="1.5" strokeDasharray="4 4" />
                
                {/* Payoff Curve */}
                <path
                  d="M 20 65 L 110 65 L 200 20 L 300 20"
                  fill="none"
                  stroke="#65B89B"
                  strokeWidth="2.5"
                />

                {/* Markers */}
                <circle cx="200" cy="20" r="4" fill="#C5A46D" />
                <text x="205" y="16" fill="#DCE6EA" fontSize="10" fontFamily="monospace" fontWeight="bold">Max Profit</text>

                <circle cx="140" cy="45" r="4" fill="#C47C68" />
                <text x="145" y="58" fill="#B7B9D6" fontSize="10" fontFamily="monospace">Breakeven</text>
              </svg>
            </div>

            {/* Greeks Bar */}
            <div className="grid grid-cols-4 gap-2 text-[11px] font-mono text-center pt-2 border-t border-finance-teal/15">
              <div className="text-finance-mist"><span className="text-finance-lavender">Δ:</span> 0.42</div>
              <div className="text-finance-mist"><span className="text-finance-lavender">Γ:</span> 0.08</div>
              <div className="text-finance-mist"><span className="text-finance-lavender">θ:</span> -2.10</div>
              <div className="text-finance-mist"><span className="text-finance-lavender">ν:</span> 0.15</div>
            </div>
          </div>
        );

      case 'news-aggregator':
        return (
          <div className="relative w-full aspect-[16/11] rounded-2xl bg-gradient-to-br from-finance-indigo/60 to-finance-petrol/40 border border-finance-teal/20 p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-inner">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-finance-teal/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header / State */}
            <div className="flex items-center justify-between border-b border-finance-teal/15 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-finance-jade">
                <Newspaper className="w-4 h-4" />
                <span>RSS INTELLIGENCE CLUSTERING</span>
              </div>
              <span className="text-[10px] font-mono text-finance-lavender">
                REAL-TIME FEEDS
              </span>
            </div>

            {/* Live Feed Clusters */}
            <div className="space-y-2.5 my-2">
              <div className="flex items-center gap-3 text-xs">
                <span className="text-[10px] font-mono bg-finance-teal/30 text-finance-jade px-2 py-0.5 rounded shrink-0">
                  LOGISTICS
                </span>
                <span className="text-white/90 truncate font-sans">
                  Freight tonnage index expansion & fuel surcharge metrics...
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="text-[10px] font-mono bg-finance-navy/70 text-finance-brass px-2 py-0.5 rounded shrink-0">
                  BANKING
                </span>
                <span className="text-white/90 truncate font-sans">
                  Credit growth & net interest margin commentary...
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="text-[10px] font-mono bg-finance-petrol/80 text-finance-mist px-2 py-0.5 rounded shrink-0">
                  MACRO
                </span>
                <span className="text-white/90 truncate font-sans">
                  Monthly GST collection milestones & freight corridor data...
                </span>
              </div>
            </div>

            {/* Bottom Source Bar */}
            <div className="pt-3 border-t border-finance-teal/15 flex items-center justify-between text-[11px] font-mono text-finance-lavender/80">
              <span>BSE · NSE · Reuters · Mint</span>
              <span className="text-finance-jade">Auto-Classified</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-28 sm:py-36 bg-finance-base relative border-t border-finance-teal/20 overflow-hidden">
      {/* Background Micro-Grid */}
      <div className="absolute inset-0 bg-financial-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Generous Typography & Spacing */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-finance-petrol/60 border border-finance-teal/30 text-xs font-mono uppercase tracking-widest text-finance-teal mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-finance-teal"></span>
            <span>Technology-Assisted Research</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-5">
            Finance Tools & AI Intelligence Platforms
          </h2>

          <p className="text-base sm:text-lg text-finance-mist/85 leading-relaxed font-sans max-w-2xl">
            Software tools engineered by Kartik to automate earnings-call analysis, model quantitative options payoff structures, and cluster sector intelligence.
          </p>
        </motion.div>

        {/* Editorial Project Showcase: Spacious Split Layouts (No repetitive boxed dashboards) */}
        <div className="space-y-20 sm:space-y-28">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Left/Main Editorial Content Area (7 Cols) */}
              <div className={`lg:col-span-7 flex flex-col items-start ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                
                {/* Category & Step Label */}
                <div className="text-xs font-mono tracking-widest uppercase text-finance-brass mb-3 flex items-center gap-2">
                  <span>0{idx + 1} //</span>
                  <span>{project.category}</span>
                </div>

                {/* Large, Clear Project Title */}
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mb-4 leading-snug">
                  {project.title}
                </h3>

                {/* Shorter, Focused Description with Excellent Line-Height */}
                <p className="text-base sm:text-lg text-finance-mist/90 leading-relaxed font-sans mb-6 max-w-xl">
                  {project.description}
                </p>

                {/* Clean Feature Deliverables (Generous spacing, no heavy boxed rectangles) */}
                <div className="space-y-2.5 mb-6 max-w-xl">
                  {project.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-sm text-finance-mist/80 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-finance-jade shrink-0 mt-1" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Disclaimer if applicable (e.g. OptionForge) */}
                {project.disclaimer && (
                  <div className="mb-6 p-3.5 rounded-xl bg-finance-petrol/40 border border-finance-copper/30 text-xs text-finance-copper flex items-center gap-2.5 max-w-xl">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{project.disclaimer}</span>
                  </div>
                )}

                {/* Small Metadata Chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-finance-petrol/60 text-finance-lavender border border-finance-teal/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons: Single Clear Action + Code */}
                <div className="flex flex-wrap items-center gap-4">
                  <MagneticButton
                    variant="primary"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    showArrow
                  >
                    Launch Live Platform
                  </MagneticButton>

                  <MagneticButton
                    variant="secondary"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`View ${project.title} Source on GitHub`}
                    aria-label={`View ${project.title} Source on GitHub`}
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      <span>Repository</span>
                    </div>
                  </MagneticButton>
                </div>

              </div>

              {/* Right Visual Research Artefact with 3D Tilt & Soft Glow (5 Cols) */}
              <div className={`lg:col-span-5 w-full ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <TiltCard
                  maxTilt={6}
                  glareColor="rgba(101, 184, 155, 0.15)"
                  className="rounded-2xl"
                >
                  {renderVisualArtefact(project.id)}
                </TiltCard>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
