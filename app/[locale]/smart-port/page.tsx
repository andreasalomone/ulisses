import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SmartPortPage({
    params: { locale }
}: {
    params: { locale: string }
}) {
    setRequestLocale(locale);
    const t = useTranslations("smartPort");
    const commonT = useTranslations("common");

    const subPages = [
        {
            id: "porti-commerciali",
            href: "/porti-commerciali",
            title: t("cards.commerciali.title"),
            description: t("cards.commerciali.subtitle"),
            image: "/assets/porto-commerciale.png",
            cta: t("cards.commerciali.cta") || commonT("actions.discoverMore"),
        },
        {
            id: "porti-turistici",
            href: "/porti-turistici",
            title: t("cards.turistici.title"),
            description: t("cards.turistici.subtitle"),
            image: "/assets/nautica.png",
            cta: t("cards.turistici.cta") || commonT("actions.discoverMore"),
        }
    ];

    return (
        <>
            <VerticalHero
                title={t("hero.title")}
                subtitle={t("hero.subtitle")}
                titleToken={t("hero.titleToken")}
                image="/assets/smart-port.jpg"
            />

            <SectionWrapper id="sub-pages" variant="default" className="pt-8 pb-24 md:pt-12 md:pb-32">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {subPages.map((page) => (
                        <Link key={page.id} href={page.href as React.ComponentProps<typeof Link>["href"]} className="group h-full flex flex-col">
                            <Card className="h-full overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 bg-background/50 backdrop-blur-sm relative">
                                <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                                    <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent z-10" />
                                    <Image
                                        src={page.image}
                                        alt={page.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-6 left-6 right-6 z-20">
                                        <CardTitle className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                            {page.title}
                                        </CardTitle>
                                    </div>
                                </div>

                                <CardContent className="pt-6 pb-2 text-muted-foreground grow">
                                    <CardDescription className="text-base text-foreground/70">
                                        {page.description}
                                    </CardDescription>
                                </CardContent>

                                <CardHeader className="pt-0 pb-6 mt-auto">
                                    <div className="flex items-center text-primary font-medium group-hover:underline underline-offset-4">
                                        {page.cta}
                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </CardHeader>
                            </Card>
                        </Link>
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
}
