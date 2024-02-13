import { TFontWeight, TTypographyVariants, TTypographyTheme } from "./types";

export const typographyRefs = {
  weights: {
    light: "300" as TFontWeight,
    regular: "400" as TFontWeight,
    medium: "500" as TFontWeight,
    bold: "600" as TFontWeight,
  },
};

export const TypographyVariants: TTypographyVariants = {
  titleH5: {
    letterSpacing: 0,
    fontWeight: typographyRefs.weights.regular,
    lineHeight: 20,
    fontSize: 16,
  },
  titleH4: {
    letterSpacing: 0,
    fontWeight: typographyRefs.weights.regular,
    lineHeight: 24,
    fontSize: 18,
  },
  titleH3: {
    letterSpacing: 0,
    fontWeight: typographyRefs.weights.regular,
    lineHeight: 32,
    fontSize: 24,
  },
  titleH2: {
    letterSpacing: 0,
    fontWeight: typographyRefs.weights.regular,
    lineHeight: 40,
    fontSize: 30,
  },
  titleH1: {
    letterSpacing: 0,
    fontWeight: typographyRefs.weights.regular,
    lineHeight: 56,
    fontSize: 48,
  },

  labelLarge: {
    letterSpacing: 0,
    fontWeight: typographyRefs.weights.regular,
    lineHeight: 24,
    fontSize: 16,
  },
  labelMedium: {
    letterSpacing: 0,
    fontWeight: typographyRefs.weights.regular,
    lineHeight: 20,
    fontSize: 14,
  },
  labelSmall: {
    letterSpacing: 0,
    fontWeight: typographyRefs.weights.regular,
    lineHeight: 16,
    fontSize: 12,
  },

  bodyLarge: {
    letterSpacing: 0,
    fontWeight: typographyRefs.weights.regular,
    lineHeight: 28,
    fontSize: 18,
  },
  bodyMedium: {
    fontWeight: typographyRefs.weights.regular,
    letterSpacing: 0,
    lineHeight: 24,
    fontSize: 16,
  },
  bodyDefault: {
    fontWeight: typographyRefs.weights.regular,
    letterSpacing: 0,
    lineHeight: 20,
    fontSize: 14,
  },
  bodySmall: {
    fontWeight: typographyRefs.weights.regular,
    letterSpacing: 0,
    lineHeight: 16,
    fontSize: 12,
  },
};

export const DefaultTypographyTheme: TTypographyTheme = {
    variants: TypographyVariants
  }