import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { DICTIONARY } from "@/lib/dictionary";

export default function CookiePolicyPage() {
    return (
        <SectionWrapper>
            <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
                <h1>{DICTIONARY.legal.cookie}</h1>
                <p>
                    Questa è una pagina placeholder per la Cookie Policy.
                </p>
                <p>
                    Questo sito utilizza cookie tecnici necessari al funzionamento. Cookie di profilazione o di terze parti richiedono il consenso esplicito dell&apos;utente.
                </p>
            </div>
        </SectionWrapper>
    );
}
