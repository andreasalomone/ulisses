export interface NavLink {
    label: string;
    href: string;
    subLinks?: { label: string; href: string }[];
}

export const NAV_LINKS: NavLink[] = [
    {
        label: "soluzioni",
        href: "/soluzioni",
        subLinks: [
            { label: "logistica", href: "/logistica" },
            { label: "ferroviario", href: "/ferroviario" },
            { label: "smartParking", href: "/smart-city" },
            { label: "nautica", href: "/nautica" },
        ]
    },
    { label: "tecnologia", href: "/tecnologia" },
    { label: "risorse", href: "/knowledge-hub" },
    { label: "azienda", href: "/azienda" },
    { label: "faq", href: "/faq" },
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
    description: "Con Ulisses hai il controllo totale: una soluzione completa di rete, sensori, dashboard e API pronta per gli ambienti più complessi, indoor e outdoor.",
    url: "https://ulisses.it",
};
