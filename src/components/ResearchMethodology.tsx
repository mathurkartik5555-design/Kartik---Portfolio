import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Globe2, 
  FileSpreadsheet, 
  LineChart, 
  ShieldAlert, 
  CheckSquare2,
  ArrowRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const ResearchMethodology: React.FC = () => {
  const { methodology } = PORTFOLIO_DATA;

  const stepIcons = [
    <Building2 className="w-5 h-5 text-finance-jade" />,
    <Globe2 className="w-5 h-5 text-finance-teal" />,
    <FileSpreadsheet className="w-5 h-5 text-finance-brass" />,
    <LineChart className="w-5 h-5 text-finance-jade" />,
    <ShieldAlert className="w-5 h-5 text-finance-copper" />,
    <CheckSquare2 className="w-5 h-5 text-finance-mist" />,
  ];

  return (
    <section id="methodology" className="py-32 bg-finance-base/90 relative border-t border-finance-teal/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Generous Typography */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-finance-brass mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-finance-brass"></span>
            <span>Disciplined Framework</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-6">
            6-Step Research Methodology
          </h2>

          <p className="text-base sm:text-lg text-finance-mist/85 leading-relaxed font-sans">
            A structured fundamental workflow applied across equity research cohort projects, corporate accounting forensic scrutiny, and valuation modelling.
          </p>
        </motion.div>

        {/* 6 Steps Grid with Connecting Line Aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methodology.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <TiltCard className="glass-panel rounded-3xl p-8 border border-finance-teal/30 hover:border-finance-jade/40 flex flex-col justify-between h-full group shadow-institutional">
                
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-finance-petrol/60 border border-finance-teal/40 flex items-center justify-center group-hover:border-finance-jade/50 transition-colors shadow-sm">
                      {stepIcons[idx]}
                    </div>
                    <span className="text-xs font-mono text-finance-jade bg-finance-petrol/60 px-3 py-1.5 rounded-lg border border-finance-teal/20 font-bold">
                      Step 0{item.step}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="text-[11px] font-mono text-finance-brass uppercase tracking-widest mb-2 font-semibold">
                    {item.headline}
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-finance-jade transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-finance-mist/80 leading-relaxed mb-8 font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables Footer */}
                <div className="pt-5 border-t border-finance-teal/20 space-y-2">
                  <div className="text-[10px] font-mono text-finance-lavender uppercase tracking-widest mb-1 font-semibold">
                    Key Deliverables:
                  </div>
                  {item.deliverables.map((del) => (
                    <div key={del} className="flex items-center gap-2 text-xs text-finance-mist/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-finance-teal shrink-0"></span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>

              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom Editorial Note */}
        <div className="mt-16 text-center text-xs font-mono text-finance-lavender/70">
          * This 6-step framework represents Kartik’s academic portfolio research methodology and does not constitute investment advice.
        </div>

      </div>
    </section>
  );
};
