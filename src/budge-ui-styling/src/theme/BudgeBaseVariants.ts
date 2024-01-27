import { ViewProps, ViewStyle } from "react-native";
import { TColors, TExtendedBorderColors } from "./BudgeColors";
import { VariantProps, tv } from "tailwind-variants";
import { PropsWithChildren } from "react";

/* VIEW */
const bgColorVariants: Record<TColors, string> = {
  primary: "bg-primary-500",
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
  white: "bg-white",
  black: "bg-black",
  transparent: "bg-transparent",
  info: "bg-info",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
};

const shadowColorVariants: Record<TColors, string> = {
  primary: "shadow-primary-500",
  dark: "shadow-dark-500",
  gray: "shadow-gray-500",
  red: "shadow-red-500",
  green: "shadow-green-500",
  blue: "shadow-blue-500",
  orange: "shadow-orange-500",
  purple: "shadow-purple-500",
  yellow: "shadow-yellow-500",
  brown: "shadow-brown-500",
  water: "shadow-water-500",
  white: "shadow-white",
  black: "shadow-black",
  transparent: "shadow-transparent",
  info: "shadow-info",
  success: "shadow-success",
  warning: "shadow-warning",
  error: "shadow-error",
};

const borderColorVariants: Record<
  TColors | keyof TExtendedBorderColors,
  string
> = {
  primary: "border-primary-500",
  disabled: "border-disabled",
  default: "border-default",
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
  white: "border-white",
  black: "border-black",
  transparent: "border-transparent",
  info: "border-info",
  success: "border-success",
  warning: "border-warning",
  error: "border-error",
};

