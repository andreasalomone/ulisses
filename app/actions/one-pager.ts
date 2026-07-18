"use server";

interface OnePagerRequest {
    name: string;
    company: string;
    email: string;
    role: string;
    onePagerType: string;
}

export async function requestOnePager({
    name,
    company,
    email,
    role,
    onePagerType,
}: OnePagerRequest) {
    // Basic server-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return { success: false, error: "Invalid email" };
    }
    if (!name?.trim() || !company?.trim() || !role?.trim()) {
        return { success: false, error: "Missing required fields" };
    }

    try {
        const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

        if (slackWebhookUrl) {
            const slackMessage = {
                text:
                    `Nuova richiesta one-pager: *${onePagerType}*\n` +
                    `• Nome e Cognome: ${name}\n` +
                    `• Azienda: ${company}\n` +
                    `• Email aziendale: ${email}\n` +
                    `• Ruolo in azienda: ${role}`,
            };

            const response = await fetch(slackWebhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(slackMessage),
            });

            if (!response.ok) {
                console.error(`Slack API error: ${response.statusText}`);
                // We don't throw here to ensure we still return success to the user
                // if the webhook fails, as it's not critical for their UX
            }
        } else {
            console.warn("SLACK_WEBHOOK_URL not configured");
        }

        return { success: true };

    } catch (error) {
        console.error("Error submitting one-pager request:", error);
        return { success: false, error: "Submission failed" };
    }
}
