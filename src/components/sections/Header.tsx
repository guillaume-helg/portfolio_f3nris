import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Header() {
    return (
        <header className="h-max pt-32 overflow-hidden mt-40 px-[100px] max-[720px]:px-4">
            <div className="w-3/4 mx-auto flex flex-row flex-wrap justify-between items-center max-[720px]:flex-col-reverse max-[720px]:items-center max-[720px]:gap-16">
                {/* Presentation */}
                <div className="w-2/5 flex flex-col justify-center flex-wrap gap-4 max-[720px]:w-[92%] max-[720px]:gap-8 max-[720px]:items-center">
                    <h5 className="text-xs tracking-[3px] text-[var(--color-tertiary)] uppercase">
                        Bonjour, je m&apos;appelle
                    </h5>
                    <h2 className="text-[var(--color-fontnew)]">Guillaume HELG</h2>
                    <p className="text-base max-[720px]:text-left">
                        Je suis un étudiant toulousain, qui poursuit ses études en tant que
                        Miagiste, plus spécialisé dans le développement d&apos;applications.
                    </p>
                    <div>
                        <Button href="#contact">Me contacter</Button>
                    </div>
                </div>

                {/* Avatar */}
                <div className="w-2/5 flex justify-center max-[720px]:w-[92%]">
                    <div className="rounded-full w-[350px] h-[350px] overflow-hidden bg-[#3F4167] max-[720px]:w-[200px] max-[720px]:h-[200px]">
                        <Image
                            src="/images/pdp/avataaar.svg"
                            alt="mon avatar"
                            width={350}
                            height={350}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
