/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lora: ["Lora", "serif"],
      inter :["'Inter', sans-serif"]
    },
    colors: {
      "background":"#061113",
      "white": "#D1E2EA",
      "green1": "#79E1CA",
      "green2":"#9DD2CA",
      "green3": "#35776D",
      "green4": "#6CE38F",
      "green5": "#19443B",
      "greenbg": "#091F1D",
      "yellow": "#F6C777",
      "addgreen": "#45BF6C",
      "addgreenbg": "#0D281F",
      "rmred": "#C42948",
      "rmredbg": "#13181B",
      "yellow2": "#E8D2AB",
      "%green": "#54D271",
      "%red": "#E5868E",
      "whitebg": "#071F21"
    },
    extend: {},
  },
  plugins: [],
}

