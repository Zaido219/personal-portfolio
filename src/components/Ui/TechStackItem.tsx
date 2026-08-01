import { type TechStackItemProps} from "./../../interface/types";

const TechStackItem = ({ name, icon, color }: TechStackItemProps) => {
  return (
    <div className="flex flex-col items-center gap-3 p-1">
      {/* Apply the passed color string here */}
      <span 
        className="text-xl flex-shrink-0 flex items-center justify-center [&>svg]:w-7 md:[&>svg]:w-8 [&>svg]:h-7 md:[&>svg]:h-8"
        style={{ color: color ?? "currentColor" }}
      >
        {icon}
      </span>
      <span className="text-[10px] md:text-sm font-medium text-zinc-900 dark:text-zinc-300">{name}</span>
    </div>
  );
};

export default TechStackItem;