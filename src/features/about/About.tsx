"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function About() {
  return (
    <section
      id="about"
      className="relative isolate min-h-150 bg-[#0A2647] sm:min-h-170 mt-72"
    >
      <Image
        src="/images/about/about-bg.jpeg"
        alt="Ships anchored at the harbor at night"
        fill
        className="object-cover"
      />

      <div className="absolute inset-x-0 -top-50 z-10 flex justify-center py-16 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-4/5 bg-linear-to-r from-[#16264A] via-[#3B3B4A]/95 to-[#8B5A3C] p-8 shadow-2xl sm:p-10 lg:p-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            About us
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-6 space-y-4 text-sm leading-7 text-white/90"
          >
            <motion.p variants={paragraphVariants}>
              <strong className="font-semibold text-white">
                Cooperation with us is always successful
              </strong>
              , contractors are satisfied, we are available and we try very hard
              to meet the highest expectations. We work with passion, reliably
              and professionally, which helps us achieve long-term satisfaction
              with our services. We are distinguished by the fact that we did
              not have a contractor who would be dissatisfied with us.{" "}
              <strong className="font-semibold text-white">Check us out</strong>{" "}
              and you will not be disappointed.
            </motion.p>

            <motion.p variants={paragraphVariants}>
              <strong className="font-semibold text-white">
                TOM SHIP SERVICE
              </strong>{" "}
              is the option you should consider if you want quality, variety of
              products, and a team that knows your needs. We are ready to work
              for you and ensure that your ship is always supplied ahead of time
              and within budget.
            </motion.p>

            <motion.p variants={paragraphVariants}>
              Our commitment is to satisfy an ever-growing customer base with
              our outstanding service and{" "}
              <strong className="font-semibold text-white">
                quality guarantee.
              </strong>
            </motion.p>

            <motion.p variants={paragraphVariants}>
              Being fully aware that our business is an indispensable part of
              world shipping business and being proud of a member of ship{" "}
              <strong className="font-semibold text-white">
                chandler business society
              </strong>
              , we provide our excellence in service to esteemed customers as
              their{" "}
              <strong className="font-semibold text-white">
                best partner.
              </strong>
            </motion.p>

            <motion.p variants={paragraphVariants}>
              Currently we supply our satisfied customers with the highest
              quality products and recognized product brands at the best market
              price possible without extra fees or hidden charges. We ensure
              that the items quoted will be supplied and that no poor quality
              substitutes will be provided.
            </motion.p>

            <motion.p variants={paragraphVariants}>
              <strong className="font-semibold text-white">
                We strongly care about a prompt response
              </strong>{" "}
              to our customers and ship supply needs with a short turnaround
              time to delivery.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          >
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-block"
            >
              <Link
                href="#certificates"
                className="inline-flex items-center gap-2 bg-white px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-[#0A2647] transition-colors hover:bg-[#F2F0E8] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#E85D25]"
              >
                See our certificates
                <ArrowRight className="h-4 w-4 text-[#E85D25]" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}