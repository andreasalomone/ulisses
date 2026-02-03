"use client";

import React from "react";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

export function Articoli() {
    const title = "Parlano di noi";

    const articles = [
        {
            name: "Il Mattino",
            src: "/articoli/Il_Mattino_Logo.png",
            width: 180,
            height: 60,
        },
        {
            name: "Il Sole 24 Ore",
            src: "/articoli/Il_Sole_24_Ore.svg.png",
            width: 180,
            height: 60,
        },
        {
            name: "UnionCamere",
            src: "/articoli/Logo_UnionCamere.jpg",
            width: 180,
            height: 60,
        },
        {
            name: "Varese Focus",
            src: "/articoli/VareseFocus-logonero.png",
            width: 180,
            height: 60,
        },
        {
            name: "SMAU",
            src: "/articoli/logo-smau.svg",
            width: 120,
            height: 60,
        },
        {
            name: "StartupItalia",
            src: "/articoli/logo-startupitalia-red.png",
            width: 180,
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
                <div className="flex items-center gap-20 md:gap-32 pr-20 md:pr-32">
                    {articles.map((item) => (
                        <div
                            key={item.name}
                            className="flex items-center justify-center min-w-[150px] lg:min-w-[200px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        >
                            <Image
                                src={item.src}
                                alt={item.name}
                                width={item.width}
                                height={item.height}
                                className="h-10 md:h-12 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </Marquee>
        </section>
    );
}
