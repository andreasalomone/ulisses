import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { DICTIONARY } from "@/lib/dictionary";

export default function PrivacyPolicyPage() {
    return (
        <SectionWrapper>
            <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
                <h1>{DICTIONARY.legal.privacy}</h1>
                <p>
                    Questa è una pagina placeholder per la Privacy Policy. In produzione, qui andrà inserito il testo legale completo conforme al GDPR.
                </p>
                <p>
                    Ulisses tratta i dati personali nel rispetto delle normative vigenti. Per informazioni dettagliate, contattare il responsabile del trattamento.
                </p>
            </div>
        </SectionWrapper>
    );
}
