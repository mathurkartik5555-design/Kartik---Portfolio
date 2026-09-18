import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxDataLayerProps {
  className?: string;
  speed?: number;
}

export const ParallaxDataLayer: React.FC<ParallaxDataLayerProps> = ({
  className = '',
  speed = 0.2,
}) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 2000], [0, -2000 * speed]);
  const y2 = useTransform(scrollY, [0, 2000], [0, 2000 * (speed * 0.5)]);
  const opacity = useTransform(scrollY, [0, 400], [0.35, 0.65]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Slower floating coordinate nodes */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-[15%] left-[8%] font-mono text-[9px] text-finance-teal/30 tracking-widest uppercase">
          SEC // 0x4E92 · DCF-MODEL
        </div>
        <div className="absolute top-[35%] right-[12%] font-mono text-[9px] text-finance-jade/25 tracking-widest uppercase">
          WACC // 11.25% · TG // 5.00%
        </div>
        <div className="absolute top-[60%] left-[5%] font-mono text-[9px] text-finance-brass/25 tracking-widest uppercase">
          EV/EBITDA // 12.8x · PEER-BENCHMARK
        </div>
        <div className="absolute top-[80%] right-[7%] font-mono text-[9px] text-finance-teal/25 tracking-widest uppercase">
          TAM // $429B FREIGHT
        </div>
      </motion.div>

      {/* Counter-drift subtle financial grid line markers */}
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute inset-0"
      >
        <div className="absolute top-[25%] right-[22%] w-32 h-px bg-gradient-to-r from-transparent via-finance-teal/20 to-transparent" />
        <div className="absolute top-[50%] left-[18%] w-48 h-px bg-gradient-to-r from-transparent via-finance-jade/15 to-transparent" />
        <div className="absolute top-[75%] right-[15%] w-40 h-px bg-gradient-to-r from-transparent via-finance-brass/15 to-transparent" />
      </motion.div>
    </div>
  );
};
