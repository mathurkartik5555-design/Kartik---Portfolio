import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, BookOpen, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-28 sm:py-36 bg-finance-base relative border-t border-finance-teal/25 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-40 w-80 h-80 rounded-full bg-finance-teal/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-finance-petrol/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-finance-petrol/60 border border-finance-teal/30 text-xs font-mono uppercase tracking-widest text-finance-jade mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-finance-jade" />
            <span>Academic Milestones</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-5">
            Education & Academic Track Record
          </h2>

          <p className="text-base sm:text-lg text-finance-mist/85 leading-relaxed font-sans max-w-2xl">
            A rigorous quantitative foundation in Commerce, Financial Accounting, Economics, and continuous global professional charter curriculum.
          </p>
        </div>

        {/* Editorial Timeline Container */}
        <div className="relative max-w-4xl">
          {/* Vertical Timeline Track */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-8 w-px bg-gradient-to-b from-finance-jade via-finance-teal/50 to-transparent hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {education.map((item, idx) => (
              <div key={item.id} className="relative sm:pl-16">
                
                {/* Timeline Node Indicator on Desktop */}
                <div className="absolute left-8 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-finance-petrol border-2 border-finance-jade shadow-glow-jade hidden sm:flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-finance-jade" />
                </div>

                <TiltCard maxTilt={5} glareColor="rgba(57, 124, 120, 0.12)">
                  <div className="bg-gradient-to-br from-finance-indigo/80 via-finance-petrol/40 to-finance-base/90 rounded-2xl p-7 sm:p-9 border border-finance-teal/30 hover:border-finance-jade/50 transition-all duration-300 shadow-institutional group">
                    
                    {/* Header Row: Degree, Institution & Grade Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-mono text-finance-lavender mb-2">
                          <BookOpen className="w-3.5 h-3.5 text-finance-brass" />
                          <span className="font-semibold text-finance-mist/90">{item.institution}</span>
                          {item.location && <span className="text-finance-mist/60">· {item.location}</span>}
                        </div>

                        <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-finance-jade transition-colors">
                          {item.degree}
                        </h3>
                      </div>

                      <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 shrink-0">
                        {item.gradeBadge && (
                          <span className="text-xs font-mono font-bold text-finance-jade bg-finance-petrol/90 border border-finance-jade/40 px-3 py-1 rounded-full shadow-sm">
                            {item.gradeBadge}
                          </span>
                        )}
                        <span className="text-xs font-mono text-finance-lavender/80 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </span>
                      </div>
                    </div>

                    {/* Highlights List */}
                    <div className="space-y-3 pt-4 border-t border-finance-teal/20">
                      {item.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3 text-sm text-finance-mist/90 leading-relaxed font-sans">
                          <CheckCircle2 className="w-4 h-4 text-finance-jade shrink-0 mt-1" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </TiltCard>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
