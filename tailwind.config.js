/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: "rgb(14 165 233)",
      white: "#ffffff",
    },
    extend: {
      colors: {
        primary: {
          600: "#007EE6",
        },
        supporting: {
          1: "#EDF3FF",
        },
      },
    },
  },
  plugins: [],
};
