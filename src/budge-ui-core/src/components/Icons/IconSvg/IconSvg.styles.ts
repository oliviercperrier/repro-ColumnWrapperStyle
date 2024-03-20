import { TColor, TDimensionSize, TSizes, useTheme } from "@budgeinc/budge-ui-styling";
import { ViewStyle } from "react-native";

interface IIconSvgStyleParams {
  color: TColor;
  size: TDimensionSize;
  height?: number | string;
  width?: number | string;
}

export const sizes: TSizes = {
  xs: 12,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
  xxl: 48,
};

export const useIconStyles = ({ color, size, height, width }: IIconSvgStyleParams) => {
  const theme = useTheme();

  const computedSize = theme.fn.size({ size, sizes });

  return {
    rootStyle: {
      width: width || computedSize,
      height: height || computedSize,
    } as ViewStyle,
    iconColor: theme.fn.themeColor({
      color,
      primaryFallback: false,
    }),
  };
};
