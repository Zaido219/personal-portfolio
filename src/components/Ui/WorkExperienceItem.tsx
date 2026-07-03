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
      <div className="flex flex-col md:gap-1 p-1 rounded-md w-xs md:w-md">
        <strong className="p-1 text-md md:text-md dark:text-black">{workTitle}</strong>
        <div className="flex justify-between gap-1 p-1">
          <p className="text-sm md:text-sm dark:text-black">{workCompany}</p>
          <div className="text-sm md:text-xs flex justify-between gap-2">
            <span className="bg-gray-200 text-xs md:text-xs p-1 rounded-md dark:text-black">
              {startDate} - {endDate}
            </span>
          </div>
        </div>
      </div>
    </HoverCards>
  );
};

export default WorkExperienceItem;
