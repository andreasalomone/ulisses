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
            { label: "smartPort", href: "/smart-port" },
        ]
    },
    { label: "tecnologia", href: "/tecnologia" },
    { label: "risorse", href: "/knowledge-hub" },
    { label: "azienda", href: "/azienda" },
    { label: "faq", href: "/faq" },
];

export const CONTACT_INFO = {
    email: "info@ulisses.it",
    phone: "0331939779",
    address: "Via Francia 1 - 21013 Gallarate VA",
};

export const SOCIAL_LINKS = {
    instagram: "https://www.instagram.com/ulisses.iot/",
    linkedin: "https://www.linkedin.com/company/ulissesiot/",
    facebook: "https://www.facebook.com/ulisses.iot",
};

export const SITE_CONFIG = {
    name: "Ulisses",
    description: "Con Ulisses hai il controllo totale: una soluzione completa di rete, sensori, dashboard e API pronta per gli ambienti più complessi, indoor e outdoor.",
    url: "https://ulisses.it",
};

export const SCENARIO_KEYS = [
    "logistics",
    "railway",
    "smart-parking",
    "smart-building",
    "other"
] as const;

export const OBJECTIVE_KEYS = [
    "reduce_search",
    "geofencing",
    "occupancy",
    "duration",
    "traceability",
    "flow_monitoring",
    "integration",
    "other"
] as const;

export const PLATFORM_KEYS = [
    "wms",
    "cmms",
    "its",
    "bi",
    "erp",
    "none",
    "other"
] as const;

export const TIMING_KEYS = [
    "0_3_months",
    "3_6_months",
    "6_12_months",
    "exploration"
] as const;
