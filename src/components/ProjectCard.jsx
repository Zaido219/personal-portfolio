import BaseCard from "./Ui/Card";
import BaseSection from "./Ui/BaseSection";
import SectionHeader from "./Ui/SectionHeaderText";

const ProjectCard = () => {
  return (
    <BaseSection>
      <section className="max-w-lg">
        <BaseCard>
          <div>
            <SectionHeader
                title="Recent Projects"
            />  
          </div>
          <ul className="flex flex-col gap-2">
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </BaseCard>
      </section>
    </BaseSection>
  );
};

export default ProjectCard;
