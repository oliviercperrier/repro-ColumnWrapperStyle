import React from "react";
import { TColor, TNumberSize } from "@budgeinc/budge-ui-styling";
import { Box, TBoxProps } from "../Box";
import { Spinner } from "../Loader";

export type TLoadingOverlayProps = Pick<TBoxProps, "left" | "right" | "top" | "bottom" | "radius" | "style" | "sx"> & {
  spinnerSize?: TNumberSize;
  spinnerColor?: TColor;
  overlayColor?: TColor;
};

const LoadingOverlay = ({
  spinnerSize = "md",
  spinnerColor = "primary",
  overlayColor = "white",
  style,
  ...props
}: TLoadingOverlayProps) => (
  <Box pos="absolute" left={0} right={0} bottom={0} top={0} style={[{ overflow: "hidden" }, style]} {...props}>
    <Box opacity={0.65} w="100%" h="100%" pos="absolute" bg={overlayColor} />
    <Box left={0} pos="absolute" w="100%" h="100%" alignItems="center" justifyContent="center">
      <Spinner size={spinnerSize} color={spinnerColor} />
    </Box>
  </Box>
);

export default LoadingOverlay;
