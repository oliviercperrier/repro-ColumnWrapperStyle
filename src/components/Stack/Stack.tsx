import React, {
  forwardRef,
  memo,
  PropsWithChildren,
  ReactElement,
} from "react";
import { View } from "react-native";
import { Box } from "../Box";
import { TStackProps } from "./Stack.types";
import { tv } from "tailwind-variants";
import { viewVariant } from "@/budge-ui-styling/src/theme/BudgeBaseVariants";

const stackVariant = tv({
  extend: viewVariant,
  variants: {
    spacing: {},
  },
});

const Stack = forwardRef<View, PropsWithChildren<TStackProps>>((props, ref) => {
  const filteredChildren = (
    React.Children.toArray(children) as ReactElement[]
  ).filter(Boolean);

  return (
    <Box ref={ref} fdirection="column" {...rest} gap={spacing}>
      {filteredChildren}
    </Box>
  );
});

export default memo(Stack);
