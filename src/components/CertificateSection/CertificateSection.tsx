import React, { useState } from "react";
import { CertificateModal } from "./CertificateModal";

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
      className="w-full bg-transparent max-w-7xl mx-auto px-6 py-16 md:py-24 transition-colors duration-300"
    >
      {/* Section Header */}
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-zinc-900 dark:text-white">
          <span className="text-sunset-deep dark:text-sunset-bright">Certifications</span>
        </h2>
        <p className="text-zinc-600 dark:text-neutral-400 text-sm sm:text-base font-medium">
          Formal credentials, course achievements, and verified domain skills
        </p>
      </div>

      {/* Main Container Shell */}
      <div className="w-full rounded-2xl p-6 sm:p-8 transition-colors duration-300
                      bg-white/70 dark:bg-neutral-900/40 
                      backdrop-blur-2xl backdrop-saturate-150
                      border border-white/80 dark:border-white/10 
                      shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] dark:shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CertificatesData.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              data-cursor="clickable"
              className="group custom-cursor-clickable rounded-xl p-5 transition-all duration-200 
                         bg-white/60 hover:bg-white/90 dark:bg-neutral-900/30 dark:hover:bg-neutral-900/60
                         backdrop-blur-md
                         border border-black/5 hover:border-sunset-deep/40 dark:border-white/10 dark:hover:border-sunset-bright/40
                         shadow-xs hover:shadow-md"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-neutral-100 group-hover:text-sunset-deep dark:group-hover:text-sunset-bright transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-sunset-dusk dark:text-neutral-400 mt-1">
                    {cert.provider}
                  </p>
                </div>
                
                {cert.issueDate && (
                  <span className="text-xs font-mono text-zinc-500 dark:text-neutral-400 shrink-0">
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