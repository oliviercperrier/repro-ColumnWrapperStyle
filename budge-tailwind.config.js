const {
  baseColors,
  extendedTextColors,
  extendedBackgroundColors,
  extendedBorderColors,
} = require("./src/budge-ui-styling/src/theme/BudgeColors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: baseColors,
    extend: {
      textColor: extendedTextColors,
      borderColor: extendedBorderColors,
      colors: {
        primary: {
          ...baseColors.purple
        }
      },
      screens: {
        /* width breakpoints */
        xxs: { raw: "(min-width: 0px)" },
        xs: { raw: "(min-width: 425px)" },
        sm: { raw: "(min-width: 575px)" },
        md: { raw: "(min-width: 768px)" },
        lg: { raw: "(min-width: 992px)" },
        xl: { raw: "(min-width: 1200px)" },
        "2xlh": { raw: "(min-width: 1600px)" },
        /* height breakpoints */
        xxsh: { raw: "(min-height: 0px)" },
        xsh: { raw: "(min-height: 575px)" },
        smh: { raw: "(min-height: 768px)" },
        mdh: { raw: "(min-height: 992px)" },
        lgh: { raw: "(min-height: 800px)" },
        xlh: { raw: "(min-height: 800px)" },
        "2xlh": { raw: "(min-height: 800px)" },
      },
    },
  },
};
