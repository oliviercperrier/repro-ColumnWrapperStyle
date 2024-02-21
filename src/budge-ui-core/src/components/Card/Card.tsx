import { View } from "react-native";
import React, { forwardRef } from "react";
import { TCardProps } from "./Card.types";
import { Box } from "../Box";
import { LoadingOverlay } from "../LoadingOverlay";
import { cardVariant } from "./Card.variants";

const Card = forwardRef<View, TCardProps>(({ loading, loadingOverlayProps, children, className, ...boxProps }, ref) => {
  const variantStyles = cardVariant();

  return (
    <Box ref={ref} className={variantStyles.base({ className })} {...boxProps}>
      {children}
      {loading && <LoadingOverlay {...loadingOverlayProps} />}
    </Box>
  );
});

export default Card;
