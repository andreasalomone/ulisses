"use client";

import React from "react";
import Image from "next/image";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Trophy } from "lucide-react";
import { useTranslations } from "next-intl";

interface AwardItem {
    title: string;
    year: string;
    image: string;
}

export function AwardsSection() {
    const t = useTranslations('azienda.awards');
    const items = t.raw('items') as AwardItem[];

    return (
        <SectionWrapper>
            <div id="awards" className="">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-widest">
                        <Trophy className="h-4 w-4" />
                        {t('label')}
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8">{t('title')}</h2>
                    <p className="text-xl text-muted-foreground">{t('text')}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item: AwardItem, i: number) => (
                        <div
                            key={i}
                            className="flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-card/50 backdrop-blur-sm border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
                        >
                            {/* Decorative background glow */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />

                            <div className="relative h-32 w-full mb-8 flex items-center justify-center p-4 bg-white/50 dark:bg-white/5 rounded-2xl overflow-hidden border border-white/20">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="grow">
                                <h3 className="font-extrabold text-xl mb-2 tracking-tight line-clamp-2">{item.title}</h3>
                                <p className="text-primary font-bold text-lg">{item.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
