"use client";

import React from "react";
import { motion } from "motion/react";
import {
    Search,
    Zap,
    Workflow,
    ShieldCheck,
    BarChart3,
    ArrowUpRight
} from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";
import { cn } from "@/lib/utils";

const cards = [
    {
        icon: Search,
        key: "search",
        className: "lg:col-span-2 lg:row-span-2 bg-primary/5 border-primary/20 min-h-[400px] md:min-h-[500px]",
        iconColor: "text-primary",
        hasAnimation: true,
    },
    {
        icon: ShieldCheck,
        key: "safety",
        className: "bg-orange-500/5 border-orange-500/20",
        iconColor: "text-orange-500",
    },
    {
        icon: Zap,
        key: "efficiency",
        className: "bg-blue-500/5 border-blue-500/20",
        iconColor: "text-blue-500",
    },
    {
        icon: Workflow,
        key: "workflow",
        className: "lg:col-span-1 bg-emerald-500/5 border-emerald-500/20",
        iconColor: "text-emerald-500",
    },
    {
        icon: BarChart3,
        key: "performance",
        className: "lg:col-span-1 bg-purple-500/5 border-purple-500/20",
        iconColor: "text-purple-500",
    },
];

export function ProcessUnlock() {
    const d = DICTIONARY.logistica;

    return (
        <section className="py-24 overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mb-16 px-4 md:px-0">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6"
                    >
                        {d.hero.unlockTitle}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground leading-relaxed"
                    >
                        {d.hero.unlockSubtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, i) => {
                        const Icon = card.icon;
                        const content = d.process[i];

                        return (
                            <motion.div
                                key={card.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className={cn(
                                    "relative p-6 md:p-8 rounded-[2rem] border overflow-hidden group cursor-pointer transition-colors hover:bg-muted/50 flex flex-col",
                                    card.className
                                )}
                            >
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className={cn(
                                        "h-12 w-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 shadow-sm",
                                        card.className.split(' ').find(c => c.startsWith('bg-'))?.replace('/5', '/10') || "bg-muted"
                                    )}>
                                        <Icon className={cn("h-6 w-6", card.iconColor)} />
                                    </div>

                                    <h3 className="text-xl font-bold mb-4 pr-8 leading-tight">
                                        {content}
                                    </h3>

                                    {card.hasAnimation && (
                                        <div className="flex-1 min-h-[250px] md:min-h-[300px] mt-4">
                                            <RadarAnimation status={d.hero.radarStatus} />
                                        </div>
                                    )}

                                    <div className="absolute top-6 md:top-8 right-6 md:right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                </div>

                                {/* Background glow */}
                                <div className={cn(
                                    "absolute -bottom-24 -right-24 h-48 w-48 blur-[80px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500",
                                    card.iconColor.replace('text-', 'bg-')
                                )} />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function RadarAnimation({ status }: { status: string }) {
    return (
        <div className="relative h-full w-full flex items-center justify-center bg-card/30 rounded-[2.5rem] border border-primary/10 overflow-hidden shadow-inner">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-[0.05]" />

            {/* Radar concentric circles */}
            {[1, 2, 3, 4].map((i) => (
                <div
                    key={i}
                    className="absolute border border-primary/15 rounded-full"
                    style={{
                        width: `${i * 25}%`,
                        height: `${i * 25}%`,
                        aspectRatio: "1/1"
                    }}
                />
            ))}

            {/* Crosshair lines */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-primary/5" />
            <div className="absolute left-0 top-1/2 w-full h-px bg-primary/5" />

            {/* Radar sweep */}
            <motion.div
                className="absolute w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute top-0 left-1/2 -ml-px w-[3px] h-1/2 bg-linear-to-t from-primary/30 to-transparent shadow-[0_0_15px_var(--primary)]" />
            </motion.div>

            {/* Moving dots (assets) */}
            {[
                { top: "25%", left: "35%", delay: 0 },
                { top: "65%", left: "75%", delay: 1.2 },
                { top: "45%", left: "55%", delay: 2.8 },
                { top: "80%", left: "30%", delay: 3.5 },
                { top: "15%", left: "65%", delay: 0.5 },
            ].map((dot, i) => (
                <motion.div
                    key={i}
                    className="absolute h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]"
                    style={{ top: dot.top, left: dot.left }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0.6, 1.4, 0.6]
                    }}
                    transition={{
                        duration: 4,
                        delay: dot.delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}

            <div className="absolute bottom-4 md:bottom-6 left-6 md:left-8 flex items-center gap-2 md:gap-3 bg-background/50 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-primary/10 shadow-sm">
                <div className="h-1.5 md:h-2 w-1.5 md:w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[9px] md:text-[11px] font-mono text-primary/80 uppercase tracking-widest">{status}</span>
            </div>

            {/* Coordinate labels - hidden on mobile */}
            <div className="absolute top-6 left-8 text-[9px] font-mono text-primary/30 uppercase tracking-[0.2em] hidden md:block">
                COORD_LAT: 45.4642° N
            </div>
            <div className="absolute top-6 right-8 text-[9px] font-mono text-primary/30 uppercase tracking-[0.2em] hidden md:block">
                COORD_LNG: 9.1900° E
            </div>
        </div>
    );
}
