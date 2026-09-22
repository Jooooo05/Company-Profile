"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { heroContent, heroPartners, heroServices } from "./hero.data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex h-screen flex-col bg-[#0A2647]"
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
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {heroContent.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="mt-6 max-w-xl text-base leading-7 text-white/90 sm:text-lg"
        >
          {heroContent.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} className="mt-8">
            <Link
              href={heroContent.cta.href}
              className="rounded-sm bg-white px-8 py-3 text-[13px] font-semibold uppercase tracking-wide text-[#0A2647] transition-colors hover:bg-[#F2F0E8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E85D25]"
            >
              {heroContent.cta.label}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Partner / certification logos */}
      <div className="relative z-10 px-4 pb-10 sm:pb-14">
        <Container>
          <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {heroPartners.map((partner, index) => (
              <motion.li
                key={partner.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.06 }}
                className="flex h-32 w-32 items-center justify-center rounded-sm bg-white px-4 shadow-sm sm:h-20 sm:w-40"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={120}
                  className="h-16 w-auto object-contain sm:h-20"
                />
              </motion.li>
            ))}
          </ul>
        </Container>
      </div>

      {/* Card Service */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="translate-y-1/4 rounded-sm bg-white shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3">
              {heroServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col gap-3 border-b border-gray-200 px-7 py-4 last:border-r-0 md:my-5 md:border-b-0 md:border-r"
                >
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}