"use client";

import Image from "next/image";
import experiences from "@/data/experiences.json";
import type { Experience as ExperienceType } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "@/i18n/LanguageContext";
import { getAssetPath } from "@/utils/paths";

const typedExperiences: ExperienceType[] = experiences as ExperienceType[];

export default function Experience() {
    const { t, lang } = useTranslation();
    const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.05 });

    return (
        <section
            ref={ref}
            id="experience"
            className={`mt-12 py-8 flex flex-col items-center scroll-reveal ${isVisible ? "visible" : ""}`}
        >
            <SectionHeading subtitle={t.experience.subtitle} title={t.experience.title} />

            {/* Timeline */}
            <ul className="relative max-w-[1200px] mx-auto my-[100px] max-sm:my-[50px]
                after:content-[''] after:absolute after:w-[2px] after:h-full
                after:bg-gradient-to-b after:from-[var(--color-tertiary)] after:via-[var(--color-accent-purple)] after:to-[var(--color-tertiary)]
                after:top-0 after:left-1/2 after:-ml-[1px] after:z-[-1]
                after:animate-[moveline_6s_linear_forwards]
                after:shadow-[0_0_10px_rgba(var(--tertiary-rgb), 0.3)]
                max-sm:after:left-[31px]"
            >
                {typedExperiences.map((experience, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            className={`py-2.5 px-[50px] relative w-1/2 animate-[movedown_1s_linear_forwards] opacity-0 max-sm:w-full max-sm:pl-20 max-sm:pr-6 ${isLeft ? "left-0" : "left-1/2 max-sm:left-0"
                                }`}
                        >
                            {/* Timeline dot */}
                            <Image
                                src={getAssetPath(experience.logo)}
                                alt={experience.name}
                                width={40}
                                height={40}
                                className={`absolute w-10 h-10 rounded-full z-10 bg-[var(--bg)] top-8 object-contain p-1
                                    border-2 border-[var(--color-tertiary)]
                                    shadow-[0_0_12px_rgba(var(--tertiary-rgb), 0.4)]
                                    ${isLeft
                                        ? "right-[-20px] max-sm:left-[10px]"
                                        : "left-[-20px] max-sm:left-[10px]"
                                    }`}
                            />

                            {/* Card */}
                            <li className="py-5 px-[30px] glass-strong relative rounded-2xl text-[15px] max-sm:text-[13px] list-none
                                glow-border-hover transition-all duration-300">
                                <h4 className="font-semibold">
                                    {lang === 'en' ? experience.titleEn : experience.title} @{experience.name}
                                </h4>
                                <small className="inline-block mb-4 max-sm:mb-2.5 text-[var(--color-tertiary)]">
                                    {lang === 'en' ? experience.dateEn : experience.date}
                                </small>
                                <p className="text-[var(--color-fontnew)]">
                                    {lang === 'en' ? experience.resumeEn : experience.resume}
                                </p>
                            </li>

                            {/* Arrow */}
                            <span
                                className={`absolute top-[38px] z-[1] h-0 w-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent ${isLeft
                                    ? "right-9 border-l-[15px] border-l-[rgba(15,23,60,0.65)] max-sm:border-l-0 max-sm:border-r-[15px] max-sm:border-r-[rgba(15,23,60,0.65)] max-sm:left-[66px] max-sm:right-auto"
                                    : "left-9 border-r-[15px] border-r-[rgba(15,23,60,0.65)] max-sm:border-r-[15px] max-sm:border-r-[rgba(15,23,60,0.65)] max-sm:left-[66px]"
                                    }`}
                            />
                        </div>
                    );
                })}
            </ul>
        </section>
    );
}
