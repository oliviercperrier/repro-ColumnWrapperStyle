import { Text as RNText } from "react-native";
import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";
import {
  TDefaultTextProps,
  TTextVariantProps,
  textVariant,
} from "../budge-ui-styling/src/theme/BudgeTextVariants";
import useStyleProps, {
  extractStyleProps,
} from "@/budge-ui-styling/src/utils/useStyleProps";

type TTextProps = TDefaultTextProps<TTextVariantProps>;

const Text = forwardRef<RNText, TTextProps>(
  ({ style, className, textProps, children, ...variantProps }, ref) => {
    const extractedStyleProp = useStyleProps({
      style,
      styleProps: extractStyleProps(variantProps),
    });

    return (
      <RNText
        ref={ref}
        style={extractedStyleProp}
        className={twMerge(textVariant(variantProps), className)}
        children={children}
        {...textProps}
      />
    );
  }
);

export default Text;
