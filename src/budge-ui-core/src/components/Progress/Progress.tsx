import { TNumberSize, useComponentDefaultProps, useExtractSx } from "@budgeinc/budge-ui-styling";
import React, { forwardRef, memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Box, TBoxProps } from "../Box";
import { TProgressColor, useStyles } from "./Progress.styles";

export type TProgressProps = TBoxProps & {
  size?: TNumberSize;
  color?: TProgressColor;
  value: number;
  max?: number;
  trailColor?: TProgressColor;
};

const Progress = forwardRef<View, TProgressProps>((props, ref) => {
  const {
    size = "md",
    color = "primary",
    trailColor,
    max = 100,
    style,
    value,
    sx,
    ...rest
  } = useComponentDefaultProps("Progress", {}, props);
  const { rootStyle, progress } = useStyles({ size, color, value, trailColor });

  return (
    <Box ref={ref} sx={[rootStyle, StyleSheet.flatten(style) as ViewStyle, ...useExtractSx(sx)]} {...rest}>
      <Box
        style={[
          progress,
          {
            width: `${(value / max) * 100}%`,
          },
        ]}
      />
    </Box>
  );
});

export default memo(Progress);
