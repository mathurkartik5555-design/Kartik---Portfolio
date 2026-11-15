import React, { useEffect, useRef, useState, useCallback } from "react";

interface Pixel {
  id: number;
  x: number;
  y: number;
  opacity: number;
  age: number;
  color: string;
}

const PALETTE = [
  "#2FE6DE", // Teal accent
  "#65B89B", // Jade
  "#ffffff", // Pure luminescent white
  "#a8e6cf", // Soft mint
  "#8fe3d9", // High-tech cyan
];

const PIXEL_SIZE = 10;
const TRAIL_LENGTH = 36;
const FADE_SPEED = 0.035;

/**
 * Pixel Cursor Trail — Bloomberg / Quant terminal inspired pixel trail.
 * Renders an ambient pointer-events-none canvas overlay that traces cursor movements
 * with fading glowing pixel blocks.
 */
export const PixelCursorTrail: React.FC<{
  enabled?: boolean;
  className?: string;
}> = ({ enabled = true, className = "" }) => {
  const [pixels, setPixels] = useState<Pixel[]>([]);
  const pixelIdRef = useRef(0);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  const createPixel = useCallback((x: number, y: number) => {
    const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
    return {
      id: pixelIdRef.current++,
      x,
      y,
      opacity: 0.85,
      age: 0,
      color,
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // Check if device supports fine hover (desktop only, skip on touch)
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const dx = x - lastPositionRef.current.x;
      const dy = y - lastPositionRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > PIXEL_SIZE * 0.8) {
        const newPixel = createPixel(x, y);
        setPixels((prev) => [...prev.slice(-TRAIL_LENGTH), newPixel]);
        lastPositionRef.current = { x, y };
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enabled, createPixel]);

  useEffect(() => {
    if (!enabled) return;

    const animate = () => {
      setPixels((prev) =>
        prev
          .map((pixel) => ({
            ...pixel,
            opacity: pixel.opacity - FADE_SPEED,
            age: pixel.age + 1,
          }))
          .filter((pixel) => pixel.opacity > 0.02)
      );
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [enabled]);

  if (!enabled || pixels.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-50 overflow-hidden ${className}`}
    >
      {pixels.map((pixel) => {
        const sizeMultiplier = Math.max(0.35, 1 - pixel.age / 80);
        const currentSize = PIXEL_SIZE * sizeMultiplier;

        return (
          <div
            key={pixel.id}
            className="absolute rounded-[1px] pointer-events-none shadow-[0_0_8px_currentColor]"
            style={{
              left: pixel.x - currentSize / 2,
              top: pixel.y - currentSize / 2,
              width: currentSize,
              height: currentSize,
              opacity: pixel.opacity,
              backgroundColor: pixel.color,
              color: pixel.color,
              transition: "transform 0.08s ease-out",
            }}
          />
        );
      })}
    </div>
  );
};
