"use client";

import skills from "@/data/skills.json";
import education from "@/data/education.json";
import type { Skill, Education } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useMemo } from "react";

const typedSkills: Skill[] = skills;
const typedEducation: Education[] = education;

export default function Knowledge() {
    const { ref: skillsRef, isVisible: skillsVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
    const { ref: eduRef, isVisible: eduVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1, delay: 200 });

    // Group skills by category
    const skillsByCategory = useMemo(() => {
        const grouped: Record<string, Skill[]> = {};
        typedSkills.forEach((skill) => {
            if (!grouped[skill.category]) {
                grouped[skill.category] = [];
            }
            grouped[skill.category].push(skill);
        });
        return grouped;
    }, []);

    return (
        <section id="skill" className="mt-12 py-8">
            {/* ── Skills ────────────────────────────── */}
            <div
                ref={skillsRef}
                className={`scroll-reveal ${skillsVisible ? "visible" : ""}`}
            >
                <SectionHeading subtitle="--- Ce que je maîtrise ---" title="Compétences" />

                <div className="w-11/12 max-w-[1100px] mx-auto grid grid-cols-2 gap-6 max-md:grid-cols-1">
                    {Object.entries(skillsByCategory).map(([category, categorySkills], catIndex) => (
                        <div
                            key={category}
                            className="glass rounded-2xl p-6 glow-border-hover transition-all duration-300"
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-3 mb-5">
                                <span className="block w-2 h-2 rounded-full bg-[var(--color-tertiary)] shadow-[0_0_8px_rgba(0,212,255,0.5)]" />
                                <h3 className="text-sm font-semibold tracking-[3px] uppercase text-[var(--color-tertiary)]">
                                    {category}
                                </h3>
                                <span className="flex-1 h-[1px] bg-gradient-to-r from-[var(--color-card-border)] to-transparent" />
                            </div>

                            {/* Skill items */}
                            <div className="flex flex-wrap gap-5">
                                {categorySkills.map((skill, skillIndex) => (
                                    <div
                                        key={skill.num}
                                        className="flex flex-col items-center gap-2 group"
                                        style={{
                                            animation: skillsVisible
                                                ? `stagger-fade-in 0.5s ease-out ${catIndex * 0.1 + skillIndex * 0.06}s both`
                                                : "none",
                                            opacity: skillsVisible ? undefined : 0,
                                        }}
                                    >
                                        <div
                                            className="rounded-full w-16 h-16 glass flex justify-center items-center p-3
                                                transition-all duration-300 cursor-default
                                                group-hover:scale-110
                                                group-hover:shadow-[0_0_20px_rgba(0,212,255,0.25)]
                                                group-hover:border-[rgba(0,212,255,0.35)]"
                                        >
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={skill.img}
                                                alt={skill.title}
                                                width={40}
                                                height={40}
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className="text-xs text-[var(--color-fontnew)] group-hover:text-white transition-colors duration-300 text-center">
                                            {skill.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Education ─────────────────────────── */}
            <div
                ref={eduRef}
                className={`mt-24 scroll-reveal ${eduVisible ? "visible" : ""}`}
            >
                <SectionHeading subtitle="--- Mon parcours académique ---" title="Formation" />

                <div className="w-11/12 max-w-[700px] mx-auto relative">
                    {/* Timeline line — positioned at left-4 (16px) */}
                    <div
                        className="absolute left-4 top-0 w-[2px] bg-gradient-to-b from-[var(--color-tertiary)] via-[var(--color-accent-purple)] to-[var(--color-tertiary)] opacity-40 -translate-x-1/2"
                        style={{
                            animation: eduVisible ? "timeline-grow 1.5s ease-out forwards" : "none",
                            height: eduVisible ? "100%" : "0%",
                        }}
                    />

                    {typedEducation.map((school, index) => (
                        <div
                            key={index}
                            className="relative mb-10 last:mb-0 pl-12"
                            style={{
                                animation: eduVisible
                                    ? `stagger-fade-in 0.6s ease-out ${0.3 + index * 0.2}s both`
                                    : "none",
                                opacity: eduVisible ? undefined : 0,
                            }}
                        >
                            {/* Timeline dot — centered on left-4 (16px) via translateX(-50%) */}
                            <div className="absolute left-4 top-2 w-6 h-6 -translate-x-1/2 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-tertiary)] shadow-[0_0_12px_rgba(0,212,255,0.4)] z-10 flex items-center justify-center">
                                <span className="block w-2 h-2 rounded-full bg-[var(--color-tertiary)] animate-[pulse-glow_3s_ease-in-out_infinite]" />
                            </div>

                            {/* Card */}
                            <div className="glass rounded-2xl p-5 glow-border-hover transition-all duration-300 hover:translate-x-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-xs font-mono tracking-wide px-2.5 py-1 rounded-full bg-[rgba(0,212,255,0.08)] text-[var(--color-tertiary)] border border-[rgba(0,212,255,0.15)]">
                                        {school.date}
                                    </span>
                                </div>
                                <h4 className="font-semibold text-base mb-1">{school.title}</h4>
                                <p className="text-sm text-[var(--color-fontnew)] mb-1">{school.name}</p>
                                <p className="text-xs text-[var(--color-fontnew)] opacity-60 mb-2">📍 {school.lieu}</p>
                                {school.description && (
                                    <p className="text-xs text-[var(--color-fontnew)] opacity-80 italic border-l-2 border-[var(--color-accent-purple)] pl-3 mt-2">
                                        {school.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
