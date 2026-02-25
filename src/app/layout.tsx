import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import StarField from "@/components/ui/StarField";
import CustomCursor from "@/components/ui/CustomCursor";
import PageLoader from "@/components/ui/PageLoader";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: "200",
    display: "swap",
    variable: "--font-jetbrains",
});

export const metadata: Metadata = {
    title: "Guillaume HELG — Portfolio",
    description:
        "Portfolio de Guillaume HELG — Étudiant développeur passionné, spécialisé en développement d'applications.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <body
                className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
            >
                <PageLoader />
                <CustomCursor />
                <StarField />
                <div className="relative z-10">
                    {children}
                </div>
            </body>
        </html>
    );
}
