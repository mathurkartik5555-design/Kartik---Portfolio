import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING RESEARCH ENGINE...');

  useEffect(() => {
    const steps = [
      { p: 20, text: 'CALIBRATING VALUATION MATRICES...' },
      { p: 45, text: 'PARSING VRL LOGISTICS INITIATION DATA...' },
      { p: 70, text: 'MOUNTING 3D RESEARCH INSTRUMENT...' },
      { p: 90, text: 'SYNTHESIZING FINANCIAL MODELS...' },
      { p: 100, text: 'PORTFOLIO READY' },
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setProgress(steps[currentStep].p);
        setLoadingText(steps[currentStep].text);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 400);
      }
    }, 180);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-finance-base overflow-hidden"
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-financial-grid opacity-30 pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full bg-finance-petrol/40 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        
        {/* Animated KM Monogram Emblem */}
        <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
          {/* Outer Rotating Valuation Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-2xl border border-finance-teal/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-1.5 rounded-xl border border-finance-brass/30"
          />
          
          {/* Inner Badge */}
          <div className="w-14 h-14 rounded-lg bg-finance-petrol/80 border border-finance-jade/50 flex items-center justify-center shadow-glow-jade">
            <span className="font-display font-extrabold text-xl text-finance-jade tracking-wider">
              KM
            </span>
          </div>
        </div>

        {/* Candidate Identity */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="font-display font-bold text-lg text-white tracking-tight">
            Kartik Mathur
          </div>
          <div className="text-xs font-mono text-finance-lavender tracking-widest uppercase mt-0.5">
            Aspiring Equity Research Analyst
          </div>
        </motion.div>

        {/* Progress Bar with Fine Analytical Track */}
        <div className="w-full h-1 bg-finance-petrol/60 rounded-full overflow-hidden border border-finance-teal/20 mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-finance-teal via-finance-jade to-finance-brass"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          />
        </div>

        {/* Status Text & Numerical Percentage */}
        <div className="w-full flex items-center justify-between text-[11px] font-mono text-finance-mist/70">
          <span className="truncate pr-2">{loadingText}</span>
          <span className="text-finance-jade font-bold">{progress}%</span>
        </div>

      </div>
    </motion.div>
  );
};
