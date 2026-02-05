"use client";

import React, { useRef } from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { useTranslations } from "next-intl";
import { motion, useScroll, useSpring } from "motion/react";

export function StorySection() {
    const t = useTranslations('azienda.story');
    const acts = t.raw('acts') as { label: string; title: string; text: string }[];
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <SectionWrapper className="pt-10 pb-20 md:pt-16 md:pb-32 overflow-hidden">
            <div className="max-w-4xl mx-auto px-10 md:px-12" ref={containerRef}>

                <div className="relative ps-12 md:ps-16 py-4">
                    {/* Background Progress Line */}
                    <div className="absolute inset-inline-start-0 top-0 bottom-0 w-[2px] bg-border/40" />

                    {/* Dynamic Progress Line */}
                    <motion.div
                        className="absolute inset-inline-start-0 top-0 bottom-0 w-[2px] bg-primary origin-top"
                        style={{ scaleY }}
                    />

                    <div className="space-y-24 md:space-y-40">
                        {acts.map((act, idx) => (
                            <motion.div
                                key={idx}
                                className="relative group ps-16 md:ps-24"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                            >
                                {/* Animated Dot */}
                                <div className="absolute -inset-inline-start-[60px] md:-inset-inline-start-[100px] top-1.5 h-6 w-6 rounded-full bg-background border-2 border-border group-hover:border-primary group-hover:scale-125 transition-all duration-500 z-10 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h4 className="text-sm font-bold text-primary uppercase tracking-[0.2em] font-mono">
                                        {act.label}
                                    </h4>

                                    <h3 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                                        {act.title}
                                    </h3>

                                    <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-2xl text-pretty font-light">
                                        {act.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
