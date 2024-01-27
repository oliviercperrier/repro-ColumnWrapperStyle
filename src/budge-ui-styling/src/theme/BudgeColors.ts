const baseColors = {
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  dark: {
    0: "#F4F4F4",
    1: "#E9E9EA",
    2: "#C9C9CA",
    3: "#A8A8AA",
    4: "#66676B",
    5: "#25262B",
    DEFAULT: "#25262B",
    6: "#212227",
    7: "#16171A",
    8: "#111113",
    9: "#0B0B0D",
  },
  gray: {
    0: "#F9F9F9",
    1: "#F2F2F2",
    2: "#DFDFDF",
    3: "#CBCBCB",
    4: "#A5A5A5",
    5: "#7E7E7E",
    DEFAULT: "#7E7E7E",
    6: "#717171",
    7: "#4C4C4C",
    8: "#393939",
    9: "#262626",
  },
  red: {
    0: "#FFF5F8",
    1: "#FFECF0",
    2: "#FFCFDA",
    3: "#FFB2C4",
    4: "#FF7898",
    5: "#FF3E6C",
    DEFAULT: "#FF3E6C",
    6: "#E63861",
    7: "#992541",
    8: "#731C31",
    9: "#4D1320",
  },
  water: {
    0: "#F3FCFD",
    1: "#E7F9FB",
    2: "#C2F1F4",
    3: "#9DE9ED",
    4: "#54D8E0",
    5: "#0AC7D3",
    DEFAULT: "#0AC7D3",
    6: "#09B3BE",
    7: "#06777F",
    8: "#055A5F",
    9: "#033C3F",
  },
  blue: {
    0: "#F6F9FD",
    1: "#EDF3FA",
    2: "#D2E1F3",
    3: "#B7CFEC",
    4: "#80ACDE",
    5: "#4A88D0",
    DEFAULT: "#4A88D0",
    6: "#437ABB",
    7: "#2C527D",
    8: "#213D5E",
    9: "#16293E",
  },
  green: {
    0: "#F2FCF8",
    1: "#E6F9F2",
    2: "#BFF0DE",
    3: "#99E7CB",
    4: "#4DD4A3",
    5: "#00C27C",
    DEFAULT: "#00C27C",
    6: "#00AF70",
    7: "#00744A",
    8: "#005738",
    9: "#003A25",
  },
  yellow: {
    0: "#FEFBF5",
    1: "#FDF8EA",
    2: "#FBEDCB",
    3: "#F8E2AB",
    4: "#F2CD6C",
    5: "#EDB72D",
    DEFAULT: "#EDB72D",
    6: "#D5A529",
    7: "#8E6E1B",
    8: "#6B5214",
    9: "#47370E",
  },
  brown: {
    0: "#FDF9F6",
    1: "#FCF2ED",
    2: "#F7DFD2",
    3: "#F1CCB7",
    4: "#E7A682",
    5: "#DD804C",
    DEFAULT: "#DD804C",
    6: "#C77344",
    7: "#854D2E",
    8: "#633A22",
    9: "#422617",
  },
  orange: {
    0: "#FFF7F7",
    1: "#FFF0EF",
    2: "#FFD9D6",
    3: "#FFC2BD",
    4: "#FF958C",
    5: "#FF675B",
    DEFAULT: "#FF675B",
    6: "#E65D52",
    7: "#993E37",
    8: "#732E29",
    9: "#4D1F1B",
  },
  purple: {
    0: "#F8F3FB",
    1: "#F1E7F8",
    2: "#DCC2ED",
    3: "#C79EE2",
    4: "#9D55CC",
    5: "#730CB6",
    DEFAULT: "#730CB6",
    6: "#680BA4",
    7: "#45076D",
    8: "#340552",
    9: "#230437",
  },
  get primary() {
    return this.purple;
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

export type TColors =
  | keyof typeof baseColors
  | "white"
  | "black"
  | "transparent";

/** TEXT COLORS */
export type TExtendedTextColors = {
  default: string;
  secondary: string;
  disabled: string;
};
const extendedTextColors: TExtendedTextColors = {
  default: baseColors.dark.DEFAULT,
  secondary: baseColors.gray[400],
  disabled: baseColors.gray[200],
};

/** BORDER COLORS */
export type TExtendedBorderColors = {
  default: string;
  disabled: string;
};
const extendedBorderColors: TExtendedBorderColors = {
  default: baseColors.gray[100],
  disabled: baseColors.gray[100],
};

export { baseColors, extendedTextColors, extendedBorderColors };
