import { viewVariant } from "@/budge-ui-styling/src/theme/BudgeBaseVariants";
import { viewColorVariant } from "@/budge-ui-styling/src/theme/ColorVariant";
import { tv } from "tailwind-variants";

export const buttonVariant = tv({
  extend: viewVariant,
  slots: {
    base: "rounded-md items-center flex-row gap-1",
    text: "",
    icon: "",
  },
  variants: {
    size: {
      xs: {
        base: "px-2 py-1",
        text: "text-sm",
        icon: "w-4 h-4",
      },
      sm: {
        base: "px-3 py-1.5",
        text: "text-sm",
        icon: "w-5 h-5",
      },
      md: {
        base: "px-3.5 py-2",
        text: "text-base",
        icon: "w-5 h-5",
      },
      lg: {
        base: "px-5 py-2.5",
        text: "text-lg",
        icon: "w-6 h-6",
      },
    },
    withIcon: {
      left: "",
      right: "",
    },
    ...viewColorVariant.variants,
  },
  compoundVariants: [
    // With Left Icon
    {
      size: "xs",
      withIcon: "left",
      className: {
        base: "pl-1.5",
      },
    },
    {
      size: "sm",
      withIcon: "left",
      className: {
        base: "pl-2",
      },
    },
    {
      size: "md",
      withIcon: "left",
      className: {
        base: "pl-2.5",
      },
    },
    {
      size: "lg",
      withIcon: "left",
      className: {
        base: "pl-3.5",
      },
    },
    // With Right Icon
    {
      size: "xs",
      withIcon: "right",
      className: {
        base: "pr-1.5",
      },
    },
    {
      size: "sm",
      withIcon: "right",
      className: {
        base: "pr-2",
      },
    },
    {
      size: "md",
      withIcon: "right",
      className: {
        base: "pr-2.5",
      },
    },
    {
      size: "lg",
      withIcon: "right",
      className: {
        base: "pr-3.5",
      },
    },
    ...viewColorVariant.compoundVariants,
  ],
  defaultVariants: {
    variant: "default",
    color: "primary",
    size: "lg",
  },
});
