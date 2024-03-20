import { View,StyleSheet } from "react-native";
import React, { forwardRef } from "react";
import { useThemeIconStyles } from "./ThemeIcon.styles";
import { Box, TBoxProps } from "../Box";
import { TColor, TDimensionSize, TNumberSize, VariantInput, useExtractSx } from "@budgeinc/budge-ui-styling";
import { TMemoRefIconProps } from "../Icons";

export type TThemeIconProps = TBoxProps & {
  icon: TMemoRefIconProps;
  size?: TDimensionSize;
  color?: TColor;
  variant?: Exclude<VariantInput["variant"], "subtle" | "transparent">;
  iconColor?: TColor;
  iconOpacity?: number;
};

const ThemeIcon = forwardRef<View, TThemeIconProps>(
  (
    {
      icon: Icon,
      size = "md",
      color = "dark",
      iconColor: customIconColor,
      iconOpacity,
      variant = "default",
      radius = "sm",
      style,
      sx,
      ...rest
    }: TThemeIconProps,
    ref
  ) => {
    const { baseStyle, iconColor, iconSize } = useThemeIconStyles({
      color,
      variant,
      size,
      customIconColor,
    });

    return (
      <Box ref={ref} sx={[baseStyle, StyleSheet.flatten(style), ...useExtractSx(sx)]} radius={radius} {...rest}>
        <Icon size={iconSize} color={iconColor} opacity={iconOpacity} />
      </Box>
    );
  }
);

export default ThemeIcon;
