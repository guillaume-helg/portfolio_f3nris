"use client";

import { MdOutlineEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { RiTelegramLine } from "react-icons/ri";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Contact() {
    const { t } = useTranslation();
    const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

    return (
        <section
            ref={ref}
            id="contact"
            className={`mt-12 py-8 scroll-reveal-scale ${isVisible ? "visible" : ""}`}
        >
            <SectionHeading subtitle={t.contact.subtitle} title={t.contact.title} />

            <div className="w-3/4 mx-auto flex justify-center flex-wrap gap-[10%]">
                <div className="flex flex-row flex-wrap justify-center gap-5">
                    {/* Email */}
                    <article className="glass rounded-2xl p-6 text-center glow-border-hover transition-all duration-300 group cursor-default">
                        <MdOutlineEmail className="text-2xl mb-3 mx-auto text-[var(--color-fontnew)] group-hover:text-[var(--color-tertiary)] transition-colors duration-300" />
                        <h4>Email</h4>
                        <h5 className="text-[var(--color-fontnew)] text-sm mt-1">
                            guillaume.helg@gmail.com
                        </h5>
                        <a
                            href="mailto:guillaume.helg@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-sm mt-4 text-[var(--color-tertiary)] hover:underline hover:underline-offset-4"
                        >
                            {t.contact.send}
                        </a>
                    </article>

                    {/* Address */}
                    <article className="glass rounded-2xl p-6 text-center glow-border-hover transition-all duration-300 group cursor-default">
                        <GoLocation className="text-2xl mb-3 mx-auto text-[var(--color-fontnew)] group-hover:text-[var(--color-tertiary)] transition-colors duration-300" />
                        <h4>Adresse</h4>
                        <h5 className="text-[var(--color-fontnew)] text-sm mt-1">
                            12340 Bozouls, Aveyron, France
                        </h5>
                        <a
                            href="https://www.google.fr/maps/place/Canyon+dit+%22Trou+de+Bozouls%22/@44.4664204,2.7163995,14.6z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-sm mt-4 text-[var(--color-tertiary)] hover:underline hover:underline-offset-4"
                        >
                            Voir la localisation
                        </a>
                    </article>

                    {/* Telegram */}
                    <article className="glass rounded-2xl p-6 text-center glow-border-hover transition-all duration-300 group cursor-default">
                        <RiTelegramLine className="text-2xl mb-3 mx-auto text-[var(--color-fontnew)] group-hover:text-[var(--color-tertiary)] transition-colors duration-300" />
                        <h4>Telegram</h4>
                        <h5 className="text-[var(--color-fontnew)] text-sm mt-1">
                            guillaume.helg@gmail.com
                        </h5>
                        <a
                            href="https://t.me/OhLordGOAT"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-sm mt-4 text-[var(--color-tertiary)] hover:underline hover:underline-offset-4"
                        >
                            {t.contact.send}
                        </a>
                    </article>
                </div>
            </div>
        </section>
    );
}
