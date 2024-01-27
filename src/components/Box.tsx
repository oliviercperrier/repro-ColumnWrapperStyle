import { View, Text } from "react-native";
import React, { forwardRef, memo } from "react";
import {
  TViewVariantProps,
  viewVariant,
} from "@/budge-ui-styling/src/theme/BudgeBaseVariants";
import useOtherStyleProps, {
  extractOtherStyleProps,
} from "@/budge-ui-styling/src/utils/useCustomStyleProps";
import { twMerge } from "tailwind-merge";

export type TBoxProps = TViewVariantProps;

const Box = forwardRef<View, TBoxProps>(
  ({ style, className, children, viewProps, ...variantProps }, ref) => {
    const extractedStyleProp = useOtherStyleProps({
      style,
      styleProps: extractOtherStyleProps(variantProps),
    });

    return (
      <View
        ref={ref}
        style={extractedStyleProp}
        className={twMerge(viewVariant(variantProps), className)}
        {...viewProps}
      >
        {children}
      </View>
    );
  }
);

export default memo(Box);
