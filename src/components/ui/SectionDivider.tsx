export default function SectionDivider() {
    return (
        <div className="relative w-full h-24 overflow-hidden" aria-hidden="true">
            {/* Nebula cloud gradient */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div
                    className="w-full h-[1px] relative"
                    style={{
                        background: "linear-gradient(90deg, transparent 0%, rgba(var(--tertiary-rgb), 0.08) 20%, rgba(var(--accent-purple-rgb), 0.12) 50%, rgba(var(--tertiary-rgb), 0.08) 80%, transparent 100%)",
                    }}
                />
            </div>
            {/* Center glow orb */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-1 h-1 bg-[var(--color-tertiary)] rounded-full shadow-[0_0_20px_8px_rgba(var(--tertiary-rgb), 0.08)]" />
            </div>
        </div>
    );
}
