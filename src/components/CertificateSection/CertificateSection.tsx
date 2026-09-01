import React, { useState } from "react";
import { CertificateModal } from "../Ui/modals";

export interface Certificate {
  id: string;
  title: string;
  provider: string;
  issueDate?: string;
  imageSrc: string;
}

export const CertificatesData: Certificate[] = [
  {
    id: "ctm",
    title: "Cyber Threat Management",
    provider: "Cisco",
    imageSrc: "/certificates/ctm-cert.png",
  },
  {
    id: "iot",
    title: "Exploring Internet of Things with Cisco Packet Tracer",
    provider: "Cisco Networking Academy program",
    imageSrc: "/certificates/iot-cert.png",
  },
  {
    id: "oss",
    title: "Operating Systems Support",
    provider: "Cisco Networking Academy program",
    imageSrc: "/certificates/oss-cert.png",
  },
  {
    id: "fcc-backend",
    title: "Backend Development and Api's V8",
    provider: "Freecodecamp Org",
    imageSrc: "/certificates/Screenshot 2026-07-17 122131.png",
  },
];

export const CertificatesSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section 
      id="certifications" 
      className="w-full transition-colors duration-200 bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 max-w-7xl mx-auto px-6 py-16 md:py-24"
    >
      {/* Section Header */}
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl md:text-5xl sm:text-4xl font-extrabold text-sunset-bright tracking-tight mb-3">
          Certifications
        </h2>
      </div>

      {/* Main Container */}
      <div className="w-full rounded-2xl border p-6 sm:p-8 transition-colors duration-200 bg-white border-neutral-200 dark:bg-neutral-900/40 dark:border-neutral-800/80">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CertificatesData.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer rounded-xl border p-5 transition-all duration-200 
                         bg-neutral-50/50 border-neutral-200 hover:border-sunset-bright hover:shadow-md
                         dark:bg-neutral-900/80 dark:border-neutral-800 dark:hover:border-sunset-bright"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-100 group-hover:text-sunset-bright transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-1">
                    {cert.provider}
                  </p>
                </div>
                
                {cert.issueDate && (
                  <span className="text-xs text-neutral-400 dark:text-neutral-500 shrink-0">
                    {cert.issueDate}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal View */}
      <CertificateModal
        isOpen={!!selectedCert}
        title={selectedCert?.title || ""}
        src={selectedCert?.imageSrc || ""}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};

export default CertificatesSection;