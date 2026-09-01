import React from "react";

export const BackgroundMesh: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-neutral-950">
      {/* Dynamic Sunset Gradient Definitions */}
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="sunset-ribbon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EA6113" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#F88F22" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FBB931" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Abstract Ribbon Mesh with Soft Blur & Low Opacity */}
        <g 
          stroke="url(#sunset-ribbon-grad)" 
          strokeWidth="0.8" 
          fill="none" 
          className="opacity-20 sm:opacity-25 blur-[4px]"
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

      {/* Ambient Depth Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#EA6113]/10 blur-[150px] rounded-full pointer-events-none" />
    </div>
  );
};