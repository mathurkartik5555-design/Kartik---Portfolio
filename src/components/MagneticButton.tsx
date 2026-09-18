import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2 } from 'lucide-react';

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'brass' | 'ghost';
  href?: string;
  onClick?: () => void;
  download?: string | boolean;
  target?: string;
  rel?: string;
  className?: string;
  showArrow?: boolean;
  isLoading?: boolean;
  title?: string;
  'aria-label'?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  download,
  target,
  rel,
  className = '',
  showArrow = false,
  isLoading = false,
  title,
  'aria-label': ariaLabel,
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    // Magnetic pull toward cursor
    const x = (clientX - (left + width / 2)) * 0.32;
    const y = (clientY - (top + height / 2)) * 0.32;
    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    'relative inline-flex items-center justify-center font-display font-semibold transition-all duration-300 rounded-xl select-none overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-finance-jade focus-visible:ring-offset-2 focus-visible:ring-offset-finance-base';

  const variantStyles = {
    primary:
      'bg-finance-jade hover:bg-finance-jade/95 text-finance-base px-6 py-3.5 text-sm shadow-glow-jade border border-finance-jade/60 active:scale-[0.97]',
    brass:
      'bg-finance-brass hover:bg-finance-brass/95 text-finance-base px-6 py-3.5 text-sm shadow-glow-brass border border-finance-brass/60 active:scale-[0.97]',
    secondary:
      'bg-finance-petrol/60 hover:bg-finance-teal/35 text-finance-mist hover:text-white px-5 py-3.5 text-sm border border-finance-teal/30 hover:border-finance-jade/50 backdrop-blur-md active:scale-[0.97]',
    ghost:
      'bg-transparent hover:bg-finance-petrol/40 text-finance-mist hover:text-white px-4 py-2.5 text-xs border border-transparent hover:border-finance-teal/30 active:scale-[0.97]',
  };

  const content = (
    <>
      {/* Liquid Light Shimmer Sweep on Hover */}
      <span
        className={`absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all pointer-events-none ${
          isHovered ? 'animate-liquid-sweep' : 'opacity-0'
        }`}
      />

      {/* Subtle interior gradient reflection */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin mr-2" />
      ) : null}

      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        )}
      </span>
    </>
  );

  const motionProps = {
    animate: { x: position.x, y: position.y },
    transition: { type: 'spring', stiffness: 280, damping: 16, mass: 0.4 },
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  if (href) {
    return (
      <motion.a
        ref={buttonRef as React.Ref<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        download={download}
        target={target}
        rel={rel}
        title={title}
        aria-label={ariaLabel}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef as React.Ref<HTMLButtonElement>}
      onClick={onClick}
      disabled={isLoading}
      title={title}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};
