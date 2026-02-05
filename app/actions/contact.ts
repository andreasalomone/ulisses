"use server";

import { contactFormSchema, ContactFormValues } from "@/lib/validations/contact";
import { getTranslations } from "next-intl/server";

export async function submitContactForm(data: ContactFormValues, locale: string) {
    const t = await getTranslations({ locale, namespace: 'common' });
    // Simulate server delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const validatedFields = contactFormSchema.safeParse(data);

    if (!validatedFields.success) {
        return {
            success: false,
            error: t('error'),
        };
    }

    // In a real scenario, we would send an email or store in a database here.
    console.log("Form submitted:", validatedFields.data);

    return {
        success: true,
        message: t('successMessage'),
    };
}
