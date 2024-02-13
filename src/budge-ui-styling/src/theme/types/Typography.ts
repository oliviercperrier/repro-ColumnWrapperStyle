import { TextStyle } from "react-native";

export type TFontWeight = TextStyle["fontWeight"];

export type TTypographyVariant =
  | "titleH5"
  | "titleH4"
  | "titleH3"
  | "titleH2"
  | "titleH1"
  | "labelLarge"
  | "labelMedium"
  | "labelSmall"
  | "bodyLarge"
  | "bodyMedium"
  | "bodyDefault"
  | "bodySmall";

export type TTypographyVariantProps = {
  letterSpacing: number;
  fontWeight: TFontWeight;
  lineHeight: number;
  fontSize: number;
};

export type TTypographyVariants = Record<
  TTypographyVariant,
  TTypographyVariantProps
>;

export type TTypographyTheme = {
  variants: TTypographyVariants;
};
