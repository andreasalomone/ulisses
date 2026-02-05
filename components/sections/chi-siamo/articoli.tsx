import React from "react";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { useTranslations } from "next-intl";

export function Articoli() {
    const t = useTranslations('azienda.articles');
    const title = t('title');

    const articles = [
        {
            name: "Il Mattino",
            src: "/articoli/Il_Mattino_Logo.png",
            href: "https://www.ilmattino.it/salerno/a_salerno_la_ii_edizione_di_paperless_digital_awards_il_premio_delle_buone_pratiche_digitali_32_finalisti_da_13_regioni_italiane-7478179.html",
            width: 180,
            height: 60,
        },
        {
            name: "Il Sole 24 Ore",
            src: "/articoli/Il_Sole_24_Ore.svg.png",
            href: "https://drive.google.com/file/d/1GKH4762T4R84hpRgFGYCyD5V6wH57JfS/view",
            width: 180,
            height: 60,
        },
        {
            name: "UnionCamere",
            src: "/articoli/Logo_UnionCamere.jpg",
            href: "https://sni.unioncamere.it/notizie/il-circolo-dei-visionari-la-scatolina-magica-di-mattia-tartaglia",
            width: 180,
            height: 60,
        },
        {
            name: "Varese Focus",
            src: "/articoli/VareseFocus-logonero.png",
            href: "https://www.varesefocus.it/linnovazione-delle-startup-lombarde/",
            width: 180,
            height: 60,
        },
        {
            name: "SMAU",
            src: "/articoli/logo-smau.svg",
            href: "https://www.smau.it/casi-di-successo/trenord-testa-una-soluzione-innovativa-per-localizzare-e-gestire-i-treni-in-deposito",
            width: 120,
            height: 60,
        },
        {
            name: "StartupItalia",
            src: "/articoli/logo-startupitalia-red.png",
            href: "https://startupitalia.eu/startup/smau-paris-startup-italiane/",
            width: 180,
            height: 60,
        },
        {
            name: "ANSA",
            src: "/articoli/testata-ansa-768x432.webp",
            href: "https://www.ansa.it/amp/sito/notizie/economia/blu_economy/2025/03/13/nautica-progetto-nazionale-per-trovare-ormeggio-via-telefonino_27898bc9-ce0a-498a-ad25-45e3417ca138.html",
            width: 150,
            height: 60,
        },
    ];

    return (
        <section className="w-full bg-background py-16 overflow-hidden border-y border-border/40">
            <div className="container px-4 mx-auto mb-10 text-center">
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground/80 font-sans">
                    {title}
                </h2>
            </div>
            <Marquee>
                <div className="flex items-center gap-20 md:gap-32 pe-20 md:pe-32">
                    {articles.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center min-w-[150px] lg:min-w-[200px] transition-all duration-500 transform hover:scale-105"
                        >
                            <Image
                                src={item.src}
                                alt={item.name}
                                width={item.width}
                                height={item.height}
                                className="h-10 md:h-12 w-auto object-contain"
                            />
                        </a>
                    ))}
                </div>
            </Marquee>
        </section>
    );
}
