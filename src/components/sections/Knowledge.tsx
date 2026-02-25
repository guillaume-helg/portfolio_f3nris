"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import skills from "@/data/skills.json";
import education from "@/data/education.json";
import type { Skill, Education } from "@/types";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const typedSkills: Skill[] = skills;
const typedEducation: Education[] = education;

export default function Knowledge() {
    const divRefs = useRef<(HTMLDivElement | null)[]>([]);
    const { ref: skillsRef, isVisible: skillsVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
    const { ref: eduRef, isVisible: eduVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1, delay: 300 });

    useEffect(() => {
        const setBackgroundColorFromImage = (index: number) => {
            const divElement = divRefs.current[index];
            if (!divElement) return;
            const imgElement = divElement.querySelector("img");
            if (!imgElement) return;

            const canvas = document.createElement("canvas");
            canvas.width = 1;
            canvas.height = 1;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            const onLoad = () => {
                ctx.drawImage(imgElement, 0, 0, 1, 1);
                const pixelData = ctx.getImageData(0, 0, 1, 1).data;
                const color = `rgba(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]}, 0.1)`;
                divElement.style.backgroundColor = color;
            };

            if (imgElement.complete) {
                onLoad();
            } else {
                imgElement.onload = onLoad;
            }
        };

        typedSkills.forEach((_, index) => {
            setBackgroundColorFromImage(index);
        });
    }, []);

    return (
        <section
            id="skill"
            className="mt-12 py-8 w-3/4 mx-auto grid grid-cols-2 place-items-center max-md:grid-cols-1 max-md:gap-12"
        >
            {/* Skills */}
            <div
                ref={skillsRef}
                className={`flex flex-row flex-wrap gap-10 p-5 scroll-reveal-left ${skillsVisible ? "visible" : ""}`}
            >
                {typedSkills.map((skill, index) => (
                    <div key={skill.num} className="flex flex-col gap-2.5 group">
                        <div
                            ref={(el) => {
                                divRefs.current[index] = el;
                            }}
                            className="rounded-full w-20 h-20 glass flex justify-center items-center p-3
                                transition-all duration-300 cursor-default
                                group-hover:scale-110
                                group-hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]
                                group-hover:border-[rgba(0,212,255,0.3)]"
                        >
                            <Image
                                src={skill.img}
                                alt={skill.title}
                                width={54}
                                height={54}
                            />
                        </div>
                        <p className="text-[15px] self-center text-[var(--color-fontnew)] group-hover:text-white transition-colors duration-300">
                            {skill.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* Education */}
            <div
                ref={eduRef}
                className={`flex flex-col gap-6 scroll-reveal-right ${eduVisible ? "visible" : ""}`}
            >
                {typedEducation.map((school, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-1 pl-4 border-l-2 border-[var(--color-card-border)]
                            hover:border-[var(--color-tertiary)] transition-all duration-300
                            hover:shadow-[-4px_0_15px_rgba(0,212,255,0.1)]"
                    >
                        <p className="text-sm text-[var(--color-tertiary)]">
                            {school.date}
                        </p>
                        <h4 className="font-semibold">{school.title}</h4>
                        <p className="text-[var(--color-fontnew)]">{school.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
