"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useTranslation } from "@/i18n/LanguageContext";
import { getAssetPath } from "@/utils/paths";

export default function Navbar() {
    const { t } = useTranslation();
    const [showLinks, setShowLinks] = useState(false);
    const [activeNav, setActiveNav] = useState("#about");

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    };

    const navItems = [
        { href: "#about", label: t.nav.about },
        { href: "#skill", label: t.nav.skills },
        { href: "#experience", label: t.nav.experience },
        { href: "#project", label: t.nav.projects },
        { href: "#hobbies", label: t.nav.hobbies },
        { href: "#contact", label: t.nav.contact },
    ];

    return (
        <nav
            className={`flex flex-wrap items-center justify-between fixed top-0 w-full min-h-[70px]
                bg-[var(--bg)]/70 backdrop-blur-xl
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
                className={`flex max-[976px]:flex-col max-[976px]:justify-center max-[976px]:items-center max-[976px]:fixed max-[976px]:top-0 max-[976px]:bottom-0 max-[976px]:h-screen max-[976px]:p-8 max-[976px]:bg-[var(--bg)]/95 max-[976px]:backdrop-blur-2xl max-[976px]:transition-all max-[976px]:duration-[400ms] max-[976px]:ease-in-out ${showLinks
                    ? "max-[976px]:right-0 max-[976px]:w-screen max-[976px]:visible max-[976px]:gap-10"
                    : "max-[976px]:right-[-100vw] max-[976px]:w-0 max-[976px]:invisible"
                    }`}
            >
                {navItems.map((item, index) => (
                    <li
                        key={item.href}
                        className={`px-[25px] transition-all ease-in-out ${showLinks
                            ? "translate-y-0"
                            : "max-[976px]:translate-y-[100vh]"
                            }`}
                        style={{
                            transitionDuration: showLinks ? `${800 + index * 150}ms` : "400ms",
                        }}
                    >
                        <a
                            href={item.href}
                            onClick={() => {
                                setActiveNav(item.href);
                                setShowLinks(false);
                            }}
                            className={`relative py-2 text-lg max-[976px]:text-2xl font-medium hover:text-[var(--color-tertiary)] transition-all duration-300
                                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[var(--color-tertiary)]
                                after:transition-all after:duration-300
                                after:shadow-[0_0_8px_rgba(var(--tertiary-rgb), 0.4)]
                                ${activeNav === item.href
                                    ? "text-[var(--color-tertiary)] after:w-full"
                                    : "after:w-0 hover:after:w-full"
                                }`}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}

                {/* Mobile-only CTA */}
                <li
                    className={`hidden max-[976px]:block pt-4 transition-all ease-in-out ${showLinks
                        ? "translate-y-0 opacity-100"
                        : "max-[976px]:translate-y-[100vh] opacity-0"
                        }`}
                    style={{ transitionDuration: showLinks ? `${800 + navItems.length * 150}ms` : "400ms" }}
                >
                    <Button href="#contact" className="text-lg">
                        {t.nav.contact}
                    </Button>
                </li>
            </ul>

            {/* Theme, Search Hint & CV Button — desktop only */}
            <div className="flex items-center gap-4 max-[976px]:hidden">
                <div
                    className="flex items-center gap-2 px-3 py-2 rounded-full glass border border-[var(--color-card-border)] text-sm text-[var(--color-fontnew)] cursor-pointer hover:border-[rgba(var(--tertiary-rgb),0.3)] hover:text-[var(--text-primary)] transition-all duration-300"
                    onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
                >
                    <span className="opacity-70">Rechercher...</span>
                    <kbd className="font-mono text-xs bg-[var(--bg-variant)] border border-[var(--color-card-border)] rounded px-1.5 py-0.5 opacity-80">
                        Ctrl K
                    </kbd>
                </div>
                <LanguageToggle />
                <ThemeToggle />
                <Button
                    href={getAssetPath("/images/CV1V4.png")}
                    download
                >
                    {t.nav.cv}
                </Button>
            </div>

            {/* Mobile Actions Overlay */}
            <div className="hidden max-[976px]:flex items-center gap-4 fixed top-3 right-4 z-30">
                <LanguageToggle />
                <ThemeToggle />

                {/* Burger Button */}
                <button
                    className="flex items-center justify-center w-11 h-11
                        glass rounded-xl
                        hover:shadow-[0_0_15px_rgba(var(--tertiary-rgb), 0.2)]
                        hover:border-[rgba(var(--tertiary-rgb), 0.3)]
                        transition-all duration-300"
                    onClick={handleShowLinks}
                    aria-label={showLinks ? "Fermer le menu" : "Ouvrir le menu"}
                >
                    <div className="flex flex-col justify-center items-center w-5 h-5 relative">
                        <span
                            className={`block w-5 h-[2px] rounded-full bg-[var(--text-primary)] transition-all duration-300 absolute ${showLinks
                                ? "rotate-45 top-[9px]"
                                : "top-[3px]"
                                }`}
                        />
                        <span
                            className={`block w-5 h-[2px] rounded-full bg-[var(--text-primary)] transition-all duration-300 absolute top-[9px] ${showLinks
                                ? "opacity-0 scale-x-0"
                                : "opacity-100"
                                }`}
                        />
                        <span
                            className={`block w-5 h-[2px] rounded-full bg-[var(--text-primary)] transition-all duration-300 absolute ${showLinks
                                ? "-rotate-45 top-[9px]"
                                : "top-[15px]"
                                }`}
                        />
                    </div>
                </button>
            </div>
        </nav>
    );
}
