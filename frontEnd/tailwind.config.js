/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lora: ["Lora", "serif"],
      inter :["'Inter', sans-serif"]
    },
    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'grey': '#F3F3F3',
      'blue': '#55A3FF',
      'red': '#D0342C'
    },
    extend: {},
  },
  plugins: [],
};
