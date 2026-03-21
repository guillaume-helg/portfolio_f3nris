"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    
    // Use refs for positions to avoid state-induced jitter/re-renders on every frame
    const posRef = useRef({ x: 0, y: 0 });
    const trailRef = useRef({ x: 0, y: 0 });
    const dotElementRef = useRef<HTMLDivElement>(null);
    const trailElementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            posRef.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);

        let animationId: number;
        const animate = () => {
            // Update trail position with easing
            trailRef.current.x += (posRef.current.x - trailRef.current.x) * 0.15;
            trailRef.current.y += (posRef.current.y - trailRef.current.y) * 0.15;

            // Apply positions directly to DOM elements for maximum performance
            if (dotElementRef.current) {
                dotElementRef.current.style.left = `${posRef.current.x}px`;
                dotElementRef.current.style.top = `${posRef.current.y}px`;
            }
            if (trailElementRef.current) {
                trailElementRef.current.style.left = `${trailRef.current.x}px`;
                trailElementRef.current.style.top = `${trailRef.current.y}px`;
            }

            animationId = requestAnimationFrame(animate);
        };
        animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationId);
        };
    }, [isVisible]);

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
                ref={dotElementRef}
                className={`fixed pointer-events-none z-[9999] rounded-full transition-opacity duration-300
                    ${isVisible ? "opacity-100" : "opacity-0"}
                    ${isHovering ? "w-2 h-2 -translate-x-1 -translate-y-1" : "w-1.5 h-1.5 -translate-x-[3px] -translate-y-[3px]"}`}
                style={{
                    background: "rgb(var(--tertiary-rgb))",
                    boxShadow: "0 0 8px rgba(var(--tertiary-rgb), 0.8), 0 0 20px rgba(var(--tertiary-rgb), 0.3)",
                }}
            />
            {/* Trailing ring */}
            <div
                ref={trailElementRef}
                className={`fixed pointer-events-none z-[9998] rounded-full transition-all
                    ${isVisible ? "opacity-100" : "opacity-0"}
                    ${isHovering ? "w-10 h-10 -translate-x-5 -translate-y-5 border-[var(--color-tertiary)]" : "w-8 h-8 -translate-x-4 -translate-y-4 border-[rgba(var(--tertiary-rgb), 0.3)]"}`}
                style={{
                    border: isHovering ? "1.5px solid rgba(var(--tertiary-rgb), 0.6)" : "1px solid rgba(var(--tertiary-rgb), 0.25)",
                    boxShadow: isHovering ? "0 0 15px rgba(var(--tertiary-rgb), 0.2)" : "none",
                    transitionDuration: isHovering ? "200ms" : "0ms",
                }}
            />
        </>
    );
}
