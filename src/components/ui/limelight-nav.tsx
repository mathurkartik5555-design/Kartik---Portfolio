import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, FileText, TrendingUp, Cpu, Award, Mail, Layers } from "lucide-react";

export interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface LimelightNavProps {
  items?: NavItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  className?: string;
  spotlightColor?: string;
}

const defaultNavItems: NavItem[] = [
  { id: "hero", icon: <Home className="w-4 h-4" />, label: "Home", href: "#hero" },
  { id: "research", icon: <FileText className="w-4 h-4" />, label: "Research", href: "#research" },
  { id: "vrl-logistics", icon: <TrendingUp className="w-4 h-4" />, label: "VRL Model", href: "#vrl-logistics" },
  { id: "projects", icon: <Cpu className="w-4 h-4" />, label: "AI Tools", href: "#projects" },
  { id: "skills", icon: <Layers className="w-4 h-4" />, label: "Skills", href: "#skills" },
  { id: "credentials", icon: <Award className="w-4 h-4" />, label: "Credentials", href: "#credentials" },
  { id: "contact", icon: <Mail className="w-4 h-4" />, label: "Contact", href: "#contact" },
];

/**
 * LimelightNav — Floating spotlight/limelight navigation dock.
 * Features an active glowing spotlight beam and radiant reflection that
 * tracks the selected item with spring physics.
 */
export const LimelightNav: React.FC<LimelightNavProps> = ({
  items = defaultNavItems,
  activeId,
  onSelect,
  className = "",
  spotlightColor = "rgba(47, 230, 222, 0.35)",
}) => {
  const [internalActive, setInternalActive] = useState<string>(
    activeId || (items[0]?.id ?? "home")
  );

  const currentActive = activeId !== undefined ? activeId : internalActive;

  const handleItemClick = (item: NavItem) => {
    setInternalActive(item.id);
    if (onSelect) onSelect(item.id);
    if (item.onClick) item.onClick();
  };

  return (
    <nav
      aria-label="Portfolio Navigation"
      className={`relative inline-flex items-center gap-1 p-1.5 rounded-2xl bg-finance-petrol/75 backdrop-blur-2xl border border-finance-teal/30 shadow-[0_12px_40px_rgba(0,0,0,0.45)] ${className}`}
    >
      {items.map((item) => {
        const isActive = currentActive === item.id;
        const Component = (item.href ? "a" : "button") as "a" | "button";
        const componentProps = item.href
          ? { href: item.href }
          : { type: "button" as const };

        return (
          <Component
            key={item.id}
            {...(componentProps as any)}
            onClick={() => handleItemClick(item)}
            className={`relative group px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-xs font-mono font-medium transition-all duration-250 select-none outline-none focus-visible:ring-1 focus-visible:ring-finance-teal/60 whitespace-nowrap ${
              isActive
                ? "text-white"
                : "text-finance-mist/75 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            {/* The Limelight Spotlight Beam */}
            {isActive && (
              <motion.div
                layoutId="limelight-spotlight"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
                className="absolute inset-0 rounded-xl pointer-events-none"
              >
                {/* Top Spotlight Source Glow */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full blur-[2px]"
                  style={{
                    backgroundColor: "#2FE6DE",
                    boxShadow: "0 0 14px 3px rgba(47, 230, 222, 0.75)",
                  }}
                />

                {/* Light Cone radiating downward */}
                <div
                  className="absolute inset-x-0 -top-3 h-full rounded-xl pointer-events-none opacity-60"
                  style={{
                    background: `radial-gradient(ellipse at 50% -10%, ${spotlightColor} 0%, rgba(47, 230, 222, 0.08) 55%, transparent 80%)`,
                  }}
                />

                {/* Highlight Pill Backdrop */}
                <div className="absolute inset-0 rounded-xl bg-finance-teal/15 border border-finance-teal/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]" />
              </motion.div>
            )}

            {/* Icon */}
            <span
              className={`relative z-10 transition-transform duration-200 shrink-0 ${
                isActive ? "text-finance-teal scale-110" : "group-hover:scale-105"
              }`}
            >
              {item.icon}
            </span>

            {/* Label */}
            <span className="relative z-10 hidden sm:inline-block tracking-wide whitespace-nowrap">
              {item.label}
            </span>

            {/* Small active dot indicator */}
            {isActive && (
              <motion.span
                layoutId="limelight-dot"
                className="relative z-10 w-1 h-1 rounded-full bg-finance-teal shadow-[0_0_6px_#2FE6DE]"
              />
            )}
          </Component>
        );
      })}
    </nav>
  );
};

export default LimelightNav;
