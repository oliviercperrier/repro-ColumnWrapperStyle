import { viewVariant } from "@budgeinc/budge-ui-styling";
import { tv } from "tailwind-variants";

export const switchVariant = tv({
  slots: {
    base: "bg-dark-2 rounded-full",
    thumb: "bg-white rounded-full h-2 w-2 ease-in-out duration-300",
  },
  variants: {
    size: {
      xs: {
        base: "p-[3px] h-[16px] w-[32px]",
        thumb: "h-[10px] w-[10px]",
      },
      sm: {
        base: "p-[3px] h-[20px] w-[40px]",
        thumb: "h-[14px] w-[14px]",
      },
      md: {
        base: "p-[4px] h-[24px] w-[48px]",
        thumb: "h-[16px] w-[16px]",
      },
      lg: {
        base: "p-[4px] h-[30px] w-[60px]",
        thumb: "h-[22px] w-[22px]",
      },
      xl: {
        base: "p-[4px] h-[36px] w-[72px]",
        thumb: "h-[28px] w-[28px]",
      },
      "2xl": {
        base: "p-[4px] h-[48px] w-[96px]",
        thumb: "h-[40px] w-[40px]",
      },
    },
    checked: {
      true: {
        base: "bg-primary",
      },
      false: {
        thumb: "translate-x-[0px]",
      },
    },
    disabled: {
      true: {
        thumb: "bg-dark-1",
      },
    },
  },
  compoundVariants: [
    {
      size: "xs",
      checked: true,
      className: {
        thumb: "translate-x-[16px]",
      },
    },
    {
      size: "sm",
      checked: true,
      className: {
        thumb: "translate-x-[20px]",
      },
    },
    {
      size: "md",
      checked: true,
      className: {
        thumb: "translate-x-[24px]",
      },
    },
    {
      size: "lg",
      checked: true,
      className: {
        thumb: "translate-x-[30px]",
      },
    },
    {
      size: "xl",
      checked: true,
      className: {
        thumb: "translate-x-[36px]",
      },
    },
    {
      size: "2xl",
      checked: true,
      className: {
        thumb: "translate-x-[48px]",
      },
    },
  ],
  defaultVariants: {
    size: "md",
    checked: false,
    disabled: false,
  },
});
