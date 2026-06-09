import type {Metadata} from "next";
import {Inter, Newsreader} from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const newsreader = Newsreader({
    variable: "--font-newsreader",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Arya Abadi",
    description: "Portfolio",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
        <body className="min-h-full bg-stone-50 text-zinc-900 antialiased">
        {children}
        </body>
        </html>
    );
}