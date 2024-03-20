import { TColorPaletteTheme, TColorBase } from "./types/Colors";
import { Tuple } from "./types/Tuple";

export const DEFAULT_COLORS = {
  dark: ["#F8F8FB", "#F2F1F3", "#D5D6DD", "#A9AEB9", "#787D8D", "#565a66", "#393843", "#3A3843", "#141517", "#000000"],

  gray: ["#f8f8f8", "#f2f2f2", "#e5e5e5", "#c5c5c5", "#b1b1b1", "#9e9e9e", "#7e7e7e", "#6f6f6f", "#5f5f5f", "#2f2f2f"],

  red: ["#fff0f3", "#ffc5d3", "#ffb2c4", "#ff8ba7", "#ff7898", "#ff6589", "#ff517b", "#ff3e6c", "#e63861", "#cc3256"],

  water: ["#ebfbfb", "#b6eef2", "#9de9ed", "#6cdde5", "#54d8e0", "#3bd2dc", "#23cdd7", "#0ac7d3", "#09b3be", "#089fa9"],

  purple: [
    "#f4ecf9",
    "#ebd9f8",
    "#c79ee2",
    "#ab6dd3",
    "#9d55cc",
    "#8f3dc5",
    "#8124bd",
    "#730cb6",
    "#680ba4",
    "#5c0a92",
  ],

  blue: ["#f1f5fb", "#c9dbf1", "#b7cfec", "#92b8e3", "#80acde", "#6ea0d9", "#5c94d5", "#4a88d0", "#437abb", "#3b6da6"],

  green: ["#ebfaf5", "#b3edd8", "#99e7cb", "#66dab0", "#4dd4a3", "#33ce96", "#1ac889", "#00c27c", "#00af70", "#009b63"],

  yellow: [
    "#fef9ee",
    "#fae9c0",
    "#f8e2ab",
    "#f4d481",
    "#f2cd6c",
    "#f1c557",
    "#efbe42",
    "#edb72d",
    "#d5a529",
    "#be9224",
  ],

  brown: ["#fcf5f1", "#f5d9c9", "#f1ccb7", "#ebb394", "#e7a682", "#e49970", "#e08d5e", "#dd804c", "#c77344", "#b1663d"],

  orange: [
    "#fff3f2",
    "#ffd1ce",
    "#ffc2bd",
    "#ffa49d",
    "#ff958c",
    "#ff857c",
    "#ff766b",
    "#ff675b",
    "#e65d52",
    "#cc5249",
  ],
} as Record<TColorBase, Tuple<string, 10>>;

export const DefaultColorPalette: TColorPaletteTheme = {
  colors: DEFAULT_COLORS,

  primaryColor: "purple",

  primaryShade: {
    light: 7,
    dark: 9,
  },

  textColor: {
    primary: DEFAULT_COLORS.dark[6],
    secondary: DEFAULT_COLORS.dark[4],
    disabled: DEFAULT_COLORS.gray[4],
  },

  background: {
    default: DEFAULT_COLORS.gray[0],
    disabled: DEFAULT_COLORS.gray[1],
  },

  border: {
    default: DEFAULT_COLORS.gray[2],
    disabled: DEFAULT_COLORS.gray[2],
  },
};
