import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <SectionWrapper className="min-h-[80vh] flex items-center justify-center text-center">
            <div className="max-w-2xl mx-auto space-y-8">
                <h1 className="text-6xl md:text-9xl font-extrabold text-primary opacity-20">404</h1>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Pagina non trovata
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Sembra che tu ti sia perso nella rete. La pagina che cerchi non esiste o è stata spostata.
                </p>
                <div className="pt-8">
                    <Button asChild size="lg" className="rounded-full px-8 h-12">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Torna alla Home
                        </Link>
                    </Button>
                </div>
            </div>
        </SectionWrapper>
    );
}
