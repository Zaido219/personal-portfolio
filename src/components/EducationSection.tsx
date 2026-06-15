import EducItems from "./Ui/EducationExpItems";
import { BaseSection } from "./Ui/Sections";
import  SectionHeader from "./Ui/SectionHeaderText";
import {educationExperiences} from "./../config/constants";

const EducationExperienceSection = () => {
    return (
      <BaseSection>
        <SectionHeader title="Educations"></SectionHeader>
        {educationExperiences.map((item, index) => {
          return <EducItems key={item.id || index} {...item}></EducItems>;
        })}
      </BaseSection>
    );
}

export default EducationExperienceSection;