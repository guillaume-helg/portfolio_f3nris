"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { FiHome, FiUser, FiCode, FiBriefcase, FiFolder, FiMail, FiMoon, FiSun, FiGlobe } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/i18n/LanguageContext";
import { DialogTitle } from "@radix-ui/react-dialog";
import "./command-palette.css";

export default function CommandMenu() {
    const { t, lang, setLang } = useTranslation();
    const [open, setOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const router = useRouter();

    // Toggle the menu when ⌘K is pressed
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Menu de navigation"
            className="command-dialog"
            overlayClassName="command-overlay"
            aria-describedby={undefined}
        >
            <DialogTitle className="sr-only">{t.command.navHeading}</DialogTitle>
            <div className="command-content glass-strong rounded-2xl overflow-hidden shadow-2xl border border-[var(--card-border)]">
                <Command.Input
                    placeholder={t.command.placeholder}
                    className="w-full bg-transparent px-4 py-4 text-base border-b border-[var(--card-border)] outline-none text-[var(--text-primary)] placeholder-[var(--color-fontnew)] placeholder-opacity-50"
                />

                <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-[rgba(var(--tertiary-rgb),0.25)]">
                    <Command.Empty className="py-6 text-center text-sm text-[var(--color-fontnew)]">
                        {t.command.empty}
                    </Command.Empty>

                    <Command.Group heading={t.command.navHeading} className="text-xs text-[var(--color-fontnew)] font-medium px-2 py-3">
                        <Command.Item
                            onSelect={() => runCommand(() => router.push("#"))}
                            className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg cursor-pointer transition-colors text-[var(--text-primary)] aria-selected:bg-[rgba(var(--tertiary-rgb),0.1)] aria-selected:text-[var(--tertiary)]"
                        >
                            <FiHome /> {t.command.top}
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => router.push("#about"))}
                            className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg cursor-pointer transition-colors text-[var(--text-primary)] aria-selected:bg-[rgba(var(--tertiary-rgb),0.1)] aria-selected:text-[var(--tertiary)]"
                        >
                            <FiUser /> {t.nav.about}
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => router.push("#skill"))}
                            className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg cursor-pointer transition-colors text-[var(--text-primary)] aria-selected:bg-[rgba(var(--tertiary-rgb),0.1)] aria-selected:text-[var(--tertiary)]"
                        >
                            <FiCode /> {t.nav.skills}
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => router.push("#experience"))}
                            className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg cursor-pointer transition-colors text-[var(--text-primary)] aria-selected:bg-[rgba(var(--tertiary-rgb),0.1)] aria-selected:text-[var(--tertiary)]"
                        >
                            <FiBriefcase /> {t.nav.experience}
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => router.push("#project"))}
                            className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg cursor-pointer transition-colors text-[var(--text-primary)] aria-selected:bg-[rgba(var(--tertiary-rgb),0.1)] aria-selected:text-[var(--tertiary)]"
                        >
                            <FiFolder /> {t.nav.projects}
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => router.push("#contact"))}
                            className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg cursor-pointer transition-colors text-[var(--text-primary)] aria-selected:bg-[rgba(var(--tertiary-rgb),0.1)] aria-selected:text-[var(--tertiary)]"
                        >
                            <FiMail /> {t.nav.contact}
                        </Command.Item>
                    </Command.Group>

                    <Command.Separator className="h-[1px] bg-[var(--card-border)] my-1 mx-2" />

                    <Command.Group heading={t.command.settingsHeading} className="text-xs text-[var(--color-fontnew)] font-medium px-2 py-3">
                        <Command.Item
                            onSelect={() => runCommand(() => setTheme(theme === "dark" ? "light" : "dark"))}
                            className="flex items-center justify-between px-3 py-2.5 text-sm rounded-lg cursor-pointer transition-colors text-[var(--text-primary)] aria-selected:bg-[rgba(var(--tertiary-rgb),0.1)] aria-selected:text-[var(--tertiary)]"
                        >
                            <div className="flex items-center gap-3">
                                {theme === "dark" ? <FiSun /> : <FiMoon />}
                                {t.command.toggleTheme}
                            </div>
                            <span className="text-xs opacity-50 bg-[var(--bg-variant)] px-2 py-0.5 rounded border border-[var(--card-border)]">
                                T
                            </span>
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => setLang(lang === "fr" ? "en" : "fr"))}
                            className="flex items-center justify-between px-3 py-2.5 text-sm rounded-lg cursor-pointer transition-colors text-[var(--text-primary)] aria-selected:bg-[rgba(var(--tertiary-rgb),0.1)] aria-selected:text-[var(--tertiary)]"
                        >
                            <div className="flex items-center gap-3">
                                <FiGlobe />
                                {t.command.toggleLang}
                            </div>
                            <span className="text-xs opacity-50 bg-[var(--bg-variant)] px-2 py-0.5 rounded border border-[var(--card-border)]">
                                L
                            </span>
                        </Command.Item>
                    </Command.Group>
                </Command.List>
            </div>
        </Command.Dialog>
    );
}
