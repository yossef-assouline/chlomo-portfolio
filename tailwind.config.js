/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        gambarino: ['var(--font-gambarino)'],
        
        // If you want to use CSS import method instead:
        // satoshi: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
