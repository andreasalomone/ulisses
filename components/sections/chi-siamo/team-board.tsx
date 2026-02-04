import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { TeamGrid } from "./team-grid";
import { useTranslations } from "next-intl";

export function TeamBoardSection() {
    const t = useTranslations('azienda');
    const teamMembers = t.raw('team.members');
    const boardMembers = t.raw('board.members');

    return (
        <SectionWrapper variant="muted">
            <div className="max-w-5xl mx-auto space-y-0">
                {/* Team */}
                {teamMembers && (
                    <TeamGrid title={t('team.title')} members={teamMembers} />
                )}

                {/* Board */}
                {boardMembers && <TeamGrid title={t('board.title')} members={boardMembers} />}
            </div>
        </SectionWrapper>
    );
}
