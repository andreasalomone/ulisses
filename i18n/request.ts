import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    const requested = await requestLocale;

    // Ensure that the incoming locale is valid
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default,
        onError(error) {
            if (process.env.NODE_ENV === 'development') {
                if (error.code === 'MISSING_MESSAGE') {
                    console.warn(`[i18n] Missing message key for locale "${locale}":`, error.message);
                } else {
                    console.error(`[i18n] Error loading messages for locale "${locale}":`, error);
                }
            }
        },
        getMessageFallback({ namespace, key }) {
            return `[MISSING: ${namespace}.${key}]`;
        }
    };
});
