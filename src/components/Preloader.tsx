import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);

  const steps = [
    'INITIALISING RESEARCH ENVIRONMENT',
    'LOADING MARKET INTELLIGENCE',
    'CALIBRATING VALUATION FRAMEWORK',
    'SYSTEM READY'
  ];

  const handleSkip = () => {
    setIsSkipped(true);
    sessionStorage.setItem('km_preloader_seen', 'true');
    onComplete();
  };

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Check if already seen in current browser session
    const hasSeen = sessionStorage.getItem('km_preloader_seen');
    if (hasSeen === 'true') {
      // Very fast bypass (300ms) to ensure smooth transition
      const timer = setTimeout(() => {
        onComplete();
      }, 250);
      return () => clearTimeout(timer);
    }

    // Handle Escape key to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // 2.2 second total sequence
    const duration = 2200;
    const intervalTime = 40;
    const increment = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(interval);
          setActiveStep(3);
          sessionStorage.setItem('km_preloader_seen', 'true');
          setTimeout(() => {
            onComplete();
          }, 350);
          return 100;
        }

        if (next >= 75) {
          setActiveStep(2);
        } else if (next >= 40) {
          setActiveStep(1);
        } else {
          setActiveStep(0);
        }

        return next;
      });
    }, intervalTime);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  if (isSkipped) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-finance-base overflow-hidden select-none"
    >
      {/* Background Micro-Grid & Ambient Vignette */}
      <div className="absolute inset-0 bg-financial-grid opacity-20 pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-finance-petrol/30 blur-3xl pointer-events-none" />

      {/* Skip Button in Top Right */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 z-20 px-3 py-1.5 rounded-lg border border-finance-teal/30 bg-finance-petrol/60 hover:bg-finance-teal/30 text-[11px] font-mono tracking-widest text-finance-lavender/70 hover:text-white transition-all duration-200"
        aria-label="Skip initialization sequence"
      >
        SKIP [ESC]
      </button>

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center w-full">
        
        {/* Robotic Geometric Monogram Assembly with Scanner Sweep */}
        <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
          
          {/* Subtle Outer Technical Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-2xl border border-finance-teal/25 border-dashed"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-2 rounded-xl border border-finance-brass/20"
          />

          {/* SVG Monogram Fine-Line Assembly */}
          <div className="relative w-20 h-20 rounded-xl bg-finance-petrol/70 border border-finance-teal/40 flex items-center justify-center overflow-hidden shadow-institutional">
            
            {/* Fine Vector Graphic Mark (Geometric KM Emblem) */}
            <svg
              viewBox="0 0 100 100"
              className="w-14 h-14 text-finance-jade stroke-current fill-none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* K glyph */}
              <motion.path
                d="M 28 22 L 28 78"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              <motion.path
                d="M 48 26 L 28 50 L 48 74"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, delay: 0.2, ease: "easeInOut" }}
              />
              
              {/* M glyph */}
              <motion.path
                d="M 54 78 L 54 22 L 72 50 L 90 22 L 90 78"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
              />
            </svg>

            {/* Robotic Laser Scanner Line Sweeping Vertically */}
            <motion.div
              animate={{
                y: [-40, 40, -40]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-finance-jade to-transparent shadow-[0_0_8px_rgba(101,184,155,0.8)] pointer-events-none"
            />
          </div>

          {/* Precision Corner Nodes */}
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-finance-jade/80" />
          <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-finance-jade/80" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-finance-jade/80" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-finance-jade/80" />
        </div>

        {/* Identity Metadata Labels */}
        <div className="mb-6">
          <div className="font-display font-bold text-white text-base tracking-tight">
            Kartik Mathur
          </div>
          <div className="text-[11px] font-mono tracking-widest uppercase text-finance-lavender/80 mt-0.5">
            Institutional Research Terminal
          </div>
        </div>

        {/* Precision Progress Track */}
        <div className="w-full h-1 bg-finance-petrol/60 rounded-full overflow-hidden border border-finance-teal/20 mb-3 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-finance-teal via-finance-jade to-finance-brass"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Technical Terminal Status Labels */}
        <div className="w-full flex items-center justify-between text-[11px] font-mono">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeStep}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.2 }}
              className="text-finance-mist/80 truncate text-left font-medium"
            >
              {steps[activeStep]}
            </motion.span>
          </AnimatePresence>

          <span className="text-finance-jade font-bold font-mono pl-3 shrink-0">
            {Math.round(progress)}%
          </span>
        </div>

      </div>
    </motion.div>
  );
};
