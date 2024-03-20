import { TColor, TNumberSize, TSizes, TTheme, useTheme } from "@budgeinc/budge-ui-styling";
import { ViewStyle } from "react-native";

const sizes: TSizes = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5,
  xxl: 6,
};

export interface DividerStylesParams {
  size: TNumberSize;
  color?: TColor;
  spacing: TNumberSize;
  orientationMargin: TNumberSize;
}

const getColor = (color: TColor | undefined, theme: TTheme) => {
  if (!color) {
    return theme.palette.colors.gray[2];
  }

  if (theme.fn.isThemeColor({ color, checkPrimary: true })) {
    return theme.fn.themeColor({ color });
  }

  return color;
};

export const useStyles = ({ size, color, spacing, orientationMargin }: DividerStylesParams) => {
  const theme = useTheme();

  const margins = theme.fn.size({ size: spacing, sizes: theme.spacing }) as number;
  const titleMargin = theme.fn.size({ size: orientationMargin, sizes: theme.spacing }) as number;

  return {
    lineStyle: {
      backgroundColor: getColor(color, theme),
      height: theme.fn.size({ size, sizes }),
    } as ViewStyle,
    containerStyle: {
      minHeight: margins * 2,
      justifyContent: "center",
    } as ViewStyle,
    titleMargin
  };
};
