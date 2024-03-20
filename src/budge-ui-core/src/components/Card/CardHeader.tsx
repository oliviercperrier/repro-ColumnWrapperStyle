import React, { forwardRef, memo } from "react";
import { View } from "react-native";
import { Divider } from "../Divider";
import { Box } from "../Box";
import { Text } from "../Text";
import { useCard } from "./Card.context";
import { TCardHeaderProps } from "./Card.types";

const CardHeader = forwardRef<View, TCardHeaderProps>(({ title, extra, widthDivider = true }, ref) => {
  const { padding } = useCard();

  return (
    <Box ref={ref} fdirection="column">
      <Box fdirection="row" alignItems="center" justifyContent="space-between">
        <Text f={1} numberOfLines={2}>
          {title}
        </Text>
        {extra}
      </Box>
      {widthDivider && <Divider spacing={padding} />}
    </Box>
  );
});

export default memo(CardHeader);
