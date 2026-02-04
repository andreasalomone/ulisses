"use client";

import React from "react";
import { motion } from "motion/react";
import {
    Search,
    Package,
    Wrench,
    FileCheck,
    AlertTriangle,
    CheckCircle2,
    Database
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandText } from "@/components/ui/brand";
import { useTranslations } from "next-intl";

const useCases = [
    {
        key: "search",
        icon: Search,
        visual: <AssetSearchVisual />,
        color: "primary"
    },
    {
        key: "materials",
        icon: Package,
        visual: <GeofencingVisual />,
        color: "blue"
    },
    {
        key: "workflow",
        icon: Wrench,
        visual: <WorkflowVisual />,
        color: "orange"
    },
    {
        key: "audit",
        icon: FileCheck,
        visual: <KPIVisual />,
        color: "purple"
    }
];

export function FerroviarioUseCases() {
    const t = useTranslations('ferroviario');
    const useCasesContent = t.raw('useCases') as { title: string; text: string }[];

    return (
        <section className="py-24 bg-primary text-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.35_0.14_250)_0%,var(--primary)_100%)]" />
            <div className="absolute inset-0 opacity-[0.1] bg-size-[40px_40px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8"
                    >
                        <BrandText text="Use case operativi" />
                    </motion.h2>
                    <div className="h-1.5 w-32 bg-white/20 rounded-full mb-8 relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-white"
                            initial={{ x: "-100%" }}
                            whileInView={{ x: "0%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "circOut" }}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
                    {useCases.map((uc, i) => {
                        const content = useCasesContent[i];
                        const Icon = uc.icon;

                        // Bento Grid logic: 3:3, 4:2 pattern (different from logistica for subtle variety)
                        const colSpan = i < 2 ? "lg:col-span-3" : i === 2 ? "lg:col-span-4" : "lg:col-span-2";

                        return (
                            <motion.div
                                key={uc.key}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                                className={cn(
                                    "group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10",
                                    colSpan
                                )}
                            >
                                {/* Inner Gradient mapping */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
                                </div>

                                <div className="h-full flex flex-col p-8 md:p-10">
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-white border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 shadow-xl">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/40">S_0{i + 1}</span>
                                    </div>

                                    <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                                        <div className="space-y-4">
                                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                                                <BrandText text={content.title} />
                                            </h3>
                                            <p className="text-zinc-400 leading-relaxed text-sm md:text-base max-w-sm">
                                                <BrandText text={content.text} />
                                            </p>
                                        </div>

                                        <div className="flex justify-end items-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
                                            <div className="w-full max-w-[160px] aspect-square flex items-center justify-center">
                                                {uc.visual}
                                            </div>
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
                {/* Railway Tracks background */}
                <path d="M20 140 H180 M20 145 H180" stroke="white" strokeWidth="1" strokeOpacity="0.1" fill="none" />
                {[30, 60, 90, 120, 150].map(x => (
                    <line key={x} x1={x} y1="138" x2={x} y2="147" stroke="white" strokeWidth="1" strokeOpacity="0.05" />
                ))}

                <rect x="20" y="20" width="160" height="160" rx="20" fill="currentColor" />
                <path d="M40 60 H160 M40 100 H160 M80 20 V180 M120 20 V180" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />

                {/* Scanning sweep */}
                <motion.rect
                    width="160" height="2" x="20"
                    fill="var(--muted)"
                    animate={{ y: [20, 180, 20] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{ filter: "drop-shadow(0 0 4px var(--muted))" }}
                    opacity="0.3"
                />

                {/* Detected Wagon */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                    <rect x="90" y="75" width="40" height="20" rx="2" fill="var(--muted)" fillOpacity="0.2" stroke="var(--muted)" strokeWidth="1" />
                    <circle cx="100" cy="95" r="3" fill="var(--muted)" />
                    <circle cx="120" cy="95" r="3" fill="var(--muted)" />

                    <motion.circle
                        cx="110" cy="85" r="25"
                        fill="none" stroke="var(--muted)" strokeWidth="1"
                        animate={{ scale: [0.5, 1.2], opacity: [1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                </motion.g>
            </svg>

            <div className="absolute bottom-4 right-4 text-[8px] font-mono text-muted/60">
                WAGON_ID: [XA-402]
            </div>
        </div>
    );
}

function GeofencingVisual() {
    return (
        <div className="relative w-full aspect-square max-h-[160px] md:max-h-none flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Rails background path */}
                <path d="M20 100 H180" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                <path d="M20 105 H180" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />

                {/* Restricted Zone - Depot Area */}
                <rect x="50" y="50" width="100" height="100" rx="10" fill="rgba(239, 68, 68, 0.05)" stroke="rgba(239, 68, 68, 0.2)" strokeWidth="1" strokeDasharray="4 2" />

                {/* Moving Asset - Rail Component */}
                <motion.g
                    animate={{ x: [-60, 20, -60] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <rect x="140" y="90" width="20" height="15" rx="2" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1" />
                    <rect x="144" y="92" width="12" height="4" rx="1" fill="white" fillOpacity="0.2" />

                    {/* Alarm triggers when passing through boundary */}
                    <motion.circle
                        cx="150" cy="97" r="12"
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
                DEPOT_RESTRICTED_ACCESS
            </div>
        </div>
    );
}

function WorkflowVisual() {
    return (
        <div className="relative w-full aspect-square max-h-[160px] md:max-h-none flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Component being checked */}
                <rect x="60" y="70" width="80" height="60" rx="4" fill="rgba(249, 115, 22, 0.05)" stroke="rgba(249, 115, 22, 0.2)" strokeWidth="1" />

                {/* Internal components / gears representation */}
                <motion.circle
                    cx="85" cy="100" r="12"
                    fill="none" stroke="rgba(249, 115, 22, 0.3)" strokeWidth="2" strokeDasharray="4 2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                    cx="115" cy="100" r="8"
                    fill="none" stroke="rgba(249, 115, 22, 0.3)" strokeWidth="2" strokeDasharray="3 1"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                {/* Connection to CMMS/Cloud */}
                <motion.path
                    d="M100 70 V40 H140"
                    fill="none"
                    stroke="rgba(249, 115, 22, 0.4)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.8, 1] }}
                >
                    <rect x="135" y="30" width="40" height="20" rx="4" fill="#f97316" />
                    <text x="140" y="43" fill="white" fontSize="6" fontWeight="bold">CMMS</text>
                </motion.g>
            </svg>

            <div className="absolute bottom-4 flex items-center gap-1.5 text-[8px] md:text-[9px] font-mono text-orange-400 bg-orange-950/40 px-2.5 py-1 rounded-full border border-orange-500/20 backdrop-blur-sm shadow-xl">
                <Database className="h-2.5 w-2.5" />
                MAINTENANCE_SYNC: <span className="text-orange-400 font-bold">READY</span>
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

            <div className="absolute bottom-4 flex items-center gap-1.5 text-[8px] md:text-[9px] font-mono text-purple-400 bg-purple-950/40 px-2.5 py-1 rounded-full border border-purple-500/20 backdrop-blur-sm shadow-xl">
                <CheckCircle2 className="h-2.5 w-2.5" />
                AUDIT_STATUS: <span className="text-purple-400 font-bold">COMPLIANT</span>
            </div>
        </div>
    );
}
