import BaseCard from "./Ui/Card";
import BaseSection from "./Ui/BaseSection";
import SectionHeader from "./Ui/SectionHeaderText";
import ProjectItem  from "./Ui/ProjectItem";
import { ViewMore } from "./Ui/Navigations";

const ProjectCard = () => {
  return (
    <BaseSection>
      <section className="max-w-lg">
        <BaseCard>
          <div className="flex justify-between items-center p-1">
            <SectionHeader
                title="Recent Projects"
            /> 
            <ViewMore/> 
          </div>
          <ul className="flex flex-col gap-2">
            <li>
                <ProjectItem projectName="Project Photo Booth"
                projectDescription = "A simple photo booth app on the browser"
                >
              </ProjectItem>
            </li>
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
