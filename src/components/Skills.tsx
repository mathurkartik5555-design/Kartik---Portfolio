import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { ScrollDissolveReveal } from './ScrollDissolveReveal';
import { ParallaxDataLayer } from './ParallaxDataLayer';

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-32 sm:py-40 bg-finance-base relative border-t border-finance-teal/20 overflow-hidden">
      <ParallaxDataLayer speed={0.1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with ScrollDissolveReveal */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <ScrollDissolveReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-finance-petrol/60 border border-finance-teal/30 text-xs font-mono uppercase tracking-[0.2em] text-finance-jade mb-4 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-finance-jade"></span>
              <span>Capabilities Matrix</span>
            </div>

            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-4">
              Analytical Skills & Competencies
            </h2>
            <p className="text-sm sm:text-base text-finance-mist/85 font-sans leading-relaxed">
              Core institutional competencies across business forensics, three-statement financial modeling, DCF valuation, and derivatives risk mechanics.
            </p>
          </ScrollDissolveReveal>
        </div>

        {/* Skills Clusters Grid with SpotlightCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {skills.map((cluster, cIdx) => (
            <motion.div
              key={cluster.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: cIdx * 0.1 }}
            >
              <SpotlightCard
                enableTilt
                maxTilt={3}
                glassLevel="2"
                spotlightColor="rgba(101, 184, 155, 0.15)"
                className="rounded-3xl p-8 sm:p-10 h-full border border-finance-teal/30 hover:border-finance-jade/45 transition-all shadow-institutional flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8 pb-5 border-b border-finance-teal/20">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                      {cluster.category}
                    </h3>
                    <span className="text-xs font-mono text-finance-jade bg-finance-petrol/80 px-3 py-1.5 rounded-lg border border-finance-teal/30 font-semibold tabular-nums">
                      {cluster.skills.length}+ Competencies
                    </span>
                  </div>

                  {/* Skills Tags with Staggered Hover Response */}
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {cluster.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.04, y: -2 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-finance-petrol/60 hover:bg-finance-teal/35 border border-finance-teal/30 hover:border-finance-jade/60 text-xs sm:text-sm text-finance-mist hover:text-white transition-colors duration-200 cursor-default group shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-finance-teal group-hover:bg-finance-jade transition-colors" />
                        <span className="font-medium">{skill}</span>
                      </motion.div>
                    ))}

                    {/* Non-exhaustive indicator pill */}
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-finance-teal/20 border border-finance-jade/40 text-xs sm:text-sm text-finance-jade font-mono font-medium shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-finance-jade" />
                      <span>+ etc. & expanded frameworks</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-finance-teal/15 text-[11px] font-mono text-finance-lavender/70 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-finance-teal/80" />
                  <span>Non-exhaustive institutional toolkit</span>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Global Non-exhaustive Summary Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 p-5 rounded-2xl bg-finance-petrol/40 border border-finance-teal/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-finance-mist/80"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-finance-jade animate-pulse shrink-0" />
            <span>Comprehensive coverage across fundamental equity research, relative valuation, concall synthesis, and LBO/Private Equity modeling frameworks.</span>
          </div>
          <span className="text-finance-jade shrink-0 font-semibold uppercase tracking-wider">
            Continually Expanded
          </span>
        </motion.div>

      </div>
    </section>
  );
};
