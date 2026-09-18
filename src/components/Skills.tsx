import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { ParallaxDataLayer } from './ParallaxDataLayer';

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...skills.map((s) => s.category)];

  const filteredClusters =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-32 sm:py-40 bg-finance-base relative border-t border-finance-teal/20 overflow-hidden">
      <ParallaxDataLayer speed={0.1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 sm:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-finance-petrol/60 border border-finance-teal/30 text-xs font-mono uppercase tracking-[0.2em] text-finance-jade mb-4 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-finance-jade"></span>
              <span>Capabilities Matrix</span>
            </div>

            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
              Analytical Skills & Competencies
            </h2>
          </motion.div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs rounded-full font-mono font-medium transition-all duration-300 focus:outline-none relative ${
                    isSelected
                      ? 'bg-finance-jade text-finance-base font-bold shadow-glow-jade'
                      : 'bg-finance-petrol/60 text-finance-mist/80 hover:bg-finance-teal/30 hover:text-white border border-finance-teal/25'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Clusters Grid with SpotlightCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredClusters.map((cluster, cIdx) => (
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
                className="rounded-3xl p-8 sm:p-10 h-full border border-finance-teal/30 hover:border-finance-jade/45 transition-all shadow-institutional"
              >
                <div className="flex items-center justify-between mb-8 pb-5 border-b border-finance-teal/20">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {cluster.category}
                  </h3>
                  <span className="text-xs font-mono text-finance-jade bg-finance-petrol/80 px-3 py-1.5 rounded-lg border border-finance-teal/30 font-semibold tabular-nums">
                    {cluster.skills.length} Competencies
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
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
