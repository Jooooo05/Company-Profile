import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(2, "Name is too short").max(100),
    phone: z.string().max(30).optional().or(z.literal("")),
    email: z.email("Invalid email address"),
    clientStatus: z.string(),
    message: z
        .string()
        .min(10, "Please describe your case (min 10 characters)")
        .max(2000),
    company: z.string().max(0).optional(), // honeypot, harus tetap kosong
});


export type ContactFormValue = z.infer<typeof contactFormSchema>;

export type ContactFormState = {
    status: "idle" | "success" | "error"
    message?: string;
    fieldErrors?: Partial<Record<keyof ContactFormValue, string>>;
};