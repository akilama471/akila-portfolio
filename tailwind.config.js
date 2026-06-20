/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Outfit", "sans-serif"],
                mono: ["Space Grotesk", "monospace"],
            },
            colors: {
                primary: "#06b6d4",
                secondary: "#3b82f6",
                dark: {
                    900: "#0f172a",
                    800: "#1e293b",
                    700: "#334155",
                },
            },
        },
    },
    plugins: [],
};