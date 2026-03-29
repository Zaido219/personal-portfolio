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
            <li>
              <div>
                <p>Gadinsight</p>
                <p>A data analytics system for the Gender And Development Office at BASC</p>
              </div>
            </li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </BaseCard>
      </section>
    </BaseSection>
  );
};

export default ProjectCard;
