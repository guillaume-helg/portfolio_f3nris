"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import TypeWriter from "@/components/ui/TypeWriter";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Header() {
    const { ref: leftRef, isVisible: leftVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
    const { ref: rightRef, isVisible: rightVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2, delay: 200 });

    return (
        <header className="h-max pt-32 overflow-hidden mt-40 px-[100px] max-[720px]:px-4">
            <div className="w-3/4 mx-auto flex flex-row flex-wrap justify-between items-center max-[720px]:flex-col-reverse max-[720px]:items-center max-[720px]:gap-16">
                {/* Presentation */}
                <div
                    ref={leftRef}
                    className={`w-2/5 flex flex-col justify-center flex-wrap gap-5 max-[720px]:w-[92%] max-[720px]:gap-8 max-[720px]:items-center scroll-reveal-left ${leftVisible ? "visible" : ""}`}
                >
                    <h5 className="text-xs tracking-[5px] text-[var(--color-tertiary)] uppercase font-light">
                        <TypeWriter text="Bonjour, je m'appelle" speed={60} delay={1800} />
                    </h5>
                    <h2 className="text-4xl font-bold text-gradient leading-tight">
                        Guillaume HELG
                    </h2>
                    <p className="text-base text-[var(--color-fontnew)] leading-relaxed max-[720px]:text-left">
                        Je suis un étudiant toulousain, qui poursuit ses études en tant que
                        Miagiste, plus spécialisé dans le développement d&apos;applications.
                    </p>
                    <div>
                        <Button href="#contact">Me contacter</Button>
                    </div>
                </div>

                {/* Avatar with orbital ring */}
                <div
                    ref={rightRef}
                    className={`w-2/5 flex justify-center max-[720px]:w-[92%] scroll-reveal-right ${rightVisible ? "visible" : ""}`}
                >
                    <div className="relative">
                        {/* Orbital ring */}
                        <div
                            className="absolute inset-[-20px] rounded-full border border-dashed border-[var(--color-card-border)] animate-[orbit_20s_linear_infinite]"
                            style={{
                                boxShadow: "0 0 15px rgba(0,212,255,0.05)",
                            }}
                        >
                            {/* Orbiting dot */}
                            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--color-tertiary)] shadow-[0_0_10px_rgba(0,212,255,0.6)]" />
                        </div>

                        {/* Pulsing glow behind avatar */}
                        <div className="absolute inset-[-5px] rounded-full bg-[var(--color-tertiary)]/5 animate-[pulse-glow_4s_ease-in-out_infinite] blur-md" />

                        {/* Avatar */}
                        <div className="relative rounded-full w-[350px] h-[350px] overflow-hidden glass max-[720px]:w-[200px] max-[720px]:h-[200px]">
                            <Image
                                src="/images/pdp/avataaar.svg"
                                alt="mon avatar"
                                width={350}
                                height={350}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
