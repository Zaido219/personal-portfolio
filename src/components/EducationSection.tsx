import EducItems from "./Ui/EducationExpItems";
import { BaseSection } from "./Ui/Sections";
import SectionHeader from "./Ui/SectionHeaderText";
import { educationExperiences } from "./../config/constants";

const EducationExperienceSection = () => {
  return (
    <BaseSection>
      <SectionHeader title="Educations"></SectionHeader>
      <div className="flex flex-col gap-3">
        {educationExperiences.map((item, index) => {
          return <EducItems key={item.id || index} {...item}></EducItems>;
        })}
      </div>
    </BaseSection>
  );
};

export default EducationExperienceSection;
