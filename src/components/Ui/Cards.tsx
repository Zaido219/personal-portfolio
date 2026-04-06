import type { HoverCardProps } from "../../interface/types"

export const HoverCards = ({children, className}:HoverCardProps) => {
    return(
        <div className={`hover:bg-blue-300 transition duration-200 ease-in-out hover:scale-105 ${className}`}>
            {children}
        </div>
    )
}