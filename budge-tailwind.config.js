const {
  baseColors,
  extendedTextColors,
  extendedBgColors,
  extendedBorderColors
} = require("./src//budge-colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: baseColors,
    extend: {
      textColor: extendedTextColors,
      backgroundColor: extendedBgColors,
      borderColor: extendedBorderColors,
    },
  },
};
