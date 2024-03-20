import { TColor, TNumberSize, TSizes, TTheme, useTheme } from "@budgeinc/budge-ui-styling";
import { ViewStyle } from "react-native";

export interface IProgressStyleParams {
  size: TNumberSize;
  color: TColor;
  value: number;
  trailColor?: TColor;
}

export type TProgressColor = TColor | "default";

interface IGetColorStyles {
  color: TProgressColor;
  theme: TTheme;
}

const sizes: TSizes = {
  xs: 3,
  sm: 5,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 20,
};

const getColorStyles = ({
  color,
  theme,
}: IGetColorStyles): {
  progressColor: string;
  backgroundColor: string;
} => {
  if (color === "default") {
    return {
      progressColor: theme.palette.colors.purple[9],
      backgroundColor: theme.palette.colors.gray[2],
    };
  }

  const progressColor = theme.fn.themeColor({ color });

  return {
    progressColor,
    backgroundColor: theme.fn.alpha(progressColor, 0.3),
  };
};

export const useStyles = ({ size, color, trailColor }: IProgressStyleParams) => {
  const theme = useTheme();

  const { backgroundColor, progressColor } = getColorStyles({ color, theme });

  return {
    rootStyle: {
      height: theme.fn.size({ size, sizes }),
      flexShrink: 1,
      borderRadius: 50,
      overflow: "hidden",
      backgroundColor: trailColor ? theme.fn.themeColor({ color: trailColor }) : backgroundColor,
    } as ViewStyle,
    progress: {
      flex: 1,
      borderRadius: 50,
      backgroundColor: progressColor,
    } as ViewStyle,
  };
};
