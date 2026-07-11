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
      <div className="flex flex-col md:gap-1 p-1 rounded-md w-xs md:w-md dark:bg-zinc-900">
        <strong className="p-1 text-md md:text-md dark:text-white">{workTitle}</strong>
        <div className="flex justify-between gap-1 p-1">
          <p className="text-sm md:text-sm dark:text-white">{workCompany}</p>
          <div className="text-sm md:text-xs flex justify-between gap-2">
            <span className="flex justify-center align-items-center md:min-w-[90px] bg-gray-200 dark:bg-zinc-800 text-xs md:text-xs p-1 rounded-md dark:text-white">
              {startDate} - {endDate}
            </span>
          </div>
        </div> 
      </div>
    </HoverCards>
  );
};

export default WorkExperienceItem;
