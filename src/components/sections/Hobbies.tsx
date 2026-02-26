"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "@/i18n/LanguageContext";
import hobbiesData from "@/data/hobbies.json";
import achievementsData from "@/data/achievements.json";
import type { Hobby, Achievement } from "@/types";
import { FaRunning, FaMusic, FaBookOpen, FaBicycle, FaWalking, FaPaintBrush, FaAward, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import type { IconType } from "react-icons";

const typedHobbies: Hobby[] = hobbiesData as Hobby[];
const typedAchievements: Achievement[] = achievementsData as Achievement[];

const iconMap: Record<string, IconType> = {
    "run": FaRunning,
    "music": FaMusic,
    "book": FaBookOpen,
    "bike": FaBicycle,
    "walk": FaWalking,
    "create": FaPaintBrush
};

export default function Hobbies() {
    const { t, lang } = useTranslation();
    const { ref: hobbiesRef, isVisible: hobbiesVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
    const { ref: achRef, isVisible: achVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1, delay: 200 });

    return (
        <section id="hobbies" className="mt-12 py-8">
            <SectionHeading subtitle={t.extra.subtitle} title={t.extra.title} />

            <div
                ref={hobbiesRef}
                className={`w-11/12 max-w-[1100px] mx-auto mb-20 scroll-reveal ${hobbiesVisible ? "visible" : ""}`}
            >
                <div className="flex items-center gap-3 mb-8 justify-center">
                    <span className="block w-2 h-2 rounded-full bg-[var(--color-tertiary)] shadow-[0_0_8px_rgba(var(--tertiary-rgb), 0.5)]" />
                    <h3 className="text-xl font-semibold tracking-[3px] uppercase text-[var(--color-tertiary)] text-center">
                        {t.extra.hobbiesTitle}
                    </h3>
                    <span className="block w-2 h-2 rounded-full bg-[var(--color-tertiary)] shadow-[0_0_8px_rgba(var(--tertiary-rgb), 0.5)]" />
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {typedHobbies.map((hobby, index) => {
                        const Icon = iconMap[hobby.icon] || FaPaintBrush;
                        return (
                            <div
                                key={hobby.name}
                                className="glass rounded-2xl p-6 flex flex-col items-center gap-4 glow-border-hover w-[160px] cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(var(--tertiary-rgb), 0.25)] hover:border-[rgba(var(--tertiary-rgb), 0.35)]"
                                style={{
                                    animation: hobbiesVisible
                                        ? `stagger-fade-in 0.5s ease-out ${index * 0.1}s both`
                                        : "none",
                                    opacity: hobbiesVisible ? undefined : 0,
                                }}
                            >
                                <div className="text-4xl text-[var(--color-fontnew)] mb-2 group-hover:text-[var(--color-tertiary)] transition-colors duration-300">
                                    <Icon />
                                </div>
                                <span className="text-sm font-medium text-center text-[var(--text-primary)]">
                                    {lang === 'en' && hobby.nameEn ? hobby.nameEn : hobby.name}
                                </span>
                                {(hobby.description || hobby.descriptionEn) && (
                                    <span className="text-xs text-center text-[var(--color-fontnew)] opacity-80 -mt-2">
                                        {lang === 'en' && hobby.descriptionEn ? hobby.descriptionEn : hobby.description}
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div
                ref={achRef}
                className={`w-11/12 max-w-[900px] mx-auto scroll-reveal ${achVisible ? "visible" : ""}`}
            >
                <div className="flex items-center gap-3 mb-10 justify-center">
                    <span className="block w-2 h-2 rounded-full bg-[var(--color-tertiary)] shadow-[0_0_8px_rgba(var(--tertiary-rgb), 0.5)]" />
                    <h3 className="text-xl font-semibold tracking-[3px] uppercase text-[var(--color-tertiary)] text-center">
                        {t.extra.achievementsTitle}
                    </h3>
                    <span className="block w-2 h-2 rounded-full bg-[var(--color-tertiary)] shadow-[0_0_8px_rgba(var(--tertiary-rgb), 0.5)]" />
                </div>

                <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                    {typedAchievements.map((ach, index) => (
                        <div
                            key={index}
                            className="glass rounded-2xl p-6 glow-border-hover transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group"
                            style={{
                                animation: achVisible
                                    ? `stagger-fade-in 0.6s ease-out ${0.2 + index * 0.15}s both`
                                    : "none",
                                opacity: achVisible ? undefined : 0,
                            }}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl group-hover:opacity-20 transition-opacity duration-300 text-[var(--color-tertiary)]">
                                {index === 0 ? <FaAward /> : <FaCertificate />}
                            </div>

                            <div className="flex flex-col h-full relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-mono tracking-wide px-2.5 py-1 rounded-full bg-[rgba(var(--tertiary-rgb), 0.08)] text-[var(--color-tertiary)] border border-[rgba(var(--tertiary-rgb), 0.15)] inline-block">
                                        {lang === 'en' && ach.dateEn ? ach.dateEn : ach.date}
                                    </span>
                                    {ach.status && (
                                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${ach.status === 'completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'}`}>
                                            {ach.status === 'completed' ? t.extra.statusCompleted : t.extra.statusInProgress}
                                        </span>
                                    )}
                                </div>

                                <h4 className="font-semibold text-lg mb-2 text-[var(--text-primary)]">
                                    {lang === 'en' && ach.titleEn ? ach.titleEn : ach.title}
                                </h4>

                                {(ach.description || ach.descriptionEn) && (
                                    <p className="text-sm text-[var(--color-fontnew)] mt-2 leading-relaxed">
                                        {lang === 'en' && ach.descriptionEn ? ach.descriptionEn : ach.description}
                                    </p>
                                )}

                                {ach.url && (
                                    <a
                                        href={ach.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-tertiary)] hover:text-[var(--text-primary)] transition-colors duration-300 w-fit mt-auto"
                                    >
                                        <span>{t.extra.viewCredential}</span>
                                        <FaExternalLinkAlt />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
