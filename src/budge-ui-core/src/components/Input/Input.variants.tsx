import { viewVariant } from "@budgeinc/budge-ui-styling";
import { tv } from "tailwind-variants";

export const inputVariant = tv({
  extend: viewVariant,
  slots: {
    base: "flex-row items-center border-2",
    label: "absolute text-secondary",
    input: "outline-none z-10",
  },
  variants: {
    variant: {
      default: {
        base: "bg-dark-1 border-dark-1",
      },
      white: {
        base: "bg-white border-white",
      },
    },
    errored: {
      true: {
        base: "bg-red-1",
        label: "text-red",
        input: "text-red",
      },
    },
    disabled: {
      true: {
        base: "bg-dark-2 border-transparent cursor-not-allowed",
       
      },
    },
    editable: {
      false: "cursor-not-allowed",
    },
  },
  compoundVariants: [
    {
      errored: true,
      className: {
        base: "border-red",
      },
    },
  ],
  defaultVariants: {
    variant: "default",
    px: "md",
    disabled: false,
    editable: true,
    r: "lg",
  },
});
