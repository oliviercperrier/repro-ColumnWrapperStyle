const { baseColors, extendedTextColors, extendedBorderColors, extendedBackgroundColors } = require("./theme-colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: baseColors,
    extend: {
      textColor: extendedTextColors,
      borderColor: extendedBorderColors,
      backgroundColor: extendedBackgroundColors,
      screens: {
        xs: "425px",
        sm: "575px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1600px",
      },
    },
  },
};
