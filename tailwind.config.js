/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_background: "#1A1110",
        beaverLight: "#AB947E",
        umber: "#6F5E53",
        text: "#6F5E53",
        beaverDark: "#8A7968",
        roseEbony: "#593D3B",

        smoky_black: {
          DEFAULT: "#100C08",
        },
        chocolate_cosmos: {
          DEFAULT: "#370617",
        },
        rosewood: {
          DEFAULT: "#6a040f",
        },
        penn_red: {
          DEFAULT: "#9d0208",
        },
        engineering_orange: {
          DEFAULT: "#d00000",
        },
        sinopia: {
          DEFAULT: "#dc2f02",
        },
        persimmon: {
          DEFAULT: "#e85d04",
        },
        princeton_orange: {
          DEFAULT: "#f48c06",
        },
        orange: {
          DEFAULT: "#faa307",
        },
        selective_yellow: {
          DEFAULT: "#ffba08",
        },
      },
    },
  },
  plugins: [],
};
