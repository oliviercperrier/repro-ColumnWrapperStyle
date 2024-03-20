import { extractRadiusStyles, useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import React, { forwardRef, memo } from "react";
import { View } from "react-native";
import { Box } from "../Box";
import Paper from "../Paper/Paper";
import { CardProvider } from "./Card.context";
import { TCardProps } from "./Card.types";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";

const Card = forwardRef<View, TCardProps>((props, ref) => {
  const {
    p = "xl",
    radius = "md",
    children,
    loading,
    contentProps,
    loadingOverlayProps,
    ...others
  } = useComponentDefaultProps("Card", {}, props);
  const borderRadiusStyles = extractRadiusStyles({ style: others.style, sx: others.sx });

  return (
    <Paper ref={ref} radius={radius} p={p} {...others}>
      <CardProvider value={{ padding: p }}>
        <Box {...contentProps}>{children}</Box>
      </CardProvider>
      {loading && <LoadingOverlay {...loadingOverlayProps} radius={radius} style={borderRadiusStyles} />}
    </Paper>
  );
});

export default memo(Card);
