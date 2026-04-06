import { ChevronRight } from "lucide-react";
import type { NavProps } from "../../interface/types";

export const GalleryNav = ({direction} : NavProps) => {
   // We use dynamic classes based on the direction prop
  const positionClass = direction === "left" ? "left-2" : "right-2";

  return (
    <div className={`bg-gray-300 absolute ${positionClass} top-1/2 -translate-y-1/2 h-10 w-10 z-10 flex items-center justify-center cursor-pointer opacity-80 hover:opacity-100`}>
      {direction === "left" ? "<" : ">"}
    </div>
  );
};  

export const ViewMore = () => {
    return (    
        <div className="flex items-center text-sm">
            <button>View All
            </button>
            <ChevronRight className="w-4 h-6 ml-1"/>
        </div>
    );
};  