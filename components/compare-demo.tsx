import React from "react";
import { Compare } from "@/components/ui/compare";

export default function CompareDemo() {
    return (
        <div className="px-1 md:px-8 flex items-center justify-center perspective-midrange transform-3d">
            <div
                style={{
                    transform: "rotateX(15deg) translateZ(80px)",
                }}
                className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 mx-auto"
            >
                <Compare
                    firstImage="/assets/no-uli.png"
                    secondImage="/assets/yes-uli.png"
                    firstImageClassName="object-cover object-top-left"
                    secondImageClassname="object-cover object-top-left"
                    className="h-[250px] w-[200px] md:h-[500px] md:w-[500px] rounded-[22px] md:rounded-lg"
                    slideMode="hover"
                    initialSliderPercentage={100}
                    autoplay={true}
                    autoplayLoop={true}
                    autoplayDuration={2100}
                    autoplayDelay={1500}
                />
            </div>
        </div>
    );
}
