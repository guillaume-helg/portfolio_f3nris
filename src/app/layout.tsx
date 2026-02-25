import type { Metadata } from "next";
import { Open_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-open-sans",
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
                className={`${openSans.variable} ${jetbrainsMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
