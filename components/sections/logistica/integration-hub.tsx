"use client";

import React, {
    useMemo,
    useRef,
    useEffect,
    useState,
    useCallback
} from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Database,
    Factory,
    Wrench,
    BarChart3,
    Globe,
    Shield,
    Cpu,
    ArrowRightLeft,
    Layers,
    Activity,
    CloudIcon,
    LucideIcon,
    ArrowRight
} from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { cn } from "@/lib/utils";

const externalSystems = [
    { name: "WMS", icon: Database, color: "blue" },
    { name: "MES", icon: Factory, color: "indigo" },
    { name: "CMMS", icon: Wrench, color: "sky" },
    { name: "ERP", icon: Cpu, color: "blue" },
    { name: "ITS", icon: Globe, color: "indigo" },
    { name: "Security", icon: Shield, color: "sky" },
    { name: "BI", icon: BarChart3, color: "blue" },
];

const benefitIcons = [ArrowRightLeft, Layers, Activity];

// --- Types & Constants ---
interface Point3D {
    x: number;
    y: number;
    z: number;
}

interface Node3D extends Point3D {
    name: string;
    icon: LucideIcon;
    angle: number;
}

interface Particle {
    targetNodeIndex: number;
    progress: number;
    speed: number;
    type: "inbound" | "outbound";
}

interface ProjectedNode extends Node3D {
    x2d: number;
    y2d: number;
    scale: number;
    zIndex: number;
    index: number;
}

const CANVAS_SIZE = 800;
const FOCAL_LENGTH = 1000;
const TILT_ANGLE = 0.6; // ~35 degrees perspective

