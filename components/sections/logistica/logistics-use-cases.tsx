"use client";

import React from "react";
import { motion } from "motion/react";
import {
    Search,
    Navigation2,
    Shield,
    BarChart2,
    Activity,
    MapPin,
    AlertTriangle,
    TrendingUp
} from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";

const useCases = [
    {
        key: "search",
        icon: Search,
        visual: <AssetSearchVisual />,
        color: "primary"
    },
    {
        key: "geofence",
        icon: Navigation2,
        visual: <GeofencingVisual />,
        color: "blue"
    },
    {
        key: "safety",
        icon: Shield,
        visual: <SafetyVisual />,
        color: "orange"
    },
    {
        key: "kpi",
        icon: BarChart2,
        visual: <KPIVisual />,
        color: "purple"
    }
];

export function LogisticsUseCases() {
    const d = DICTIONARY.logistica;

    return (
        <section className="py-24 bg-foreground text-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,1)_0%,rgba(8,12,24,1)_100%)]" />
            <div className="absolute inset-0 opacity-[0.15] bg-size-[40px_40px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-6xl font-extrabold tracking-tighter mb-6"
                    >
                        Use case operativi
                    </motion.h2>
                    <div className="h-1 w-24 bg-primary rounded-full mb-8" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {useCases.map((uc, i) => {
                        const content = d.useCases[i];
                        const Icon = uc.icon;

                        return (
                            <motion.div
                                key={uc.key}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group relative"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-white/10 transition-colors duration-500">
                                    {/* Content side */}
                                    <div className="p-6 sm:p-10 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/30">Case_S_0{i + 1}</span>
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight">
                                            {content.title}
                                        </h3>
                                        <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                                            {content.text}
                                        </p>
                                    </div>

                                    {/* Visual side */}
                                    <div className="h-64 lg:h-auto bg-black/40 border-l border-white/5 flex items-center justify-center p-6 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
                                        {uc.visual}

                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function AssetSearchVisual() {
    return (
        <div className="relative w-full max-w-[200px] aspect-square">
            {/* Map simplified structure */}
            <svg viewBox="0 0 200 200" className="w-full h-full text-white/5">
                <rect x="20" y="20" width="160" height="160" rx="20" fill="currentColor" />
                <path d="M40 60 H160 M40 100 H160 M40 140 H160 M80 20 V180 M120 20 V180" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />
            </svg>

            {/* Search ring */}
            <motion.div
                className="absolute top-1/2 left-1/2 -mt-12 -ml-12 h-24 w-24 border-2 border-primary/50 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Result pin */}
            <motion.div
                className="absolute top-1/2 left-1/2 -mt-3 -ml-3"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_var(--primary)]">
                    <MapPin className="h-3 w-3 text-black" />
                </div>
            </motion.div>

            {/* Asset tag label */}
            <motion.div
                className="absolute top-1/4 right-0 bg-zinc-800/80 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
            >
                <div className="text-[10px] font-mono text-primary flex items-center gap-2">
                    <Activity className="h-3 w-3" />
                    TAG_ID: UL_992
                </div>
            </motion.div>
        </div>
    );
}

function GeofencingVisual() {
    return (
        <div className="relative w-full max-w-[200px] aspect-square flex items-center justify-center">
            {/* Restricted Area */}
            <div className="absolute inset-0 border border-red-500/20 bg-red-500/5 rounded-3xl" />

            {/* Warning line */}
            <svg viewBox="0 0 200 200" className="absolute inset-0">
                <motion.rect
                    x="20" y="20" width="160" height="160" rx="20"
                    fill="none"
                    stroke="rgba(239, 68, 68, 0.5)"
                    strokeWidth="2"
                    strokeDasharray="10 5"
                    animate={{ strokeDashoffset: [0, -15] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
            </svg>

            {/* Entity entering */}
            <motion.div
                className="relative"
                animate={{ x: [0, 40, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="h-10 w-10 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center backdrop-blur-md">
                    <Navigation2 className="h-5 w-5 text-white animate-pulse" />
                </div>

                {/* Alert Pulse */}
                <motion.div
                    className="absolute inset-0 rounded-xl bg-red-500"
                    animate={{ opacity: [0, 0.4, 0], scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>

            <div className="absolute bottom-6 flex items-center gap-2 text-[10px] font-mono text-red-400 bg-red-950/40 px-3 py-1 rounded-full">
                <AlertTriangle className="h-3 w-3" />
                GEOFENCE_BREACH
            </div>
        </div>
    );
}

function SafetyVisual() {
    return (
        <div className="relative w-full max-w-[200px] aspect-square flex items-center justify-center">
            {/* Safety zone grid */}
            <div className="absolute inset-4 border border-emerald-500/10 rounded-full" />

            {/* Entity 1 (Forklift) */}
            <motion.div
                className="absolute left-[30%]"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <div className="h-10 w-10 bg-emerald-500/20 border border-emerald-500/50 rounded-xl flex items-center justify-center">
                    <Shield className="h-5 w-5 text-emerald-400" />
                </div>
            </motion.div>

            {/* Entity 2 (Worker) */}
            <motion.div
                className="absolute right-[30%]"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
            >
                <div className="h-8 w-8 bg-white/10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="h-2 w-2 bg-emerald-400 rounded-full animate-ping" />
                </div>
            </motion.div>

            {/* Proximity line */}
            <svg className="absolute inset-0 w-full h-full">
                <motion.line
                    x1="45%" y1="50%" x2="65%" y2="40%"
                    stroke="rgba(16, 185, 129, 0.3)"
                    strokeWidth="1"
                    strokeDasharray="4 2"
                />
            </svg>

            <div className="absolute bottom-6 text-[10px] font-mono text-emerald-400/60 flex items-center gap-2">
                PROXIMITY: <span className="text-emerald-400">SAFE [4.2m]</span>
            </div>
        </div>
    );
}

function KPIVisual() {
    return (
        <div className="relative w-full max-w-[200px] aspect-square flex flex-col items-center justify-center">
            {/* Mini Chart Bars */}
            <div className="flex items-end gap-1.5 h-16 mb-4">
                {[40, 65, 45, 90, 55, 75, 85].map((h, i) => (
                    <motion.div
                        key={i}
                        className="w-4 bg-purple-500/30 rounded-t-md border-t border-x border-purple-500/50"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="grid grid-cols-2 gap-4 w-full px-4">
                <div className="bg-zinc-800/50 border border-white/5 p-3 rounded-xl overflow-hidden">
                    <div className="text-[10px] font-mono text-white/30 mb-1">EFFICIENCY</div>
                    <div className="text-sm font-bold text-purple-400">+12.4%</div>
                    <TrendingUp className="h-8 w-8 text-purple-500/10 absolute -bottom-2 -right-2" />
                </div>
                <div className="bg-zinc-800/50 border border-white/5 p-3 rounded-xl overflow-hidden">
                    <div className="text-[10px] font-mono text-white/30 mb-1">UPTIME</div>
                    <div className="text-sm font-bold text-purple-400">99.2%</div>
                    <Activity className="h-8 w-8 text-purple-500/10 absolute -bottom-2 -right-2" />
                </div>
            </div>
        </div>
    );
}
