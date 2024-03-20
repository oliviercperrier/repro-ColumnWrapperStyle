import React from "react";
import { Slider as MBSlider, SliderProps as MBSliderProps } from "@miblanchard/react-native-slider";
import { TColor, TSize } from "@budgeinc/budge-ui-styling";
import { Pressable } from "react-native";
import { useStyles } from "./Slider.styles";

export type TSliderProps = Omit<MBSliderProps, "thumbColor" | "minimumTrackTintColor" | "maximumTrackTintColor"> & {
  thumbSize?: TSize;
  trackSize?: TSize;
  thumbColor?: TColor;
  maximumTrackTintColor?: TColor;
  minimumTrackTintColor?: TColor;
};

const Slider = ({
  thumbSize = "md",
  trackSize = "md",
  trackStyle,
  thumbStyle,
  thumbColor,
  minimumTrackTintColor,
  maximumTrackTintColor,
  ...props
}: TSliderProps) => {
  const { sizes, themedMaximumTrackTintColor, themedMinimumTrackTintColor, themedThumbColor } = useStyles({
    thumbSize,
    trackSize,
    thumbColor,
    minimumTrackTintColor,
    maximumTrackTintColor,
  });

  return (
    <Pressable>
      <MBSlider
        thumbTintColor={themedThumbColor}
        minimumTrackTintColor={themedMinimumTrackTintColor}
        maximumTrackTintColor={themedMaximumTrackTintColor}
        trackStyle={{
          height: sizes.trackHeight,
          borderRadius: 100,
          ...trackStyle,
        }}
        thumbStyle={{
          height: sizes.thumbSize,
          width: sizes.thumbSize,
          borderRadius: 100,
          ...thumbStyle,
        }}
        {...props}
      />
    </Pressable>
  );
};

export default Slider;
