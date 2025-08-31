import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
// import localFont from '@next/font/local'
import "styles/globals.css";
import { abys } from "../lib/fonts";
import { Oswald } from "next/font/google"
import ReactLenis from "lenis/dist/lenis-react";
import Header from "components/Header";
import React from "react";
import Layout from "components/Layout";
//Oswald
//Caveaut
//Amatic
//Merienda
//Cardo
//Antic

const oswald = Oswald({
    subsets: ["latin"],
    weight: [ "400" ,"700"],
    variable: '--font-font',
    display: 'swap',
    adjustFontFallback: false
})
// const roboto = localFont({
//     src: "fonts/dinpro.otf",
//     variable:'--font-roboto'
// })

export const metadata: Metadata = {
    title: "Run&EatDUBAi",
    description: "OUR RACE MAKES YOU FALL IN LOVE WITH RUNNING",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <link rel="icon" href="/logo.svg" type="image/png" />
        </head>
        <body className={`${oswald.variable} ${abys.variable}  overflow-x-hidden font-sans bg-background text-foreground min-h-screen`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme={'light'}>
            <ReactLenis root>
               <Layout>
                {children}
               </Layout>
            </ReactLenis>
        </ThemeProvider>
        </body>
        </html>
    );
}
