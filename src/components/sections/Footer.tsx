import Image from "next/image";
import { FiLinkedin, FiDribbble, FiGithub } from "react-icons/fi";
import { getAssetPath } from "@/utils/paths";

const currentYear = new Date().getFullYear();

const footerLinks = [
    { href: "#about", label: "A propos" },
    { href: "#skill", label: "Compétences" },
    { href: "#experience", label: "Expériences" },
    { href: "#project", label: "Projets" },
    { href: "#contact", label: "Contact" },
];

const socialLinks = [
    { href: "https://www.linkedin.com/in/guillaume-helg/", icon: FiLinkedin, label: "LinkedIn" },
    { href: "https://dribbble.com/Lorddragon", icon: FiDribbble, label: "Dribbble" },
    { href: "https://github.com/GuillaumeHelg", icon: FiGithub, label: "GitHub" },
];

export default function Footer() {
    return (
        <footer className="relative mt-8 w-full">
            {/* Gradient top border */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--color-tertiary)]/30 to-transparent" />

            <div className="glass-strong py-12 px-8">
                <div className="max-w-[1100px] mx-auto">
                    {/* Top row: Logo + Nav + Socials */}
                    <div className="flex items-center justify-between flex-wrap gap-8 max-[976px]:flex-col max-[976px]:items-center">
                        {/* Logo */}
                        <a href="#" className="w-[90px] flex-shrink-0">
                            <Image src={getAssetPath("/images/logowbg.png")} alt="logo" width={90} height={36} />
                        </a>

                        {/* Nav links */}
                        <nav className="flex items-center gap-6 flex-wrap justify-center">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-[var(--color-fontnew)] hover:text-[var(--color-tertiary)] transition-all duration-300 relative
                                        after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px]
                                        after:bg-[var(--color-tertiary)] after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        {/* Social icons */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="w-9 h-9 rounded-full glass flex items-center justify-center
                                            text-[var(--color-fontnew)] hover:text-[var(--color-tertiary)]
                                            hover:shadow-[0_0_12px_rgba(0,212,255,0.25)]
                                            hover:border-[rgba(0,212,255,0.3)]
                                            transition-all duration-300"
                                    >
                                        <Icon className="text-sm" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--color-card-border)] to-transparent my-8" />

                    {/* Bottom row: Copyright */}
                    <div className="text-center text-[var(--color-fontnew)] text-xs tracking-wide opacity-70">
                        © {currentYear} Guillaume HELG — Tous droits réservés
                    </div>
                </div>
            </div>
        </footer>
    );
}
