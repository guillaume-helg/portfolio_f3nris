"use client";

import Image from "next/image";
import { FaAward } from "react-icons/fa";
import { FiFolder } from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { useTranslation } from "@/i18n/LanguageContext";
import { getAssetPath } from "@/utils/paths";

function calculateAge(birthDate: Date): number {
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const m = currentDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const age = calculateAge(new Date("2002-01-06"));

export default function About() {
    const { t } = useTranslation();
    const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
    const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15, delay: 200 });

    const stats = [
        {
            icon: FaAward,
            label: t.about.experience.title,
            value: 2,
            suffix: "+",
            detail: t.about.experience.subtitle,
            href: "#experience",
        },
        {
            icon: FiFolder,
            label: t.about.projects.title,
            value: 6,
            suffix: "+",
            detail: t.about.projects.subtitle,
            href: "#project",
        },
        {
            icon: HiOutlineAcademicCap,
            label: t.about.education.title,
            value: 2,
            suffix: "+",
            detail: t.about.education.subtitle,
            href: "#skill",
        },
    ];

    const count0 = useCountUp(stats[0].value, 1200, contentVisible);
    const count1 = useCountUp(stats[1].value, 1200, contentVisible);
    const count2 = useCountUp(stats[2].value, 1200, contentVisible);
    const counts = [count0, count1, count2];

    return (
        <section id="about" className="mt-12 py-8 pb-12 overflow-visible">
            <SectionHeading subtitle={t.about.subtitle} title={t.about.title} />

            <div className="w-3/4 mx-auto grid grid-cols-[35%_50%] gap-[15%] max-lg:grid-cols-1 max-lg:gap-0 max-sm:grid-cols-1">
                {/* Image */}
                <div
                    ref={imageRef}
                    className={`w-full rounded-2xl grid place-items-center max-lg:w-1/2 max-lg:mx-auto max-lg:mb-16 max-sm:w-[65%] max-sm:mb-12 scroll-reveal-left ${imageVisible ? "visible" : ""}`}
                >
                    <div className="relative w-full aspect-square">
                        {/* Gradient glow behind photo */}
                        <div className="absolute inset-[-6px] rounded-2xl bg-gradient-to-br from-[var(--color-tertiary)]/10 via-transparent to-[var(--color-accent-purple)]/10 animate-[pulse-glow_5s_ease-in-out_infinite] blur-sm" />

                        <div className="relative w-full h-full rounded-2xl overflow-hidden rotate-[10deg] hover:rotate-0 transition-all duration-500 hover:shadow-[0_0_40px_rgba(var(--tertiary-rgb), 0.15)] glass">
                            <Image
                                src={getAssetPath("/images/pdp/moi1.jpg")}
                                alt="about me"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div
                    ref={contentRef}
                    className={`max-sm:text-center scroll-reveal-right ${contentVisible ? "visible" : ""}`}
                >
                    {/* Stat cards */}
                    <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-2">
                        {stats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <a
                                    key={stat.label}
                                    href={stat.href}
                                    className="glass rounded-2xl p-6 text-center glow-border-hover transition-all duration-300 cursor-pointer group block
                                        hover:scale-[1.03] hover:-translate-y-1"
                                    style={{
                                        animation: contentVisible
                                            ? `stagger-fade-in 0.5s ease-out ${i * 0.12}s both`
                                            : "none",
                                        opacity: contentVisible ? undefined : 0,
                                    }}
                                >
                                    <Icon className="text-xl mb-3 mx-auto text-[var(--color-fontnew)] group-hover:text-[var(--color-tertiary)] transition-colors duration-300" />
                                    <h5 className="text-[0.95rem] mb-1">{stat.label}</h5>
                                    <div className="text-2xl font-bold text-gradient mb-1">
                                        {counts[i]}{stat.suffix}
                                    </div>
                                    <small className="text-[var(--color-fontnew)] text-[0.7rem]">
                                        {stat.detail}
                                    </small>
                                </a>
                            );
                        })}
                    </div>

                    {/* Bio */}
                    <div className="my-10 max-lg:my-6 max-sm:my-6 flex gap-4">
                        <span className="hidden sm:block w-[2px] flex-shrink-0 bg-gradient-to-b from-[var(--color-tertiary)] to-[var(--color-accent-purple)] rounded-full opacity-40" />
                        <p className="text-[var(--color-fontnew)] max-sm:text-left leading-relaxed">
                            {t.about.description1}
                            <span className="text-[var(--text-primary)] font-semibold">{t.about.description1Name}</span>
                            {t.about.description2.replace("{age}", age.toString())}
                        </p>
                    </div>

                    <Button href="#contact">{t.about.contactBtn}</Button>
                </div>
            </div>
        </section>
    );
}
