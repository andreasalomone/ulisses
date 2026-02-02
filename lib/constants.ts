import { DICTIONARY } from "./dictionary";

export interface NavLink {
    label: string;
    href: string;
    subLinks?: { label: string; href: string }[];
}

export const NAV_LINKS: NavLink[] = [
    {
        label: DICTIONARY.navigation.soluzioni,
        href: "/soluzioni",
        subLinks: [
            { label: DICTIONARY.navigation.logistica, href: "/logistica" },
            { label: DICTIONARY.navigation.ferroviario, href: "/ferroviario" },
            { label: DICTIONARY.navigation.smartParking, href: "/smart-city" },
        ]
    },
    { label: DICTIONARY.navigation.tecnologia, href: "/tecnologia" },
    { label: DICTIONARY.navigation.risorse, href: "/knowledge-hub" },
    { label: DICTIONARY.navigation.azienda, href: "/azienda" },
    { label: "FAQ", href: "/faq" },
];

export const CONTACT_INFO = {
    email: "info@ulisses.it",
    phone: "+39 377 0855 535",
    address: "Corso Monforte, 41, 20122 Milano (MI)",
};

export const SOCIAL_LINKS = {
    instagram: "https://www.instagram.com/ulisses.life/",
    linkedin: "https://www.linkedin.com/company/ulissesai/",
    facebook: "https://www.facebook.com/ulisses.life",
    whatsapp: "https://wa.me/393770855535",
};

export const SITE_CONFIG = {
    name: "Ulisses",
    description: DICTIONARY.home.hero.h1.slice(0, 160),
    url: "https://ulisses.com",
};
