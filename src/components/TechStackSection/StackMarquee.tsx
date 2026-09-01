import React from "react";
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
  speedInSeconds = 25,
}) => {
  // Duplicate array to enable seamless 0% -> -50% loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex items-center gap-4 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          ease: "linear",
          duration: speedInSeconds,
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-md dark:shadow-none hover:scale-105 transition-transform duration-200 shrink-0 [&>svg]:w-8 [&>svg]:h-8 sm:[&>svg]:w-10 sm:[&>svg]:h-10"
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