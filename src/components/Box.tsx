import { View, Text } from "react-native";
import React, { forwardRef, memo } from "react";
import {
  TDefaultViewProps,
  TViewVariantProps,
  viewVariant,
} from "@/budge-ui-styling/src/theme/BudgeBaseVariants";
import useParseStyleProps, {
  extractStyleProps,
} from "@/budge-ui-styling/src/utils/useParseStyleProps";
import { twMerge } from "tailwind-merge";

export type TBoxProps = TDefaultViewProps<TViewVariantProps>;

const Box = forwardRef<View, TBoxProps>(
  ({ style, className, children, viewProps, ...variantProps }, ref) => {
    const extractedStyleProp = useParseStyleProps({
      style,
      styleProps: extractStyleProps(variantProps),
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
