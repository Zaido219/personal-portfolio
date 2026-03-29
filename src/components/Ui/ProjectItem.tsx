import {ProjectItemProps} from "../../interface/types"

const ProjectItem = ({projectName, projectDescription, projectLink, ...props} : ProjectItemProps) => {
    return (
        <div>
            <p>{projectName}</p>
            <p>{projectDescription}</p>
            <div>
                <a href={projectLink}></a>
            </div>
        </div>
    );
};

export default ProjectItem;