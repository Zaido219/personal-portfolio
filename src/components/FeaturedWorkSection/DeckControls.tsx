import React from "react";

interface DeckControlsProps {
  total: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
  isDark?: boolean;
}

export const DeckControls: React.FC<DeckControlsProps> = ({
  total,
  activeIndex,
  onSelect,
  onNext,
  onPrev,
}) => (
  <div className="flex items-center justify-between mt-8 pt-4 border-t border-black/10 dark:border-white/10 transition-colors duration-300">
    {/* Dot Indicators */}
    <div className="flex items-center gap-x-2">
      {Array.from({ length: total }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(idx)}
          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
            idx === activeIndex
              ? "w-6 bg-sunset-deep dark:bg-sunset-bright shadow-[0_0_12px_rgba(234,97,19,0.4)]"
              : "w-2 bg-neutral-300 hover:bg-neutral-400 dark:bg-white/20 dark:hover:bg-white/40"
          }`}
          aria-label={`Go to project ${idx + 1}`}
        />
      ))}
    </div>

    {/* Arrow Controls */}
    <div className="flex items-center gap-x-2">
      <button
        onClick={onPrev}
        className="p-2.5 rounded-full transition-all duration-200 cursor-pointer
                   bg-white/60 hover:bg-white/90 dark:bg-neutral-900/30 dark:hover:bg-neutral-900/60
                   backdrop-blur-md backdrop-saturate-150
                   border border-black/10 hover:border-sunset-deep dark:border-white/10 dark:hover:border-sunset-deep
                   text-neutral-700 hover:text-sunset-deep dark:text-neutral-300 dark:hover:text-white
                   shadow-xs hover:shadow-md"
        aria-label="Previous Project"
      >
        &larr;
      </button>
      <button
        onClick={onNext}
        className="p-2.5 rounded-full transition-all duration-200 cursor-pointer
                   bg-white/60 hover:bg-white/90 dark:bg-neutral-900/30 dark:hover:bg-neutral-900/60
                   backdrop-blur-md backdrop-saturate-150
                   border border-black/10 hover:border-sunset-deep dark:border-white/10 dark:hover:border-sunset-deep
                   text-neutral-700 hover:text-sunset-deep dark:text-neutral-300 dark:hover:text-white
                   shadow-xs hover:shadow-md"
        aria-label="Next Project"
      >
        &rarr;
      </button>
    </div>
  </div>
);