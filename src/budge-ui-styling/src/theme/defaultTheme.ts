import {
  DEFAULT_CURRENCY,
  DEFAULT_DATE_FORMAT,
  DEFAULT_LOCALE,
  DEFAULT_TIMEZONE,
  ISO_DATE_FORMAT,
} from "@budgeinc/budge-ui-utils";
import { DEFAULT_COLORS, DefaultColorPalette } from "./defaultColors";
import { DefaultTypographyTheme } from "./defaultTypography";
import { attachFunctions } from "./functions/attachFunctions";
import { TThemeBase } from "./types/Theme";

const _DEFAULT_THEME: TThemeBase = {
  loader: "",

  portalProviderNames: {
    modals: "modals-provider",
    toasts: "toasts-provider",
  },

  dateFormatISO: ISO_DATE_FORMAT,
  dateFormat: DEFAULT_DATE_FORMAT,
  dateLocale: DEFAULT_LOCALE,
  moneyCurrency: DEFAULT_CURRENCY,
  timezone: DEFAULT_TIMEZONE,

  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
  },

  defaultRadius: "md",

  shadow: {
    xs: {
      shadowColor: DEFAULT_COLORS.dark[3],
      shadowOffset: {
        width: 0.5,
        height: 0.5,
      },
      shadowOpacity: 0.15,
      shadowRadius: 4,
    },
    sm: {
      shadowColor: DEFAULT_COLORS.dark[4],
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.15,
      shadowRadius: 6,
    },
    md: {
      shadowColor: DEFAULT_COLORS.dark[4],
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.15,
      shadowRadius: 9,
    },
    lg: {
      shadowColor: DEFAULT_COLORS.dark[4],
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.15,
      shadowRadius: 12,
    },
    xl: {
      shadowColor: DEFAULT_COLORS.dark[4],
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.15,
      shadowRadius: 15,
    },
    xxl: {
      shadowColor: DEFAULT_COLORS.dark[4],
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.15,
      shadowRadius: 18,
    },
  },

  radius: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
    xxl: 48,
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
  },

  breakpoints: {
    xxs: {
      maxWidth: 425,
    },
    xs: {
      minWidth: 425,
      maxWidth: 576,
    },
    sm: { minWidth: 576, maxWidth: 768 },
    md: { minWidth: 769, maxWidth: 992 },
    lg: { minWidth: 993, maxWidth: 1200 },
    xl: { minWidth: 1201, maxWidth: 1600 },
    xxl: { minWidth: 1601 },
  },

  typography: DefaultTypographyTheme,

  white: "#fff",
  black: "#000",
  colorScheme: "light",
  palette: DefaultColorPalette,

  components: {},
};

const DEFAULT_THEME = attachFunctions(_DEFAULT_THEME);

export default DEFAULT_THEME;
