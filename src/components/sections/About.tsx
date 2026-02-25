"use client";

import Image from "next/image";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
    const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
    const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15, delay: 200 });

    return (
        <section id="about" className="mt-12 py-8">
            <SectionHeading subtitle="--- Me connaitre ---" title="A propos de moi" />

            <div className="w-3/4 mx-auto grid grid-cols-[35%_50%] gap-[15%] max-lg:grid-cols-1 max-lg:gap-0 max-sm:grid-cols-1">
                {/* Image */}
                <div
                    ref={imageRef}
                    className={`w-full rounded-2xl bg-gradient-to-br from-transparent via-[var(--color-bg-variant)] to-transparent grid place-items-center max-lg:w-1/2 max-lg:mx-auto max-lg:mb-16 max-sm:w-[65%] max-sm:mb-12 scroll-reveal-left ${imageVisible ? "visible" : ""}`}
                >
                    <div className="w-full aspect-square rounded-2xl overflow-hidden rotate-[10deg] hover:rotate-0 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,212,255,0.15)]">
                        <Image
                            src="/images/pdp/moi1.jpg"
                            alt="about me"
                            width={400}
                            height={400}
                        />
                    </div>
                </div>

                {/* Content */}
                <div
                    ref={contentRef}
                    className={`max-sm:text-center scroll-reveal-right ${contentVisible ? "visible" : ""}`}
                >
                    <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-2">
                        <article className="glass rounded-2xl p-8 text-center glow-border-hover transition-all duration-300 cursor-default group">
                            <FaAward className="text-xl mb-4 mx-auto text-[var(--color-fontnew)] group-hover:text-[var(--color-tertiary)] transition-colors duration-300" />
                            <h5 className="text-[0.95rem]">Expérience</h5>
                            <small className="text-[var(--color-fontnew)] text-[0.7rem]">
                                2 ans d&apos;expérience en informatique
                            </small>
                        </article>
                        <article className="glass rounded-2xl p-8 text-center glow-border-hover transition-all duration-300 cursor-default group">
                            <FiUsers className="text-xl mb-4 mx-auto text-[var(--color-fontnew)] group-hover:text-[var(--color-tertiary)] transition-colors duration-300" />
                            <h5 className="text-[0.95rem]">Projets</h5>
                            <small className="text-[var(--color-fontnew)] text-[0.7rem]">
                                6 projets mené à bien
                            </small>
                        </article>
                        <article className="glass rounded-2xl p-8 text-center glow-border-hover transition-all duration-300 cursor-default group">
                            <FaAward className="text-xl mb-4 mx-auto text-[var(--color-fontnew)] group-hover:text-[var(--color-tertiary)] transition-colors duration-300" />
                            <h5 className="text-[0.95rem]">Etudes</h5>
                            <small className="text-[var(--color-fontnew)] text-[0.7rem]">
                                2ième année d&apos;études après le bac
                            </small>
                        </article>
                    </div>

                    <p className="text-[var(--color-fontnew)] my-12 max-lg:my-4 max-sm:my-6 max-sm:text-left leading-relaxed">
                        Je m&apos;appelle Guillaume HELG. J&apos;ai {age} ans et
                        j&apos;étudie actuellement en 2ième année de Licence MIASHS au sein
                        de l&apos;université Paul Sabatier à Toulouse. Passionné
                        d&apos;informatique, j&apos;aime réaliser des projets me permettant
                        d&apos;acquérir de nouvelles compétences et connaissances.
                    </p>

                    <Button href="#contact">Me contacter</Button>
                </div>
            </div>
        </section>
    );
}
