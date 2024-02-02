import { bgColorVariants, viewVariant } from "@/budge-ui-styling/src/theme/BudgeBaseVariants";
import { tv } from "tailwind-variants";

export const buttonVariant = tv({
  extend: viewVariant,
  slots: {
    base: "rounded-md items-center flex-row gap-1",
    text: "",
    icon: ""
  },
  variants: {
    size: {
      xs: {
        base: "px-2 py-1",
        text: "text-sm",
        icon: "w-4 h-4"
      },
      sm: {
        base: "px-3 py-1.5",
        text: "text-sm",
        icon: "w-5 h-5"
      },
      md: {
        base: "px-3.5 py-2",
        text: "text-base",
        icon: "w-5 h-5"
      },
      lg: {
        base: "px-5 py-2.5",
        text: "text-lg",
        icon: "w-6 h-6"
      },
    },
    variant: {
      filled: "",
      light: "",
      outlined: "",
      subtle: "",
      default: "",
      defaultBordered: "",
    },
    withIcon: {
      left: "",
      right: ""
    },
    color: bgColorVariants,
  },
  compoundVariants: [
    // With Left Icon
    {
      size: "xs",
      withIcon: "left",
      className: {
        base: "pl-1.5"
      }
    },
    {
      size: "sm",
      withIcon: "left",
      className: {
        base: "pl-2"
      }
    },
    {
      size: "md",
      withIcon: "left",
      className: {
        base: "pl-2.5"
      }
    },
    {
      size: "lg",
      withIcon: "left",
      className: {
        base: "pl-3.5"
      }
    },
    // With Right Icon
    {
      size: "xs",
      withIcon: "right",
      className: {
        base: "pr-1.5"
      }
    },
    {
      size: "sm",
      withIcon: "right",
      className: {
        base: "pr-2"
      }
    },
    {
      size: "md",
      withIcon: "right",
      className: {
        base: "pr-2.5"
      }
    },
    {
      size: "lg",
      withIcon: "right",
      className: {
        base: "pr-3.5"
      }
    },
    // Default
    {
      variant: "default",
      className: {
        base: "bg-gray-2 border border-gray-2 active:bg-gray-3 hover:bg-gray-3 hover:border-gray-3",
        text: "text-default",
        icon: "fill-dark"
      },
    },
    {
      variant: "defaultBordered",
      className: {
        base: "bg-white border border-dark-2 active:bg-gray-1 hover:bg-gray-0",
        text: "text-dark",
        icon: "fill-dark"
      },
    },
    // Primary
    {
      variant: "filled",
      color: ["primary", "purple"],
      className: {
        base: "bg-primary border border-primary active:bg-primary-7 active:border-primary-7 hover:bg-primary-6 hover:border-primary-6",
        text: "text-white",
        icon: "fill-white"
      },
    },
    {
      variant: "light",
      color: ["primary", "purple"],
      className: {
        base: "bg-primary-1 border border-primary-1 active:border-primary-2 active:bg-primary-2 hover:bg-primary-1 hover:border-primary-1",
        text: "text-primary",
        icon: "fill-primary"
      },
    },
    {
      variant: "outlined",
      color: ["primary", "purple"],
      className: {
        base: "bg-white border border-primary active:bg-primary-1 hover:bg-primary-0",
        text: "text-primary",
        icon: "fill-primary"
      },
    },
    {
      variant: "subtle",
      color: ["primary", "purple"],
      className: {
        base: "bg-white border border-transparent active:border-primary-1 active:bg-primary-1 hover:bg-primary-0 hover:border-primary-0",
        text: "text-primary",
        icon: "fill-primary"
      },
    },
    // Red
    {
      variant: "filled",
      color: ["red", "error"],
      className: {
        base: "bg-red border border-red active:bg-red-7 active:border-red-7 hover:bg-red-6 hover:border-red-6",
        text: "text-white",
        icon: "fill-white"
      },
    },
    {
      variant: "light",
      color: ["red", "error"],
      className: {
        base: "bg-red-1 border border-red-1 active:border-red-2 active:bg-red-2 hover:bg-red-1 hover:border-red-1",
        text: "text-red",
        icon: "fill-red"
      },
    },
    {
      variant: "outlined",
      color: ["red", "error"],
      className: {
        base: "bg-white border border-red active:bg-red-1 hover:bg-red-0",
        text: "text-red",
        icon: "fill-red"
      },
    },
    {
      variant: "subtle",
      color: ["red", "error"],
      className: {
        base: "bg-white border border-transparent active:border-red-1 active:bg-red-1 hover:bg-red-0 hover:border-red-0",
        text: "text-red",
        icon: "fill-red"
      },
    },
    // green
    {
      variant: "filled",
      color: ["green", "success"],
      className: {
        base: "bg-green border border-green active:bg-green-7 active:border-green-7 hover:bg-green-6 hover:border-green-6",
        text: "text-white",
        icon: "fill-white"
      },
    },
    {
      variant: "light",
      color: ["green", "success"],
      className: {
        base: "bg-green-1 border border-green-1 active:border-green-2 active:bg-green-2 hover:bg-green-1 hover:border-green-1",
        text: "text-green",
        icon: "fill-green"
      },
    },
    {
      variant: "outlined",
      color: ["green", "success"],
      className: {
        base: "bg-white border border-green active:bg-green-1 hover:bg-green-0",
        text: "text-green",
        icon: "fill-green"
      },
    },
    {
      variant: "subtle",
      color: ["green", "success"],
      className: {
        base: "bg-white border border-transparent active:border-green-1 active:bg-green-1 hover:bg-green-0 hover:border-green-0",
        text: "text-green",
        icon: "fill-green"
      },
    },
    // blue
    {
      variant: "filled",
      color: ["blue", "info"],
      className: {
        base: "bg-blue border border-blue active:bg-blue-7 active:border-blue-7 hover:bg-blue-6 hover:border-blue-6",
        text: "text-white",
        icon: "fill-white"
      },
    },
    {
      variant: "light",
      color: ["blue", "info"],
      className: {
        base: "bg-blue-1 border border-blue-1 active:border-blue-2 active:bg-blue-2 hover:bg-blue-1 hover:border-blue-1",
        text: "text-blue",
        icon: "fill-blue"
      },
    },
    {
      variant: "outlined",
      color: ["blue", "info"],
      className: {
        base: "bg-white border border-blue active:bg-blue-1 hover:bg-blue-0",
        text: "text-blue",
        icon: "fill-blue"
      },
    },
    {
      variant: "subtle",
      color: ["blue", "info"],
      className: {
        base: "bg-white border border-transparent active:border-blue-1 active:bg-blue-1 hover:bg-blue-0 hover:border-blue-0",
        text: "text-blue",
        icon: "fill-blue"
      },
    },
    // orange
    {
      variant: "filled",
      color: "orange",
      className: {
        base: "bg-orange border border-orange active:bg-orange-7 active:border-orange-7 hover:bg-orange-6 hover:border-orange-6",
        text: "text-white",
        icon: "fill-white"
      },
    },
    {
      variant: "light",
      color: "orange",
      className: {
        base: "bg-orange-1 border border-orange-1 active:border-orange-2 active:bg-orange-2 hover:bg-orange-1 hover:border-orange-1",
        text: "text-orange",
        icon: "fill-orange"
      },
    },
    {
      variant: "outlined",
      color: "orange",
      className: {
        base: "bg-white border border-orange active:bg-orange-1 hover:bg-orange-0",
        text: "text-orange",
        icon: "fill-orange"
      },
    },
    {
      variant: "subtle",
      color: "orange",
      className: {
        base: "bg-white border border-transparent active:border-orange-1 active:bg-orange-1 hover:bg-orange-0 hover:border-orange-0",
        text: "text-orange",
        icon: "fill-orange"
      },
    },
    // black
    {
      variant: "filled",
      color: "black",
      className: {
        base: "bg-black border border-black active:bg-black-7 active:border-black-7 hover:bg-black-6 hover:border-black-6",
        text: "text-white",
        icon: "fill-white"
      },
    },
    {
      variant: "light",
      color: "black",
      className: {
        base: "bg-black-1 border border-black-1 active:border-black-2 active:bg-black-2 hover:bg-black-1 hover:border-black-1",
        text: "text-black",
        icon: "fill-black"
      },
    },
    {
      variant: "outlined",
      color: "black",
      className: {
        base: "bg-white border border-black active:bg-black-1 hover:bg-black-0",
        text: "text-black",
        icon: "fill-black"
      },
    },
    {
      variant: "subtle",
      color: "black",
      className: {
        base: "bg-white border border-transparent active:border-black-1 active:bg-black-1 hover:bg-black-0 hover:border-black-0",
        text: "text-black",
        icon: "fill-black"
      },
    },
    // yellow
  {
    variant: "filled",
    color: ["yellow", "warning"],
    className: {
      base: "bg-yellow border border-yellow active:bg-yellow-7 active:border-yellow-7 hover:bg-yellow-6 hover:border-yellow-6",
      text: "text-white",
      icon: "fill-white"
    },
  },
  {
    variant: "light",
    color: ["yellow", "warning"],
    className: {
      base: "bg-yellow-1 border border-yellow-1 active:border-yellow-2 active:bg-yellow-2 hover:bg-yellow-1 hover:border-yellow-1",
      text: "text-yellow",
      icon: "fill-yellow"
    },
  },
  {
    variant: "outlined",
    color: ["yellow", "warning"],
    className: {
      base: "bg-white border border-yellow active:bg-yellow-1 hover:bg-yellow-0",
      text: "text-yellow",
      icon: "fill-yellow"
    },
  },
  {
    variant: "subtle",
    color: ["yellow", "warning"],
    className: {
      base: "bg-white border border-transparent active:border-yellow-1 active:bg-yellow-1 hover:bg-yellow-0 hover:border-yellow-0",
      text: "text-yellow",
      icon: "fill-yellow"
    },
  },
  // water
  {
    variant: "filled",
    color: "water",
    className: {
      base: "bg-water border border-water active:bg-water-7 active:border-water-7 hover:bg-water-6 hover:border-water-6",
      text: "text-white",
      icon: "fill-white"
    },
  },
  {
    variant: "light",
    color: "water",
    className: {
      base: "bg-water-1 border border-water-1 active:border-water-2 active:bg-water-2 hover:bg-water-1 hover:border-water-1",
      text: "text-water",
      icon: "fill-water"
    },
  },
  {
    variant: "outlined",
    color: "water",
    className: {
      base: "bg-white border border-water active:bg-water-1 hover:bg-water-0",
      text: "text-water",
      icon: "fill-water"
    },
  },
  {
    variant: "subtle",
    color: "water",
    className: {
      base: "bg-white border border-transparent active:border-water-1 active:bg-water-1 hover:bg-water-0 hover:border-water-0",
      text: "text-water",
      icon: "fill-water"
    },
  },
  // gray
  {
    variant: "filled",
    color: "gray",
    className: {
      base: "bg-gray border border-gray active:bg-gray-7 active:border-gray-7 hover:bg-gray-6 hover:border-gray-6",
      text: "text-white",
      icon: "fill-white"
    },
  },
  {
    variant: "light",
    color: "gray",
    className: {
      base: "bg-gray-1 border border-gray-1 active:border-gray-2 active:bg-gray-2 hover:bg-gray-1 hover:border-gray-1",
      text: "text-gray",
      icon: "fill-gray"
    },
  },
  {
    variant: "outlined",
    color: "gray",
    className: {
      base: "bg-white border border-gray active:bg-gray-1 hover:bg-gray-0",
      text: "text-gray",
      icon: "fill-gray"
    },
  },
  {
    variant: "subtle",
    color: "gray",
    className: {
      base: "bg-white border border-transparent active:border-gray-1 active:bg-gray-1 hover:bg-gray-0 hover:border-gray-0",
      text: "text-gray",
      icon: "fill-gray"
    },
  },
  // dark
  {
    variant: "filled",
    color: "dark",
    className: {
      base: "bg-dark border border-dark active:bg-dark-7 active:border-dark-7 hover:bg-dark-6 hover:border-dark-6",
      text: "text-white",
      icon: "fill-white"
    },
  },
  {
    variant: "light",
    color: "dark",
    className: {
      base: "bg-dark-1 border border-dark-1 active:border-dark-2 active:bg-dark-2 hover:bg-dark-1 hover:border-dark-1",
      text: "text-dark",
      icon: "fill-dark"
    },
  },
  {
    variant: "outlined",
    color: "dark",
    className: {
      base: "bg-white border border-dark active:bg-dark-1 hover:bg-dark-0",
      text: "text-dark",
      icon: "fill-dark"
    },
  },
  {
    variant: "subtle",
    color: "dark",
    className: {
      base: "bg-white border border-transparent active:border-dark-1 active:bg-dark-1 hover:bg-dark-0 hover:border-dark-0",
      text: "text-dark",
      icon: "fill-dark"
    },
  },
  ],
  defaultVariants: {
    variant: "default",
    color: "primary",
    size: "lg",
  },
});
