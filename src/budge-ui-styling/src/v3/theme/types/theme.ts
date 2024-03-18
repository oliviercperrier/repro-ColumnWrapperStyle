import { TResolveThemeColor } from "../functions/funcs/resolveThemeColor";
import { TSplitColorTokenPayload } from "../functions/funcs/splitThemeColorToken";
import { TBudgeThemePalette, TColorToken } from "./colors";

export interface TBudgeThemeFunctions {
  themeColor(params: TResolveThemeColor): string;
  splitColorToken(colorToken: TColorToken): TSplitColorTokenPayload;
}

export type TBudgeTheme = {
  portalProviderNames: {
    modals: string;
    toasts: string;
  };

  dateFormatISO: string;
  dateFormat: string;
  dateLocale: string;
  moneyCurrency: string;
  timezone: string;

  palette: TBudgeThemePalette;

  fn: TBudgeThemeFunctions;
};

export type TBaseBudgeTheme = Omit<TBudgeTheme, "fn">;
