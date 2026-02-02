"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Search,
    Zap,
    Workflow,
    ShieldCheck,
    BarChart3,
    Lock,
    Unlock
} from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";
import { cn } from "@/lib/utils";

const cards = [
    {
        icon: Search,
        key: "search",
        className: "lg:col-span-2 lg:row-span-2 min-h-[400px] md:min-h-[500px]",
        hasAnimation: true,
    },
    {
        icon: ShieldCheck,
        key: "safety",
        className: "",
    },
    {
        icon: Zap,
        key: "efficiency",
        className: "",
    },
    {
        icon: Workflow,
        key: "workflow",
        className: "lg:col-span-1",
    },
    {
        icon: BarChart3,
        key: "performance",
        className: "lg:col-span-1",
    },
];

export function ProcessUnlock() {
    const d = DICTIONARY.logistica;

    return (
        <section className="py-24 overflow-hidden relative">
            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-3xl mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-6xl font-extrabold tracking-tighter mb-6"
                    >
                        {d.hero.unlockTitle}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium"
                    >
                        {d.hero.unlockSubtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, i) => (
                        <FrictionCard
                            key={card.key}
                            content={d.process[i]}
                            Icon={card.icon}
                            className={card.className}
                            hasAnimation={card.hasAnimation}
                            index={i}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FrictionCard({
    content,
    Icon,
    className,
    hasAnimation,
    index
}: {
    content: { problem: string; solution: string };
    Icon: React.ElementType;
    className?: string;
    hasAnimation?: boolean;
    index: number;
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "relative p-8 rounded-[2rem] border overflow-hidden group transition-all duration-500 h-full flex flex-col",
                isHovered
                    ? "bg-primary border-primary shadow-2xl shadow-primary/20 scale-[1.02] z-20"
                    : "bg-card border-border/50 hover:border-border/80",
                className
            )}
        >
            {/* Status HUD */}
            <div className="flex items-center justify-between mb-8 relative z-10">
                <div className={cn(
                    "h-12 w-12 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm",
                    isHovered ? "bg-white text-primary scale-110" : "bg-muted text-muted-foreground"
                )}>
                    <Icon className="h-6 w-6" />
                </div>

                <div className={cn(
                    "px-3 py-1 rounded-full border text-[9px] font-mono tracking-widest flex items-center gap-2 transition-all duration-500",
                    isHovered
                        ? "border-white/40 text-white bg-white/10"
                        : "border-border text-muted-foreground bg-muted/30"
                )}>
                    {isHovered ? (
                        <>
                            <Unlock className="h-2.5 w-2.5" />
                            CON ULISSES
                        </>
                    ) : (
                        <>
                            <Lock className="h-2.5 w-2.5" />
                            SENZA ULISSES
                        </>
                    )}
                </div>
            </div>

            <div className="relative z-10 flex-1 flex flex-col">
                <AnimatePresence mode="wait">
                    {!isHovered ? (
                        <motion.div
                            key="problem"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-bold leading-tight text-foreground/90 transition-colors">
                                {content.problem}
                            </h3>
                            <div className="h-1 w-12 bg-primary/20 rounded-full" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="solution"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl md:text-2xl font-black leading-tight text-white">
                                {content.solution}
                            </h3>
                            <div className="h-1 w-12 bg-white/40 rounded-full" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {hasAnimation && (
                    <div className="mt-auto pt-8">
                        <RadarAnimation active={isHovered} />
                    </div>
                )}
            </div>

            {/* Subtle background wipe accent */}
            <motion.div
                className="absolute inset-0 bg-white/5 pointer-events-none"
                initial={{ x: "-100%" }}
                animate={{ x: isHovered ? "0%" : "-100%" }}
                transition={{ duration: 0.5, ease: "circOut" }}
            />
        </motion.div>
    );
}

function RadarAnimation({ active }: { active: boolean }) {
    return (
        <div className={cn(
            "relative h-64 w-full flex items-center justify-center rounded-[2rem] border transition-all duration-700 overflow-hidden",
            active ? "bg-white/10 border-white/20" : "bg-muted/30 border-border/50"
        )}>
            {/* Grid overlay */}
            <div className={cn(
                "absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px]",
                active && "opacity-20"
            )} />

            {/* Concentric circles */}
            {[1, 2, 3].map((i) => (
                <div
                    key={i}
                    className={cn(
                        "absolute border rounded-full transition-colors duration-700",
                        active ? "border-white/20" : "border-border/30"
                    )}
                    style={{
                        width: `${i * 30}%`,
                        height: `${i * 30}%`,
                        aspectRatio: "1/1"
                    }}
                />
            ))}

            {/* Sweep */}
            <motion.div
                className="absolute w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
                <div className={cn(
                    "absolute top-0 left-1/2 -ml-px w-[2px] h-1/2 transition-colors duration-700",
                    active ? "bg-linear-to-t from-white/40 to-transparent shadow-[0_0_15px_white]" : "bg-linear-to-t from-muted-foreground/20 to-transparent"
                )} />
            </motion.div>

            {/* Signal Dots */}
            {[
                { t: "30%", l: "40%", d: 0 },
                { t: "60%", l: "70%", d: 1 },
                { t: "40%", l: "65%", d: 2 },
            ].map((dot, i) => (
                <motion.div
                    key={i}
                    className={cn(
                        "absolute h-2 w-2 rounded-full transition-all duration-700",
                        active ? "bg-white shadow-[0_0_15px_white]" : "bg-muted-foreground/30"
                    )}
                    style={{ top: dot.t, left: dot.l }}
                    animate={active ? {
                        opacity: [0.4, 1, 0.4],
                        scale: [1, 1.2, 1]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity, delay: dot.d }}
                />
            ))}

            {/* Status indicator inside radar */}
            <div className="absolute bottom-4 left-6 flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm border border-white/10">
                <div className={cn("h-1.5 w-1.5 rounded-full animate-pulse", active ? "bg-white" : "bg-muted-foreground/40")} />
                <span className={cn("text-[8px] font-mono uppercase tracking-tighter", active ? "text-white" : "text-muted-foreground/60")}>
                    {active ? "LIVE_TRACKING" : "SCAN_IDLE"}
                </span>
            </div>
        </div>
    );
}
