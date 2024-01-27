import { VariantProps, tv } from "tailwind-variants";
import { TBaseCustomStyleProps, viewVariant } from "./BudgeBaseVariants";
import {
  TColors,
  TExtendedTextColors,
  extendedTextColors,
} from "./BudgeColors";
import { TextProps } from "react-native";
import { PropsWithChildren } from "react";

/* TEXT */
export const textColorVariants: Record<
  TColors | keyof TExtendedTextColors,
  string
> = {
  primary: "text-primary",
  default: "text-default",
  secondary: "text-secondary",
  disabled: "text-disabled",
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

export const textDecorationColorVariants: Record<TColors, string> = {
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

export const textVariant = tv({
  extend: viewVariant,
  variants: {
    ta: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
      start: "text-start",
      end: "text-end",
    },
    tds: {
      solid: "decoration-solid",
      double: "decoration-double",
      dotted: "decoration-dotted",
      dashed: "decoration-dashed",
    },
    tdl: {
      underline: "underline",
      "line-through": "line-through",
      "no-underline": "no-underline",
    },
    tt: {
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
    },
    fs: {
      italic: "italic",
      "not-italic": "not-italic",
    },
    lh: {
      3: "leading-3", // 12px
      4: "leading-4", // 16px
      5: "leading-5", // 20px
      6: "leading-6", // 24px
      7: "leading-7", // 28px
      8: "leading-8", // 32px
      9: "leading-9", // 36px
      10: "leading-10", // 40px
      none: "leading-none",
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },
    fw: {
      100: "font-thin",
      200: "font-extralight",
      300: "font-light",
      400: "font-normal",
      500: "font-medium",
      600: "font-semibold",
      700: "font-bold",
      800: "font-extrabold",
      900: "font-black",
    },
    lclamp: {
      none: "",
      1: "line-clamp-1",
      2: "line-clamp-2",
      3: "line-clamp-3",
      4: "line-clamp-4",
      5: "line-clamp-5",
      6: "line-clamp-6",
    },
    size: {
      default: "text-sm",
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
  },
  defaultVariants: {
    color: "dark",
    size: "default",
    fw: 400,
  },
});

export type TDefaultTextProps<T> = Partial<TBaseCustomStyleProps> &
  PropsWithChildren<{
    style?: TextProps["style"];
    className?: TextProps["className"];
    textProps?: Omit<TextProps, "style" | "className" | "children">;
  }> &
  T;

export type TTextVariantProps = VariantProps<typeof textVariant>;
