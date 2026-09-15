import { ScrollText, MailCheck, Handshake, type LucideIcon } from "lucide-react";

export const heroServices: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: ScrollText,
    title: "Over 15 years of experience",
    description:
      "We are a reliable supplier of a wide range of products and technical equipment.",
  },
  {
    icon: MailCheck,
    title: "We are available 24h / 7d",
    description:
      "We are available 24h/7d and please do not hesitate to contact us in case of any requirements.",
  },
  {
    icon: Handshake,
    title: "We are a reliable supplier",
    description:
      "We are a reliable supplier of a wide range of products and technical equipment.",
  },
];

export const heroContent = {
  // TODO: ganti dengan headline & subheadline asli company kamu
  headline: ["Anything you need,", "handled the right way"],
  subheadline: "Reliable service and consistent quality for every client.",
  cta: { label: "Contact us", href: "#contact" },
  backgroundImage: {
    src: "/images/hero-section/Hero-Section-bg.jpg",
    alt: "Hero background showing our operations",
  },
} as const;

// TODO: ganti dengan logo partner/sertifikasi asli, taruh file di public/images/hero/
export const heroPartners = [
  { name: "Partner One", logo: "/images/hero-section/Hero-Section-1.png" },
  { name: "Partner Two", logo: "/images/hero-section/Hero-Section-2.jpg" },
  { name: "Partner Three", logo: "/images/hero-section/Hero-Section-3.jpg" },
  { name: "Partner Four", logo: "/images/hero-section/Hero-Section-4.jpg" },
  { name: "Partner Five", logo: "/images/hero-section/Hero-Section-5.jpg" },
  { name: "Partner Six", logo: "/images/hero-section/Hero-Section-6.webp" },
] as const;