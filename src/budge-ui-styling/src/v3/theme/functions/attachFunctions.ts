import { TBaseBudgeTheme, TBudgeTheme } from "../types";
import { fns } from "./funcs";

export function attachFunctions(themeBase: TBaseBudgeTheme): TBudgeTheme {
  return {
    ...themeBase,
    fn: {
      themeColor: fns.resolveThemeColor(themeBase),
      splitColorToken: fns.splitColorToken
    },
  };
}
