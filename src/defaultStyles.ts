import {
  baseColors,
  extendedBgColors,
  extendedBorderColors,
  extendedTextColors,
} from "./budge-colors";

type TBgColorVariants = keyof typeof baseColors | keyof typeof extendedBgColors;

const bgColorVariants: Record<TBgColorVariants, string> = {
  primary: "bg-primary",
  disabled: "bg-disabled",
  dark: "bg-dark-500",
  gray: "bg-gray-500",
  red: "bg-red-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  orange: "bg-orange-500",
  purple: "bg-purple-500",
  yellow: "bg-yellow-500",
  brown: "bg-brown-500",
  water: "bg-water-500",
};

type TBorderColorVariants =
  | keyof typeof baseColors
  | keyof typeof extendedBorderColors;

const borderColorVariants: Record<TBorderColorVariants, string> = {
  primary: "border-default",
  disabled: "border-disabled",
  dark: "border-dark-500",
  gray: "border-gray-500",
  red: "border-red-500",
  green: "border-green-500",
  blue: "border-blue-500",
  orange: "border-orange-500",
  purple: "border-purple-500",
  yellow: "border-yellow-500",
  brown: "border-brown-500",
  water: "border-water-500",
};

export const StyleSystemVariants = {
  bg: bgColorVariants,
  bc: borderColorVariants,
};
