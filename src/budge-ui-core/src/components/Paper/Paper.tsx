import React, { forwardRef, PropsWithChildren } from "react";
import { TSize, useComponentDefaultProps, useExtractSx } from "@budgeinc/budge-ui-styling";
import { StyleSheet, View, ViewStyle } from "react-native";
import { TPaperVariant, useStyles } from "./Paper.styles";
import { Box, TBoxProps } from "../Box";

export type TPaperProps = TBoxProps & {
  bordered?: boolean;
  variant?: TPaperVariant;
  shadow?: TSize;
};

const Paper = forwardRef<View, PropsWithChildren<TPaperProps>>((props, ref) => {
  const {
    children,
    shadow,
    variant = "default",
    bordered = false,
    sx,
    style,
    ...others
  } = useComponentDefaultProps("Paper", {}, props);
  const { rootStyle } = useStyles({ bordered, shadow, variant });

  return (
    <Box ref={ref} sx={[rootStyle, StyleSheet.flatten(style) as ViewStyle, ...useExtractSx(sx)]} {...others}>
      {children}
    </Box>
  );
});

export default Paper;
