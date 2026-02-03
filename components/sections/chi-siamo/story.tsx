"use client";

import React, { useRef } from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { DICTIONARY } from "@/lib/dictionary";
import { motion, useScroll, useSpring } from "motion/react";

export function StorySection() {
    const d = DICTIONARY.azienda.story;
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
        <SectionWrapper className="py-20 md:py-32 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 md:px-0" ref={containerRef}>
                <div className="mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
                    >
                        {d.title}
                    </motion.h2>
                </div>

                <div className="relative ml-4 md:ml-6 pl-8 md:pl-16 py-4">
                    {/* Background Progress Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-border/40" />

                    {/* Dynamic Progress Line */}
                    <motion.div
                        className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary origin-top"
                        style={{ scaleY }}
                    />

                    <div className="space-y-24 md:space-y-40">
                        {d.acts.map((act, idx) => (
                            <motion.div
                                key={idx}
                                className="relative group"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                            >
                                {/* Animated Dot */}
                                <div className="absolute -left-[41px] md:-left-[73px] top-1.5 h-6 w-6 rounded-full bg-background border-2 border-border group-hover:border-primary group-hover:scale-125 transition-all duration-500 z-10 flex items-center justify-center">
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
