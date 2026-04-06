import BaseSection from "./Ui/BaseSection";
import SectionHeader from "./Ui/SectionHeaderText";
import WorkExperienceItem from "./Ui/WorkExperienceItem";
import { workExperiences } from "../config/constants";

const WorkExperienceSection = () => {
  return (
    <BaseSection>
      <SectionHeader title="Experiences" />
      <ul className="flex flex-col gap-3">
        {/* loop para di isa isa nakaka tamad */}
        {workExperiences.map((item, index) => {
          return (
            <li>
              <WorkExperienceItem
                workTitle={item.title}
                workCompany={item.company}
                startDate={item.startYear}
                endDate={item.endYear}
              ></WorkExperienceItem>
            </li>
          );
        })}
      </ul>
    </BaseSection>
  );
};

export default WorkExperienceSection;
