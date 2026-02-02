"use client";

import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Binary, DraftingCompass, PlugZap } from "lucide-react";
import { motion } from "motion/react";

interface TechnologyPillarsProps {
    title: string;
    text: string;
    items: string[];
}

export function TechnologyPillars({ title, text, items }: TechnologyPillarsProps) {
    const icons = [Binary, DraftingCompass, PlugZap];

    return (
        <SectionWrapper className="relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 pointer-events-none">
                <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-4xl mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8"
                >
                    {title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-xl md:text-2xl text-muted-foreground leading-relaxed whitespace-pre-line max-w-3xl border-l-4 border-primary/20 pl-8"
                >
                    {text}
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                {items.map((pillar, i) => {
                    const Icon = icons[i] || Binary;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 + (i * 0.15) }}
                            whileHover={{ y: -8 }}
                            className="group relative flex flex-col h-full"
                        >
                            {/* Card Content */}
                            <div className="relative z-10 flex flex-col h-full bg-card/50 backdrop-blur-sm border border-border/50 p-10 rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/5">

                                {/* Large Number Watermark */}
                                <div className="absolute -right-4 -top-8 text-[12rem] font-black text-foreground/5 leading-none select-none tracking-tighter group-hover:text-primary/5 transition-colors duration-500">
                                    0{i + 1}
                                </div>

                                {/* Icon */}
                                <div className="relative h-18 w-18 mb-10">
                                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative h-full w-full bg-card border border-border/50 rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:scale-105 transition-transform duration-500 group-hover:border-primary/20">
                                        <Icon className="h-8 w-8" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="mt-auto relative">
                                    <h3 className="text-2xl font-bold leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                                        {pillar}
                                    </h3>
                                    <div className="h-1 w-12 bg-primary/20 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-500 ease-out" />
                                </div>
                            </div>

                            {/* Decorative bottom reflection */}
                            <div className="absolute -bottom-4 left-4 right-4 h-4 bg-primary/5 blur-lg rounded-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}