export const viewVariant = tv({
  variants: {
    bg: bgColorVariants,
    f: {
      1: "flex-1",
      none: "flex-none",
      initial: "flex-initial",
      auto: "flex-auto",
    },
    fgrow: {
      1: "grow",
      0: "grow-0",
    },
    fshrink: {
      1: "shrink",
      0: "shrink-0",
    },
    fwrap: {
      wrap: "flex-wrap",
      reverse: "flex-reverse",
      nowrap: "flex-nowrap",
    },
    fdir: {
      row: "flex-row",
      "row-reverse": "flex-row-reverse",
      col: "flex-col",
      "col-reverse": "flex-col-reverse",
    },
    justifyContent: {
      normal: "justify-normal",
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
      stretch: "justify-stretch",
    },
    alignContent: {
      normal: "content-normal",
      start: "content-start",
      end: "content-end",
      center: "content-center",
      between: "content-between",
      around: "content-around",
      evenly: "content-evenly",
      baseline: "content-baseline",
      stretch: "content-stretch",
    },
    alignItems: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    alignSelf: {
      auto: "self-auto",
      start: "self-start",
      end: "self-end",
      center: "self-center",
      baseline: "self-baseline",
      stretch: "self-stretch",
    },
    gap: {
      0: "gap-0",
      px: "gap-px", // 1px
      xs: "gap-1", // 4px
      sm: "gap-2", // 8px
      md: "gap-3", // 12px
      lg: "gap-4", // 16px
      xl: "gap-6", // 24px
      "2xl": "gap-8", // 32px
      "3xl": "gap-10", // 40px
      "4xl": "gap-12", // 48px
    },
    gapx: {
      0: "gap-x-0",
      px: "gap-x-px", // 1px
      xs: "gap-x-1", // 4px
      sm: "gap-x-2", // 8px
      md: "gap-x-3", // 12px
      lg: "gap-x-4", // 16px
      xl: "gap-x-6", // 24px
      "2xl": "gap-x-8", // 32px
      "3xl": "gap-x-10", // 40px
      "4xl": "gap-x-12", // 48px
    },
    gapy: {
      0: "gap-y-0",
      px: "gap-y-px", // 1px
      xs: "gap-y-1", // 4px
      sm: "gap-y-2", // 8px
      md: "gap-y-3", // 12px
      lg: "gap-y-4", // 16px
      xl: "gap-y-6", // 24px
      "2xl": "gap-y-8", // 32px
      "3xl": "gap-y-10", // 40px
      "4xl": "gap-y-12", // 48px
    },
    m: {
      0: "m-0",
      px: "m-px", // 1px
      xs: "m-1", // 4px
      sm: "m-2", // 8px
      md: "m-3", // 12px
      lg: "m-4", // 16px
      xl: "m-6", // 24px
      "2xl": "m-8", // 32px
      "3xl": "m-10", // 40px
      "4xl": "m-12", // 48px
    },
    mt: {
      0: "mt-0",
      px: "mt-px", // 1px
      xs: "mt-1", // 4px
      sm: "mt-2", // 8px
      md: "mt-3", // 12px
      lg: "mt-4", // 16px
      xl: "mt-6", // 24px
      "2xl": "mt-8", // 32px
      "3xl": "mt-10", // 40px
      "4xl": "mt-12", // 48px
      auto: "mt-auto",
    },
    mb: {
      0: "mb-0",
      px: "mb-px", // 1px
      xs: "mb-1", // 4px
      sm: "mb-2", // 8px
      md: "mb-3", // 12px
      lg: "mb-4", // 16px
      xl: "mb-6", // 24px
      "2xl": "mb-8", // 32px
      "3xl": "mb-10", // 40px
      "4xl": "mb-12", // 48px
      auto: "mb-auto",
    },
    ml: {
      0: "ml-0",
      px: "ml-px", // 1px
      xs: "ml-1", // 4px
      sm: "ml-2", // 8px
      md: "ml-3", // 12px
      lg: "ml-4", // 16px
      xl: "ml-6", // 24px
      "2xl": "ml-8", // 32px
      "3xl": "ml-10", // 40px
      "4xl": "ml-12", // 48px
      auto: "ml-auto",
    },
    mr: {
      0: "mr-0",
      px: "mr-px", // 1px
      xs: "mr-1", // 4px
      sm: "mr-2", // 8px
      md: "mr-3", // 12px
      lg: "mr-4", // 16px
      xl: "mr-6", // 24px
      "2xl": "mr-8", // 32px
      "3xl": "mr-10", // 40px
      "4xl": "mr-12", // 48px
      auto: "mr-auto",
    },
    mx: {
      0: "mx-0",
      px: "mx-px", // 1px
      xs: "mx-1", // 4px
      sm: "mx-2", // 8px
      md: "mx-3", // 12px
      lg: "mx-4", // 16px
      xl: "mx-6", // 24px
      "2xl": "mx-8", // 32px
      "3xl": "mx-10", // 40px
      "4xl": "mx-12", // 48px
      auto: "mx-auto",
    },
    my: {
      0: "my-0",
      px: "my-px", // 1px
      xs: "my-1", // 4px
      sm: "my-2", // 8px
      md: "my-3", // 12px
      lg: "my-4", // 16px
      xl: "my-6", // 24px
      "2xl": "my-8", // 32px
      "3xl": "my-10", // 40px
      "4xl": "my-12", // 48px
      auto: "my-auto",
    },
    p: {
      0: "p-0",
      px: "p-px", // 1px
      xs: "p-1", // 4px
      sm: "p-2", // 8px
      md: "p-3", // 12px
      lg: "p-4", // 16px
      xl: "p-6", // 24px
      "2xl": "p-8", // 32px
      "3xl": "p-10", // 40px
      "4xl": "p-12", // 48px
    },
    pt: {
      0: "pt-0",
      px: "pt-px", // 1px
      xs: "pt-1", // 4px
      sm: "pt-2", // 8px
      md: "pt-3", // 12px
      lg: "pt-4", // 16px
      xl: "pt-6", // 24px
      "2xl": "pt-8", // 32px
      "3xl": "pt-10", // 40px
      "4xl": "pt-12", // 48px
    },
    pb: {
      0: "pb-0",
      px: "pb-px", // 1px
      xs: "pb-1", // 4px
      sm: "pb-2", // 8px
      md: "pb-3", // 12px
      lg: "pb-4", // 16px
      xl: "pb-6", // 24px
      "2xl": "pb-8", // 32px
      "3xl": "pb-10", // 40px
      "4xl": "pb-12", // 48px
    },
    pl: {
      0: "pl-0",
      px: "pl-px", // 1px
      xs: "pl-1", // 4px
      sm: "pl-2", // 8px
      md: "pl-3", // 12px
      lg: "pl-4", // 16px
      xl: "pl-6", // 24px
      "2xl": "pl-8", // 32px
      "3xl": "pl-10", // 40px
      "4xl": "pl-12", // 48px
    },
    pr: {
      0: "pr-0",
      px: "pr-px", // 1px
      xs: "pr-1", // 4px
      sm: "pr-2", // 8px
      md: "pr-3", // 12px
      lg: "pr-4", // 16px
      xl: "pr-6", // 24px
      "2xl": "pr-8", // 32px
      "3xl": "pr-10", // 40px
      "4xl": "pr-12", // 48px
    },
    px: {
      0: "px-0",
      px: "px-px", // 1px
      xs: "px-1", // 4px
      sm: "px-2", // 8px
      md: "px-3", // 12px
      lg: "px-4", // 16px
      xl: "px-6", // 24px
      "2xl": "px-8", // 32px
      "3xl": "px-10", // 40px
      "4xl": "px-12", // 48px
    },
    py: {
      0: "py-0",
      px: "py-px", // 1px
      xs: "py-1", // 4px
      sm: "py-2", // 8px
      md: "py-3", // 12px
      lg: "py-4", // 16px
      xl: "py-6", // 24px
      "2xl": "py-8", // 32px
      "3xl": "py-10", // 40px
      "4xl": "py-12", // 48px
    },
    opacity: {
      0: "opacity-0",
      10: "opacity-10",
      20: "opacity-20",
      30: "opacity-30",
      40: "opacity-40",
      50: "opacity-50",
      60: "opacity-60",
      70: "opacity-70",
      80: "opacity-80",
      90: "opacity-90",
      100: "opacity-100",
    },
    position: {
      absolute: "absolute",
      relative: "relative",
      // @web only
      fixed: "fixed",
      // @web only
      sticky: "sticky",
    },
    top: {
      0: "top-0",
      px: "top-px", // 1px
      xs: "top-1", // 4px
      sm: "top-2", // 8px
      md: "top-3", // 12px
      lg: "top-4", // 16px
      xl: "top-6", // 24px
      "2xl": "top-8", // 32px
      "3xl": "top-10", // 40px
      "4xl": "top-12", // 48px
    },
    bottom: {
      0: "bottom-0",
      px: "bottom-px", // 1px
      xs: "bottom-1", // 4px
      sm: "bottom-2", // 8px
      md: "bottom-3", // 12px
      lg: "bottom-4", // 16px
      xl: "bottom-6", // 24px
      "2xl": "bottom-8", // 32px
      "3xl": "bottom-10", // 40px
      "4xl": "bottom-12", // 48px
    },
    left: {
      0: "left-0",
      px: "left-px", // 1px
      xs: "left-1", // 4px
      sm: "left-2", // 8px
      md: "left-3", // 12px
      lg: "left-4", // 16px
      xl: "left-6", // 24px
      "2xl": "left-8", // 32px
      "3xl": "left-10", // 40px
      "4xl": "left-12", // 48px
    },
    right: {
      0: "right-0",
      px: "right-px", // 1px
      xs: "right-1", // 4px
      sm: "right-2", // 8px
      md: "right-3", // 12px
      lg: "right-4", // 16px
      xl: "right-6", // 24px
      "2xl": "right-8", // 32px
      "3xl": "right-10", // 40px
      "4xl": "right-12", // 48px
    },
    display: {
      hidden: "hidden",
      flex: "flex",
    },
    overflow: {
      visible: "overflow-visible",
      hidden: "overflow-hidden",
    },
    radius: {
      0: "rounded-none",
      sm: "rounded-sm",
      md: "rounded",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      "4xl": "rounded-4xl",
      full: "rounded-full",
    },
    bw: {
      0: "border-0",
      xs: "border", // 1px
      sm: "border-2", // 2px
      md: "border-[3px]", // 3px
      lg: "border-4", // 4px
      xl: "border-[6px]", // 6px
      "2xl": "border-8", // 8px
      "3xl": "border-[10px]", // 10px
    },
    blw: {
      0: "border-l-0",
      xs: "border-l", // 1px
      sm: "border-l-2", // 2px
      md: "border-l-[3px]", // 3px
      lg: "border-l-4", // 4px
      xl: "border-l-[6px]", // 6px
      "2xl": "border-l-8", // 8px
      "3xl": "border-l-[10px]", // 10px
    },
    brw: {
      0: "border-r-0",
      xs: "border-r", // 1px
      sm: "border-r-2", // 2px
      md: "border-r-[3px]", // 3px
      lg: "border-r-4", // 4px
      xl: "border-r-[6px]", // 6px
      "2xl": "border-r-8", // 8px
      "3xl": "border-r-[10px]", // 10px
    },
    btw: {
      0: "border-t-0",
      xs: "border-t", // 1px
      sm: "border-t-2", // 2px
      md: "border-t-[3px]", // 3px
      lg: "border-t-4", // 4px
      xl: "border-t-[6px]", // 6px
      "2xl": "border-t-8", // 8px
      "3xl": "border-t-[10px]", // 10px
    },
    bbw: {
      0: "border-b-0",
      xs: "border-b", // 1px
      sm: "border-b-2", // 2px
      md: "border-b-[3px]", // 3px
      lg: "border-b-4", // 4px
      xl: "border-b-[6px]", // 6px
      "2xl": "border-b-8", // 8px
      "3xl": "border-b-[10px]", // 10px
    },
    bc: borderColorVariants,
    shadow: {
      xs: "shadow-sm",
      sm: "shadow",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
      "2xl": "shadow-2xl",
      none: "shadow-none",
    },
    shadowc: shadowColorVariants,
  },
});

export type TBaseCustomStyleProps = {
  w: ViewStyle["width"];
  miw: ViewStyle["minWidth"];
  maw: ViewStyle["maxWidth"];
  h: ViewStyle["height"];
  mih: ViewStyle["minHeight"];
  mah: ViewStyle["maxHeight"];
};

export type TViewVariantProps = VariantProps<typeof viewVariant> &
  Partial<TBaseCustomStyleProps> &
  PropsWithChildren<{
    style?: ViewProps["style"];
    className?: ViewProps["className"];
    viewProps?: Omit<ViewProps, "style" | "className" | "children">;
  }>;
