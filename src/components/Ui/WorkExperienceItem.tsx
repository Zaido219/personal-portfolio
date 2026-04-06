import {WorkExperienceItemProps} from "./../../interface/types"

const WorkExperienceItem = ({workTitle, workCompany, startDate, endDate}:WorkExperienceItemProps) =>{
    return(
        <div>
            <p>{workTitle}</p>
            <div>
                <p>{workCompany}</p>
                <div>
                    <span>{startDate}</span>
                    <span>{endDate}</span>
                </div>
            </div>
        </div>
    );
};

export default WorkExperienceItem;