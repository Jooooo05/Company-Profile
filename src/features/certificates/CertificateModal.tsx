"use client";

import { motion } from "motion/react";
import { X } from "lucide-react";
import type { Certificate } from "./certificates.data";

export function CertificateModal({
  certificate,
  onClose,
}: {
  certificate: Certificate;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={certificate.name}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative flex h-[85vh] w-full max-w-6xl flex-col overflow-hidden rounded-sm bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="flex items-center justify-between border-b border-[#E4E1D8] px-5 py-3">
          <div>
            <p className="text-sm font-bold text-[#0A2647]">{certificate.name}</p>
            <p className="text-xs text-[#6B7280]">{certificate.issuer}</p>
          </div>
          <motion.button
            type="button"
            onClick={onClose}
            aria-label="Close"
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="flex h-8 w-8 items-center justify-center text-[#6B7280] hover:text-[#0A2647] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#E85D25]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </motion.button>
        </div>

        <iframe
          src={`${certificate.pdfSrc}#toolbar=0&navpanes=0&scrollbar=0`}
          title={certificate.name}
          className="h-full w-full flex-1 border-0"
        />
      </motion.div>
    </motion.div>
  );
}