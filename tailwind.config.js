/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#4a6fa5",
          dark: "#2c3e5a",
        },
      },
      fontFamily: {
        script: ["'Dancing Script'", "cursive"],
        sans: ["'Lato'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
