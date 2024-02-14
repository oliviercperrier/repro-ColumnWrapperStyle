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
        base: "bg-gray-0 border-gray-0",
      },
      white: {
        base: "bg-white border-white",
      },
      unstyled: {
        base: "",
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
        base: "bg-disabled border-disabled cursor-not-allowed",
        label: "text-gray-3",
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
    r: "lg"
  },
});
