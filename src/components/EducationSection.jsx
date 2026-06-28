import EducItems from "./Ui/EducationExpItems";
import BaseSection from "./Ui/BaseSection";
import SectionHeader from "./Ui/SectionHeaderText";
import { educationExperiences } from "../config/constants";
// 1. Correct Relative Pathing to target your file in the subfolder

const EducationExperienceSection = () => {
  return (
    <div className="flex flex-col items-center">
      <SectionHeader title="Educations"></SectionHeader>
      <div className="flex flex-col gap-3 p-3 min-w-full items-center">
        {educationExperiences.map((item, index) => {
          return <EducItems key={item.id || index} {...item}></EducItems>;
        })}
      </div>
    </div>
  );
};

export default EducationExperienceSection;
