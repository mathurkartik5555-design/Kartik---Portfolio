import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
  enableTilt?: boolean;
  maxTilt?: number;
  glassLevel?: '1' | '2' | '3';
  onClick?: () => void;
  tabIndex?: number;
  role?: string;
  'aria-label'?: string;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(101, 184, 155, 0.16)', // Default jade sheen
  spotlightSize = 380,
  enableTilt = false,
  maxTilt = 5,
  glassLevel = '2',
  onClick,
  tabIndex,
  role,
  'aria-label': ariaLabel,
  onKeyDown,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y, opacity: 1 });

    if (enableTilt) {
      const rX = ((y / rect.height) - 0.5) * -maxTilt;
      const rY = ((x / rect.width) - 0.5) * maxTilt;
      setTilt({ rotateX: rX, rotateY: rY });
    }
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
    if (enableTilt) {
      setTilt({ rotateX: 0, rotateY: 0 });
    }
  };

  const glassClasses = {
    '1': 'glass-level-1',
    '2': 'glass-level-2',
    '3': 'glass-level-3',
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
      role={role}
      aria-label={ariaLabel}
      animate={
        enableTilt
          ? {
              rotateX: tilt.rotateX,
              rotateY: tilt.rotateY,
              transformPerspective: 1000,
            }
          : undefined
      }
      transition={{
        type: 'spring',
        stiffness: 320,
        damping: 24,
        mass: 0.4,
      }}
      className={`relative overflow-hidden ${glassClasses[glassLevel]} ${className}`}
      style={enableTilt ? { transformStyle: 'preserve-3d' } : undefined}
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-20"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(${spotlightSize}px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </motion.div>
  );
};
