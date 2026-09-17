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

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    'relative inline-flex items-center justify-center font-display font-semibold transition-all duration-300 rounded-xl select-none overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-finance-jade focus-visible:ring-offset-2 focus-visible:ring-offset-finance-base';

  const variantStyles = {
    primary:
      'bg-finance-jade hover:bg-finance-jade/90 text-finance-base px-6 py-3.5 text-sm shadow-glow-jade border border-finance-jade/60 active:scale-[0.98]',
    brass:
      'bg-finance-brass hover:bg-finance-brass/90 text-finance-base px-6 py-3.5 text-sm shadow-glow-brass border border-finance-brass/60 active:scale-[0.98]',
    secondary:
      'bg-finance-petrol/60 hover:bg-finance-teal/30 text-finance-mist hover:text-white px-5 py-3.5 text-sm border border-finance-teal/30 hover:border-finance-jade/40 backdrop-blur-md active:scale-[0.98]',
    ghost:
      'bg-transparent hover:bg-finance-petrol/40 text-finance-mist hover:text-white px-4 py-2.5 text-xs border border-transparent hover:border-finance-teal/30 active:scale-[0.98]',
  };

  const content = (
    <>
      {/* Subtle light sweep animation on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

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
    transition: { type: 'spring', stiffness: 250, damping: 18, mass: 0.5 },
    onMouseMove: handleMouseMove,
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
