"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setIsLoading(false), 600);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div
            className={`fixed inset-0 z-[10000] flex items-center justify-center bg-[#06091a] transition-opacity duration-[600ms]
                ${fadeOut ? "opacity-0" : "opacity-100"}`}
        >
            <div className="relative flex items-center justify-center">
                {/* Outer ring */}
                <div
                    className="absolute w-24 h-24 rounded-full border border-[var(--color-card-border)] animate-[orbit_2s_linear_infinite]"
                    style={{ boxShadow: "0 0 20px rgba(0,212,255,0.1)" }}
                >
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--color-tertiary)] shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
                </div>

                {/* Middle ring — counter-rotate */}
                <div
                    className="absolute w-16 h-16 rounded-full border border-[rgba(124,58,237,0.2)] animate-[orbit_3s_linear_infinite_reverse]"
                >
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-purple)] shadow-[0_0_8px_rgba(124,58,237,0.8)]" />
                </div>

                {/* Center text */}
                <span className="text-xs tracking-[4px] text-[var(--color-fontnew)] uppercase animate-[pulse-glow_2s_ease-in-out_infinite]">
                    GH
                </span>
            </div>
        </div>
    );
}
