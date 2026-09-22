"use server";

import { Resend } from "resend";
import { contactFormSchema, type ContactFormState } from "./contact.schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(
    _prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const raw = {
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        clientStatus: formData.get("clientStatus"),
        message: formData.get("message"),
        company: formData.get("company"),
    };

    const parsed = contactFormSchema.safeParse(raw);

    if (!parsed.success) {
        const fieldErrors: Record<string, string> = {};
        for (const issue of parsed.error.issues) {
            const key = issue.path[0];
            if (typeof key === "string" && !fieldErrors[key]) {
                fieldErrors[key] = issue.message;
            }
        }
        return {
            status: "error",
            message: "Please check the form again",
            fieldErrors,
        };
    }

    // Honeypot ke isi -> ini bot, pura pura sukses, jangan kasih tau botnya
    if (parsed.data.company) {
        return {status: "success"};
    }

    try {
        await resend.emails.send({
            from: "Website <onboarding@resend.dev>",
            to: "jonatanhudson.s@gmail.com",
            replyTo: parsed.data.email,
            subject: `New quote request from ${parsed.data.name}`,
            text: [
                `Name: ${parsed.data.name}`,
                `Phone: ${parsed.data.phone}`,
                `Email: ${parsed.data.email}`,
                `New Client: ${parsed.data.clientStatus}`,
                "",
                parsed.data.message
            ].join("\n"),
        });

        return { status: "success" };
    } catch (error) {
        console.error("Failed to send contact email:", error);
        return {
            status: "error",
            message: "Something went wrong. Please try again later.",
        };
    }


}