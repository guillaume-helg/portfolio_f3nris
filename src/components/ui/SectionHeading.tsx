interface SectionHeadingProps {
    subtitle: string;
    title: string;
}

export default function SectionHeading({ subtitle, title }: SectionHeadingProps) {
    return (
        <div className="mb-16 text-center">
            <h5 className="text-xs tracking-[5px] text-[var(--color-tertiary)] uppercase mb-3 font-light">
                {subtitle}
            </h5>
            <h2 className="text-3xl font-semibold text-gradient mb-4">
                {title}
            </h2>
            {/* Orbital accent line */}
            <div className="flex items-center justify-center gap-2 mt-4">
                <span className="block w-8 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-tertiary)] opacity-60" />
                <span className="block w-2 h-2 rounded-full bg-[var(--color-tertiary)] animate-[pulse-glow_3s_ease-in-out_infinite] shadow-[0_0_8px_rgba(0,212,255,0.5)]" />
                <span className="block w-16 h-[1px] bg-[var(--color-tertiary)] opacity-40" />
                <span className="block w-2 h-2 rounded-full bg-[var(--color-accent-purple)] animate-[pulse-glow_3s_ease-in-out_1.5s_infinite] shadow-[0_0_8px_rgba(124,58,237,0.5)]" />
                <span className="block w-8 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-accent-purple)] opacity-60" />
            </div>
        </div>
    );
}
