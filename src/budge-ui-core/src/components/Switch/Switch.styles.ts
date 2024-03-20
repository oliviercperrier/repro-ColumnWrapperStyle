import { TColor, TSize, TSizes, useTheme } from "@budgeinc/budge-ui-styling";
import { ViewStyle } from "react-native";

export type TSwitchStylesParams = {
  color: TColor;
  size: TSize;
  disabled: boolean;
  isChecked: boolean;
};

const switchPadding: TSizes = {
  xs: 3,
  sm: 3,
  md: 4,
  lg: 4,
  xl: 4,
  xxl: 4,
};

const switchHeight: TSizes = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 30,
  xl: 36,
  xxl: 48,
};

const switchWidth: TSizes = {
  xs: 32,
  sm: 38,
  md: 46,
  lg: 56,
  xl: 72,
  xxl: 84,
};

export const useStyles = ({ size, color, disabled, isChecked }: TSwitchStylesParams) => {
  const theme = useTheme();

  const padding = switchPadding[size];
  const switchW = switchWidth[size];
  const handleSizes = switchHeight[size] - padding * 2;
  const translateX = switchW - handleSizes - padding * 2;

  let textColor;
  let backgroundColor = theme.palette.colors.gray[2];
  let handleBg = theme.white;

  if (disabled) {
    textColor = theme.palette.textColor.disabled;
    backgroundColor = theme.palette.background.disabled;
  } else if (isChecked) {
    backgroundColor = theme.fn.themeColor({ color });
  }

  return {
    rootStyle: {
      alignItems: "center",
    } as ViewStyle,
    switchStyle: {
      height: switchHeight[size],
      width: switchW,
      backgroundColor,
      borderRadius: 100,
      padding,
    } as ViewStyle,
    handleStyle: {
      backgroundColor: handleBg,
      height: handleSizes,
      width: handleSizes,
      borderRadius: 100,
    } as any,
    translateX,
    textColor,
  };
};
