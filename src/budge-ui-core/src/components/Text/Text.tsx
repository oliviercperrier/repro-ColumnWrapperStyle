import { Text as RNText } from "react-native";
import React, { forwardRef } from "react";
import {
  extractTextVariantProps,
  TDefaultTextProps,
  TTextVariantProps,
  textVariant,
} from "@budgeinc/budge-ui-styling";
import Animated from "react-native-reanimated";

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

export const AnimatedText = Animated.createAnimatedComponent(Text)

export default Text;
