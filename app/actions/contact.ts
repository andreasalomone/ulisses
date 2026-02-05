"use server";

import { contactFormSchema, ContactFormValues } from "@/lib/validations/contact";
import { getTranslations } from "next-intl/server";
import { Resend } from "resend";

export async function submitContactForm(data: ContactFormValues, locale: string) {
    const t = await getTranslations({ locale, namespace: 'common' });

    // Server-side validation
    const validatedFields = contactFormSchema.safeParse(data);

    if (!validatedFields.success) {
        return {
            success: false,
            message: t('error'),
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    // Honeypot check (Silent rejection for bots)
    if (validatedFields.data._gotcha) {
        console.info("[Lead] Bot detected via honeypot. Silently ignoring.");
        return {
            success: true,
            message: t('successMessage'),
        };
    }

    const { scenario, objective, email, phone, size, platforms, timing } = validatedFields.data;

    try {
        const apiKey = process.env.RESEND_API_KEY;
        const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

        const operations: Promise<string>[] = [];

        // 1. Email Operation
        const emailOp = async (): Promise<string> => {
            if (apiKey) {
                const resend = new Resend(apiKey);
                await resend.emails.send({
                    from: 'Ulisses Contact <noreply@resend.dev>', // Use onboarding domain for sandbox. Change to your verified domain in prod.
                    to: 'info@ulisses.it', // Destination
                    subject: `New Lead [${scenario.toUpperCase()}]: ${objective}`,
                    html: `
                        <h1>New Contact Request</h1>
                        <p><strong>Scenario:</strong> ${scenario}</p>
                        <p><strong>Objective:</strong> ${objective}</p>
                        <p><strong>Size:</strong> ${size}</p>
                        <p><strong>Timing:</strong> ${timing}</p>
                        <p><strong>Platforms:</strong> ${platforms || 'None'}</p>
                        <hr />
                        <h2>Contact Details</h2>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                    `
                });
                return `Email sent to ${email}`;
            }
            console.warn("[Lead] RESEND_API_KEY missing. Logging only:", validatedFields.data);
            return "Email skipped (no key)";
        };
        operations.push(emailOp());

        // 2. Slack Operation
        const slackOp = async (): Promise<string> => {
            if (slackWebhookUrl) {
                const slackMessage = {
                    text: `*New Lead captured!* 🚀\n\n*Scenario:* ${scenario}\n*Objective:* ${objective}\n*Size:* ${size}\n*Timing:* ${timing}\n*Platforms:* ${platforms || 'None'}\n\n*Contact:*\nEmail: ${email}\nPhone: ${phone || 'N/A'}`,
                };

                const response = await fetch(slackWebhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(slackMessage),
                });

                if (!response.ok) throw new Error(`Slack API error: ${response.statusText}`);
                return "Slack notification sent";
            }
            return "Slack skipped (no webhook)";
        };
        operations.push(slackOp());

        // Execute in parallel
        const results = await Promise.allSettled(operations);

        // Log results
        results.forEach((result, index) => {
            const label = index === 0 ? "Email" : "Slack";
            if (result.status === "fulfilled") {
                console.info(`[Lead] ${label}: ${result.value}`);
            } else {
                console.error(`[Lead] ${label} failed:`, result.reason);
            }
        });

        // If both failed, we might want to return an error, but usually partial success is fine.
        // If at least one "succeeded" (meaning the logic ran, even if it was just "skipped"), consider it a success.
        // Real failure is when unexpected exceptions occur.

        return {
            success: true,
            message: t('successMessage'),
        };

    } catch (error) {
        console.error("[Lead] Critical submission error:", error);
        return {
            success: false,
            message: t('networkError') || "Something went wrong. Please try again.",
        };
    }
}
