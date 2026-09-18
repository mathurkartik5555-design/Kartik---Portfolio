import React from 'react';
import { motion } from 'framer-motion';
import { Compass, BarChart3, Calculator, Cpu, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { ParallaxDataLayer } from './ParallaxDataLayer';

export const ResearchIdentity: React.FC = () => {
  const { researchIdentity } = PORTFOLIO_DATA;

  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-6 h-6 text-finance-jade" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-finance-teal" />,
    Calculator: <Calculator className="w-6 h-6 text-finance-brass" />,
    Cpu: <Cpu className="w-6 h-6 text-finance-lavender" />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="research" className="py-32 sm:py-40 bg-finance-base/90 relative border-t border-finance-teal/20 overflow-hidden">
      <ParallaxDataLayer speed={0.12} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Generous Typography */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-finance-petrol/60 border border-finance-teal/30 text-xs font-mono uppercase tracking-[0.2em] text-finance-jade mb-4 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-finance-jade"></span>
            <span>Research Identity</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-6">
            {researchIdentity.headline}
          </h2>

          <p className="text-base sm:text-lg text-finance-mist/85 leading-relaxed font-sans">
            {researchIdentity.shortCopy}
          </p>
        </motion.div>

        {/* 4 Interactive 3D Spotlight Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7"
        >
          {researchIdentity.pillars.map((pillar, idx) => (
            <motion.div key={pillar.id} variants={itemVariants} className="h-full">
              <SpotlightCard
                enableTilt
                maxTilt={6}
                glassLevel="2"
                spotlightColor="rgba(101, 184, 155, 0.16)"
                className="rounded-3xl p-7 flex flex-col justify-between h-full border border-finance-teal/30 hover:border-finance-jade/40 shadow-institutional group"
              >
                <div>
                  {/* Corner Indicator */}
                  <div className="flex items-center justify-between mb-7">
                    <div className="w-13 h-13 rounded-2xl bg-finance-petrol/70 border border-finance-teal/30 flex items-center justify-center group-hover:border-finance-jade/50 transition-colors shadow-sm">
                      {iconMap[pillar.iconName]}
                    </div>
                    <span className="text-xs font-mono text-finance-lavender/50 group-hover:text-finance-jade transition-colors tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-finance-brass mb-2 font-semibold">
                      {pillar.subtitle}
                    </div>

                    <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-finance-jade transition-colors leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-finance-mist/80 leading-relaxed mb-8 font-sans">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                {/* Analytical Tags */}
                <div className="pt-5 border-t border-finance-teal/20 flex flex-wrap gap-2">
                  {pillar.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-[11px] font-mono px-3 py-1 rounded-lg bg-finance-petrol/60 text-finance-mist/90 border border-finance-teal/25"
                    >
                      {m}
                    </span>
                  ))}
                </div>

              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
