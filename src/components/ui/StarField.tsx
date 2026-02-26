"use client";

import { useEffect, useState } from "react";

export default function StarField() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Layer 1 — small distant stars (slow parallax) */}
            <div
                className="absolute inset-0 animate-[twinkle_4s_ease-in-out_infinite]"
                style={{
                    transform: `translateY(${scrollY * 0.02}px)`,
                    backgroundImage:
                        "radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.6), transparent)," +
                        "radial-gradient(1px 1px at 25% 45%, rgba(255,255,255,0.5), transparent)," +
                        "radial-gradient(1px 1px at 40% 10%, rgba(255,255,255,0.4), transparent)," +
                        "radial-gradient(1px 1px at 55% 70%, rgba(255,255,255,0.6), transparent)," +
                        "radial-gradient(1px 1px at 70% 30%, rgba(255,255,255,0.5), transparent)," +
                        "radial-gradient(1px 1px at 85% 55%, rgba(255,255,255,0.4), transparent)," +
                        "radial-gradient(1px 1px at 15% 80%, rgba(255,255,255,0.5), transparent)," +
                        "radial-gradient(1px 1px at 90% 85%, rgba(255,255,255,0.6), transparent)," +
                        "radial-gradient(1px 1px at 35% 90%, rgba(255,255,255,0.4), transparent)," +
                        "radial-gradient(1px 1px at 60% 15%, rgba(255,255,255,0.5), transparent)," +
                        "radial-gradient(1px 1px at 5% 50%, rgba(255,255,255,0.3), transparent)," +
                        "radial-gradient(1px 1px at 48% 38%, rgba(255,255,255,0.5), transparent)," +
                        "radial-gradient(1px 1px at 78% 72%, rgba(255,255,255,0.4), transparent)," +
                        "radial-gradient(1px 1px at 22% 62%, rgba(255,255,255,0.6), transparent)," +
                        "radial-gradient(1px 1px at 95% 12%, rgba(255,255,255,0.5), transparent)",
                    backgroundSize: "100% 100%",
                }}
            />

            {/* Layer 2 — medium stars (medium parallax) */}
            <div
                className="absolute inset-0 animate-[twinkle_6s_ease-in-out_1.5s_infinite]"
                style={{
                    transform: `translateY(${scrollY * 0.05}px)`,
                    backgroundImage:
                        "radial-gradient(1.5px 1.5px at 18% 35%, rgba(165,216,255,0.7), transparent)," +
                        "radial-gradient(1.5px 1.5px at 42% 58%, rgba(165,216,255,0.5), transparent)," +
                        "radial-gradient(1.5px 1.5px at 68% 22%, rgba(165,216,255,0.6), transparent)," +
                        "radial-gradient(1.5px 1.5px at 82% 78%, rgba(165,216,255,0.5), transparent)," +
                        "radial-gradient(1.5px 1.5px at 30% 12%, rgba(165,216,255,0.7), transparent)," +
                        "radial-gradient(1.5px 1.5px at 55% 88%, rgba(165,216,255,0.4), transparent)," +
                        "radial-gradient(1.5px 1.5px at 92% 42%, rgba(165,216,255,0.6), transparent)," +
                        "radial-gradient(1.5px 1.5px at 8% 68%, rgba(165,216,255,0.5), transparent)," +
                        "radial-gradient(1.5px 1.5px at 75% 52%, rgba(165,216,255,0.7), transparent)," +
                        "radial-gradient(1.5px 1.5px at 50% 5%, rgba(165,216,255,0.4), transparent)",
                    backgroundSize: "100% 100%",
                }}
            />

            {/* Layer 3 — large bright stars (fast parallax) */}
            <div
                className="absolute inset-0 animate-[twinkle_8s_ease-in-out_3s_infinite]"
                style={{
                    transform: `translateY(${scrollY * 0.1}px)`,
                    backgroundImage:
                        "radial-gradient(2px 2px at 33% 28%, rgba(var(--tertiary-rgb), 0.6), transparent)," +
                        "radial-gradient(2px 2px at 66% 65%, rgba(var(--tertiary-rgb), 0.5), transparent)," +
                        "radial-gradient(2px 2px at 12% 75%, rgba(var(--accent-purple-rgb), 0.5), transparent)," +
                        "radial-gradient(2px 2px at 88% 35%, rgba(var(--tertiary-rgb), 0.4), transparent)," +
                        "radial-gradient(2px 2px at 45% 92%, rgba(var(--accent-purple-rgb), 0.6), transparent)," +
                        "radial-gradient(2px 2px at 72% 8%, rgba(var(--tertiary-rgb), 0.5), transparent)," +
                        "radial-gradient(2.5px 2.5px at 50% 50%, rgba(255,255,255,0.8), transparent)",
                    backgroundSize: "100% 100%",
                }}
            />

            {/* Subtle nebula glow */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background:
                        "radial-gradient(ellipse at 25% 25%, rgba(var(--accent-purple-rgb), 0.08) 0%, transparent 50%)," +
                        "radial-gradient(ellipse at 75% 75%, rgba(var(--tertiary-rgb), 0.06) 0%, transparent 50%)",
                }}
            />
        </div>
    );
}
