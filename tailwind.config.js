/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        galactic: ['var(--font-galactic)'],
        secular: ['var(--font-secular)'],
        // If you want to use CSS import method instead:
        // satoshi: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
