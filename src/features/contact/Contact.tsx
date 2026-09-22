import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { contactContent } from "./contact.data";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F4F3F1] py-20 sm:py-24"
    >
      {/* Decorative map background — ganti dengan aset asli kamu */}
      <Image
        src={contactContent.mapImage.src}
        alt={contactContent.mapImage.alt}
        fill
        aria-hidden="true"
        className="object-cover object-bottom opacity-60"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Kolom kiri: info kontak */}
          <div className="flex flex-col gap-2 border-b border-dashed border-[#C9C6BC] pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
            <a
              href={`mailto:${contactContent.email}`}
              className="text-sm font-medium text-[#2B2B2B] hover:text-[#0A2647]"
            >
              {contactContent.email}
            </a>

            <div className="mt-2 flex flex-wrap items-baseline gap-3">
              <a
                href={`tel:${contactContent.phone.replace(/\s+/g, "")}`}
                className="text-3xl font-bold text-[#2B2B2B] hover:text-[#0A2647] sm:text-4xl"
              >
                {contactContent.phone}
              </a>
              <span className="text-sm text-[#9A968A]">
                {contactContent.phoneNote}
              </span>
            </div>
          </div>

          {/* Kolom kanan: form */}
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}