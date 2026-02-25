"use client";

import { useEffect, useState } from "react";

interface TypeWriterProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
}

export default function TypeWriter({ text, speed = 80, delay = 500, className = "" }: TypeWriterProps) {
    const [displayed, setDisplayed] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => setStarted(true), delay);
        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;
        if (displayed.length >= text.length) return;

        const timeout = setTimeout(() => {
            setDisplayed(text.slice(0, displayed.length + 1));
        }, speed);

        return () => clearTimeout(timeout);
    }, [started, displayed, text, speed]);

    return (
        <span className={className}>
            {displayed}
            <span className="inline-block w-[2px] h-[1em] bg-[var(--color-tertiary)] ml-1 animate-[blink_1s_step-end_infinite] align-middle" />
        </span>
    );
}
