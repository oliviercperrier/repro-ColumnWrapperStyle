import { viewVariant, viewColorVariant } from "@budgeinc/budge-ui-styling";
import { tv } from "tailwind-variants";

export const tagVariant = tv({
  extend: viewVariant,
  slots: {
    base: "rounded-md items-center max-w-full",
    text: "",
    icon: "",
  },
  variants: {
    size: {
      xs: {
        base: "h-5 px-1.5",
        text: "text-xs",
        icon: "w-3.5 h-3.5",
      },
      sm: {
        base: "h-6 px-2",
        text: "text-sm",
        icon: "w-4 h-4",
      },
      md: {
        base: "h-7 px-2.5",
        text: "text-base",
        icon: "w-5 h-5",
      },
      lg: {
        base: "h-8 px-3",
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
        base: "pl-1",
      },
    },
    {
      size: "sm",
      withIcon: "left",
      className: {
        base: "pl-1.5",
      },
    },
    {
      size: "md",
      withIcon: "left",
      className: {
        base: "pl-2",
      },
    },
    {
      size: "lg",
      withIcon: "left",
      className: {
        base: "pl-2.5",
      },
    },
    // With Right Icon
    {
      size: "xs",
      withIcon: "right",
      className: {
        base: "pr-1",
      },
    },
    {
      size: "sm",
      withIcon: "right",
      className: {
        base: "pr-1.5",
      },
    },
    {
      size: "md",
      withIcon: "right",
      className: {
        base: "pr-2",
      },
    },
    {
      size: "lg",
      withIcon: "right",
      className: {
        base: "pr-2.5",
      },
    },
    ...viewColorVariant.compoundVariants,
  ],
  defaultVariants: {
    variant: "light",
    color: "primary",
    size: "sm",
  },
});
