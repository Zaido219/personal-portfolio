import type { MarqueeProps } from "../../interface/types";

export const Marquee = ({ className = "", speed = 120, children }: MarqueeProps) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap w-full ${className}`}>
      {/* Added 'flex' here to align the two buffers side-by-side */}
      <div 
        className="flex animate-marquee" 
        style={{ '--speed': `${speed}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center gap-2 md:gap-8 px-4">
          {children}
        </div>
        <div className="flex shrink-0 items-center gap-2 md:gap-8 px-4">
          {children}
        </div>
      </div>
    </div>
  );
}