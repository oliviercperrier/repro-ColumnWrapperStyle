import { TTheme } from "../theme/types/Theme";
import { isFunction } from "./helper";

type ThemeFn = (baseTheme?: TTheme) => TTheme;
type ThemeArgument = TTheme | ThemeFn | undefined;

export const mergeTheme = (theme: ThemeArgument, outerTheme?: TTheme): TTheme => {
  if (!theme) {
    throw new Error("ConfigProvider: 'theme' props is required\n\n");
  }

  if (isFunction(theme)) {
    const themeFn = theme as ThemeFn;
    const mergedTheme = themeFn(outerTheme);

    if (
      process.env.NODE_ENV !== "production" &&
      (mergedTheme === null || Array.isArray(mergedTheme) || typeof mergedTheme !== "object")
    ) {
      throw new Error("ConfigProvider: return an TDefaultTheme object from your function\n\n");
    }

    return mergedTheme;
  }

  if (Array.isArray(theme) || typeof theme !== "object") {
    throw new Error("ConfigProvider: Please make your 'theme prop an object.\n\n");
  }

  return outerTheme ? { ...outerTheme, ...theme } : theme;
};
