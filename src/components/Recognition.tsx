import BaseSection from "./Ui/BaseSection";
import SectionHeader from "./Ui/SectionHeaderText";
import CertificateItem from "./Ui/CertificateItem";
import { ViewMore } from "./Ui/Navigations";
import BaseCard from "./Ui/Card";
import { useState } from "react";
import { CertificateModal } from "./Ui/modals";

const Recognition = () => {
  const [selectedCert, setSelectedCert] = useState<{ title: string,  src: string } | null>(null);
  return (
    <BaseSection>
      <BaseCard>
        <div className="flex  gap-15 md:justify-between">
          <SectionHeader title="Recent Certifications" />
          <ViewMore />
        </div>
        <section className="flex flex-col gap-2 p-2">
          <CertificateItem
            certificateTitle="Cyber Threat Management"
            certificateProvider="Cisco"
            onClick={() =>
              setSelectedCert({
                title: "Cyber Threat Management",
                src:"certificates/ctm-cert.png",
              })
            }
          ></CertificateItem>
          <CertificateItem
            certificateTitle="Exploring Internet of Things with Cisco Packet Tracer"
            certificateProvider="Cisco Networking Academy program"
            onClick={() =>
              setSelectedCert({
                title: "Cyber Threat Management",
                src: "/certificates/iot-cert.png", // Use your actual image path here
              })
            }
          ></CertificateItem>
          <CertificateItem
            certificateTitle="Operating Systems Support"
            certificateProvider="Cisco Networking Academy program"
            onClick={() =>
              setSelectedCert({
                title: "Cyber Threat Management",
                src: "/certificates/oss-cert.png", // Use your actual image path here
              })
            }
          ></CertificateItem>
          <CertificateItem
            certificateTitle="Backend Development and Api's V8"
            certificateProvider="Freecodecamp Org"
            onClick={() =>
              setSelectedCert({
                title: "Cyber Threat Management",
                src: "/certificates/Screenshot 2026-07-17 122131.png", // Use your actual image path here
              })
            }
          ></CertificateItem>
          <CertificateModal
            isOpen={!!selectedCert}
            title={selectedCert?.title || ""}
            src={selectedCert?.src || ""}
            onClose={() => setSelectedCert(null)}
          />
        </section>
      </BaseCard>
    </BaseSection>
  );
};

export default Recognition;
