import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  tabIndex?: number;
  role?: string;
  'aria-label'?: string;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  maxTilt?: number;
  glareColor?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  onClick,
  tabIndex,
  role,
  'aria-label': ariaLabel,
  onKeyDown,
  maxTilt = 10,
  glareColor = 'rgba(101, 184, 155, 0.35)',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = ((mouseY / height) - 0.5) * -maxTilt;
    const rY = ((mouseX / width) - 0.5) * maxTilt;

    setRotateX(rX);
    setRotateY(rY);

    const glareX = (mouseX / width) * 100;
    const glareY = (mouseY / height) * 100;
    setGlarePosition({ x: glareX, y: glareY, opacity: 0.22 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
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
      animate={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
        mass: 0.5,
      }}
      className={`relative overflow-hidden transition-shadow duration-300 ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Dynamic Cursor Spotlight Glare */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-30"
        style={{
          opacity: glarePosition.opacity,
          background: `radial-gradient(circle 350px at ${glarePosition.x}% ${glarePosition.y}%, ${glareColor}, transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
};
