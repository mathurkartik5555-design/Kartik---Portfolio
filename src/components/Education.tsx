import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, CheckCircle2, BookOpen, ShieldCheck, FileSpreadsheet, Compass, Sparkles, AlertCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { ParallaxDataLayer } from './ParallaxDataLayer';

export const Education: React.FC = () => {
  const { careerTimeline } = PORTFOLIO_DATA;

  const getMilestoneIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-finance-jade" />;
      case 'cohort':
        return <Sparkles className="w-4 h-4 text-finance-brass" />;
      case 'certification':
        return <ShieldCheck className="w-4 h-4 text-finance-teal" />;
      case 'research':
        return <FileSpreadsheet className="w-4 h-4 text-finance-jade" />;
      case 'candidacy':
        return <Award className="w-4 h-4 text-finance-brass" />;
      default:
        return <BookOpen className="w-4 h-4 text-finance-mist" />;
    }
  };

  return (
    <section id="education" className="py-32 sm:py-40 bg-finance-base relative border-t border-finance-teal/20 overflow-hidden">
      {/* Background ambient depth & parallax data */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 rounded-full bg-finance-petrol/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 rounded-full bg-finance-teal/10 blur-3xl pointer-events-none" />
      <ParallaxDataLayer speed={0.14} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Generous Spacing */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-finance-petrol/60 border border-finance-teal/30 text-xs font-mono uppercase tracking-[0.2em] text-finance-jade mb-4 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-finance-jade"></span>
            <span>Chronological Milestones</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-6">
            Education & Career Milestones
          </h2>

          <p className="text-base sm:text-lg text-finance-mist/85 leading-relaxed font-sans max-w-2xl">
            A transparent, factual record of academic achievements, regulatory certifications, and institutional research cohort milestones.
          </p>
        </motion.div>

        {/* Editorial Timeline Container */}
        <div className="relative max-w-4xl">
          
          {/* Subtle Vertical Spine Line */}
          <div className="absolute left-4 sm:left-7 top-4 bottom-8 w-px bg-gradient-to-b from-finance-jade via-finance-teal/40 to-transparent hidden sm:block pointer-events-none" />

          {/* Non-Sequential Concurrency Note Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 sm:ml-16 p-4 sm:p-5 rounded-2xl bg-finance-petrol/40 border border-finance-teal/30 text-xs text-finance-lavender/90 flex items-start gap-3.5"
          >
            <AlertCircle className="w-4 h-4 text-finance-teal shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white font-mono uppercase tracking-wider mr-2">
                Timeline Alignment Note:
              </span>
              <span>
                Kartik is currently pursuing his undergraduate Bachelor of Commerce (Honours) degree at VIPS-TC, Delhi. Certifications (NISM Series VIII & XV), cohort participation, and the VRL Logistics research report were completed concurrently alongside academic degree terms.
              </span>
            </div>
          </motion.div>

          <div className="space-y-8 sm:space-y-12">
            {careerTimeline.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative sm:pl-16"
              >
                {/* Node Marker on Spine */}
                <div className="absolute left-7 top-7 -translate-x-1/2 w-4 h-4 rounded-full bg-finance-petrol border-2 border-finance-jade shadow-glow-jade hidden sm:flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-finance-jade" />
                </div>

                <SpotlightCard
                  enableTilt
                  maxTilt={4}
                  glassLevel="2"
                  spotlightColor="rgba(101, 184, 155, 0.14)"
                  className="rounded-3xl"
                >
                  <div className="p-6 sm:p-8 group">
                    
                    {/* Top Row: Milestone Step, Org & Period */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-mono text-finance-lavender mb-1.5">
                          {getMilestoneIcon(item.type)}
                          <span className="text-finance-brass font-semibold uppercase tracking-[0.16em]">
                            <span className="tabular-nums">0{item.step}</span> // {item.organization}
                          </span>
                        </div>

                        <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-finance-jade transition-colors leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      {/* Status & Score Pills */}
                      <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 shrink-0">
                        {item.scoreOrDetail && (
                          <span className="text-xs font-mono font-bold text-finance-jade bg-finance-petrol/80 border border-finance-jade/35 px-3 py-1 rounded-full shadow-sm tabular-nums">
                            {item.scoreOrDetail}
                          </span>
                        )}
                        <span className="text-xs font-mono text-finance-mist/75 tabular-nums">
                          {item.periodOrDate}
                        </span>
                      </div>
                    </div>

                    {/* Milestone Body Description */}
                    <p className="text-sm sm:text-base text-finance-mist/85 leading-relaxed font-sans mb-3">
                      {item.description}
                    </p>

                    {/* Specific Context Note */}
                    {item.note && (
                      <div className="text-[11px] font-mono text-finance-lavender/70 pt-3 border-t border-finance-teal/15 mt-3">
                        * {item.note}
                      </div>
                    )}

                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
