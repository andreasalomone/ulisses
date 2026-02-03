import React from "react";
import { Partners } from "@/components/sections/home/partners";
import { Articoli } from "@/components/sections/chi-siamo/articoli";
import { IntroSection } from "@/components/sections/chi-siamo/intro";
import { MissionSection } from "@/components/sections/chi-siamo/mission";
import { StorySection } from "@/components/sections/chi-siamo/story";
import { StatsSection } from "@/components/sections/chi-siamo/stats";
import { TeamBoardSection } from "@/components/sections/chi-siamo/team-board";
import { TestimonialSection } from "@/components/sections/chi-siamo/testimonial";
import { AwardsSection } from "@/components/sections/chi-siamo/awards";
import { FinalCtaSection } from "@/components/sections/chi-siamo/final-cta";

export default function AziendaPage() {
    return (
        <div className="flex flex-col pt-32 pb-12">
            {/* 1. Premium Intro (No Hero) */}
            <IntroSection />

            {/* 2. Partners (Clienti) */}
            <div className="border-y border-border/40 bg-muted/30">
                <Partners />
            </div>

            {/* 3. Articoli (Parlano di noi) */}
            <div className="border-b border-border/40 bg-background">
                <Articoli />
            </div>

            {/* 4. Mission */}
            <MissionSection />

            {/* 5. Origin Story */}
            <StorySection />

            {/* 6. Stats "By The Numbers" */}
            <StatsSection />

            {/* 7. Team & Board */}
            <TeamBoardSection />

            {/* 8. Review */}
            <TestimonialSection />

            {/* 9. Awards */}
            <AwardsSection />

            {/* 10. Final CTA */}
            <FinalCtaSection />
        </div>
    );
}

