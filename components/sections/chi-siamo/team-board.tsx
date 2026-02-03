"use client";

import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { TeamGrid } from "./team-grid";
import { DICTIONARY } from "@/lib/dictionary";

export function TeamBoardSection() {
    const d = DICTIONARY.azienda;

    return (
        <SectionWrapper variant="muted">
            <div className="max-w-5xl mx-auto space-y-20">
                {/* Team */}
                {d.team && (
                    <div className="space-y-8">
                        <div className="max-w-2xl" />
                        <TeamGrid title={d.team.title} members={d.team.members} />
                    </div>
                )}

                {/* Board */}
                {d.board && <TeamGrid title={d.board.title} members={d.board.members} />}
            </div>
        </SectionWrapper>
    );
}
