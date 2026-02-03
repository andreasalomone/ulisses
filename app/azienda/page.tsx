import React from "react";
import { Partners } from "@/components/sections/home/partners";
import { Articoli } from "@/components/sections/chi-siamo/articoli";
import { IntroSection } from "@/components/sections/chi-siamo/intro";
import { MissionSection } from "@/components/sections/chi-siamo/mission";
import { StorySection } from "@/components/sections/chi-siamo/story";
import { EngineRoomSection } from "@/components/sections/chi-siamo/engine-room";
import { TeamBoardSection } from "@/components/sections/chi-siamo/team-board";
import { TestimonialSection } from "@/components/sections/chi-siamo/testimonial";
import { AwardsSection } from "@/components/sections/chi-siamo/awards";
import { FinalCtaSection } from "@/components/sections/chi-siamo/final-cta";

export default function AziendaPage() {
    return (
        <div className="flex flex-col pt-32 pb-0">
            {/* 1. Architecture & Hook (Hero) */}
            <IntroSection />

            {/* 2. Partners (Clienti) */}
            <div className="border-y border-border/40 bg-muted/30">
                <Partners />
            </div>

            {/* 3. Articoli (Parlano di noi) */}
            <div className="border-b border-border/40 bg-background">
                <Articoli />
            </div>

            {/* 4. Mission (Vision) */}
            <MissionSection />

            {/* 5. Story (History/Timeline) */}
            <StorySection />

            {/* 6. Brain Trust (Team) */}
            <TeamBoardSection />

            {/* 6. Engine Room (Technical Expertise) */}
            <EngineRoomSection />

            {/* 7. Review (Social Proof) */}
            <TestimonialSection />

            {/* 8. Validation (Awards) */}
            <AwardsSection />

            {/* 9. Conversion (CTA) */}
            <FinalCtaSection />
        </div>
    );
}

