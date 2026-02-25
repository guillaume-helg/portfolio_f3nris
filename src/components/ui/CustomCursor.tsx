"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [isVisible]);

    // Smooth trailing ring
    useEffect(() => {
        let animationId: number;
        const animate = () => {
            setTrailPosition((prev) => ({
                x: prev.x + (position.x - prev.x) * 0.15,
                y: prev.y + (position.y - prev.y) * 0.15,
            }));
            animationId = requestAnimationFrame(animate);
        };
        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, [position]);

    // Detect hoverable elements
    useEffect(() => {
        const handleHoverDetect = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isHoverable = target.closest("a, button, [role='button'], input, textarea, select");
            setIsHovering(!!isHoverable);
        };

        window.addEventListener("mouseover", handleHoverDetect);
        return () => window.removeEventListener("mouseover", handleHoverDetect);
    }, []);

    // Hide on mobile/touch
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <>
            {/* Inner dot */}
            <div
                className={`fixed pointer-events-none z-[9999] rounded-full transition-opacity duration-300 mix-blend-screen
                    ${isVisible ? "opacity-100" : "opacity-0"}
                    ${isHovering ? "w-2 h-2" : "w-1.5 h-1.5"}`}
                style={{
                    left: position.x - (isHovering ? 4 : 3),
                    top: position.y - (isHovering ? 4 : 3),
                    background: "#00d4ff",
                    boxShadow: "0 0 8px rgba(0,212,255,0.8), 0 0 20px rgba(0,212,255,0.3)",
                }}
            />
            {/* Trailing ring */}
            <div
                className={`fixed pointer-events-none z-[9998] rounded-full transition-all mix-blend-screen
                    ${isVisible ? "opacity-100" : "opacity-0"}
                    ${isHovering ? "w-10 h-10 border-[var(--color-tertiary)]" : "w-8 h-8 border-[rgba(0,212,255,0.3)]"}`}
                style={{
                    left: trailPosition.x - (isHovering ? 20 : 16),
                    top: trailPosition.y - (isHovering ? 20 : 16),
                    border: isHovering ? "1.5px solid rgba(0,212,255,0.6)" : "1px solid rgba(0,212,255,0.25)",
                    boxShadow: isHovering ? "0 0 15px rgba(0,212,255,0.2)" : "none",
                    transitionDuration: isHovering ? "200ms" : "0ms",
                }}
            />
        </>
    );
}
