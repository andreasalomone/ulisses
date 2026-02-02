"use client";

import React from "react";
import { motion } from "motion/react";
import {
    Search,
    Navigation2,
    Shield,
    BarChart2,
    AlertTriangle
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
        <section className="py-24 bg-primary text-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.35_0.14_250)_0%,var(--primary)_100%)]" />
            <div className="absolute inset-0 opacity-[0.15] bg-size-[40px_40px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl lg:text-6xl md:text-5xl font-extrabold tracking-tighter mb-6"
                    >
                        Use case operativi
                    </motion.h2>
                    <div className="h-1 w-24 bg-white rounded-full mb-8" />
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
                                <div className="grid grid-cols-1 lg:grid-cols-2 bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors duration-500">
                                    {/* Content side */}
                                    <div className="p-6 sm:p-8 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                                <Icon className="h-4.5 w-4.5" />
                                            </div>
                                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">Case_S_0{i + 1}</span>
                                        </div>

                                        <h3 className="text-lg md:text-xl font-bold mb-3 tracking-tight">
                                            {content.title}
                                        </h3>
                                        <p className="text-zinc-400 leading-relaxed text-xs md:text-sm">
                                            {content.text}
                                        </p>
                                    </div>

                                    {/* Visual side */}
                                    <div className="h-48 lg:h-auto bg-black/40 border-l border-white/5 flex items-center justify-center p-6 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
                                        <div className="w-full max-w-[140px] aspect-square">
                                            {uc.visual}
                                        </div>
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
        <div className="relative w-full aspect-square max-h-[160px] md:max-h-none flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full text-white/5">
                <rect x="20" y="20" width="160" height="160" rx="20" fill="currentColor" />
                <path d="M40 60 H160 M40 100 H160 M40 140 H160 M80 20 V180 M120 20 V180" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />

                {/* Scanning sweep */}
                <motion.rect
                    width="160" height="2" x="20"
                    fill="var(--muted)"
                    animate={{ y: [20, 180, 20] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{ filter: "drop-shadow(0 0 4px var(--muted))" }}
                    opacity="0.3"
                />

                {/* Detected target lock */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                    <circle cx="110" cy="85" r="4" fill="var(--muted)" />
                    <motion.circle
                        cx="110" cy="85" r="12"
                        fill="none" stroke="var(--muted)" strokeWidth="1"
                        animate={{ scale: [0.5, 1.5], opacity: [1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    <path d="M100 85 H120 M110 75 V95" stroke="var(--muted)" strokeWidth="0.5" opacity="0.5" />
                </motion.g>
            </svg>

            <div className="absolute bottom-4 right-4 text-[8px] font-mono text-muted/60">
                COORD: [110, 85]
            </div>
        </div>
    );
}

function GeofencingVisual() {
    return (
        <div className="relative w-full aspect-square max-h-[160px] md:max-h-none flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Restricted Zone */}
                <rect x="50" y="50" width="100" height="100" rx="10" fill="rgba(239, 68, 68, 0.05)" stroke="rgba(239, 68, 68, 0.2)" strokeWidth="1" strokeDasharray="4 2" />

                {/* Moving Asset */}
                <motion.g
                    animate={{ x: [-60, 20, -60] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <rect x="140" y="90" width="16" height="12" rx="2" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1" />

                    {/* Alarm triggers when passing through boundary */}
                    <motion.circle
                        cx="148" cy="96" r="10"
                        fill="rgba(239, 68, 68, 0.4)"
                        animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0.8, 1.5, 0.8]
                        }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                    />
                </motion.g>

                {/* Boundary Alert line */}
                <motion.rect
                    x="50" y="50" width="100" height="100" rx="10" fill="none" stroke="#ef4444" strokeWidth="2"
                    animate={{ opacity: [0.1, 1, 0.1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            </svg>

            <div className="absolute top-4 flex items-center gap-1.5 text-[8px] md:text-[9px] font-mono text-red-500 bg-red-950/40 px-2 py-1 rounded-full border border-red-500/20 backdrop-blur-sm shadow-xl">
                <AlertTriangle className="h-2.5 w-2.5" />
                GEOFENCE_VIOLATION
            </div>
        </div>
    );
}

function SafetyVisual() {
    return (
        <div className="relative w-full aspect-square max-h-[160px] md:max-h-none flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* SYNCHRONIZED ENTITIES */}

                {/* Forklift Entity (Moving on X) */}
                <motion.g
                    animate={{ x: [-25, 25, -25] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <rect x="40" y="90" width="30" height="20" rx="4" fill="rgba(16, 185, 129, 0.1)" stroke="rgba(16, 185, 129, 0.5)" />
                    <circle cx="48" cy="110" r="3" fill="white" opacity="0.4" />
                    <circle cx="62" cy="110" r="3" fill="white" opacity="0.4" />
                </motion.g>

                {/* Human Entity (Moving on Y) */}
                <motion.g
                    animate={{ y: [-25, 25, -25] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <circle cx="140" cy="100" r="8" fill="rgba(255,255,255,0.1)" stroke="white" strokeOpacity="0.2" />
                    <circle cx="140" cy="100" r="3" fill="#10b981" />
                </motion.g>

                {/* THE SYNCHRONIZED CONNECTOR */}
                <motion.line
                    animate={{
                        x1: [40 + 30 - 25, 40 + 30 + 25, 40 + 30 - 25], // Synchronized with Forklift X
                        y2: [100 - 25, 100 + 25, 100 - 25]             // Synchronized with Person Y
                    }}
                    transition={{
                        x1: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                        y2: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    x1="70" y1="100" x2="140" y2="100"
                    stroke="rgba(16, 185, 129, 0.3)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                />
            </svg>

            <div className="absolute bottom-4 text-[8px] md:text-[9px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20 backdrop-blur-sm shadow-xl">
                SYSTEM: <span className="text-emerald-400 font-bold">SECURE_ZONE</span>
            </div>
        </div>
    );
}

function KPIVisual() {
    return (
        <div className="relative w-full aspect-square max-h-[220px] md:max-h-none flex flex-col items-center justify-center p-6">
            <div className="flex items-end gap-2 h-[40%] w-full justify-center mb-6">
                {[45, 75, 55, 95, 65, 85, 90].map((baseH, i) => (
                    <motion.div
                        key={i}
                        className="w-full max-w-[10px] bg-purple-500/20 rounded-t-sm border-t border-purple-500/40"
                        animate={{
                            height: [`${baseH}%`, `${baseH + 8}%`, `${baseH}%`],
                        }}
                        transition={{
                            duration: 1.5 + i * 0.1,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="grid grid-cols-2 gap-2 w-full">
                <div className="bg-white/5 border border-white/5 p-2 rounded-lg relative overflow-hidden group">
                    <div className="text-[7px] font-mono text-white/40 mb-0.5">LOAD_VAL</div>
                    <div className="text-[9px] md:text-xs font-bold text-purple-400">92%</div>
                </div>
                <div className="bg-white/5 border border-white/5 p-2 rounded-lg relative overflow-hidden group">
                    <div className="text-[7px] font-mono text-white/40 mb-0.5">SYNC_LVL</div>
                    <div className="text-[9px] md:text-xs font-bold text-purple-400">HIGH</div>
                </div>
            </div>
        </div>
    );
}
