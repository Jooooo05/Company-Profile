"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { navItems, siteConfig } from "@/config/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const anchorIds = navItems
    .filter((item) => item.type === "anchor")
    .map((item) => item.id);
  const activeId = useActiveSection(anchorIds);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Selalu tampil kalau menu mobile lagi kebuka, atau masih dekat atas halaman
    if (isOpen || latest < 100) {
      setIsVisible(true);
    } else if (latest > lastScrollY) {
      setIsVisible(false); // scroll ke bawah -> sembunyikan
    } else {
      setIsVisible(true); // scroll ke atas -> tampilkan
    }
    setLastScrollY(latest);
  });

  function getHref(item: (typeof navItems)[number]) {
    if (item.type === "page") return item.href;
    return pathname === "/" ? `#${item.id}` : `/#${item.id}`;
  }

  function getIsActive(item: (typeof navItems)[number]) {
    if (item.type === "page") return pathname === item.href;
    return pathname === "/" && item.id === activeId;
  }

  return (
    <motion.header
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 z-[110] border-b border-[#E4E1D8] bg-[#FAFAF8]/95 backdrop-blur"
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2647] text-sm font-bold text-white">
            {siteConfig.initials}
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight text-[#0A2647]">
              {siteConfig.name}
            </span>
            <span className="text-[11px] font-medium tracking-wide text-[#6B7280]">
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center lg:flex" aria-label="Main navigation">
          <ul className="flex items-center">
            {navItems.map((item, index) => {
              const isActive = getIsActive(item);
              const href = getHref(item);

              return (
                <li key={item.label} className="flex items-center">
                  <a
                    href={href}
                    aria-current={isActive ? "true" : undefined}
                    className={[
                      "relative px-3 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E85D25]",
                      isActive
                        ? "text-[#0A2647]"
                        : "text-[#3D4451] hover:text-[#0A2647]",
                    ].join(" ")}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-sm border border-[#0A2647]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                  {index < navItems.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="mx-1 h-4 w-px rotate-20 bg-[#D8D5CB]"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#D8D5CB] lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-[#0A2647] transition-transform ${
                isOpen ? "translate-y-1.75 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.75 h-0.5 w-5 bg-[#0A2647] transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3.5 h-0.5 w-5 bg-[#0A2647] transition-transform ${
                isOpen ? "-translate-y-1.75 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#E4E1D8] bg-[#FAFAF8] lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col p-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={getHref(item)}
                    onClick={() => setIsOpen(false)}
                    className="block border-b border-[#E4E1D8] py-3 text-sm font-semibold uppercase tracking-wide text-[#3D4451] last:border-none"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}