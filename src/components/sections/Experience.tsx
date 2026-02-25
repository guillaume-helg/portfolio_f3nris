import Image from "next/image";
import experiences from "@/data/experiences.json";
import type { Experience as ExperienceType } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";

const typedExperiences: ExperienceType[] = experiences;

export default function Experience() {
    return (
        <section id="experience" className="mt-12 py-8 flex flex-col items-center">
            <SectionHeading subtitle="--- Mon parcours ---" title="Expériences" />

            {/* Timeline */}
            <ul className="relative max-w-[1200px] mx-auto my-[100px] max-sm:my-[50px] after:content-[''] after:absolute after:w-[6px] after:h-full after:bg-white after:top-0 after:left-1/2 after:-ml-[3px] after:z-[-1] after:animate-[moveline_6s_linear_forwards] max-sm:after:left-[31px]">
                {typedExperiences.map((experience, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            className={`py-2.5 px-[50px] relative w-1/2 animate-[movedown_1s_linear_forwards] opacity-0 max-sm:w-full max-sm:pl-20 max-sm:pr-6 ${isLeft ? "left-0" : "left-1/2 max-sm:left-0"
                                }`}
                        >
                            {/* Logo */}
                            <Image
                                src={experience.logo}
                                alt={experience.name}
                                width={40}
                                height={40}
                                className={`absolute w-10 h-10 rounded-full z-10 bg-white top-8 object-contain p-1 ${isLeft
                                        ? "right-[-20px] max-sm:left-[10px]"
                                        : "left-[-20px] max-sm:left-[10px]"
                                    }`}
                            />

                            {/* Card */}
                            <li className="py-5 px-[30px] bg-[#0c3c9c] relative rounded-[20px] text-[15px] max-sm:text-[13px] list-none">
                                <h4 className="font-semibold">
                                    {experience.title} @{experience.name}
                                </h4>
                                <small className="inline-block mb-4 max-sm:mb-2.5">
                                    {experience.date}
                                </small>
                                <p>{experience.resume}</p>
                            </li>

                            {/* Arrow */}
                            <span
                                className={`absolute top-[38px] z-[1] h-0 w-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent ${isLeft
                                        ? "right-9 border-l-[15px] border-l-[#0c3c9c] max-sm:border-l-0 max-sm:border-r-[15px] max-sm:border-r-[#0c3c9c] max-sm:left-[66px] max-sm:right-auto"
                                        : "left-9 border-r-[15px] border-r-[#0c3c9c] max-sm:border-r-[15px] max-sm:border-r-[#0c3c9c] max-sm:left-[66px]"
                                    }`}
                            />
                        </div>
                    );
                })}
            </ul>
        </section>
    );
}
