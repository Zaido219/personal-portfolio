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
  const duplicatedItems = [...items, ...items];

  return (
    <div
      className="relative w-full overflow-x-auto thin-scrollbar py-2 cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex items-center gap-4 w-max"
        animate={
          isHovered
            ? { x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }
            : {}
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
            /* 'isolate' traps local z-indexing */
            className="group relative isolate flex items-center justify-center w-12 h-12 rounded-xl shrink-0 select-none"
            title={item.name}
          >
            {/* 1. Ambient Backlight Layer (Pushed outward with negative inset) */}
            <div
              className="absolute -inset-1.5 rounded-xl opacity-30 dark:opacity-50 blur-md group-hover:opacity-60 dark:group-hover:opacity-80 transition-opacity duration-300 pointer-events-none -z-10"
              style={{
                backgroundColor: item.color ?? "var(--color-sunset-bright)",
              }}
            />

            {/* 2. Solid Tile Container (Blocks light from showing through the face) */}
            <div className="w-full h-full rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm flex items-center justify-center hover:scale-105 transition-transform duration-200">
              {/* 3. SVG Icon */}
              <div
                className="[&>svg]:w-6 [&>svg]:h-6 flex items-center justify-center"
                style={{ color: item.color ?? "currentColor" }}
              >
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
