/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-font)'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                border: {
                    DEFAULT: 'hsl(var(--border))',  // 🔹 Ensure border is defined
                },
                text: 'hsl(var(--text))',
                secondary_text: 'hsl(var(--secondary_text))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
            }
        }
    },
    plugins: [
        require("tailwindcss-animate"),
        require("@designbycode/tailwindcss-text-stroke")
    ],
};