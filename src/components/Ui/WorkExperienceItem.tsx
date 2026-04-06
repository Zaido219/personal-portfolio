import { WorkExperienceItemProps } from "./../../interface/types";
import { HoverCards } from "./Cards";

const WorkExperienceItem = ({
  workTitle,
  workCompany,
  startDate,
  endDate,
}: WorkExperienceItemProps) => {
  return (
    <HoverCards>
      <div className="flex flex-col gap-1 p-1 rounded-md w-sm">
        <strong className="p-1 text-md">{workTitle}</strong>
        <div className="flex justify-between gap-1 p-1">
          <p className="text-sm">{workCompany}</p>
          <div className="text-sm flex justify-between gap-2">
            <span>
              {startDate} - {endDate}
            </span>
          </div>
        </div>
      </div>
    </HoverCards>
  );
};

export default WorkExperienceItem;
