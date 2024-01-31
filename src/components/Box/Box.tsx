import { View, Text } from "react-native";
import React, { forwardRef, memo } from "react";
import {
  TDefaultViewProps,
  TViewVariantProps,
  viewVariant,
} from "@/budge-ui-styling/src/theme/BudgeBaseVariants";
import useStyleProps, {
  extractStyleProps,
} from "@/budge-ui-styling/src/utils/useStyleProps";
import { twMerge } from "tailwind-merge";

export type TBoxProps = TDefaultViewProps<TViewVariantProps>;

const Box = forwardRef<View, TBoxProps>(
  ({ style, className, children, viewProps, ...variantProps }, ref) => {
    const extractedStyleProp = useStyleProps({
      style,
      styleProps: extractStyleProps(variantProps),
    });

    console.log(twMerge(viewVariant(variantProps), className))

    return (
      <View
        ref={ref}
        style={extractedStyleProp}
        className={twMerge(viewVariant(variantProps), className)}
        children={children}
        {...viewProps}
      />
    );
  }
);

export default memo(Box);
