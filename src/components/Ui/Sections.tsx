import type { BaseSectionProps } from "../../interface/types";

export const BaseSection = ({children}: BaseSectionProps) => {
    return(
        <div className="max-w-lg shadow-sm">{children}</div>
    );
};