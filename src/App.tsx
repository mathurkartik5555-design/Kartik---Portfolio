import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResearchIdentity } from './components/ResearchIdentity';
import { FeaturedResearch } from './components/FeaturedResearch';
import { FinanceTools } from './components/FinanceTools';
import { ResearchMethodology } from './components/ResearchMethodology';
import { Skills } from './components/Skills';
import { Credentials } from './components/Credentials';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  // Track active section for Navbar underline indicator
  useEffect(() => {
    const sections = [
      'hero',
      'research',
      'vrl-logistics',
      'projects',
      'methodology',
      'skills',
      'credentials',
      'education',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-finance-base text-finance-mist selection:bg-finance-teal selection:text-white flex flex-col font-sans relative">
      
      {/* Cinematic Institutional Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <Navbar activeSection={activeSection} />
      
      <main className="flex-1">
        <Hero />
        <ResearchIdentity />
        <FeaturedResearch />
        <FinanceTools />
        <ResearchMethodology />
        <Skills />
        <Credentials />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
