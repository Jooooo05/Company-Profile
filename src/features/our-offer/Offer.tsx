"use client";

import Link from "next/link";
import { CornerDownRight } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { offerContent, offerItems } from "./offer.data";

export function Offer() {
  return (
    <section id="offer" className="bg-white py-20 sm:py-24">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center text-2xl font-bold text-[#2B2B2B] sm:text-3xl"
        >
          {offerContent.heading}
        </motion.h2>

        <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {offerItems.map((item, index) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: (index % 4) * 0.08 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center text-center"
            >
              <item.icon
                className="h-14 w-14 text-[#C7A059]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-4 text-sm font-semibold text-[#2B2B2B] sm:text-base">
                {item.title}
              </h3>
              <Link
                href={`/offer/${item.slug}`}
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-[#2B2B2B]/80 transition-colors hover:text-[#C7A059] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#E85D25]"
              >
                <CornerDownRight className="h-3.5 w-3.5" aria-hidden="true" />
                See more
              </Link>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}