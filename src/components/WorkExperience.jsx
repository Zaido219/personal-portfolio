import BaseSection from "./Ui/BaseSection";
import SectionHeader from "./Ui/SectionHeaderText";
import WorkExperienceItem from "./Ui/WorkExperienceItem";

const WorkExperienceSection = () => {
  return (
    <BaseSection>
        <SectionHeader
            title="Experiences"
        />
      <ul className="flex flex-col gap-3 border-l-2 border-zinc-800 pl-4">
        {/* loop para di isa isa nakaka tamad */}
      </ul>
    </BaseSection>
  );
};

export default WorkExperienceSection;
