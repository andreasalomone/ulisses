import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

export function StatsSection() {
    const t = useTranslations('azienda.stats');
    const items = t.raw('items') as { value: string; label: string }[];

    return (
        <SectionWrapper className="py-24 bg-muted/20">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground mb-4">
                        {t('title')}
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {items.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative group h-full"
                        >
                            <div className="h-full flex flex-col items-center justify-center p-8 rounded-3xl bg-background border border-border/40 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 overflow-hidden">
                                {/* Gradient Glow */}
                                <div className="absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10 text-center space-y-3">
                                    <div className="text-5xl md:text-6xl font-black text-primary tracking-tighter tabular-nums group-hover:scale-110 transition-transform duration-500">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-[0.2em] leading-tight">
                                        {stat.label}
                                    </div>
                                </div>

                                {/* Abstract decorative element */}
                                <div className="absolute -bottom-4 -inset-inline-end-4 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
