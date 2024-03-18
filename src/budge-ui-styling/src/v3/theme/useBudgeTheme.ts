import {
  DEFAULT_CURRENCY,
  DEFAULT_DATE_FORMAT,
  DEFAULT_LOCALE,
  DEFAULT_TIMEZONE,
  ISO_DATE_FORMAT,
} from "@budgeinc/budge-ui-utils";
import { TBaseBudgeTheme, TBudgeTheme } from "./types/theme";
import { baseColors, extendedBorderColors, extendedTextColors } from "./theme-colors";
import { attachFunctions } from "./functions/attachFunctions";

export const BASE_THEME: TBaseBudgeTheme = {
  portalProviderNames: {
    modals: "modals-provider",
    toasts: "toasts-provider",
  },

  dateFormatISO: ISO_DATE_FORMAT,
  dateFormat: DEFAULT_DATE_FORMAT,
  dateLocale: DEFAULT_LOCALE,
  moneyCurrency: DEFAULT_CURRENCY,
  timezone: DEFAULT_TIMEZONE,

  palette: {
    colors: baseColors,
    textColors: extendedTextColors,
    borderColors: extendedBorderColors,
  },
};

export const useBudgeTheme = () => {
  return attachFunctions(BASE_THEME);
};
