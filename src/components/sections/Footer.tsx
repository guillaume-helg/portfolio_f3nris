import Image from "next/image";
import { FiLinkedin, FiDribbble, FiGithub } from "react-icons/fi";
import Button from "@/components/ui/Button";

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="relative mt-8 w-full">
            {/* Nebula gradient top border */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--color-tertiary)]/30 to-transparent" />

            <div className="glass-strong flex flex-col gap-12 p-12 flex-wrap max-[976px]:items-center">
                {/* Links */}
                <div className="flex justify-between max-[976px]:flex-col max-[976px]:gap-8 max-[976px]:items-center">
                    <a href="#" className="w-[100px]">
                        <Image src="/images/logowbg.png" alt="logo" width={100} height={40} />
                    </a>
                    <a
                        href="#about"
                        className="my-auto hover:text-[var(--color-tertiary)] transition-all duration-300"
                    >
                        A propos de moi
                    </a>
                    <a
                        href="#experience"
                        className="my-auto hover:text-[var(--color-tertiary)] transition-all duration-300"
                    >
                        Expériences
                    </a>
                    <a
                        href="#competences"
                        className="my-auto hover:text-[var(--color-tertiary)] transition-all duration-300"
                    >
                        Compétences
                    </a>
                    <a
                        href="#contact"
                        className="my-auto hover:text-[var(--color-tertiary)] transition-all duration-300"
                    >
                        Contact
                    </a>

                    {/* Social Icons */}
                    <a
                        href="https://www.linkedin.com/in/guillaume-helg/"
                        className="my-auto hover:text-[var(--color-tertiary)] hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.5)] transition-all duration-300"
                    >
                        <FiLinkedin />
                    </a>
                    <a
                        href="https://dribbble.com/Lorddragon"
                        className="my-auto hover:text-[var(--color-tertiary)] hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.5)] transition-all duration-300"
                    >
                        <FiDribbble />
                    </a>
                    <a
                        href="https://github.com/GuillaumeHelg"
                        className="my-auto hover:text-[var(--color-tertiary)] hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.5)] transition-all duration-300"
                    >
                        <FiGithub />
                    </a>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Button href="#contact">Me contacter</Button>
                </div>

                {/* Copyright */}
                <div className="text-center text-[var(--color-fontnew)] text-sm">
                    Copyright @{currentYear} by Guillaume HELG. All Rights Reserved
                </div>
            </div>
        </footer>
    );
}
