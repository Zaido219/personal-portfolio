import BaseCard from "./Card";

const ProjectCard = () => {
  return (
    <section className="max-w-lg">
      <BaseCard>
        <div>
          <h2>Recent Projects</h2>
        </div>

        <ul className="flex flex-col gap-2">
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
        </ul>
      </BaseCard>
    </section>
  );
};

export default ProjectCard;
