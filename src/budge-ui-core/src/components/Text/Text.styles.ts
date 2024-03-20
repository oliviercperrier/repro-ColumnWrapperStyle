import { TColor, TTheme, TTypographyVariant, useTheme } from "@budgeinc/budge-ui-styling";

export type TTextColor = TColor | "default" | "textSecondary" | "textPrimary" | "textDisabled" | "primary";

export interface TextStyleParams {
  color: TTextColor;
  variant?: TTypographyVariant;
}

interface IGetColorStyles {
  color: TTextColor;
  theme: TTheme;
}

export const getColorStyles = ({ color, theme }: IGetColorStyles) => {
  if (color === "textSecondary") {
    return theme.palette.textColor.secondary;
  }

  if (color === "textPrimary") {
    return theme.palette.textColor.primary;
  }

  if (color === "textDisabled") {
    return theme.palette.textColor.disabled;
  }

  if (color === "default") {
    return theme.palette.textColor.primary;
  }

  if (theme.fn.isThemeColor({ color, checkPrimary: true })) {
    return theme.fn.themeColor({ color });
  }

  return color;
};

export const useStyles = ({ color, variant }: TextStyleParams) => {
  const theme = useTheme();

  const variantStyles = variant ? theme.typography.variants[variant] : {};
  const textColor = getColorStyles({ color, theme });

  return {
    rootStyle: {
      ...variantStyles,
      color: textColor,
    },
  };
};
