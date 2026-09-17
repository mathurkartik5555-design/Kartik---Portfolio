import React from 'react';
import { motion } from 'framer-motion';
import { Compass, BarChart3, Calculator, Cpu, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

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
        staggerChildren: 0.15,
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
    <section id="research" className="py-32 bg-finance-base/80 relative border-t border-finance-teal/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Generous Typography */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-finance-jade mb-4">
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

        {/* 4 Interactive 3D Tilt Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {researchIdentity.pillars.map((pillar, idx) => (
            <motion.div key={pillar.id} variants={itemVariants}>
              <TiltCard className="glass-panel rounded-2xl p-7 flex flex-col justify-between h-full border border-finance-teal/30 hover:border-finance-jade/40 shadow-institutional group">
                
                {/* Corner Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-finance-petrol/60 border border-finance-teal/30 flex items-center justify-center group-hover:border-finance-jade/50 transition-colors shadow-sm">
                    {iconMap[pillar.iconName]}
                  </div>
                  <span className="text-xs font-mono text-finance-lavender/40 group-hover:text-finance-jade transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <div className="text-[11px] font-mono tracking-widest uppercase text-finance-brass mb-1.5 font-semibold">
                    {pillar.subtitle}
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-finance-jade transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-finance-mist/80 leading-relaxed mb-8">
                    {pillar.description}
                  </p>
                </div>

                {/* Analytical Tags */}
                <div className="pt-5 border-t border-finance-teal/20 flex flex-wrap gap-2">
                  {pillar.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-finance-petrol/50 text-finance-mist/90 border border-finance-teal/25"
                    >
                      {m}
                    </span>
                  ))}
                </div>

              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
