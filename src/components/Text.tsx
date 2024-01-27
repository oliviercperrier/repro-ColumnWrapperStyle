import { Text as RNText } from "react-native";
import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";
import {
  TTextVariantProps,
  textVariant,
} from "../budge-ui-styling/src/theme/BudgeTextVariants";
import useParseStyleProps, {
  extractStyleProps,
} from "@/budge-ui-styling/src/utils/useParseStyleProps";

type TTextProps = TTextVariantProps & {
  className?: string;
};

const Text = ({
  className,
  style,
  children,
  ...variantProps
}: PropsWithChildren<TTextProps>) => {
  const extractedStyleProp = useParseStyleProps({
    style,
    styleProps: extractStyleProps(variantProps),
  });

  return (
    <RNText
      style={extractedStyleProp}
      className={twMerge(textVariant(variantProps), className)}
    >
      {children}
    </RNText>
  );
};

export default Text;
