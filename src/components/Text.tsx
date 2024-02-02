import { Text as RNText } from "react-native";
import { forwardRef } from "react";
import {
  TDefaultTextProps,
  TTextVariantProps,
  textVariant,
} from "../budge-ui-styling/src/theme/BudgeTextVariants";
import { extractTextVariantProps } from "@/budge-ui-styling/src/utils/extractVariantProps";

type TTextProps = TDefaultTextProps<TTextVariantProps>;

const Text = forwardRef<RNText, TTextProps>(
  ({ className, children, ...others }, ref) => {
    const { styleProps, textVariantProps, rest } = extractTextVariantProps(others);

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
