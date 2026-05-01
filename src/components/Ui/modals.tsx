import { useEffect,useRef } from "react";
import type { CertificateModalProps } from "../../interface/types";


export const CertificateModal = ({title, src, isOpen, onClose}  : CertificateModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(()=> {
        const dialog = dialogRef.current;
        if(!dialog) return;
        if(isOpen){
            dialog.showModal();
        }else{
            dialog.close();
        }   
    }, [isOpen])

    return (
        <dialog 
            ref={dialogRef} 
            onClose={onClose} // Syncs native 'Esc' key press with React state
            className="rounded-lg p-0 backdrop:bg-black/50"
        >
            <div className="p-6 bg-white flex flex-col gap-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <img src={src} alt={title} className="max-w-full h-auto" />
                <button 
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                >
                    Close
                </button>
            </div>
        </dialog>
    );
}