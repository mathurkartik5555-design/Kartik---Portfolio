import React from "react";

export interface RadialGlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  as?: "button" | "a";
}

/**
 * Radial Glow Button — adapted from VengeanceUI radial-glow-button.
 * Uses CSS @property custom properties for smooth animated radial glow.
 * Themed to the portfolio's finance/teal color system.
 */
export const RadialGlowButton: React.FC<RadialGlowButtonProps> = ({
  children,
  className = "",
  href,
  target,
  rel,
  download,
  as,
  onClick,
  ...props
}) => {
  const isLink = !!href || as === "a";
  const Tag = isLink ? "a" : "button";

  const tagProps = isLink
    ? { href, target, rel, download }
    : { onClick, type: "button" as const, ...props };

  return (
    <div className="relative inline-block">
      <style>{`
        @property --rg-pos-x { syntax: '<percentage>'; initial-value: 40%; inherits: false; }
        @property --rg-pos-y { syntax: '<percentage>'; initial-value: 140%; inherits: false; }
        @property --rg-spread-x { syntax: '<percentage>'; initial-value: 130%; inherits: false; }
        @property --rg-spread-y { syntax: '<percentage>'; initial-value: 170%; inherits: false; }
        @property --rg-color-1 { syntax: '<color>'; initial-value: #0d1332; inherits: false; }
        @property --rg-color-2 { syntax: '<color>'; initial-value: #123B46; inherits: false; }
        @property --rg-color-3 { syntax: '<color>'; initial-value: #397C78; inherits: false; }
        @property --rg-color-4 { syntax: '<color>'; initial-value: #65B89B; inherits: false; }
        @property --rg-color-5 { syntax: '<color>'; initial-value: #0d1332; inherits: false; }
        @property --rg-border-angle { syntax: '<angle>'; initial-value: 180deg; inherits: true; }
        @property --rg-border-color-1 { syntax: '<color>'; initial-value: hsla(170, 50%, 70%, 0.6); inherits: true; }
        @property --rg-border-color-2 { syntax: '<color>'; initial-value: hsla(170, 40%, 30%, 0.3); inherits: true; }

        .radial-glow-btn {
          background: radial-gradient(
            var(--rg-spread-x) var(--rg-spread-y) at var(--rg-pos-x) var(--rg-pos-y),
            var(--rg-color-4) 0%, var(--rg-color-3) 20%, var(--rg-color-2) 45%, var(--rg-color-1) 70%
          );
          border: 1px solid transparent;
          background-clip: padding-box;
          position: relative;
          transition:
            --rg-pos-x 0.55s ease,
            --rg-pos-y 0.55s ease,
            --rg-spread-x 0.55s ease,
            --rg-spread-y 0.55s ease,
            --rg-color-1 0.55s ease,
            --rg-color-2 0.55s ease,
            --rg-color-3 0.55s ease,
            --rg-color-4 0.55s ease,
            --rg-border-angle 3s linear infinite,
            --rg-border-color-1 0.55s ease,
            --rg-border-color-2 0.55s ease;
        }

        .radial-glow-btn::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: linear-gradient(
            var(--rg-border-angle),
            var(--rg-border-color-1),
            var(--rg-border-color-2) 40%,
            var(--rg-border-color-1)
          );
          z-index: -1;
          animation: rg-border-rotate 3s linear infinite;
        }

        @keyframes rg-border-rotate {
          to { --rg-border-angle: 540deg; }
        }

        .radial-glow-btn:hover {
          --rg-pos-x: 50%;
          --rg-pos-y: 50%;
          --rg-spread-x: 160%;
          --rg-spread-y: 160%;
          --rg-color-1: #0d1332;
          --rg-color-2: #1a5a52;
          --rg-color-3: #65B89B;
          --rg-color-4: #a8e6cf;
          --rg-border-color-1: hsla(160, 70%, 80%, 0.9);
          --rg-border-color-2: hsla(160, 50%, 40%, 0.5);
        }
      `}</style>

      <Tag
        {...(tagProps as any)}
        className={`radial-glow-btn inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white shadow-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-finance-jade ${className}`}
        onClick={onClick}
      >
        {children}
      </Tag>
    </div>
  );
};
