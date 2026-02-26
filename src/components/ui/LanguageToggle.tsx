"use client";

import { useTranslation } from "@/i18n/LanguageContext";

export default function LanguageToggle() {
    const { lang, setLang } = useTranslation();

    return (
        <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="flex items-center justify-center px-3 h-11 rounded-xl glass font-mono text-sm font-semibold tracking-wider
                text-[var(--color-fontnew)] hover:text-[var(--color-tertiary)]
                hover:shadow-[0_0_15px_rgba(var(--tertiary-rgb),0.25)]
                hover:border-[rgba(var(--tertiary-rgb),0.3)]
                transition-all duration-300"
            aria-label="Toggle language"
        >
            {lang.toUpperCase()}
        </button>
    );
}
