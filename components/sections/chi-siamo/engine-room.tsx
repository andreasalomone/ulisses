import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { useTranslations } from "next-intl";
import { Terminal, Cpu, Network, Code2, Database, Cloud } from "lucide-react";
import { motion } from "motion/react";

export function EngineRoomSection() {
    const t = useTranslations('azienda.engineRoom');
    const stack = t.raw('stack') as { key: string; val: string }[];

    const icons = {
        Method: <Terminal className="w-5 h-5" />,
        Stack: <Code2 className="w-5 h-5" />,
        Infra: <Cloud className="w-5 h-5" />,
        Database: <Database className="w-5 h-5" />,
        Processing: <Cpu className="w-5 h-5" />,
        Network: <Network className="w-5 h-5" />
    };

    return (
        <SectionWrapper className="py-24 bg-zinc-950 text-zinc-100 overflow-hidden relative">
            {/* High-Tech Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-start">
                    {/* Left: Description */}
                    <div className="flex-1 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-widest mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                System Core
                            </div>

                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8 bg-linear-to-b from-white to-zinc-500 bg-clip-text text-transparent">
                                {t('title')}
                            </h2>
                            <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed font-light text-pretty">
                                {t('text')}
                            </p>

                            <div className="mt-12 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                                </div>
                                <p className="font-mono text-sm text-zinc-500 leading-relaxed">
                                    <span className="text-primary font-bold">{">"}</span> status --core-metrics<br />
                                    <span className="text-emerald-500">OPTIMIZED</span> 99.9% reliability achieved<br />
                                    <span className="text-emerald-500">DECOUPLED</span> architectural patterns applied<br />
                                    <span className="text-primary animate-pulse">_</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Stack List */}
                    <div className="flex-1 w-full space-y-4">
                        {stack.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group flex items-center p-6 rounded-2xl bg-zinc-900/40 border border-border/10 hover:border-primary/40 hover:bg-zinc-900/60 transition-all duration-300"
                            >
                                <div className="h-12 w-12 rounded-xl bg-zinc-800/50 flex items-center justify-center mr-6 shrink-0 border border-zinc-700/50 group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:text-primary transition-all">
                                    {icons[item.key as keyof typeof icons] || <Terminal className="w-5 h-5" />}
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-1 font-mono">
                                        {item.key}
                                    </p>
                                    <p className="text-lg md:text-xl font-bold text-zinc-100 font-mono tracking-tight group-hover:text-primary transition-colors">
                                        {item.val}
                                    </p>
                                </div>
                                <motion.div
                                    className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100"
                                    animate={{ scale: [1, 1.5, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
