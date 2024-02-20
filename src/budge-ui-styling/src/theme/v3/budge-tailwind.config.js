const { baseColors, extendedTextColors, extendedBorderColors } = require("./theme-colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: baseColors,
    extend: {
      textColor: extendedTextColors,
      borderColor: extendedBorderColors,
      screens: {
        xs: "425px",
        sm: "575px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1600px",
      },
      animation: {
        'spin-fast': 'spin 0.6s linear infinite',
      }
    },
  },
};
