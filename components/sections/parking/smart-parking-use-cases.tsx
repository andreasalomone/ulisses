"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Bell,
    Activity,
    Layers,
    Target,
    Building2,
    Users
} from "lucide-react";
import { BrandText } from "@/components/ui/brand";
import { useTranslations } from "next-intl";

const icons = [LayoutDashboard, Bell, Activity, Layers];
const segmentIcons = [Target, Building2, Users];

export function SmartParkingUseCases() {
    const t = useTranslations('parking');
    const segments = t.raw('segments') as { id: string; title: string; text: string }[];
    const useCases = t.raw('useCases') as { id: string; title: string; text: string }[];

    return (
        <div className="flex flex-col gap-16">
            {/* Top Row: Segments / Targeted Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {segments.map((segment, i) => {
                    const Icon = segmentIcons[i] || Target;
                    return (
                        <motion.div
                            key={segment.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="p-8 rounded-[2.5rem] bg-card border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 group"
                        >
                            <div className="h-12 w-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                <Icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-extrabold mb-4 group-hover:text-primary transition-colors duration-300">
                                <BrandText text={segment.title} />
                            </h3>
                            <p className="text-md text-muted-foreground leading-relaxed">
                                <BrandText text={segment.text} />
                            </p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Bottom Section: Detailed Use Cases in Bento Grid */}
            <div className="space-y-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="space-y-2">
                        <h4 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                            <BrandText text={t('useCasesTitle')} />
                        </h4>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 auto-rows-[280px] md:auto-rows-[300px]">
                    {useCases.map((useCase, i) => {
                        const Icon = icons[i] || Activity;

                        // Bento logic: 4:2 then 2:4
                        const colSpan = i === 0 ? "lg:col-span-4" : i === 1 ? "lg:col-span-2" : i === 2 ? "lg:col-span-2" : "lg:col-span-4";

                        return (
                            <motion.div
                                key={useCase.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={cn(
                                    "group relative p-8 md:p-10 rounded-[3rem] border border-border/50 bg-muted/20 overflow-hidden hover:bg-muted/30 hover:border-primary/20 transition-all duration-500",
                                    colSpan
                                )}
                            >
                                <div className="relative z-10 h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="h-10 w-10 rounded-xl bg-background border border-border flex items-center justify-center text-primary group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div className="h-1.5 w-1.5 rounded-full bg-primary/20 group-hover:bg-primary group-hover:scale-150 transition-all duration-500" />
                                    </div>

                                    <div className="mt-auto space-y-3">
                                        <h5 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                                            <BrandText text={useCase.title} />
                                        </h5>
                                        <p className="text-md text-muted-foreground leading-relaxed max-w-[85%]">
                                            <BrandText text={useCase.text} />
                                        </p>
                                    </div>
                                </div>

                                {/* Abstract background pattern */}
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                                    <Icon className="h-32 w-32" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
