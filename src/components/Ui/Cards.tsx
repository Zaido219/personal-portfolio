import type { HoverCardProps } from "../../interface/types"

export const HoverCards = ({children, className}:HoverCardProps) => {
    return(
        <div className={`bg-gray-100 hover:bg-gray-300 transition duration-200 ease-in-out hover:scale-105 rounded-md ${className}`}>
            {children}
        </div>
    )
}