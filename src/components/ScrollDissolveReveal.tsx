import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface ScrollDissolveRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before animation starts */
  delay?: number;
  /** Use blur dissolve effect */
  withBlur?: boolean;
}

/**
 * Wraps children with a cinematic scroll-triggered dissolve + slide-up reveal.
 * Inspired by VengeanceUI scroll-dissolve-reveal — implemented via Framer Motion
 * (no @react-three/fiber dep required).
 */
export const ScrollDissolveReveal: React.FC<ScrollDissolveRevealProps> = ({
  children,
  className = "",
  delay = 0,
  withBlur = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28, filter: withBlur ? "blur(10px)" : "blur(0px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 28, filter: withBlur ? "blur(10px)" : "blur(0px)" }
      }
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Word-by-word dissolve reveal — for headlines and hero text.
 */
export const DissolveWords: React.FC<{
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}> = ({ text, className = "", wordClassName = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`flex flex-wrap gap-x-[0.35em] ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block ${wordClassName}`}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 20, filter: "blur(8px)" }
          }
          transition={{
            duration: 0.65,
            delay: delay + i * 0.07,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
