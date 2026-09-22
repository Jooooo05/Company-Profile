"use client";

import { useActionState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { submitContactForm } from "./actions";
import { contactContent } from "./contact.data";
import type { ContactFormState } from "./contact.schema";

const initialState: ContactFormState = { status: "idle" };

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <motion.form
      action={formAction}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.08 }}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
    >
      {/* Honeypot: kosong buat manusia, tapi sering ke-isi otomatis oleh bot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <motion.div variants={fieldVariants} className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-xs font-semibold uppercase tracking-wide text-[#2B2B2B]"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="border border-[#D8D5CB] bg-white px-4 py-3 text-sm text-[#2B2B2B] focus:border-[#0A2647] focus:outline-none"
        />
        <AnimatePresence>
          {state.fieldErrors?.name && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden text-xs text-red-600"
            >
              {state.fieldErrors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div variants={fieldVariants} className="flex flex-col gap-2">
        <label
          htmlFor="phone"
          className="text-xs font-semibold uppercase tracking-wide text-[#2B2B2B]"
        >
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="border border-[#D8D5CB] bg-white px-4 py-3 text-sm text-[#2B2B2B] focus:border-[#0A2647] focus:outline-none"
        />
      </motion.div>

      <motion.div variants={fieldVariants} className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-xs font-semibold uppercase tracking-wide text-[#2B2B2B]"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border border-[#D8D5CB] bg-white px-4 py-3 text-sm text-[#2B2B2B] focus:border-[#0A2647] focus:outline-none"
        />
        <AnimatePresence>
          {state.fieldErrors?.email && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden text-xs text-red-600"
            >
              {state.fieldErrors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div variants={fieldVariants} className="flex flex-col gap-2">
        <label
          htmlFor="clientStatus"
          className="text-xs font-semibold uppercase tracking-wide text-[#2B2B2B]"
        >
          Are you a new client
        </label>
        <select
          id="clientStatus"
          name="clientStatus"
          className="border border-[#D8D5CB] bg-white px-4 py-3 text-sm text-[#6B7280] focus:border-[#0A2647] focus:outline-none"
        >
          {contactContent.clientOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </motion.div>

      <motion.div variants={fieldVariants} className="flex flex-col gap-2 sm:col-span-2">
        <label
          htmlFor="message"
          className="text-xs font-semibold uppercase tracking-wide text-[#2B2B2B]"
        >
          Describe your case
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="resize-y border border-[#D8D5CB] bg-white px-4 py-3 text-sm text-[#2B2B2B] focus:border-[#0A2647] focus:outline-none"
        />
        <AnimatePresence>
          {state.fieldErrors?.message && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden text-xs text-red-600"
            >
              {state.fieldErrors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div variants={fieldVariants} className="sm:col-span-2">
        <motion.button
          type="submit"
          disabled={isPending}
          whileHover={!isPending ? { y: -2 } : undefined}
          whileTap={!isPending ? { scale: 0.97 } : undefined}
          className="bg-[#C7784A] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B36A3F] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#0A2647]"
        >
          {isPending ? "Sending..." : contactContent.submitLabel}
        </motion.button>

        <AnimatePresence mode="wait">
          {state.status === "success" && (
            <motion.p
              key="success"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-3 text-sm font-medium text-green-700"
            >
              Thanks! We received your message and will get back to you soon.
            </motion.p>
          )}
          {state.status === "error" && !state.fieldErrors && (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-3 text-sm font-medium text-red-600"
            >
              {state.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.form>
  );
}