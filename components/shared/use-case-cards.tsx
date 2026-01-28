import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface UseCase {
    title: string;
    text: string;
    icon?: LucideIcon;
}

interface UseCaseCardsProps {
    items: UseCase[];
    icons?: LucideIcon[];
}

export function UseCaseCards({ items, icons }: UseCaseCardsProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, i) => {
                const Icon = icons && icons[i] ? icons[i] : null;
                return (
                    <Card key={i} className="rounded-2xl border bg-card hover:border-primary/30 transition-all duration-300 shadow-sm group">
                        <CardContent className="p-6">
                            {Icon && (
                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Icon className="h-5 w-5" />
                                </div>
                            )}
                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.text}
                            </p>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}