// --- Helper: Core Visual Node ---
function CoreNode({ x, y, scale }: { x: number; y: number; scale: number }) {
    return (
        <motion.div
            className="absolute z-50 pointer-events-none"
            style={{
                left: `${(x / CANVAS_SIZE) * 100}%`,
                top: `${(y / CANVAS_SIZE) * 100}%`,
                transform: `rotateX(0deg) translate(-50%, -50%) scale(${scale})`,
            }}
        >
            <div className="relative group">
                {/* Immersive Auras */}
                <div className="absolute inset-0 -m-8 bg-primary/20 blur-3xl rounded-full animate-pulse" />
                <div className="absolute inset-0 -m-4 bg-primary/10 blur-xl rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

                <div className="h-24 w-24 md:h-32 md:w-32 rounded-[2rem] bg-primary flex items-center justify-center shadow-[0_0_60px_rgba(var(--primary-rgb),0.3)] border border-white/20 relative overflow-hidden">
                    <CloudIcon className="h-10 w-10 md:h-12 md:w-12 text-white relative z-10" />

                    {/* Rotating Background */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-white/10"
                    />

                    {/* Internal Pulsing */}
                    <div className="absolute inset-0 bg-white/5 animate-ping opacity-20" />
                </div>

                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-80">
                    <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-primary/80 uppercase">ULISSES_CORE</span>
                </div>
            </div>
        </motion.div>
    );
}

// --- Helper: External Node ---
function HubNode({
    node,
    isHovered,
    onHover
}: {
    node: ProjectedNode;
    isHovered: boolean;
    onHover: (hovered: boolean) => void
}) {
    const Icon = node.icon;

    return (
        <motion.div
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
            className="absolute pointer-events-auto cursor-pointer"
            style={{
                left: `${(node.x2d / CANVAS_SIZE) * 100}%`,
                top: `${(node.y2d / CANVAS_SIZE) * 100}%`,
                transform: `translate(-50%, -50%) scale(${node.scale})`,
                zIndex: node.zIndex,
            }}
        >
            <div className={cn(
                "h-14 w-14 rounded-2xl bg-card border shadow-lg flex items-center justify-center transition-all duration-300",
                isHovered ? 'border-primary ring-8 ring-primary/5 -translate-y-2' : 'hover:border-primary/40'
            )}>
                <Icon className={cn(
                    "h-6 w-6 transition-colors duration-300",
                    isHovered ? 'text-primary' : 'text-muted-foreground'
                )} />
            </div>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 32, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background/95 backdrop-blur-md px-3 py-1.5 rounded-lg border shadow-xl z-50 pointer-events-none"
                    >
                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                            <span className="text-[11px] font-mono font-bold text-primary uppercase tracking-wider">{node.name}</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function IntegrationHub() {
    const t = useTranslations('logistica');
    const tCommon = useTranslations('common');
    const integrationBullets = t.raw('integration.bullets') as string[];

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [hoveredNode, setHoveredNode] = useState<number | null>(null);
    const [currentProjectedNodes, setCurrentProjectedNodes] = useState<ProjectedNode[]>([]);

    // --- 3D Projection Engine ---
    const project = useCallback((p: Point3D, currentRotation: number) => {
        const cosR = Math.cos(currentRotation);
        const sinR = Math.sin(currentRotation);
        const rx = p.x * cosR - p.z * sinR;
        const rz = p.x * sinR + p.z * cosR;

        const cosT = Math.cos(TILT_ANGLE);
        const sinT = Math.sin(TILT_ANGLE);
        const ry = p.y * cosT - rz * sinT;
        const finalZ = p.y * sinT + rz * cosT;

        // Guard against negative scale or division by zero
        const scale = Math.max(0.1, FOCAL_LENGTH / (FOCAL_LENGTH + finalZ));
        const x2d = (CANVAS_SIZE / 2) + rx * scale;
        const y2d = (CANVAS_SIZE / 2) + ry * scale;

        return { x: x2d, y: y2d, scale, zIndex: Math.round(1000 - finalZ) };
    }, []);

    const nodes = useMemo<Node3D[]>(() =>
        externalSystems.map((sys, i) => {
            const angle = (i * (360 / externalSystems.length) * Math.PI) / 180;
            const radius = 280;
            return {
                ...sys,
                x: radius * Math.cos(angle),
                y: 0,
                z: radius * Math.sin(angle),
                angle
            } as Node3D;
        }), []
    );

    // --- Animation & Draw Loop ---
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let particles: Particle[] = [];
        let frame = 0;
        let lastTime = 0;

        const animate = (time: number) => {
            const dt = (time - lastTime) / 1000 || 0;
            lastTime = time;
            frame++;

            const currentRotation = (time * 0.00018) % (Math.PI * 2);

            // Particles Management
            if (frame % 10 === 0) {
                const targetIdx = Math.floor(Math.random() * nodes.length);
                particles.push({
                    targetNodeIndex: targetIdx,
                    progress: 0,
                    speed: 0.3 + Math.random() * 0.5,
                    type: Math.random() > 0.5 ? "inbound" : "outbound"
                });
            }

            // Drawing logic
            ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

            // 1. Draw Static Connections (Background)
            nodes.forEach((node, i) => {
                const pCore = project({ x: 0, y: 0, z: 0 }, currentRotation);
                const pNode = project(node, currentRotation);
                const isPathHovered = hoveredNode === i;

                ctx.beginPath();
                ctx.moveTo(pCore.x, pCore.y);
                ctx.lineTo(pNode.x, pNode.y);

                ctx.strokeStyle = isPathHovered ? `rgba(37, 99, 235, 0.2)` : `rgba(37, 99, 235, 0.05)`;
                ctx.lineWidth = isPathHovered ? 2 : 1;
                ctx.setLineDash([4, 12]);
                ctx.lineDashOffset = -frame * 0.5;
                ctx.stroke();
            });

            // 2. Update and Draw Particles
            particles = particles.filter(p => p.progress < 1);
            particles.forEach(p => {
                p.progress += p.speed * dt;
                const node = nodes[p.targetNodeIndex];
                const t = p.type === "outbound" ? p.progress : 1 - p.progress;

                const proj = project({
                    x: node.x * t,
                    y: node.y * t,
                    z: node.z * t
                }, currentRotation);

                // Fix: Ensure radius is never negative
                const radius = Math.max(0, 3 * proj.scale);
                const alpha = Math.sin(p.progress * Math.PI);

                ctx.beginPath();
                ctx.arc(proj.x, proj.y, radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(37, 99, 235, ${alpha})`;
                ctx.shadowBlur = Math.max(0, 10 * proj.scale);
                ctx.shadowColor = "rgba(37, 99, 235, 0.5)";
                ctx.fill();
                ctx.shadowBlur = 0;

                // Trail
                ctx.beginPath();
                const trailT = p.type === "outbound" ? Math.max(0, p.progress - 0.1) : Math.min(1, 1 - p.progress + 0.1);
                const trailProj = project({ x: node.x * trailT, y: node.y * trailT, z: node.z * trailT }, currentRotation);
                ctx.moveTo(proj.x, proj.y);
                ctx.lineTo(trailProj.x, trailProj.y);
                ctx.strokeStyle = `rgba(37, 99, 235, ${alpha * 0.3})`;
                ctx.lineWidth = Math.max(0.5, 1 * proj.scale);
                ctx.stroke();
            });

            // 3. Update Sync States (Lower frequency sync for DOM elements)
            if (frame % 1 === 0) {
                const projected = nodes.map((n, i) => {
                    const proj = project(n, currentRotation);
                    return { ...n, x2d: proj.x, y2d: proj.y, scale: proj.scale, zIndex: proj.zIndex, index: i };
                });
                const coreProj = project({ x: 0, y: 0, z: 0 }, currentRotation);
                const coreNode = { name: "CORE", x: 0, y: 0, z: 0, x2d: coreProj.x, y2d: coreProj.y, scale: coreProj.scale, zIndex: coreProj.zIndex, index: -1 } as ProjectedNode;
                setCurrentProjectedNodes([coreNode, ...projected]);
            }

            requestAnimationFrame(animate);
        };

        const reqId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(reqId);
    }, [nodes, project, hoveredNode]);

    return (
        <SectionWrapper variant="muted" className="relative overflow-hidden py-24 md:py-32">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-400/5 blur-[100px] rounded-full" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">

                    {/* LEFT: Content */}
                    <div className="flex-1 w-full lg:max-w-none space-y-10 lg:pt-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                                {t('integration.title')}
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                                {t('integration.text')}
                            </p>
                        </motion.div>

                        <div className="space-y-4">
                            {integrationBullets.map((bullet, i) => {
                                const Icon = benefitIcons[i] || Activity;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                        className="group p-5 bg-card/50 backdrop-blur-md rounded-2xl border border-border/50 hover:border-primary/40 hover:bg-card transition-all duration-300 shadow-sm"
                                    >
                                        <div className="flex gap-4 items-center">
                                            <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <p className="text-[15px] font-semibold text-foreground/90">{bullet}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="pt-6"
                        >
                            <button className="group flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold transition-all hover:gap-5 hover:pr-5 shadow-lg shadow-primary/20">
                                {tCommon('demoCta')}
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </motion.div>
                    </div>

                    {/* RIGHT: Visual Hub */}
                    <div className="flex-1 w-full flex flex-col items-center lg:-mt-12 select-none">
                        <div className="relative w-full h-[400px] md:h-[550px] lg:h-[650px] max-w-[800px] flex items-start justify-center">
                            <canvas
                                ref={canvasRef}
                                width={CANVAS_SIZE}
                                height={CANVAS_SIZE}
                                className="absolute inset-0 w-full h-full pointer-events-none opacity-90"
                            />

                            {currentProjectedNodes.map((p) => {
                                const yOffset = -50;
                                if (p.index === -1) {
                                    return <CoreNode key="core" x={p.x2d} y={p.y2d + yOffset} scale={p.scale} />;
                                }
                                return (
                                    <HubNode
                                        key={p.name}
                                        node={{ ...p, y2d: p.y2d + yOffset }}
                                        isHovered={hoveredNode === p.index}
                                        onHover={(h) => setHoveredNode(h ? p.index : null)}
                                    />
                                );
                            })}
                        </div>

                        {/* Integration Pills */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-2 justify-center max-w-xl -mt-16 relative z-20"
                        >
                            {t('integration.common').split(" • ").map((tag, i) => (
                                <span key={i} className="text-[11px] font-bold px-4 py-1.5 bg-background rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all cursor-default shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
}
