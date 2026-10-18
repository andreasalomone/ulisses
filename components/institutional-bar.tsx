import React from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

// Blocco istituzionale PN RIC 2021-2027 (Brand Book Coesione Italia, pp. 39-40 e 45):
// brand unitario, emblema UE e logo MIMIT, che include già l'emblema della Repubblica (caso B).
// Le altezze sono uguali a quella dell'emblema UE, come richiesto dall'allegato IX Reg. (UE) 2021/1060.
const LOGOS = [
    { src: "/funding/coesione-italia-ric.png", width: 570, height: 192, alt: "coesioneItaliaLogo" },
    { src: "/funding/ue-cofinanziato.png", width: 953, height: 192, alt: "euCofundedLogo" },
    { src: "/funding/mimit.webp", width: 427, height: 117, alt: "mimitLogo" },
] as const;

export async function InstitutionalBar() {
    const tA11y = await getTranslations('accessibility');

    return (
        <div
            role="region"
            aria-label={tA11y('institutionalBar')}
            className="h-(--institutional-bar-h) bg-white border-b border-border"
        >
            <div className="container mx-auto h-full px-4 md:px-6 flex items-center justify-center md:justify-start">
                <div className="flex items-center min-w-0">
                    {LOGOS.map((logo, i) => (
                        <React.Fragment key={logo.src}>
                            {i > 0 && (
                                <span aria-hidden="true" className="mx-3 md:mx-10 h-6 md:h-10 w-px shrink-0 bg-[#C6C6C6]" />
                            )}
                            <Image
                                src={logo.src}
                                alt={tA11y(logo.alt)}
                                width={logo.width}
                                height={logo.height}
                                className="h-6 md:h-10 w-auto min-w-0 object-contain"
                                priority
                            />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
