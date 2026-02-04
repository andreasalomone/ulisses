import React from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { BrandText } from "@/components/ui/brand";

interface ScenarioCardProps {
    title: string;
    image: string;
    description: string;
    href: string;
    linkText?: string;
    resolutions?: string[];
    className?: string;
}

export function ScenarioCard({
    title,
    image,
    description,
    href,
    linkText = "Scopri di più",
    resolutions,
    className,
}: ScenarioCardProps) {
    return (
        <Card className={cn("group relative h-full pt-0 hover:shadow-lg transition-all duration-300", className)}>
            <div className="relative aspect-video w-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover scale-100 transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <CardHeader>
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                    <BrandText text={title} />
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground/80 leading-relaxed">
                    <BrandText text={description} />
                </CardDescription>
            </CardHeader>

            {resolutions && resolutions.length > 0 && (
                <CardContent className="grow flex flex-col justify-end">
                    <ul className="flex flex-wrap gap-2 list-none p-0 m-0 justify-start">
                        {resolutions.map((res, i) => (
                            <li key={i} className="text-xs font-semibold px-2 py-1 bg-muted rounded-full text-muted-foreground border">
                                <BrandText text={res} />
                            </li>
                        ))}
                    </ul>
                </CardContent>
            )}

            <CardFooter>
                <Link
                    href={href as "/"}
                    className="inline-flex items-center text-sm font-bold text-primary group-hover:gap-2 transition-all"
                >
                    {linkText}
                    <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
            </CardFooter>
        </Card>
    );
}
