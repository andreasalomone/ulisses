import { MetadataRoute } from "next";
import { locales } from "@/i18n";
import { getPathname, routing } from "@/i18n/routing";

const baseUrl = "https://ulisses.it";

// Extract static pathnames from routing configuration
const pathnameKeys = Object.keys(routing.pathnames || {}).filter(
    (pathname) => !pathname.includes("[") // Exclude dynamic routes
) as Array<keyof typeof routing.pathnames>;

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = [];

    const lastModified = new Date();

    for (const pathname of pathnameKeys) {
        // Generate alternates for all locales
        const alternates: Record<string, string> = {};

        for (const locale of locales) {
            const localizedPath = getPathname({
                locale,
                href: pathname as "/"
            });
            alternates[locale] = `${baseUrl}/${locale}${localizedPath === '/' ? '' : localizedPath}`;
        }

        // Add an entry for each locale
        for (const locale of locales) {
            const localizedPath = getPathname({
                locale,
                href: pathname as "/"
            });

            entries.push({
                url: `${baseUrl}/${locale}${localizedPath === '/' ? '' : localizedPath}`,
                lastModified,
                changeFrequency: pathname === '/' ? 'weekly' : 'monthly',
                priority: getPriority(pathname),
                alternates: {
                    languages: alternates
                }
            });
        }
    }

    return entries;
}

function getPriority(pathname: string): number {
    if (pathname === '/') return 1;
    if (['/logistica', '/ferroviario', '/smart-parking', '/nautica'].includes(pathname)) return 0.9;
    if (['/tecnologia', '/soluzioni', '/smart-city', '/smart-building'].includes(pathname)) return 0.8;
    if (['/chi-siamo', '/contatti', '/knowledge-hub'].includes(pathname)) return 0.7;
    return 0.5;
}
