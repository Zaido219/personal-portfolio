import { type ProjectItemProps} from "../../interface/types"

const ProjectItem = ({projectName, projectDescription, projectLink,projectStatus, ...props} : ProjectItemProps) => {
    return (
        <div className="h-fit p-2 bg-gray-100 dark:bg-zinc-900 rounded-xl flex flex-col gap-1 transition duration-200 ease-in-out hover:scale-105 hover:bg-gray-300 dark:hover:bg-zinc-800">
            <strong className="text-md md:text-md dark:text-white">{projectName}</strong>
            <p className="text-sm md:text-sm bg-slate-200 dark:bg-zinc-900 w-fit p-1 rounded-lg dark:text-white">{projectStatus}</p>
            <p className="text-sm md:text-xs p-2 rounded-lg bg-slate-200 dark:bg-zinc-900 dark:text-white">{projectDescription}</p>
            <div className="cursor-pointer">
                <a className="text-xs md:text-xs p-1 rounded-lg bg-slate-300 dark:bg-zinc-900 dark:text-white" href={projectLink}>View Project</a>
            </div>
        </div>
    );
};

export default ProjectItem;