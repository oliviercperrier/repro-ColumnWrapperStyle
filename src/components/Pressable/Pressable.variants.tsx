import { viewVariant } from "@/budge-ui-styling/src/theme/BudgeBaseVariants";
import { tv } from "tailwind-variants";

export const pressableVariant = tv({
  extend: viewVariant,
  base: "hover:cursor-pointer outline-none",
  variants: {
    disabled: {
      true: "hover:cursor-not-allowed",
    },
    withPressEffect: {
        true: "translate-y-0 active:translate-y-px"
    },
    noCursor: {
        true: "cursor-default hover:cursor-default"
    }
  },
});
