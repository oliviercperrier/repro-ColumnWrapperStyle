import { View, Text } from "react-native";
import React, { forwardRef } from "react";
import {
  TDefaultViewProps,
  TViewVariantProps,
  viewVariant,
} from "@/budge-ui-styling/src/theme/BudgeBaseVariants";
import { Svg, SvgProps } from "react-native-svg";
import { VariantProps, tv } from "tailwind-variants";
import { TColors } from "@/budge-ui-styling/src/theme/BudgeColors";
import { twMerge } from "tailwind-merge";
import useParseStyleProps, {
  extractStyleProps,
} from "@/budge-ui-styling/src/utils/useParseStyleProps";
import { textVariant } from "@/budge-ui-styling/src/theme/BudgeTextVariants";

const fillColorVariants: Record<TColors | "none" | "current", string> = {
  current: "fill-current",
  none: "fill-none",
  primary: "fill-primary",
  dark: "fill-dark",
  gray: "fill-gray",
  red: "fill-red",
  green: "fill-green",
  blue: "fill-blue",
  orange: "fill-orange",
  purple: "fill-purple",
  yellow: "fill-yellow",
  brown: "fill-brown",
  water: "fill-water",
  white: "fill-white",
  black: "fill-black",
  transparent: "fill-transparent",
  info: "fill-info",
  success: "fill-success",
  warning: "fill-warning",
  error: "fill-error",
};

export const svgVariant = tv({
  extend: viewVariant,
  variants: {
    color: textVariant.variants.color,
    size: {
      xs: "w-3", // 12px
      sm: "w-4", // 16px
      md: "w-6", // 24px
      lg: "w-8", // 32px
      xl: "w-10", // 40px
      "2xl": "w-12", // 48px
      "3xl": "w-16", // 64px
      "4xl": "w-24", // 96px
    },
  },
  defaultVariants: {
    fill: "current",
    size: "md",
  },
});

export type TSvgIconProps = TDefaultViewProps<VariantProps<typeof svgVariant>> &
  Pick<SvgProps, "viewBox" | "title">;

const SvgIcon = forwardRef<Svg, TSvgIconProps>(
  (
    { title, viewBox, style, className, children, viewProps, ...variantProps },
    ref
  ) => {
    const parsedStyleProps = useParseStyleProps({
      style,
      styleProps: extractStyleProps(variantProps),
    });

    return (
      <Svg
        ref={ref}
        title={title}
        viewBox={viewBox}
        style={parsedStyleProps}
        className={twMerge(svgVariant(variantProps), className)}
        children={children}
        {...viewProps}
      />
    );
  }
);

export default SvgIcon;
