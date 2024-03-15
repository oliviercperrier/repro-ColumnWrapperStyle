/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset"), require("./src/budge-ui-styling/src/v3/theme/budge-tailwind.config")],
  theme: {
    extend: {},
  },
  // important: 'html',
  plugins: [],
};
