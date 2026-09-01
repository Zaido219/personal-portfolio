import type { TechStackItemProps } from "../../interface/types";

const TechStackItem: React.FC<TechStackItemProps> = ({ name, icon, color }) => {
  return (
    <div className="group flex flex-col items-center justify-center gap-2 p-2 transition-transform duration-200 hover:-translate-y-1 cursor-pointer">
      {/* [&>svg] forces width and height directly onto the rendered Simple Icon */}
      <div 
        className="[&>svg]:w-10 [&>svg]:h-10 sm:[&>svg]:w-12 sm:[&>svg]:h-12 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center"
        style={{ color: color ?? "currentColor" }}
      >
        {icon}
      </div>

      <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400 group-hover:text-sunset-peach transition-colors text-center line-clamp-1">
        {name}
      </span>
    </div>
  );
};

export default TechStackItem;