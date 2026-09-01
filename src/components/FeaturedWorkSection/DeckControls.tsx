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
  <div className="flex items-center justify-between mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800/60 transition-colors duration-300">
    {/* Dot Indicators */}
    <div className="flex items-center gap-x-2">
      {Array.from({ length: total }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(idx)}
          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
            idx === activeIndex
              ? "w-6 bg-sunset-bright"
              : "w-2 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-500"
          }`}
          aria-label={`Go to project ${idx + 1}`}
        />
      ))}
    </div>

    {/* Arrow Controls */}
    <div className="flex items-center gap-x-2">
      <button
        onClick={onPrev}
        className="p-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 border-neutral-300 text-neutral-700 hover:text-neutral-950 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-800 dark:text-neutral-400 dark:hover:text-white border hover:border-sunset-deep dark:hover:border-sunset-deep transition-all cursor-pointer"
        aria-label="Previous Project"
      >
        &larr;
      </button>
      <button
        onClick={onNext}
        className="p-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 border-neutral-300 text-neutral-700 hover:text-neutral-950 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-800 dark:text-neutral-400 dark:hover:text-white border hover:border-sunset-deep dark:hover:border-sunset-deep transition-all cursor-pointer"
        aria-label="Next Project"
      >
        &rarr;
      </button>
    </div>
  </div>
);