import { type TechStackItemProps} from "./../../interface/types";

const TechStackItem: React.FC<TechStackItemProps> = ({ name, icon }) => {
  return (
    <div 
      title={name}
      className="group relative flex items-center justify-center h-11 w-11 sm:h-12 sm:w-12 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[var(--color-sunset-bright)]/60 hover:bg-neutral-800/90 hover:scale-105 transition-all duration-200 shadow-md cursor-pointer"
    >
      <div className="text-2xl transition-transform duration-200 group-hover:scale-110">
        {icon}
      </div>

      {/* Subtle Tooltip on Hover */}
      <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px] font-mono font-medium text-white bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800 pointer-events-none whitespace-nowrap z-10 shadow-lg">
        {name}
      </span>
    </div>
  );
};

export default TechStackItem;