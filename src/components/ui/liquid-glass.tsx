import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

export interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  intensity?: "subtle" | "medium" | "vibrant";
  interactive?: boolean;
  glowColor?: string;
}

/**
 * LiquidGlass — High-fidelity frosted liquid glassmorphic container.
 * Features:
 * - visionOS style refractive surface specular glint
 * - Interactive mouse-following liquid specular refraction
 * - Multi-layer backdrop blur and edge light prism
 */
export const LiquidGlass: React.FC<LiquidGlassProps> = ({
  children,
  className = "",
  intensity = "medium",
  interactive = true,
  glowColor = "rgba(47, 230, 222, 0.15)",
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [glintPos, setGlintPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlintPos({ x, y });
  }, [interactive]);

  const blurMap = {
    subtle: "backdrop-blur-md bg-finance-petrol/40",
    medium: "backdrop-blur-xl bg-finance-petrol/60",
    vibrant: "backdrop-blur-2xl bg-finance-petrol/80",
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setGlintPos({ x: 50, y: 50 });
      }}
      className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${blurMap[intensity]} border-white/10 hover:border-finance-teal/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] ${className}`}
      {...props}
    >
      {/* Specular Liquid Light Refraction Layer */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0.45,
          background: `radial-gradient(circle at ${glintPos.x}% ${glintPos.y}%, ${glowColor} 0%, rgba(255,255,255,0.03) 35%, transparent 70%)`,
        }}
      />

      {/* Top Refraction Highlight Rim (Glass Bevel) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/35 to-transparent" />

      {/* Left Specular Glint */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/30 via-transparent to-transparent" />

      {/* Inner ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default LiquidGlass;
