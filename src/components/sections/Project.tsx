import Image from "next/image";
import projects from "@/data/projects.json";
import type { Project as ProjectType } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const typedProjects: ProjectType[] = projects;

export default function Project() {
    return (
        <section id="project" className="mt-12 py-8">
            <SectionHeading subtitle="--- Mes différents projets ---" title="Portfolio" />

            <div className="w-3/4 mx-auto flex flex-wrap justify-center gap-4">
                {typedProjects.map((project) => (
                    <div
                        key={project.id}
                        className="w-[350px] h-[350px] rounded-[3px] shadow-[0_1px_4px_rgba(0,0,0,0.3)] overflow-hidden group"
                    >
                        {/* Thumbnail */}
                        <div className="w-auto h-[260px] bg-white/40 bg-center bg-cover rounded-[3px] overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={350}
                                height={260}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Info */}
                        <div className="w-auto h-[350px] relative p-[14px_24px] bg-[var(--color-bg-variant)] transition-all duration-[400ms] group-hover:-translate-y-[260px]">
                            <div className="flex justify-between items-center">
                                <h2 className="relative tracking-[2px] text-[var(--color-fontnew)] text-base mb-2.5">
                                    {project.title}
                                </h2>
                                <span className="w-10">
                                    <Image src={project.logo} alt="" width={40} height={40} />
                                </span>
                            </div>

                            <h3 className="text-sm text-[var(--color-fontnew)] mb-4">
                                {project.date}
                            </h3>

                            {project.tech.map((tech, idx) => (
                                <div
                                    key={idx}
                                    className="inline-block opacity-0 mb-1.5 group-hover:opacity-100 transition-all duration-[400ms]"
                                >
                                    <div className="bg-white/10 rounded-[20px] mr-2 h-6 leading-6 w-max px-4">
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
                ))}
            </div>
        </section>
    );
}
