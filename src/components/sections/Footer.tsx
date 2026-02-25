import Image from "next/image";
import { FiLinkedin, FiDribbble, FiGithub } from "react-icons/fi";
import Button from "@/components/ui/Button";

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="bg-[var(--color-black-v2)] mt-8 flex flex-col gap-12 w-full p-12 flex-wrap max-[976px]:items-center">
            {/* Links */}
            <div className="flex justify-between max-[976px]:flex-col max-[976px]:gap-8 max-[976px]:items-center">
                <a href="#" className="w-[100px]">
                    <Image src="/images/logowbg.png" alt="logo" width={100} height={40} />
                </a>
                <a
                    href="#about"
                    className="my-auto hover:text-[var(--color-tertiary)] transition-all duration-[400ms]"
                >
                    A propos de moi
                </a>
                <a
                    href="#experience"
                    className="my-auto hover:text-[var(--color-tertiary)] transition-all duration-[400ms]"
                >
                    Expériences
                </a>
                <a
                    href="#competences"
                    className="my-auto hover:text-[var(--color-tertiary)] transition-all duration-[400ms]"
                >
                    Compétences
                </a>
                <a
                    href="#contact"
                    className="my-auto hover:text-[var(--color-tertiary)] transition-all duration-[400ms]"
                >
                    Contact
                </a>
                <a
                    href="https://www.linkedin.com/in/guillaume-helg/"
                    className="my-auto hover:text-[var(--color-tertiary)] transition-all duration-[400ms]"
                >
                    <FiLinkedin />
                </a>
                <a
                    href="https://dribbble.com/Lorddragon"
                    className="my-auto hover:text-[var(--color-tertiary)] transition-all duration-[400ms]"
                >
                    <FiDribbble />
                </a>
                <a
                    href="https://github.com/GuillaumeHelg"
                    className="my-auto hover:text-[var(--color-tertiary)] transition-all duration-[400ms]"
                >
                    <FiGithub />
                </a>
            </div>

            {/* CTA */}
            <div className="text-center">
                <Button href="#contact">Me contacter</Button>
            </div>

            {/* Copyright */}
            <div className="text-center text-white">
                Copyright @{currentYear} by Guillaume HELG. All Rights Reserved
            </div>
        </footer>
    );
}
