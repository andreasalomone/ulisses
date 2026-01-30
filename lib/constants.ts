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
            { label: DICTIONARY.navigation.smartParking, href: "/smart-parking" },
        ]
    },
    { label: DICTIONARY.navigation.tecnologia, href: "/tecnologia" },
    { label: DICTIONARY.navigation.azienda, href: "/azienda" },
];

export const CONTACT_INFO = {
    email: "info@ulisses.com",
    phone: "+39 02 1234567",
    address: "Milano, Italia",
};

export const SITE_CONFIG = {
    name: "Ulisses",
    description: DICTIONARY.home.hero.h1.slice(0, 160),
    url: "https://ulisses.com",
};
