import type { TThemeBase } from "../../types";

export function primaryShade(theme: TThemeBase) {
  return (colorScheme?: "light" | "dark") => {
    if (typeof theme.palette.primaryShade === "number") {
      return theme.palette.primaryShade;
    }

    return theme.palette.primaryShade[colorScheme || theme.colorScheme];
  };
}
