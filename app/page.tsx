import { Hero } from "@/components/sections/home/hero";
import { VerticalSelector } from "@/components/sections/home/vertical-selector";
import { WhyUlisses } from "@/components/sections/home/why-ulisses";
import { HowItWorks } from "@/components/sections/home/how-it-works";
import { DashboardPreview } from "@/components/sections/home/dashboard-preview";
import { ProductionProof } from "@/components/sections/home/production-proof";
import { ContactFormSection } from "@/components/sections/home/contact-form-section";

/**
 * Home Page (Section A)
 * Strictly follows struttura.md for Ulisses Website.
 * Built with shared premium components and server-side robustness.
 */
export default function Page() {
    return (
        <div className="flex flex-col">
            <Hero />
            <VerticalSelector />
            <WhyUlisses />
            <HowItWorks />
            <DashboardPreview />
            <ProductionProof />
            <ContactFormSection />
        </div>
    );
}
