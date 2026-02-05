import { getTranslations } from "next-intl/server";
import { Metadata } from 'next';
import { getLocalizedAlternates } from '@/lib/i18n-metadata';
import { SITE_CONFIG } from '@/lib/constants';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('privacyPolicy.title'),
        alternates: {
            canonical: `${SITE_CONFIG.url}/${locale}/privacy-policy`,
            languages: getLocalizedAlternates('/privacy-policy', SITE_CONFIG.url)
        }
    };
}
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { CONTACT_INFO } from "@/lib/constants";

export default async function PrivacyPolicyPage() {
    const t = await getTranslations('privacyPolicy');
    const tLegal = await getTranslations('legal');
    const sections = t.raw('sections') as { title: string; content: string }[];

    return (
        <SectionWrapper className="py-24">
            <div className="max-w-4xl mx-auto">
                <div className="p-8 md:p-12 bg-background/60 backdrop-blur-xl rounded-[2.5rem] border shadow-2xl space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                            {t('title')}
                        </h1>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                            {t('lastUpdated')}
                        </p>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
                        <section>
                            <p className="text-lg text-foreground font-medium">
                                {t('intro')}
                            </p>
                        </section>

                        {sections.map((section, index) => (
                            <section key={index} className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                                <p>{section.content}</p>
                            </section>
                        ))}

                        <div className="pt-8 border-t border-primary/10">
                            <h3 className="text-xl font-bold text-foreground mb-4">{t('contact.title')}</h3>
                            <p>
                                {t('contact.text')} <a href={`mailto:${t('contact.email')}`} className="text-primary hover:underline">{t('contact.email')}</a>
                            </p>
                            <div className="mt-6 p-6 bg-muted/50 rounded-2xl border text-sm">
                                <p className="font-bold text-foreground">{CONTACT_INFO.address}</p>
                                <p className="mt-1">{tLegal('piva')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
