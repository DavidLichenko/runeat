// app/fonts.ts
import localFont from "next/font/local";

export const abys = localFont({
    src: "../public/fonts/Abys-Regular.woff2",
    variable: "--font-abys",
    weight: "400",
    style: "normal",
    display: "block", // 👈 важное место
});