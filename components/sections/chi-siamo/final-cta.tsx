"use client";

import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { DICTIONARY } from "@/lib/dictionary";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function FinalCtaSection() {
    const d = DICTIONARY.azienda.cta;

    return (
        <SectionWrapper className="py-24 bg-zinc-950 text-zinc-100 overflow-hidden relative">
            {/* High-Tech Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="container max-w-4xl mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-black uppercase tracking-widest">
                        <Sparkles className="w-3 h-3" />
                        Ready to scale?
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance leading-[1.1]">
                        {d.title}
                    </h2>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance font-light leading-relaxed">
                        {d.text.replace(/'/g, "’")}
                    </p>

                    <div className="pt-8">
                        <Button size="lg" className="h-16 px-10 text-xl font-extrabold rounded-2xl shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all group overflow-hidden relative bg-primary text-primary-foreground">
                            <span className="relative z-10 flex items-center gap-3">
                                {d.button}
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
