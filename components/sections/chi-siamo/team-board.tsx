"use client";

import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { TeamGrid } from "./team-grid";
import { DICTIONARY } from "@/lib/dictionary";

export function TeamBoardSection() {
    const d = DICTIONARY.azienda;

    return (
        <SectionWrapper variant="muted">
            <div className="max-w-5xl mx-auto space-y-0">
                {/* Team */}
                {d.team && (
                    <TeamGrid title={d.team.title} members={d.team.members} />
                )}

                {/* Board */}
                {d.board && <TeamGrid title={d.board.title} members={d.board.members} />}
            </div>
        </SectionWrapper>
    );
}
