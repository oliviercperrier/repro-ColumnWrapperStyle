import { viewVariant } from "@budgeinc/budge-ui-styling";
import { tv } from "tailwind-variants";

export const stackVariant = tv({
  variants: {
    spacing: viewVariant.variants.gap,
  },
  defaultVariants: {
    spacing: "sm",
  },
});
