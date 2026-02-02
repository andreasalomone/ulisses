"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, MapPin, Users, Bell, Activity, LucideIcon } from "lucide-react";

interface Persona {
    id: string;
    title: string;
    text: string;
}

interface UseCase {
    id: string; // "asset" | "access" | "events" | "quality"
    title: string;
    text: string;
}

interface SmartBuildingExplorerProps {
    segments: Persona[];
    useCases: UseCase[];
    mapping: Record<string, string[]>;
}

export function SmartBuildingExplorer({
    segments,
    useCases,
    mapping,
}: SmartBuildingExplorerProps) {
    // AUDIT FIX: Map icons by ID to avoid breakage if dictionary order changes.
    const iconMap: Record<string, LucideIcon> = {
        asset: MapPin,
        access: Users,
        events: Bell,
        quality: Activity
    };

    const [selectedId, setSelectedId] = useState(segments[0]?.id);
    const activeUseCases = mapping[selectedId] || [];

    return (
        <div className="flex flex-col gap-12">
            {/* Persona Selector */}
            <div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                role="tablist"
                aria-label="Seleziona scenario Smart Building"
            >
                {segments.map((segment) => (
                    <button
                        key={segment.id}
                        onClick={() => setSelectedId(segment.id)}
                        role="tab"
                        aria-selected={selectedId === segment.id}
                        aria-controls={`panel-${segment.id}`}
                        className={cn(
                            "relative p-8 rounded-[2.5rem] border text-left transition-all duration-500 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                            selectedId === segment.id
                                ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/20 scale-[1.02] border-transparent"
                                : "bg-card/40 backdrop-blur-sm border-primary/10 hover:border-primary/30 hover:bg-card/60"
                        )}
                    >
                        <h3 className="text-xl font-extrabold mb-4">{segment.title}</h3>
                        <p
                            className={cn(
                                "text-sm leading-relaxed",
                                selectedId === segment.id ? "text-primary-foreground/90" : "text-muted-foreground"
                            )}
                        >
                            {segment.text}
                        </p>

                        {/* Selected Indicator */}
                        {selectedId === segment.id && (
                            <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-white animate-pulse" />
                        )}
                    </button>
                ))}
            </div>

            {/* Use Case Grid */}
            <div
                id={`panel-${selectedId}`}
                role="tabpanel"
                className="relative p-8 md:p-12 rounded-[3.5rem] bg-muted/30 border border-primary/5 min-h-[400px]"
            >
                <div className="mb-10 flex items-center justify-between">
                    <h4 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                        Use Case per questa selezione
                    </h4>
                    <div className="hidden md:block text-sm font-medium text-muted-foreground bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
                        {activeUseCases.length} Casi operativi
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {useCases.map((useCase) => {
                        const isActive = activeUseCases.includes(useCase.id);
                        // Fallback to CheckCircle2 if ID doesn't match specific icon
                        const Icon = iconMap[useCase.id] || CheckCircle2;

                        return (
                            <div
                                key={useCase.id}
                                className={cn(
                                    "p-6 rounded-3xl border transition-all duration-700 h-full flex flex-col",
                                    isActive
                                        ? "bg-card shadow-lg translate-y-0 opacity-100 border-primary/20 scale-100"
                                        : "bg-muted/10 opacity-40 border-transparent scale-95 grayscale"
                                )}
                            >
                                <div className={cn(
                                    "h-12 w-12 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500",
                                    isActive ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-muted text-muted-foreground"
                                )}>
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h5 className={cn(
                                    "text-lg font-bold mb-3 transition-colors",
                                    isActive ? "text-foreground" : "text-muted-foreground/60"
                                )}>
                                    {useCase.title}
                                </h5>
                                <p className={cn(
                                    "text-sm leading-relaxed transition-colors",
                                    isActive ? "text-muted-foreground" : "text-muted-foreground/30"
                                )}>
                                    {useCase.text}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Subtle detail element */}
                <div className="absolute bottom-12 right-12 hidden lg:block opacity-5 pointer-events-none">
                    <CheckCircle2 className="h-32 w-32 text-primary" />
                </div>
            </div>
        </div>
    );
}
