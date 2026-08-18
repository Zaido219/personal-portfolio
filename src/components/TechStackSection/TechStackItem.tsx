import type { TechStackItemProps } from "../../interface/types";

const TechStackItem: React.FC<TechStackItemProps> = ({ name, icon, color }) => {
  return (
    <div className="group flex flex-col items-center justify-center gap-2 p-2 transition-transform duration-200 hover:-translate-y-1 cursor-pointer">
      {/* Icon Wrapper applying explicit brand color */}
      <div 
        className="text-3xl sm:text-4xl transition-transform duration-200 group-hover:scale-110"
        style={{ color: color ?? "currentColor" }}
      >
        {icon}
      </div>

      <span className="text-xs font-medium text-neutral-400 group-hover:text-[var(--color-sunset-peach)] transition-colors text-center line-clamp-1">
        {name}
      </span>
    </div>
  );
};

export default TechStackItem;