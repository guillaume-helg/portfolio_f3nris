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
            className={`inline-block px-5 py-3 border border-[var(--color-tertiary)] text-[var(--color-tertiary)] rounded text-sm font-[Poppins,sans-serif] hover:bg-[rgba(45,212,191,0.1)] transition-all duration-[400ms] ${className}`}
        >
            {children}
        </a>
    );
}
