import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface DockItem {
  title: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface GlassDockProps {
  items: DockItem[];
  className?: string;
}

const MAGNIFICATION = 1.6;
const BASE_SIZE = 44;

export const GlassDock: React.FC<GlassDockProps> = ({ items, className = "" }) => {
  const dockRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getItemScale = (index: number) => {
    if (mouseX === null || !dockRef.current) return 1;
    const dockRect = dockRef.current.getBoundingClientRect();
    const itemWidth = dockRect.width / items.length;
    const itemCenterX = dockRect.left + itemWidth * index + itemWidth / 2;
    const distance = Math.abs(mouseX - itemCenterX);
    const maxDist = itemWidth * 2.5;
    if (distance > maxDist) return 1;
    const scale = 1 + (MAGNIFICATION - 1) * Math.cos((distance / maxDist) * (Math.PI / 2));
    return scale;
  };

  return (
    <div
      className={`flex items-end justify-center gap-2 ${className}`}
      onMouseMove={(e) => setMouseX(e.clientX)}
      onMouseLeave={() => { setMouseX(null); setHoveredIndex(null); }}
      ref={dockRef}
    >
      {items.map((item, i) => {
        const scale = getItemScale(i);
        const size = BASE_SIZE * scale;
        const Wrapper = (item.href ? "a" : "button") as "a" | "button";
        const wrapperProps = item.href
          ? { href: item.href }
          : { onClick: item.onClick, type: "button" as const };

        return (
          <div key={i} className="relative flex flex-col items-center">
            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.85 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-full mb-3 px-2.5 py-1 rounded-lg bg-finance-base/90 backdrop-blur-xl border border-finance-teal/40 text-[11px] font-mono font-medium text-finance-jade whitespace-nowrap shadow-lg pointer-events-none z-10"
                >
                  {item.title}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-finance-teal/40" />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              animate={{ width: size, height: size }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              style={{ originY: 1 }}
              className="flex items-center justify-center"
            >
              <Wrapper
                {...(wrapperProps as any)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="w-full h-full flex items-center justify-center rounded-xl bg-finance-petrol/70 backdrop-blur-xl border border-finance-teal/30 hover:border-finance-jade/60 text-finance-mist hover:text-finance-jade shadow-lg hover:shadow-glow-jade transition-colors duration-200 focus:outline-none"
                style={{ fontSize: size * 0.42 }}
              >
                {item.icon}
              </Wrapper>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};
