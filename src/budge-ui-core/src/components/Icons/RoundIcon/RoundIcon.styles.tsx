import { TColor, TNumberSize, TSize, TTheme, useTheme } from "@budgeinc/budge-ui-styling";
import { ViewStyle } from "react-native";
import { BUTTON_SIZES } from "../../Button/Button.styles";

interface IRoundIconStyleParams {
  iconColor?: TColor;
  color?: TColor;
  size: TNumberSize;
  opaque: boolean;
  radius?: TNumberSize | "default";
}

interface IGetSizeStyle {
  size: TNumberSize;
}

interface IGetColorStyle {
  iconColor?: TColor;
  color?: TColor;
  theme: TTheme;
  opaque: boolean;
}

const BG_OPACITY_RATIO = 0.7;

const sizes: Record<TSize, { rootSize: number; iconSize: number }> = {
  xs: { rootSize: BUTTON_SIZES.xs, iconSize: 16 },
  sm: { rootSize: BUTTON_SIZES.sm, iconSize: 20 },
  md: { rootSize: BUTTON_SIZES.md, iconSize: 26 },
  lg: { rootSize: BUTTON_SIZES.lg, iconSize: 32 },
  xl: { rootSize: BUTTON_SIZES.xl, iconSize: 36 },
  xxl: { rootSize: BUTTON_SIZES.xxl, iconSize: 44 },
};

export const getSizeStyle = ({ size }: IGetSizeStyle) => {
  let rootSize;
  let iconSize;

  if (typeof size === "number") {
    rootSize = size;
    iconSize = size * BG_OPACITY_RATIO;
  } else {
    rootSize = sizes[size].rootSize;
    iconSize = sizes[size].iconSize;
  }

  return { iconSize, rootSize };
};

const getColorStyle = ({ color, opaque, theme, iconColor }: IGetColorStyle) => {
  const computedColor = theme.fn.themeColor({ color: color || "dark", primaryFallback: false });
  const backgroundColor = theme.fn.alpha(computedColor, 0.1);

  return {
    backgroundColor: color
      ? opaque
        ? computedColor
        : backgroundColor
      : theme.fn.alpha(theme.palette.colors.dark[9], 0.05),
    iColor: iconColor ? theme.fn.themeColor({ color: iconColor, primaryFallback: false }) : computedColor,
  };
};

export const useRoundIconStyles = ({ color, iconColor, size, opaque, radius }: IRoundIconStyleParams) => {
  const theme = useTheme();

  const { iconSize, rootSize } = getSizeStyle({ size });
  const { backgroundColor, iColor } = getColorStyle({ color, iconColor, opaque, theme });

  return {
    rootStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: radius ? theme.fn.radius(radius) : 100,
      width: rootSize,
      height: rootSize,
      backgroundColor,
    } as ViewStyle,
    iconColor: iColor,
    iconSize,
  };
};
