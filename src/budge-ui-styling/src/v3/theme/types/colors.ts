import { baseColors } from "../theme-colors";

export type TExtendedTextColors = {
  default: string;
  secondary: string;
};

export type TExtendedBorderColors = {
  default: string;
  disabled: string;
};

export type TColorShade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type TColorOpacity =
  | 0
  | 5
  | 10
  | 15
  | 20
  | 25
  | 30
  | 35
  | 40
  | 45
  | 50
  | 55
  | 60
  | 65
  | 70
  | 75
  | 80
  | 85
  | 90
  | 95
  | 100;
export type TColor = keyof typeof baseColors;
export type TBackgroundColors = TColor;
export type TBorderColors = TColor | keyof TExtendedBorderColors;
export type TTextColors = TColor | keyof TExtendedTextColors;

export type TColorToken = TColor | `${TColor}-${TColorShade}` | `${TColor}-${TColorShade}/${TColorOpacity}`;

export type TBudgeThemePalette = {
  colors: typeof baseColors;
  textColors: TExtendedTextColors;
  borderColors: TExtendedBorderColors;
};
