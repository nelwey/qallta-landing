/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
    },
  },
  plugins: [],
};
