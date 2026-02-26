"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en } from "./en";
import { fr } from "./fr";

type Language = "en" | "fr";
type Dictionary = typeof fr;

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: Dictionary;
}

const dictionaries = { en, fr };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Language>("fr"); // Default to French
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const storedLang = localStorage.getItem("language") as Language;
        if (storedLang && (storedLang === "en" || storedLang === "fr")) {
            setLangState(storedLang);
        }
        setMounted(true);
    }, []);

    const setLang = (newLang: Language) => {
        setLangState(newLang);
        localStorage.setItem("language", newLang);
    };

    // Hydration fix
    if (!mounted) {
        return (
            <LanguageContext.Provider value={{ lang: "fr", setLang, t: dictionaries["fr"] }}>
                {children}
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useTranslation must be used within a LanguageProvider");
    }
    return context;
}
