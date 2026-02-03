"use client";

import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { DICTIONARY } from "@/lib/dictionary";
import { motion } from "motion/react";
import { Lightbulb, Shield, Zap, Target, Rocket, Heart } from "lucide-react";

export function ValuesSection() {
    const d = DICTIONARY.azienda.values;

    const getIcon = (title: string) => {
        const t = title.toLowerCase();
        if (t.includes("innov") || t.includes("tech")) return <Zap className="w-8 h-8" />;
        if (t.includes("integ") || t.includes("etic")) return <Shield className="w-8 h-8" />;
        if (t.includes("eccel") || t.includes("qual")) return <Target className="w-8 h-8" />;
        if (t.includes("passio") || t.includes("cuor")) return <Heart className="w-8 h-8" />;
        if (t.includes("vision") || t.includes("futur")) return <Rocket className="w-8 h-8" />;
        return <Lightbulb className="w-8 h-8" />;
    };

    return (
        <SectionWrapper className="py-24 bg-muted/30">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                        {d.title}
                    </h2>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {d.items.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative h-full"
                        >
                            <div className="h-full p-8 md:p-10 rounded-[2rem] bg-background border border-border/40 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden">
                                {/* Glass background effect */}
                                <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-6 p-4 rounded-2xl bg-primary/5 text-primary inline-flex self-start group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                                        {getIcon(v.title)}
                                    </div>

                                    <h3 className="font-bold text-2xl mb-4 group-hover:text-primary transition-colors">
                                        {v.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-lg">
                                        {v.text}
                                    </p>
                                </div>

                                {/* Abstract accent */}
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
