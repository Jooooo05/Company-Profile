"use client";

import { useActionState } from "react";
import { submitContactForm } from "./actions";
import { contactContent } from "./contact.data";
import type { ContactFormState } from "./contact.schema";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <form action={formAction} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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

      <div className="flex flex-col gap-2">
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
        {state.fieldErrors?.name && (
          <p className="text-xs text-red-600">{state.fieldErrors.name}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
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
      </div>

      <div className="flex flex-col gap-2">
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
        {state.fieldErrors?.email && (
          <p className="text-xs text-red-600">{state.fieldErrors.email}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
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
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
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
        {state.fieldErrors?.message && (
          <p className="text-xs text-red-600">{state.fieldErrors.message}</p>
        )}
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={isPending}
          className="bg-[#C7784A] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B36A3F] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#0A2647]"
        >
          {isPending ? "Sending..." : contactContent.submitLabel}
        </button>

        {state.status === "success" && (
          <p className="mt-3 text-sm font-medium text-green-700">
            Thanks! We received your message and will get back to you soon.
          </p>
        )}
        {state.status === "error" && !state.fieldErrors && (
          <p className="mt-3 text-sm font-medium text-red-600">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}