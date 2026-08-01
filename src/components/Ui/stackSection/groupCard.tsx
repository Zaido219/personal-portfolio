import { type groupCardProps } from "../../../interface/types";

const GroupCard = ({ children }:groupCardProps) => {
  return (
    <div className="space-y-2 p-2 md:shadow-sm shadow-md rounded-lg dark:bg-zinc-800">
        {children}
    </div>
  );
};

export default GroupCard;
