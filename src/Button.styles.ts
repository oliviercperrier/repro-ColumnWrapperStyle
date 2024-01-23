import { tv } from "tailwind-variants";
import Color from "color";

export const getFilledVariantMeta = (color: string) => {
  if (color.startsWith("#") || color.includes("-")) {
    let colorStyle = color.startsWith("#") ? `[${color}]-700` : color;

    return {
      variant: "filled",
      color: "primary",
      className: {
        root: `bg-${colorStyle} border border-${colorStyle} hover:bg-${colorStyle} hover:border-${colorStyle}`,
        text: "text-white",
      },
    };
  }

  return {
    variant: "filled",
    color: "primary",
    className: {
      root: "bg-blue-700 border border-blue-700 hover:bg-blue-700 hover:border-blue-700",
      text: "text-white",
    },
  };
};

const button = tv({
  slots: {
    root: "translate-y-0 active:translate-y-px rounded-md",
    text: "",
  },
  variants: {
    size: {
      xs: {
        root: "px-2 py-1",
        text: "text-xs",
      },
      sm: {
        root: "px-3 py-2",
        text: "text-sm",
      },
      md: {
        root: "px-4 py-3",
        text: "text-base",
      },
    },
    variant: {
      filled: "",
      outlined: "",
      subtle: "",
    },
    color: {
      primary: "",
      secondary: "",
      success: "",
    },
  },
  compoundVariants: [
    {
      variant: "filled",
      color: "primary",
      className: {
        root: "bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600",
        text: "text-white",
      },
    },
    {
      variant: "outlined",
      color: "primary",
      className: {
        root: "bg-white border border-[#5314c7] active:bg-[#d6a2131a]",
        text: "text-blue-500",
      },
    },
    {
      variant: "subtle",
      color: "primary",
      className: {
        root: "bg-white border border-white hover:bg-blue-500/15",
        text: "text-blue-500",
      },
    },
  ],
});
