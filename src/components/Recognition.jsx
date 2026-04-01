import BaseSection from "./Ui/BaseSection";
import SectionHeader from "./Ui/SectionHeaderText";
import CertificateItem from "./Ui/CertificateItem";

const Recognition = () => {
    return (
        <BaseSection>
        <SectionHeader title="Recent Certifications"/>
        <section className="flex flex-col gap-2 p-2">
            <CertificateItem></CertificateItem>
            <CertificateItem></CertificateItem>
            <CertificateItem></CertificateItem>
        </section>
        </BaseSection>
    );
};

export default Recognition;