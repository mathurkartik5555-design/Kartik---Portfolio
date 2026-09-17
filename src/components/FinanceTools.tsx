import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Cpu, Sparkles, AlertCircle, ArrowUpRight, TrendingUp, Newspaper } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { MagneticButton } from './MagneticButton';

export const FinanceTools: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<string>('all');

  const renderVisualMockup = (projectId: string) => {
    switch (projectId) {
      case 'the-concall':
        return (
          <div className="h-48 rounded-2xl bg-finance-base/90 border border-finance-teal/30 p-4 flex flex-col justify-between relative overflow-hidden font-mono text-xs shadow-inner">
            <div className="flex items-center justify-between border-b border-finance-teal/20 pb-2.5">
              <span className="text-finance-jade flex items-center gap-2 text-xs font-semibold">
                <Cpu className="w-4 h-4" />
                CONCALL_NLP // PARSER ENGINE
              </span>
              <span className="text-[10px] text-finance-lavender">TRANSCRIPT_V4</span>
            </div>

            <div className="space-y-2 py-2">
              <div className="flex items-center justify-between text-xs bg-finance-petrol/40 px-2.5 py-1.5 rounded-lg border border-finance-teal/20">
                <span className="text-finance-mist/70">Executive Tone:</span>
                <span className="text-finance-jade font-semibold">Cautiously Bullish</span>
              </div>
              <div className="flex items-center justify-between text-xs bg-finance-petrol/40 px-2.5 py-1.5 rounded-lg border border-finance-teal/20">
                <span className="text-finance-mist/70">Capex Guidance:</span>
                <span className="text-finance-brass font-semibold">₹300Cr - ₹350Cr</span>
              </div>
              <div className="flex items-center justify-between text-xs bg-finance-petrol/40 px-2.5 py-1.5 rounded-lg border border-finance-teal/20">
                <span className="text-finance-mist/70">Margin Signal:</span>
                <span className="text-finance-jade font-semibold">+160 bps Expansion</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10px] text-finance-lavender/90 bg-finance-petrol/60 px-2.5 py-1.5 rounded-lg border border-finance-teal/20">
              <Sparkles className="w-3.5 h-3.5 text-finance-teal shrink-0" />
              <span className="truncate">Extracts 60+ min calls into structured 2-min briefs</span>
            </div>
          </div>
        );

      case 'optionforge':
        return (
          <div className="h-48 rounded-2xl bg-finance-base/90 border border-finance-teal/30 p-4 flex flex-col justify-between relative overflow-hidden font-mono text-xs shadow-inner">
            <div className="flex items-center justify-between border-b border-finance-teal/20 pb-2.5">
              <span className="text-finance-jade flex items-center gap-2 text-xs font-semibold">
                <TrendingUp className="w-4 h-4" />
                OPTION_GREEKS // RISK ENGINE
              </span>
              <span className="text-[10px] text-finance-brass font-bold">POP: 68.4%</span>
            </div>

            {/* Dynamic SVG Payoff Curve */}
            <div className="relative h-20 w-full flex items-center justify-center my-1">
              <svg viewBox="0 0 260 65" className="w-full h-full overflow-visible">
                <line x1="0" y1="35" x2="260" y2="35" stroke="#20365F" strokeWidth="1" strokeDasharray="3 3" />
                <path
                  d="M 15 50 L 90 50 L 160 15 L 245 15"
                  fill="none"
                  stroke="#65B89B"
                  strokeWidth="2.5"
                />
                <circle cx="160" cy="15" r="3.5" fill="#C5A46D" />
                <text x="165" y="12" fill="#DCE6EA" fontSize="9" fontWeight="bold">Max Profit</text>
                <circle cx="115" cy="35" r="3.5" fill="#C47C68" />
                <text x="120" y="45" fill="#DCE6EA" fontSize="9">Break-even</text>
              </svg>
            </div>

            <div className="grid grid-cols-4 gap-1.5 text-[10px] text-center font-mono">
              <span className="bg-finance-petrol/60 py-1 px-1.5 rounded text-finance-mist">Δ: 0.42</span>
              <span className="bg-finance-petrol/60 py-1 px-1.5 rounded text-finance-mist">Γ: 0.08</span>
              <span className="bg-finance-petrol/60 py-1 px-1.5 rounded text-finance-mist">θ: -2.1</span>
              <span className="bg-finance-petrol/60 py-1 px-1.5 rounded text-finance-mist">ν: 0.15</span>
            </div>
          </div>
        );

      case 'news-aggregator':
        return (
          <div className="h-48 rounded-2xl bg-finance-base/90 border border-finance-teal/30 p-4 flex flex-col justify-between relative overflow-hidden font-mono text-xs shadow-inner">
            <div className="flex items-center justify-between border-b border-finance-teal/20 pb-2.5">
              <span className="text-finance-brass flex items-center gap-2 text-xs font-semibold">
                <Newspaper className="w-4 h-4" />
                RSS_INGESTION // CLUSTERING
              </span>
              <span className="text-[10px] text-finance-jade font-bold">FEEDS ACTIVE</span>
            </div>

            <div className="space-y-1.5 py-1 text-[11px]">
              <div className="flex items-center gap-2 bg-finance-petrol/40 px-2.5 py-1 rounded-lg">
                <span className="text-[9px] bg-finance-teal/30 text-finance-jade px-1.5 py-0.5 rounded font-bold">LOGISTICS</span>
                <span className="text-white truncate">Road freight tonnage index updates...</span>
              </div>
              <div className="flex items-center gap-2 bg-finance-petrol/40 px-2.5 py-1 rounded-lg">
                <span className="text-[9px] bg-finance-navy/60 text-finance-brass px-1.5 py-0.5 rounded font-bold">BANKING</span>
                <span className="text-white truncate">RBI policy corridor commentary...</span>
              </div>
              <div className="flex items-center gap-2 bg-finance-petrol/40 px-2.5 py-1 rounded-lg">
                <span className="text-[9px] bg-finance-petrol/70 text-finance-mist px-1.5 py-0.5 rounded font-bold">MACRO</span>
                <span className="text-white truncate">GST collections cross ₹1.95L Cr...</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-finance-lavender border-t border-finance-teal/15 pt-2">
              <span>BSE · NSE · Reuters · Mint</span>
              <span className="text-finance-jade font-bold">Auto-Summarized</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-32 bg-finance-base relative border-t border-finance-teal/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Generous Spacing */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-finance-teal mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-finance-teal"></span>
            <span>Technology-Assisted Research</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-6">
            Finance Tools & AI Intelligence Platforms
          </h2>

          <p className="text-base sm:text-lg text-finance-mist/85 leading-relaxed font-sans">
            Hands-on software tools engineered by Kartik to augment financial statement forensics, parse concall transcripts with NLP, and calculate quantitative derivative parameters.
          </p>
        </motion.div>

        {/* 3 Project Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <TiltCard className="glass-panel rounded-3xl p-7 sm:p-8 flex flex-col justify-between h-full border border-finance-teal/30 hover:border-finance-jade/40 shadow-institutional group">
                
                <div>
                  {/* Category & Title */}
                  <div className="text-xs font-mono text-finance-brass uppercase tracking-wider mb-2 font-semibold">
                    {project.category}
                  </div>

                  <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-finance-jade transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-finance-mist/85 leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>

                  {/* Interactive Visual Mockup */}
                  <div className="mb-6">
                    {renderVisualMockup(project.id)}
                  </div>

                  {/* Feature Highlights */}
                  <ul className="space-y-2.5 mb-6">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-finance-mist/85 flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-finance-jade shrink-0 mt-1.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Disclaimer if present */}
                  {project.disclaimer && (
                    <div className="p-3 rounded-xl bg-finance-petrol/40 border border-finance-copper/30 text-xs text-finance-copper flex items-center gap-2.5 mb-6">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{project.disclaimer}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Actions & Tech Tags */}
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-5 border-t border-finance-teal/20 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-finance-petrol/60 text-finance-lavender border border-finance-teal/25"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions: Live Application & GitHub */}
                  <div className="flex items-center gap-3">
                    <MagneticButton
                      variant="primary"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      showArrow
                      className="flex-1 !py-3 !text-xs"
                    >
                      Launch Live App
                    </MagneticButton>

                    <MagneticButton
                      variant="secondary"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Project on GitHub"
                      aria-label={`View ${project.title} on GitHub`}
                      className="!p-3"
                    >
                      <Github className="w-4 h-4" />
                    </MagneticButton>
                  </div>
                </div>

              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
