import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
// import localFont from '@next/font/local'
import "styles/globals.css";
//
// const dinPro = localFont({
//     src: [
//         {
//             path:"../public/fonts/dinpro_light.otf",
//             weight:"400"
//         },
//         {
//             path:"../public/fonts/dinpro.otf",
//             weight:"500"
//         },
//         {
//             path:"../public/fonts/dinpro_italic.otf",
//             weight:"400",
//             style:'italic',
//         },
//         {
//             path:"../public/fonts/dinpro_bold.otf",
//             weight:"700"
//         },
//     ], // Use an absolute path from the public folder
//     variable: '--font-dinpro'
// });

import { Oswald } from "next/font/google"
import ReactLenis from "lenis/dist/lenis-react";
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
        <body className={`${oswald.variable}  overflow-x-hidden font-sans bg-background text-foreground min-h-screen`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <ReactLenis root>
            {children}
            </ReactLenis>
        </ThemeProvider>
        </body>
        </html>
    );
}
