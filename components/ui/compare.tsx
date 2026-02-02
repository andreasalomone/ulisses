"use client";
import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { GripVertical } from "lucide-react";

interface CompareProps {
    firstImage?: string;
    secondImage?: string;
    className?: string;
    firstImageClassName?: string;
    secondImageClassname?: string;
    initialSliderPercentage?: number;
    slideMode?: "hover" | "drag";
    showHandlebar?: boolean;
    autoplay?: boolean;
    autoplayDuration?: number;
    autoplayLoop?: boolean;
    autoplayDelay?: number;
}
export const Compare = ({
    firstImage = "",
    secondImage = "",
    className,
    firstImageClassName,
    secondImageClassname,
    initialSliderPercentage = 50,
    slideMode = "hover",
    showHandlebar = true,
    autoplay = false,
    autoplayDuration = 5000,
    autoplayLoop = true,
    autoplayDelay = 0,
}: CompareProps) => {
    const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
    const [isDragging, setIsDragging] = useState(false);

    const sliderRef = useRef<HTMLDivElement>(null);

    const [isMouseOver, setIsMouseOver] = useState(false);

    const autoplayRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoplay = useCallback(() => {
        if (!autoplay) return;

        const startTime = Date.now();
        const animate = () => {
            const elapsedTime = Date.now() - startTime;

            if (autoplayLoop) {
                const totalPhaseTime = autoplayDuration + autoplayDelay;
                const cycleTime = totalPhaseTime * 2;
                const relativeTime = elapsedTime % cycleTime;

                let percentage = 0;
                if (relativeTime < autoplayDuration) {
                    // Phase 1: 100 to 0 (since user typically wants to see the "fix" first)
                    const progress = relativeTime / autoplayDuration;
                    percentage = 100 - progress * 100;
                } else if (relativeTime < totalPhaseTime) {
                    // Phase 2: Stay at 0
                    percentage = 0;
                } else if (relativeTime < totalPhaseTime + autoplayDuration) {
                    // Phase 3: 0 to 100
                    const progress = (relativeTime - totalPhaseTime) / autoplayDuration;
                    percentage = progress * 100;
                } else {
                    // Phase 4: Stay at 100
                    percentage = 100;
                }

                setSliderXPercent(percentage);
                autoplayRef.current = setTimeout(animate, 16); // ~60fps
            } else {
                const progress = Math.min(elapsedTime / autoplayDuration, 1);
                // Animate from initial percentage to 0
                const percentage =
                    initialSliderPercentage - progress * initialSliderPercentage;

                setSliderXPercent(percentage);
                if (progress < 1) {
                    autoplayRef.current = setTimeout(animate, 16); // ~60fps
                }
            }
        };

        animate();
    }, [autoplay, autoplayDuration, autoplayDelay, autoplayLoop, initialSliderPercentage]);

    const stopAutoplay = useCallback(() => {
        if (autoplayRef.current) {
            clearTimeout(autoplayRef.current);
            autoplayRef.current = null;
        }
    }, []);

    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
    }, [startAutoplay, stopAutoplay]);

    function mouseEnterHandler() {
        setIsMouseOver(true);
        stopAutoplay();
    }

    function mouseLeaveHandler() {
        setIsMouseOver(false);
        if (slideMode === "hover") {
            setSliderXPercent(initialSliderPercentage);
        }
        if (slideMode === "drag") {
            setIsDragging(false);
        }
        startAutoplay();
    }

    const handleStart = useCallback(
        (clientX: number) => {
            if (slideMode === "drag") {
                setIsDragging(true);
            }
        },
        [slideMode]
    );

    const handleEnd = useCallback(() => {
        if (slideMode === "drag") {
            setIsDragging(false);
        }
    }, [slideMode]);

    const handleMove = useCallback(
        (clientX: number) => {
            if (!sliderRef.current) return;
            if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
                const rect = sliderRef.current.getBoundingClientRect();
                const x = clientX - rect.left;
                const percent = (x / rect.width) * 100;
                requestAnimationFrame(() => {
                    setSliderXPercent(Math.max(0, Math.min(100, percent)));
                });
            }
        },
        [slideMode, isDragging]
    );

    const handleMouseDown = useCallback(
        (e: React.MouseEvent) => handleStart(e.clientX),
        [handleStart]
    );
    const handleMouseUp = useCallback(() => handleEnd(), [handleEnd]);
    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => handleMove(e.clientX),
        [handleMove]
    );

    const handleTouchStart = useCallback(
        (e: React.TouchEvent) => {
            if (!autoplay) {
                handleStart(e.touches[0].clientX);
            }
        },
        [handleStart, autoplay]
    );

    const handleTouchEnd = useCallback(() => {
        if (!autoplay) {
            handleEnd();
        }
    }, [handleEnd, autoplay]);

    const handleTouchMove = useCallback(
        (e: React.TouchEvent) => {
            if (!autoplay) {
                handleMove(e.touches[0].clientX);
            }
        },
        [handleMove, autoplay]
    );

    return (
        <div
            ref={sliderRef}
            className={cn("w-[400px] h-[400px] overflow-hidden relative", className)}
            style={{
                cursor: slideMode === "drag" ? "grab" : "col-resize",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={mouseLeaveHandler}
            onMouseEnter={mouseEnterHandler}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
        >
            <AnimatePresence initial={false}>
                <motion.div
                    className="h-full w-px absolute top-0 m-auto z-40 bg-linear-to-b from-transparent from-5% to-95% via-indigo-500 to-transparent pointer-events-none"
                    style={{
                        left: `${sliderXPercent}%`,
                        top: "0",
                    }}
                    transition={{ duration: 0 }}
                >
                    <div className="w-36 h-full mask-[radial-gradient(100px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-linear-to-r from-indigo-400 via-transparent to-transparent z-20 opacity-50" />
                    <div className="w-10 h-1/2 mask-[radial-gradient(50px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-linear-to-r from-cyan-400 via-transparent to-transparent z-10 opacity-100" />
                    <div className="w-10 h-3/4 top-1/2 -translate-y-1/2 absolute -right-10 mask-[radial-gradient(100px_at_left,white,transparent)]">
                        <MemoizedSparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={1200}
                            className="w-full h-full"
                            particleColor="#FFFFFF"
                        />
                    </div>
                    {showHandlebar && (
                        <div className="h-5 w-5 rounded-md top-1/2 -translate-y-1/2 bg-white z-30 -right-2.5 absolute flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40]">
                            <GripVertical className="h-4 w-4 text-black" />
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Background Image (Clean/Second) - Shows on the right */}
            <div className="absolute inset-0 z-10 w-full h-full select-none overflow-hidden rounded-2xl">
                {secondImage && (
                    <motion.img
                        alt="second image"
                        src={secondImage}
                        className={cn(
                            "absolute inset-0 w-full h-full object-cover object-top-left",
                            secondImageClassname
                        )}
                        style={{
                            clipPath: `inset(0 0 0 ${sliderXPercent}%)`,
                        }}
                        transition={{ duration: 0 }}
                        draggable={false}
                    />
                )}
            </div>

            {/* Foreground Image (Messy/First) - Shows on the left */}
            <div className="absolute inset-0 z-20 w-full h-full select-none overflow-hidden rounded-2xl pointer-events-none">
                <AnimatePresence initial={false}>
                    {firstImage && (
                        <motion.div
                            className="absolute inset-0 w-full h-full overflow-hidden"
                            style={{
                                clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
                            }}
                            transition={{ duration: 0 }}
                        >
                            <img
                                alt="first image"
                                src={firstImage}
                                className={cn(
                                    "absolute inset-0 w-full h-full object-cover object-top-left",
                                    firstImageClassName
                                )}
                                draggable={false}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

const MemoizedSparklesCore = memo(SparklesCore);
