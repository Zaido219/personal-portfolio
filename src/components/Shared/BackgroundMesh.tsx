import React from "react";

export const BackgroundMesh: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-neutral-50 dark:bg-neutral-950 transition-colors duration-500">
      {/* Dynamic Sunset Gradient Definitions */}
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          {/* Light Mode Gradient: Deeper, saturated sunset strokes */}
          <linearGradient id="sunset-ribbon-grad-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B84305" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#EA6113" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F88F22" stopOpacity="0.3" />
          </linearGradient>

          {/* Dark Mode Gradient: Bright, glowing sunset strokes */}
          <linearGradient id="sunset-ribbon-grad-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EA6113" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#F88F22" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FBB931" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* --- LIGHT MODE MESH (Slightly crisper strokes) --- */}
        <g 
          stroke="url(#sunset-ribbon-grad-light)" 
          strokeWidth="1.2" 
          fill="none" 
          className="opacity-30 sm:opacity-40 blur-[1.5px] dark:hidden"
        >
          {Array.from({ length: 28 }).map((_, i: number) => {
            const step = i * 22;
            return (
              <path
                key={i}
                d={`M -200 ${100 + step} Q ${300 + i * 15} ${600 - i * 10}, ${1200 - step} -100`}
              />
            );
          })}
        </g>

        {/* --- DARK MODE MESH (Softer, wider ambient blur) --- */}
        <g 
          stroke="url(#sunset-ribbon-grad-dark)" 
          strokeWidth="0.8" 
          fill="none" 
          className="hidden dark:block opacity-20 sm:opacity-25 blur-[4px]"
        >
          {Array.from({ length: 28 }).map((_, i: number) => {
            const step = i * 22;
            return (
              <path
                key={i}
                d={`M -200 ${100 + step} Q ${300 + i * 15} ${600 - i * 10}, ${1200 - step} -100`}
              />
            );
          })}
        </g>
      </svg>

      {/* --- Light Mode Ambient Glow (Warm Peach/Amber tint) --- */}
      <div className="dark:hidden absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#FFE3B3]/60 via-[#FBB931]/20 to-[#EA6113]/10 blur-[140px] rounded-full pointer-events-none" />

      {/* --- Dark Mode Ambient Glow (Deep Orange/Red tint) --- */}
      <div className="hidden dark:block absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#EA6113]/10 blur-[150px] rounded-full pointer-events-none" />
    </div>
  );
};