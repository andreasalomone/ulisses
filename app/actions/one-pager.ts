"use server";



export async function requestOnePager(email: string, onePagerType: string) {
    // Basic server-side email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return { success: false, error: "Invalid email" };
    }

    try {
        const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

        if (slackWebhookUrl) {
            const slackMessage = {
                text: `L'utente ${email} ha richiesto il one-pager ${onePagerType}`,
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
