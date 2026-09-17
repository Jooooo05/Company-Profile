import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { contactContent } from "./contact.data";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#F4F3F1] py-20 sm:py-24">
      {/* Decorative map background — ganti dengan aset asli kamu */}
      <Image
        src={contactContent.mapImage.src}
        alt={contactContent.mapImage.alt}
        fill
        aria-hidden="true"
        className="object-cover opacity-60 object-bottom"
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
          <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-xs font-semibold uppercase tracking-wide text-[#2B2B2B]"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="border border-[#D8D5CB] bg-white px-4 py-3 text-sm text-[#2B2B2B] focus:border-[#0A2647] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-xs font-semibold uppercase tracking-wide text-[#2B2B2B]"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="border border-[#D8D5CB] bg-white px-4 py-3 text-sm text-[#2B2B2B] focus:border-[#0A2647] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-wide text-[#2B2B2B]"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="border border-[#D8D5CB] bg-white px-4 py-3 text-sm text-[#2B2B2B] focus:border-[#0A2647] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="clientStatus"
                className="text-xs font-semibold uppercase tracking-wide text-[#2B2B2B]"
              >
                Are you a new client
              </label>
              <select
                id="clientStatus"
                name="clientStatus"
                className="border border-[#D8D5CB] bg-white px-4 py-3 text-sm text-[#6B7280] focus:border-[#0A2647] focus:outline-none"
              >
                {contactContent.clientOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
              <label
                htmlFor="message"
                className="text-xs font-semibold uppercase tracking-wide text-[#2B2B2B]"
              >
                Describe your case
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="resize-y border border-[#D8D5CB] bg-white px-4 py-3 text-sm text-[#2B2B2B] focus:border-[#0A2647] focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="bg-[#C7784A] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B36A3F] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#0A2647]"
              >
                {contactContent.submitLabel}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}