import BaseSection from "./Ui/BaseSection";
import BaseCard from "./Ui/Card";
import SectionHeader from "./Ui/SectionHeaderText";

const AboutMe = () => {
  return (
    <BaseSection>
      <SectionHeader title="About" />
      <section className="">
        <BaseCard>
            <div className="flex flex-col gap-2">
              <p className="bg-red-300p-1 rounded-sm text-base">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus totam natus? Omnis quaerat quo obcaecati! 
               Magnam dignissimos tempora commodi vitae ullam corporis vel, nostrum quos, distinctio numquam voluptates quas!
              </p>
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Doloremque blanditiis optio sequi ipsum nostrum repellendus provident!
              </p>
            </div>
        </BaseCard>
      </section>
    </BaseSection>
  );
};

export default AboutMe;
