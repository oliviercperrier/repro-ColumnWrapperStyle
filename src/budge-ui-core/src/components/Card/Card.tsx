import { View, Text } from "react-native";
import React, { forwardRef } from "react";
import { TCardProps } from "./Card.types";
import { Box } from "../Box";

const Card = forwardRef<View, TCardProps>(({ loading, loadingOverlayProps, ...boxProps }, ref) => {
  return (
    <Box {...boxProps}>
      <Text>Card</Text>
    </Box>
  );
});

export default Card;
