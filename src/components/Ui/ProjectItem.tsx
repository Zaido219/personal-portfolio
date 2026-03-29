import {ProjectItemProps} from "../../interface/types"

const ProjectItem = ({projectName, projectDescription, projectLink, ...props} : ProjectItemProps) => {
    return (
        <div className="p-2 bg-gray-100 rounded-xl flex flex-col gap-1">
            <strong>{projectName}</strong>
            <p className="text-md">{projectDescription}</p>
            <div>
                <a href={projectLink}></a>
            </div>
        </div>
    );
};

export default ProjectItem;