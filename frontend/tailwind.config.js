/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#1c2022",
          secondary: "#201c22",
        },
        steel: "#F8F7F4",
      },
    },
  },
  plugins: [],
};
