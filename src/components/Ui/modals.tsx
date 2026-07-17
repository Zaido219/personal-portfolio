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
            className="fixed inset-0 m-auto rounded-lg p-0 backdrop:bg-black/50"
        >
            <div className="p-6 bg-white flex flex-col gap-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <img src={src} alt={title} className="max-w-full h-auto" />
                <button 
                    onClick={onClose}
                    className="mt-4 px-5 py-2.5 bg-slate-800 hover:bg-slate-800 active:scale-[0.98] text-white text-md font-semibold rounded-lg shadow-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                >
                    Close
                </button>
            </div>
        </dialog>
    );
}