import BaseCard from "./Ui/Card";
import BaseSection from "./Ui/BaseSection";
import SectionHeader from "./Ui/SectionHeaderText";
import ProjectItem from "./Ui/ProjectItem";
import { ViewMore } from "./Ui/Navigations";
import {Projects} from "./../config/ProjectConstants";

const ProjectCard = () => {
  return (
    <BaseSection>
      <section className="min-w-xs overflow-hidden">
        <BaseCard>
          <div className="w-84 flex gap-20 items-center">
            <SectionHeader title="Recent Projects" />
            <ViewMore />
          </div>
          <ul className="max-h-120 md:max-h-174 overflow-y-auto">
              {/* iterate over projects - create project item for each */}
              {
                Projects.map((item, index) => {
                  return (
                    <li className="p-1 w-80 rounded-sm">
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
