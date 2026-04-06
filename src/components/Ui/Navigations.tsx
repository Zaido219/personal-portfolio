import { ChevronRight } from "lucide-react";

export const ViewMore = () => {
    return (
        <div className="flex items-center text-sm">
            <button>View All
            </button>
            <ChevronRight className="w-4 h-6 ml-1"/>
        </div>
    );
};  