import type { CertificateModalProps } from "../../interface/types";


const CertificateModal = ({title, src}  : CertificateModalProps) => {
    return(
        <dialog className="bg-red-500">
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                <img src={src} alt={title} />
            </div>
        </dialog>
    )
}