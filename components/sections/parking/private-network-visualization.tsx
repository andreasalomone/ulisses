"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function PrivateNetworkVisualization() {
    const [packets, setPackets] = useState<{ id: number; pathIndex: number }[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setPackets((prev) => [
                ...prev.slice(-4), // Keep only last few packets
                { id: Date.now(), pathIndex: Math.floor(Math.random() * 3) }
            ]);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Paths from peripheral nodes to center
    const paths = [
        "M 50 50 L 200 200",   // Top Left
        "M 350 50 L 200 200",  // Top Right
        "M 200 350 L 200 200", // Bottom
    ];

    return (
        <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />

            <svg
                viewBox="0 0 400 400"
                className="w-full h-full drop-shadow-2xl"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Connection Lines */}
                {paths.map((path, i) => (
                    <path
                        key={`line-${i}`}
                        d={path}
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeWidth="2"
                        className="text-primary"
                    />
                ))}

                {/* Moving Packets */}
                {packets.map((packet) => (
                    <motion.circle
                        key={packet.id}
                        r="4"
                        fill="currentColor"
                        className="text-primary"
                        initial={{ offsetDistance: "0%" }}
                        animate={{ offsetDistance: "100%" }}
                        transition={{
                            duration: 1.5,
                            ease: "linear",
                        }}
                        style={{
                            offsetPath: `path("${paths[packet.pathIndex]}")`,
                        }}
                    />
                ))}

                {/* Peripheral Nodes */}
                <g className="text-primary">
                    <circle cx="50" cy="50" r="16" fill="currentColor" fillOpacity="0.1" />
                    <circle cx="50" cy="50" r="6" fill="currentColor" />
                    <circle cx="350" cy="50" r="16" fill="currentColor" fillOpacity="0.1" />
                    <circle cx="350" cy="50" r="6" fill="currentColor" />
                    <circle cx="200" cy="350" r="16" fill="currentColor" fillOpacity="0.1" />
                    <circle cx="200" cy="350" r="6" fill="currentColor" />
                </g>

                {/* Central Gateway (Hexagon) */}
                <g transform="translate(200 200)">
                    {/* Pulse Effect */}
                    <motion.circle
                        r="40"
                        fill="currentColor"
                        className="text-primary"
                        initial={{ opacity: 0.1, scale: 0.8 }}
                        animate={{ opacity: 0, scale: 1.5 }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                        }}
                    />

                    {/* Hexagon Shape */}
                    <path
                        d="M 0 -30 L 26 -15 L 26 15 L 0 30 L -26 15 L -26 -15 Z"
                        fill="currentColor"
                        fillOpacity="0.1"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-primary"
                    />

                    {/* Shield Icon (Abstract) inside */}
                    <path
                        d="M -10 -5 L 10 -5 L 10 5 C 10 15 0 20 0 20 C 0 20 -10 15 -10 5 Z"
                        fill="currentColor"
                        className="text-primary"
                    />
                </g>

                {/* "No SIM" Floating Label Effect */}
                <g transform="translate(200 130)">
                    <rect x="-40" y="-12" width="80" height="24" rx="12" fill="var(--background)" stroke="currentColor" strokeOpacity="0.2" className="text-primary shadow-sm" />
                    <text x="0" y="5" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" className="text-muted-foreground uppercase tracking-widest">
                        Private
                    </text>
                </g>
            </svg>
        </div>
    );
}
