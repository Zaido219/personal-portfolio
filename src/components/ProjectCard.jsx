import BaseCard from "./Ui/Card";
import BaseSection from "./Ui/BaseSection";
import SectionHeader from "./Ui/SectionHeaderText";
import ProjectItem from "./Ui/ProjectItem";
import { ViewMore } from "./Ui/Navigations";

const ProjectCard = () => {
  return (
    <BaseSection>
      <section className="max-w-lg">
        <BaseCard>
          <div className="flex justify-between items-center p-1">
            <SectionHeader title="Recent Projects" />
            <ViewMore />
          </div>
          <ul className="flex flex-col gap-2 h-80 md:h-184 overflow-y-auto overflow-x-hidden p-1">
            <li>
              <ProjectItem
                projectName="Project Photo Booth"
                projectDescription="A simple photo booth app on the browser"
                projectLink="https://photobooth-app-three.vercel.app/"
              ></ProjectItem>
            </li>
            <li>
              <ProjectItem
                projectName="Gadinsight"
                projectDescription="A data Analytics system for the Gender Development Office at Basc"
                projectLink="https://www.gadinsight.com/"
              ></ProjectItem>
            </li>
            <li>
              <ProjectItem
                projectName="Simpy Chat"
                projectDescription="My crude implementation of multi user chat application with JWT tokens."
                projectLink="https://github.com/Zaido219/simple-chat-app"
              ></ProjectItem>
            </li>
            <li>
              <ProjectItem
                projectName="Ascii Video Player"
                projectDescription="Terminal based video player that renders video in ascii"
              ></ProjectItem>
            </li>
            <li>
              <ProjectItem
                projectName="DiceRollSimWithStats"
                projectDescription="A console application that simulates rolling of dice, and return statistics about the results"
              ></ProjectItem>
            </li>
            <li>
              <ProjectItem
                projectName="Generic Library System"
                projectDescription="A generic library system created for a school project."
              ></ProjectItem>
            </li>
            <li>
              <ProjectItem
                projectName="Unit Converter"
                projectDescription="A crude unit converter made with C# GUI"
              ></ProjectItem>
            </li>
            <li>
              <ProjectItem
                projectName="drowsiness-alert"
                projectDescription="A simply project that involves computer vision that alerts if the user's eye is shut"
              ></ProjectItem>
            </li>
            <li>
              <ProjectItem
                projectName="qoute-generator"
                projectDescription="A simple web app that returns a random qoute. This project uses an api-key less api to generate the qoutes."
              ></ProjectItem>
            </li>
            <li>
              <ProjectItem
                projectName="Dswd Document Support"
                projectDescription="A web app aimed to streamline document submission and processing for the dswd office of san ildefonso bulacan."
              ></ProjectItem>
            </li>
          </ul>
        </BaseCard>
      </section>
    </BaseSection>
  );
};

export default ProjectCard;
