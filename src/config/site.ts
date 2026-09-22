export const siteConfig = {
  name: "YOUR COMPANY",
  initials: "YC",
  tagline: "Company profile tagline here",
} as const;

export type NavItem =
  | { type: "anchor"; label: string; id: string }
  | { type: "page"; label: string; href: string };

export const navItems: NavItem[] = [
  { type: "anchor", label: "About us", id: "about" },
  { type: "anchor", label: "Our offer", id: "offer" },
  { type: "anchor", label: "Team", id: "team" },
  { type: "anchor", label: "Contact", id: "contact" },
  { type: "page", label: "Certificates", href: "/certificates" },
  { type: "anchor", label: "Ports", id: "ports" },
];