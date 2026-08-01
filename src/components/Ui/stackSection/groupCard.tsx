import { type groupCardProps } from "../../../interface/types";

const groupCard = ({ children }:groupCardProps) => {
  return (
    <div className="space-y-2 p-2 md:shadow-sm shadow-md bg-red-200">
        {children}
    </div>
  );
};

export default groupCard;
