import type {CertificateItemProps} from "../../interface/types"

const showModal = () => {
    return console.log('Event fired');
}

const CertificateItem = ({certificateTitle, certificateProvider, onClick} : CertificateItemProps) => {
    return(
        <div 
            className="flex flex-col gap-1 bg-gray-100 p-1 transition duration-200 ease-in-out hover:scale-103 hover:bg-gray-300 rounded-lg"
            onClick={showModal}>
            <p className="font-bold">{certificateTitle}</p>
            <p>{certificateProvider}</p>
        </div>
    );
};


export default CertificateItem;