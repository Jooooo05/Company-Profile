import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center bg-[#FAFAF8]">
      <Container className="flex flex-col items-center gap-6 py-24 text-center sm:py-32">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-8xl font-bold leading-none tracking-tight text-[#0A2647] sm:text-9xl">
            404
          </h1>
          <span
            aria-hidden="true"
            className="h-1 w-16 rounded-full bg-[#E85D25]"
          />
        </div>

        <p className="max-w-md text-base leading-7 text-[#6B7280]">
          Halaman yang kamu cari tidak ditemukan. Mungkin link-nya salah, atau
          halamannya sudah dipindahkan.
        </p>

        <Link
          href="/"
          className="mt-2 rounded-sm border border-[#0A2647] px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-[#0A2647] transition-colors hover:bg-[#0A2647] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E85D25]"
        >
          Kembali ke beranda
        </Link>
      </Container>
    </main>
  );
}