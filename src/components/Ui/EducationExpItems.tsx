import { type EducationItemProps } from "../../interface/types";
import { HoverCards } from "./Cards";

const EducItems = ({
  id,
  institutionName,
  degree,
  fieldOfStudy,
  location,
  startDate,
  endDate,
  isCurrent,
  achievements,
}: EducationItemProps) => {
  return (
    <HoverCards>
      <div className="flex flex-col w-full p-3 rounded-sm gap-2 overflow-hidden">
        
        {/* 1. Header: Space distributed elegantly across the container width */}
        <div className="flex flex-row justify-between items-start w-full p-2 gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-md md:text-md font-bold text-black dark:text-white tracking-wide break-words">
              {institutionName}
            </h3>
            <p className="text-xs md:text-sm text-slate-700 dark:text-white mt-0.5 break-words">{location}</p>
          </div>

          {/* Timeline Badging - whitespace-nowrap keeps the date on one clean line */}
          <div className="text-xs md:text-sm font-semibold text-black dark:text-white px-2.5 py-1 rounded-full shrink-0 whitespace-nowrap">
            {startDate.getFullYear()} – {isCurrent ? "Present" : endDate?.getFullYear()}
          </div>
        </div>

        {/* 2. Subheading: Qualification Details */}
        {(degree || fieldOfStudy) && (
          <div className="text-md md:text-sm font-medium text-black dark:text-white border-l-2 border-slate-400 dark:border-zinc-800 pl-3 my-1 break-words">
            {degree} {fieldOfStudy && `in ${fieldOfStudy}`}
          </div>
        )}

        {/* 3. Achievements Bulleted List */}
        {achievements.length > 0 && (
          <ul className="list-disc list-inside space-y-1.5 text-sm md:text-sm text-black dark:text-white pl-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="leading-relaxed break-words">
                <span className="text-black dark:text-zinc-300">{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </HoverCards>
  );
};

export default EducItems;