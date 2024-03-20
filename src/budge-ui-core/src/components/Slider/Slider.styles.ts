import { TColor, TSize, useTheme } from "@budgeinc/budge-ui-styling";

interface ISliderStyleParams {
  thumbSize: TSize;
  trackSize: TSize;
  thumbColor?: TColor;
  minimumTrackTintColor?: TColor;
  maximumTrackTintColor?: TColor;
}

interface ISliderSizes {
  thumbSize: number;
  trackHeight: number;
}

export const sizes: Record<TSize, ISliderSizes> = {
  xs: { thumbSize: 12, trackHeight: 4 },
  sm: { thumbSize: 14, trackHeight: 6 },
  md: { thumbSize: 18, trackHeight: 8 },
  lg: { thumbSize: 24, trackHeight: 12 },
  xl: { thumbSize: 32, trackHeight: 16 },
  xxl: { thumbSize: 36, trackHeight: 20 },
};

export const useStyles = ({
  thumbSize,
  trackSize,
  thumbColor,
  minimumTrackTintColor,
  maximumTrackTintColor,
}: ISliderStyleParams) => {
  const theme = useTheme();

  const themedThumbColor = thumbColor
    ? theme.fn.variant({ variant: "filled", color: thumbColor }).background
    : undefined;
  const themedMinimumTrackTintColor = minimumTrackTintColor
    ? theme.fn.variant({ variant: "filled", color: minimumTrackTintColor }).background
    : undefined;
  const themedMaximumTrackTintColor = maximumTrackTintColor
    ? theme.fn.variant({ variant: "filled", color: maximumTrackTintColor }).background
    : undefined;

  return {
    themedThumbColor,
    themedMinimumTrackTintColor,
    themedMaximumTrackTintColor,
    sizes: {
      thumbSize: sizes[thumbSize].thumbSize,
      trackHeight: sizes[trackSize].trackHeight,
    },
  };
};
