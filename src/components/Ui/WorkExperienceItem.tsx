import {WorkExperienceItemProps} from "./../../interface/types"

const WorkExperienceItem = ({workTitle, workCompany, startDate, endDate}:WorkExperienceItemProps) =>{
    return(
        <div className="flex flex-col gap-1 p-1 rounded-md w-sm bg-gray-100 hover:bg-blue-300 transition duration-200 ease-in-out hover:scale-105">
            <strong className="p-1 text-md">{workTitle}</strong>
            <div className="flex justify-between gap-1 p-1">
                <p className="text-sm">{workCompany}</p>
                <div className="text-sm flex justify-between gap-2">
                    <span>{startDate} - {endDate}</span>
                </div>
            </div>
        </div>
    );
};

export default WorkExperienceItem;