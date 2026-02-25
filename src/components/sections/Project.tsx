"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import projects from "@/data/projects.json";
import type { Project as ProjectType } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getAssetPath } from "@/utils/paths";

const typedProjects: ProjectType[] = projects;

function TiltCard({ project }: { project: ProjectType }) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    }, []);

    const handleMouseLeave = useCallback(() => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    }, []);

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-[350px] h-[350px] rounded-2xl overflow-hidden group
                glass glow-border-hover
                transition-[box-shadow,border-color] duration-300
                hover:shadow-[0_8px_40px_rgba(0,212,255,0.15)]"
            style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease",
            }}
        >
            {/* Thumbnail */}
            <div className="w-auto h-[260px] bg-white/5 bg-center bg-cover rounded-t-2xl overflow-hidden">
                <Image
                    src={getAssetPath(project.image)}
                    alt={project.title}
                    width={350}
                    height={260}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Info */}
            <div className="w-auto h-[350px] relative p-[14px_24px] glass-strong rounded-b-2xl transition-all duration-500 group-hover:-translate-y-[260px]">
                <div className="flex justify-between items-center">
                    <h2 className="relative tracking-[2px] text-[var(--color-fontnew)] text-base mb-2.5">
                        {project.title}
                    </h2>
                    <span className="w-10">
                        <Image src={getAssetPath(project.logo)} alt="" width={40} height={40} />
                    </span>
                </div>

                <h3 className="text-sm text-[var(--color-tertiary)] mb-4">
                    {project.date}
                </h3>

                {project.tech.map((tech, idx) => (
                    <div
                        key={idx}
                        className="inline-block opacity-0 mb-1.5 group-hover:opacity-100 transition-all duration-[400ms]"
                    >
                        <div className="bg-[var(--color-tertiary)]/10 border border-[var(--color-tertiary)]/25 rounded-full mr-2 h-6 leading-6 w-max px-4">
                            <div className="text-xs font-mono text-[var(--color-fontnew)] text-center">
                                {tech}
                            </div>
                        </div>
                    </div>
                ))}

                <p className="mt-2.5 text-sm text-[var(--color-fontnew)] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-[250ms] mb-5">
                    {project.description}
                </p>

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 tracking-[1px] text-base cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-500 delay-[250ms]">
                    <Button href={project.github}>Gitlab</Button>
                </div>
            </div>
        </div>
    );
}

export default function Project() {
    const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.05 });

    return (
        <section
            ref={ref}
            id="project"
            className={`mt-12 py-8 scroll-reveal ${isVisible ? "visible" : ""}`}
        >
            <SectionHeading subtitle="--- Mes différents projets ---" title="Portfolio" />

            <div className="w-3/4 mx-auto flex flex-wrap justify-center gap-6">
                {typedProjects.map((project) => (
                    <TiltCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
