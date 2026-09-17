import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { FileText, Menu, X, ArrowUpRight, ShieldCheck, Mail, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero', id: 'hero' },
    { label: 'Research', href: '#research', id: 'research' },
    { label: 'Featured: VRL', href: '#vrl-logistics', id: 'vrl-logistics' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Methodology', href: '#methodology', id: 'methodology' },
    { label: 'Credentials', href: '#credentials', id: 'credentials' },
    { label: 'Milestones', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-finance-indigo/90 backdrop-blur-xl border-b border-finance-teal/25 py-3 shadow-institutional'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      {/* Refined Global Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-finance-teal via-finance-jade to-finance-brass origin-left pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand identity */}
        <a href="#hero" className="flex items-center gap-3.5 group focus:outline-none">
          <div className="w-10 h-10 rounded-xl bg-finance-petrol border border-finance-teal/40 flex items-center justify-center font-display font-extrabold text-finance-jade text-sm transition-all duration-300 group-hover:scale-105 group-hover:border-finance-jade shadow-sm">
            KM
          </div>
          <div>
            <div className="font-display font-bold text-finance-mist tracking-tight text-base sm:text-lg group-hover:text-white transition-colors flex items-center gap-2">
              <span>Kartik Mathur</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-finance-jade animate-pulse" />
            </div>
            <div className="text-[10px] font-mono text-finance-lavender tracking-widest uppercase">
              Aspiring Equity Research Analyst
            </div>
          </div>
        </a>

        {/* Desktop Navigation Pill */}
        <nav className="hidden lg:flex items-center gap-1 bg-finance-petrol/50 border border-finance-teal/25 rounded-full px-3 py-1.5 backdrop-blur-md shadow-inner relative">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                  isActive ? 'text-white font-semibold' : 'text-finance-mist/75 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-finance-teal/35 border border-finance-teal/40 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/assets/docs/Kartik_Mathur_Resume.pdf"
            download="Kartik_Mathur_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-medium text-finance-mist hover:text-white bg-finance-petrol/60 hover:bg-finance-teal/30 border border-finance-teal/30 hover:border-finance-jade/50 rounded-xl transition-all focus:outline-none"
            title="Download Kartik Mathur's Resume"
          >
            <FileText className="w-3.5 h-3.5 text-finance-jade" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-finance-base bg-finance-jade hover:bg-finance-jade/90 rounded-xl shadow-glow-jade transition-all focus:outline-none min-h-[40px]"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="/assets/docs/Kartik_Mathur_Resume.pdf"
            download="Kartik_Mathur_Resume.pdf"
            className="p-2.5 text-finance-jade bg-finance-petrol/70 border border-finance-teal/30 rounded-xl min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Download Resume"
          >
            <FileText className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-finance-mist hover:text-white rounded-xl bg-finance-petrol/70 border border-finance-teal/30 focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="sm:hidden bg-finance-indigo/95 backdrop-blur-2xl border-b border-finance-teal/30 px-5 pt-3 pb-6 mt-3 space-y-3 overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-2 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-3 text-xs font-medium rounded-xl border transition-colors ${
                    activeSection === link.id
                      ? 'bg-finance-teal/30 text-white border-finance-teal/40 font-semibold'
                      : 'text-finance-mist hover:text-white bg-finance-petrol/50 hover:bg-finance-teal/25 border-finance-teal/20'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-finance-teal/20 flex flex-col gap-2.5">
              <a
                href="/assets/docs/Kartik_Mathur_Resume.pdf"
                download="Kartik_Mathur_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-medium text-finance-mist bg-finance-petrol border border-finance-teal/30 rounded-xl"
              >
                <FileText className="w-4 h-4 text-finance-jade" />
                <span>Download Full Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-semibold text-finance-base bg-finance-jade rounded-xl"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Kartik Mathur</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
