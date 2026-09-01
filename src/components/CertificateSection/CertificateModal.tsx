import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CertificateModalProps {
  isOpen: boolean;
  title: string;
  src: string;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  title,
  src,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* 1. Backdrop Overlay: Clean dimming with NO backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0  bg-black/30"
          />

          {/* 2. Glassmorphic Modal Card: Glass effect scoped EXCLUSIVELY to this element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 w-full max-w-2xl rounded-2xl p-6 shadow-2xl overflow-hidden
                       bg-white/40 dark:bg-neutral-900/40 
                       backdrop-blur-xl backdrop-saturate-150
                       border border-white/30 dark:border-white/10 
                       flex flex-col gap-4"
          >
            {/* Modal Header */}
            <h3 className="text-xl font-bold text-sunset-dusk dark:text-sunset-bright tracking-tight">
              {title}
            </h3>

            {/* Certificate Image Frame */}
            <div className="relative w-full rounded-xl overflow-hidden border border-neutral-900/10 dark:border-white/10 bg-black/5 dark:bg-black/30">
              <img
                src={src}
                alt={title}
                className="w-full h-auto object-contain max-h-[70vh]"
              />
            </div>

            {/* Glass Action Button */}
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
                         bg-neutral-900/10 dark:bg-white/10 
                         hover:bg-neutral-900/20 dark:hover:bg-white/20
                         text-sunset-dusk dark:text-sunset-bright
                         border border-neutral-900/10 dark:border-white/10"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};