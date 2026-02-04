import { MetadataRoute } from "next";
import { locales, defaultLocale } from "@/i18n";
import { getPathname, routing } from "@/i18n/routing";

const baseUrl = "https://ulisses.com";

// Extract static pathnames from routing configuration
const pathnameKeys = Object.keys(routing.pathnames || {}).filter(
    (pathname) => !pathname.includes("[") // Exclude dynamic routes
) as Array<keyof typeof routing.pathnames>;

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = [];

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

        // Use default locale URL as the main entry
        const defaultLocalePath = getPathname({
            locale: defaultLocale,
            href: pathname as "/"
        });

        entries.push({
            url: `${baseUrl}/${defaultLocale}${defaultLocalePath === '/' ? '' : defaultLocalePath}`,
            lastModified: new Date(),
            changeFrequency: pathname === '/' ? 'weekly' : 'monthly',
            priority: getPriority(pathname),
            alternates: {
                languages: alternates
            }
        });

        // Also add the English version as a separate entry
        const enPath = getPathname({
            locale: 'en',
            href: pathname as "/"
        });

        entries.push({
            url: `${baseUrl}/en${enPath === '/' ? '' : enPath}`,
            lastModified: new Date(),
            changeFrequency: pathname === '/' ? 'weekly' : 'monthly',
            priority: getPriority(pathname),
            alternates: {
                languages: alternates
            }
        });
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
