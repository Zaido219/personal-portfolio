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
    onClose={onClose} 
    className="fixed inset-0 m-auto rounded-lg p-0 backdrop:bg-black/50"
>
    {/* 1. Constrain the width and height on this wrapper DIV */}
    <div className="p-6 bg-white flex flex-col gap-4 w-[90vw] max-w-lg max-h-[90vh] overflow-hidden">
        <h2 className="text-xl font-bold">{title}</h2>
        
        {/* 2. Constrain the image container so it doesn't blow up vertically */}
        <div className="flex-1 flex items-center justify-center overflow-hidden bg-slate-50 rounded-md">
            <img 
                src={src} 
                alt={title} 
                className="max-w-full max-h-[50vh] object-contain" 
            />
        </div>

        <button 
            onClick={onClose}
            className="self-end mt-4 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 active:scale-[0.98] text-white text-md font-semibold rounded-lg shadow-sm transition-all duration-200"
        >
            Close
        </button>
    </div>
</dialog>
    );
}