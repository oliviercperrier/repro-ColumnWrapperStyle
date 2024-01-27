import { Text as RNText } from "react-native";
import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";
import {
  TTextVariantProps,
  textVariant,
} from "../budge-ui-styling/src/theme/BudgeTextVariants";
import useOtherStyleProps, {
  extractOtherStyleProps,
} from "@/budge-ui-styling/src/utils/useCustomStyleProps";

type TTextProps = TTextVariantProps & {
  className?: string;
};

const Text = ({
  className,
  style,
  children,
  ...variantProps
}: PropsWithChildren<TTextProps>) => {
  const extractedStyleProp = useOtherStyleProps({
    style,
    styleProps: extractOtherStyleProps(variantProps),
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
