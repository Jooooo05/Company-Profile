import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { certificatesContent, certificates } from "@/features/certificates/certificates.data";
import { CertificateGrid } from "@/features/certificates/CertificateGrid"; 

export const metadata: Metadata = {
  title: "Certificates | Your Company",
  description: "View our certifications and memberships.",
};

export default function CertificatesPage() {
  return (
    <main className="flex-1 bg-[#F4F3F1] py-20 sm:py-24">
      <Container>
        <h1 className="text-center text-2xl font-bold text-[#2B2B2B] sm:text-3xl">
          {certificatesContent.heading}
        </h1>

        <div className="mt-16">
          <CertificateGrid certificates={certificates} />
        </div>
      </Container>
    </main>
  );
}