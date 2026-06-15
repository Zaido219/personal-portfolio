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
      <div className="min-w-md max-w-md p-2 flex flex-col text-slate-200">
        {/* 1. Header: Institution & Timeline */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
          <div>
            <h3 className="text-sm font-bold text-black tracking-wide">
              {institutionName}
            </h3>
            <p className="text-sm text-black">{location}</p>
          </div>

          {/* Date Formatting Section */}
          <div className="text-sm font-medium text-black px-3 py-1 rounded-full self-start sm:self-auto">
            {startDate.getFullYear()} –{" "}
            {isCurrent ? "Present" : endDate?.getFullYear()}
          </div>
        </div>

        {/* 2. Subheading: Qualification Details */}
        {(degree || fieldOfStudy) && (
          <div className="text-sm font-medium text-black border-l-2 border-indigo-500 pl-3 my-1">
            {degree} {fieldOfStudy && `in ${fieldOfStudy}`}
          </div>
        )}

        {/* 3. Achievements Bulleted List */}
        {achievements.length > 0 && (
          <ul className="list-disc list-inside space-y-1.5 text-xs text-black mt-2 pl-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="leading-relaxed">
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
