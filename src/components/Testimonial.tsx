import BaseSection from "./Ui/BaseSection";
import SectionHeader from "./Ui/SectionHeaderText";
import TestimonialItem from "./Ui/TestimonialItem";
import { Testimonials } from "../config/constants";

const TestimonialSection = () => {
  return (
    <BaseSection>
      <SectionHeader title="Recommendations" />
      <div className="bg-violet-300 flex flex-col gap-4 p-1">
        {Testimonials.map((item, index) => {
          return (
            <div>
              <TestimonialItem
                quote={item.quote}
                author={item.author}
                title={item.title}
              ></TestimonialItem>
            </div>
          );
        })}
      </div>
    </BaseSection>
  );
};

export default TestimonialSection;
