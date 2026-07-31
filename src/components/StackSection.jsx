import SectionHeader  from "./Ui/SectionHeaderText";
import {techStacks} from "./../config/TechStacks";
import TechStackItem from "./Ui/TechStackItem";

const StackSection = () => {
  return (
    <div>
      <SectionHeader title="Tech Stack" />
      <div>
        {
          // map over the items on tech stack and then create an item
          techStacks.map((item,index)=>{
            return(
              <TechStackItem 
                field={item.field}
                name={item.name}
                icon={item.icon}
                color={item.color}
              ></TechStackItem>
            )
          })
        }
      </div>
    </div>
  );
};

export default StackSection;
