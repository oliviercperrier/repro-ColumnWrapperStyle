import { TTheme, TThemeBase } from "../types/Theme";
import { fns } from "./funcs";

export function attachFunctions(themeBase: TThemeBase): TTheme {
  return {
    ...themeBase,
    fn: {
      size: fns.size,
      darken: fns.darken,
      lighten: fns.lighten,
      alpha: fns.alpha,
      isColor: fns.isColor(themeBase),
      radius: fns.radius(themeBase),
      isThemeColor: fns.isThemeColor(themeBase),
      themeColor: fns.themeColor(themeBase),
      variant: fns.variant(themeBase),
      primaryColor: fns.primaryColor(themeBase),
      fade: fns.fade,
      shadow: fns.shadow(themeBase),
    },
  };
}
