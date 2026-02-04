"use client";

import React from "react";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { useTranslations } from "next-intl";

export function Partners() {
    const t = useTranslations('home.partners');

    const partners = [
        {
            name: "CDP",
            src: "/partners/logo-cdp.png",
            width: 130,
            height: 65,
        },
        {
            name: "Trenord",
            src: "/partners/Trenord_Logo.png",
            width: 180,
            height: 52,
        },
        {
            name: "Ministero del Turismo",
            src: "/partners/logo_Ministero del Turismo.png",
            width: 230,
            height: 78,
        },
        {
            name: "Zest",
            src: "/partners/zest.png",
            width: 155,
            height: 52,
        },
        {
            name: "CDP2",
            src: "/partners/logo-cdp.png",
            width: 130,
            height: 65,
        },
        {
            name: "Trenord2",
            src: "/partners/Trenord_Logo.png",
            width: 180,
            height: 52,
        },
        {
            name: "Ministero del Turismo2",
            src: "/partners/logo_Ministero del Turismo.png",
            width: 230,
            height: 78,
        },
        {
            name: "Zest2",
            src: "/partners/zest.png",
            width: 155,
            height: 52,
        },
    ];

    return (
        <section className="w-full bg-background py-12 md:py-16 overflow-hidden">
            <div className="container px-4 mx-auto mb-5 text-center">
                <h2 className="text-md font-bold uppercase tracking-[0.3em] text-muted-foreground/80 font-sans">
                    {t('title')}
                </h2>
            </div>
            <Marquee>
                <div className="flex items-center gap-20 md:gap-32 pr-20 md:pr-32">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="flex items-center justify-center min-w-[150px] lg:min-w-[220px] transition-all duration-500 transform hover:scale-105"
                        >
                            <Image
                                src={partner.src}
                                alt={partner.name}
                                width={partner.width}
                                height={partner.height}
                                className="h-12 md:h-16 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </Marquee>
        </section>
    );
}
