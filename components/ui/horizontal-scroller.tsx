"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScrollAreaProps {
    children: React.ReactNode;
}

export function HorizontalScrollArea({ children }: ScrollAreaProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = React.useCallback(() => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(Math.ceil(scrollLeft) > 10);
            setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 10);
        }
    }, []);

    // Use requestAnimationFrame to throttle scroll and resize events globally
    const throttledCheckScroll = React.useCallback(() => {
        requestAnimationFrame(checkScroll);
    }, [checkScroll]);

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", throttledCheckScroll);
        return () => window.removeEventListener("resize", throttledCheckScroll);
    }, [checkScroll, throttledCheckScroll]);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scroller = scrollRef.current;
            // Calculate a scroll distance roughly equal to one card width + gap.
            // A typical card is ~320-400px wide + grab some gap.
            // Better to scroll by the visible client width minus a bit of overlap.
            const scrollAmount = scroller.clientWidth * 0.8;

            scroller.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="relative group/scroller -mx-4 px-4 sm:mx-0 sm:px-0">
            {/* Scroll Container */}
            <div
                ref={scrollRef}
                onScroll={throttledCheckScroll}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pt-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {children}
            </div>

            {/* Left Fade & Button */}
            <div className={`absolute top-0 bottom-8 left-0 w-24 bg-linear-to-r from-background to-transparent pointer-events-none transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`} />

            <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-md shadow-lg border text-foreground p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary z-10 hover:text-primary-foreground ${canScrollLeft ? 'opacity-100 translate-x-2 xl:-translate-x-6' : 'opacity-0 pointer-events-none translate-x-0'}`}
                aria-label="Scorri a sinistra"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Fade & Button */}
            <div className={`absolute top-0 bottom-8 right-0 w-24 bg-linear-to-l from-background to-transparent pointer-events-none transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`} />

            <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background/80 backdrop-blur-md shadow-lg border text-foreground p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary z-10 hover:text-primary-foreground animate-pulse hover:animate-none ${canScrollRight ? 'opacity-100 -translate-x-2 xl:translate-x-6' : 'opacity-0 pointer-events-none translate-x-0'}`}
                aria-label="Scorri a destra"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    );
}
