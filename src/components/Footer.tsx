import React from 'react';
import { Shield, FileText, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { footer, personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-finance-base/95 border-t border-finance-teal/25 pt-16 pb-12 text-xs text-finance-mist/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compliance & Factual Transparency Box */}
        <div className="p-6 rounded-2xl bg-finance-petrol/30 border border-finance-teal/20 mb-12">
          <div className="flex items-start gap-3.5">
            <Shield className="w-5 h-5 text-finance-brass shrink-0 mt-0.5" />
            <div className="space-y-2">
              <div className="font-mono text-xs text-finance-brass uppercase tracking-wider font-semibold">
                Institutional Research & Academic Portfolio Disclosure
              </div>
              <p className="text-xs text-finance-mist/85 leading-relaxed">
                {footer.disclaimer}
              </p>
              <div className="text-[11px] font-mono text-finance-lavender/75 pt-1">
                Designation Note: Kartik Mathur is a registered candidate with the CFA Institute (CFA Level I Candidate). He is not a CFA charterholder. All equity models, valuation multiples, and target scenarios are authored for academic portfolio evaluation.
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Brand Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-finance-teal/15">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-finance-petrol border border-finance-teal/40 flex items-center justify-center font-display font-bold text-finance-jade text-xs">
              KM
            </div>
            <div>
              <div className="font-display font-bold text-white text-sm">Kartik Mathur</div>
              <div className="text-[11px] font-mono text-finance-lavender">Aspiring Equity Research Analyst · Delhi, India</div>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-finance-mist/80">
            <a href="#hero" className="hover:text-white transition-colors">Overview</a>
            <a href="#research" className="hover:text-white transition-colors">Identity</a>
            <a href="#vrl-logistics" className="hover:text-white transition-colors">VRL Coverage</a>
            <a href="#projects" className="hover:text-white transition-colors">Finance AI</a>
            <a href="#credentials" className="hover:text-white transition-colors">Credentials</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Scroll to Top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-finance-petrol/60 hover:bg-finance-teal/30 border border-finance-teal/30 text-finance-mist hover:text-white transition-all focus:outline-none"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Copyright & Meta */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-finance-lavender/60">
          <div>
            {footer.copyright}
          </div>
          <div className="flex items-center gap-4">
            <span>Ink Indigo & Deep Petrol Architecture</span>
            <span>·</span>
            <span>Render Static Site Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
