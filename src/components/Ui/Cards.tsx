import type { HoverCardProps, ShineProps } from "../../interface/types"

export const ShineWrapperCard = ({ children, className = "" }:ShineProps) => {
  return (
    <div className={`relative group overflow-hidden rounded-md ${className}`}>
      {/* 1. -left-full: Starts completely off-screen to the left.
          2. group-hover:left-full: Moves completely off-screen to the right on hover.
          3. duration-700: Controls the speed of the "sweep".
      */}
      <div className="absolute top-0 -left-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-blue-50 via-blue-100/40 to-blue-200 transition-all duration-1002 ease-in-out group-hover:left-full" />
      
      {children}
    </div>
  );
};

export const HoverCards = ({children, className}:HoverCardProps) => {
    return(
        <div className={`bg-gray-100 hover:bg-gray-300 transition duration-200 ease-in-out hover:scale-103 rounded-md ${className}`}>
            {children}
        </div>
    )
}