import React from "react";
import { motion, type PanInfo } from "framer-motion";
import type { ProjectItemProps } from "../../interface/types";

interface StackedProjectCardProps {
  project: ProjectItemProps;
  offset: number;
  totalCards: number;
  onDismiss: () => void;
  isDark?: boolean;
}

export const StackedProjectCard: React.FC<StackedProjectCardProps> = ({
  project,
  offset,
  totalCards,
  onDismiss,
}) => {
  const isTop = offset === 0;

  // Derive visual depth math based on stack offset
  const scale = 1 - Math.min(offset, 3) * 0.04;
  const yTranslate = -Math.min(offset, 3) * 16;
  const rotate = -Math.min(offset, 3) * 2;
  const opacity = offset > 2 ? 0 : 1 - offset * 0.15;
  const zIndex = totalCards - offset;

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (!isTop) return;
    const swipeThreshold = 100;
    if (Math.abs(info.offset.x) > swipeThreshold) {
      onDismiss();
    }
  };

  return (
    <motion.div
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragSnapToOrigin
      onDragEnd={handleDragEnd}
      animate={{
        scale,
        y: yTranslate,
        rotate,
        opacity,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{ zIndex }}
      className={`absolute inset-0 w-full rounded-2xl p-6 shadow-xl dark:shadow-2xl flex flex-col justify-between select-none transition-colors duration-300
                  bg-white/75 dark:bg-neutral-900/40 
                  backdrop-blur-xl backdrop-saturate-150
                  border border-black/10 dark:border-white/10 ${
        isTop 
          ? "cursor-grab active:cursor-grabbing border-sunset-deep/60 dark:border-sunset-bright/50 shadow-sunset-deep/10" 
          : "pointer-events-none"
      }`}
    >
      <div>
        {/* Card Header & Visual Placeholder */}
        <div className="w-full aspect-video rounded-xl bg-white/60 dark:bg-neutral-950/40 backdrop-blur-md border border-black/5 dark:border-white/10 flex items-center justify-center text-neutral-600 dark:text-sunset-bright font-mono text-xs mb-5">
          [ {project.projectName} Visual ]
        </div>

        <div className="flex items-center justify-between gap-x-2 mb-3">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-sunset-deep">
            {project.projectName}
          </h3>
          <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-neutral-100/80 text-neutral-700 border border-neutral-300/80 dark:bg-neutral-950/60 dark:text-sunset-bright dark:border-sunset-dusk/50 backdrop-blur-xs">
            {project.projectStatus}
          </span>
        </div>

        <p className="text-neutral-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
          {project.projectDescription}
        </p>
      </div>

      {project.projectLink && (
        <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-wider text-sunset-deep dark:text-sunset-bright hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            Repository &rarr;
          </a>
          {isTop && (
            <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
              Drag horizontally to dismiss
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
};