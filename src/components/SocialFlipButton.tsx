import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export interface SocialItem {
  letter: string;
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}

interface SocialFlipButtonProps {
  items: SocialItem[];
  className?: string;
}

const SocialFlipNode: React.FC<{
  item: SocialItem;
  index: number;
  isParentHovered: boolean;
}> = ({ item, index, isParentHovered }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Wrapper = item.href ? "a" : "div";
  const isExternal = item.href ? item.href.startsWith("http") : false;
  const wrapperProps = item.href
    ? {
        href: item.href,
        ...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {}),
      }
    : { onClick: item.onClick };

  return (
    <Wrapper
      {...(wrapperProps as any)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-pointer select-none z-10 block"
      style={{ perspective: "600px" }}
    >
      <motion.div
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateX: isHovered ? -90 : 0 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-11 h-11"
      >
        {/* Front face – letter */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-xl
            bg-finance-petrol/80 border border-finance-teal/30 
            text-finance-mist text-sm font-display font-bold
            shadow-lg backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {item.letter}
        </div>

        {/* Back face – icon */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-xl
            bg-finance-jade/90 border border-finance-jade
            text-finance-base text-base
            shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateX(90deg)",
          }}
        >
          {item.icon}
        </div>
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-0.5 rounded-md bg-finance-base/95 border border-finance-teal/30 text-[10px] font-mono text-finance-jade whitespace-nowrap z-20"
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export const SocialFlipButton: React.FC<SocialFlipButtonProps> = ({
  items,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {items.map((item, i) => (
        <SocialFlipNode
          key={i}
          item={item}
          index={i}
          isParentHovered={isHovered}
        />
      ))}
    </div>
  );
};

// Preset social items builder
export function buildSocialItems(data: {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}): SocialItem[] {
  return [
    { letter: "L", icon: <FaLinkedin />, label: "LinkedIn", href: data.linkedin },
    { letter: "G", icon: <FaGithub />, label: "GitHub", href: data.github },
    { letter: "E", icon: <FaEnvelope />, label: "Email", href: `mailto:${data.email}` },
    { letter: "P", icon: <FaPhone />, label: "Phone", href: `tel:${data.phone}` },
  ];
}
