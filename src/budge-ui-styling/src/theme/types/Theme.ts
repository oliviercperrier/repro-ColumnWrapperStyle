import { DimensionValue } from "react-native";
import { IsThemeColorPayload, ThemeColorPayload } from "../functions/funcs/themeColor";
import { TColor, TColorPaletteTheme } from "./Colors";
import { TShadow, TShadowSizes } from "./Shadow";
import { TNumberSize, TScreenBreakpoint, TSize, TSizes } from "./Sizes";
import { TTypographyTheme } from "./Typography";
import { VariantInput, VariantOutput } from "./Variants";
import { IGetSize } from "../functions/funcs/size";

interface ThemeComponent {
  defaultProps?: Record<string, any> | ((theme: TTheme) => Record<string, any>);
}

export type TComponentsTheme = Record<string, ThemeComponent>;

export type ColorScheme = "light" | "dark";

export interface TThemeFunctions {
  size(props: IGetSize): DimensionValue;
  lighten(color: string, alpha: number): string;
  darken(color: string, alpha: number): string;
  radius(size?: TNumberSize | "default"): number;
  isThemeColor(params: IsThemeColorPayload): boolean;
  themeColor(params: ThemeColorPayload): string;
  alpha(color: string, alpha: number): string;
  variant(payload: VariantInput): VariantOutput;
  isColor(scheme: "dark" | "light", color: TColor): boolean;
  primaryColor(scheme?: "dark" | "light"): string;
  fade(color: string, ratio: number): string;
  shadow(size: TSize): TShadow;
}

export type TTheme = {
  loader: any;

  portalProviderNames: {
    modals: string;
    toasts: string
  }

  dateFormatISO: string;
  dateFormat: string;
  dateLocale: string;
  moneyCurrency: string;
  timezone: string;

  fontSizes: TSizes;
  defaultRadius: TSize;
  radius: TSizes;
  spacing: TSizes;
  breakpoints: TScreenBreakpoint;

  shadow: TShadowSizes;

  typography: TTypographyTheme;

  white: string;
  black: string;
  colorScheme: ColorScheme;
  palette: TColorPaletteTheme;

  components: TComponentsTheme;

  fn: TThemeFunctions;
};

export type TThemeBase = Omit<TTheme, "fn">;
