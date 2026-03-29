import BaseCard from "./Ui/Card";
import BaseSection from "./Ui/BaseSection";
import SectionHeader from "./Ui/SectionHeaderText";
import ProjectItem  from "./Ui/ProjectItem";

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
              <ProjectItem projectName="Gadinsight"
                projectDescription = "A data Analytics system for the Gender Development Office at Basc"
                >
              </ProjectItem>
            </li>
            <li>
              <ProjectItem projectName="Simpy Chat"
                projectDescription = "My crude implementation of multi user chat application with JWT tokens."
                >
              </ProjectItem>
            </li>
            <li>
                <ProjectItem projectName="Simpy Chat"
                projectDescription = "My crude implementation of multi user chat application with JWT tokens."
                >
              </ProjectItem>
            </li>
          </ul>
        </BaseCard>
      </section>
    </BaseSection>
  );
};

export default ProjectCard;
