import { viewVariant } from "@/budge-ui-styling/src/theme/BudgeBaseVariants";
import { tv } from "tailwind-variants";

export const stackVariant = tv({
  extend: viewVariant,
  variants: {
    spacing: viewVariant.variants.gap,
  },
  defaultVariants: {
    spacing: "sm",
  },
});
