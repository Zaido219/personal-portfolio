import BaseCard from "./Ui/Card";
import BaseSection from "./Ui/BaseSection";
import SectionHeader from "./Ui/SectionHeaderText";
import ProjectItem from "./Ui/ProjectItem";
import { ViewMore } from "./Ui/Navigations";
import {Projects} from "./../config/ProjectConstants";

const ProjectCard = () => {
  return (
    <BaseSection>
      <section className="max-w-lg">
        <BaseCard>
          <div className="flex justify-between items-center p-1">
            <SectionHeader title="Recent Projects" />
            <ViewMore />
          </div>
          <ul>
              {/* iterate over projects - create project item for each */}
              {
                Projects.map((item, index) => {
                  return (
                    <li>
                      <ProjectItem
                        projectName={item.projectName}
                        projectStatus={item.projectStatus}
                        projectDescription={item.projectDescription}
                        projectLink={item.projectLink}
                      ></ProjectItem>
                    </li>
                  )
                })
              }
          </ul>
        </BaseCard>
      </section>
    </BaseSection>
  );
};

export default ProjectCard;
