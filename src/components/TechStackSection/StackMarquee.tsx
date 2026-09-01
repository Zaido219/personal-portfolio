import React, { useState } from "react";
import { motion } from "framer-motion";
import type { TechStackItemProps } from "../../interface/types";

interface TechMarqueeProps {
  items: TechStackItemProps[];
  direction?: "left" | "right";
  speedInSeconds?: number;
}

export const TechMarquee: React.FC<TechMarqueeProps> = ({
  items,
  direction = "left",
  speedInSeconds = 20,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate items array to support infinite scrolling loops
  const duplicatedItems = [...items, ...items];

  return (
    <div
      className="relative w-full overflow-x-auto scrollbar-none py-2 cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex items-center gap-4 w-max"
        animate={
          isHovered
            ? { x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }
            : {} // Hand back full control to natural horizontal scroll wheel/drag when unhovered
        }
        transition={{
          ease: "linear",
          duration: speedInSeconds,
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:scale-110 transition-transform duration-200 shrink-0 [&>svg]:w-6 [&>svg]:h-6 select-none"
            style={{ color: item.color ?? "currentColor" }}
            title={item.name}
          >
            {item.icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
};