import { buttonColorVariant } from "@budgeinc/budge-ui-styling";
import { tv } from "tailwind-variants";

export const alertVariant = tv({
  slots: {
    base: "py-3 px-4 rounded-lg",
    background: "",
    color: "",
  },
  variants: {
    ...buttonColorVariant.variants,
  },
  compoundVariants: [...buttonColorVariant.compoundVariants],
  defaultVariants: {
    variant: "light",
    color: "primary",
    disabled: false
  },
});
