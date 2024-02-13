import { tv } from "tailwind-variants";

export const modalBaseVariant = tv({
  slots: {
    scrollView: "bg-dark/40",
    scrollViewContent: "min-h-full",
    wrapper: "flex-row items-center justify-center p-4 min-h-full",
    modal: "bg-white rounded-lg w-full overflow-hidden",
  },
  variants: {},
});
