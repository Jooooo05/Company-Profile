export const footerContent = {
  company: {
    name: "Tom Ship Service",
    address: ["kpt.Antoniego Ledóchowskiego 6A/4", "81-189 Gdynia,", "Poland"],
  },
  office: {
    label: "Office",
    address: ["Gołębia 1/15", "81-185 Gdynia,", "Poland"],
  },
  phone: "+48 790 210 889",
  legal: {
    nip: "9581400710",
    regon: "221885585",
    vatUe: "PL9581400710",
  },
  bank: {
    name: "BANK PEKAO S.A. II/O GDYNIA",
    ibans: [
      { currency: "PLN", value: "PL82 1240 3510 1111 0011 0212 1871" },
      { currency: "EUR", value: "PL11 1240 3510 1978 0011 0212 1897" },
      { currency: "USD", value: "PL24 1240 3510 1787 0011 0212 1901" },
    ],
    swift: "PKOPPLPWXXX",
  },
  about: {
    tagline:
      "Over 15 years of experience. We are a reliable supplier of a wide range of products and technical equipment.",
    description:
      "Tom Ship Service is a family business based in Gdynia, Poland.",
  },
  socials: [
    { name: "Facebook", href: "#", label: "Find us on Facebook" },
    { name: "LinkedIn", href: "#", label: "Share us on Linkedin" },
  ],
  // TODO: ganti path logo partner ke aset asli
  partnerBadges: [
    { name: "MESPAS ID", logo: "/images/footer/footer1.png" },
    { name: "ShipServ", logo: "/images/footer/footer2.png" },
  ],
  credit: { label: "kingbrand", href: "#" },
} as const;