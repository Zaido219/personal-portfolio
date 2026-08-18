import type { TechStackItemProps } from "../../interface/types";

const TechStackItem: React.FC<TechStackItemProps> = ({ name, icon }) => {
  return (
    <div className="group flex flex-col items-center justify-center gap-2 p-2 transition-transform duration-200 hover:-translate-y-1 cursor-pointer">
      {/* Icon Node - Retains natural brand colors without background boxes */}
      <div className="text-3xl sm:text-4xl transition-transform duration-200 group-hover:scale-110">
        {icon}
      </div>

      {/* Label styled with Sunset theme micro-typography */}
      <span className="text-xs font-medium text-neutral-400 group-hover:text-[var(--color-sunset-peach)] transition-colors text-center line-clamp-1">
        {name}
      </span>
    </div>
  );
};

export default TechStackItem;