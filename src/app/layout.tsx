import type {Metadata} from "next";
import {Public_Sans} from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
    variable: "--font-public-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Luxury Alpine Chalet | Experience the Pinnacle of Comfort",
    description: "Indulge in an exclusive alpine retreat where luxury meets the mountains",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="light">
        <head>
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"/>
        </head>
        <body
            className={`${publicSans.variable} antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans`}
        >
        {children}
        </body>
        </html>
    );
}
