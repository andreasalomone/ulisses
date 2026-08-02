const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstileToken(token: string | undefined | null): Promise<boolean> {
    const secretKey = process.env.TURNSTILE_SECRET_KEY;

    // If captcha isn't configured (e.g. local dev without keys), don't block submissions.
    if (!secretKey) {
        console.warn("[Turnstile] TURNSTILE_SECRET_KEY missing. Skipping captcha verification.");
        return true;
    }

    if (!token) return false;

    try {
        const response = await fetch(VERIFY_URL, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({ secret: secretKey, response: token }),
        });

        const result = await response.json();
        return result.success === true;
    } catch (error) {
        console.error("[Turnstile] Verification request failed:", error);
        return false;
    }
}
