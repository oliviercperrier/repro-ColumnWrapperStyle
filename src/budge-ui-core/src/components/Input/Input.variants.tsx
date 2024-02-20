import { tv } from "tailwind-variants";

export const inputVariant = tv({
  slots: {
    base: "flex-row items-center border-2 px-3 rounded-lg",
    label: "absolute text-dark-6",
    input: "outline-none z-10",
  },
  variants: {
    variant: {
      default: {
        base: "bg-dark-0 border-dark-0",
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
    focused: {
      true: {
        base: "border-primary",
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
    disabled: false,
    editable: true,
  },
});
