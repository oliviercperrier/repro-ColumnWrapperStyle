import { Text as RNText } from "react-native";
import { tv, type VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";
import { StyleSystemVariants } from "./defaultStyles";
import { baseColors, extendedTextColors } from "./budge-colors";
import { baseVariant } from "./budge-ui-styling/src/theme/BudgeBaseVariants";

type TTextColorVariants =
  | keyof typeof baseColors
  | keyof typeof extendedTextColors;

export const textColorVariants: Record<TTextColorVariants, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  disabled: "text-disabled",
  dark: "text-dark-500",
  gray: "text-gray-500",
  red: "text-red-500",
  green: "text-green-500",
  blue: "text-blue-500",
  orange: "text-orange-500",
  purple: "text-purple-500",
  yellow: "text-yellow-500",
  brown: "text-brown-500",
  water: "text-water-500",
};

const textStyles = tv({
  extend: baseVariant,
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl",
    },
    color: textColorVariants,
    ...StyleSystemVariants,
  },
});

type TTextVariants = VariantProps<typeof textStyles>;

type TTextProps = TTextVariants;

const Text = ({ children, ...variantProps }: PropsWithChildren<TTextProps>) => (
  <RNText className={twMerge(textStyles(variantProps))}>{children}</RNText>
);

export default Text;
