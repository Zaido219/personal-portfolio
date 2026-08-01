import { type groupCardProps } from "../../../interface/types";

const GroupCard = ({ children }:groupCardProps) => {
  return (
    <div className="space-y-2 p-2 md:shadow-sm hover:md:shadow-xl shadow-md rounded-lg dark:bg-zinc-800 hover:scale-112 transition-transform duration-300 hover:z-10">
        {children}
    </div>
  );
};

export default GroupCard;
