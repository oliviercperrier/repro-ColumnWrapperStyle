import type { TThemeBase } from "../../types";
import { primaryShade } from "./primaryShade";

export interface IsThemeColorPayload {
  color: string;
  checkPrimary?: boolean;
}

export const isThemeColor =
  (theme: TThemeBase) =>
  ({ color, checkPrimary = false }: IsThemeColorPayload): boolean => {
    const currentColor = color.split(".")[0];

    if (checkPrimary && currentColor === "primary") {
      return true;
    }

    return Object.keys(theme.palette.colors).includes(currentColor);
  };

export interface ThemeColorPayload {
  color: string;
  shade?: number;
  primaryFallback?: boolean;
  useSplittedShade?: boolean;
}

export const themeColor = (theme: TThemeBase) => {
  const getPrimaryShade = primaryShade(theme);

  return ({ color, shade, primaryFallback = true, useSplittedShade = true }: ThemeColorPayload): string => {
    if (typeof color === "string" && color.includes(".")) {
      let [splitterColor, _splittedShade] = color.split(".");
      const splittedShade = parseInt(_splittedShade, 10);

      if (color.split(".")[0] === "primary") {
        splitterColor = theme.palette.primaryColor;
      }

      if (splitterColor in theme.palette.colors && splittedShade >= 0 && splittedShade < 10) {
        return theme.palette.colors[splitterColor][
          typeof shade === "number" && !useSplittedShade ? shade : splittedShade
        ];
      }
    }

    const _shade = typeof shade === "number" ? shade : getPrimaryShade();

    if (color === "primary") {
      return theme.palette.colors[theme.palette.primaryColor][_shade];
    }

    return color in theme.palette.colors
      ? theme.palette.colors[color][_shade]
      : primaryFallback
      ? theme.palette.colors[theme.palette.primaryColor][_shade]
      : color;
  };
};
