"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { ServiceData } from "./service.data";

export function Service() {
  return (
    <section id="service" className="mt-64 text-black">
      <Container className="flex flex-col gap-10 md:flex-row">
        {/* sidebar kiri */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:w-1/2"
        >
          {/* headline service */}
          <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            {ServiceData.heading}
          </h2>

          {/* description service */}
          <p className="mt-6 text-base leading-7 text-gray-600 sm:text-sm">
            <strong>Tom Ship Service</strong> is a family business based in
            Gdynia, Poland. We are a team with nearly{" "}
            <strong>15 years of experience</strong> in shipchandling and
            purchasing. We are a <strong>reliable supplier</strong> of a wide
            range of products and technical equipment. We know how to respond
            to the multiple demands of ship supply market
          </p>

          <p className="mt-6 text-base leading-7 text-gray-600 sm:text-sm">
            <strong>{ServiceData.secondaryDescription}</strong>
          </p>

          {/* phone */}
          <p className="mt-6 text-xl leading-7 font-bold text-gray-800 sm:text-3xl">
            {ServiceData.phone}
          </p>
          <hr className="mt-7 w-3/4 text-gray-600" />

          {/* signature */}
          <div className="mt-6 flex items-center gap-4">
            <Image
              src={ServiceData.signatureIamage}
              alt="Tom Ship Service Signature"
              width={150}
              height={150}
              className="h-16 w-auto object-contain sm:h-20"
            />
            <div>
              <p className="text-sm text-gray-600 sm:text-base">
                {ServiceData.name}
              </p>
              <p>{ServiceData.role}</p>
            </div>
          </div>
        </motion.div>

        {/* sidebar kanan */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="md:w-1/2"
        >
          <div>
            <Image
              src="/images/service/service-example-photo.jpg"
              alt="Tom Ship Service"
              width={500}
              height={500}
              className="h-auto w-full rounded object-cover shadow-lg sm:h-96"
            />

            <div className="ml-5 mt-6 flex gap-10">
              {/* our deliveries */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
              >
                <p className="mb-3 text-3xl font-bold text-[#e1ac6f]">1000+</p>
                <p className="text-sm font-semibold tracking-wider">
                  Our Deliveries
                </p>
              </motion.div>

              {/* Satisfied Customers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
              >
                <p className="mb-3 text-3xl font-bold text-[#e1ac6f]">500+</p>
                <p className="text-sm font-semibold tracking-wider">
                  Satisfied Customers
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}