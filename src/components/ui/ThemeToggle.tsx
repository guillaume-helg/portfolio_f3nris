"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // Hydration fix
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10" aria-hidden="true" />;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 rounded-full glass flex flex-shrink-0 items-center justify-center
                text-[var(--color-fontnew)] hover:text-[var(--color-tertiary)]
                hover:shadow-[0_0_15px_rgba(var(--tertiary-rgb),0.25)]
                hover:border-[rgba(var(--tertiary-rgb),0.3)]
                transition-all duration-300"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <FiSun className="text-lg" />
            ) : (
                <FiMoon className="text-lg" />
            )}
        </button>
    );
}
