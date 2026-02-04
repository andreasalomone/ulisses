"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface TeamMember {
    name: string;
    role: string;
    image?: string;
    stack?: string;
    linkedin?: string;
}

interface TeamGridProps {
    title: string;
    members: TeamMember[];
}

const getInitials = (name: string) => {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
};

const getAvatarColor = (name: string) => {
    const colors = [
        "bg-primary/20 text-primary border-primary/30",
        "bg-blue-500/20 text-blue-500 border-blue-500/30",
        "bg-emerald-500/20 text-emerald-500 border-emerald-500/30",
        "bg-amber-500/20 text-amber-500 border-amber-500/30",
        "bg-indigo-500/20 text-indigo-500 border-indigo-500/30"
    ];

    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    return colors[Math.abs(hash) % colors.length];
};

export const TeamGrid = ({ title, members }: TeamGridProps) => {
    return (
        <div className="pt-4 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-border/40 pb-8"
            >
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground">
                        {title}
                    </h2>
                    <div className="h-1.5 w-24 bg-primary rounded-full" />
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, i) => {
                    const initials = getInitials(member.name);
                    const colorClasses = getAvatarColor(member.name);
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group relative flex flex-col p-8 rounded-[2.5rem] bg-background border border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
                        >
                            {/* Header: Large Avatar */}
                            <div className="mb-8 relative">
                                <Avatar className="h-32 w-32 border-4 border-background shadow-xl group-hover:scale-110 transition-transform duration-700 ring-1 ring-border/20">
                                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                                    <AvatarFallback className={`font-bold text-4xl border ${colorClasses}`}>
                                        {initials}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                            </div>

                            {/* Info */}
                            <div className="space-y-2 mb-8">
                                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                                    {member.name}
                                </h3>
                                <p className="text-lg font-medium text-muted-foreground/80">
                                    {member.role}
                                </p>
                            </div>

                            {/* Footer: LinkedIn Link */}
                            <div className="mt-auto pt-6 border-t border-border/10 flex items-center justify-between">
                                <a
                                    href={!member.linkedin || member.linkedin === "#" ? "https://linkedin.com" : member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/ln flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <div className="p-2 rounded-lg bg-muted group-hover/ln:bg-primary/10 transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </div>
                                    <div className="flex flex-col -space-y-0.5">
                                        <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">LinkedIn</span>
                                        <span className="font-bold text-xs uppercase tracking-tight flex items-center gap-1">
                                            Connect
                                            <ArrowUpRight className="w-3 h-3 group-hover/ln:translate-x-0.5 group-hover/ln:-translate-y-0.5 transition-transform" />
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};
