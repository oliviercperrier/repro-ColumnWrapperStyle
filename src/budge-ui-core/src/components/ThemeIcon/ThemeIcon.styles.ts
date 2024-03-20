import { TColor, TDimensionSize, TNumberSize, TSize, VariantInput, useTheme } from "@budgeinc/budge-ui-styling";
import { ViewStyle } from "react-native";
import { BUTTON_SIZES, getButtonVariantColors } from "../Button";

export type TThemeIconStyleParams = {
  size: TDimensionSize;
  color: TColor;
  customIconColor?: TColor;
  variant: VariantInput["variant"];
};

export const useThemeIconStyles = ({ size, variant, color, customIconColor }: TThemeIconStyleParams) => {
  const theme = useTheme();
  const themeIconSize = theme.fn.size({ sizes: BUTTON_SIZES, size });

  const variantColors = getButtonVariantColors({
    theme,
    variant,
    color,
  });

  const iconColor = customIconColor
    ? theme.fn.themeColor({ color: customIconColor, primaryFallback: true })
    : variantColors.color;

  return {
    baseStyle: {
      height: themeIconSize,
      width: themeIconSize,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: variantColors.background,
      borderWidth: 1,
      borderColor: variantColors.border,
    } as ViewStyle,
    iconColor,
    iconSize: typeof themeIconSize === "number" ? themeIconSize * 0.7 : themeIconSize,
  };
};
