import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { heroContent, heroPartners, heroServices } from "./hero.data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex h-screen flex-col  bg-[#0A2647]"
    >
      <Image
        src={heroContent.backgroundImage.src}
        alt={heroContent.backgroundImage.alt}
        fill
        priority
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-[#0A2647]/70 via-[#0A2647]/35 to-[#0A2647]/90"
      />

      {/* Headline block */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {heroContent.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
          {heroContent.subheadline}
        </p>

        <Link
          href={heroContent.cta.href}
          className="mt-8 rounded-sm bg-white px-8 py-3 text-[13px] font-semibold uppercase tracking-wide text-[#0A2647] transition-colors hover:bg-[#F2F0E8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E85D25]"
        >
          {heroContent.cta.label}
        </Link>
      </div>

      {/* Partner / certification logos */}
      <div className="relative z-10 px-4 pb-10 sm:pb-14">
        <Container>
          <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {heroPartners.map((partner) => (
              <li
                key={partner.name}
                className="flex h-32 w-32 items-center justify-center rounded-sm bg-white px-4 shadow-sm sm:h-20 sm:w-40"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={120}
                  className="h-16 w-auto object-contain sm:h-20"
                />
              </li>
            ))}
          </ul>
        </Container>
      </div>

      {/* Card Service */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8">
            <Container>
              <div className="translate-y-1/3 rounded-sm bg-white shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {heroServices.map((service) => (
                    <div key={service.title} className="flex flex-col gap-3 px-7 py-4 border-b md:border-b-0 md:border-r border-gray-200 last:border-r-0 md:my-5">
                      <div className="flex items-center gap-4">                        
                        <service.icon
                          className="h-8 w-8 text-[#C7784A]"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                        <h3 className="text-base font-bold leading-snug text-[#0A2647]">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-6 text-[#6B7280]">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
      </div>
    </section>
  );
}