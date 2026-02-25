interface SectionHeadingProps {
    subtitle: string;
    title: string;
}

export default function SectionHeading({ subtitle, title }: SectionHeadingProps) {
    return (
        <>
            <h5 className="text-xs tracking-[3px] text-center text-[var(--color-tertiary)] uppercase mb-2.5">
                {subtitle}
            </h5>
            <h2 className="text-center mb-12">{title}</h2>
        </>
    );
}
