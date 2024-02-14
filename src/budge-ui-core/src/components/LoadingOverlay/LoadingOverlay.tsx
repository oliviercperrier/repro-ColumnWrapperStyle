import React from "react";
import { TColor, TColors, TNumberSize } from "@budgeinc/budge-ui-styling";
import { Box, TBoxProps } from "../Box";
import { StyleSheet } from "react-native";
import { Spinner, TSpinnerProps } from "../Spinner";

export type TLoadingOverlayProps = Pick<TBoxProps, "left" | "right" | "top" | "bottom" | "r" | "style"> & {
  spinnerSize?: TSpinnerProps["size"];
  spinnerColor?: TSpinnerProps["color"];
  overlayColor?: TColors;
  spinnerClassName?: string;
};

const LoadingOverlay = ({
  spinnerSize = "md",
  spinnerColor = "primary",
  overlayColor = "white",
  spinnerClassName,
  style,
  ...props
}: TLoadingOverlayProps) => (
  <Box style={[{ overflow: "hidden" }, StyleSheet.absoluteFill, style]} {...props}>
    <Box opacity={10} w="100%" h="100%" position="absolute" bg={overlayColor} />
    <Box left={0} position="absolute" w="100%" h="100%" alignItems="center" justifyContent="center">
      <Spinner size={spinnerSize} color={spinnerColor} className={spinnerClassName} />
    </Box>
  </Box>
);

export default LoadingOverlay;
