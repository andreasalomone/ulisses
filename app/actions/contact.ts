"use server";

import { contactFormSchema, ContactFormValues } from "@/lib/validations/contact";

export async function submitContactForm(data: ContactFormValues) {
    // Simulate server delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const validatedFields = contactFormSchema.safeParse(data);

    if (!validatedFields.success) {
        return {
            success: false,
            error: "Dati non validi. Per favore ricontrolla il modulo.",
        };
    }

    // In a real scenario, we would send an email or store in a database here.
    console.log("Form submitted:", validatedFields.data);

    return {
        success: true,
        message: "Richiesta inviata con successo! Ti contatteremo a breve.",
    };
}
