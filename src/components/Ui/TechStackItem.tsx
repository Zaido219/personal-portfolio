import { type TechStackItemProps} from "./../../interface/types";

const TechStackItem = ({ name, icon, color }: TechStackItemProps) => {
  return (
    <div className="flex items-center gap-2 p-1">
      {/* Apply the passed color string here */}
      <span 
        className="text-xl flex-shrink-0 flex items-center justify-center [&>svg]:w-10 [&>svg]:h-10"
        style={{ color: color ?? "currentColor" }}
      >
        {icon}
      </span>
      <span className="text-sm font-medium text-zinc-900">{name}</span>
    </div>
  );
};

export default TechStackItem;