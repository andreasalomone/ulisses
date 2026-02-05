"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

interface Node {
    initialX: number;
    initialY: number;
    animateX: number[];
    animateY: number[];
    duration: number;
}

const NeuralNetwork = () => {
    const [nodes, setNodes] = React.useState<Node[]>([]);

    React.useEffect(() => {
        const generatedNodes = [...Array(6)].map(() => ({
            initialX: Math.random() * 200,
            initialY: Math.random() * 200,
            animateX: [Math.random() * 200, Math.random() * 200, Math.random() * 200],
            animateY: [Math.random() * 200, Math.random() * 200, Math.random() * 200],
            duration: 10 + Math.random() * 10,
        }));
        setNodes(generatedNodes);
    }, []);

    if (nodes.length === 0) return <div className="relative w-full h-full" />;

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Background Neural Grid */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Neural Nodes and Connections */}
            <div className="relative w-64 h-64">
                {nodes.map((node, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.6)]"
                        initial={{
                            x: node.initialX,
                            y: node.initialY,
                            opacity: 0.3
                        }}
                        animate={{
                            x: node.animateX,
                            y: node.animateY,
                            opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                            duration: node.duration,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                    <motion.circle
                        cx="50%"
                        cy="50%"
                        r="80"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-primary/20"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.circle
                        cx="50%"
                        cy="50%"
                        r="120"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-primary/10"
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.05, 0.2, 0.05]
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </svg>

                {/* Core Central Node */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5 backdrop-blur-sm"
                        animate={{
                            boxShadow: [
                                "0 0 20px rgba(var(--primary), 0.1)",
                                "0 0 40px rgba(var(--primary), 0.3)",
                                "0 0 20px rgba(var(--primary), 0.1)"
                            ]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <motion.div
                            className="w-4 h-4 bg-primary rounded-full"
                            animate={{
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export function IntroSection() {
    const t = useTranslations('azienda.hero');

    return (
        <section className="relative pt-0 pb-20 overflow-hidden">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    {/* Text Column */}
                    <motion.div
                        className="flex-1 space-y-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Badge
                            variant="outline"
                            className="bg-primary/5 text-primary border-primary/20 uppercase tracking-[0.2em] text-[10px] py-1.5 px-4 rounded-full font-bold"
                        >
                            {t('label')}
                        </Badge>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-foreground text-pretty">
                            {t.rich('h1', {
                                highlight: (chunks) => <span className="text-primary">{chunks}</span>
                            })}
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl text-pretty opacity-90">
                            {t('text')}
                        </p>
                    </motion.div>

                    {/* Visual Column - Premium Abstract Visual */}
                    <motion.div
                        className="flex-1 w-full relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="relative aspect-square md:aspect-4/3 bg-linear-to-b from-muted/20 to-transparent rounded-3xl overflow-hidden border border-border/40 shadow-2xl">
                            {/* Gradient glows */}
                            <div className="absolute -top-24 -inset-inline-end-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute -bottom-24 -inset-inline-start-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />

                            <NeuralNetwork />

                            {/* Scanning line animation */}
                            <motion.div
                                className="absolute top-0 inset-inline-start-0 w-full h-1 bg-linear-to-inline-end from-transparent via-primary/40 to-transparent z-10"
                                animate={{
                                    top: ["0%", "100%", "0%"]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
