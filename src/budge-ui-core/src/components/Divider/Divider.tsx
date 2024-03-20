import { DefaultProps, TColor, TNumberSize, useComponentDefaultProps, useExtractSx } from "@budgeinc/budge-ui-styling";
import React, { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Box } from "../Box";
import { Stack } from "../Stack";
import { useStyles } from "./Divider.styles";

export interface TDividerProps extends Omit<DefaultProps<ViewStyle>, "spacing" | "alignItems"> {
  size?: TNumberSize;
  color?: TColor;
  spacing?: TNumberSize;
  style?: StyleProp<ViewStyle>;
  orientation?: "left" | "center" | "right";
  orientationMargin?: TNumberSize;
}

const Divider = (props: PropsWithChildren<TDividerProps>) => {
  const {
    size = "xs",
    spacing = "lg",
    color,
    style,
    children,
    orientation,
    orientationMargin = "xl",
    sx,
    ...rest
  } = useComponentDefaultProps("Divider", {}, props);
  const { lineStyle, containerStyle, titleMargin } = useStyles({ size, color, spacing, orientationMargin });
  const isLeft = orientation === "left";
  const isRight = orientation === "right";
  const isCenter = orientation === "center";

  const containerSx = [containerStyle, StyleSheet.flatten(style) as ViewStyle, ...useExtractSx(sx)];

  if (children) {
    return (
      <Stack.Horizontal spacing="sm" alignItems="center" sx={containerSx} {...rest}>
        <Box
          shouldRender={isRight || isCenter || !orientation || (titleMargin > 0 && isLeft)}
          f={isLeft ? undefined : 1}
          w={isLeft ? titleMargin : undefined}
        >
          <Box sx={lineStyle} />
        </Box>
        {children}
        <Box
          shouldRender={isLeft || isCenter || !orientation || (titleMargin > 0 && isRight)}
          f={isRight ? undefined : 1}
          w={isRight ? titleMargin : undefined}
        >
          <Box sx={lineStyle} />
        </Box>
      </Stack.Horizontal>
    );
  }
  return (
    <Box sx={containerSx} {...rest}>
      <Box sx={lineStyle} />
    </Box>
  );
};

export default Divider;
