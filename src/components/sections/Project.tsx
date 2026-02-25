"use client";

import { useRef, useCallback, useState } from "react";
import Image from "next/image";
import projects from "@/data/projects.json";
import type { Project as ProjectType } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getAssetPath } from "@/utils/paths";

const typedProjects: ProjectType[] = projects;

function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const { ref: revealRef, isVisible } = useScrollReveal<HTMLDivElement>({
        threshold: 0.1,
        delay: (index % 3) * 100 // Stagger based on column for better flow
    });

    return (
        <div
            ref={revealRef}
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
        >
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsHovered(!isHovered)} // Toggle for mobile readability
                className="relative h-[480px] rounded-2xl overflow-hidden group 
                    glass glow-border-hover
                    transition-all duration-500 ease-out
                    flex flex-col shadow-lg
                    hover:scale-[1.02] hover:-translate-y-2 cursor-pointer"
            >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={getAssetPath(project.image)}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/60 to-transparent z-10" />
                </div>

                {/* Content */}
                <div className="relative z-20 flex flex-col h-full p-6 justify-between">
                    {/* Top Info */}
                    <div className="flex justify-between items-start">
                        <div className="flex-1 mr-4">
                            <span className="text-xs font-mono text-[var(--color-tertiary)] font-bold uppercase tracking-widest mb-1 shadow-sm block">
                                {project.date}
                            </span>
                            <h3 className="text-2xl font-bold text-white group-hover:text-[var(--color-tertiary)] transition-colors duration-300 drop-shadow-md">
                                {project.title}
                            </h3>
                        </div>
                        <div className="w-12 h-12 relative group-hover:scale-110 transition-transform duration-300 shadow-glow rounded-xl overflow-hidden bg-white/5 p-1.5 border border-white/10 backdrop-blur-sm">
                            <Image src={getAssetPath(project.logo)} alt="" fill className="object-contain p-1" />
                        </div>
                    </div>

                    {/* Middle: Tech Stack - More visible by default */}
                    <div className="flex flex-wrap gap-2 mt-4 transition-all duration-500">
                        {project.tech.map((tech, idx) => (
                            <span
                                key={idx}
                                className={`px-2.5 py-1 text-[11px] font-mono border rounded transition-all duration-500
                                    ${isHovered
                                        ? "border-[var(--color-tertiary)] bg-[var(--color-tertiary)]/15 text-white shadow-[0_0_10px_rgba(0,212,255,0.2)]"
                                        : "border-white/20 bg-black/30 text-white/90"}`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Bottom Info */}
                    <div className="mt-auto">
                        <p className={`text-sm text-white/90 leading-relaxed mb-6 transition-all duration-500 
                            ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 md:opacity-0"}`}>
                            {project.description}
                        </p>

                        <div className={`flex items-center justify-between transition-all duration-500 delay-75
                            ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 shadow-none"}`}>
                            <Button href={project.github} className="w-full justify-center group/btn shadow-xl">
                                <span className="flex items-center gap-2">
                                    Voir le projet
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current transition-transform group-hover/btn:translate-x-1" xmlns="http://www.w3.org/2000/svg"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Modern Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-[var(--color-tertiary)]/0 via-[var(--color-tertiary)]/30 to-[var(--color-tertiary)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
            </div>
        </div>
    );
}

const INITIAL_VISIBLE_COUNT = 3;

export default function Project() {
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
    const hasMore = typedProjects.length > visibleCount;
    const isShowingAll = visibleCount >= typedProjects.length && typedProjects.length > INITIAL_VISIBLE_COUNT;

    const toggleProjects = () => {
        if (hasMore) {
            setVisibleCount(prev => Math.min(prev + 3, typedProjects.length));
        } else {
            setVisibleCount(INITIAL_VISIBLE_COUNT);
            // Smooth scroll back to section top if closing
            document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="project"
            className="py-24 relative overflow-hidden"
        >
            {/* Background design */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-tertiary)]/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-accent-purple)]/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6">
                <SectionHeading
                    subtitle="--- Mes différents travaux ---"
                    title="Mes Projets"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                    {typedProjects.slice(0, visibleCount).map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Show More / Show Less Button */}
                {typedProjects.length > INITIAL_VISIBLE_COUNT && (
                    <div className="mt-16 flex justify-center">
                        <button
                            onClick={toggleProjects}
                            className="group relative px-8 py-4 bg-white/5 border border-[var(--color-card-border)] rounded-full text-white font-medium hover:bg-[var(--color-tertiary)]/10 hover:border-[var(--color-tertiary)] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]"
                        >
                            <span className="relative flex items-center gap-2">
                                {hasMore ? "Afficher plus de projets" : "Réduire la liste"}
                                <svg
                                    viewBox="0 0 24 24"
                                    className={`w-5 h-5 fill-current transition-transform duration-500 ${!hasMore ? "rotate-180" : "group-hover:translate-y-1"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
