import { type WorkExperienceItemProps } from "./../../interface/types";
import { HoverCards } from "./Cards";

const WorkExperienceItem = ({
  workTitle,
  workCompany,
  startDate,
  endDate,
}: WorkExperienceItemProps) => {
  return (
    <HoverCards>
      <div className="flex flex-col gap-1 p-1 rounded-md w-xs md:w-md">
        <strong className="p-1 text-lg md:text-md">{workTitle}</strong>
        <div className="flex justify-between gap-1 p-1">
          <p className="text-md md:text-sm">{workCompany}</p>
          <div className="text-md md:text-sm flex justify-between gap-2">
            <span className="bg-gray-200 text-xs p-1 rounded-md">
              {startDate} - {endDate}
            </span>
          </div>
        </div>
      </div>
    </HoverCards>
  );
};

export default WorkExperienceItem;
