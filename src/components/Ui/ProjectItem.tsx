import {ProjectItemProps} from "../../interface/types"

const ProjectItem = ({projectName, projectDescription, projectLink, ...props} : ProjectItemProps) => {
    return (
        <div className="p-2 bg-gray-100 rounded-xl flex flex-col gap-1 transition duration-200 ease-in-out hover:scale-105 hover:bg-gray-300">
            <strong className="text-md">{projectName}</strong>
            <p className="text-sm">{projectDescription}</p>
            <div className="cursor-pointer">
                <a className="text-xs bg-gray-200 p-1 rounded-lg" href={projectLink}>View Project</a>
            </div>
        </div>
    );
};

export default ProjectItem;