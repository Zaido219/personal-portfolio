import type {CertificateItemProps} from "../../interface/types"
import { CertificateModal } from "./modals";

const showModal = (title:string, src:string) => {
    console.log('You should see a modal')
    return null;
}

const CertificateItem = ({certificateTitle, certificateProvider, onClick} : CertificateItemProps) => {
    return(
        <div 
            onClick={onClick}
            className="flex flex-col gap-1 bg-gray-100 dark:bg-zinc-900 p-1 transition duration-200 ease-in-out hover:scale-103 hover:bg-gray-300 dark:hover:bg-zinc-800 rounded-lg">
            <p className="font-semibold dark:text-white">{certificateTitle}</p>
            <p className="dark:text-white">{certificateProvider}</p>
        </div>
    );
};


export default CertificateItem;