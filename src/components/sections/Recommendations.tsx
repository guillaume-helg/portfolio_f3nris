"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useTranslation } from "@/i18n/LanguageContext";
import recommendationsData from "@/data/recommendations.json";
import { Recommendation } from "@/types";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FaQuoteLeft, FaExternalLinkAlt } from "react-icons/fa";

function RecommendationCard({ rec, index }: { rec: Recommendation; index: number }) {
    const { t, lang } = useTranslation();
    const { ref: revealRef, isVisible } = useScrollReveal<HTMLDivElement>({
        threshold: 0.1,
        delay: (index % 2) * 200, // Stagger effect
    });

    return (
        <div
            ref={revealRef}
            className={`transition-all duration-700 ease-out h-full ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
            <div className="bg-secondary/30 backdrop-blur-md rounded-2xl p-6 sm:p-8 flex flex-col h-full border border-white/5 shadow-xl hover:shadow-2xl hover:border-[var(--color-tertiary)]/30 transition-all duration-300 group relative overflow-hidden">
                {/* Modern Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-[var(--color-tertiary)]/0 via-[var(--color-tertiary)]/20 to-[var(--color-tertiary)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                <div className="mb-4 text-[var(--color-tertiary)]/50 group-hover:text-[var(--color-tertiary)] transition-colors duration-300 relative z-10 w-full">
                    <FaQuoteLeft size={32} opacity={0.5} />
                </div>
                
                <p className="text-white/80 mb-6 flex-grow italic text-lg leading-relaxed relative z-10">
                    {lang === "en" && rec.textEn ? rec.textEn : rec.text}
                </p>
                
                <div className="mt-auto border-t border-white/10 pt-4 flex items-center justify-between relative z-10">
                    <div>
                        <h4 className="font-semibold text-white/90 text-lg">
                            {rec.author || (lang === "en" && rec.companyEn ? rec.companyEn : rec.company)}
                        </h4>
                        <p className="text-sm text-gray-400">
                            {rec.role ? (lang === "en" && rec.roleEn ? rec.roleEn : rec.role) + " @ " : ""}
                            {rec.author ? (lang === "en" && rec.companyEn ? rec.companyEn : rec.company) : ""}
                        </p>
                        <p className="text-xs text-[var(--color-tertiary)] mt-1 font-mono">
                            {lang === "en" && rec.dateEn ? rec.dateEn : rec.date}
                        </p>
                    </div>
                    
                    {rec.url && (
                        <a
                            href={rec.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[var(--color-tertiary)]/20 text-white/70 hover:text-[var(--color-tertiary)] transition-all duration-300 group-hover:scale-110"
                            aria-label={t.recommendations.viewLink}
                            title={t.recommendations.viewLink}
                        >
                            <FaExternalLinkAlt size={16} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Recommendations() {
    const { t } = useTranslation();
    const recommendations: Recommendation[] = recommendationsData;

    if (!recommendations || recommendations.length === 0) {
        return null;
    }

    return (
        <section id="recommendations" className="py-24 relative overflow-hidden">
            {/* Background elements to match the unified space theme */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--color-tertiary)]/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-accent-blue)]/5 rounded-full blur-[120px] -z-10 translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <SectionHeading
                    title={t.recommendations.title}
                    subtitle={t.recommendations.subtitle}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
                    {recommendations.map((rec, index) => (
                        <RecommendationCard key={rec.id} rec={rec} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
