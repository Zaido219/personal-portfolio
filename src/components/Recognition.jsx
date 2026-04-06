import BaseSection from "./Ui/BaseSection";
import SectionHeader from "./Ui/SectionHeaderText";
import CertificateItem from "./Ui/CertificateItem";
import { ViewMore } from "./Ui/Navigations";
import BaseCard from "./Ui/Card";

const Recognition = () => {
  return (
    <BaseSection>
      <BaseCard>
        <div className="flex justify-between">
          <SectionHeader title="Recent Certifications" />
          <ViewMore />
        </div>
        <section className="flex flex-col gap-2 p-2">
          <CertificateItem
            certificateTitle="Cyber Threat Management"
            certificateProvider="Cisco"
          ></CertificateItem>
          <CertificateItem
            certificateTitle="Exploring Internet of Things with Cisco Packet Tracer"
            certificateProvider="Cisco Networking Academy program"
          ></CertificateItem>
          <CertificateItem
            certificateTitle="Operating Systems Support"
            certificateProvider="Cisco Networking Academy program"
          ></CertificateItem>
          <CertificateItem
            certificateTitle="Backend Development and Api's V8"
            certificateProvider="Freecodecamp Org"
          ></CertificateItem>
        </section>
      </BaseCard>
    </BaseSection>
  );
};

export default Recognition;
