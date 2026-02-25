"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { getAssetPath } from "@/utils/paths";

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const [activeNav, setActiveNav] = useState("#about");

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    };

    const navItems = [
        { href: "#about", label: "A propos de moi", delay: "duration-[1000ms]" },
        { href: "#skill", label: "Compétences", delay: "duration-[1200ms]" },
        { href: "#experience", label: "Expériences", delay: "duration-[1400ms]" },
        { href: "#project", label: "Projets", delay: "duration-[1600ms]" },
        { href: "#contact", label: "Contact", delay: "duration-[1800ms]" },
    ];

    return (
        <nav
            className={`flex flex-wrap items-center justify-between fixed top-0 w-full min-h-[70px]
                bg-[#06091a]/70 backdrop-blur-xl
                border-b border-[var(--color-card-border)]
                px-[50px] z-20
                transition-all duration-300
                ${showLinks ? "show-nav" : ""}`}
        >
            {/* Logo */}
            <a href="#" className="w-[100px] max-md:w-[80px]">
                <Image src={getAssetPath("/images/logowbg.png")} alt="Logo" width={100} height={40} />
            </a>

            {/* Nav Links */}
            <ul
                className={`flex max-[976px]:flex-col max-[976px]:justify-center max-[976px]:items-center max-[976px]:fixed max-[976px]:bottom-0 max-[976px]:h-screen max-[976px]:p-8 max-[976px]:bg-[#06091a]/95 max-[976px]:backdrop-blur-2xl max-[976px]:transition-all max-[976px]:duration-[400ms] max-[976px]:ease-in-out ${showLinks
                    ? "max-[976px]:right-0 max-[976px]:w-screen max-[976px]:visible max-[976px]:gap-8"
                    : "max-[976px]:right-[-100vw] max-[976px]:w-0 max-[976px]:invisible"
                    }`}
            >
                {navItems.map((item) => (
                    <li
                        key={item.href}
                        className={`px-[25px] transition-all ease-in-out ${showLinks
                            ? `translate-y-0 ${item.delay}`
                            : "max-[976px]:translate-y-[100vh]"
                            }`}
                    >
                        <a
                            href={item.href}
                            onClick={() => {
                                setActiveNav(item.href);
                                setShowLinks(false);
                            }}
                            className={`relative py-1 hover:text-[var(--color-tertiary)] transition-all duration-300
                                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[var(--color-tertiary)]
                                after:transition-all after:duration-300
                                after:shadow-[0_0_8px_rgba(0,212,255,0.4)]
                                ${activeNav === item.href
                                    ? "text-[var(--color-tertiary)] after:w-full"
                                    : "after:w-0 hover:after:w-full"
                                }`}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* CV Button */}
            <Button
                href={getAssetPath("/images/CV1V4.png")}
                download
                className="max-[976px]:mx-auto"
            >
                Mon CV
            </Button>

            {/* Burger Button */}
            <button
                className="w-10 h-10 bg-transparent border-none hidden max-[976px]:block max-[976px]:fixed max-[976px]:top-4 max-[976px]:right-4 max-[976px]:cursor-pointer"
                onClick={handleShowLinks}
            >
                <span
                    className={`block w-10 h-[3px] relative rounded bg-white transition-all duration-[400ms] before:content-[''] before:absolute before:left-0 before:w-10 before:h-[3px] before:rounded before:bg-white before:transition-all before:duration-[400ms] after:content-[''] after:absolute after:left-0 after:w-10 after:h-[3px] after:rounded after:bg-white after:transition-all after:duration-[400ms] ${showLinks
                        ? "bg-transparent w-0 before:rotate-45 before:translate-y-0 after:-rotate-45 after:translate-y-0"
                        : "before:-translate-y-3 after:translate-y-3"
                        }`}
                />
            </button>
        </nav>
    );
}
