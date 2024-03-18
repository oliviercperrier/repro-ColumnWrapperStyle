import React, { forwardRef, memo, ReactElement } from "react";
import { View } from "react-native";
import { Box } from "../Box";
import { TStackProps } from "./Stack.types";
import { stackVariant } from "./Stack.variants";

const StackHorizontal = forwardRef<View, TStackProps>(({ className, children, spacing, ...others }, ref) => {
  const filteredChildren = (React.Children.toArray(children) as ReactElement[]).filter(Boolean);

  return (
    <Box
      ref={ref}
      style={{ flexDirection: "row" }}
      className={stackVariant({
        spacing,
        className,
      })}
      {...others}
    >
      {filteredChildren}
    </Box>
  );
});

export default StackHorizontal;
