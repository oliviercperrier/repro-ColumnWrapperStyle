const baseColors = {
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  dark: {
    0: "#f7f8f8",
    1: "#eeeef0",
    2: "#d8d9df",
    3: "#b7bac2",
    4: "#8f93a1",
    5: "#717686",
    6: "#5b5f6e",
    7: "#4b4e59",
    8: "#40434c",
    9: "#383a42",
    10: "#25262b",
    DEFAULT: "#25262b",
  },
  gray: {
    0: "#f6f7f8",
    1: "#ebecee",
    2: "#d8dade",
    3: "#c3c7cd",
    4: "#a6aab4",
    5: "#9095a1",
    DEFAULT: "#9095a1",
    6: "#7f8391",
    7: "#727583",
    8: "#60626d",
    9: "#4f5159",
    10: "#333338",
  },
  red: {
    0: "#fff0f2",
    1: "#ffe2e7",
    2: "#ffcad5",
    3: "#ff9fb1",
    4: "#ff6989",
    5: "#ff3e6c",
    DEFAULT: "#ff3e6c",
    6: "#ed1150",
    7: "#c80844",
    8: "#a80940",
    9: "#8f0c3d",
    10: "#50011c",
  },
  water: {
    0: "#ecfffe",
    1: "#d0fdfd",
    2: "#a7f9fa",
    3: "#6af2f6",
    4: "#26e1ea",
    5: "#0ac7d3",
    DEFAULT: "#0ac7d3",
    6: "#0b9daf",
    7: "#107e8e",
    8: "#176573",
    9: "#175362",
    10: "#093843",
  },
  blue: {
    0: "#f1f8fd",
    1: "#e0eff9",
    2: "#c8e3f5",
    3: "#a3d1ed",
    4: "#77b7e3",
    5: "#569ddb",
    6: "#4a88d0",
    DEFAULT: "#4a88d0",
    7: "#386fbd",
    8: "#335a9a",
    9: "#2e4d7a",
    10: "#20304b",
  },
  green: {
    0: "#eafff4",
    1: "#cdfee4",
    2: "#a0face",
    3: "#63f2b5",
    4: "#25e297",
    5: "#00c27c",
    DEFAULT: "#00c27c",
    6: "#00a469",
    7: "#008358",
    8: "#006747",
    9: "#00553b",
    10: "#003023",
  },
  yellow: {
    0: "#fdf9e9",
    1: "#faf2c7",
    2: "#f7e391",
    3: "#f2cb52",
    4: "#edb72d",
    DEFAULT: "#edb72d",
    5: "#dc9c16",
    6: "#be7810",
    7: "#985510",
    8: "#7e4515",
    9: "#6b3818",
    10: "#3e1c0a",
  },
  brown: {
    0: "#fcf6f0",
    1: "#f9e9db",
    2: "#f2d1b6",
    3: "#e9b188",
    4: "#dd804c",
    DEFAULT: "#dd804c",
    5: "#d86a37",
    6: "#ca542c",
    7: "#a84026",
    8: "#863526",
    9: "#6d2e21",
    10: "#3a1510",
  },
  orange: {
    0: "#fff2f1",
    1: "#ffe3e1",
    2: "#ffcbc7",
    3: "#ffa7a0",
    4: "#ff675b",
    DEFAULT: "#ff675b",
    5: "#f8493b",
    6: "#e52c1d",
    7: "#c12114",
    8: "#a01e14",
    9: "#842018",
    10: "#480c07",
  },
  purple: {
    0: "#fbf3ff",
    1: "#f5e4ff",
    2: "#eccfff",
    3: "#dda9ff",
    4: "#c872ff",
    5: "#b43cff",
    6: "#a117ff",
    7: "#8d08e8",
    8: "#730cb6",
    DEFAULT: "#730cb6",
    9: "#620c97",
    10: "#440072",
  },
  get primary() {
    return this.purple.DEFAULT;
  },
  get info() {
    return this.blue.DEFAULT;
  },
  get success() {
    return this.green.DEFAULT;
  },
  get warning() {
    return this.yellow.DEFAULT;
  },
  get error() {
    return this.red.DEFAULT;
  },
};

export type TColors = keyof typeof baseColors | "white" | "black" | "transparent";

/** TEXT COLORS */
export type TExtendedTextColors = {
  default: string;
  secondary: string;
  disabled: string;
};
const extendedTextColors: TExtendedTextColors = {
  default: baseColors.dark.DEFAULT,
  secondary: baseColors.gray[5],
  disabled: baseColors.gray[2],
};

/** BORDER COLORS */
export type TExtendedBorderColors = {
  default: string;
  disabled: string;
};
const extendedBorderColors: TExtendedBorderColors = {
  default: baseColors.gray[1],
  disabled: baseColors.gray[2],
};

/** BACKGROUND COLORS */
export type TExtendedBackgroundColors = {
  default: string;
  disabled: string;
};
const extendedBackgroundColors: TExtendedBackgroundColors = {
  default: baseColors.gray[1],
  disabled: baseColors.gray[2],
};

export { baseColors, extendedTextColors, extendedBorderColors, extendedBackgroundColors };
