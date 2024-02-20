import { TBackgroundColors, TBorderColors, TColorShades, TColors, TTextColors } from "./style-system.types";

export const backgroundColorVariants: Record<TBackgroundColors, `bg-${TTextColors}` | `bg-${TTextColors}/${number}`> = {
  primary: "bg-primary",
  dark: "bg-dark",
  gray: "bg-gray",
  red: "bg-red",
  green: "bg-green",
  blue: "bg-blue",
  orange: "bg-orange",
  purple: "bg-purple",
  yellow: "bg-yellow",
  brown: "bg-brown",
  water: "bg-water",
  white: "bg-white",
  black: "bg-black",
  transparent: "bg-transparent",
  info: "bg-info",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
};

export const borderColorVariants: Record<TBorderColors, string> = {
  primary: "border-primary",
  disabled: "border-disabled",
  default: "border-default",
  dark: "border-dark",
  gray: "border-gray",
  red: "border-red",
  green: "border-green",
  blue: "border-blue",
  orange: "border-orange",
  purple: "border-purple",
  yellow: "border-yellow",
  brown: "border-brown",
  water: "border-water",
  white: "border-white",
  black: "border-black",
  transparent: "border-transparent",
  info: "border-info",
  success: "border-success",
  warning: "border-warning",
  error: "border-error",
};

export const textColorVariants: Record<TTextColors, `text-${TTextColors}`> = {
  primary: "text-primary",
  default: "text-default",
  secondary: "text-secondary",
  dark: "text-dark",
  gray: "text-gray",
  red: "text-red",
  green: "text-green",
  blue: "text-blue",
  orange: "text-orange",
  purple: "text-purple",
  yellow: "text-yellow",
  brown: "text-brown",
  water: "text-water",
  white: "text-white",
  black: "text-black",
  transparent: "text-transparent",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
};

export const textDecorationColorVariants: Record<TColors, `decoration-${TColors}`> = {
  primary: "decoration-primary",
  dark: "decoration-dark",
  gray: "decoration-gray",
  red: "decoration-red",
  green: "decoration-green",
  blue: "decoration-blue",
  orange: "decoration-orange",
  purple: "decoration-purple",
  yellow: "decoration-yellow",
  brown: "decoration-brown",
  water: "decoration-water",
  white: "decoration-white",
  black: "decoration-black",
  transparent: "decoration-transparent",
  info: "decoration-info",
  success: "decoration-success",
  warning: "decoration-warning",
  error: "decoration-error",
};
