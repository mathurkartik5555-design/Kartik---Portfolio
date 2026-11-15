import React from 'react';
import { motion } from 'framer-motion';
import { Github, Cpu, ArrowUpRight, TrendingUp, Newspaper, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { ParallaxDataLayer } from './ParallaxDataLayer';

export const FinanceTools: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  const projectIcons: Record<string, React.ReactNode> = {
    'the-concall': <Cpu className="w-5 h-5 text-finance-jade" />,
    'optionforge': <TrendingUp className="w-5 h-5 text-finance-brass" />,
    'news-aggregator': <Newspaper className="w-5 h-5 text-finance-teal" />,
  };

  const projectPipelines: Record<string, { input: string; output: string }> = {
    'the-concall': {
      input: 'Earnings Call Audio / PDF',
      output: '2-Min Capex & Guidance Brief',
    },
    'optionforge': {
      input: 'NSE F&O Option Chains',
      output: 'Real-Time Greeks & Payoff Curves',
    },
    'news-aggregator': {
      input: 'BSE, NSE, Reuters & Mint Feeds',
      output: 'Sector-Clustered Pre-Market Intel',
    },
  };

  return (
    <section id="projects" className="py-28 sm:py-36 bg-finance-base relative border-t border-finance-teal/20 overflow-hidden">
      <ParallaxDataLayer speed={0.12} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-finance-petrol/60 border border-finance-teal/30 text-xs font-mono uppercase tracking-[0.2em] text-finance-teal mb-4 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-finance-teal animate-pulse" />
            <span>Quantitative & Research Engineering</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-5">
            Finance Tools & AI Platforms
          </h2>

          <p className="text-base sm:text-lg text-finance-mist/85 leading-relaxed font-sans max-w-2xl">
            Custom software platforms built to eliminate research bottlenecks: parsing corporate earnings calls, computing derivatives risk parameters, and synthesizing pre-market news feeds.
          </p>
        </motion.div>

        {/* 3-Column Institutional Engineering Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, idx) => {
            const pipeline = projectPipelines[project.id];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="flex"
              >
                <SpotlightCard
                  enableTilt
                  maxTilt={4}
                  spotlightColor={
                    idx === 0
                      ? "rgba(101, 184, 155, 0.18)"
                      : idx === 1
                      ? "rgba(197, 164, 109, 0.18)"
                      : "rgba(57, 124, 120, 0.18)"
                  }
                  glassLevel="2"
                  className="rounded-3xl p-7 sm:p-8 flex flex-col justify-between w-full border border-finance-teal/30 hover:border-finance-jade/50 transition-all shadow-institutional"
                >
                  <div>
                    {/* Top Status & Category Row */}
                    <div className="flex items-center justify-between pb-5 border-b border-finance-teal/20 mb-6">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-finance-petrol/80 border border-finance-teal/30 flex items-center justify-center">
                          {projectIcons[project.id]}
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-finance-lavender block">
                            Platform 0{idx + 1}
                          </span>
                          <span className="text-xs font-mono font-semibold text-white truncate max-w-[170px] block">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-semibold shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live</span>
                      </span>
                    </div>

                    {/* Project Title & Short Purpose */}
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-finance-mist/85 leading-relaxed font-sans mb-6">
                      {project.description}
                    </p>

                    {/* Architecture Pipeline Flow */}
                    {pipeline && (
                      <div className="p-3.5 rounded-xl bg-finance-base/80 border border-finance-teal/20 mb-6 space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-finance-lavender/80 block font-semibold">
                          Workflow Pipeline:
                        </span>
                        <div className="flex items-center justify-between text-[11px] font-mono text-finance-mist/90 gap-1.5">
                          <span className="truncate bg-finance-petrol/60 px-2 py-0.5 rounded border border-finance-teal/20 text-finance-mist">
                            {pipeline.input}
                          </span>
                          <span className="text-finance-teal shrink-0 font-bold">→</span>
                          <span className="truncate bg-finance-petrol/60 px-2 py-0.5 rounded border border-finance-teal/20 text-finance-jade font-semibold">
                            {pipeline.output}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Key Technical Capabilities */}
                    <div className="space-y-2.5 mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-finance-lavender/80 block font-semibold">
                        Core Capabilities:
                      </span>
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-finance-mist/85">
                          <CheckCircle2 className="w-3.5 h-3.5 text-finance-jade shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-finance-petrol/50 text-finance-lavender border border-finance-teal/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-5 border-t border-finance-teal/20 flex items-center justify-between gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold text-finance-base bg-finance-jade hover:bg-finance-jade/90 transition-all shadow-md active:scale-95"
                    >
                      <span>Launch App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-finance-petrol/70 hover:bg-finance-teal/30 border border-finance-teal/30 text-finance-mist hover:text-white transition-all shrink-0 active:scale-95"
                      title="Inspect Source Code on GitHub"
                      aria-label="Inspect Source Code on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
