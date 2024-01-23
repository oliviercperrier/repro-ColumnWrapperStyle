const baseColors = {
  dark: {
    50: "#F4F4F4",
    100: "#E9E9EA",
    200: "#C9C9CA",
    300: "#A8A8AA",
    400: "#66676B",
    500: "#25262B",
    600: "#212227",
    700: "#16171A",
    800: "#111113",
    900: "#0B0B0D",
  },
  gray: {
    50: "#F9F9F9",
    100: "#F2F2F2",
    200: "#DFDFDF",
    300: "#CBCBCB",
    400: "#A5A5A5",
    500: "#7E7E7E",
    600: "#717171",
    700: "#4C4C4C",
    800: "#393939",
    900: "#262626",
  },
  red: {
    50: "#FFF5F8",
    100: "#FFECF0",
    200: "#FFCFDA",
    300: "#FFB2C4",
    400: "#FF7898",
    500: "#FF3E6C",
    600: "#E63861",
    700: "#992541",
    800: "#731C31",
    900: "#4D1320",
  },
  water: {
    50: "#F3FCFD",
    100: "#E7F9FB",
    200: "#C2F1F4",
    300: "#9DE9ED",
    400: "#54D8E0",
    500: "#0AC7D3",
    600: "#09B3BE",
    700: "#06777F",
    800: "#055A5F",
    900: "#033C3F",
  },
  purple: {
    50: "#F8F3FB",
    100: "#F1E7F8",
    200: "#DCC2ED",
    300: "#C79EE2",
    400: "#9D55CC",
    500: "#730CB6",
    600: "#680BA4",
    700: "#45076D",
    800: "#340552",
    900: "#230437",
  },
  blue: {
    50: "#F6F9FD",
    100: "#EDF3FA",
    200: "#D2E1F3",
    300: "#B7CFEC",
    400: "#80ACDE",
    500: "#4A88D0",
    600: "#437ABB",
    700: "#2C527D",
    800: "#213D5E",
    900: "#16293E",
  },
  green: {
    50: "#F2FCF8",
    100: "#E6F9F2",
    200: "#BFF0DE",
    300: "#99E7CB",
    400: "#4DD4A3",
    500: "#00C27C",
    600: "#00AF70",
    700: "#00744A",
    800: "#005738",
    900: "#003A25",
  },
  yellow: {
    50: "#FEFBF5",
    100: "#FDF8EA",
    200: "#FBEDCB",
    300: "#F8E2AB",
    400: "#F2CD6C",
    500: "#EDB72D",
    600: "#D5A529",
    700: "#8E6E1B",
    800: "#6B5214",
    900: "#47370E",
  },
  brown: {
    50: "#FDF9F6",
    100: "#FCF2ED",
    200: "#F7DFD2",
    300: "#F1CCB7",
    400: "#E7A682",
    500: "#DD804C",
    600: "#C77344",
    700: "#854D2E",
    800: "#633A22",
    900: "#422617",
  },
  orange: {
    50: "#FFF7F7",
    100: "#FFF0EF",
    200: "#FFD9D6",
    300: "#FFC2BD",
    400: "#FF958C",
    500: "#FF675B",
    600: "#E65D52",
    700: "#993E37",
    800: "#732E29",
    900: "#4D1F1B",
  },
};

/** TEXT COLORS */
const extendedTextColors: {
  primary: string;
  secondary: string;
  disabled: string;
} = {
  primary: baseColors.dark[500],
  secondary: baseColors.gray[400],
  disabled: baseColors.gray[200],
};

/** BG COLORS */
const extendedBackgroundColors: {
  primary: string;
  disabled: string;
} = {
  primary: baseColors.gray[100],
  disabled: baseColors.gray[200],
};

/** BORDER COLORS */
const extendedBorderColors: {
  primary: string;
  disabled: string;
} = {
  primary: baseColors.gray[100],
  disabled: baseColors.gray[100],
};

export {
  baseColors,
  extendedTextColors,
  extendedBackgroundColors,
  extendedBorderColors,
};
