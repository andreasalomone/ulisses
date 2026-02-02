"use client";

import React from "react";
import { motion } from "motion/react";

export function DataCenterVisualization() {
    return (
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
            <svg
                viewBox="0 0 600 600"
                className="w-full h-full drop-shadow-2xl"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="monolithGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />
                        <stop offset="50%" stopColor="currentColor" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
                    </linearGradient>

                    <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                        <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                    </linearGradient>

                    <filter id="softGlow">
                        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* --- Ambient Background Glow --- */}
                <circle cx="300" cy="300" r="200" fill="var(--primary)" fillOpacity="0.03" filter="url(#softGlow)" />

                {/* --- Floating Abstract Data Nodes (Background) --- */}
                <g className="text-primary" opacity="0.2">
                    {[...Array(5)].map((_, i) => (
                        <motion.circle
                            key={`node-${i}`}
                            cx={150 + i * 75}
                            cy={300 + (i % 2 === 0 ? -100 : 100)}
                            r="2"
                            fill="currentColor"
                            animate={{
                                y: [-10, 10, -10],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 4 + i,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.5
                            }}
                        />
                    ))}
                    {/* Connecting Lines */}
                    <path d="M150 200 L225 400 L300 200 L375 400 L450 200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                </g>

                {/* --- The Monolith (Abstract Server Rack) --- */}
                <motion.g
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Main Body */}
                    <rect x="220" y="100" width="160" height="400" rx="20" fill="url(#monolithGradient)" stroke="currentColor" strokeOpacity="0.1" />

                    {/* Inner Core (Darker) */}
                    <rect x="235" y="115" width="130" height="370" rx="12" fill="currentColor" fillOpacity="0.05" />

                    {/* Scanning Pulse Animation */}
                    <motion.rect
                        x="235"
                        y="115"
                        width="130"
                        height="40"
                        fill="url(#pulseGradient)"
                        opacity="0.3"
                        initial={{ y: 0 }}
                        animate={{ y: [0, 330, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{ mask: "url(#mask)" }} // If we added a mask, but for simple rect clipping isn't strictly needed if bounded correctly visually.
                    />

                    {/* Abstract Server Blades (Minimalist Lines) */}
                    {[...Array(12)].map((_, i) => (
                        <rect
                            key={`blade-${i}`}
                            x="245"
                            y={140 + i * 28}
                            width="110"
                            height="4"
                            rx="2"
                            fill="currentColor"
                            fillOpacity={0.1 + (i % 3) * 0.05} // Subtle variation
                        />
                    ))}

                    {/* Active Status Indicator (Breathing) */}
                    <motion.circle
                        cx="300"
                        cy="460"
                        r="3"
                        fill="var(--primary)"
                        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        filter="url(#softGlow)"
                    />
                </motion.g>

                {/* --- Data Flow (Subtle Vertical Particles) --- */}
                <g className="text-primary">
                    {[...Array(3)].map((_, i) => (
                        <motion.circle
                            key={`flow-${i}`}
                            cx={290 + i * 10}
                            cy="520"
                            r="1.5"
                            fill="currentColor"
                            initial={{ y: 0, opacity: 0 }}
                            animate={{ y: -30, opacity: [0, 1, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut",
                                delay: i * 0.7
                            }}
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
}
