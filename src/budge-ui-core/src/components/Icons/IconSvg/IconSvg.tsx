import React, { forwardRef, ForwardRefExoticComponent, MemoExoticComponent, RefAttributes } from "react";
import { TColor, TDimensionSize } from "@budgeinc/budge-ui-styling";
import { Svg, SvgProps } from "react-native-svg";
import { StyleProp, ViewStyle } from "react-native";
import { useIconStyles } from "./IconSvg.styles";

export type TIconSvgProps = Omit<SvgProps, "color" | "fill"> & {
  color?: TColor;
  size?: TDimensionSize;
  style?: StyleProp<ViewStyle>;
};

export type TMemoRefIconProps = MemoExoticComponent<ForwardRefExoticComponent<TIconSvgProps & RefAttributes<Svg>>>;

const IconSvg = forwardRef<Svg, TIconSvgProps>(
  ({ color = "currentColor", size = "md", children, height, width, style, ...rest }, ref) => {
    const { rootStyle, iconColor } = useIconStyles({ color, size, height, width });

    return (
      <Svg ref={ref} style={[rootStyle, style]} fill={iconColor} {...rest}>
        {children}
      </Svg>
    );
  }
);

export default IconSvg;
