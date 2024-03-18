import { Text as RNText } from "react-native";
import React, { forwardRef } from "react";
import {
  extractTextVariantProps,
  TDefaultTextProps,
  TTextVariantProps,
  textVariant,
} from "@budgeinc/budge-ui-styling";

export type TTextProps = TDefaultTextProps<TTextVariantProps>;

const Text = forwardRef<RNText, TTextProps>(
  ({ className, children, ...others }, ref) => {
    const { styleProps, textVariantProps, rest } =
      extractTextVariantProps(others);

    return (
      <RNText
        ref={ref}
        style={styleProps}
        className={textVariant({ ...textVariantProps, className })}
        children={children}
        {...rest}
      />
    );
  }
);

export default Text;
