import type {CertificateItemProps} from "../../interface/types"
import { CertificateModal } from "./modals";

const showModal = (title:string, src:string) => {
    console.log('You should see a modal')
    return <CertificateModal title={title} src={src}></CertificateModal>
}

const CertificateItem = ({certificateTitle, certificateProvider, onClick} : CertificateItemProps) => {
    return(
        <div 
            className="flex flex-col gap-1 bg-gray-100 p-1 transition duration-200 ease-in-out hover:scale-103 hover:bg-gray-300 rounded-lg">
            <p className="font-bold">{certificateTitle}</p>
            <p>{certificateProvider}</p>
        </div>
    );
};


export default CertificateItem;