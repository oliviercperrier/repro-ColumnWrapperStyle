import type { TThemeBase } from "../../types";
import { primaryShade } from "./primaryShade";

export const primaryColor = (theme: TThemeBase) => {
  return (colorScheme?: "light" | "dark") => {
    const shade = primaryShade(theme)(colorScheme);
    return theme.palette.colors[theme.palette.primaryColor][shade];
  };
}
