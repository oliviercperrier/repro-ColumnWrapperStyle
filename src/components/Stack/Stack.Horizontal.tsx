import React, {
  forwardRef,
  memo,
  PropsWithChildren,
  ReactElement,
} from "react";
import { View } from "react-native";
import { Box } from "../Box";
import {
  viewVariant,
} from "@/budge-ui-styling/src/theme/BudgeBaseVariants";
import { twMerge } from "tailwind-merge";
import useStyleProps, {
  extractStyleProps,
} from "@/budge-ui-styling/src/utils/useStyleProps";
import { TStackProps } from "./Stack.types";
import { stackVariant } from "./Stack.Variant";

const StackHorizontal = forwardRef<View, TStackProps>(
  ({ style, className, children, viewProps, ...variantProps }, ref) => {
    const extractedStyleProp = useStyleProps({
      style,
      styleProps: extractStyleProps(variantProps),
    });
    const filteredChildren = (
      React.Children.toArray(children) as ReactElement[]
    ).filter(Boolean);

    return (
      <Box
        ref={ref}
        style={[extractedStyleProp, { flexDirection: "row" }]}
        className={twMerge(stackVariant(variantProps), className)}
        {...viewProps}
      >
        {filteredChildren}
      </Box>
    );
  }
);

export default memo(StackHorizontal);
