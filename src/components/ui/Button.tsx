import type { ReactNode } from "react";

interface ButtonProps {
    href: string;
    children: ReactNode;
    download?: boolean;
    className?: string;
}

export default function Button({ href, children, download, className = "" }: ButtonProps) {
    return (
        <a
            href={href}
            download={download}
            className={`inline-block px-6 py-3 rounded-lg text-sm font-medium tracking-wide
                bg-white/5 backdrop-blur-md
                border border-[var(--color-card-border)]
                text-[var(--color-tertiary)]
                hover:border-[rgba(0,212,255,0.4)]
                hover:bg-[rgba(0,212,255,0.08)]
                hover:shadow-[0_0_25px_rgba(0,212,255,0.2)]
                hover:scale-[1.03]
                active:scale-[0.98]
                transition-all duration-300 ease-out
                ${className}`}
        >
            {children}
        </a>
    );
}
