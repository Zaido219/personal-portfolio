import React from "react";

interface DeckControlsProps {
  total: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const DeckControls: React.FC<DeckControlsProps> = ({
  total,
  activeIndex,
  onSelect,
  onNext,
  onPrev,
}) => (
  <div className="flex items-center justify-between mt-8 pt-4 border-t border-neutral-800/60">
    <div className="flex items-center gap-x-2">
      {Array.from({ length: total }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(idx)}
          className={`h-2 rounded-full transition-all duration-300 ${
            idx === activeIndex
              ? "w-6 bg-sunset-bright"
              : "w-2 bg-neutral-700 hover:bg-neutral-500"
          }`}
          aria-label={`Go to project ${idx + 1}`}
        />
      ))}
    </div>
    <div className="flex items-center gap-x-2">
      <button
        onClick={onPrev}
        className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-sunset-deep transition-all"
        aria-label="Previous Project"
      >
        &larr;
      </button>
      <button
        onClick={onNext}
        className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-sunset-deep transition-all"
        aria-label="Next Project"
      >
        &rarr;
      </button>
    </div>
  </div>
);
