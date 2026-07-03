import { type ProjectItemProps} from "../../interface/types"

const ProjectItem = ({projectName, projectDescription, projectLink,projectStatus, ...props} : ProjectItemProps) => {
    return (
        <div className="h-fit p-2 bg-gray-100 rounded-xl flex flex-col gap-1 transition duration-200 ease-in-out hover:scale-105 hover:bg-gray-300">
            <strong className="text-md md:text-md dark:text-black">{projectName}</strong>
            <p className="text-sm md:text-sm bg-slate-200 w-fit p-1 rounded-lg dark:text-black">{projectStatus}</p>
            <p className="text-sm md:text-sm bg-slate-200 dark:text-black">{projectDescription}</p>
            <div className="cursor-pointer">
                <a className="text-xs md:text-xs p-1 rounded-lg bg-slate-300 dark:text-black" href={projectLink}>View Project</a>
            </div>
        </div>
    );
};

export default ProjectItem;