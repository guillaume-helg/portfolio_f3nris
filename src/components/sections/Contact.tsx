import { MdOutlineEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { RiTelegramLine } from "react-icons/ri";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
    return (
        <section id="contact" className="mt-12 py-8">
            <SectionHeading subtitle="--- Prenons contact ---" title="Me contacter" />

            <div className="w-3/4 mx-auto flex justify-center flex-wrap gap-[10%]">
                <div className="flex flex-row flex-wrap justify-center gap-5">
                    {/* Email */}
                    <article className="bg-[var(--color-bg-variant)] p-5 rounded-[1.2rem] border border-transparent text-center hover:bg-transparent hover:border-[var(--color-primary-variant)] transition-all duration-[400ms]">
                        <MdOutlineEmail className="text-2xl mb-2 mx-auto" />
                        <h4>Email</h4>
                        <h5 className="text-[var(--color-fontnew)]">
                            guillaume.helg@gmail.com
                        </h5>
                        <a
                            href="mailto:guillaume.helg@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-sm mt-3 text-[var(--color-tertiary)]"
                        >
                            Envoyer un mail
                        </a>
                    </article>

                    {/* Address */}
                    <article className="bg-[var(--color-bg-variant)] p-5 rounded-[1.2rem] border border-transparent text-center hover:bg-transparent hover:border-[var(--color-primary-variant)] transition-all duration-[400ms]">
                        <GoLocation className="text-2xl mb-2 mx-auto" />
                        <h4>Adresse</h4>
                        <h5 className="text-[var(--color-fontnew)]">
                            12340 Bozouls, Aveyron, France
                        </h5>
                        <a
                            href="https://www.google.fr/maps/place/Canyon+dit+%22Trou+de+Bozouls%22/@44.4664204,2.7163995,14.6z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-sm mt-3 text-[var(--color-tertiary)]"
                        >
                            Voir la localisation
                        </a>
                    </article>

                    {/* Telegram */}
                    <article className="bg-[var(--color-bg-variant)] p-5 rounded-[1.2rem] border border-transparent text-center hover:bg-transparent hover:border-[var(--color-primary-variant)] transition-all duration-[400ms]">
                        <RiTelegramLine className="text-2xl mb-2 mx-auto" />
                        <h4>Telegram</h4>
                        <h5 className="text-[var(--color-fontnew)]">
                            guillaume.helg@gmail.com
                        </h5>
                        <a
                            href="https://t.me/OhLordGOAT"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-sm mt-3 text-[var(--color-tertiary)]"
                        >
                            Envoyer un message
                        </a>
                    </article>
                </div>
            </div>
        </section>
    );
}
