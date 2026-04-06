import { Testimonials } from "../../config/constants";
import { TestimonialProps } from "../../interface/types";

const TestimonialItem = ({ quote, author, title, affiliation}:TestimonialProps) => {
    return(
        <div className="bg-indigo-300 p-2 rounded-sm flex flex-col gap-1">
            <div className="bg-red-300 p-1">
                <p className="italic text-md">{quote}</p>
            </div>
            <div className="bg-orange-300 w-fit flex flex-col gap-1">
                <p className="font-semibold text-sm">{author}</p>
                <p className="text-xs">{title}</p>
                <p>{affiliation}</p>
            </div>
        </div>
    );
};

export default TestimonialItem;