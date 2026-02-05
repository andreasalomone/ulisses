import { getPathname } from "@/i18n/routing";
import { locales, type Locale } from "@/i18n";

/**
 * Generates SEO-friendly hreflang alternate links for a given route across all supported locales.
 * @param href The abstract route key (e.g., '/', '/logistica')
 * @param baseUrl The base application URL
 * @returns A record of locale to fully qualified localized URL
 */
export function getLocalizedAlternates(href: string, baseUrl: string) {
    const alternates: Record<string, string> = {};

    for (const locale of locales) {
        let localizedPath: string;

        try {
            // Attempt to resolve the path as a localized route key
            localizedPath = getPathname({
                locale: locale as Locale,
                href: href as unknown as Parameters<typeof getPathname>[0]['href']
            });
        } catch {
            // Fallback to the original path if it's not a localized route (dynamic path)
            localizedPath = href;
        }

        // Construct the full URL, handling root path slash
        alternates[locale] = `${baseUrl}/${locale}${localizedPath === '/' ? '' : localizedPath}`;
    }

    return alternates;
}
