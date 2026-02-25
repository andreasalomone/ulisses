import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from '../i18n';

export const routing = defineRouting({
    locales,
    defaultLocale,
    // SEO-friendly localized pathnames with English slugs for EN locale
    pathnames: {
        '/': '/',
        '/logistica': {
            it: '/logistica',
            en: '/logistics'
        },
        '/ferroviario': {
            it: '/ferroviario',
            en: '/railway'
        },
        '/smart-parking': {
            it: '/smart-parking',
            en: '/smart-parking'
        },
        '/smart-city': {
            it: '/smart-city',
            en: '/smart-city'
        },
        '/smart-building': {
            it: '/smart-building',
            en: '/smart-building'
        },
        '/smart-port': {
            it: '/smart-port',
            en: '/smart-port'
        },
        '/porti-commerciali': {
            it: '/porti-commerciali',
            en: '/commercial-ports'
        },
        '/porti-turistici': {
            it: '/porti-turistici',
            en: '/tourist-ports'
        },
        '/tecnologia': {
            it: '/tecnologia',
            en: '/technology'
        },
        '/ricerca-e-ip': {
            it: '/ricerca-e-ip',
            en: '/research-and-ip'
        },
        '/chi-siamo': {
            it: '/chi-siamo',
            en: '/about-us'
        },
        '/contatti': {
            it: '/contatti',
            en: '/contact'
        },
        '/soluzioni': {
            it: '/soluzioni',
            en: '/solutions'
        },
        '/knowledge-hub': {
            it: '/knowledge-hub',
            en: '/knowledge-hub'
        },
        '/knowledge-hub/[vertical]': {
            it: '/knowledge-hub/[vertical]',
            en: '/knowledge-hub/[vertical]'
        },
        '/knowledge-hub/ferroviario/trenord': {
            it: '/knowledge-hub/ferroviario/trenord',
            en: '/knowledge-hub/railway/trenord'
        },
        '/knowledge-hub/porti-turistici/ministero-turismo': {
            it: '/knowledge-hub/porti-turistici/ministero-turismo',
            en: '/knowledge-hub/tourist-ports/ministry-tourism'
        },
        '/knowledge-hub/[vertical]/[slug]': {
            it: '/knowledge-hub/[vertical]/[slug]',
            en: '/knowledge-hub/[vertical]/[slug]'
        },
        '/privacy': '/privacy',
        '/privacy-policy': '/privacy-policy',
        '/cookie-policy': '/cookie-policy',
        '/terms': '/terms',
        '/termini-e-condizioni': {
            it: '/termini-e-condizioni',
            en: '/terms-and-conditions'
        }
    }
});

export type AppPathname = keyof typeof routing.pathnames;

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
