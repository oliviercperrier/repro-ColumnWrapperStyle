import { Tuple } from "./Tuple";

export type TDefaultColor =
  | "dark"
  | "gray"
  | "red"
  | "water"
  | "purple"
  | "blue"
  | "green"
  | "yellow"
  | "brown"
  | "orange"
  | (string & {});

export type TThemeColorsOverride = {};

export type TThemeColors = TThemeColorsOverride extends {
  colors: Record<infer CustomColors, Tuple<string, 10>>;
}
  ? Record<CustomColors, Tuple<string, 10>>
  : Record<TDefaultColor, Tuple<string, 10>>;

export type TColorBase = keyof TThemeColors;
export type TColor = keyof TThemeColors | "primary"

export type TThemePalette = {
  colors: TThemeColors;

  primaryColor: keyof TThemeColors;

  primaryShade: {
    light: number;
    dark: number;
  };

  textColor: {
    primary: string;
    secondary: string;
    disabled: string;
  };

  background: {
    default: string;
    disabled: string;
  };

  border: {
    default: string;
    disabled: string;
  };
};

export type TColorPaletteTheme = TThemePalette;
