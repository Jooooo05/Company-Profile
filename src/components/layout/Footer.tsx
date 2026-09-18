import Image from "next/image";
import Link from "next/link";
import { MessageSquareCode, Link2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { footerContent } from "@/config/footer.data";

const socialIcons = { Facebook: MessageSquareCode, LinkedIn: Link2 } as const;

export function Footer() {
return (
    <footer className="bg-[#1C1C1C] text-white">
        <Container className="py-14">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {/* Kolom 1: alamat perusahaan */}
                <div className="space-y-6 text-sm leading-relaxed text-white/80">
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
                        <div
                            key={badge.name}
                            className="flex h-14 w-28 items-center justify-center bg-white p-2"
                        >
                            <Image
                                src={badge.logo}
                                alt={badge.name}
                                width={100}
                                height={40}
                                className="h-auto w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
                </div>

                {/* Kolom 2: legal info */}
                <div className="space-y-1 text-sm text-white/80">
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
                </div>

                {/* Kolom 3: info bank */}
                <div className="space-y-1 text-sm text-white/80">
                    <p className="font-bold text-white">{footerContent.bank.name}</p>
                        {footerContent.bank.ibans.map((iban) => (
                            <p key={iban.currency}>
                            IBAN: {iban.value} ({iban.currency})
                            </p>
                        ))}
                    <p>SWIFT Code: {footerContent.bank.swift}</p>
                </div>

                {/* Kolom 4: about + social */}
                <div className="space-y-6 text-sm leading-relaxed text-white/80">
                    <p>{footerContent.about.tagline}</p>
                    <p>{footerContent.about.description}</p>

                    <ul className="flex flex-col gap-4 pt-2 sm:flex-row sm:gap-6">
                        {footerContent.socials.map((social) => {
                        const Icon = socialIcons[social.name as keyof typeof socialIcons];
                        return (
                            <li key={social.name}>
                            <a
                                href={social.href}
                                className="flex items-center gap-3 hover:text-white"
                            >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#0A66C2]">
                                    <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                                </span>
                                <span className="font-semibold text-white">
                                    {social.label}
                                </span>
                            </a>
                            </li>
                        );
                        })}
                    </ul>
                </div>
            </div>
        </Container>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
            <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
                <p>
                    © All Rights Reserved{" "}
                    <span className="font-bold text-white">
                        {footerContent.company.name}
                    </span>
                </p>
                <Link
                    href={footerContent.credit.href}
                    className="text-sm font-bold text-white hover:text-[#E85D25]"
                    >
                    {footerContent.credit.label}
                </Link>
            </Container>
        </div>
    </footer>
);
}