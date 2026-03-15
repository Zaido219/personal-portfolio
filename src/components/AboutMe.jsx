import BaseSection from "./Ui/BaseSection";
import BaseCard from "./Ui/Card";
import SectionHeader from "./Ui/SectionHeaderText";

const AboutMe = () => {
    return(
    <BaseSection>
        <SectionHeader
            title="About"
        />
    <section>
        <BaseCard>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quidem officia, hic rem dolorum porro doloribus blanditiis dignissimos eum. Doloremque ex repellat et magni pariatur rem porro, ratione neque tenetur eligendi excepturi quidem delectus natus quia perferendis consequuntur praesentium consequatur libero nam id quisquam fugiat cupiditate. Placeat nulla dolore veritatis?
        </BaseCard>
    </section>
    </BaseSection>
    );
};


export default AboutMe;