"use client";

import React, { useMemo } from "react";
import { motion } from "motion/react";
import {
    Database,
    Factory,
    Wrench,
    BarChart3,
    Globe,
    Shield,
    Cpu,
    ArrowRightLeft,
    Layers,
    Activity,
    CloudIcon
} from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";
import { SectionWrapper } from "@/components/shared/section-wrapper";

const externalSystems = [
    { name: "WMS", icon: Database },
    { name: "MES", icon: Factory },
    { name: "CMMS", icon: Wrench },
    { name: "ERP", icon: Cpu },
    { name: "ITS", icon: Globe },
    { name: "Security", icon: Shield },
    { name: "BI", icon: BarChart3 },
];

const benefitIcons = [ArrowRightLeft, Layers, Activity];

export function IntegrationHub() {
    const d = DICTIONARY.logistica;

    // Use deterministic values based on index to ensure component purity while maintaining visual variance
    const systemVitals = useMemo(() =>
        externalSystems.map((_, i) => ({
            duration: 2 + (i % 3) * 0.8,
            delay: (i % 5) * 0.5
        })), []
    );

    return (
        <SectionWrapper variant="muted" className="overflow-hidden">
            <div className="relative z-10">
                <div className="max-w-4xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                            {d.integration.title}
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {d.integration.text}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Visual Connector Hub */}
                    <div className="lg:col-span-7 relative h-[450px] md:h-[600px] flex items-center justify-center">
                        {/* Background Grid Accent */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                        {/*
                          CRITICAL FIX: Explicit aspect-square container to unify
                          SVG (px) and CSS (%) coordinate systems.
                        */}
                        <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                            {/* Central Node (Ulisses) */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                className="z-30 relative"
                            >
                                <div className="h-24 w-24 md:h-28 md:w-28 rounded-3xl bg-primary flex items-center justify-center shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)] border border-white/20">
                                    <CloudIcon className="h-10 w-10 md:h-12 md:w-12 text-white" />

                                    {/* Pulse effect */}
                                    <div className="absolute inset-0 rounded-3xl bg-primary animate-ping opacity-20" />
                                </div>
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                    <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-primary uppercase">Ulisses_Core</span>
                                </div>
                            </motion.div>

                            {/* Connection Lines & Peripheral Nodes (Desktop Only) */}
                            <div className="hidden md:block absolute inset-0 z-10">
                                <svg className="w-full h-full overflow-visible" viewBox="0 0 500 500">
                                    {externalSystems.map((_, i) => {
                                        const angle = (i * (360 / externalSystems.length) * Math.PI) / 180;
                                        // radius 180 here corresponds to 36% distance in CSS (180/500 = 0.36)
                                        const x2 = 250 + 180 * Math.cos(angle);
                                        const y2 = 250 + 180 * Math.sin(angle);
                                        return (
                                            <g key={i}>
                                                <line
                                                    x1="250" y1="250" x2={x2} y2={y2}
                                                    stroke="currentColor"
                                                    strokeWidth="1"
                                                    className="text-primary/20"
                                                />
                                                <motion.circle
                                                    r="2.5"
                                                    className="fill-primary"
                                                    initial={{ offsetDistance: "0%" }}
                                                    animate={{ offsetDistance: "100%" }}
                                                    transition={{
                                                        duration: systemVitals[i].duration,
                                                        repeat: Infinity,
                                                        ease: "linear",
                                                        delay: systemVitals[i].delay
                                                    }}
                                                    style={{ offsetPath: `path('M 250 250 L ${x2} ${y2}')` }}
                                                />
                                            </g>
                                        );
                                    })}
                                </svg>
                            </div>

                            {/* Peripheral Nodes (Desktop Overlay) */}
                            <div className="hidden md:block absolute inset-0 z-20">
                                {externalSystems.map((sys, i) => {
                                    const angle = (i * (360 / externalSystems.length) * Math.PI) / 180;
                                    const Icon = sys.icon;

                                    return (
                                        <motion.div
                                            key={sys.name}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + i * 0.1 }}
                                            className="absolute h-14 w-14 rounded-xl bg-card border shadow-sm flex items-center justify-center group hover:border-primary transition-colors cursor-default"
                                            style={{
                                                left: `${50 + 36 * Math.cos(angle)}%`,
                                                top: `${50 + 36 * Math.sin(angle)}%`,
                                                transform: 'translate(-50%, -50%)'
                                            }}
                                        >
                                            <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                <span className="text-[9px] font-mono font-bold text-muted-foreground uppercase">{sys.name}</span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Mobile Node Ribbon (Mobile Only) */}
                            <div className="md:hidden absolute w-full bottom-0 flex flex-wrap justify-center gap-3 px-4 z-20">
                                {externalSystems.map((sys, i) => {
                                    const Icon = sys.icon;
                                    return (
                                        <motion.div
                                            key={sys.name}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            className="h-10 w-10 rounded-lg bg-card border shadow-xs flex items-center justify-center"
                                        >
                                            <Icon className="h-4 w-4 text-primary" />
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Bento Benefits */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                            {d.integration.bullets.map((bullet, i) => {
                                const Icon = benefitIcons[i] || Activity;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                        className="group p-6 bg-card rounded-[1.5rem] border hover:border-primary/50 transition-all duration-300 shadow-xs"
                                    >
                                        <div className="flex gap-5 items-start">
                                            <div className="h-10 w-10 shrink-0 rounded-lg bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <p className="font-bold leading-relaxed pt-1.5">{bullet}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="pt-8 border-t border-border"
                        >
                            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Typical_Integrations</p>
                            <div className="p-4 bg-muted/30 rounded-xl border border-dashed border-border flex flex-wrap gap-2">
                                {d.integration.common.split(" • ").map((tag, i) => (
                                    <span key={i} className="text-sm font-medium px-2 py-0.5 bg-background rounded-md border text-foreground/80">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
