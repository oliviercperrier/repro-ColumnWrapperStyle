import React, { forwardRef, memo, ReactElement } from "react";
import { View } from "react-native";
import { Box } from "../Box";
import { TStackProps } from "./Stack.types";
import { extractViewVariantProps } from "@/budge-ui-styling/src/utils/extractVariantProps";
import { stackVariant } from "./Stack.variants";

const StackHorizontal = forwardRef<View, TStackProps>(
  ({ className, children, spacing, ...others }, ref) => {
    const { styleProps, viewVariantProps, rest } =
      extractViewVariantProps(others);
    const filteredChildren = (
      React.Children.toArray(children) as ReactElement[]
    ).filter(Boolean);

    return (
      <Box
        ref={ref}
        style={[styleProps, { flexDirection: "row" }]}
        className={stackVariant({
          ...viewVariantProps,
          spacing,
          className,
        })}
        {...rest}
      >
        {filteredChildren}
      </Box>
    );
  }
);

export default memo(StackHorizontal);
