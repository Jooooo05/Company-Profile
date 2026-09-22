"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageSquareCode, Link2 } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { footerContent } from "@/config/footer.data";

const socialIcons = { Facebook: MessageSquareCode, LinkedIn: Link2 } as const;

const columnVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

export function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      <Container className="py-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Kolom 1: alamat perusahaan */}
          <motion.div
            variants={columnVariants}
            className="space-y-6 text-sm leading-relaxed text-white/80"
          >
            <div>
              <p className="font-bold text-white">{footerContent.company.name}</p>
              {footerContent.company.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div>
              <p className="font-bold text-white">{footerContent.office.label}</p>
              {footerContent.office.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <a
              href={`tel:${footerContent.phone.replace(/\s+/g, "")}`}
              className="block font-bold text-white hover:text-[#E85D25]"
            >
              {footerContent.phone}
            </a>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {footerContent.partnerBadges.map((badge) => (
                <motion.div
                  key={badge.name}
                  whileHover={{ y: -3 }}
                  className="flex h-14 w-28 items-center justify-center bg-white p-2"
                >
                  <Image
                    src={badge.logo}
                    alt={badge.name}
                    width={100}
                    height={40}
                    className="h-auto w-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Kolom 2: legal info */}
          <motion.div variants={columnVariants} className="space-y-1 text-sm text-white/80">
            <p>
              <span className="font-bold text-white">NIP:</span>{" "}
              {footerContent.legal.nip}
            </p>
            <p>
              <span className="font-bold text-white">REGON:</span>{" "}
              {footerContent.legal.regon}
            </p>
            <p>
              <span className="font-bold text-white">VAT UE:</span>{" "}
              {footerContent.legal.vatUe}
            </p>
          </motion.div>

          {/* Kolom 3: info bank */}
          <motion.div variants={columnVariants} className="space-y-1 text-sm text-white/80">
            <p className="font-bold text-white">{footerContent.bank.name}</p>
            {footerContent.bank.ibans.map((iban) => (
              <p key={iban.currency}>
                IBAN: {iban.value} ({iban.currency})
              </p>
            ))}
            <p>SWIFT Code: {footerContent.bank.swift}</p>
          </motion.div>

          {/* Kolom 4: about + social */}
          <motion.div
            variants={columnVariants}
            className="space-y-6 text-sm leading-relaxed text-white/80"
          >
            <p>{footerContent.about.tagline}</p>
            <p>{footerContent.about.description}</p>

            <ul className="flex flex-col gap-4 pt-2 sm:flex-row sm:gap-6">
              {footerContent.socials.map((social) => {
                const Icon = socialIcons[social.name as keyof typeof socialIcons];
                return (
                  <li key={social.name}>
                    <motion.a
                      href={social.href}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="flex items-center gap-3 hover:text-white"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#0A66C2]">
                        <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </span>
                      <span className="font-semibold text-white">
                        {social.label}
                      </span>
                    </motion.a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="border-t border-white/10"
      >
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
          <p>
            © All Rights Reserved{" "}
            <span className="font-bold text-white">
              {footerContent.company.name}
            </span>
          </p>
          <motion.div whileHover={{ y: -2 }}>
            <Link
              href={footerContent.credit.href}
              className="text-sm font-bold text-white hover:text-[#E85D25]"
            >
              {footerContent.credit.label}
            </Link>
          </motion.div>
        </Container>
      </motion.div>
    </footer>
  );
}