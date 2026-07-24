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
      <div className="flex flex-col md:gap-1 p-1 rounded-md w-xs md:w-md dark:text-zinc-300">
        <strong className="p-1 text-md md:text-lg dark:text-zinc-300">{workTitle}</strong>
        <div className="flex justify-between gap-1 p-1">
          <p className="text-sm md:text-md dark:text-zinc-300">{workCompany}</p>
          <div className="text-sm md:text-sm flex justify-between gap-2">
            <span className="flex justify-center align-items-center md:min-w-[90px] bg-gray-200 dark:bg-zinc-800 text-xs md:text-sm p-1 rounded-md dark:text-zinc-300">
              {startDate} - {endDate}
            </span>
          </div>
        </div> 
      </div>
    </HoverCards>
  );
};

export default WorkExperienceItem;
