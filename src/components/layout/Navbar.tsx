"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems, siteConfig } from "@/config/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useActiveSection(navItems.map((item) => item.id));

  return (
    <header className="sticky top-0 z-50 border-b border-[#E4E1D8] bg-[#FAFAF8]/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        {/* Logo */}
        <Link href="#hero" className="flex shrink-0 items-center gap-3">
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
              const isActive = item.id === activeId;
              return (
                <li key={item.id} className="flex items-center">
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={[
                      "px-3 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E85D25]",
                      isActive
                        ? "rounded-sm border border-[#0A2647] text-[#0A2647]"
                        : "text-[#3D4451] hover:text-[#0A2647]",
                    ].join(" ")}
                  >
                    {item.label}
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
      {isOpen && (
        <nav className="border-t border-[#E4E1D8] bg-[#FAFAF8] lg:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col p-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="block border-b border-[#E4E1D8] py-3 text-sm font-semibold uppercase tracking-wide text-[#3D4451] last:border-none"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}