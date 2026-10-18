import React from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { BrandText } from "@/components/ui/brand";

// Blocco istituzionale PN RIC 2021-2027 (Brand Book Coesione Italia, pp. 39-40 e 45):
// brand unitario, emblema UE e logo MIMIT, che include già l'emblema della Repubblica (caso B).
// Altezze uguali a quella dell'emblema UE, che non può essere più piccolo degli altri loghi
// (allegato IX Reg. (UE) 2021/1060).
const LOGOS = [
    { src: "/funding/coesione-italia-ric.png", width: 736, height: 256, alt: "coesioneItaliaLogo" },
    { src: "/funding/ue-cofinanziato.png", width: 1588, height: 320, alt: "euCofundedLogo" },
    { src: "/funding/mimit.webp", width: 427, height: 117, alt: "mimitLogo" },
] as const;

export async function FundingSection() {
    const t = await getTranslations('home.funding');
    const tA11y = await getTranslations('accessibility');
    const paragraphs = t.raw('paragraphs') as string[];

    return (
        <section aria-labelledby="funding-title" className="bg-white border-t py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    {LOGOS.map((logo, i) => (
                        <React.Fragment key={logo.src}>
                            {i > 0 && (
                                <span
                                    aria-hidden="true"
                                    className="shrink-0 bg-[#C6C6C6] h-px w-16 my-6 lg:my-0 lg:mx-14 lg:h-14 lg:w-px"
                                />
                            )}
                            <Image
                                src={logo.src}
                                alt={tA11y(logo.alt)}
                                width={logo.width}
                                height={logo.height}
                                className="h-12 md:h-14 w-auto max-w-full object-contain"
                            />
                        </React.Fragment>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto mt-12 text-sm text-muted-foreground leading-relaxed space-y-3">
                    <h2 id="funding-title" className="text-lg font-bold text-foreground text-center mb-4">
                        {t('title')}
                    </h2>
                    {paragraphs.map((paragraph) => (
                        <p key={paragraph}>
                            <BrandText text={paragraph} />
                        </p>
                    ))}
                    <p className="font-semibold text-foreground">
                        {t('cup')}
                        <br />
                        {t('expenses')}
                    </p>
                </div>
            </div>
        </section>
    );
}
