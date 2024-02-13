import Color from "color";
import { TColor, TThemeBase } from "../../types";
import { isThemeColor, themeColor } from "./themeColor";

export function isColor(theme: TThemeBase) {
  const getThemeColor = themeColor(theme);
  const isFromThemeColor = isThemeColor(theme);

  return (scheme: "dark" | "light", color: TColor): boolean => {
    const currentColor = isFromThemeColor({ color, checkPrimary: true }) ? getThemeColor({ color }) : color;

    return scheme === "dark" ? Color(currentColor).isDark() : Color(currentColor).isLight();
  };
}
