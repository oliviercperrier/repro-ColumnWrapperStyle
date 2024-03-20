import React, { forwardRef, PropsWithChildren } from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { extractSystemStyles, DefaultProps, useSx, TNumberSize, useTheme } from "@budgeinc/budge-ui-styling";
import { motify } from "moti";

export type TBoxProps = DefaultProps<ViewStyle> &
  ViewProps & {
    shouldRender?: boolean;
    radius?: TNumberSize | "default";
  };

const Box = forwardRef<View, PropsWithChildren<TBoxProps>>(
  ({ style, sx, shouldRender = true, radius, ...others }, ref) => {
    if (!shouldRender) return null;

    const theme = useTheme();
    const { systemStyles, rest } = extractSystemStyles(others);

    return (
      <View
        ref={ref}
        style={[
          {
            borderRadius: radius ? theme.fn.radius(radius === "default" ? theme.defaultRadius : radius) : undefined,
          },
          ...useSx(sx || [], systemStyles),
          style,
        ]}
        {...rest}
      />
    );
  }
);

export const MotifiedBox = motify(Box)();

export default Box;
