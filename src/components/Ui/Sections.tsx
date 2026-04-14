
import type { BaseSectionProps } from "../../interface/types";

export const BaseSection = ({children}: BaseSectionProps) => {
    return(
        <div className="max-w-lg shadow-sm">{children}</div>
    );
};


export const GalleryBaseSection = ({children} : BaseSectionProps) => {
    return (
        <div className="md:max-w-4xl w-87 md:w-full mx-auto shadow-sm flex items-center justify-center">{children}</div>
    )
} 