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
        '/nautica': {
            it: '/nautica',
            en: '/nautical'
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
        '/knowledge-hub/nautica/ministero-turismo': {
            it: '/knowledge-hub/nautica/ministero-turismo',
            en: '/knowledge-hub/nautical/ministry-tourism'
        },
        // Standardized benchmark mappings using IT paths as keys
        '/knowledge-hub/logistica/geofencing': {
            it: '/knowledge-hub/logistica/geofencing',
            en: '/knowledge-hub/logistics/geofencing'
        },
        '/knowledge-hub/logistica/carrelli': {
            it: '/knowledge-hub/logistica/carrelli',
            en: '/knowledge-hub/logistics/forklifts'
        },
        '/knowledge-hub/logistica/ambienti-difficili': {
            it: '/knowledge-hub/logistica/ambienti-difficili',
            en: '/knowledge-hub/logistics/tough-environments'
        },
        '/knowledge-hub/ferroviario/manutenzione': {
            it: '/knowledge-hub/ferroviario/manutenzione',
            en: '/knowledge-hub/railway/maintenance'
        },
        '/knowledge-hub/ferroviario/cmms': {
            it: '/knowledge-hub/ferroviario/cmms',
            en: '/knowledge-hub/railway/cmms'
        },
        '/knowledge-hub/ferroviario/materiali-critici': {
            it: '/knowledge-hub/ferroviario/materiali-critici',
            en: '/knowledge-hub/railway/critical-materials'
        },
        '/knowledge-hub/smart-parking/occupancy': {
            it: '/knowledge-hub/smart-parking/occupancy',
            en: '/knowledge-hub/smart-parking/occupancy'
        },
        '/knowledge-hub/smart-parking/enforcement': {
            it: '/knowledge-hub/smart-parking/enforcement',
            en: '/knowledge-hub/smart-parking/enforcement'
        },
        '/knowledge-hub/smart-parking/health': {
            it: '/knowledge-hub/smart-parking/health',
            en: '/knowledge-hub/smart-parking/health'
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
