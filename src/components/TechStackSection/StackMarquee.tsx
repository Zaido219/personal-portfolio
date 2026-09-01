import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { TechStackItemProps } from "../../interface/types";

interface TechMarqueeProps {
  items: TechStackItemProps[];
  direction?: "left" | "right";
  speedInSeconds?: number;
  onItemHover?: (color: string | null) => void;
}

export const TechMarquee: React.FC<TechMarqueeProps> = ({
  items,
  direction = "left",
  speedInSeconds = 20,
  onItemHover,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [supportsHover, setSupportsHover] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setSupportsHover(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setSupportsHover(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const displayItems = supportsHover ? [...items, ...items] : items;

  return (
    <div
      className="relative w-full overflow-x-auto thin-scrollbar py-2 cursor-grab active:cursor-grabbing"
      onMouseEnter={() => supportsHover && setIsHovered(true)}
      onMouseLeave={() => {
        if (supportsHover) {
          setIsHovered(false);
          onItemHover?.(null); // Clear color on leave
        }
      }}
    >
      <motion.div
        className="flex items-center gap-6 w-max"
        animate={
          supportsHover && isHovered
            ? { x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }
            : {}
        }
        transition={{
          ease: "linear",
          duration: speedInSeconds,
          repeat: Infinity,
        }}
      >
        {displayItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:scale-105 transition-transform duration-200 shrink-0 select-none"
            title={item.name}
            onMouseEnter={() => onItemHover?.(item.color ?? null)}
          >
            <div
              className="[&>svg]:w-6 [&>svg]:h-6 flex items-center justify-center"
              style={{ color: item.color ?? "currentColor" }}
            >
              {item.icon}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};