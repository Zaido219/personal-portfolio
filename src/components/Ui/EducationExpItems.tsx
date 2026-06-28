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
      <div className="bg-indigo-200 flex flex-col w-full p-3 rounded-sm gap-2 overflow-hidden">
        
        {/* 1. Header: Space distributed elegantly across the container width */}
        <div className="bg-purple-200 flex flex-row justify-between items-start w-full p-2 gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-black tracking-wide break-words">
              {institutionName}
            </h3>
            <p className="text-xs text-slate-700 mt-0.5 break-words">{location}</p>
          </div>

          {/* Timeline Badging - whitespace-nowrap keeps the date on one clean line */}
          <div className="text-xs font-semibold text-black bg-purple-300 px-2.5 py-1 rounded-full shrink-0 whitespace-nowrap">
            {startDate.getFullYear()} – {isCurrent ? "Present" : endDate?.getFullYear()}
          </div>
        </div>

        {/* 2. Subheading: Qualification Details */}
        {(degree || fieldOfStudy) && (
          <div className="text-sm font-medium text-black border-l-2 border-indigo-500 pl-3 my-1 break-words">
            {degree} {fieldOfStudy && `in ${fieldOfStudy}`}
          </div>
        )}

        {/* 3. Achievements Bulleted List */}
        {achievements.length > 0 && (
          <ul className="list-disc list-inside space-y-1.5 text-xs text-black pl-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="leading-relaxed break-words">
                <span className="text-black">{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </HoverCards>
  );
};

export default EducItems;