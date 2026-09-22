"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { teamContent, teamMembers } from "./team.data";

export function Team() {
  return (
    <section id="team" className="bg-white py-20 sm:py-24">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center text-2xl font-bold text-[#2B2B2B] sm:text-3xl"
        >
          {teamContent.heading}
        </motion.h2>

        <ul className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-x-8">
          {teamMembers.map((member, index) => (
            <motion.li
              key={member.email}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.12 }}
            >
              <motion.div
                whileHover="hover"
                className="relative h-40 w-40 overflow-hidden"
              >
                <motion.div
                  variants={{ hover: { scale: 1.08 } }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={member.photo.src}
                    alt={member.photo.alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>

              <div className="mt-4 leading-snug">
                <p className="text-lg font-bold text-[#2B2B2B]">
                  {member.firstName}
                </p>
                <p className="text-lg font-bold text-[#2B2B2B]">
                  {member.lastName}
                </p>
              </div>

              <p className="mt-1 text-sm text-[#6B7280]">{member.role}</p>

              <div className="mt-4 space-y-1 text-sm text-[#2B2B2B]">
                {member.phone && (
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    <a
                      href={`tel:${member.phone.replace(/\s+/g, "")}`}
                      className="hover:text-[#0A2647]"
                    >
                      {member.phone}
                    </a>
                  </p>
                )}
                <p>
                  <a
                    href={`mailto:${member.email}`}
                    className="font-semibold hover:text-[#0A2647]"
                  >
                    {member.email}
                  </a>
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="mt-16 flex items-center gap-6"
        >
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
            style={{ transformOrigin: "right" }}
            className="h-px flex-1 bg-[#E4E1D8]"
          />
          <Link
            href={teamContent.contactCta.href}
            className="whitespace-nowrap text-sm font-semibold text-[#2B2B2B] transition-colors hover:text-[#0A2647] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#E85D25]"
          >
            {teamContent.contactCta.label}
          </Link>
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
            style={{ transformOrigin: "left" }}
            className="h-px flex-1 bg-[#E4E1D8]"
          />
        </motion.div>
      </Container>
    </section>
  );
}