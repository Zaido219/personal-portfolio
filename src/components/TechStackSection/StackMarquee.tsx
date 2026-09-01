import React, { useState, useEffect } from "react";
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
  const [supportsHover, setSupportsHover] = useState(true);

  // Detect pointer capability to handle mobile touch gracefully
  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setSupportsHover(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setSupportsHover(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Only duplicate items if device supports hover marquees
  const displayItems = supportsHover ? [...items, ...items] : items;

  return (
    <div
      className="relative w-full overflow-x-auto thin-scrollbar py-2 cursor-grab active:cursor-grabbing"
      onMouseEnter={() => supportsHover && setIsHovered(true)}
      onMouseLeave={() => supportsHover && setIsHovered(false)}
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
  /* 1. Outer Wrapper (Establishes boundary context) */
  <div
    key={`${item.name}-${idx}`}
    className="group relative isolate w-12 h-12 shrink-0 select-none"
    title={item.name}
  >
    {/* 2. Glow Layer (Extends slightly outward behind the tile) */}
    <div
      className="absolute -inset-1.5 rounded-xl opacity-40 dark:opacity-60 blur-md group-hover:opacity-80 transition-opacity duration-300 pointer-events-none -z-10"
      style={{ backgroundColor: item.color ?? "var(--color-sunset-bright)" }}
    />

    {/* 3. Solid Opaque Tile (Blocks all internal light, forcing glow outward) */}
    <div className="relative z-10 w-full h-full rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm flex items-center justify-center hover:scale-105 transition-transform duration-200">
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