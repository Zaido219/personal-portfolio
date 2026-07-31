import { type TechStackItemProps} from "./../../interface/types";

const TechStackItem = ({field, name,icon, color, ...props}:TechStackItemProps) => {
  return(
    <div>
      {name}
    </div>
  );
};

export default TechStackItem;