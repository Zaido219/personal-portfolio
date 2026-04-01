import type {CertificateItemProps} from "../../interface/types"

const CertificateItem = ({certificateTitle, certificateProvider} : CertificateItemProps) => {
    return(
        <div className="flex flex-col gap-1 bg-gray-100 p-1 transition duration-200 ease-in-out hover:scale-105 hover:bg-gray-300 rounded-lg">
            <p className="font-bold">{certificateTitle}</p>
            <p>{certificateProvider}</p>
        </div>
    );
};


export default CertificateItem;