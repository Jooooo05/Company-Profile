"use client";

import { useState } from "react";
import Image from "next/image";
import { FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import type { Certificate } from "./certificates.data";
import { CertificateModal } from "./CertificateModal";

export function CertificateGrid({ certificates }: { certificates: Certificate[] }) {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  return (
    <>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <motion.li
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: (index % 3) * 0.1 }}
          >
            <motion.button
              type="button"
              onClick={() => setActiveCert(cert)}
              whileHover={{ y: -4 }}
              className="group flex w-full flex-col items-center gap-4 border border-[#E4E1D8] bg-white p-6 text-center transition-colors hover:border-[#0A2647] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#E85D25] cursor-pointer"
            >
              <div className="relative h-40 w-full overflow-hidden bg-[#F4F3F1]">
                <Image
                  src={cert.thumbnail}
                  alt={cert.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-[#2B2B2B]">{cert.name}</p>
                <p className="mt-1 text-xs text-[#6B7280]">{cert.issuer}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A2647] group-hover:text-[#E85D25]">
                <FileText className="h-4 w-4" aria-hidden="true" />
                View certificate
              </span>
            </motion.button>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {activeCert && (
          <CertificateModal
            certificate={activeCert}
            onClose={() => setActiveCert(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}