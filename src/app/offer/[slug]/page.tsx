import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { offerItems } from "@/features/our-offer/offer.data";

export function generateStaticParams() {
  return offerItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = offerItems.find((i) => i.slug === slug);
  if (!item) return {};

  return {
    title: `${item.title} | Your Company`,
    description: item.shortDescription,
  };
}

export default async function OfferDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = offerItems.find((i) => i.slug === slug);

  if (!item) notFound();

  const detail = item.detail;

  return (
    <main className="flex-1 bg-white py-20 sm:py-24">
      <Container>
        <Link
          href="/#offer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B7280] hover:text-[#0A2647]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to offers
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Kolom kiri: gambar (opsional) */}
          {detail?.image ? (
            <div className="relative aspect-square w-full overflow-hidden lg:aspect-auto">
              <Image
                src={detail.image.src}
                alt={detail.image.alt}
                fill
                className="object-contain lg:object-cover"
              />
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <item.icon
                className="h-16 w-16 text-[#C7A059]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>
          )}

          {/* Kolom kanan: konten */}
          <div>
            <h1 className="text-2xl font-bold leading-snug text-[#2B2B2B] sm:text-3xl">
              {detail?.statement ?? item.title}
            </h1>

            {detail?.intro && (
              <div className="mt-2 space-y-4 text-sm leading-7 text-[#6B7280]">
                {detail.intro.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            )}

            {detail?.categories && detail.categories.length > 0 && (
              <div className="mt-5">
                {detail.listHeading && (
                  <h2 className="text-xl font-bold text-[#2B2B2B]">
                    {detail.listHeading}
                  </h2>
                )}
                <ul className="mt-4 space-y-3">
                  {detail.categories.map((category) => (
                    <li key={category.name}>
                      <p className="flex items-center gap-2 text-sm font-semibold text-[#2B2B2B]">
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-[#C7A059]"
                        />
                        {category.name}
                      </p>
                      <p className="ml-3.5 text-sm text-[#6B7280]">
                        {category.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}