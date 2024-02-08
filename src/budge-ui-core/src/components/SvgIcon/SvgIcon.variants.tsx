import { TColors, viewVariant } from "@budgeinc/budge-ui-styling";
import { tv } from "tailwind-variants";

export const fillColorVariants: Record<TColors, string> = {
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
    color: fillColorVariants,
    size: {
      xs: "w-3 h-3", // 12px
      sm: "w-4 h-4", // 16px
      md: "w-6 h-6", // 24px
      lg: "w-8 h-8", // 32px
      xl: "w-10 h-10", // 40px
      "2xl": "w-12 h-12", // 48px
      "3xl": "w-16 h-16", // 64px
      "4xl": "w-24 h-24", // 96px
    },
  },
  defaultVariants: {
    fill: "current",
    size: "md",
  },
});
