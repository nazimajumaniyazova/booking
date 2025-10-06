/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in forwards",
      },
    },
  },
  plugins: [],
};
export default config;
