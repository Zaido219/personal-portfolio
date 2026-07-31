import { type TechStackItemProps} from "./../../interface/types";

const TechStackItem = ({field, name,icon, color, ...props}:TechStackItemProps) => {
  return(
    <div className="p-1 w-fit">
      <div>
        {icon}
      </div>
      {name}
    </div>
  );
};

export default TechStackItem;