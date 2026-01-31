import React from "react";

export interface MarqueeProps {
    children: React.ReactNode
}

export const Marquee: React.FC<MarqueeProps> = ({
    children
}) => {
    return (
        <div className="w-full overflow-hidden z-10">
            <div className="relative flex w-full overflow-hidden pb-8 pt-8">
                <div className="flex w-max animate-marquee [--duration:60s]">
                    {children}
                    {children}
                </div>
            </div>
        </div>
    )
};
