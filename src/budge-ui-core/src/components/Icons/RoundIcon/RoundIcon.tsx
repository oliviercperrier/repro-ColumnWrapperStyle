import { TColor, TNumberSize, useExtractSx } from "@budgeinc/budge-ui-styling";
import React, { forwardRef, memo } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Box, TBoxProps } from "../../Box";
import { TMemoRefIconProps } from "../IconSvg/IconSvg";
import { useRoundIconStyles } from "./RoundIcon.styles";

export type TRoundIconProps = TBoxProps & {
  size?: TNumberSize;
  color?: TColor;
  opaque?: boolean;
  icon: TMemoRefIconProps;
  iconColor?: TColor;
  iconOpacity?: number;
  style?: StyleProp<ViewStyle>;
};

export type TMemoRoundIconProps = React.ForwardRefExoticComponent<
  Omit<TRoundIconProps, "icon" | "type"> & React.RefAttributes<View>
>;

const RoundIcon = forwardRef<View, TRoundIconProps>(
  ({ icon, color, iconColor, iconOpacity, size = "sm", opaque = false, style, radius, sx, ...rest }, ref) => {
    const Icon = icon;
    const { rootStyle, iconSize, iconColor: iColor } = useRoundIconStyles({ color, iconColor, size, opaque, radius });

    return (
      <Box ref={ref} sx={[rootStyle, StyleSheet.flatten(style) as ViewStyle, ...useExtractSx(sx)]} {...rest}>
        <Icon size={iconSize} color={iColor} opacity={iconOpacity} />
      </Box>
    );
  }
);

export default memo(RoundIcon);
