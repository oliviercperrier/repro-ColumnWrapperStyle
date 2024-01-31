import React, {
  forwardRef,
  memo,
  PropsWithChildren,
  ReactElement,
} from "react";
import { View } from "react-native";
import { Box } from "../Box";
import { tv, VariantProps } from "tailwind-variants";
import {
  TDefaultViewProps,
  viewVariant,
} from "@/budge-ui-styling/src/theme/BudgeBaseVariants";
import { twMerge } from "tailwind-merge";
import useStyleProps, {
  extractStyleProps,
} from "@/budge-ui-styling/src/utils/useStyleProps";
import { stackVariant } from "./Stack.Variant";
import { TStackProps } from "./Stack.types";

const Stack = forwardRef<View, PropsWithChildren<TStackProps>>(
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
        style={[extractedStyleProp, { flexDirection: "column" }]}
        className={twMerge(stackVariant(variantProps), className)}
        {...viewProps}
      >
        {filteredChildren}
      </Box>
    );
  }
);

export default memo(Stack);
